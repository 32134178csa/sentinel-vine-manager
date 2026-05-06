---
title: "What Vine-by-Vine Tracking Actually Means (and Why Block-Level Data Falls Short)"
description: "Most vineyard software tracks blocks. But the problems that cost you money—virus spread, failed replants, variable block performance—happen at the vine level. Here is what vine-by-vine GPS tracking actually captures."
keywords:
  - vine by vine tracking vineyard
  - vine by vine GPS
  - vineyard vine level tracking
  - RTK GPS vineyard
  - vineyard virus tracking software
  - vine-level vineyard records
  - Sentinel Vine Manager
publishDate: "2026-04-11"
author: "Christian Sidak"
---
# What Vine-by-Vine Tracking Actually Means (and Why Block-Level Data Falls Short)

Most vineyard management software tracks blocks. You log sprays by block, record observations by block, flag virus pressure by block, and report yield by block. For many administrative purposes, that is fine. But the problems that cost you real money—a leafroll infection that has been spreading for two seasons before you noticed, a replant that keeps dying because the wrong rootstock went into the wrong position, a row where vines chronically underperform with no documented history of why—do not happen at the block level. They happen at the vine.

This post explains what vine-by-vine tracking actually means in practice, what block-level data cannot capture, and why RTK GPS is the technology that makes individual vine records practical at scale.

## The Limits of Block-Level Tracking

A block is a management unit, not a biological unit. Vines within a block can differ dramatically in variety, rootstock, age, health status, and productivity. When you record data at the block level, you are averaging across all of that variation.

That averaging causes specific, expensive problems:

**Virus management.** Leafroll virus and red blotch disease do not spread uniformly across a block. They move vine by vine—often following a directional pattern driven by mealybug vectors, equipment movement, or proximity to an infected neighbor vine. When you identify "leafroll pressure in Block 7," what you actually have is a spatial distribution of infected versus clean vines within Block 7. Some of those vines may be severely symptomatic. Others may be newly infected but not yet showing symptoms. Others may be clean.

If your records only go to the block level, you cannot answer the questions that matter: Where exactly are the infected vines? How has the distribution changed from last season? Which clean vines are adjacent to infected ones and therefore at highest risk? Block-level data tells you there is a problem. Vine-level data tells you where it is, how it is moving, and what to do about it.

**Rouging decisions.** Rouging—the selective removal of virus-infected vines—requires knowing which vines to pull. This is by definition a vine-level decision. The standard workflow without vine-level records involves a scouting crew walking rows with flagging tape, marking infected vines in the field. Then a second crew removes the flagged vines. Then records are updated (if they are updated at all) to reflect what was removed.

Flagging tape blows off. Records do not always get updated. The next season, someone needs to re-scout to figure out what was removed versus what was missed versus what is newly infected. Without a permanent vine-level record, every rouging season starts from scratch.

**Replant tracking.** When you replant a vine, you want to know the new vine's variety, rootstock, clone, planting date, and GPS location—and you want that information to follow the vine through its life. Block-level records do not capture this. A block that was 100% Cabernet Sauvignon on 110R in 2010 might now contain a mix of original vines, 2015 replants on 1103P, and 2021 replants on SO4. The only way to know which vine is which is a vine-level record tied to a GPS coordinate.

This matters for spray programs (young vines have different needs than mature ones), for crop load management, for yield expectations, and eventually for understanding block performance over time.

**Variable block performance.** In any block that has been in the ground long enough, there are zones that consistently outperform or underperform relative to the block average. Some of that variation is soil. Some is rootstock. Some is vine age. Some is cumulative disease history. Without vine-level records, you are guessing at the cause. With vine-level records, you can cross-reference current performance against historical spray records, replant history, and observed health status for each vine—and start identifying patterns.

## How RTK GPS Makes This Practical

The conceptual case for vine-level records is not new. Viticulturists have been marking individual vines with flagging tape and paper maps for decades. The problem has always been scale and permanence. Flagging tape fades and blows off. Hand-drawn maps do not follow the vine through personnel turnover. Spreadsheets with row and vine numbers capture some information but not location, and they require discipline to maintain.

RTK GPS (Real-Time Kinematic GPS) is the technology that changes the economics. RTK achieves sub-centimeter horizontal accuracy—precise enough to place a GPS coordinate on an individual vine, reliably, in the field, without post-processing. A field crew with an RTK receiver and a tablet can walk a vineyard and stamp every vine with its permanent location in a few hours. Once each vine has a GPS coordinate, every subsequent record—spray application, health observation, rouging, replant—attaches to that coordinate.

The result is a digital record that behaves like flagging tape that never fades. Each vine's position is fixed. Its history accumulates automatically as work is recorded.

For a 200-acre estate with roughly 100,000 vines, this level of tracking was not practical with prior technology. RTK GPS combined with a mobile-first platform designed for field use makes it routine.

## What Vine-Level Records Look Like in Practice

In Sentinel Vine Manager, each vine in a mapped block has a GPS coordinate, a unique ID, and a property record. That record carries:

- **Variety, rootstock, clone** (set at planting or during initial mapping)
- **Planting date and generation** (original vine vs. replant, and which replant generation)
- **Health status flags** (leafroll presence, red blotch, other observations, keyed to specific scouting events)
- **Spray history** (every work order that targeted this vine or the block it is in)
- **Work order history** (what was done to this vine, by whom, and when)

Because Sentinel uses RTK GPS coordinates as the persistent identifier, a vine's record survives block renaming, personnel turnover, and software transitions. The vine's history is tied to its physical location on earth, not to a label in a particular database.

## The Compounding Value of Long Records

Vine-level records are most valuable when they have been accumulating for years. In the first season, the main benefit is operational accuracy—knowing exactly what is in your vineyard and building a baseline. In the third season, patterns start to emerge. By the fifth season, you can look at a replant that is underperforming and trace its full history: rootstock, planting date, adjacent vine health status at planting, cumulative spray exposure. You can see whether an apparent disease problem in a block section correlates with a specific replant cohort or with proximity to a known infection source from several seasons ago.

Block-level records do not compound in the same way because they cannot answer questions about individual positions in the vineyard. They can tell you that Block 7 had leafroll issues in 2022. Vine-level records can tell you which specific vines were affected, which adjacent vines showed up infected the following year, and where the front of the infection is today.

That kind of longitudinal spatial data is what makes it possible to manage a vineyard strategically over time—rather than reacting to each season's observations with limited context.

## Getting Started

Vine-by-vine GPS mapping is a one-time investment in your vineyard's foundation data layer. Once each vine has a coordinate and an initial record, ongoing data collection happens as a natural byproduct of work that is already being done: spray crews record applications, scouting teams log observations, replant crews stamp new vines at planting.

For most operations, the initial mapping of an existing estate takes one to three days of field work with an RTK receiver. Subsequent seasons are maintenance, not setup.

If you are managing a premium estate and still working from block-level records, it is worth seeing what vine-level data looks like for your specific operation.

[Schedule a demo here](https://scheduler.zoom.us/d/1i222xhk/sentinel-demo)—we can walk through what vine-by-vine GPS tracking looks like for an estate of your size and show you what the data captures that block-level records do not.
