---
title: "Vineyard Work Orders: How to Close the Loop Between Scout and Field Crew"
description: "Vineyard work orders break down when scouting data does not connect to crew execution. Learn how vine-level work orders with auto-updating statuses close the gap between what your scout finds and what your crew does about it."
keywords: ["vineyard work orders", "vineyard crew management software", "vineyard task management", "vineyard work order software", "vineyard crew coordination", "precision viticulture work orders"]
author: "Christian Sidak"
date: "2026-04-22"
image: "/img/blog/work-orders.webp"
---

# Vineyard Work Orders: How to Close the Loop Between Scout and Field Crew

Vineyard work orders are the connective tissue between scouting and field execution. When your scout walks a block and flags thirty vines with leafroll symptoms, the question is not whether those vines need attention. The question is whether the crew that shows up next week will know exactly which thirty vines to pull, whether they will pull the right ones, and whether the vineyard's records will update without someone manually editing a spreadsheet three days later.

In most operations, the answer to all three is "not reliably." The scout flags. Someone writes it up. The crew gets instructions. The records catch up eventually, if at all. Between the scout's observation and the vineyard's official data, there is a gap -- and that gap is where decisions degrade.

This post is about closing that gap with vineyard work orders that operate at the vine level, connect scouting data directly to crew assignments, and auto-update the vineyard database the moment a task is marked complete.

## The Communication Gap in Vineyard Operations

Every vineyard manager knows this pattern. A scout walks a block, identifies a problem -- Red Blotch symptoms, dead vines, gopher damage -- and records what they find on paper, in a phone app, or by tying flagging tape to affected vines. That information reaches the vineyard manager, who dispatches a crew.

Between the scout's observation and the crew's action, several things go wrong.

**The location gets lost.** The scout knows exactly which vines they flagged. The crew leader who shows up two weeks later does not. "Rows 14 through 20, there are some flagged vines" leads to missed vines, wrong vines, and wasted time looking for tape that may have fallen off.

**The scope is unclear.** The scout flagged thirty vines, but the work order says "rogue leafroll-positive vines in Block 7." Are there thirty or fifty? Are they all confirmed positive, or some just symptomatic? The crew cannot tell.

**Completion is unverified.** The crew reports "Block 7 is done." But did they get all thirty vines? There is no spatial verification of what was actually done versus what was assigned.

**The records lag behind reality.** After the crew finishes, someone needs to manually update thirty vine records -- disease status, production count, dates. In practice, this happens the following week, or not at all until someone needs the data.

This is not a people problem. It is a systems problem. When scouting data, work orders, and vine records live in separate places, the gap between them is structural. Closing it requires all three to live in the same system, referencing the same vines.

## What Vine-Level Vineyard Work Orders Actually Look Like

In a block-level system, a work order targets a block or row range. "Spray Block 4 with sulfur." That is adequate for uniform operations -- canopy management, most spray programs, mowing. But many consequential vineyard operations are not uniform. Roguing targets specific infected vines. Replanting targets specific positions where vines were removed. These operations require the work order to know which individual vines are involved.

A vine-level [work order](/workOrders) starts with a query, not a location description. Instead of "Block 7, rows 14-20," the work order says "all vines in Block 7 where disease status equals leafroll-positive and test date is after January 2026." That query resolves to a specific list of vines, each with GPS coordinates and current status. The crew opens the work order on a mobile device and sees exactly which vines are highlighted on the map.

Here is what that looks like in practice with Sentinel:

1. **Scout walks the block** using the Sentinel iOS app. For each symptomatic vine, they tap the vine on the map (or walk to it and let GPS locate it) and update its status -- "symptomatic," "flagged for testing," or whatever the property's protocol dictates.

2. **Lab results come back.** The vineyard manager updates the tested vines' disease status to "positive" or "negative" based on the results. The map now shows confirmed infections, not just visual symptoms.

3. **Manager creates a work order.** They select a vine query -- "Block 7, disease status = positive, not yet rogued" -- and the system generates a work order targeting exactly those vines. The work order includes a map view, a vine count, and any instructions the manager adds.

4. **Crew receives the work order** on their mobile device. They see the targeted vines highlighted on the block map. As they rogue each vine, they mark it complete in the app.

5. **Vine statuses auto-update.** When a vine is marked as rogued in the work order, its disease status flips to "No-Virus" and its production status flips to "Miss" (indicating a missing vine in the row). This happens immediately, without anyone manually editing the vine record.

6. **Manager reviews completion.** The work order shows how many vines were completed out of how many were assigned. The vineyard map already reflects the updated statuses. The roguing event is recorded in each vine's history.

That six-step cycle -- scout, test, order, execute, auto-update, verify -- is the closed loop. No transcription. No reconciliation. No lag between field reality and database reality.

## Auto-Updating Vine Statuses: Why It Matters More Than You Think

The auto-update mechanism is what separates vine-level work orders from sophisticated to-do lists. When a crew member completes a task on a specific vine, the vine's properties change automatically based on the work order type. This is the mechanism that keeps a vineyard's data layer accurate over time.

Without it, a crew rogues twenty vines in Block 3 and someone needs to manually change each vine's disease status and production status in the database -- forty edits. If they forget two, the database drifts from reality. Multiply that by every block, every season, and the gap becomes significant.

With auto-updating statuses, the act of completing the work IS the record update. The crew member who marks a vine as rogued in the field has simultaneously:

- Changed the vine's disease status
- Changed the vine's production status to "Miss"
- Added a roguing event to the vine's history with a timestamp
- Updated block-level statistics (producing vine count, disease prevalence)

That is what closing the loop means -- not faster paperwork, but eliminating the paperwork entirely by making the work itself generate the record. When the vineyard manager looks at the disease map after the crew finishes, it already shows current state. Replant orders, spray program adjustments, and yield estimates can be planned from data that reflects today, not last week.

## Work Order Types: From Roguing to Replanting

Different vineyard operations create different kinds of work orders, and each one interacts with the vine database differently. Here are the most common types and what they do when completed.

### Roguing Work Orders

Roguing is the operation where vine-level work orders deliver the most value. A roguing work order targets vines with a specific disease status -- confirmed positive, symptomatic above a threshold, or whatever criteria the manager sets. When a vine is marked as rogued:

- Disease status updates to reflect removal (typically "No-Virus" since the infected plant is gone)
- Production status changes to "Miss"
- The vine's history records the roguing date
- Block-level statistics update automatically

For operations managing Red Blotch or leafroll, roguing work orders are the mechanism that keeps the disease map current season over season. At properties like Abreu Vineyard and Staglin Family Vineyard, where virus management decisions directly affect the quality and value of the fruit, having an accurate, always-current disease map is not optional. It drives replanting timelines, spray protocols, and financial planning. For more on building a systematic approach to disease data, see our guide on [how to build a vine-level disease tracking program](/blog/vine-level-disease-tracking-program).

### Replanting Work Orders

After roguing, the missing vines need to be replaced. A replanting work order targets vine positions that are currently in "Miss" status within a block. The work order specifies what is being planted -- variety, rootstock, clone -- and when a position is marked as replanted:

- Production status changes from "Miss" to "Young Vine" (or equivalent non-producing status)
- The vine record gets new variety and rootstock attributes if the replant differs from what was removed
- Planting date is recorded
- The block's total vine count and producing vine count update accordingly

This creates a continuous thread of data from the original vine through roguing through replant. Three years after a replant, you can trace back to see when the original vine was flagged, when it tested positive, when it was rogued, and when its replacement was planted. That history lives on the same GPS coordinate permanently.

### Grafting Work Orders

Grafting work orders target vines that need variety changes -- typically field grafting to convert a block from one variety to another, or to replace underperforming clones. When a vine is marked as grafted:

- Variety and/or clone attributes update to reflect the new scion
- Production status may change to reflect the vine's return-to-production timeline
- Grafting details (date, scion source) are recorded in the vine's history

### Spray and Scouting Work Orders

Spray work orders target areas rather than individual vines -- blocks, sub-blocks, or polygons on the map. Completion records capture products, rates, coverage, and timing. The primary downstream value is compliance -- spray work orders generate the data needed for [PUR reporting](/blog/california-pur-reporting-vineyard-automation) and organic certification without manual re-entry.

Scouting work orders are where the cycle begins. They assign a crew member to walk specific blocks and record observations -- updating vine statuses, attaching photos, and recording notes. Scouting generates the data that drives roguing work orders, which drive replanting work orders. Each stage feeds the next, and the vine database stays current through all of it.

## Crew Accountability Without Micromanagement

How do you know the work was done correctly without physically walking behind the crew? Paper-based systems offer almost no verification. Vine-level work orders provide accountability through data, not surveillance.

When a roguing work order assigns thirty vines and the crew marks twenty-eight complete, the two remaining vines are visible immediately. The manager sees which specific vines were skipped and can ask why. The conversation is specific, not vague. GPS verification adds another layer -- the system can confirm the crew was physically at each vine's coordinates, producing defensible records for compliance audits and insurance claims.

For operations like Dominus Estate, where disease management precision directly affects fruit quality and property value, this visibility is a practical necessity. And critically, it is a byproduct of the workflow, not an extra burden on the crew. They complete work orders on their mobile device the same way they would in any system. The accountability comes from the fact that the system knows which vines were assigned and which were marked done. We wrote about the broader challenge of retaining operational knowledge in [The Knowledge That Walks Out the Door](/blog/the-knowledge-that-walks-out-the-door) -- vine-level work order records keep that knowledge in the system even when people leave.

## Before and After: A Roguing Campaign

Abstract descriptions of software are less useful than concrete scenarios. Here is a situation that plays out very differently depending on whether vine-level work orders are in place.

**Before (paper/spreadsheet system):**

Your scout walks Block 5 after harvest and ties pink tape to 45 symptomatic vines. The vineyard manager cross-references last year's data, decides to rogue all 45 plus 12 flagged last year. The crew goes out with a printed list of 57 positions. Some tape has blown off. Three of last year's vines cannot be located because row numbers were changed during a partial replant. The crew rogues 51 and reports complete. The manager means to update the spreadsheet but does not get to it until January. By then, he cannot remember whether the six unrogued vines were skipped deliberately or accidentally.

**After (vine-level work orders in Sentinel):**

The scout walks Block 5 using the Sentinel app, tapping each symptomatic vine on the map. The manager sees 45 new flags alongside 12 from last year still showing "positive, not rogued." He creates a roguing work order: "Block 5, disease status = positive OR symptomatic." The system resolves to 57 vines.

The crew sees 57 highlighted vines on their map. They mark each as rogued. When finished, 55 are complete. Two were skipped -- the app shows which two with the crew lead's note explaining why. The 55 rogued vines already have cleared disease status and "Miss" production status. The disease map is accurate today, and the replant order can target 55 specific GPS positions immediately.

The same pattern applies to replanting. When a replanting work order closes, every "Miss" position that received a new vine updates to "Young Vine" automatically. Three years later, you can trace every vine position from original flagging through roguing through replant -- all on the same GPS coordinate, all maintained by the work orders that drove each step. For a deeper look at how [rapid vine mapping](/rapidMapping) underpins this kind of longitudinal tracking, see our mapping overview.

## ROI and Time Savings

Quantifying the ROI of vineyard crew management software is harder than vendors like to admit, because value accumulates over seasons. But the components are measurable.

**Time savings on record keeping.** For a mid-size operation (100-300 acres) with active disease management, manual work order transcription typically takes 3-8 hours per week during growing season. With auto-updating work orders, that drops to near zero.

**Reduced roguing errors.** A missed leafroll-positive vine can infect 2-5 adjacent vines per season via mealybug transmission. At $30-50 per vine for roguing and replanting, each missed vine costs $60-250 in future remediation. Accurate targeting through vine-level work orders eliminates the most common source of these misses.

**Faster replant cycles.** When rogued positions are immediately queryable, replant orders can be placed sooner. Shortening the gap between roguing and replanting by one season means one fewer year of lost production from that position.

**Compliance time savings.** When spray work orders generate compliance-ready data automatically, PUR reporting shrinks from days to hours. See our post on [PUR reporting automation](/blog/california-pur-reporting-vineyard-automation) for details.

For most operations, the break-even comes in the first season on record keeping time savings alone. The compounding value from accurate disease tracking and faster replant cycles is where the long-term ROI lives.

## Implementation: Getting From Paper to Vine-Level Work Orders

Transitioning to vine-level vineyard work orders is not an overnight switch, and it does not need to be. Most operations implement in phases.

### Phase 1: Map the Vines

Everything starts with the vine map. Before you can create work orders that target individual vines, those vines need to exist in the system with GPS coordinates. Sentinel's [rapid mapping](/rapidMapping) process uses RTK GPS to place every vine with sub-inch accuracy. For most properties, initial mapping takes one to three days depending on acreage, and it only needs to be done once. The map is permanent -- vines do not move.

### Phase 2: Establish Baseline Status

Once vines are mapped, record their current status. For disease management, this means walking each block with the app and marking known positives, negatives, and unknowns. You cannot create a roguing work order targeting "all positive vines" until the system knows which vines are positive. Some operations build this baseline during regular scouting cycles; others do a dedicated baseline walk.

### Phase 3: Start With Roguing and Replanting

Roguing and replanting are the highest-value starting point. Create work orders for your next roguing campaign using the vine query system, let crews complete them on mobile devices, and watch the vine statuses update automatically. This is usually the moment when vineyard managers see the value clearly.

### Phase 4: Expand and Analyze

Once roguing and replanting are running through the system, expand to spray work orders (for compliance data), scouting work orders (to formalize your scouting process), and other operation types. After two full seasons, you can start seeing trends: Is disease spreading or contracting? Are replants surviving? Is the producing vine count recovering?

Operations like Dalla Valle Vineyards have built multi-year datasets that inform decisions about which blocks justify continued investment and which should be considered for full replant. That kind of analysis is only possible when the data is vine-specific, GPS-accurate, and maintained continuously through the work order cycle. For more on how [disease tracking](/diseaseTracking) connects to these long-term management decisions, see our disease tracking overview.

## Choosing the Right Vineyard Task Management Software

Not every vineyard management platform handles work orders the same way. When evaluating vineyard task management tools, ask these questions:

- **Does the work order target individual vines or only blocks?** For disease management, replanting, and grafting, vine-level targeting is essential. Block-only systems still leave you relying on paper to identify specific vines.
- **Do completed work orders automatically update vine records?** If someone separately has to update the vine database after work order completion, you still have the gap. The auto-update is what closes the loop.
- **Can work orders be created from vine queries?** Querying by vine properties (disease status, production status, planting date) is what makes the system dynamic and adaptable as new data comes in.
- **Does the mobile app work offline?** If the crew cannot access or complete work orders without cell signal, the system will not get used consistently.
- **Is there a clear audit trail?** Every work order should record who created it, who completed it, when, and which vines were affected.

For a broader comparison of vineyard software capabilities, our [2026 buyer's guide](/blog/vineyard-management-software-buyers-guide-2026) covers the full landscape including mapping, disease tracking, and work order features across different platforms.

## Close the Loop

The gap between scouting and execution in vineyard operations is not inevitable. It is a consequence of systems that were not designed to connect the two. When vineyard work orders operate at the vine level, when crew completion updates the database automatically, and when every operation -- from roguing to replanting to spraying -- generates records tied to specific GPS coordinates, the loop closes.

Your scout finds a problem. The system turns it into a work order. The crew executes it. The records update themselves. The next decision is based on current data, not last month's spreadsheet.

That is what vineyard crew management software should do. Not add another layer of data entry to your team's workload, but eliminate the data entry by making the work itself the record.

If you want to see what this looks like with your own vineyard data -- your blocks, your disease pressure, your actual work order workflow -- we would welcome the chance to walk through it with you.

[Schedule a demo](https://scheduler.zoom.us/d/1i222xhk/sentinel-demo) and we will show you how Sentinel closes the loop between scout and field crew on your specific property.

---

## Frequently Asked Questions

### What are vineyard work orders and why are they different from regular task management?

Vineyard work orders are task assignments specific to vineyard operations -- roguing, replanting, grafting, spraying, scouting, and harvest. What makes them different is the spatial component: a vineyard work order should reference specific vines on a GPS map, and completion should generate a verified spatial record. General task management tools have no concept of vine positions, disease statuses, or the spatial data that makes vineyard records useful over time.

### How do auto-updating vine statuses work when a work order is completed?

When a crew member marks a vine as "done" within a work order, the vine's properties update automatically based on the work order type. For roguing, disease status clears and production status changes to "Miss." For replanting, production status changes to "Young Vine" and new variety/rootstock are recorded. This happens immediately in the field -- the work itself becomes the data entry.

### Can vineyard crew management software work without cell signal in the field?

Yes, if designed for offline use. Sentinel's iOS app syncs data locally, so crews can view maps, access work orders, and mark tasks complete without cell coverage. Changes sync when connectivity returns. This is critical because cell coverage in vineyard regions is often unreliable.

### How long does it take to implement vine-level work orders?

Implementation starts with mapping your vines -- typically one to three days of RTK GPS mapping depending on property size. Once vines are in the system, work orders can be dispatched immediately. Most operations start with roguing and replanting, then expand over the first season. The typical timeline from mapping to full adoption is one to two months.

### What is the ROI of switching from paper work orders to digital vine-level work orders?

The ROI comes from three sources: time savings on record keeping (3-8 hours per week during growing season for mid-size operations), reduced errors in disease management (each missed positive vine costs $60-250 in future remediation), and faster management decisions based on always-current data. Most operations break even within the first season on time savings alone.
