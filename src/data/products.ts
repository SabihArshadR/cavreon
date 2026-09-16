export type CategorySlug =
  | "hockey-sticks"
  | "padel-rackets"
  | "pickleball-paddles"
  | "shin-guards"
  | "sports-bags";

export type Spec = { label: string; value: string };

export type Product = {
  slug: string;
  name: string;
  category: CategorySlug;
  /** One line a buyer can scan in the grid. */
  summary: string;
  /** Two or three sentences on the product page. */
  description: string;
  /** Shown as a small badge on the card — level, not marketing fluff. */
  level: string;
  specs: Spec[];
  features: string[];
  /**
   * Drop a real photo in /public/products/ and put the path here,
   * e.g. "/products/apex-95.jpg". Leave empty to use the built-in
   * technical drawing.
   */
  image?: string;
};

export type Category = {
  slug: CategorySlug;
  name: string;
  /** Plural noun used in copy, e.g. "sticks". */
  unit: string;
  blurb: string;
  detail: string;
  /** Headline capability numbers for the category page. */
  highlights: Spec[];
};

export const categories: Category[] = [
  {
    slug: "hockey-sticks",
    name: "Field hockey sticks",
    unit: "sticks",
    blurb:
      "Carbon, aramid and fibreglass layups pressed in our own moulds, from 20% club sticks to 95% carbon match sticks.",
    detail:
      "We press every stick in-house from pre-preg sheet, so the bow profile, carbon percentage and balance point are yours to set. Bow shapes run from standard to extreme low bow at 24.75 mm, and we hold five mould sets covering 34\" to 37.5\".",
    highlights: [
      { label: "Carbon range", value: "20% – 95%" },
      { label: "Lengths", value: '34" – 37.5"' },
      { label: "Bow profiles", value: "5 shapes" },
    ],
  },
  {
    slug: "padel-rackets",
    name: "Padel rackets",
    unit: "rackets",
    blurb:
      "Diamond, teardrop and round shapes in 3K, 12K and 18K carbon with EVA soft or medium cores.",
    detail:
      "Padel is the fastest-growing category we build. Frames are hand-laid over EVA blocks and cured under heat and pressure, then drilled, finished and grip-wrapped on the same line. We can match an existing racket you send us within one sample round.",
    highlights: [
      { label: "Shapes", value: "3 profiles" },
      { label: "Weight range", value: "345 – 385 g" },
      { label: "Core", value: "EVA soft / medium" },
    ],
  },
  {
    slug: "pickleball-paddles",
    name: "Pickleball paddles",
    unit: "paddles",
    blurb:
      "Thermoformed raw T700 carbon and fibreglass faces over polypropylene honeycomb, 13 mm and 16 mm.",
    detail:
      "Built for the US market, where surface grit and swing weight decide everything. We thermoform with a unibody foam-injected perimeter, and every batch is checked against a deflection tolerance before the edge guard goes on.",
    highlights: [
      { label: "Core", value: "PP honeycomb" },
      { label: "Thickness", value: "13 / 16 mm" },
      { label: "Face", value: "T700 carbon" },
    ],
  },
  {
    slug: "shin-guards",
    name: "Shin guards",
    unit: "guards",
    blurb:
      "Hockey and football guards in HDPE, carbon shell or moulded EVA, with ankle protection options.",
    detail:
      "Shells are vacuum-formed and bonded to a shaped EVA liner, so the guard follows the shin instead of sitting flat against it. Sizes run XS through L and we can tool a new shell profile for volume orders.",
    highlights: [
      { label: "Sizes", value: "XS – L" },
      { label: "Shell", value: "HDPE / carbon" },
      { label: "Liner", value: "Moulded EVA" },
    ],
  },
  {
    slug: "sports-bags",
    name: "Sports bags",
    unit: "bags",
    blurb:
      "Stick bags, padel thermal bags, paddle slings, duffels and backpacks in 600D and 900D polyester.",
    detail:
      "Cut, stitched and finished in our bag unit, with bar-tacked stress points and YKK-grade zips. Panel colours, linings, webbing and embroidery are all open, which makes this the easiest category to brand.",
    highlights: [
      { label: "Fabric", value: "600D / 900D" },
      { label: "Stitching", value: "Bar-tacked" },
      { label: "Branding", value: "Print / embroidery" },
    ],
  },
];

export const products: Product[] = [
  // ── Field hockey sticks ──────────────────────────────────────
  {
    slug: "apex-95",
    name: "Apex 95",
    category: "hockey-sticks",
    level: "Match",
    summary: "95% carbon, 24.75 mm extreme low bow, built for drag flicking.",
    description:
      "Our stiffest stick. A 95% carbon layup with an aramid wrap through the head keeps vibration down while giving the shaft the recoil a drag flicker needs. The bow peaks at 200 mm from the head, which is where most international players want it.",
    specs: [
      { label: "Composition", value: "95% carbon, 4% aramid, 1% fibreglass" },
      { label: "Bow", value: "24.75 mm extreme low" },
      { label: "Bow peak", value: "200 mm from head" },
      { label: "Lengths", value: '36.5", 37.5"' },
      { label: "Weight", value: "540 – 560 g" },
      { label: "Balance point", value: "390 mm" },
      { label: "Head shape", value: "Midi" },
      { label: "Finish", value: "Gloss or matte" },
    ],
    features: [
      "Aramid-reinforced head for edge impact",
      "Foam-filled core damps ball feel",
      "Anti-slip textured grip, 1.8 mm chamois",
      "Your bow profile if you supply the spec",
    ],
  },
  {
    slug: "vortex-70",
    name: "Vortex 70",
    category: "hockey-sticks",
    level: "Club",
    summary: "70% carbon with an aramid layer, 24 mm low bow, forgiving on trapping.",
    description:
      "The stick most of our club buyers reorder. Softer than the Apex through the shaft, so first touch is easier, but still stiff enough for a strong hit. The 24 mm low bow suits players moving up from a standard bow.",
    specs: [
      { label: "Composition", value: "70% carbon, 20% fibreglass, 10% aramid" },
      { label: "Bow", value: "24 mm low" },
      { label: "Bow peak", value: "250 mm from head" },
      { label: "Lengths", value: '35", 36.5", 37.5"' },
      { label: "Weight", value: "550 – 570 g" },
      { label: "Balance point", value: "400 mm" },
      { label: "Head shape", value: "Midi" },
      { label: "Finish", value: "Gloss" },
    ],
    features: [
      "Balanced layup for all-round play",
      "Reinforced toe against turf wear",
      "Six stock colourways, or your own",
    ],
  },
  {
    slug: "drift-50",
    name: "Drift 50",
    category: "hockey-sticks",
    level: "Club",
    summary: "50% carbon, standard bow, the volume stick for club and school programmes.",
    description:
      "Priced for programmes buying by the dozen. A 50% carbon shaft over a fibreglass base gives a stick that survives a full school season, and the standard 21 mm bow keeps it legal and predictable for developing players.",
    specs: [
      { label: "Composition", value: "50% carbon, 45% fibreglass, 5% aramid" },
      { label: "Bow", value: "21 mm standard" },
      { label: "Lengths", value: '34", 35", 36.5"' },
      { label: "Weight", value: "560 – 580 g" },
      { label: "Balance point", value: "410 mm" },
      { label: "Head shape", value: "Maxi" },
      { label: "Finish", value: "Gloss" },
    ],
    features: [
      "Hard-wearing for turf and indoor",
      "Sold in mixed-length cartons",
      "Lowest cost per season in the range",
    ],
  },
  {
    slug: "cadet-junior",
    name: "Cadet Junior",
    category: "hockey-sticks",
    level: "Junior",
    summary: "Wood and fibreglass composite in short lengths, 24\" to 33\".",
    description:
      "A junior stick that does not punish a small player. Laminated wood core with a fibreglass wrap keeps weight low and cost down, and the maxi head gives beginners a bigger target.",
    specs: [
      { label: "Composition", value: "Laminated wood, fibreglass wrap" },
      { label: "Bow", value: "Standard" },
      { label: "Lengths", value: '24", 26", 28", 30", 33"' },
      { label: "Weight", value: "380 – 500 g" },
      { label: "Head shape", value: "Maxi" },
      { label: "Finish", value: "Gloss, printed graphics" },
    ],
    features: [
      "Bright graphics, easy to brand for clubs",
      "Rounded edges on the head",
      "Packed 12 per carton",
    ],
  },
  {
    slug: "sentry-gk",
    name: "Sentry GK",
    category: "hockey-sticks",
    level: "Goalkeeper",
    summary: "Goalkeeper stick with a thickened head and high-density foam core.",
    description:
      "Built for the specific job of stopping the ball rather than carrying it. A thicker head section and a dense foam core take repeated close-range impact, and the shorter shaft keeps it quick inside the D.",
    specs: [
      { label: "Composition", value: "60% carbon, 40% fibreglass" },
      { label: "Bow", value: "Flat" },
      { label: "Lengths", value: '35", 36.5"' },
      { label: "Weight", value: "600 – 630 g" },
      { label: "Head shape", value: "Maxi, thickened" },
      { label: "Core", value: "High-density foam" },
    ],
    features: [
      "Impact-rated head section",
      "Extra grip wrap for glove use",
      "Matte finish, low glare",
    ],
  },

  // ── Padel rackets ────────────────────────────────────────────
  {
    slug: "strike-pro-12k",
    name: "Strike Pro 12K",
    category: "padel-rackets",
    level: "Advanced",
    summary: "Diamond shape, 12K carbon face, EVA soft core, high balance for power.",
    description:
      "A diamond-shape racket with the balance pushed towards the head, which is what attacking players want for smashes. The 12K carbon face is rough-finished for spin and the EVA soft core keeps it from feeling dead on a slow ball.",
    specs: [
      { label: "Shape", value: "Diamond" },
      { label: "Face", value: "12K carbon, rough finish" },
      { label: "Frame", value: "100% carbon" },
      { label: "Core", value: "EVA soft, black" },
      { label: "Weight", value: "365 – 375 g" },
      { label: "Balance", value: "High" },
      { label: "Thickness", value: "38 mm" },
      { label: "Holes", value: "44" },
    ],
    features: [
      "Rough face for spin off the wall",
      "Rubber protector on the frame head",
      "Elastic wrist cord included",
      "Full-colour sublimated artwork",
    ],
  },
  {
    slug: "balance-x-3k",
    name: "Balance X 3K",
    category: "padel-rackets",
    level: "Intermediate",
    summary: "Teardrop shape, 3K carbon, even balance — the widest-appeal racket we make.",
    description:
      "Teardrop sits between control and power, which is why it is the shape most retailers sell most of. A 3K carbon face over an EVA medium core gives a slightly firmer response than the Control One without asking much from the player.",
    specs: [
      { label: "Shape", value: "Teardrop" },
      { label: "Face", value: "3K carbon" },
      { label: "Frame", value: "Carbon and fibreglass" },
      { label: "Core", value: "EVA medium" },
      { label: "Weight", value: "360 – 370 g" },
      { label: "Balance", value: "Medium" },
      { label: "Thickness", value: "38 mm" },
      { label: "Holes", value: "48" },
    ],
    features: [
      "Best seller for club-level ranges",
      "Reinforced heart section",
      "Ships with cover or bare",
    ],
  },
  {
    slug: "control-one",
    name: "Control One",
    category: "padel-rackets",
    level: "Recreational",
    summary: "Round shape, fibreglass face, soft core and a wide sweet spot.",
    description:
      "A round racket with the sweet spot in the middle of the face, which forgives off-centre hits. The fibreglass face is softer than carbon and takes the sting out of the ball for players new to the game.",
    specs: [
      { label: "Shape", value: "Round" },
      { label: "Face", value: "Fibreglass" },
      { label: "Frame", value: "Fibreglass and carbon" },
      { label: "Core", value: "EVA soft" },
      { label: "Weight", value: "350 – 360 g" },
      { label: "Balance", value: "Low" },
      { label: "Thickness", value: "38 mm" },
      { label: "Holes", value: "52" },
    ],
    features: [
      "Wide sweet spot, easy on the elbow",
      "Strong margin at club retail prices",
      "Eight stock colourways",
    ],
  },
  {
    slug: "cadet-padel",
    name: "Cadet Padel",
    category: "padel-rackets",
    level: "Junior",
    summary: "Lightweight round racket at 330 g for players under 14.",
    description:
      "A junior racket that is genuinely lighter rather than just shorter. At 330 g with a low balance it lets young players swing properly, and the softer core reduces load on developing joints.",
    specs: [
      { label: "Shape", value: "Round" },
      { label: "Face", value: "Fibreglass" },
      { label: "Core", value: "EVA soft" },
      { label: "Weight", value: "325 – 335 g" },
      { label: "Balance", value: "Low" },
      { label: "Thickness", value: "36 mm" },
      { label: "Holes", value: "52" },
    ],
    features: ["Smaller grip circumference", "Bright artwork options", "Wrist cord fitted"],
  },

  // ── Pickleball paddles ───────────────────────────────────────
  {
    slug: "volt-t700-16",
    name: "Volt T700 16",
    category: "pickleball-paddles",
    level: "Tournament",
    summary: "Thermoformed raw T700 carbon, 16 mm core, foam-injected walls.",
    description:
      "Our flagship paddle. Thermoformed as a unibody with foam injected into the perimeter walls, which pushes the sweet spot outward. The raw T700 face is peel-ply textured rather than painted, so the grit lasts through a season.",
    specs: [
      { label: "Face", value: "Raw T700 carbon, peel ply" },
      { label: "Core", value: "16 mm PP honeycomb" },
      { label: "Construction", value: "Thermoformed unibody" },
      { label: "Weight", value: "225 – 235 g" },
      { label: "Length", value: "406 mm" },
      { label: "Width", value: "197 mm" },
      { label: "Grip length", value: "140 mm" },
      { label: "Handle", value: "Perforated PU" },
    ],
    features: [
      "Foam-injected perimeter for a wider sweet spot",
      "Textured face holds spin without paint",
      "Tolerance-checked for deflection each batch",
      "USA Pickleball testing support on request",
    ],
  },
  {
    slug: "volt-t700-13",
    name: "Volt T700 13",
    category: "pickleball-paddles",
    level: "Tournament",
    summary: "The 13 mm build of the Volt, quicker at the kitchen line.",
    description:
      "Same face and construction as the 16 mm Volt with a thinner core, which trades a little control for hand speed. Players who live at the non-volley zone tend to prefer this one.",
    specs: [
      { label: "Face", value: "Raw T700 carbon, peel ply" },
      { label: "Core", value: "13 mm PP honeycomb" },
      { label: "Construction", value: "Thermoformed unibody" },
      { label: "Weight", value: "218 – 228 g" },
      { label: "Length", value: "406 mm" },
      { label: "Width", value: "197 mm" },
      { label: "Handle", value: "Perforated PU" },
    ],
    features: ["Faster hands at the net", "Elongated shape", "Same tooling as the 16 mm"],
  },
  {
    slug: "fiber-elite",
    name: "Fiber Elite",
    category: "pickleball-paddles",
    level: "Recreational",
    summary: "Fibreglass face, 13 mm core, the value paddle for club and resort volume.",
    description:
      "A cold-pressed paddle for buyers who need a sensible price at volume. The fibreglass face gives more pop than carbon, which recreational players usually enjoy, and the edge guard takes court scrapes well.",
    specs: [
      { label: "Face", value: "Fibreglass" },
      { label: "Core", value: "13 mm PP honeycomb" },
      { label: "Construction", value: "Cold pressed" },
      { label: "Weight", value: "215 – 230 g" },
      { label: "Length", value: "394 mm" },
      { label: "Width", value: "203 mm" },
      { label: "Handle", value: "Cushion PU" },
    ],
    features: [
      "Good margin at entry retail prices",
      "Full-colour printed face",
      "Sold as singles or two-paddle sets",
    ],
  },
  {
    slug: "volt-set",
    name: "Volt Starter Set",
    category: "pickleball-paddles",
    level: "Retail set",
    summary: "Two paddles, four balls and a carry sleeve in one retail box.",
    description:
      "Packaged for shelf and for online marketplaces. Two Fiber Elite paddles, four outdoor balls and a zip sleeve, in a printed box sized for standard retail shelving.",
    specs: [
      { label: "Contents", value: "2 paddles, 4 balls, 1 sleeve" },
      { label: "Paddle", value: "Fiber Elite 13 mm" },
      { label: "Balls", value: "40-hole outdoor" },
      { label: "Box", value: "Printed, retail ready" },
      { label: "Carton", value: "10 sets" },
    ],
    features: ["Barcode and retail box artwork", "Amazon-ready packaging available"],
  },

  // ── Shin guards ──────────────────────────────────────────────
  {
    slug: "shield-pro-hockey",
    name: "Shield Pro",
    category: "shin-guards",
    level: "Match",
    summary: "Field hockey guard with a carbon-look HDPE shell and moulded EVA liner.",
    description:
      "Designed around a hockey ball rather than a football. The shell extends lower over the ankle bone and the EVA liner is contoured so the guard sits against the shin without a bandage holding it in place.",
    specs: [
      { label: "Shell", value: "HDPE, carbon-look finish" },
      { label: "Liner", value: "Moulded EVA, 8 mm" },
      { label: "Sizes", value: "XS, S, M, L" },
      { label: "Fastening", value: "Twin elastic straps" },
      { label: "Weight", value: "95 g per guard" },
      { label: "Ankle", value: "Extended shell" },
    ],
    features: [
      "Shaped left and right",
      "Ventilated liner",
      "Sold in pairs with a mesh sleeve",
    ],
  },
  {
    slug: "shield-lite",
    name: "Shield Lite",
    category: "shin-guards",
    level: "Training",
    summary: "Slimline training guard at 60 g with a wraparound cut.",
    description:
      "A lighter guard for training and indoor play. The shell is thinner and the cut wraps further around the calf, so it stays put under a sock without straps.",
    specs: [
      { label: "Shell", value: "HDPE" },
      { label: "Liner", value: "EVA, 5 mm" },
      { label: "Sizes", value: "S, M, L" },
      { label: "Fastening", value: "Sock retained" },
      { label: "Weight", value: "60 g per guard" },
    ],
    features: ["Slips under a playing sock", "Machine washable liner", "Low cost per pair"],
  },
  {
    slug: "shield-fc",
    name: "Shield FC",
    category: "shin-guards",
    level: "Football",
    summary: "Football guard with a detachable ankle sock and fibreglass shell.",
    description:
      "Built to the shape football players expect, with a removable ankle sock and a fibreglass-reinforced shell. The sock uses a stirrup so it stays down inside the boot.",
    specs: [
      { label: "Shell", value: "Fibreglass reinforced" },
      { label: "Liner", value: "EVA, 8 mm" },
      { label: "Sizes", value: "XS, S, M, L" },
      { label: "Ankle sock", value: "Detachable, stirrup" },
      { label: "Weight", value: "110 g per guard" },
    ],
    features: ["Ankle sock sold attached or separate", "Team colour options", "Printed shell artwork"],
  },
  {
    slug: "shield-junior",
    name: "Shield Junior",
    category: "shin-guards",
    level: "Junior",
    summary: "Junior guard in XXS to S with a soft-edge shell.",
    description:
      "Sized for players from roughly six to twelve. Edges are rolled and softened so the shell does not dig in, and the strap is a single loop that a child can fasten alone.",
    specs: [
      { label: "Shell", value: "HDPE, rolled edge" },
      { label: "Liner", value: "EVA, 6 mm" },
      { label: "Sizes", value: "XXS, XS, S" },
      { label: "Fastening", value: "Single elastic loop" },
      { label: "Weight", value: "55 g per guard" },
    ],
    features: ["Child-friendly single strap", "Bright print options", "Packed in pairs"],
  },

  // ── Sports bags ──────────────────────────────────────────────
  {
    slug: "tour-stick-bag",
    name: "Tour Stick Bag",
    category: "sports-bags",
    level: "Match",
    summary: "Three-stick hockey bag in 900D with a fleece-lined stick sleeve.",
    description:
      "Carries three sticks in a fleece-lined sleeve so the graphics do not scuff, with a separate boot compartment vented at both ends. Straps are bar-tacked at every load point.",
    specs: [
      { label: "Fabric", value: "900D polyester, PU backed" },
      { label: "Capacity", value: "3 sticks" },
      { label: "Dimensions", value: "98 × 30 × 22 cm" },
      { label: "Compartments", value: "Stick sleeve, boot vent, main" },
      { label: "Zips", value: "No. 8 twin puller" },
      { label: "Weight", value: "1.3 kg" },
    ],
    features: [
      "Fleece-lined sleeve protects stick graphics",
      "Padded, adjustable shoulder strap",
      "Embroidery or print branding",
    ],
  },
  {
    slug: "padel-thermal",
    name: "Padel Thermal",
    category: "sports-bags",
    level: "Match",
    summary: "Thermal-lined padel bag for three rackets with a shoe pocket.",
    description:
      "A thermal compartment keeps rackets out of direct heat, which matters in Spanish and Mexican summers where EVA cores soften in a hot car. Holds three rackets plus a vented shoe pocket.",
    specs: [
      { label: "Fabric", value: "600D polyester" },
      { label: "Capacity", value: "3 rackets" },
      { label: "Dimensions", value: "60 × 32 × 28 cm" },
      { label: "Lining", value: "Thermal foil, 4 mm" },
      { label: "Compartments", value: "Thermal, shoe, accessory" },
      { label: "Weight", value: "1.1 kg" },
    ],
    features: ["Thermal lining protects the EVA core", "Backpack and shoulder carry", "Full panel branding"],
  },
  {
    slug: "paddle-sling",
    name: "Paddle Sling",
    category: "sports-bags",
    level: "Everyday",
    summary: "Single-strap pickleball sling for two paddles, balls and a bottle.",
    description:
      "A small crossbody bag for players who walk to the court. Two paddle slots, a ball pocket and a bottle sleeve, with a fidlock-style buckle on the strap.",
    specs: [
      { label: "Fabric", value: "600D polyester" },
      { label: "Capacity", value: "2 paddles" },
      { label: "Dimensions", value: "45 × 22 × 12 cm" },
      { label: "Pockets", value: "Ball, bottle, zip valuables" },
      { label: "Weight", value: "480 g" },
    ],
    features: ["Best seller in the US market", "Six colourways", "Woven label branding"],
  },
  {
    slug: "kitbag-45",
    name: "Kitbag 45",
    category: "sports-bags",
    level: "Team",
    summary: "45-litre team duffel with a wet compartment and end grab handles.",
    description:
      "The bag clubs order by the set. Forty-five litres, a sealed wet compartment at one end, and a panel large enough for a club crest and player name.",
    specs: [
      { label: "Fabric", value: "900D polyester" },
      { label: "Volume", value: "45 L" },
      { label: "Dimensions", value: "62 × 32 × 30 cm" },
      { label: "Compartments", value: "Main, wet end, zip side" },
      { label: "Weight", value: "980 g" },
    ],
    features: ["Sealed wet compartment", "Name panel for team sets", "Minimum 24 per colourway"],
  },
  {
    slug: "transit-backpack",
    name: "Transit Backpack",
    category: "sports-bags",
    level: "Everyday",
    summary: "28-litre backpack with external stick or racket straps and a laptop sleeve.",
    description:
      "Made to be carried to work and then to training. A padded laptop sleeve inside, external compression straps that take a stick or a racket bag, and a ventilated base pocket for boots.",
    specs: [
      { label: "Fabric", value: "600D polyester, ripstop base" },
      { label: "Volume", value: "28 L" },
      { label: "Dimensions", value: "48 × 32 × 18 cm" },
      { label: "Laptop", value: "Fits 15 in" },
      { label: "External", value: "Stick / racket straps" },
      { label: "Weight", value: "860 g" },
    ],
    features: ["Padded back panel and straps", "Boot pocket vents through the base", "Reflective trim option"],
  },
];

export function productsByCategory(slug: CategorySlug): Product[] {
  return products.filter((p) => p.category === slug);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function categoryName(slug: CategorySlug): string {
  return getCategory(slug)?.name ?? slug;
}
