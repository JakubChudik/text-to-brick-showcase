#!/bin/zsh
# tools/cycles-turntable.sh <model.ldr> <id> [frames=144]: a slow turntable of a model, rendered with the text-to-lego studio renderer (Blender Cycles, the same studio sweep,
# lights and calibrated exposure as the stills), assembled into builds/turntables/<id>.mp4 (H.264, web-friendly, faststart) and builds/turntables/<id>.gif (a lighter preview for the README).
# Since text-to-lego sprint 29 (docs/perf/render-efficiency-2026-10-31.md) the defaults are the renderer's `turntable` plan: the `showcase` tier = Cycles on the CPU (4 threads, nice 10, an 8 GB cap, NO GPU unless
# T2L_RENDER_GPU=1), 8 samples + OpenImageDenoise at 1280 x 800, and only every 3rd frame is rendered (STEP=3: 48 renders for 144 frames); ffmpeg interpolates the frames in between and closes the loop.
# Run from this repo; T2L points at the text-to-lego checkout (node_modules installed, Blender at /Applications/Blender.app).
# ONE Blender process renders every frame (import and shaders once; a Metal GPU error relaunches Blender for the frames not yet drawn only), and tools/studio-shots.mjs keeps ONE camera
# distance and target for the whole turn (the box is fitted over every azimuth, so the model does not breathe in and out as it turns). One full 360 degree turn lasts frames / FPS seconds.
# Environment: FPS (12: 144 frames = 12 s a turn)  WIDTH x HEIGHT (1280 x 800)  SAMPLES (8, then denoised)  EL (28, camera elevation)  AZ (30, first frame)
#              QUALITY=showcase|preview|final|fast (showcase: the default; final: Cycles 512 samples, 30x the work; fast: EEVEE, the quick look, a different look from the stills)
#              STEP=3 (render every 3rd frame, interpolate the rest; 1 = render every frame)  INTERP=mci|blend (ffmpeg minterpolate with motion compensation, or a plain cross-fade)
#              RESUME=1 (keep the frames already in $TMPDIR/cyc-<id>: a turntable cut short is finished, not redone)  GIF_WIDTH (480)  GIF_STEP (2: every 2nd frame, 6 fps)  GIF_COLORS (128)  KEEP=1 (keep the frames in $TMPDIR/cyc-<id>)
set -e
T2L=${T2L:-$HOME/dev/coding/text-to-lego}; model=$1; id=$2; n=${3:-144}
[ -n "$model" ] && [ -n "$id" ] || { sed -n 2,3p $0; exit 2; }
here=$PWD; out=$here/builds/turntables; tmp=${TMPDIR:-/tmp}/cyc-$id
fps=${FPS:-12}; step=${GIF_STEP:-2}; gw=${GIF_WIDTH:-480}; gc=${GIF_COLORS:-128}
[ -d /opt/homebrew/opt/node@24/bin ] && export PATH=/opt/homebrew/opt/node@24/bin:$PATH
case $model in /*) ;; *) model=$here/$model ;; esac
[ -f $model ] || { echo "no such model: $model"; exit 1; }
[ -n "$RESUME" ] || rm -rf $tmp; mkdir -p $tmp $out; rm -f $tmp/f[0-9]*.png(N); rm -rf $tmp/gif
kstep=${STEP:-3}; [ $((n % kstep)) -eq 0 ] || { echo "STEP=$kstep must divide the $n frames"; exit 2; }; want=$((n / kstep))
q=(--width ${WIDTH:-1280} --height ${HEIGHT:-800} --samples ${SAMPLES:-8} --quality ${QUALITY:-showcase} --step $kstep)
# the GPU is shared with whatever else runs on the Mac and now and then drops a launch: start again for the frames that are missing (up to 8 times)
for attempt in 1 2 3 4 5 6 7 8; do
  (cd $T2L && T2L=$T2L node_modules/.bin/tsx $here/tools/studio-shots.mjs $model --out-dir $tmp --turntable $n --az ${AZ:-30} --el ${EL:-28} --fill 0.95 --skip-existing $q >>$tmp/render.log 2>&1) && break
  [ $attempt -lt 8 ] || { grep -v "Error Domain\|NSLocal" $tmp/render.log | tail -20; echo "turntable render failed"; exit 1; }
done
grep -E "^turntable|^done" $tmp/render.log | tail -3
# key frames are turn000.png, turn003.png, ... (every STEP-th): every one must be there and a real picture
for f in $tmp/turn[0-9][0-9][0-9].png; do [ $(stat -f %z $f) -gt 20000 ] || { echo "frame $f is too small: not a finished picture"; exit 1; }; done
keys=($(ls $tmp/turn[0-9][0-9][0-9].png | sort)); [ ${#keys} -eq $want ] || { echo "expected $want key frames, found ${#keys}"; exit 1; }
if [ $kstep -eq 1 ]; then i=0; for f in $keys; do ln -s $f $tmp/f$(printf %03d $i).png; i=$((i+1)); done
else
  # the in-between frames: ffmpeg's motion-compensated interpolation from the key frames (the first key frame is repeated twice at the end: the loop closes, and minterpolate drops the last interval's frames), n frames out, numbered from 0
  mkdir -p $tmp/key; i=0; for f in $keys $keys[1] $keys[1]; do ln -sf $f $tmp/key/k$(printf %03d $i).png; i=$((i+1)); done
  if [ "${INTERP:-mci}" = blend ]; then ip="framerate=fps=$fps:interp_start=0:interp_end=255:scene=100"; else ip="minterpolate=fps=$fps:mi_mode=mci:mc_mode=aobmc:me_mode=bidir:vsbmc=1"; fi
  ffmpeg -loglevel error -y -framerate $((fps / kstep)) -i $tmp/key/k%03d.png -vf "$ip" -frames:v $n -start_number 0 $tmp/f%03d.png
  [ $(ls $tmp/f[0-9][0-9][0-9].png | wc -l) -eq $n ] || { echo "interpolation made $(ls $tmp/f[0-9][0-9][0-9].png | wc -l) frames, expected $n"; exit 1; }
fi
# the video: H.264 yuv420p, even sides, the moov atom first (plays while it downloads)
ffmpeg -loglevel error -y -framerate $fps -i $tmp/f%03d.png -vf 'scale=trunc(iw/2)*2:trunc(ih/2)*2:flags=lanczos' -c:v libx264 -preset slow -crf 19 -pix_fmt yuv420p -movflags +faststart $out/$id.mp4
# the preview: every GIF_STEP-th frame, GIF_WIDTH wide, one shared palette
mkdir -p $tmp/gif; j=0; for k in $(seq 0 $step $((n-1))); do ln -s $tmp/f$(printf %03d $k).png $tmp/gif/g$(printf %03d $j).png; j=$((j+1)); done
ffmpeg -loglevel error -y -framerate $(echo "scale=4; $fps / $step" | bc) -i $tmp/gif/g%03d.png -vf "scale=${gw}:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=${gc}:stats_mode=diff[p];[b][p]paletteuse=dither=bayer:bayer_scale=5:diff_mode=rectangle" -loop 0 $out/$id.gif
echo "$out/$id.mp4 $(du -h $out/$id.mp4 | cut -f1), $out/$id.gif $(du -h $out/$id.gif | cut -f1)"
[ -n "$KEEP" ] || rm -rf $tmp
