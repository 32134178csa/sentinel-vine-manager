---
title: "Satellite vs. Drone vs. Ground-Level GPS: Which Accuracy Do You Actually Need?"
description: "A practical comparison of satellite imagery, drone NDVI, and RTK GPS ground-truth accuracy for vineyard management. Covers resolution, cost, and which decisions each technology supports."
keywords:
  - vineyard satellite imagery
  - drone NDVI vineyard accuracy
  - RTK GPS vs drone vineyard
  - vineyard mapping accuracy comparison
  - precision viticulture technology
  - vineyard ground truth
author: "Christian Sidak"
authorTitle: "Co-Founder, Sentinel"
date: "2026-04-20"
topic: "Geospatial"
readTime: "7 min read"
image: "/img/blog/accuracy-comparison.webp"
---

Vineyard managers evaluating mapping technology face a confusing market. Satellite imagery providers promise property-wide coverage for pennies per acre. Drone operators offer high-resolution NDVI heatmaps in a single flight. Ground-level RTK GPS systems deliver sub-inch vine positions but require someone walking the rows. Each technology operates at a different scale, resolution, and cost—and each is genuinely useful for certain decisions while misleading for others.

This post is a practical comparison. No rankings, no "best" winner—just an honest look at what each technology measures, how accurate it is, what it costs, and which vineyard decisions it actually supports. The goal is to help you spend your technology budget on the data layer that matches the decisions you need to make.

## Satellite Imagery: The Wide View

### What It Measures

Satellite vineyard imagery captures multispectral data from orbit. Most vineyard-relevant providers (Planet, Maxar, Sentinel-2 from ESA) deliver NDVI or similar vegetation indices at regular intervals throughout the season. You get a color-coded map of canopy vigor across your entire property, updated every few days to every few weeks depending on the satellite and your subscription.

### Resolution

This is where the limitations start. Sentinel-2, the most commonly used free satellite platform, has a spatial resolution of 10 meters per pixel. That means each pixel covers a 10m x 10m area—roughly 30 to 50 vines, depending on your vine spacing. Commercial satellites like Planet's SkySat can reach 50cm per pixel, but that still covers multiple vines per pixel in most planting configurations.

At 10-meter resolution, you can see block-level vigor patterns. At 50cm, you can start to see row-level variation. Neither gives you individual vine resolution.

### Cost

Sentinel-2 data is free. Commercial high-resolution imagery runs $1 to $5 per acre per flight, with subscription models available for seasonal coverage. It is the cheapest mapping technology by a wide margin.

### What Decisions It Supports

Satellite imagery is useful for broad property monitoring: identifying blocks or zones that are under stress relative to the rest of the vineyard, tracking irrigation uniformity across large acreage, and monitoring seasonal canopy development. For management companies overseeing thousands of acres across multiple properties, satellite data provides a practical screening layer—it tells you where to look closer.

It does not support vine-level decisions. You cannot identify which specific vines are symptomatic, track disease spread patterns between individual plants, or generate work orders targeting specific vines. The resolution simply is not there.

## Drone NDVI: The Detailed Aerial View

### What It Measures

Drone vineyard mapping captures multispectral imagery from 50 to 200 feet above the canopy, typically using a DJI or senseFly platform with a multispectral camera. The standard output is an NDVI orthomosaic—a stitched-together heatmap showing relative canopy vigor at much higher resolution than satellite.

### Resolution

Drone NDVI resolution is dramatically better than satellite: 2 to 5 centimeters per pixel is typical. At that resolution, you can clearly see individual vine canopies and inter-row spacing. The imagery looks impressive—you can zoom in and identify individual plant shapes.

But there is a critical distinction between spatial resolution and diagnostic resolution. A 3cm-per-pixel image lets you see a vine. It does not tell you why that vine's canopy is thinner than its neighbor. Low NDVI can mean disease (red blotch, leafroll), water stress, nutrient deficiency, young vine, replant, gopher damage, mechanical injury, or simply a vine with a different canopy architecture. The heatmap shows you "something is different here." It does not tell you what.

### Cost

A single drone flight over a 50-acre vineyard typically runs $500 to $2,000 depending on the operator and deliverables. Seasonal programs (3 to 5 flights) run $1,500 to $8,000. Some vineyard management companies operate their own drones, reducing per-flight cost but requiring pilot certification and equipment investment.

### What Decisions It Supports

Drone NDVI is excellent for directed scouting. Instead of walking every row in a 30-acre block looking for problems, you fly the block, identify the zones with low NDVI, and send scouts only to those areas. This saves significant labor on large properties.

It also supports irrigation management (identifying zones of uneven water application), pre-harvest vigor zoning (selectively harvesting high-vigor and low-vigor zones separately), and general canopy uniformity assessment.

It does not support vine-level record-keeping. A drone flight gives you a snapshot in time—a raster image that tells you about canopy vigor on the day of the flight. It does not create a persistent identity for each vine. It does not track the history of a specific plant over multiple seasons. It does not distinguish between a vine that has leafroll and a vine that is drought-stressed. And it does not generate the kind of structured data (vine ID, observation type, date, attributes) that supports disease tracking, replant documentation, or work order generation.

## RTK GPS Ground-Level Mapping: The Vine-Level Record

### What It Measures

RTK GPS ground-level mapping creates a permanent position record for every vine in the vineyard. A mapper walks the rows carrying a smartphone paired with an RTK GNSS receiver, recording each vine's GPS coordinate with sub-inch accuracy (1 to 2 centimeters). Against each coordinate, the system stores structured observations: disease status, vigor rating, replant history, rootstock, clone, scouting notes, photos.

### Resolution

Resolution is not the right word here, because this is not an image. It is a database. Every vine is an individual record with its own unique position. The "resolution" is literally one vine—you cannot get more granular than the individual plant.

### Cost

Initial mapping is the most labor-intensive step: a two-person crew can map roughly 5,000 to 8,000 vines per day, depending on terrain and row spacing. For a 100-acre property at 1,000 vines per acre, initial mapping takes 12 to 20 field days. After that, ongoing scouting and data collection happens during normal scouting workflows—the incremental cost is minimal because scouts are already walking the rows.

Equipment cost is modest: an RTK GNSS receiver (such as the Emlid ReachRx) runs $3,000 to $7,000, plus a smartphone or tablet. Base station options range from setting up your own ($2,000 to $5,000) to using a correction network subscription ($50 to $200/month).

### What Decisions It Supports

Every decision that requires vine-level precision: individual vine disease tracking with multi-year history, targeted replant planning with cost modeling, work orders tied to specific vine coordinates, compliance documentation at the plant level, harvest traceability back to individual vines.

The tradeoff is obvious: it requires someone in the rows. You cannot map 500 acres in an afternoon the way you can with a drone. But the data you collect is fundamentally different—structured, persistent, and actionable at the individual vine level.

## Which One Do You Need?

The honest answer is that it depends on what decisions you are trying to make. Here is a simple framework:

**If your main concern is property-wide monitoring across thousands of acres**, satellite imagery is the right starting point. It is cheap, automated, and provides seasonal context. It will not give you vine-level detail, but if you are managing 5,000 acres across 15 properties, you need a screening layer before you commit scouting labor.

**If your main concern is directing scouts efficiently and identifying problem zones**, drone NDVI adds significant value. It shows you where to look within a block, saves scouting labor on large properties, and provides visually compelling imagery for reports and presentations. Pair it with ground-truth scouting and you get the best of both.

**If your main concern is vine-level disease management, replant planning, or building permanent records**, ground-level RTK GPS mapping is the only technology that does this. Satellite and drone imagery can tell you something is wrong. Ground-truth mapping tells you exactly what is wrong, at which vine, and builds a history you can query years later.

The best operations—the premium estates that treat their vineyards as multi-generational assets—use a combination. Satellite for seasonal screening. Drones for directed scouting. Ground-truth GPS for the permanent record. Each layer does what it does well. None replaces the others.

## The Accuracy Spectrum

To put the numbers side by side:

| Technology | Spatial Resolution | Vine-Level? | Persistent Records? | Cost per Acre |
|---|---|---|---|---|
| Satellite (Sentinel-2) | 10 meters/pixel | No | No | Free to $2 |
| Satellite (Commercial) | 0.5-1 meter/pixel | No | No | $1-5 |
| Drone NDVI | 2-5 cm/pixel | Visible, not identifiable | Snapshot only | $10-40 |
| RTK GPS Ground | 1-2 cm position | Yes, individually | Yes, permanent | $5-15 (ongoing) |

The key insight is that resolution and usefulness are not the same thing. Drone imagery has impressive resolution, but the data it produces is a raster image—a picture. RTK GPS ground mapping produces structured data—a database. The picture tells you what happened on one day. The database tells you what has happened across every season, at every vine, since you started recording.

## Making the Decision

If you are evaluating these technologies for the first time, start by asking what your most expensive vineyard decision is. For most premium estates, it is the replant decision—$50,000 to $80,000 per acre. For properties with active disease pressure, it is the containment strategy—how much to spend on testing, removal, and prevention. For operations focused on quality segmentation, it is which blocks (or which vines within blocks) to harvest separately.

Match the technology to the decision. If the decision is block-level, satellite or drone data may be sufficient. If the decision is vine-level—and at premium price points, the important decisions usually are—you need ground-truth data with sub-inch accuracy.

---

*Sentinel Vine Manager provides RTK GPS vine-by-vine mapping and digital record-keeping for premium vineyards. [Schedule a demo](https://scheduler.zoom.us/d/1i222xhk/sentinel-demo) to see how it works on your property.*
