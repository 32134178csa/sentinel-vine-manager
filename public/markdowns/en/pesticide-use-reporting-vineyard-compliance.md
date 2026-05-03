---
title: "Pesticide Use Reporting for Vineyards: How to Automate California PUR Compliance"
description: "Pesticide use reporting for vineyards is a compliance requirement that consumes hours of admin time each week. Learn how to automate California PUR filings, track REI/PHI intervals, and eliminate spreadsheet reconciliation with vineyard spray record software."
keywords:
  - pesticide use reporting vineyard
  - California PUR compliance
  - vineyard spray record software
  - pesticide use report
  - PUR reporting vineyard
  - CalAgPermits
  - vineyard compliance automation
  - REI PHI tracking vineyard
  - CDPR pesticide reporting
  - Sentinel Vine Manager
author: "Christian Sidak"
date: "2026-04-22"
image: "/img/blog/pur-compliance.webp"
---

# Pesticide Use Reporting for Vineyards: How to Automate California PUR Compliance

Pesticide use reporting for vineyards is one of those compliance obligations that everyone acknowledges and nobody enjoys. If you farm grapes in California, every restricted material application has to be documented and submitted to your county Agricultural Commissioner within 7 days. That includes most fungicides, herbicides, and insecticides that a typical Napa, Sonoma, or Central Coast vineyard applies throughout the growing season. The reporting volume adds up quickly -- and the consequences of getting it wrong are real.

The challenge is not that the rules are unclear. California's Department of Pesticide Regulation (CDPR) has one of the most detailed pesticide tracking systems in the world. The challenge is that the manual workflow most vineyards use to stay compliant -- paper logs, spreadsheet reconciliation, separate portal entry -- is slow, error-prone, and disconnected from the actual spray work happening in the field.

This post covers what California PUR compliance requires, where the process breaks down for vineyard operations, and how vineyard spray record software can automate the entire reporting pipeline from field application to regulatory submission. If you are managing 50 acres or more and filing PUR reports by hand, this is the case for doing it differently.

## What Is Pesticide Use Reporting and Why Does It Matter for Vineyards?

California's Pesticide Use Report (PUR) system is administered by the California Department of Pesticide Regulation (CDPR) and enforced at the county level through Agricultural Commissioners. It is the most comprehensive pesticide tracking program in the United States, and it has been in place since 1990.

The core requirement is straightforward: any application of a restricted pesticide must be reported within 7 calendar days. For vineyards, this covers the vast majority of materials you apply -- Movento for mealybug, Rally or Quintec for powdery mildew, Roundup or Rely for weed management, and dozens of other products that carry restricted use designations in California.

Each PUR submission requires the following data points:

- **Operator identification** -- your name, address, and county agricultural permit number
- **Site location** -- county, township/range/section, or GPS coordinates of the treated area
- **Product details** -- the exact product name, EPA registration number, and active ingredient
- **Application specifics** -- rate applied, total amount used, method of application (ground, aerial, chemigation)
- **Treated acreage** -- the actual area treated, not the total block size
- **Crop and pest** -- commodity (grapes, in this case) and the target pest or disease
- **Date and time** -- start and end time of the application
- **Applicator information** -- the certified applicator's name, QAC or QAL number, and employer

The filings are not optional, and they are not just paperwork for the sake of paperwork. CDPR uses this data to monitor pesticide loads across the state, identify environmental risks near waterways and schools, and track long-term trends in chemical use by crop. County Agricultural Commissioners use the data for enforcement -- they inspect operations, audit filings, and can issue penalties for non-compliance.

### Penalties for Non-Compliance

Failure to file PUR reports on time, or filing inaccurate reports, can result in civil penalties up to $5,000 per violation under the California Food and Agricultural Code, permit suspension or revocation by the county Commissioner, enhanced inspection frequency, and downstream liability during sustainability audits or buyer due diligence.

For premium vineyard operations, the reputational risk alone makes compliance non-negotiable. For larger-scale operations, permit suspension means you cannot spray -- an existential risk during a downy mildew year.

## The Compliance Pain: Why Manual PUR Reporting Breaks Down

Understanding the requirement is the easy part. The hard part is the workflow that most vineyards use to actually meet it.

Here is what the typical process looks like at a vineyard operation running 100-300 acres with a 15-20 application spray program:

**Step 1: Field recording.** A crew chief or applicator records the spray event on a paper log, in a notes app, or in whatever system the farming company uses. The data captured is usually incomplete -- product name and block, maybe the rate, rarely the exact start/end time or the acreage actually treated versus total block acreage.

**Step 2: Weekly reconciliation.** Someone in the office collects the week's spray logs and cross-references them against inventory, the spray plan, and actual blocks treated. This is where discrepancies surface: the crew chief wrote "Block 5" but meant the east section; the rate does not match the label; the application date is ambiguous.

**Step 3: Portal entry.** The reconciled data gets entered into CalAgPermits. For a week with 5-6 spray events across multiple blocks, this can mean 15-20 individual PUR entries, each requiring the correct EPA registration number, GPS coordinates, and exact product name from the CDPR database.

**Step 4: Submission and review.** The county reviews filings -- and if anything does not match their records, you get a follow-up call that requires additional time to resolve.

This process works, technically. Vineyards across California file thousands of PUR reports this way every year. But it has three fundamental problems:

**It is a time sink.** At Dominus Estate, the team estimated they spent 6-8 hours per month on PUR reconciliation and submission before automating the process. For larger operations, the number can be higher. That is time a vineyard manager or office admin could be spending on work that actually moves the operation forward.

**It introduces errors.** Every manual transcription step -- field log to spreadsheet, spreadsheet to portal -- is a chance for data to change. Acreage rounded incorrectly. Product names that do not match the DPR database verbatim. GPS coordinates that are close but not precise. These errors are not malicious, but they create compliance risk and inspection headaches.

**It creates disconnected records.** The spray log in the field, the reconciliation spreadsheet, and the CalAgPermits submission are three separate artifacts with no automated link between them. If an inspector asks "show me the original spray record for this PUR filing," you are digging through paper logs or scrolling through a spreadsheet. There is no audit trail that connects the field event to the regulatory submission in a single system.

## How Automated Pesticide Use Reporting Works with Vineyard Spray Record Software

The core idea behind automating PUR compliance is simple: if you are already recording spray applications digitally in a vineyard management platform, the system should be able to generate compliant PUR submissions directly from those records. No separate spreadsheet. No manual portal entry. No reconciliation step.

Here is how it works in Sentinel Vine Manager.

### Recording the Spray Application

When a crew completes a spray in the field, the application is logged in Sentinel as a [work order](/workOrders) tied to specific blocks (or specific vine rows within blocks, for targeted applications). The work order captures:

- Product applied (selected from a database synced with CDPR's registered product list)
- EPA registration number (auto-populated from the product selection)
- Rate and total amount applied
- Blocks and acreage treated (pulled directly from Sentinel's [GPS-mapped vineyard data](/rapidMapping))
- Application method
- Start and end time
- Applicator name and certification number (QAC/QAL, stored in the operator's profile)
- Target pest or disease
- Weather conditions at time of application

Because Sentinel already knows your block boundaries, vine counts, and GPS coordinates at the vine level, the location data in the spray record is exact -- it is the same spatial data that drives your vineyard map, not a manually entered approximation.

### Generating the PUR Submission

When the spray record is complete, Sentinel auto-generates a compliant XML report formatted for CDPR submission. The report includes:

- Your county agricultural permit number (configured once during setup)
- Site coordinates derived from the treated blocks
- The product's EPA registration number and label rate
- Actual acreage treated (calculated from mapped block boundaries, not estimated)
- Operator certification details
- All required date, time, and method fields

The XML format matches CDPR's submission specification, so it can be uploaded directly to CalAgPermits or submitted through the machine-to-machine API. No re-keying, no field-by-field manual entry.

### The Audit Trail

This is the part that matters most when an inspector visits. Every PUR submission generated by Sentinel is linked back to the original work order. The work order is linked to the specific blocks on your map. The blocks are linked to the individual vines within them. You can trace a single PUR filing all the way back to which vines were treated, who applied the material, what the weather was, and what the map looked like at the time of application.

That kind of traceability is nearly impossible to achieve with a manual workflow. With Sentinel, it is a byproduct of recording your spray work in the system you already use.

Operations like Staglin Family Vineyard and Abreu Vineyards use this workflow to maintain audit-ready compliance records without dedicating administrative hours to portal entry.

## REI and PHI Tracking: Keeping Crews Safe and Fruit Clean

Pesticide use reporting is the regulatory obligation, but it is not the only compliance surface that matters for vineyard spray programs. Restricted Entry Intervals (REI) and Pre-Harvest Intervals (PHI) are equally critical -- and equally easy to lose track of when spray records live in spreadsheets or paper logs.

**REI (Restricted Entry Interval)** is the minimum time after a pesticide application before workers can re-enter the treated area without full protective equipment. REIs range from 4 hours to 48 hours or more depending on the product. Sending a crew into a block too soon is a worker safety violation with serious consequences.

**PHI (Pre-Harvest Interval)** is the minimum time between the last application and harvest. Violating a PHI means the fruit may carry unacceptable residue levels -- a quality and liability issue that can jeopardize a winery relationship or a sustainability certification.

Both intervals are product-specific and must be tracked per application, per block. For a vineyard running a 10-block spray program with multiple products, the matrix of active REIs and PHIs at any given point in the season can be complex.

### How Sentinel Handles REI/PHI

When a spray application is recorded in Sentinel, the system automatically calculates the REI and PHI expiration times based on the product's label data. These intervals surface as alerts on the block map:

- **Active REI blocks** are visually flagged so vineyard managers can see at a glance which areas are restricted before dispatching crews
- **Upcoming PHI deadlines** appear as warnings as harvest approaches, ensuring the final spray applications respect the required intervals
- **Expired intervals** clear automatically -- no manual tracking or calendar reminders needed

This is particularly valuable during the compressed window between veraison and harvest, when spray decisions and crew movements are happening simultaneously. A vineyard manager looking at the Sentinel map can immediately see: this block is clear, this one has 12 hours of REI remaining, this one cannot be harvested for another 14 days. That spatial, real-time view replaces the mental tracking or whiteboard calculations that most operations rely on today.

Dalla Valle Vineyards, which runs a tightly managed spray program across steep hillside blocks, uses Sentinel's REI tracking to coordinate crew access during the critical pre-harvest period when labor scheduling is already challenging.

## Multi-Jurisdiction Support: California Now, Oregon, Washington, and EU Coming

California has the most demanding pesticide use reporting requirements in the United States, which is why it is the first jurisdiction Sentinel supports for automated PUR compliance. But California is not the only place vineyards need to file pesticide records.

**Oregon** requires pesticide use reporting for all commercial agricultural applications through the Oregon Department of Agriculture (ODA). The filing format differs from California's, but the underlying data requirements -- product, rate, location, applicator, date -- are largely the same.

**Washington** has its own requirements through the Washington State Department of Agriculture (WSDA), with particular emphasis on drift-sensitive areas and waterway buffers.

**The European Union** is moving toward tighter pesticide tracking under the Sustainable Use Regulation (SUR), which will require member states to collect digital pesticide use records at the farm level.

Sentinel's approach is jurisdiction-agnostic at the data layer. The spray record -- product, rate, location, applicator, timing -- is the same regardless of which regulatory body requires the report. What changes is the output format: XML for CalAgPermits, CSV for Oregon's system, a different schema for EU reporting. You record your spray work once and generate compliant reports for whichever jurisdiction applies.

Oregon and Washington support is in active development. EU reporting support is on the roadmap for later in 2026, timed to the SUR implementation timeline.

## Integration with Spray Records and Vineyard Operations

The real value of automating pesticide use reporting for vineyards is not just saving time on portal entry. It is what happens when your spray records, your compliance filings, your vineyard map, and your work orders all live in the same system.

### Spray History as Queryable Data

When every spray application is recorded in Sentinel with precise block boundaries, product details, and timing, your spray history becomes a queryable dataset. You can answer questions that are nearly impossible to answer from paper logs or CalAgPermits exports:

- Which blocks received more than 3 fungicide applications last season?
- What is the total sulfur load per acre across the estate, year over year?
- When was the last time Block 12 was treated for mealybug, and with what product?
- Which products were applied within 500 feet of the creek buffer zone in 2025?

These queries take seconds in Sentinel. They take hours (or are simply not feasible) when spray data lives in disconnected systems.

### Connection to Work Orders

Spray applications in Sentinel are [work orders](/workOrders). That means they carry all the attributes of any other work order -- assigned crew, completion status, supervisor sign-off, field notes, photos. When an inspector asks "who applied this material and can you show me their certification?" the answer is in the same record as the PUR submission.

This is also where [rapid mapping](/rapidMapping) pays dividends beyond the initial vineyard survey. Because every vine and every block boundary is GPS-mapped, the acreage figures in your PUR submissions are calculated from actual spatial data, not estimated from ranch records or county assessor maps. When a county inspector compares your reported acreage to their GIS records, the numbers match -- because they are derived from the same kind of precision measurement.

### Sustainability and Certification Programs

An increasing number of vineyard operations are pursuing sustainability certifications -- Napa Green, SIP Certified, LIVE (in Oregon), or various organic certifications. All of these require detailed pesticide use records as part of the audit process.

When your PUR filings, spray history, and product usage data all live in a single platform with a clean audit trail, preparing for a certification audit is straightforward. You export the records, and they are complete and consistent by default. For operations selling fruit to wineries with their own sustainability requirements, audit-ready spray records are a competitive advantage, not just a compliance obligation.

## ROI: What Automated PUR Compliance Actually Saves

Let's talk numbers. The return on automating pesticide use reporting for vineyards comes from three sources: time savings, error reduction, and risk mitigation.

### Time Savings

The administrative time spent on manual PUR compliance varies by operation size, but here are representative figures from Sentinel customers:

- **50-100 acre operation:** 3-5 hours per month on spray record reconciliation and CalAgPermits entry
- **100-300 acre operation:** 6-10 hours per month
- **300+ acre operation or farming company managing multiple properties:** 15-25 hours per month

At a fully loaded cost of $35-50/hour for office staff (or $75-100/hour if the vineyard manager is doing it personally), that is $2,000-$12,000 per year in direct labor costs for compliance data entry alone.

Sentinel's automated PUR generation reduces this to near zero. The spray is recorded in the field as part of normal operations. The PUR report is generated automatically. The only manual step is a final review before submission -- which takes minutes, not hours.

### Error Reduction

A notice of violation from the county requires staff time to respond, correct, and resubmit -- typically 2-4 hours per incident. Permit reviews triggered by filing errors can delay your ability to purchase restricted materials at the start of the next season. Automated reporting eliminates transcription errors by design -- the data in the PUR submission is the data from the spray record, with no intermediate step where a human re-types it.

### Risk Mitigation

A single permit suspension during a critical spray window could result in crop loss valued at tens of thousands of dollars. For an operation spending $5,000-$15,000 per year on vineyard management software (Sentinel's typical range for 100-300 acre estates), eliminating the compliance risk and reclaiming the administrative time is a clear positive return. The [buyer's guide](/blog/vineyard-management-software-buyers-guide-2026) covers the broader economics of vineyard software, but on compliance automation alone, the payback period is measured in months, not years.

## Frequently Asked Questions

### Does Sentinel replace CalAgPermits, or does it work with it?

Sentinel works with CalAgPermits. It does not bypass or replace the state system. Sentinel generates properly formatted PUR submissions from your spray records, which are then submitted to CalAgPermits through the portal or API. Think of it as the preparation and formatting layer -- CDPR's system remains the official repository and your county Agricultural Commissioner still reviews and approves the filings.

### What if my vineyard uses a pest control advisor (PCA) who files PUR reports on our behalf?

Many vineyard operations have their PCA handle PUR submissions as part of their service agreement. Sentinel can still add value in this scenario in two ways. First, it gives you a complete, independent record of every spray application on your property -- so you can verify what the PCA is filing on your behalf. Second, it tracks REI and PHI intervals in real time, which is operational information your vineyard team needs regardless of who handles the regulatory filing.

### How does Sentinel handle products that are restricted in some counties but not others?

Restricted material designations can vary by county. Sentinel's product database includes county-level restriction status, so the system knows which applications trigger PUR filings based on your vineyard's location. You configure your county and permit information once during onboarding, and the correct rules apply automatically.

### What about organic vineyards -- do they still need to file PUR reports?

Yes. Organic-approved materials that carry restricted use designations still require PUR filings. Sulfur and certain copper-based products, for example, may be organic-compliant but still subject to California's reporting requirements depending on formulation and application method. Sentinel tracks all applications, organic or conventional, and generates PUR submissions for those that require them. It also maintains a separate organic spray log for certification audits.

### Can Sentinel generate reports for previous seasons, or only going forward?

Sentinel generates automated PUR reports for spray applications recorded in the system. If you have spray logs from previous seasons in spreadsheet format, Sentinel can import that data. But the primary value is the go-forward workflow: recording sprays as they happen and letting the system handle compliance output automatically. See our post on [California PUR reporting automation](/blog/california-pur-reporting-vineyard-automation) for more detail.

## Stop Reconciling Spreadsheets. Start Spraying and Filing in One Step.

Pesticide use reporting for vineyards is a compliance obligation that is not going away. CDPR's requirements are detailed, the filing deadlines are tight, and the penalties for getting it wrong are meaningful. But the administrative burden of meeting those requirements does not have to scale with your acreage.

Sentinel Vine Manager turns your spray work orders into compliant PUR submissions automatically. No spreadsheet reconciliation. No separate portal entry. No end-of-month scramble to match field logs to filing records. Your spray data flows from the field to the regulatory report in a single system, with a complete audit trail connecting every filing to the original application, the specific blocks treated, and the certified applicator who did the work.

REI and PHI intervals are tracked per-application and visible on the map, so your team always knows which blocks are clear and which are restricted. Applicator certifications are stored and validated. And when Oregon, Washington, or EU reporting requirements come online, the same spray records will generate compliant reports for those jurisdictions too.

Operations like Dominus, Staglin, Abreu, and Dalla Valle are already running this workflow. If you are still filing PUR reports by hand, it is worth 30 minutes to see what the automated version looks like.

[Schedule a demo](https://scheduler.zoom.us/d/1i222xhk/sentinel-demo) and we will walk through the full spray-to-compliance pipeline on your actual vineyard data.
