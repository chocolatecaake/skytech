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
          { text: "Choosing the right pipe material matters more than most people expect. The wrong choice rarely fails on day one. It fails years later, when corrosion eats through a steel line, a rigid pipe cracks under ground movement, or a pipe rated for cold water starts to soften under heat. By then, the cost of replacement, downtime and repairs is far higher than getting the choice right at the start." },
          { text: "In this guide, we compare three of the most widely used non-metallic pipe types: GRE, GRP and HDPE. We cover what each one is, its strengths and limits, and exactly where each one should be used." },
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
          { text: "GRE (Glass Reinforced Epoxy) is a high-performance composite pipe. It is made by winding E-glass filaments around a mandrel and bonding them with an epoxy resin cured with hardeners. GRE is a type of GRP, but the epoxy resin gives it much higher resistance to heat, pressure and aggressive chemicals." },
          { text: "The result is a pipe that is strong and pressure-tolerant while staying lightweight and fully corrosion resistant. In harsh environments, steel pipes need expensive coatings and cathodic protection that still wear out over time. GRE avoids this problem completely, which makes it the preferred choice for:" },
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
          { text: "HDPE (High-Density Polyethylene) pipes are made from a tough, flexible thermoplastic produced from petroleum-based ethylene. That flexibility is their biggest advantage. HDPE pipes can bend without cracking and absorb ground movement, which makes them ideal for buried networks and areas with unstable soil." },
          { text: "HDPE does not corrode, even when exposed to harsh chemicals. It is also known for leak-free joints: pipes are joined by butt fusion or electrofusion, where the ends are heated and fused into one continuous pipe with no weak points. Combined with low cost, light weight and a long service life, HDPE is the go-to choice for:" },
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
          { text: "There is no single best pipe. There is only the best pipe for the job. GRE is the right choice when pressure, heat and aggressive chemicals are involved. GRP offers excellent corrosion resistance and value for large water and industrial lines. HDPE is the flexible, cost-effective solution for buried water, gas and drainage networks. Matching the pipe to your operating conditions from the start saves money, prevents failures and extends the life of your system." },
          { text: "Not sure which pipe fits your project? Contact Skytech's engineering team for a free consultation, or browse our completed work." },
          { type: "link", text: "Contact our engineering team", href: "/contact" },
          { type: "link", text: "View our projects", href: "/projects" },
        ],
      },
    ],
  },
];
