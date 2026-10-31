// tools/studio-shots.mjs: the cameras of one model, drawn in ONE Blender launch by the text-to-lego studio renderer (Cycles, same studio sweep, lights,
// colours, bevels and exposure as `pnpm render:studio`). Since text-to-lego sprint 29 (docs/perf/render-efficiency-2026-10-31.md) it draws the `showcase` tier by default: Cycles on the CPU
// (4 threads, nice 10, an 8 GB cap, never the GPU unless T2L_RENDER_GPU=1), denoised, 2400 x 1500 for a still and 1280 x 800 for a turntable frame; the sizes and samples come from the renderer's own
// plan for the use (`planFor('still' | 'turntable')`), so they follow it. It adds two things render:studio has no flag for:
//   * close-ups with their own direction and zoom: a point of the model (studs, plates, studs: x right, y up, z toward the front) and the height of the picture in studs;
//   * a turntable whose camera keeps ONE distance and ONE target for every frame (render:studio --turntable refits the box per frame, so a long model breathes in and out).
// Run it with the checkout's tsx (T2L = the text-to-lego checkout, default ~/dev/coding/text-to-lego):
//   $T2L/node_modules/.bin/tsx tools/studio-shots.mjs MODEL.ldr --out-dir DIR --stills shots.json [--only name,name] [--width 2400 --height 1500 --samples 24]
//   $T2L/node_modules/.bin/tsx tools/studio-shots.mjs MODEL.ldr --out-dir DIR --turntable 144 [--az 30 --el 28 --width 1280 --height 800 --samples 96]
// shots.json: { "shots": [ { "name": "front", "az": 330, "el": 28 },                                     // the whole model, fitted, seen from azimuth az, elevation el
//                          { "name": "gladiators", "at": [41, 4, 57], "span": 16, "az": 330, "el": 24 } ] } // a close-up: look at (x, y plates, z), 16 studs tall
// Pictures: <out-dir>/<name>.png (a turntable: turn000.png ...). Backdrop 'auto' (a near-black sweep for a mostly white model), exposure = the renderer's calibrated default (packages/render/src/calibration.ts; --exposure overrides it).
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { parseArgs } from 'node:util';

const T2L = resolve(process.env.T2L ?? `${process.env.HOME}/dev/coding/text-to-lego`);
const { readModelText, loadStdPack, universalPackFor, prepareStudio, runStudio, cameraPreset, planFor, LDU_TO_M } = await import(`${T2L}/packages/render/src/index.ts`);

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: { 'out-dir': { type: 'string' }, stills: { type: 'string' }, only: { type: 'string' }, turntable: { type: 'string' }, az: { type: 'string' }, el: { type: 'string' }, fov: { type: 'string' },
    width: { type: 'string' }, height: { type: 'string' }, samples: { type: 'string' }, quality: { type: 'string' }, exposure: { type: 'string' }, backdrop: { type: 'string' }, fill: { type: 'string' }, margin: { type: 'string' }, 'skip-existing': { type: 'boolean' }, step: { type: 'string' } },
});
if (positionals.length !== 1 || !values['out-dir'] || (!values.stills && !values.turntable)) { console.error(readFileSync(new URL(import.meta.url), 'utf8').split('\n').slice(0, 14).join('\n')); process.exit(2); }
const modelPath = resolve(positionals[0]), outDir = resolve(values['out-dir']);
const num = (v, d) => (v === undefined ? d : Number(v));
const use = planFor(values.turntable ? 'turntable' : 'still');         // the renderer's own default tier, size and samples for this use (and the device: the CPU for Cycles)
const quality = values.quality ?? use.quality;
const width = num(values.width, use.width), height = num(values.height, use.height), aspect = width / height;
const step = num(values.step, 1);
const DEG = Math.PI / 180;
const sub = (a, b) => a.map((v, k) => v - b[k]), dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const unit = (a) => { const l = Math.hypot(...a); return a.map((v) => v / l); };
const dirOf = (az, el) => [Math.sin(az * DEG) * Math.cos(el * DEG), Math.sin(el * DEG), Math.cos(az * DEG) * Math.cos(el * DEG)];   // from the target toward the camera (model frame, y up)
const toWorld = ([x, yPlates, z]) => [x * 20 * LDU_TO_M, yPlates * 8 * LDU_TO_M, z * 20 * LDU_TO_M];                               // studs, plates, studs -> metres
function cam(target, dir, dist, vfov, fStop = 5.6) {
  const hfov = 2 * Math.atan(Math.tan((vfov * DEG) / 2) * aspect);
  return { name: 'custom', position: target.map((t, k) => t + dist * dir[k]), target, fovDeg: vfov, lensMm: 36 / 2 / Math.tan(hfov / 2), focusDistance: dist, fStop };
}

const model = readModelText(readFileSync(modelPath, 'utf8'), modelPath, { poses: true });
if (model.issues.length) throw new Error(`model has unreadable lines: ${model.issues.slice(0, 5).join('; ')}`);
const uni = universalPackFor(model.bricks, loadStdPack(), { allowMissing: true });
const drawn = model.bricks.filter((b) => uni.pack.parts.has(b.part));
if (uni.missing.length) console.log(`NOT DRAWN: ${uni.missing.map((m) => `${m.id} (${m.reason})`).join('; ')}`);

// the views: [{ name, fit?: {az, el, fov}, camera?: (bounds in metres) => camera }]
const vfovDefault = num(values.fov, 24);
let plan = [];
if (values.stills) {
  const spec = JSON.parse(readFileSync(resolve(values.stills), 'utf8'));
  const only = values.only ? new Set(values.only.split(',')) : null;
  plan = spec.shots.filter((s) => !only || only.has(s.name)).map((s) => ({ name: s.name, shot: s }));
  if (only) for (const n of only) if (!plan.some((p) => p.name === n)) throw new Error(`no shot named ${n}`);
} else {
  const n = Number(values.turntable);
  if (!Number.isInteger(n) || n < 2 || n > 1440) throw new Error('--turntable needs a whole number of frames, 2..1440');
  plan = Array.from({ length: n }, (_, i) => ({ name: `turn${String(i).padStart(3, '0')}`, turn: { i, n } }));
}
mkdirSync(outDir, { recursive: true });
// --skip-existing: draw only the pictures that are not there yet (a run that was cut short by the GPU is simply started again)
const total = plan.length;                                  // a turntable: the frames of the WHOLE turn (the camera is fitted over all of them)
if (values.turntable && step > 1) plan = plan.filter((p) => p.turn.i % step === 0);       // --step K: only every K-th frame is drawn, the video interpolates the rest
const wanted = plan.length;
if (values['skip-existing']) {
  plan = plan.filter((p) => { const f = join(outDir, `${p.name}.png`); return !(existsSync(f) && statSync(f).size > 20000); });
  console.log(`${wanted - plan.length} of ${wanted} pictures already there, ${plan.length} to draw`);
  if (!plan.length) process.exit(0);
}
const work = join(outDir, '.work');
const prep = prepareStudio({
  bricks: drawn, pack: uni.pack, name: 'shots', preset: 'hero', width, height, samples: num(values.samples, quality === use.quality ? use.samples : undefined), quality, exposure: num(values.exposure, undefined), backdrop: values.backdrop ?? 'auto',
  views: plan.map((p) => ({ name: p.name, preset: 'hero', view: { azDeg: p.shot?.az, elDeg: p.shot?.el, fovDeg: p.shot?.fov ?? vfovDefault }, out: join(outDir, `${p.name}.png`) })), out: join(outDir, 'unused.png'), workDir: work,
});
const scene = JSON.parse(readFileSync(prep.sceneJsonPath, 'utf8'));
const bm = scene.bounds;                                  // metres, the model frame
const bounds = { min: bm.min.map((v) => v / LDU_TO_M), max: bm.max.map((v) => v / LDU_TO_M) };   // LDU, as cameraPreset wants
const centre = [0, 1, 2].map((k) => (bm.min[k] + bm.max[k]) / 2);
const corners = []; for (const x of [bm.min[0], bm.max[0]]) for (const y of [bm.min[1], bm.max[1]]) for (const z of [bm.min[2], bm.max[2]]) corners.push([x, y, z]);

/** the smallest distance at which every corner is inside the frame (a fraction `fill` of it) for every turntable azimuth, with the target at (centre, y) */
function turnFit(y, azs, el, vfov, fill) {
  const hfov = 2 * Math.atan(Math.tan((vfov * DEG) / 2) * aspect), tx = Math.tan(hfov / 2) * fill, ty = Math.tan((vfov * DEG) / 2) * fill;
  const T = [centre[0], y, centre[2]]; let D = 0;
  for (const az of azs) {
    const f = dirOf(az, el).map((v) => -v), right = unit(cross(f, [0, 1, 0])), up = cross(right, f);
    for (const c of corners) { const v = sub(c, T), vf = dot(v, f); D = Math.max(D, Math.abs(dot(v, right)) / tx - vf, Math.abs(dot(v, up)) / ty - vf); }
  }
  return { T, D };
}
let turnCam = null;
if (values.turntable) {
  const n = total, az0 = num(values.az, 30), el = num(values.el, 28), fill = num(values.fill, 0.9);
  const azs = Array.from({ length: n }, (_, i) => (az0 + (360 * i) / n) % 360);
  let lo = bm.min[1] - (bm.max[1] - bm.min[1]), hi = bm.max[1] + (bm.max[1] - bm.min[1]);           // the target height that needs the smallest distance: the cost is convex in it
  for (let k = 0; k < 60; k++) { const a = lo + (hi - lo) / 3, b = hi - (hi - lo) / 3; if (turnFit(a, azs, el, vfovDefault, fill).D < turnFit(b, azs, el, vfovDefault, fill).D) hi = b; else lo = a; }
  const { T, D } = turnFit((lo + hi) / 2, azs, el, vfovDefault, fill);
  turnCam = { T, D, azs, el };
  console.log(`turntable: ${n} frames, one distance ${D.toFixed(3)} m, target ${T.map((v) => v.toFixed(3)).join(', ')}, elevation ${el}`);
}
scene.views = scene.views.map((v, i) => {
  const p = plan[i];
  let camera;
  if (p.turn) camera = cam(turnCam.T, dirOf(turnCam.azs[p.turn.i], turnCam.el), turnCam.D, vfovDefault);
  else if (p.shot.at) {
    const s = p.shot, fov = s.fov ?? 24, target = toWorld(s.at), dist = (s.span * 20 * LDU_TO_M / 2) / Math.tan((fov * DEG) / 2);   // span = the height of the picture at the target, in studs
    camera = cam(target, dirOf(s.az, s.el), dist, fov);
  } else camera = cameraPreset('hero', bounds, aspect, { margin: p.shot.margin ?? num(values.margin, 1), view: { azDeg: p.shot.az, elDeg: p.shot.el, fovDeg: p.shot.fov ?? vfovDefault } });   // margin > 1 lets the empty corners of the model's box fall outside the frame
  return { ...v, camera };
});
scene.camera = scene.views[0].camera;
writeFileSync(prep.sceneJsonPath, JSON.stringify(scene, null, 1));
console.log(`${model.bricks.length} bricks (${prep.placed} placed, ${prep.enclosed} enclosed), backdrop ${prep.backdrop}, ${scene.views.length} views, ${width}x${height}, ${scene.render.samples} samples, ${quality}`);
const t0 = Date.now();
// The default device is the CPU (text-to-lego sprint 29: Cycles on the GPU needed a relaunch in 18 of 124 ledger calls and drives the GPU to 100 %), where this loop never fires.
// With T2L_RENDER_GPU=1 a Metal 'victim of GPU error' can kill a launch: runStudio relaunches Blender for the pictures not yet written (each launch keeps what it finished), at most 4 times
// (it was 80), and a launch that makes no progress at all ends the run.
let lastPending = -1, stuck = 0;
const run = await runStudio(prep, { maxRetries: 4, fallback: false,
  onRetry: (r) => {
    console.log(`  [relaunch ${r.attempt}] ${r.pending} picture(s) left: ${r.reason.slice(0, 90)}`);
    stuck = r.pending === lastPending ? stuck + 1 : 0; lastPending = r.pending;
    if (stuck >= 12) throw new Error(`the GPU made no progress in 13 launches (${r.pending} pictures left): try again when the Mac is quieter`);
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 15000);     // give the GPU 15 s to recover from whoever else was using it
  },
  onLine: (l) => { const m = /view (\d+)\/(\d+) (\S+) start/.exec(l); if (m) { if (!values.turntable || Number(m[1]) % 12 === 1) console.log(`  ${l}`); } else if (/Traceback|FALLBACK/.test(l)) console.log(`  ${l}`); } });
const ws = run.views.map((v) => Number(v.renderSeconds ?? 0));
console.log(`done: ${scene.views.length} pictures in ${((Date.now() - t0) / 1000).toFixed(0)} s (render ${(ws.reduce((a, b) => a + b, 0) / ws.length).toFixed(1)} s per picture; ${run.attempts} Blender launch(es); ${run.path.join(' > ')})`);
