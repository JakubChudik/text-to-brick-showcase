# text-to-brick: seven builds

Seven models from **text-to-brick**, a research project that turns a description into a brick model you can actually build. Each model is made only of real LEGO® parts from the LDraw library and comes as a step-ordered LDraw file, a slow turntable, stills from four sides, close-ups of its small scenes, and an interactive 3D view.

**[▶ Open every model in interactive 3D](https://jakubchudik.github.io/text-to-brick-showcase/)**: drag to orbit, scroll to zoom, in the browser.

> Independent, non-commercial fan project. Not affiliated with, sponsored or endorsed by the LEGO Group. LEGO® is a trademark of the LEGO Group. The models use the community LDraw parts library (CC BY 4.0 / CC BY 2.0).

| | | | |
|:--:|:--:|:--:|:--:|
| [![Amon Sûl (Weathertop)](builds/01-amon-sul/thumb.jpg)](#amon-sul)<br>**Amon Sûl (Weathertop)**<br>6,041 parts | [![The Colosseum](builds/02-colosseum/thumb.jpg)](#colosseum)<br>**The Colosseum**<br>10,615 parts | [![Spiš Castle](builds/03-spis-castle/thumb.jpg)](#spis-castle)<br>**Spiš Castle**<br>6,588 parts | [![Orthanc](builds/04-orthanc/thumb.jpg)](#orthanc)<br>**Orthanc**<br>7,223 parts |
| [![Ministry of Magic](builds/05-ministry-of-magic/thumb.jpg)](#ministry-of-magic)<br>**Ministry of Magic**<br>5,216 parts | [![Neuschwanstein](builds/06-neuschwanstein/thumb.jpg)](#neuschwanstein)<br>**Neuschwanstein**<br>7,780 parts | [![Samoyed](builds/07-samoyed/thumb.jpg)](#samoyed)<br>**Samoyed**<br>3,854 parts |  |

## What makes these builds different

![Buildable, not just pretty · Scenes full of stories · Taste that compounds · Ready to build at home](docs/img/value.svg)

## How they are made

![From a sentence to a buildable set: plan the scene, build and review one piece at a time, then assemble, prove and publish](docs/img/process.svg)

What we learned getting here:

- **Small pieces beat whole scenes.** Building a big scene in one go never got past "almost". Building each part on its own, reviewing it, and reworking only what was flagged gets to a result the owner keeps in one or two rounds.
- **Check before you build.** Fit, balance, colours and visibility are checked in seconds before a model is built, so a mistake costs seconds instead of minutes.
- **Proven beats generated.** Against a leading AI model writing the bricks directly, these builds won 7 of 9 blind comparisons.
- **Every review compounds.** Each verdict becomes a rule, a reusable recipe or a check, so the next set starts better than the last.

## What a great set has to get right

A model that only looks good in a render is easy. A set someone wants to build has to get several things right at once, and they pull against each other. The tower is what we optimise: the blue bricks are gates a build must pass before anything else counts, the red and yellow ones are what we push as far as we can, and the numbers are the order we settle trade-offs in. Each row says how it is checked, and why, in the owner's own words from the reviews.

![What we optimise: recognisable and lifelike; a moment in scenes within scenes; a place good from every side; consistent but varied; fun to build; on gates of structurally sound and buildable; on a baseplate of cost](docs/img/goals.svg)

**Simple on the outside, a lot of machinery inside.** Each round asks one person one question: *which of these two would you rather build?* Everything a machine can judge is judged before that, in seconds and minutes, so a person's attention is only spent on what a machine cannot see. Every answer is kept and turned into a rule, a check or a reusable recipe, so the next set starts where the last one ended.

![The optimisation loop: a candidate, hard gates in seconds, scores and a critic in minutes, a blind pick by the owner; redo rebuilds only that piece, and the owner's words become rules, checks and recipes](docs/img/loop.svg)

Where the goals pull against each other, and how we settle it:

- **Lifelike against sturdy.** The look the owner prefers sometimes costs strength: thin spires, posed figures, parts held on one stud. Likeness ranks first, but a build that fails the table test does not ship, so the fix is a different technique, never a weaker check.
- **More stories against the part budget.** Every new little scene takes room and parts from something else. Once a new cart pushed out several of the small houses whose scale the owner had praised. New scenes are capped (at most +10 % parts) and must not cost what already won.
- **Colourful against calm.** More colours read as richer until they read as noise. The number of colours is capped by the size of the set, measured on official sets, and a white dog stays white even though it scores "too plain".
- **New against better.** A version that adds features can still lose: Orthanc v4 added fires, Saruman and back scenes, and lost to v3 on *"much better ents and overal[l] composition"*. Each new version is compared blind with the one before it, and what won before is checked first.

Why build in small pieces: 17 attempts to improve whole scenes in one go never reached "acceptable"; single pieces built and reviewed alone got there in two rounds in six cases of seven.

## How to open the models

Every `.ldr` file is a standard [LDraw](https://www.ldraw.org/) model with building steps. It opens in **BrickLink Studio**, **LeoCAD** or **LDView** with every part, colour and position; Studio can also price it and export a parts list. The `.glb` files in `docs/models/` are the same models for any 3D viewer (bricks fully enclosed by other bricks are left out to keep them small).

## Builds

| # | Build | Parts | Part designs | Colours | Minifigures |
|---|---|---:|---:|---:|---:|
| 1 | [Amon Sûl (Weathertop)](#amon-sul) | 6,041 | 69 | 19 | 11 |
| 2 | [The Colosseum](#colosseum) | 10,615 | 105 | 23 | 33 |
| 3 | [Spiš Castle](#spis-castle) | 6,588 | 98 | 21 | 15 |
| 4 | [Orthanc](#orthanc) | 7,223 | 111 | 25 | 24 |
| 5 | [Ministry of Magic](#ministry-of-magic) | 5,216 | 81 | 22 | 20 |
| 6 | [Neuschwanstein](#neuschwanstein) | 7,780 | 111 | 19 | 9 |
| 7 | [Samoyed](#samoyed) | 3,854 | 49 | 9 | - |

Five builds have been through the full strength solve (a force-balance model of every stud connection that knows when a clutch gives way, the model standing on a table) and pass it, with the share of grip left to spare: Ministry of Magic 0.97, Neuschwanstein 0.895, Amon Sûl 0.884, the Colosseum 0.845 and Orthanc 0.50. Spiš Castle v6 has not: the solve stops at three hill bricks that rest on one end. The Samoyed has not been through it. The Colosseum also has a full proof of all 2,319 building steps and a generated instruction booklet; the booklets of Amon Sûl, Orthanc and the Ministry of Magic are each held up by a single brick that rests on one end at one step.

---

<a id="amon-sul"></a>
## 1. Amon Sûl (Weathertop)

*Weathertop at night, as the Nazgûl come for Frodo.* **6,041 parts**, 69 part designs, 19 colours, 11 minifigures.

[![Amon Sûl (Weathertop) turntable](builds/turntables/amon-sul.gif)](builds/turntables/amon-sul.mp4)

[Turntable, one 360° turn in 12 s (MP4, 4.9 MB)](builds/turntables/amon-sul.mp4) · [Interactive 3D](https://jakubchudik.github.io/text-to-brick-showcase/#amon-sul) · [`amon-sul.ldr`](builds/01-amon-sul/amon-sul.ldr) · [`amon-sul.glb`](docs/models/amon-sul.glb)

- The hill of Weathertop with a black body and olive and dark tan terraces, so the pale grey ruin on top stands out against it. On the flat summit a ring of broken light grey walls and one standing arch surrounds a cobbled floor.
- The moment: on the summit the Witch-king stands on a block above the others and raises his sword over Frodo, who has fallen back; two more black riders close in, Aragorn comes up with a burning torch of flame parts, and Sam and Pippin hold their swords.
- Four smaller scenes, each built and checked on its own and then joined: the summit ring; the hobbits' camp in the dell, with a fire of real flame parts in a ring of stones, a pan with tomatoes and a sausage, bedrolls, a log pile and Merry; the old stair climbing through a broken stone gateway, with two riders on it, a crag and a bare dead tree; and the foot of the hill, with two firs, a brown road with a ranger walking on it, a leaning waymark stone, boulders and a second dead tree.
- 11 minifigures: five black riders (the kit has no hood, so they wear the drooping wizard hat), Frodo, Aragorn, Sam, Pippin, Merry and a ranger.
- Still open: the back of the hill is one large flat black face; the two dead trees read as brown posts more than as trees; the black summit hill shows little detail; the summit scene is over its part budget (2,871 parts against a plan of 1,900).

| Front three-quarter | The other side |
|---|---|
| ![Amon Sûl (Weathertop) from the front](builds/01-amon-sul/front-three-quarter.jpg) | ![Amon Sûl (Weathertop) from the other side](builds/01-amon-sul/other-side.jpg) |
| **From behind** | **From high above** |
| ![Amon Sûl (Weathertop) from behind](builds/01-amon-sul/back.jpg) | ![Amon Sûl (Weathertop) from above](builds/01-amon-sul/birds-eye.jpg) |

### Smaller scenes

| S1 · The Summit Ring | S2 · The Dell Camp |
|---|---|
| ![S1 The Summit Ring](builds/01-amon-sul/scene-s1-summit-ring.jpg) | ![S2 The Dell Camp](builds/01-amon-sul/scene-s2-dell-camp.jpg) |
| **S3 · The Riders' Ascent** | **S4 · The Foot of Weathertop** |
| ![S3 The Riders' Ascent](builds/01-amon-sul/scene-s3-riders-ascent.jpg) | ![S4 The Foot of Weathertop](builds/01-amon-sul/scene-s4-foot-of-the-hill.jpg) |

| S1.1 · The Morgul blade | S1.2 · Aragorn's torch |
|---|---|
| ![S1.1 The Morgul blade](builds/01-amon-sul/close-witch-king.jpg) | ![S1.2 Aragorn's torch](builds/01-amon-sul/close-torch.jpg) |
| **S2.1 · The fire they lit** | **S3.1 · The broken gateway** |
| ![S2.1 The fire they lit](builds/01-amon-sul/close-campfire.jpg) | ![S3.1 The broken gateway](builds/01-amon-sul/close-gateway.jpg) |

<details>
<summary>The design brief</summary>

What was asked for, the moment, the feeling and the must-sees: [`design-brief.md`](builds/01-amon-sul/design-brief.md). The request:

> Amon Sûl, the ruined watchtower on its bare hill, rebuilt with the engine's newer capabilities. On the version it replaces, the owner said (21 October 2026): "X seems much better but some sub-scenes like the fireplace need more attention to small details". On the place itself (21 October 2026): "Weathertop: darkness, ill power, uncanny uncommunicable danger, death lurking in the shadow".

</details>

---

<a id="colosseum"></a>
## 2. The Colosseum

*Rome, the arena and the street around it.* **10,615 parts**, 105 part designs, 23 colours, 33 minifigures.

[![The Colosseum turntable](builds/turntables/colosseum.gif)](builds/turntables/colosseum.mp4)

[Turntable, one 360° turn in 12 s (MP4, 6.5 MB)](builds/turntables/colosseum.mp4) · [Interactive 3D](https://jakubchudik.github.io/text-to-brick-showcase/#colosseum) · [`colosseum.ldr`](builds/02-colosseum/colosseum.ldr) · [`colosseum.glb`](docs/models/colosseum.glb)

- The Colosseum in modern Rome: an oval of three storeys of arches with round half-columns, broken open on the south side so the camera looks into the arena. The stands step up inside in one calm tan, each step with a darker line under it. Around it sit a piazza with umbrella pines, a lawn with the she-wolf on her plinth, a road with a red bus, a white taxi and a horse cab, and the Arch of Constantine.
- The moment: show day. On a sand arena two gladiators square up while a lion circles; the west half is open down to the hypogeum, where a slave turns the capstan and a lift raises another lion. In the box in the north stands the emperor in dark red gives the verdict between two white-robed senators.
- Six smaller scenes, each built and checked on its own and then joined: the arena and its stands; the west wrap with the Arch of Constantine, two centurions posing for a tourist's camera and a caged lion cub; the back, where a smith forges under racked weapons in a breach torn through both rings, with an armourer's yard, a second caged lion, a gladiator sneaking out, a cat and a gull on the attic, a pink gelato kiosk, a metro stair and the Temple of Venus and Roma on a stepped podium; the broken south ring with the gladiators' school and the lion den cut through it, a guide leading five visitors along the fence on a cobbled strip, a gelato stall and the bus; the east wrap with a horse cab (no horse), its cabbie, a souvenir seller at his cart, two tourists and two vespas; and the emperor's side.
- 33 minifigures and several animals; weapons hang in racks and clips, flames are real flame parts, the arena floor and the cobbles are laid as textures from real tiles.
- Still open: the two brown ramps at the ends of the oval (the Valadier and Stern spurs) are the loudest colour on the model and look jagged; the cobbled strip in front of the fence is a dark mosaic; the bus reads as a small red tram and the taxi as a white block; the whole-model check still flags the bus scene as not dominant enough on its street strip.

| Front three-quarter | The other side |
|---|---|
| ![The Colosseum from the front](builds/02-colosseum/front-three-quarter.jpg) | ![The Colosseum from the other side](builds/02-colosseum/other-side.jpg) |
| **From behind** | **From high above** |
| ![The Colosseum from behind](builds/02-colosseum/back.jpg) | ![The Colosseum from above](builds/02-colosseum/birds-eye.jpg) |

### Smaller scenes

| S1 · The games in the arena | S2 · The west wrap and the Arch of Constantine |
|---|---|
| ![S1 The games in the arena](builds/02-colosseum/scene-s1-games-in-the-arena.jpg) | ![S2 The west wrap and the Arch of Constantine](builds/02-colosseum/scene-s2-west-wrap-and-arch.jpg) |
| **S3 · The back: the armory in the breach** | **S4 · The broken south ring and the street** |
| ![S3 The back: the armory in the breach](builds/02-colosseum/scene-s3-armoury-in-the-breach.jpg) | ![S4 The broken south ring and the street](builds/02-colosseum/scene-s4-south-ring-and-street.jpg) |
| **S5 · The east wrap and the botticella** | **S6 · The emperor's side** |
| ![S5 The east wrap and the botticella](builds/02-colosseum/scene-s5-east-wrap-and-botticella.jpg) | ![S6 The emperor's side](builds/02-colosseum/scene-s6-emperors-side.jpg) |

| S1.1 · The duel on the sand | S1.2 · The hypogeum and the lift |
|---|---|
| ![S1.1 The duel on the sand](builds/02-colosseum/close-duel.jpg) | ![S1.2 The hypogeum and the lift](builds/02-colosseum/close-lift.jpg) |
| **S4.1 · The ludus** | **S6.1 · The emperor's box** |
| ![S4.1 The ludus](builds/02-colosseum/close-ludus.jpg) | ![S6.1 The emperor's box](builds/02-colosseum/close-emperors-box.jpg) |
| **S3.1 · The smith in the breach** | **S4.4 · The queue at the fence** |
| ![S3.1 The smith in the breach](builds/02-colosseum/close-smithy.jpg) | ![S4.4 The queue at the fence](builds/02-colosseum/close-queue.jpg) |

<details>
<summary>The design brief</summary>

What was asked for, the moment, the feeling and the must-sees: [`design-brief.md`](builds/02-colosseum/design-brief.md). The request:

> The Flavian Amphitheatre in modern Rome, with the Arch of Constantine, as a display landmark diorama seen from the south-west. The owner, 25 October 2026: "build a new colosseum with all the improvements in mind (more parts, more roundness, color unity and differentiation) ... I want to have clear steps and arches and a pit with a fighting scene and then from the back of the colloseum we can have some columns missing and show an armory with real weapons and anvil and weapon rack etc (see how lego rivendell builds these mini scenes) ... and maybe another mini scene with real lego animals in cages etc"

</details>

---

<a id="spis-castle"></a>
## 3. Spiš Castle

*A Slovak castle on its travertine ridge.* **6,588 parts**, 98 part designs, 21 colours, 15 minifigures.

[![Spiš Castle turntable](builds/turntables/spis-castle.gif)](builds/turntables/spis-castle.mp4)

[Turntable, one 360° turn in 12 s (MP4, 5.2 MB)](builds/turntables/spis-castle.mp4) · [Interactive 3D](https://jakubchudik.github.io/text-to-brick-showcase/#spis-castle) · [`spis-castle.ldr`](builds/03-spis-castle/spis-castle.ldr) · [`spis-castle.glb`](docs/models/spis-castle.glb)

- Spiš Castle in Slovakia on its layered travertine ridge: a lower bailey, a middle court and an upper castle on the east crag with a banded round keep, a gate tower in tan, a roofed palace wing and ruined walls with broken merlons. The hill is built in stepped tan and olive courses with grey inlays. A row of small village houses, one brick tall, lines the sand road along the foot of the hill, with conifers on the verge.
- The moment: a working day in the castle. In the lower bailey a groom stands with a horse, two guards in helmets hold a portcullis between torches, two men work at a forge with an anvil and a weapon rack, and a cook in a white cap stands at the kitchen hearth with a loaf; a milkmaid works beside a cow in the north-west pasture and a woman draws water at the well. In the middle court a priest in white blesses a woman beside a red altar block, and a helmeted guard keeps the night watch at a fire pot. Below the castle a pilgrim in red climbs the brown-railed walkway, a man feeds three white hens, and two travellers, one in a straw hat, walk the road.
- Five smaller scenes, each built and checked on its own and then joined: the lower bailey, the middle court, the upper castle, and the village with the walkway in the west and the village with the road in the east.
- 15 minifigures and several animals; flames are real flame parts, the middle court is paved in grey plates and the road is laid in sand-coloured tiles.
- Still open: the whole-model check still flags three hill bricks (a Tan and a Dark Tan 1 x 4, and a Tan 1 x 8 on the upper crag) that rest on only one end (BRG-001), so the strength run stops there and no manual or proven step list was made for this version; the file is the draft model with its building steps. Also: the road is paler than in the earlier version, there are fewer village houses (15 against 18), and the stable and the well are mostly hidden behind walls from the two front cameras.

| Front three-quarter | The other side |
|---|---|
| ![Spiš Castle from the front](builds/03-spis-castle/front-three-quarter.jpg) | ![Spiš Castle from the other side](builds/03-spis-castle/other-side.jpg) |
| **From behind** | **From high above** |
| ![Spiš Castle from behind](builds/03-spis-castle/back.jpg) | ![Spiš Castle from above](builds/03-spis-castle/birds-eye.jpg) |

### Smaller scenes

| S1 · The lower bailey | S2 · The middle court |
|---|---|
| ![S1 · The lower bailey](builds/03-spis-castle/scene-s1-the-lower-bailey.jpg) | ![S2 · The middle court](builds/03-spis-castle/scene-s2-the-middle-court.jpg) |
| **S3 · The upper castle** | **S4 · The village and the walkway, west** |
| ![S3 · The upper castle](builds/03-spis-castle/scene-s3-the-upper-castle.jpg) | ![S4 · The village and the walkway, west](builds/03-spis-castle/scene-s4-the-village-and-walkway-west.jpg) |
| **S5 · The village and the road, east** |
| ![S5 · The village and the road, east](builds/03-spis-castle/scene-s5-the-village-and-road-east.jpg) |

| S1.1, S1.4 · The stable and the gate guards | S1.2, S1.3 · The smithy and the castle kitchen |
|---|---|
| ![S1.1, S1.4 · The stable and the gate guards](builds/03-spis-castle/close-stable-and-gate.jpg) | ![S1.2, S1.3 · The smithy and the castle kitchen](builds/03-spis-castle/close-smithy-and-kitchen.jpg) |
| **S1.8 · The well** | **S1.6 · The pasture** |
| ![S1.8 · The well](builds/03-spis-castle/close-well.jpg) | ![S1.6 · The pasture](builds/03-spis-castle/close-pasture.jpg) |
| **S2.1 · The chapel** | **S2.2 · The night watch** |
| ![S2.1 · The chapel](builds/03-spis-castle/close-chapel.jpg) | ![S2.2 · The night watch](builds/03-spis-castle/close-night-watch.jpg) |
| **S4.2 · The hen yard** | **S4.3 · The visitor walkway** |
| ![S4.2 · The hen yard](builds/03-spis-castle/close-hen-yard.jpg) | ![S4.3 · The visitor walkway](builds/03-spis-castle/close-walkway.jpg) |
| **S5.2 · Travellers on the road** |
| ![S5.2 · Travellers on the road](builds/03-spis-castle/close-travellers.jpg) |

<details>
<summary>The design brief</summary>

What was asked for, the moment, the feeling and the must-sees: [`design-brief.md`](builds/03-spis-castle/design-brief.md). The request:

> The owner chose Spišský hrad in Slovakia as a landmark for the public showcase (19 October 2026), to be built to a "would post this" bar. No existing LEGO model of it was found, so a good model would be the first.

</details>

---

<a id="orthanc"></a>
## 4. Orthanc

*Isengard in flood.* **7,223 parts**, 111 part designs, 25 colours, 24 minifigures.

[![Orthanc turntable](builds/turntables/orthanc.gif)](builds/turntables/orthanc.mp4)

[Turntable, one 360° turn in 12 s (MP4, 3.9 MB)](builds/turntables/orthanc.mp4) · [Interactive 3D](https://jakubchudik.github.io/text-to-brick-showcase/#orthanc) · [`orthanc.ldr`](builds/04-orthanc/orthanc.ldr) · [`orthanc.glb`](docs/models/orthanc.glb)

- The black tower of Isengard, the tallest thing by far: four knife-edged piers fuse into one shaft with no studs on its faces and split near the top into four horns. Saruman in white, with a staff, stands between the horns; a narrow black stair climbs to the door; a high wall behind the tower holds a watch fire and a loot cart in two bays.
- The moment: halfway through the battle. The ring wall is broken at the north-west and the Isen pours through in translucent light blue tiles with white foam; the plain is churned dark mud with stumps and firs along Fangorn's edge. Four Ents, built as walking trees in three sizes, tear at the breach and the east wall, wade through the grove and hold a rock raised at the gate.
- Five smaller scenes, each built and checked on its own and then joined: the tower on its island; the dam breaking, with orcs swept off on torn blocks; the furnaces of Isengard on the east side, with pits of real flame parts, a lattice fire shaft under a gantry, an Uruk pit, an orc forge and smoke stacks; the storeroom at the gate, where Merry and Pippin sit at a table of food among barrels; and the drowned grove, with a young Ent, felled round stumps and orcs running off with their axes.
- 24 minifigures counted by head: Saruman, the two hobbits, and orcs and Uruk-hai (some with printed faces). The model has translucent parts for the water and real flame parts for the fires.
- This is a final: the physical solve and the proof of all 1,623 steps passed with warnings. The step-by-step manual was refused (see below), so no manual is published.
- Still open: the grey ground plates this build was known for are mostly gone, but the whole-model check still reports three exposed Light Bluish Grey ground plates at the floor edge (COL-017) that the program does not give that colour; from the front the tower hides the wall behind it, and the broken ring reads as separate wall stubs, not one circle; the Ents look small next to the tower and the breach Ent is half hidden from behind; the orcs in the drowned grove stand in a loose row and the storeroom scene has one orc instead of two; the wall end at the breach is short; 7 of the 18 look checks fail (BEA-001, 004, 010, 013, 014, 015, 032) and the whole-model scene verdict is "not acceptable" (the dam scene does not dominate its view); and the manual stops at step 575, where a 6 x 6 dark green plate rests on one end over a gap (BRG-001).

| Front three-quarter | The other side |
|---|---|
| ![Orthanc from the front](builds/04-orthanc/front-three-quarter.jpg) | ![Orthanc from the other side](builds/04-orthanc/other-side.jpg) |
| **From behind** | **From high above** |
| ![Orthanc from behind](builds/04-orthanc/back.jpg) | ![Orthanc from above](builds/04-orthanc/birds-eye.jpg) |

### Smaller scenes

| S1 · The Tower of Orthanc | S2 · The Dam Breaks |
|---|---|
| ![S1 The Tower of Orthanc](builds/04-orthanc/scene-s1-the-tower-of-orthanc.jpg) | ![S2 The Dam Breaks](builds/04-orthanc/scene-s2-the-dam-breaks.jpg) |
| **S3 · The Furnaces of Isengard** | **S4 · The Storeroom at the Gate** |
| ![S3 The Furnaces of Isengard](builds/04-orthanc/scene-s3-the-furnaces-of-isengard.jpg) | ![S4 The Storeroom at the Gate](builds/04-orthanc/scene-s4-the-storeroom-at-the-gate.jpg) |
| **S5 · The Drowned Grove** |  |
| ![S5 The Drowned Grove](builds/04-orthanc/scene-s5-the-drowned-grove.jpg) |  |

| S1.2 · Saruman between the horns | S1.5 · The watch fire behind the north wall |
|---|---|
| ![S1.2 Saruman between the horns](builds/04-orthanc/close-saruman.jpg) | ![S1.5 The watch fire behind the north wall](builds/04-orthanc/close-watch-fire.jpg) |
| **S2.1 · The Ent at the breach** | **S3.1 · The furnace pits** |
| ![S2.1 The Ent at the breach](builds/04-orthanc/close-ent-at-the-breach.jpg) | ![S3.1 The furnace pits](builds/04-orthanc/close-furnace-pits.jpg) |
| **S3.3 · The orc forge** | **S3.4 · The Ent at the east wall** |
| ![S3.3 The orc forge](builds/04-orthanc/close-orc-forge.jpg) | ![S3.4 The Ent at the east wall](builds/04-orthanc/close-ent-at-the-east-wall.jpg) |
| **S4.1 · The hobbits' storeroom** | **S4.3 · The Ent hurls a stone** |
| ![S4.1 The hobbits' storeroom](builds/04-orthanc/close-hobbits.jpg) | ![S4.3 The Ent hurls a stone](builds/04-orthanc/close-ent-hurls-a-stone.jpg) |
| **S5.1 · The young Ent** |  |
| ![S5.1 The young Ent](builds/04-orthanc/close-young-ent.jpg) |  |

<details>
<summary>The design brief</summary>

What was asked for, the moment, the feeling and the must-sees: [`design-brief.md`](builds/04-orthanc/design-brief.md). The request:

> The owner (27 October 2026): "a large build of the Orthanc. I want the scene depicted halfway through the battle with the ents --- river flowing, ents with stones in hand, the two hobbits close to a food storage room, fiery pits, orcs and Saruman at the top of the tower. Make sure to fully appreciate the feel and structure and sharpness of the tower Orthanc."

</details>

---

<a id="ministry-of-magic"></a>
## 5. Ministry of Magic

*The atrium in the middle of the duel.* **5,216 parts**, 81 part designs, 22 colours, 20 minifigures.

[![Ministry of Magic turntable](builds/turntables/ministry-of-magic.gif)](builds/turntables/ministry-of-magic.mp4)

[Turntable, one 360° turn in 12 s (MP4, 4.3 MB)](builds/turntables/ministry-of-magic.mp4) · [Interactive 3D](https://jakubchudik.github.io/text-to-brick-showcase/#ministry-of-magic) · [`ministry-of-magic.ldr`](builds/05-ministry-of-magic/ministry-of-magic.ldr) · [`ministry-of-magic.glb`](docs/models/ministry-of-magic.glb)

- The Ministry of Magic atrium as in the film, cut open at the front: a black and grey checkerboard floor of single tiles, dark walls with gold-railed galleries of offices on two levels, Floo fireplaces along the back wall, a lift behind a golden grille, and a stepped, non-rectangular base with a deep left wing and a low right wing.
- The moment: the duel at its peak. In the pool the Fountain of Magical Brethren stands cracked: a golden wizard, witch and rearing centaur in brick, with a goblin and a house-elf as gold minifigures. Dumbledore casts a shield of water against Voldemort's green curse, and Voldemort stands in a ring of real flame parts. Glass from the shattered gallery windows lies across the floor.
- Five smaller scenes, each built and checked on its own and then joined: the back wall in two halves (an official fleeing into a cold hearth, an Auror arriving through the Floo, Harry behind the golden wizard, a clerk among blown papers, a lit office on the lower gallery); the left wing, where the lift arrives and Aurors step out; the pool and the fountain; and Voldemort in the ring of fire, with Bellatrix cornered by the golden witch.
- New in this version: Ministry staff in robes, wizard hats and top hats running for the lift, past the pool and away from the fire, so the hall is busy at every depth. 20 minifigures counted by head, the main ones with printed faces.
- This is a final: the physical solve passed (the model standing on a table) with warnings. The proof of the step order stopped at step 522, where a Pearl Gold 2 x 4 brick in the fountain rests on one end over a gap (BRG-001), so no manual is published.
- Still open: the goblin and the house-elf stand at the end of the pool rather than on the fountain's island; the golden statues are still blocky; the curse beam reads less boldly from straight ahead than it could; from one side some of the running staff are hidden behind the right wing.

| Front three-quarter | The other side |
|---|---|
| ![Ministry of Magic from the front](builds/05-ministry-of-magic/front-three-quarter.jpg) | ![Ministry of Magic from the other side](builds/05-ministry-of-magic/other-side.jpg) |
| **From behind** | **From high above** |
| ![Ministry of Magic from behind](builds/05-ministry-of-magic/back.jpg) | ![Ministry of Magic from above](builds/05-ministry-of-magic/birds-eye.jpg) |

### Smaller scenes

| S1 · The back wall, west half | S2 · The back wall, east half |
|---|---|
| ![S1 The back wall, west half](builds/05-ministry-of-magic/scene-s1-the-back-wall-west-half.jpg) | ![S2 The back wall, east half](builds/05-ministry-of-magic/scene-s2-the-back-wall-east-half.jpg) |
| **S3 · The left wing and the lift** | **S4 · The pool and the Fountain of Magical Brethren** |
| ![S3 The left wing and the lift](builds/05-ministry-of-magic/scene-s3-the-left-wing-and-the-lift.jpg) | ![S4 The pool and the Fountain of Magical Brethren](builds/05-ministry-of-magic/scene-s4-the-pool-and-the-fountain-of-magical-brethren.jpg) |
| **S5 · Voldemort in the ring of fire** |  |
| ![S5 Voldemort in the ring of fire](builds/05-ministry-of-magic/scene-s5-voldemort-in-the-ring-of-fire.jpg) |  |

| S1.2 · The official flees, and Harry behind the golden wizard | S2.4 · The Ministry office on the lower gallery |
|---|---|
| ![S1.2 The official flees](builds/05-ministry-of-magic/close-official-and-harry.jpg) | ![S2.4 The Ministry office on the lower gallery](builds/05-ministry-of-magic/close-office.jpg) |
| **S3.2 · The lift arrives** | **S4.1 · The Fountain of Magical Brethren** |
| ![S3.2 The lift arrives](builds/05-ministry-of-magic/close-lift-aurors.jpg) | ![S4.1 The Fountain of Magical Brethren](builds/05-ministry-of-magic/close-fountain.jpg) |
| **S4.2 · Dumbledore casts the shield** | **S5.2 · Voldemort in the ring of fire** |
| ![S4.2 Dumbledore casts the shield](builds/05-ministry-of-magic/close-dumbledore.jpg) | ![S5.2 Voldemort in the ring of fire](builds/05-ministry-of-magic/close-voldemort.jpg) |

<details>
<summary>The design brief</summary>

What was asked for, the moment, the feeling and the must-sees: [`design-brief.md`](builds/05-ministry-of-magic/design-brief.md). The request:

> The owner (27 October 2026): "a scene from Harry Potter and the Ministry of Magic mid fight between Voldemort and Dumbledore. There was a water fountain in the center with some stone statue, upper and lower gallery of offices, the teleportation hearths, and Dumbledore, Voldemort, Harry and Bellatrix Lestrange, and spells flying, and shards of glass on the floor."

</details>

---

<a id="neuschwanstein"></a>
## 6. Neuschwanstein

*The fairy-tale castle above the gorge.* **7,780 parts**, 111 part designs, 19 colours, 9 minifigures.

[![Neuschwanstein turntable](builds/turntables/neuschwanstein.gif)](builds/turntables/neuschwanstein.mp4)

[Turntable, one 360° turn in 12 s (MP4, 3.8 MB)](builds/turntables/neuschwanstein.mp4) · [Interactive 3D](https://jakubchudik.github.io/text-to-brick-showcase/#neuschwanstein) · [`neuschwanstein.ldr`](builds/06-neuschwanstein/neuschwanstein.ldr) · [`neuschwanstein.glb`](docs/models/neuschwanstein.glb)

- Neuschwanstein Castle on its crag above the Pöllat gorge: the white Palas with staggered blocks and an attached oriel tower, grey-spired towers, the gatehouse, and the Marienbrücke across the gorge. Below it a forest on four levels of hillside, with spruces, pines and broadleaf trees of many heights, ferns, flowers and boulders, and the Alpsee with two white birds.
- Small scenes with real minifigures and animals: tourists photographing the gorge from the bridge, a coachman with his horse and carriage on the forest road, a hiker and his dog on the trail, a hunter and a deer in a clearing, the king on a balcony of the Palas, masons on a scaffold at the gatehouse, and a forester's camp at the back.
- 9 minifigures and a handful of animals; the foliage is real tree, bush, fern and flower parts.

| Front three-quarter | The other side |
|---|---|
| ![Neuschwanstein from the front](builds/06-neuschwanstein/front-three-quarter.jpg) | ![Neuschwanstein from the other side](builds/06-neuschwanstein/other-side.jpg) |
| **From behind** | **From high above** |
| ![Neuschwanstein from behind](builds/06-neuschwanstein/back.jpg) | ![Neuschwanstein from above](builds/06-neuschwanstein/birds-eye.jpg) |

| Two white birds on the Alpsee | Tourists on the Marienbrücke |
|---|---|
| ![Two white birds on the Alpsee](builds/06-neuschwanstein/close-lake-birds.jpg) | ![Tourists on the Marienbrücke](builds/06-neuschwanstein/close-bridge.jpg) |
| **The coachman, the hunter and the deer in the meadow** | **The king on his balcony** |
| ![The coachman, the hunter and the deer in the meadow](builds/06-neuschwanstein/close-meadow.jpg) | ![The king on his balcony](builds/06-neuschwanstein/close-king-on-the-balcony.jpg) |

---

<a id="samoyed"></a>
## 7. Samoyed

*A sitting dog on a round lawn.* **3,854 parts**, 49 part designs, 9 colours.

[![Samoyed turntable](builds/turntables/samoyed.gif)](builds/turntables/samoyed.mp4)

[Turntable, one 360° turn in 12 s (MP4, 2.2 MB)](builds/turntables/samoyed.mp4) · [Interactive 3D](https://jakubchudik.github.io/text-to-brick-showcase/#samoyed) · [`samoyed.ldr`](builds/07-samoyed/samoyed.ldr) · [`samoyed.glb`](docs/models/samoyed.glb)

- A Samoyed sitting on a small round lawn: a coat of curved slopes and tiles shingled like fur, a face that reads at once (almond eyes, a black nose, a smile with a pink tongue), cream-lined ears, a thick ruff, and a plume tail that curls up and over.
- On the lawn a red ball and a few flowers. The model is shown on a dark backdrop, which the renderer picks for mostly white builds.

| Front three-quarter | The other side |
|---|---|
| ![Samoyed from the front](builds/07-samoyed/front-three-quarter.jpg) | ![Samoyed from the other side](builds/07-samoyed/other-side.jpg) |
| **From behind** | **From high above** |
| ![Samoyed from behind](builds/07-samoyed/back.jpg) | ![Samoyed from above](builds/07-samoyed/birds-eye.jpg) |

| The face | Front legs and paws |
|---|---|
| ![The face](builds/07-samoyed/close-face.jpg) | ![Front legs and paws](builds/07-samoyed/close-paws.jpg) |
| **The plume tail and the profile** | **Hind paw, red ball and flowers on the lawn** |
| ![The plume tail and the profile](builds/07-samoyed/close-tail.jpg) | ![Hind paw, red ball and flowers on the lawn](builds/07-samoyed/close-lawn.jpg) |

---

## How the pictures are made

Stills and turntables are path-traced in Blender Cycles from the same LDraw files, with one studio HDRI and one softbox; bricks get 0.25 mm bevels and plain studs (no logos). Colours follow the renderer's colour calibration, so a brick shows as the colour it is: black stays black and dark brown stays brown, instead of being lifted by a glossy reflection of the studio. The backdrop is a light grey sweep, or near black for builds that are mostly white (the Samoyed). Stills are 2400 × 1500 pixels; each turntable is 144 frames at 12 frames per second, one full turn in 12 seconds, from a fixed camera distance (every frame is rendered, except in the Samoyed turntable, which renders every third frame and interpolates the two between). The interactive page uses Google's `<model-viewer>` on the exported `.glb`.
