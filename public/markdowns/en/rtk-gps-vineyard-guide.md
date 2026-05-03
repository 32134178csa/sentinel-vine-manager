---
title: "RTK GPS for Vineyards: Why Sub-Inch Accuracy Changes Everything"
description: "Complete guide to RTK GPS for vineyard mapping. Covers accuracy specs, equipment recommendations, setup instructions, costs, and how sub-inch precision transforms vine management."
keywords: ["RTK GPS vineyard", "precision GPS vine mapping", "vineyard GPS mapping", "RTK GNSS agriculture"]
author: "Christian Sidak"
date: "2026-04-21"
image: "/img/blog/rtk-gps-vineyard.webp"
---

If you manage a vineyard and have started looking into GPS mapping, you have probably noticed that the technology landscape is confusing. Standard GPS, DGPS, RTK, PPK, NTRIP -- the acronyms pile up fast. Meanwhile, the real question is simple: can you reliably map every vine in your vineyard and build permanent records on top of those coordinates?

The answer is yes, but only if you use the right class of GPS. This guide covers everything a vineyard manager needs to know about RTK GPS -- what it is, how it works, what equipment you need, what it costs, and how to turn raw coordinates into a system that actually runs your operation.

## What Is RTK GPS and How Does It Compare to Standard GPS?

GPS -- Global Positioning System -- uses signals from satellites orbiting Earth to calculate your position. Your phone does this every time you open a maps app. The problem is accuracy. Consumer GPS is accurate to roughly 3 to 5 meters (10 to 16 feet) on a good day. That is fine for driving directions. It is useless for mapping individual vines planted 4 to 6 feet apart.

There are three tiers of GPS accuracy that matter for agriculture:

### Standard GPS: 3-5 Meter Accuracy

This is what your phone and most consumer devices use. A single receiver listens to satellite signals and triangulates position. Atmospheric interference, satellite geometry, and signal multipath (bouncing off terrain) all introduce error. You might be standing next to Vine A but your GPS says you are closer to Vine D. For block-level vineyard work -- driving to the right field, marking general boundaries -- this is adequate. For vine-level anything, it is not.

### DGPS (Differential GPS): 0.5-1 Meter Accuracy

DGPS improves on standard GPS by using a known reference station to calculate and broadcast correction data. The receiver applies these corrections in real time. This brings accuracy down to roughly half a meter to a meter. Better, but still not good enough for vine-by-vine mapping. At 0.5 meters of uncertainty, you cannot reliably distinguish between adjacent vines in a typical row.

### RTK GPS: 1-2 Centimeter Accuracy (Sub-Inch)

RTK -- Real-Time Kinematic -- is the technology that changes the game. Instead of correcting position estimates after the fact, RTK uses the carrier phase of satellite signals (not just the signal code) to achieve centimeter-level accuracy in real time. We are talking 1 to 2 centimeters -- less than an inch. At that precision, every vine in your vineyard gets a unique, repeatable coordinate that does not drift between seasons.

This is the threshold where precision GPS vine mapping becomes possible. Below it, you are guessing. Above it, you have a permanent spatial record.

## Why Sub-Inch GPS Accuracy Matters for Vineyards

A vineyard is not a wheat field. It is a grid of thousands of individual perennial plants, each with its own health profile, planting date, rootstock, clone, and disease history. The value of precision GPS in a vineyard is not about navigation -- it is about creating a permanent identity for every vine.

Here is what sub-inch GPS agriculture enables in a vineyard context:

### Vine-Level Disease Tracking

Leafroll virus, red blotch, Eutypa, Fanleaf -- these diseases spread in spatial patterns. If your records are block-level, you know "Block 7 has leafroll." If your records are vine-level with RTK coordinates, you know exactly which vines tested positive, when they were flagged, and whether the disease is spreading in a directional pattern from a specific source. That changes your removal and replant decisions from reactive to strategic.

For a deeper look at how vine-level disease programs work in practice, see our guide on [building a vine-level disease tracking program](/blog/vine-level-disease-tracking-program).

### Replant Documentation That Survives Staff Turnover

When you pull a diseased vine and replant, the new vine needs to inherit the location record. With RTK GPS vineyard mapping, the new vine gets its own coordinate, linked to the same position in the row. Five years from now, when your vineyard manager has moved on, the record is still there -- who planted what, where, and why. This is what we mean by digital flagging tape: a permanent marker that does not fade, fall off, or walk out the door with an employee.

### Work Orders Tied to Specific Vines

Instead of telling a crew "re-tie the weak vines in Block 3," you can generate a work order for 47 specific vines with GPS coordinates. The crew knows exactly where to go. You know exactly what was done. No ambiguity, no missed vines, no duplicated effort.

### Harvest and Cellar Traceability

When you can trace a wine lot back to the specific vines that produced it -- not just the block, but the individual plants -- you unlock a level of quality control that most wineries only dream about. Estates like Dominus, Dalla Valle, Abreu, and Staglin use vine-level records to connect vineyard decisions to cellar outcomes.

For more on why block-level data falls short, read [what vine-by-vine tracking actually means](/blog/vine-by-vine-tracking-vineyard-gps).

## How RTK GPS Works: Base Station, Rover, and Correction Signals

Understanding the mechanics helps you make better equipment and setup decisions. RTK GPS has three components working together.

### The Base Station

A base station is a GPS receiver fixed at a known, surveyed position. Because its location is precisely known, it can calculate the difference between where the satellites say it is and where it actually is. That difference is the correction data.

The base station continuously broadcasts these corrections over a radio link or internet connection. It does not move -- it sits on a tripod or permanent mount with a clear view of the sky.

There are two ways to get base station corrections:

**Your own base station:** You set up a dedicated receiver on your property. This gives you full control, no subscription fees, and guaranteed coverage on your land. For vineyards in remote areas with spotty cell service, this is often the most reliable option.

**NTRIP (Networked Transport of RTCM via Internet Protocol):** A network of permanent base stations broadcasts corrections over the internet. You connect your rover to the nearest station via cell data. Services like the California Real Time Network (CRTN) provide free NTRIP corrections in parts of California. The limitation is that you need reliable cell coverage in the vineyard, and accuracy degrades as you get farther from the base station -- typically beyond 20-30 kilometers.

### The Rover

The rover is the GPS receiver you carry through the vineyard. It receives satellite signals and, simultaneously, correction data from the base station. By comparing the two, it calculates your position to within 1-2 centimeters.

In vineyard mapping, the rover is what you walk down rows with. At each vine, you capture a coordinate. Some rovers connect to a phone or tablet running mapping software; others have built-in displays.

### The Correction Signal and Fix Types

When the rover receives corrections and resolves the carrier phase ambiguity, it achieves what is called a "fixed" solution -- that is your sub-inch accuracy. If conditions degrade (tree canopy, terrain obstruction, too few satellites), the rover may fall back to a "float" solution, which is accurate to 20-50 centimeters. You want fixed solutions for vine mapping. A good rover will display its fix status so you know when to capture coordinates and when to wait.

### Coordinate Systems and Datums

RTK GPS produces coordinates in a specific coordinate reference system -- most commonly WGS84 (the same datum your phone uses) or a local projection like UTM or State Plane. For vineyard work, the coordinate system matters less than consistency. As long as every vine coordinate is captured in the same system, the relative positions are accurate and your map holds together.

If you are working with a surveyor or integrating with county GIS data, you may need to transform coordinates. Most modern RTK software handles this automatically.

## Equipment Guide: What You Need for RTK GPS Vineyard Mapping

The equipment landscape for RTK receivers has improved dramatically in the last few years. Five years ago, a survey-grade RTK system cost $15,000 or more. Today, you can get sub-inch accuracy for under $500.

### Recommended Rover: Emlid Reach RX

For vineyard mapping, we recommend the [Emlid Reach RX](https://store.emlid.com/products/reachrx2?variant=51813083414833). At $399, it delivers multi-band RTK GPS with centimeter-level accuracy in a compact, field-ready form factor.

**Why the Emlid Reach RX works well for vineyards:**

- **Multi-band GNSS:** Tracks GPS, GLONASS, Galileo, and BeiDou on multiple frequencies. More satellites and more frequencies mean faster time-to-fix and more reliable accuracy under partial canopy.
- **Bluetooth connectivity:** Pairs with your phone or tablet. No cables, no dongles. Your crew can carry it in a pocket or clip it to a vest.
- **NTRIP client built in:** Connects to network base stations over cell data without extra hardware.
- **Centimeter accuracy:** Consistently achieves 1-2 cm horizontal accuracy with a fixed solution.
- **Rugged and lightweight:** Designed for field work, not just surveyors working clean job sites.

The Reach RX is a rover -- it receives corrections from a base station or NTRIP network. If you plan to use your own base station (recommended for remote vineyard sites), Emlid also makes the Reach RS3, which can serve as a base.

### Base Station Options

**Option 1: Emlid Reach RS3 as a dedicated base** -- Set up on a permanent tripod on your property. One-time cost of roughly $2,500-$3,000. No ongoing subscription. Works regardless of cell coverage. Best for estates that will be mapping regularly over multiple seasons.

**Option 2: NTRIP network** -- Free (CRTN in California) or low-cost subscription ($50-$200/month depending on the service). Requires cell coverage in the vineyard. Good for occasional mapping or vineyards near urban areas with strong cell signal.

**Option 3: Rented or shared base station** -- Some survey equipment rental companies offer RTK base stations by the week. Practical if you only need to map once and can do it in a concentrated push.

### Additional Equipment

- **Smartphone or tablet:** Runs the mapping application. Any modern iOS or Android device works.
- **Survey pole or staff (optional):** Holds the rover at a consistent height above the ground. Useful for maintaining uniform antenna height across long mapping sessions. Not strictly required for vineyard work where you are capturing vine positions, not terrain elevation.
- **External battery pack:** Not usually needed -- the Reach RX has good battery life -- but helpful for full-day mapping sessions.

## The Setup Process: How to Map a Vineyard with RTK GPS

Here is the practical workflow for mapping a vineyard with an RTK receiver, from first setup to finished vine map.

### Step 1: Establish Your Correction Source

Before you walk a single row, you need corrections flowing to your rover.

If using NTRIP: configure the rover with the nearest base station's mount point, your cell connection, and any authentication credentials. The Emlid Flow app makes this straightforward -- you select an NTRIP service, enter credentials, and the rover connects.

If using your own base station: set up the base on a tripod with clear sky view (no overhanging trees, away from buildings). Let it average its position for at least 10 minutes -- longer is better for absolute accuracy. Then enable the correction broadcast. The rover and base communicate via radio (LoRa on Emlid devices) or local WiFi.

### Step 2: Verify Fix Status

Before capturing any vine coordinates, confirm the rover has a fixed RTK solution. In the Emlid Flow app, the status indicator turns green when fixed. If you are getting a float solution, move to a more open area, wait for more satellites to lock, or check your correction link.

### Step 3: Plan Your Walk Pattern

Vineyard GPS mapping is systematic. You walk every row, capturing a coordinate at each vine. The typical approach:

- Start at one end of a block
- Walk down the row, tapping to capture at each vine (or every Nth vine if you are doing a sparser initial map)
- At the end of the row, move to the next row and walk back
- Tag each point with metadata: row number, vine number, any observations (missing vine, dead vine, disease flag)

For a 10-acre block with 1,000 vines per acre, you are capturing 10,000 points. At a brisk walking pace with a tap per vine, expect 2-4 hours per block depending on spacing and terrain.

### Step 4: Quality Control During Mapping

Periodically check that your fix status is still "fixed." If the rover drops to float, stop capturing until it recovers. Check point counts against expected vine counts per row -- if a row should have 85 vines and you captured 83 points, you may have missed two.

### Step 5: Import Coordinates into Your Management Platform

Raw GPS coordinates are just numbers until they are attached to a system that makes them useful. This is where the software layer matters. The RTK receiver captures the where. The vineyard management platform -- like Sentinel -- turns those coordinates into permanent vine-level records that you build on over time: disease history, replant logs, work orders, spray records, harvest data.

For a comparison of how GPS mapping approaches differ between drones and ground-based RTK, see our piece on [drone vs. Sentinel vine mapping](/blog/drone-vs-sentinel-vine-mapping).

## Cost Breakdown: What RTK GPS Vineyard Mapping Actually Costs

One of the biggest misconceptions about RTK GPS is that it is expensive. That was true a decade ago. It is not true now.

### Hardware Costs (One-Time)

| Item | Cost | Notes |
|------|------|-------|
| Emlid Reach RX rover | $399 | The receiver your crew carries in the field |
| Emlid Reach RS3 base station | ~$2,800 | Only needed if you run your own base (skip if using NTRIP) |
| Survey pole | $50-$150 | Optional, for consistent antenna height |
| Smartphone/tablet | $0 (use existing) | Runs mapping software |

**Minimum hardware investment: $399** (rover only, using NTRIP for corrections).

**Full setup with own base station: ~$3,200-$3,400.**

### Software Costs (Annual)

This is where the range gets wide, because it depends on what you want to do with the data.

If you just want to collect coordinates and export a spreadsheet, the Emlid Flow app is free.

If you want those coordinates to become permanent vine-level records with disease tracking, work orders, spray compliance, replant documentation, and cellar traceability, you need a vineyard management platform. Sentinel starts at $5,000/year for estates up to 100 acres, scaling with acreage. For a full comparison of vineyard software options, see our [2026 buyer's guide](/blog/vineyard-management-software-buyers-guide-2026).

### Correction Service Costs (Annual)

| Source | Cost | Coverage |
|--------|------|----------|
| CRTN (California) | Free | Major ag regions in CA |
| Commercial NTRIP | $50-$200/month | Varies by provider and region |
| Own base station | $0 ongoing | Your property + ~20 km radius |

### Total Cost of Ownership: Year One

**Budget option (rover + NTRIP):** ~$399 hardware + software subscription
**Full setup (rover + base + software):** ~$3,400 hardware + software subscription

Compare that to the cost of a single mismanaged replant cycle on 500 vines ($15,000-$30,000 in lost production over 3 years) and the ROI becomes obvious.

## Common Questions and Misconceptions About RTK GPS in Vineyards

### "Do I need a surveyor to set this up?"

No. Modern RTK receivers like the Emlid Reach RX are designed for non-surveyors. The setup process -- pairing the rover with your phone, connecting to an NTRIP service or base station, verifying fix status -- takes 15-20 minutes the first time and 5 minutes on subsequent sessions. You do not need a surveying license or specialized training.

That said, if you want your vine coordinates to align with county parcel data or an existing survey, having a surveyor establish a few control points on your property is worthwhile. That is a one-time cost of a few hundred dollars.

### "Will canopy block the GPS signal?"

Partially. Dense canopy (mid to late season with full leaf cover) can reduce the number of visible satellites and slow down time-to-fix. Multi-band receivers like the Reach RX handle this better than single-band units because they track more satellite constellations and frequencies.

The practical solution is to do your initial vine mapping in late winter or early spring, before full leaf-out. Once every vine has a coordinate, you rarely need to re-map the whole vineyard -- you only update positions when you replant.

### "Can I use a drone instead of walking rows?"

Drones with RTK GPS can capture overhead imagery, but they have limitations for vine-level mapping. A drone sees the canopy from above; it does not see individual vine trunks at ground level. For establishing precise vine positions and attaching metadata (disease flags, replant status, rootstock type) at each vine, ground-based RTK mapping is more accurate and more practical.

Drones are complementary -- good for canopy health assessment and block-level overview -- but they are not a substitute for ground-truth RTK coordinates at the vine. We compare the two approaches in detail in [drone vs. Sentinel vine mapping](/blog/drone-vs-sentinel-vine-mapping).

### "Once I map the vineyard, how often do I need to re-map?"

For established blocks, almost never. RTK coordinates do not expire. Once a vine has a position, that position is permanent until the vine is removed. You only re-capture coordinates when you replant.

For new plantings, you map once after planting. The coordinates become the foundation for every record attached to those vines going forward.

### "What is the difference between RTK and PPK?"

RTK (Real-Time Kinematic) corrects positions in real time -- you see centimeter accuracy on your screen as you walk. PPK (Post-Processed Kinematic) records raw satellite data in the field and applies corrections later on a computer.

PPK can achieve the same accuracy as RTK, but the corrections happen after the fact. For vineyard mapping, RTK is preferable because you get immediate quality feedback -- you know in the field whether your fix is good or whether you need to wait for better conditions. With PPK, you might not discover a problem until you are back at your desk processing data.

## How Sentinel Turns RTK Coordinates into a Vineyard Operating System

An RTK GPS receiver is a precision measurement tool. It captures coordinates. But coordinates alone do not track disease spread, manage work orders, document replants, or connect vineyard decisions to cellar outcomes.

Sentinel is the software layer that makes RTK data useful. Think of it as the difference between owning a thermometer and having a climate monitoring system. The thermometer takes readings. The system records them, tracks trends, triggers alerts, and helps you make decisions.

Here is what happens when RTK coordinates enter Sentinel:

**Every vine gets a permanent digital identity.** The GPS coordinate anchors a record that accumulates data over years -- disease test results, visual assessments, treatment history, replant dates, rootstock and clone information, yield data.

**Spatial patterns become visible.** When you flag 30 vines with leafroll in a block, Sentinel shows you the spatial distribution. Is it clustered? Spreading from the edge? Following a mealybug vector path? This is information you cannot extract from a spreadsheet of GPS points.

**Work orders are precise.** Instead of vague instructions, crews get lists of specific vines with coordinates. Completed work is logged against each vine.

**The record compounds.** Year one, you have a map. Year three, you have a vineyard history that informs every decision -- what to pull, where to replant, which blocks are trending up or down, and why.

This is what digital flagging tape means in practice. Physical flagging tape marks a vine for a season. Sentinel marks it permanently, with context that grows over time.

## Getting Started

If you are considering RTK GPS vineyard mapping, here is the shortest path to a working system:

1. **Buy an Emlid Reach RX** ($399) from [the Emlid store](https://store.emlid.com/products/reachrx2?variant=51813083414833).
2. **Check NTRIP coverage** for your area. In California, the CRTN network is free and covers most wine-growing regions.
3. **Map a test block** -- pick a 1-2 acre block, walk the rows, capture vine coordinates. This takes a couple of hours and gives you a feel for the workflow.
4. **Import into Sentinel** and see what vine-level records look like for your operation.

We have walked dozens of estates through this process. If you want to see how it works for your specific vineyard, [schedule a 20-minute demo](https://scheduler.zoom.us/d/1i222xhk/sentinel-demo) and we will show you the full workflow -- from RTK capture to vine-level records.

---

## Frequently Asked Questions

**What accuracy does RTK GPS actually achieve in a vineyard setting?**
In open conditions (typical vineyard rows with trellis but no dense overhead canopy), RTK GPS consistently achieves 1-2 centimeter horizontal accuracy -- well under an inch. This is sufficient to uniquely identify every vine in a vineyard, even with standard 4-6 foot vine spacing. During full canopy season, accuracy may briefly degrade to 5-10 centimeters in heavily shaded areas, but this is still adequate for vine identification.

**Can I use RTK GPS coordinates from one year in future years without re-mapping?**
Yes. RTK coordinates are tied to a global reference frame (typically WGS84) and do not drift over time. A vine mapped in 2026 will have the same coordinates in 2036. The only reason to re-capture a coordinate is if the physical vine was removed and replaced with a new planting in a slightly different position.

**Do I need cell service in the vineyard to use RTK GPS?**
Not necessarily. If you use an NTRIP correction service, you need cell data to receive corrections. But if you set up your own base station on the property, the rover communicates with the base via radio (LoRa) -- no cell service required. For remote vineyard sites in Napa, Sonoma, Paso Robles, or the Sierra foothills, running your own base station is often the most reliable approach.

**How long does it take to map an entire vineyard?**
For initial mapping (capturing every vine), plan on 2-4 hours per 10-acre block at walking pace. A 50-acre estate can be fully mapped in 2-3 concentrated days. The Sentinel team can assist with mapping logistics and planning for larger properties. After initial mapping, you only re-visit specific vines when replanting or updating records.

**Is RTK GPS the same technology that precision agriculture uses for tractor auto-steer?**
Yes, it is the same core technology. Tractor auto-steer systems use RTK corrections to maintain centimeter-level guidance along row paths. The difference is application: auto-steer uses RTK for real-time machine guidance, while vineyard mapping uses RTK to capture and store permanent vine positions. The accuracy is comparable, and in some cases you can use the same base station for both purposes.
