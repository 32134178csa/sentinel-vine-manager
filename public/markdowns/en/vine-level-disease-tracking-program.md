---
title: "How to Build a Vine-Level Disease Tracking Program"
author: "Christian Sidak"
date: "2026-04-21"
image: "/img/blog/disease-tracking.webp"
---

# How to Build a Vine-Level Disease Tracking Program

Every vineyard has disease. Red blotch, leafroll, crown gall, Esca -- the specific pathogen varies by region, but the management challenge is universal. The vineyards that contain disease effectively are not the ones with the biggest budgets or the most aggressive spray programs. They are the ones that know exactly where every infected vine is, how the infection has moved over time, and which clean vines are at risk next season.

That level of precision requires a vine-level disease tracking program -- a systematic approach to scouting, recording, mapping, and analyzing disease data at the individual vine rather than the block or row. Most vineyards do not have one. Most vineyards are managing disease with physical flagging tape, paper tally sheets, and institutional memory that walks out the door when a crew lead moves on.

This guide covers how to build a vineyard disease management program from scratch, what technology is required, what mistakes to avoid, and when the economics justify starting.

## Why Vine-Level Matters for Vineyard Disease Management

Block-level disease tracking tells you that Block 4 has "some red blotch." It does not tell you which vines are infected, whether those vines are clustered at the south end or scattered throughout, how many of last year's flagged vines have been rogued, or whether the 18 symptomatic vines you counted this September represent containment or a 40% increase from the 13 you counted last year.

The difference matters because the decisions that cost money -- roguing, replanting, adjusting irrigation, modifying spray programs -- are all vine-level or sub-block-level decisions. You do not rogue a block. You rogue individual vines. You do not replant an entire property because it has virus pressure. You replant [specific blocks where the infection density has crossed a threshold](/blog/the-replant-decision) that makes continued management uneconomical.

Without vine-level data, those decisions get made by feel. With vine-level data, they get made by pattern -- spatial patterns that reveal how disease is moving, temporal patterns that show whether your interventions are working, and economic patterns that quantify the actual yield and quality impact of infection in your specific vineyard, on your specific rootstocks, under your specific management regime.

### The Spatial Structure of Vineyard Virus Spread

Red blotch and leafroll do not spread randomly. Red blotch is transmitted by the three-cornered alfalfa hopper (*Spissistilus festinus*), which moves in predictable patterns influenced by ground cover, row orientation, and proximity to orchard or grassland borders. Oregon State University research on red blotch epidemiology has documented that spread is often directional -- new infections cluster near existing ones and advance along rows before jumping to adjacent rows.

Leafroll, transmitted primarily by mealybugs and soft scale insects, follows similar spatial logic. UC Davis research on grapevine leafroll-associated viruses (GLRaVs) has shown that mealybug movement creates expanding infection fronts that can be mapped and predicted -- but only if you have per-vine position data across multiple seasons.

If you cannot see the spatial structure, you cannot manage it. You are fighting blind, removing vines reactively instead of strategically, and missing the leading edge of spread while spending resources on vines that are already surrounded.

## The Cost of Getting Vineyard Disease Tracking Wrong

The economics of vineyard virus management are straightforward but punishing. An infected vine that goes undetected for two seasons does not just produce poor fruit -- it becomes a source of inoculum that puts its neighbors at risk. The cost compounds:

**Direct yield loss.** Leafroll reduces yield by 20-40% in infected vines. Red blotch reduces sugar accumulation by 1-3 Brix and can delay ripening by 2-4 weeks, making infected vines incompatible with the harvest window for the rest of the block.

**Quality dilution.** In premium winegrowing -- where fruit prices in Napa run $8,000 to $15,000 per ton for Cabernet Sauvignon -- even a small percentage of infected fruit blended into the lot can measurably alter wine chemistry. Winemakers who discover post-harvest that infected fruit made it into a premium lot do not forget.

**Replant costs.** When disease pressure crosses the threshold where roguing can no longer contain it, the block goes on the replant schedule. In Napa, a full replant runs [$30,000 to $80,000 per acre](/blog/the-replant-decision) depending on site prep requirements, rootstock selection, trellis rebuild, and three to four years of lost production. On a 10-acre block, that is a $300K to $800K decision.

**Regulatory exposure.** In California, CDFA requires reporting of certain plant pests and diseases. Properties that cannot demonstrate a systematic tracking and management program face regulatory scrutiny. The 2024 updates to CDFA pest reporting guidelines increased documentation expectations for commercial vineyards dealing with known viral pathogens.

The common thread: every one of these costs is amplified by delayed detection and imprecise tracking. A vineyard that catches a red blotch cluster at 8 vines and rogues strategically spends a fraction of what a vineyard that discovers the same cluster at 80 vines will spend.

## Step-by-Step: Building a Vine-Level Disease Tracking Program

### Step 1: Establish Your Vine Inventory with GPS Coordinates

Before you can track disease at the vine level, you need to know where every vine is. That means a complete vine inventory with GPS coordinates -- not row-and-position numbers on a spreadsheet, but actual geospatial coordinates that place each vine on a map.

The precision requirement here matters. Consumer-grade GPS (3-5 meter accuracy) is not sufficient. At 3-meter accuracy, you cannot distinguish between adjacent vines in most trellis configurations. You need sub-meter accuracy at minimum, and RTK GPS (real-time kinematic, sub-centimeter accuracy) is the standard for vine-level work.

The inventory process involves walking or driving every row with an RTK GPS device and logging each vine position along with basic attributes: variety, rootstock, plant year, and current status (producing, young, missing, dead). This is a one-time setup cost that pays for itself across every subsequent operation -- not just disease tracking, but replant planning, yield estimation, irrigation management, and crew tasking.

Estates like Dominus, Dalla Valle, and Abreu have built complete vine inventories using [RTK GPS mapping systems](/blog/vine-by-vine-tracking-vineyard-gps) that record each vine's position permanently. Once the inventory exists, every subsequent observation -- disease flag, vigor score, roguing record -- attaches to a specific vine at a specific coordinate.

### Step 2: Scout Systematically and Record at the Vine

Scouting is where most disease tracking programs either succeed or fail. The difference between a useful scouting program and a wasted afternoon is whether observations get recorded at the individual vine with enough context to be actionable later.

A systematic scouting protocol for vineyard virus tracking includes:

- **Timing.** For red blotch, late August through October when leaf symptoms are most visible. For leafroll, mid-summer through veraison when rolling and discoloration appear in red varieties. For Esca, symptoms can appear mid-season as tiger-stripe patterns on leaves.
- **Coverage.** Every row, every vine. Sampling -- walking every third row and extrapolating -- misses the spatial structure that makes vine-level data valuable. If you are going to build a vine-level program, commit to vine-level coverage.
- **Recording method.** Each symptomatic vine gets tagged in a mobile app with its GPS coordinate, the disease or symptom observed, severity (light, moderate, severe), and the date. Photos are valuable for ambiguous symptoms. The record must be permanent and tied to the vine coordinate -- not to a flag that will be gone by January.

This is where the concept of "digital flagging tape" replaces the physical version. Physical flags fall off, fade, get pulled during dormant-season operations, and carry no metadata. A GPS-linked digital record persists indefinitely, carries the full observation history, and is visible to every member of the team without walking the row.

### Step 3: Map the Spread

Once you have two or more seasons of vine-level disease data, the map becomes your most powerful analytical tool. Plotting flagged vines by year reveals the spread pattern -- the direction, velocity, and clustering behavior of the pathogen in your specific vineyard.

Key mapping analyses for vineyard disease management software include:

- **Year-over-year overlay.** Show all vines flagged in 2024 in one color and all vines newly flagged in 2025 in another. The new infections, plotted against the prior year's map, reveal where spread is occurring and which direction it is moving.
- **Cluster identification.** Groups of infected vines that are spatially contiguous represent active spread zones. Isolated infections that have not expanded may represent older, contained events or false positives worth re-testing.
- **Proximity analysis.** For every clean vine, how many infected vines are within a two-row, two-vine radius? Vines with high infected-neighbor counts are at elevated risk next season and should be prioritized for early-season inspection.
- **Roguing verification.** Vines that were flagged and scheduled for roguing -- were they actually removed? If not, they have been serving as inoculum sources for another season. The map answers this instantly.

### Step 4: Analyze Patterns Over Seasons

Single-season snapshots are useful. Multi-season trend analysis is where vine-level disease tracking becomes a strategic asset.

With three or more years of data, you can answer questions that block-level records cannot:

**Is containment working?** If you rogued 15 vines in Block 3 after the 2024 season and the 2025 survey shows 8 new infections, you need to know where those 8 are. If they are at the edges of the former cluster, spread is continuing despite roguing. If they are scattered in a new area of the block, you may have a separate introduction event.

**What is the spread rate?** Calculating the year-over-year increase in infected vines per block, and mapping the spatial expansion, gives you a predictive tool. If Block 3 went from 12 to 18 to 27 infected vines over three seasons, and the spatial analysis shows a consistent directional advance, you can estimate how many additional vines will be infected by 2027 and plan accordingly.

**Which blocks are candidates for replant?** [The replant decision](/blog/the-replant-decision) is ultimately an economic calculation: at what infection density does continued roguing cost more than pulling the block and starting over? That calculation requires knowing the current infection count, the spread rate, the yield differential between infected and clean vines, and the projected timeline for the block to cross a quality threshold. All of that data comes from vine-level records.

Oregon State University's ongoing red blotch research has emphasized the importance of multi-year tracking data for understanding spread dynamics. Their work in Willamette Valley Pinot Noir vineyards has shown that red blotch spread rates vary significantly by site, making property-specific data essential for management planning.

### Step 5: Make Data-Driven Pull Decisions

The culmination of a vine-level disease tracking program is the ability to make roguing and replant decisions based on data rather than intuition.

With a complete vine-level dataset, the roguing decision becomes precise:

- **Rogue the leading edge, not the center.** Vines at the expanding perimeter of an infection cluster are the highest-priority targets because they are actively spreading virus to clean neighbors. Vines deep inside an established cluster are less urgent -- their neighbors are already infected.
- **Calculate the cost-benefit of roguing vs. holding.** A vine in its 15th leaf that produces 8 lbs of $10,000/ton Cabernet represents roughly $40 in annual fruit revenue. Removing it costs the vine replacement expense plus 3-4 years of lost production on the replant. If the spatial analysis shows that vine is likely to infect 3 neighbors next season, the math favors removal.
- **Schedule roguing as a work order, not a memory.** Select flagged vines on the map, generate a work order with GPS coordinates for each vine, and assign it to a crew. The crew navigates to each vine by coordinate -- no searching for faded tape, no ambiguity about which vine to pull.

Staglin Family Vineyard uses this approach to maintain precise disease boundaries across their Rutherford estate, making pull decisions based on multi-year spatial data rather than single-season impression.

## Technology Requirements for Vineyard Virus Tracking

Building a vine-level disease tracking program requires specific technology. Here is what is necessary and what is optional.

### Required: RTK GPS

Sub-centimeter GPS accuracy is the foundation. RTK GPS systems use a base station and rover combination to achieve 1-2 cm positioning accuracy in real time. This precision is necessary because vine spacing in most premium vineyards is 4-8 feet -- consumer GPS cannot distinguish adjacent vines.

RTK base stations can be property-owned or accessed via CORS (Continuously Operating Reference Station) networks. A dedicated base station on the property provides the most reliable corrections, especially in hilly terrain where CORS coverage may be inconsistent.

### Required: Mobile App with Vine-Level Records

The scouting crew needs a mobile application that displays each vine on a map and allows them to record observations -- disease flag, symptom type, severity, date, and optional photos -- directly at the vine coordinate. The app must work offline in vineyard conditions where cell coverage is unreliable.

The app is the digital replacement for flagging tape. It needs to be fast enough that a crew member can flag a vine in under 5 seconds -- any slower and it becomes a bottleneck that discourages thorough scouting. For a comprehensive overview of what to look for in this category, see our [vineyard management software buyer's guide](/blog/vineyard-management-software-buyers-guide-2026).

### Required: Historical Overlays

The software must support multi-season data visualization -- the ability to overlay disease observations from different years on the same map view. Without historical overlays, you lose the temporal dimension that makes vine-level data valuable for tracking spread patterns and evaluating intervention effectiveness.

### Optional but Valuable: Integration with Lab Results

If you are sending leaf tissue samples for PCR testing to confirm visual diagnoses, the ability to link lab results back to specific vine coordinates closes the loop between scouting and confirmation. Visual symptoms alone have a false-positive rate -- especially for [red blotch, where nutrient deficiency and virus symptoms overlap](/blog/the-red-blotch-dilemma). PCR-confirmed records are more defensible and more useful for regulatory reporting.

### What Sentinel Provides

Sentinel Vine Manager was built specifically for this workflow. Every vine on the property is mapped with RTK GPS. Disease observations, roguing records, replant history, and vine health status are recorded at the individual vine and persist across seasons. The mobile app works offline with sub-second per-vine interaction times. Historical overlays show spread patterns across years, and work orders tie directly to vine selections on the map.

The result is what we call digital flagging tape -- a permanent, GPS-linked record that replaces the physical flags, paper sheets, and institutional memory that most vineyards rely on today. The record travels with the vine, not with the person who did the last survey.

## Common Mistakes in Vineyard Disease Management Programs

### Starting with Technology Instead of Process

The most common failure mode is purchasing software before establishing a scouting protocol. Technology records and organizes data -- it does not generate it. If your crew does not know what symptoms to look for, when to scout, or how to distinguish red blotch from potassium deficiency, the best software in the world will not help.

Invest in crew training first. UC Davis Cooperative Extension and Oregon State University both offer viticulture workshops specifically on virus identification and scouting methodology. Get the human process right, then layer technology on top.

### Scouting Once Per Season

A single annual survey captures a snapshot. It does not capture the full picture, because different diseases show symptoms at different times, and symptoms in the same disease can vary in visibility week to week depending on weather conditions.

At minimum, scout twice per season -- once in mid-summer for early-onset symptoms and once in late September / early October when full symptom expression has developed. If you are managing both [leafroll](/blog/leafroll-virus-vineyard-tracking-software) and red blotch, the optimal scouting windows may not overlap perfectly.

### Roguing Without Spatial Context

Removing infected vines without understanding the spatial distribution is like treating symptoms without diagnosis. If you rogue 20 vines scattered across a block without understanding the cluster structure, you may have removed 15 vines from the interior of an established cluster (low containment value) and only 5 from the leading edge (high containment value).

Always plot flagged vines on a map before making roguing decisions. The spatial view often changes priorities.

### Losing Data Between Seasons

This is the most expensive mistake and the most common. A vineyard spends 40 crew-hours scouting a 200-acre property, records disease observations on paper or in a spreadsheet, and by the following spring the data has been lost, reformatted beyond usefulness, or is locked in a file that only the departing vineyard manager knows how to interpret.

Vine-level disease data must be stored in a system that persists independently of any individual person's employment. GPS coordinates do not change. The disease record at vine position X should be accessible to whoever is managing the vineyard in 2028, regardless of who scouted it in 2025.

### Ignoring CDFA and Regulatory Requirements

California vineyards dealing with known viral pathogens have reporting and documentation obligations under CDFA guidelines. A systematic vine-level tracking program does double duty -- it improves your management and satisfies regulatory requirements for demonstrating that you are actively monitoring and managing disease on your property. Do not treat compliance as a separate task from management. Integrate it.

## When to Start a Vine-Level Disease Tracking Program

The short answer: before you need it. The value of vine-level disease data compounds over time -- you need multiple seasons of records before the spatial analysis becomes truly predictive. Starting after a disease outbreak is better than not starting, but starting before the pressure is acute gives you a baseline of clean vine locations that makes future spread detection much more precise.

Specific triggers that should prompt immediate implementation:

- **Any confirmed virus positive on the property.** If PCR testing has confirmed red blotch or leafroll in any block, the clock is running on spread. Start tracking now.
- **Replant planning.** If you are contemplating replanting any block in the next 3-5 years, vine-level disease data is the input that determines whether you need to replant the whole block or can address the problem with targeted roguing.
- **New property acquisition.** If you are purchasing vineyard acreage, building a complete vine-level health inventory during the first season gives you a baseline against which all future decisions are measured.
- **Viticulturist or crew lead transition.** When the person who carries the institutional knowledge about which vines are sick is leaving, you need that knowledge captured in a permanent system before they go.

The longer you wait, the more seasons of baseline data you miss, and the harder it becomes to distinguish new infections from old ones that were never recorded.

## Getting Started

Building a vine-level disease tracking program is a commitment to precision viticulture that pays back across every season. The vineyards that have the best disease outcomes are not the ones with the least virus pressure -- they are the ones that know exactly where it is, how it is moving, and what to do about it.

If you are ready to replace flagging tape and spreadsheets with permanent, GPS-linked vine records, [schedule a demo of Sentinel Vine Manager](https://scheduler.zoom.us/d/1i222xhk/sentinel-demo). We will walk through your specific property, discuss your disease pressure, and show you how estates across Napa and Sonoma are managing vine health at the individual vine level.

---

## Frequently Asked Questions

### What is vine-level disease tracking and how is it different from block-level monitoring?

Vine-level disease tracking records the health status of every individual vine using GPS coordinates, creating a permanent spatial record that shows exactly which vines are infected, when they were flagged, and how the infection pattern has changed over time. Block-level monitoring, by contrast, only tells you that a block has disease pressure -- it cannot show you the spatial structure, spread direction, or vine-specific history needed for targeted management decisions like roguing and replant planning.

### How much does it cost to replant a vineyard block with virus pressure?

In premium California winegrowing regions like Napa Valley, a full replant costs $30,000 to $80,000 per acre when you account for vine removal, soil preparation, new rootstock and budwood, trellis rebuild, and three to four years of lost production while new vines come into bearing. On a 10-acre block, that represents a $300K to $800K decision -- which is why precise vine-level data that can delay or avoid unnecessary full-block replants has significant economic value.

### What GPS accuracy is needed for vineyard virus tracking?

Consumer-grade GPS with 3-5 meter accuracy is not sufficient for vine-level work because it cannot reliably distinguish between adjacent vines in standard trellis configurations (4-8 foot spacing). RTK GPS, which achieves sub-centimeter accuracy using a base station and rover, is the standard for vineyard vine-level mapping. This precision ensures that disease observations, roguing records, and replant history are correctly attributed to the right vine.

### Can I start a disease tracking program if I already have virus on my property?

Yes, and you should start immediately. While having a pre-infection baseline is ideal, most vineyards begin tracking after virus has already been detected. The first season of vine-level scouting establishes your current state -- which vines are infected, where the clusters are, and what the spatial distribution looks like. From the second season onward, you can track spread rate, evaluate roguing effectiveness, and make data-driven decisions about containment versus replant. Every season of delay is a season of unrecorded spread.

### What diseases can be tracked with a vine-level program?

Any disease or vine health condition that manifests at the individual vine can be tracked: red blotch, leafroll (GLRaV-3 and other strains), Esca/Young Vine Decline, crown gall, Eutypa, Phomopsis, fanleaf, and Pierce's disease. The same GPS-linked vine record that captures a red blotch flag can also record vigor observations, nutrient deficiency symptoms, frost damage, and mechanical injury -- building a comprehensive vine history that informs management across multiple dimensions.
