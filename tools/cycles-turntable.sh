#!/bin/zsh
# tools/cycles-turntable.sh <model.ldr|named> <id> [frames=24]: a turntable rendered with the text-to-lego studio renderer (Blender Cycles,
# same lights and exposure as the stills), assembled into builds/turntables/<id>.gif. Run from this repo; T2L points at the text-to-lego checkout.
set -e
T2L=${T2L:-$HOME/dev/coding/text-to-lego}; model=$1; id=$2; n=${3:-24}; out=$PWD/builds/turntables; tmp=/tmp/cyc-$id
rm -rf $tmp; mkdir -p $tmp $out
for i in $(seq 0 $((n-1))); do
  az=$(( (30 + 360 * i / n) % 360 ))
  for t in 1 2 3; do  # a Metal 'victim of GPU recovery' error is transient: retry the frame
    (cd $T2L && pnpm -s render:studio $model --az $az --el 28 --width 800 --height 500 --samples 64 --exposure 0.3 --allow-missing --out $tmp/f$(printf %03d $i).png >/dev/null 2>&1) && break
  done
  [ -f $tmp/f$(printf %03d $i).png ] || { echo "frame $i failed"; exit 1; }
done
ffmpeg -loglevel error -y -framerate 8 -i $tmp/f%03d.png -vf 'scale=560:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=192:stats_mode=diff[p];[b][p]paletteuse=dither=bayer:bayer_scale=4:diff_mode=rectangle' -loop 0 $out/$id.gif
echo "$out/$id.gif $(du -h $out/$id.gif | cut -f1)"
