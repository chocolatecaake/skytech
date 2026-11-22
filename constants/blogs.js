export const blogs = [
  {
    slug: "gre-vs-grp-vs-hdpe-pipes",
    title: "GRE vs GRP vs HDPE: Which Pipe for Which Job?",
    author: "Skytech Team",
    date: "20 Nov 2026",
    desc: "Compare GRE, GRP and HDPE pipes by strength, pressure, temperature and cost. Learn which pipe suits oil & gas, water, sewage and industrial projects.",
    img: "/assets/services/grplamination.webp",
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        blocks: [
          { text: "A badly chosen pipe rarely fails on day one. It fails years later, when corrosion eats through a steel line, a rigid pipe cracks as the ground moves, or a pipe rated for cold water starts to soften in the heat. By then, replacement, downtime and repairs cost far more than getting the choice right at the start would have." },
          { text: "This guide compares three of the most widely used non-metallic pipes, GRE, GRP and HDPE: what each one is, its strengths and limits, and where to use it." },
          { text: "Quick answer: Choose GRE for high pressure, high temperature and aggressive chemicals, such as oil & gas and offshore work. Choose GRP for large-diameter water, wastewater and industrial lines where corrosion resistance is the priority. Choose HDPE for flexible, leak-free buried networks, such as municipal water, gas distribution and drainage, where low cost matters." },
        ],
      },
      {
        id: "quick-comparison",
        title: "GRE vs GRP vs HDPE: Quick Comparison",
        blocks: [
          {
            type: "table",
            head: ["Pipe Type", "Strengths", "Limitations", "Best Used For"],
            rows: [
              ["Glass Reinforced Epoxy (GRE)", "High strength, high pressure rating, lightweight, excellent resistance to heat and aggressive chemicals, corrosion resistant.", "Higher cost than other pipe types; specialised material and installation.", "Oil & gas, offshore and marine, chemical plants, power plants and water utilities."],
              ["Glass Reinforced Plastic (GRP)", "High strength-to-weight ratio, highly corrosion resistant, easy to transport, smooth inner bore that lowers pumping energy and prevents scale build-up, very long service life.", "Lower heat and pressure tolerance than GRE.", "Water and wastewater, industrial and chemical, infrastructure and energy."],
              ["High-Density Polyethylene (HDPE)", "Flexible and tough, bends without cracking, absorbs ground movement, non-corrosive, leak-free fused joints, cost-effective, long service life.", "Lower temperature and pressure limits than GRE and GRP.", "Municipal water supply, gas distribution, sewage and drainage, industrial and agricultural use, cable conduits."],
            ],
          },
        ],
      },
      {
        id: "technical-comparison",
        title: "Technical Comparison",
        blocks: [
          // ponytail: typical industry ranges, confirm against supplier datasheets before going live
          {
            type: "table",
            head: ["", "GRE", "GRP", "HDPE"],
            rows: [
              ["Typical pressure rating", "Up to ~50 bar (higher in small sizes)", "Up to ~32 bar", "Up to ~25 bar (PE100)"],
              ["Max operating temperature", "~95–120 °C", "~50–90 °C (depends on resin)", "~60 °C (pressure rating drops as temperature rises)"],
              ["Typical diameter range", "25–1,200 mm", "100–4,000 mm", "16–2,500 mm"],
              ["Joining method", "Adhesive, threaded, flanged", "Couplings, laminated joints", "Butt fusion, electrofusion"],
              ["Relative cost", "High", "Medium", "Low"],
            ],
          },
          { text: "Figures are typical industry ranges. Exact ratings depend on the manufacturer, pipe class and diameter." },
        ],
      },
      {
        id: "what-is-gre",
        title: "What is GRE Pipe and When Should You Use It?",
        blocks: [
          { text: "GRE (Glass Reinforced Epoxy) is a composite pipe. It is made by winding E-glass filaments around a mandrel and bonding them with an epoxy resin cured with hardeners. GRE is a type of GRP, but the epoxy resin gives it much higher resistance to heat, pressure and aggressive chemicals." },
          { text: "The finished pipe is strong and handles high pressure, yet it stays light and does not corrode. In harsh environments, steel needs expensive coatings and cathodic protection, and both still wear out over time. GRE needs neither, which is why it is used in:" },
          { type: "ul", items: ["Oil and gas", "Offshore and marine", "Chemical plants", "Power plants and water utilities"] },
          { type: "link", text: "Learn more about our GRE / GRP piping services", href: "/services?open=grp-gre-jointing#grp-gre-jointing" },
        ],
      },
      {
        id: "what-is-grp",
        title: "What is GRP Pipe and When Should You Use It?",
        blocks: [
          { text: "GRP (Glass Reinforced Plastic) pipes are made from high-strength glass fibres embedded in a polyester or vinyl ester resin, often reinforced with fine silica sand. They are highly corrosion resistant and lightweight, which makes them much easier to transport and install than traditional metal pipes." },
          { text: "Their smooth inner bore lowers pumping energy costs and prevents scale and deposit build-up over time. With a high strength-to-weight ratio and a design life of up to 100 years, GRP is commonly used in:" },
          { type: "ul", items: ["Water and wastewater", "Industrial and chemical", "Infrastructure and energy"] },
          { type: "link", text: "See our GRP lamination and lining services", href: "/services?open=in-situ-works–grp#in-situ-works–grp" },
          { type: "link", text: "Read more: Why GRP Pipes Last", href: "/blogs/Why-GRP-Pipes-Last" },
        ],
      },
      {
        id: "what-is-hdpe",
        title: "What is HDPE Pipe and When Should You Use It?",
        blocks: [
          { text: "HDPE (High-Density Polyethylene) pipes are made from a tough, flexible thermoplastic produced from petroleum-based ethylene. Their main advantage is flexibility: they bend without cracking and absorb ground movement, which suits buried networks and areas with unstable soil." },
          { text: "HDPE does not corrode, even when exposed to harsh chemicals, and its joints don't leak. The pipes are joined by butt fusion or electrofusion, where the ends are heated and fused into one continuous pipe with no weak points. Add low cost, light weight and a long service life, and HDPE is the usual choice for:" },
          { type: "ul", items: ["Municipal water supply", "Gas distribution", "Sewage and drainage", "Industrial and agricultural use", "Cable conduits"] },
          { type: "link", text: "Explore our HDPE piping services", href: "/services?open=hdpe-piping-systems#hdpe-piping-systems" },
        ],
      },
      {
        id: "cost-comparison",
        title: "Cost Comparison",
        blocks: [
          { text: "HDPE is usually the lowest-cost option for both material and installation, especially for small and medium diameters. GRP sits in the middle, and its light weight often reduces transport and lifting costs on large-diameter projects. GRE has the highest upfront cost, but in high-pressure, high-temperature or corrosive environments it often has the lowest lifetime cost, because it avoids the coatings, maintenance and early replacement that steel would need." },
        ],
      },
      {
        id: "faq",
        title: "Frequently Asked Questions",
        blocks: [
          { type: "h3", text: "Is GRP the same as FRP?" },
          { text: "Yes, mostly. FRP (Fibre Reinforced Plastic) is the general term for plastics reinforced with fibres. GRP is a type of FRP that uses glass fibres specifically. In the piping industry the two terms are often used interchangeably." },
          { type: "h3", text: "What is the difference between GRE and GRP pipes?" },
          { text: "Both are glass fibre composite pipes. The difference is the resin: GRE uses epoxy, while GRP typically uses polyester or vinyl ester. Epoxy gives GRE higher pressure and temperature ratings and better chemical resistance, which is why it costs more." },
          { type: "h3", text: "Can HDPE pipes carry hot water?" },
          { text: "Only up to a point. HDPE is typically rated for continuous use up to about 60 °C, and its pressure rating drops as temperature rises. For hotter fluids, GRE or GRP with a suitable resin is a better choice." },
          { type: "h3", text: "Which pipe lasts the longest?" },
          { text: "All three have long service lives when correctly specified and installed. GRP and GRE are commonly designed for 50 years or more, and HDPE for 50–100 years in water service. The biggest factor is choosing the right pipe for the operating pressure, temperature and fluid." },
          { type: "h3", text: "Which pipe is cheapest to install?" },
          { text: "HDPE is usually the cheapest, thanks to low material cost, flexibility (fewer fittings) and fast fusion joining. For large diameters, GRP can be competitive because it is light and quick to lay." },
        ],
      },
      {
        id: "conclusion",
        title: "Conclusion: Choosing the Right Pipe for Your Project",
        blocks: [
          { text: "The best pipe depends on the job. Use GRE where pressure, heat or aggressive chemicals are involved, GRP for large water and industrial lines that need corrosion resistance at a reasonable cost, and HDPE for buried water, gas and drainage networks where flexibility and low cost matter. Matching the pipe to your operating conditions at the start costs far less than replacing a failed line later." },
          { text: "Not sure which pipe fits your project? Contact Skytech's engineering team for a free consultation, or browse our completed work." },
          { type: "link", text: "Contact our engineering team", href: "/contact" },
          { type: "link", text: "View our projects", href: "/projects" },
        ],
      },
    ],
  },
  {
    slug: "grp-pipe-lamination-joints",
    title: "GRP Pipe Lamination Joints: Process, Standards and Common Mistakes",
    author: "Skytech Team",
    date: "22 Nov 2026",
    desc: "How GRP butt and wrap lamination joints are made on site: the 8-step process, the standards that govern them, and the common mistakes that cause joint failure.",
    img: "/assets/services/grplamination.webp",
    // ponytail: figures (temps, grits, Barcol, glass weights) come from the merged source doc, confirm against your site procedure before going live
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        blocks: [
          { text: "Glass-reinforced plastic (GRP) pipe has replaced much of the heavy metal and concrete pipe used in municipal, industrial and energy networks, which corroded and got damaged often. GRP is light, strong and doesn't corrode. It has a design life of more than 50 years and needs no cathodic protection or external coating." },
          { text: "A pipeline is only as strong as its joints, though, and GRP joints are made on site. This post covers how they are made, the standards that apply, and the mistakes we see most often when a GRP line is installed." },
        ],
      },
      {
        id: "what-is-a-lamination-joint",
        title: "What is a GRP Lamination (Butt and Wrap) Joint?",
        blocks: [
          { text: "GRP lamination is an on-site process for joining pipes into a continuous pipeline. The pipe sections themselves are made in a factory by filament winding or centrifugal casting. The joints between them are made in the field." },
          { text: "On site, the technician aligns the ends of two pipes, sands the outer surface and wraps the seam with alternating layers of resin-saturated glass fibre mat. Once cured, this forms a continuous, leak-tight structural joint that becomes part of the pipe wall itself." },
          { text: "This type of joint is typically used for:" },
          { type: "ul", items: ["Tie-ins to existing networks", "Connecting fittings such as tees, elbows and reducers", "Field-cut pipes and closure spools", "Structural field repairs"] },
        ],
      },
      {
        id: "when-to-use",
        title: "When to Use Lamination Joints vs Other Joint Types",
        blocks: [
          { text: "The choice of joint mainly depends on four things: axial restraint, layout flexibility, field access and installation speed." },
          { text: "Use lamination when you need a monolithic, fully restrained joint that becomes part of the pipe wall. It handles high internal pressure and axial thrust without concrete thrust blocks, which is why it's common on long pipelines, modifications and tie-ins to existing lines." },
          { type: "h3", text: "When not to use it" },
          { type: "ul", items: [
            "Long, straight buried runs where installation speed is critical: use a double bell coupler or a rubber seal lock joint instead.",
            "High-pressure industrial and chemical lines: use factory-made bell and spigot ends joined with structural epoxy adhesive, which gives a slim profile and high axial restraint.",
            "Connections to pumps, valves and tanks that need to come apart for maintenance: use flanged joints.",
          ] },
          {
            type: "table",
            head: ["Joint Type", "Axial Restraint", "Curing Needed?", "Best Use"],
            rows: [
              ["Butt & Wrap (Lamination)", "Fully restrained", "Yes", "Field cuts, tie-ins, fittings, repairs"],
              ["Adhesive Bonded", "Fully restrained", "Yes (heat-cured)", "High-pressure industrial and chemical lines"],
              ["Rubber Seal Lock", "Fully restrained", "No", "Fast assembly of buried pressure lines"],
              ["Flanged", "Fully restrained", "No", "Pumps, valves and equipment connections"],
              ["Double Bell Coupler", "Not restrained", "No", "Long, straight buried gravity and low-pressure lines"],
            ],
          },
        ],
      },
      {
        id: "step-by-step",
        title: "Step-by-Step Lamination Process",
        blocks: [
          { type: "h3", text: "Step 1: Environmental and Safety Setup" },
          { text: "Start with PPE: a dust mask, goggles, chemical-resistant gloves, close-fitting coveralls, safety shoes and a hairnet." },
          { text: "Next, measure the ambient temperature, relative humidity and pipe surface temperature. Lamination only goes ahead when the pipe surface is at least 3°C above the dew point, to prevent condensation. In hot or humid weather, work under a shaded tent." },
          { type: "h3", text: "Step 2: Pipe Edge Chamfering and Surface Sanding" },
          { text: "The pipe ends are cut square to the pipe axis, and the edges are bevelled to 45°, down to about half the wall thickness." },
          { text: "The joint area, plus a 25 mm margin, is then ground with coarse P35–P40 grit discs. About 0.3–0.6 mm of the glossy outer resin must be removed to expose fresh glass fibre and leave a dull grey surface for the laminate to grip." },
          { text: "Finally, the grinding dust is cleaned off with a dry natural-bristle brush. Never use solvents such as acetone to clean GRP: they dissolve leftover oil and spread it into the porous surface." },
          { type: "h3", text: "Step 3: Concentric Alignment and Root Gap Sealing" },
          { text: "The pipe sections are locked in external alignment clamps to keep them perfectly centred and straight. A root gap of 1–3 mm is left between the ends (3–5 mm for DN 600 and above). The exposed glass edges are sealed with resin, and the gap is filled flush with resin putty, without pushing any putty into the pipe." },
          { type: "h3", text: "Step 4: Internal Lamination (DN 600 and Above)" },
          { text: "On large pipes where a person can safely get inside, an internal strip of surface veil and chopped strand mat is laminated over the inner seam. This protects the root gap from chemical attack and erosion." },
          { type: "h3", text: "Step 5: External Reinforcing Layup and Build-Up" },
          { text: "The prepared surface is coated with catalysed resin. Then the reinforcement goes on in alternating layers: chopped strand mat (CSM, 450 g/m²) for bonding between layers, and woven roving (WR, 720 g/m²) for hoop and axial strength." },
          { text: "Each layer overlaps by at least 50 mm, and the overlaps are staggered around the pipe rather than stacked in one place. Each layer is wider than the last, building a stepped taper as set out in the joint specification." },
          { type: "h3", text: "Step 6: De-Aeration and Compression" },
          { text: "After each wet layer goes on, it's rolled with a fluted steel roller to push out trapped air and fully wet out the glass. Breather tape is then wrapped tightly over the build-up to compress the laminate and squeeze out excess resin." },
          { type: "h3", text: "Step 7: Surface Finishing and Topcoat Seal" },
          { text: "A final full-width CSM layer smooths out the steps at the joint edges. A topcoat containing paraffin wax goes on last. The wax rises to the surface as it cures and seals out air, so the finish cures hard instead of staying sticky." },
          { type: "h3", text: "Step 8: Curing and Quality Testing" },
          { text: "The joint is left to gel at ambient temperature (around 20°C) until it's hard to the touch. Electric heating blankets are then used to post-cure it for at least 60 minutes. Before the line is pressure tested, the cure is checked with a Barcol hardness test (minimum reading of 35)." },
        ],
      },
      {
        id: "standards",
        title: "Standards and Quality Checks",
        blocks: [
          { text: "GRP lamination joints are governed by international standards, so that a field-made joint matches the pressure rating and life of the factory-made pipe." },
          { type: "ul", items: [
            "ISO 14692: the main international standard for GRP piping in oil, gas and marine work, covering joint qualification, lamination tolerances and thickness tables.",
            "AWWA C950 and AWWA M45: American Water Works Association standards for fibreglass pressure pipe design and installation in water networks.",
            "ASTM D3517 and ASTM D3262: specifications for GRP pressure pipes and gravity sewer pipes.",
            "DIN 16966 (Part 8): sets joint geometry, overlap widths and glass-to-resin ratios for laminated joints.",
          ] },
          { type: "h3", text: "What we check before a joint is accepted" },
          { type: "ul", items: [
            "Barcol hardness of at least 35, confirming the resin is fully cured.",
            "Overlap width within ±5 mm of the design table, and laminate thickness at or above the specified value.",
            "No dry glass, blisters, delamination, cracks or air voids on visual inspection.",
            "No weeping or pressure drop during a hydrotest at 1.5 times the design working pressure.",
          ] },
        ],
      },
      {
        id: "common-mistakes",
        title: "Common Mistakes and How to Avoid Them",
        blocks: [
          { text: "Small mistakes during lamination can make a joint fail under pressure. These are the ones we see most often on site:" },
          {
            type: "table",
            head: ["Mistake", "What Happens", "How to Avoid It"],
            rows: [
              ["Not grinding enough", "Glossy spots stop the laminate bonding, and the joint delaminates under pressure.", "Grind with P35–P40 discs until the whole area is dull grey."],
              ["Cleaning with solvent", "Acetone spreads oil into the glass fibres and acts as a bond breaker.", "Clean with a dry brush or dry, oil-free compressed air only."],
              ["Laminating near the dew point", "Moisture stops the resin curing, leaving a soft, weak joint.", "Only laminate when the pipe surface is 3°C or more above the dew point."],
              ["Trapped air", "Voids create weak spots and pinhole leaks during the hydrotest.", "Roll every wet layer thoroughly with a fluted steel roller."],
              ["Wrong resin mix", "Too much hardener overheats and cracks the laminate.", "Weigh resin components against the temperature chart."],
              ["Stacked overlaps", "Layers ending in the same line create a stress point.", "Stagger every 50 mm overlap around the pipe."],
              ["Skipping the wax topcoat", "Air stops the surface curing, leaving it permanently sticky.", "Always finish with a paraffin-wax topcoat."],
            ],
          },
        ],
      },
      {
        id: "safety",
        title: "Safety on Site",
        blocks: [
          { text: "Resins, catalysts and glass fibre all need careful handling:" },
          { type: "ul", items: [
            "If resin gets on your skin, wash it off with soap and warm water. Never use acetone or solvents, as they carry the chemicals into the skin.",
            "Never mix the cobalt accelerator and the MEKP hardener directly together, as this can cause a violent reaction. Always mix the accelerator into the resin first, then add the hardener.",
            "Store resins and hardeners in a cool, dry, ventilated area between 0°C and 40°C, away from sunlight, heat and open flames.",
            "Don't fold, step on or pull heating blankets by their cables, and always put a plastic film between the wet joint and the blanket.",
          ] },
        ],
      },
      {
        id: "faq",
        title: "Frequently Asked Questions",
        blocks: [
          { type: "h3", text: "Can you clean sanded GRP with acetone before laminating?" },
          { text: "No. Solvents carry contaminants deep into the exposed glass fibres and leave a film that stops the laminate bonding. Use a dry brush or dry, oil-free compressed air instead." },
          { type: "h3", text: "Why does the dew point matter during lamination?" },
          { text: "If the pipe surface is close to the dew point, a thin layer of condensation forms on it. That moisture stops the resin bonding and curing properly, which leads to a soft joint that can weep or fail under pressure." },
          { type: "h3", text: "How long does a butt and wrap joint take before it can be tested?" },
          { text: "The resin usually gels in 2 to 4 hours at around 20°C. The joint is then post-cured with heating blankets for at least 60 minutes. Once it passes a Barcol hardness test (35 or above), it can be backfilled and pressure tested." },
          { type: "h3", text: "How does a butt and wrap joint compare to a double bell coupler?" },
          { text: "A butt and wrap joint is fully restrained, so it carries both pressure and axial loads and doesn't need thrust blocks. A double bell coupler is flexible and handles ground movement, but it needs anchor blocks to resist thrust on pressure lines." },
        ],
      },
      {
        id: "conclusion",
        title: "Conclusion",
        blocks: [
          { text: "GRP piping can deliver more than 50 years of maintenance-free service, but only if the joints are done right. Couplers and lock joints are quicker on long, straight runs, but butt and wrap lamination is still the standard method for field cuts, tie-ins, fittings and repairs." },
          { text: "A joint that lasts comes down to careful surface prep, checking the dew point, staggering the layers, rolling out the air and handling the chemicals safely." },
          { type: "link", text: "See our GRP/GRE jointing services", href: "/services?open=grp-gre-jointing#grp-gre-jointing" },
          { type: "link", text: "Talk to our team about your project", href: "/contact" },
        ],
      },
    ],
  },
];
