// Central content data for the site. Edit copy here rather than inside components.
// To add real photographs: drop image files into /public/projects/<slug>/ or /public/about/
// and add their paths (e.g. "/projects/sheet-metal/01.jpg") to the arrays below.
// Tiles/pages fall back to an honest "Image pending" placeholder while an images array is empty.

export type WorkItem = {
  slug: string;
  title: string;
  meta: string;
  images: string[]; // populate as photos become available — first image is used as the cover
  featured?: boolean;
  detailHref?: string; // set when a dedicated /projects/<slug> page exists for this entry
};

export type ArtworkVersion = {
  figureLabel: string; // as printed in the thesis, e.g. "Figure 7"
  styleLabel: string; // the caption's Technique/Style text, verbatim
  size: string; // verbatim, e.g. "85 x 47.2 cm"
  year: string;
  image: string;
  photograph?: string; // optional photo credit
};

export type Artwork = {
  slug: string;
  title: string;
  source: string;
  media: string[]; // "Art Media" list, one material per entry
  description: string[]; // narrative + technique paragraphs, in source order
  woodPanel: ArtworkVersion;
  plastoCast: ArtworkVersion;
};

export const artworks: Artwork[] = [
  {
    slug: "echoes-of-unity",
    title: "Echoes of Unity",
    source: "M. U. Eghwrudjakpor",
    media: [
      "Shavings",
      "Cornstarch",
      "Chipboard",
      "Twine",
      "Wire",
      "Plyboard",
      "Ink",
      "Cord",
      "Plastic",
      "Cards",
      "Rod",
      "Flat bar",
      "Palmnut spikes",
      "Brand card",
      "Colour",
    ],
    description: [
      `The motif titled "Echoes of Unity" serves as a cultural representation aimed at fostering national diversity to uphold a shared federal identity. It acts as a harmonious melody, working to bridge gaps, mitigate mistrust, and dissolve divisions among various constituent units.`,
      `The head features of the outstanding wind piper were compiled from metal rods and multicoloured brand cards which rested on a neck costume of oval shaped red plastic beads imposed on white cord media. The outrageous neck costumes were cultured from black wire filaments, accessories of wood shavings and red coloured/plain palmnut spikes, yellow twine and white chipboard bounding the left collar. The chief piper wore clothing of white cord, modified shavings and black electric wire on the right shoulder. The hands were formed from a mix of cornstarch and glues. The composition of the main reed is yellow plastic attached to lips, varied brand card, curved wires of varied colours and board. Features on the kakaki instrumentalist include a turban of white, blue and black media of boards and wire. The outstretched reed was manufactured from card, flat band and wires. The components of the distant figure are reformed blue PVC pipe, black wire and chipboard. Some hands were formed from calcium carbonate concrete bounded by wire.`,
    ],
    woodPanel: {
      figureLabel: "Figure 7",
      styleLabel: "Multiple Objects on Wood Panel",
      size: "85 x 47.2 cm",
      year: "2022",
      image: "/projects/echoes-of-unity/wood-panel.jpg",
    },
    plastoCast: {
      figureLabel: "Figure 8",
      styleLabel: "Multiple Objects in Plasto-Cast",
      size: "89 x 48.22 cm",
      year: "2023",
      image: "/projects/echoes-of-unity/plasto-cast.jpg",
    },
  },
  {
    slug: "installation-festival",
    title: "Installation Festival",
    source: "M. U. Eghwrudjakpor",
    media: [
      "Calcium carbonate (CaCO₃)",
      "Cornstarch",
      "Plyboard",
      "Fabric",
      "Hair wig",
      "Brandcard",
      "Plastic",
      "Clipboard",
      "Cord",
      "Top bond",
      "Colour",
      "Feather",
    ],
    description: [
      `The beauty in aging is a circle of life set apart and celebrated in ceremonial installations and age-grade festivities as they predominate tribal societies. When it concerns the oldest wife "okpako-eghweya" in a community, it is accountable to a resourceful and worthy stewardship all through decades. Such installations are usually female-governed, and have the entire village and neighbourhoods as reference group in festival agog — as indicated here, where the researcher's late Nene Diavwairu was a recipient of the elephant tusk at age 95.`,
      `Calcium carbonate mixed with resin occupied vital sections of the work. For instance, the smiling lips and teeth of the outstanding female figure, hand beads of the female piper including the gigantic elephant tusk and in-built designed symbols were formed from tinted and white dust objects. Nene's hair and body wear were made from brandcard, fabric and diced white PVC sheet. The face was constructed from painted card, with wire indicating the tattoo incision "usi" which runs from the forehead down the chin. Hard card was also used to construct the jaws and other structures of the head. The beaded head costume of the piper was created from cord media. The populated crowd was created from planate articles of board, cards and plastics, with a feather stuck to one of the card-made hats.`,
    ],
    woodPanel: {
      figureLabel: "Figure 13",
      styleLabel: "Multiple Objects on Wood Panel",
      size: "80 x 58.2 cm",
      year: "2022",
      image: "/projects/installation-festival/wood-panel.jpg",
    },
    plastoCast: {
      figureLabel: "Figure 14",
      styleLabel: "Installation Festival in Plasto-Cast",
      size: "83 x 60 cm",
      year: "2023",
      image: "/projects/installation-festival/plasto-cast.jpg",
      photograph: "Omosigho Bennett",
    },
  },
  {
    slug: "street-corner",
    title: "Street Corner",
    source: "M. U. Eghwrudjakpor",
    media: [
      "Raffia fibre",
      "Coconut sheaths",
      "Log bark",
      "Fibre cords",
      "Brandcard",
      "Wire",
      "Stick",
      "Shell",
      "Board",
      "Basket",
      "Pine fir",
      "Cord",
      "Chipboard",
      "Plastics",
      "Foil card",
      "Calcium carbonate",
      "Bark",
      "Gmelina cloves",
    ],
    description: [
      `The research visualised a pedestrian-friendly, hyper-local anchorage with sessions of passionate displays of potential in entertainment music, acts, arts, football and several other pursuits. You stop by to diffuse the thrill of a public arena in "Street Corner" — an influence on the quality of a neighbourhood.`,
      `Modified whistling pine firs formed part of the head costumes of three entertainers, while peals from log bark created a formidable border on the temples and foreheads of all four players on the motif. The face, hands and neck of the drummer were formed from plyboard, chipboard and lines of blue and red coloured wires. The drumhead, bordered round by raffia, was manufactured from coconut sheaths with a piece of stick to generate vibration. Similar media formed the other faces, whereas their clothes were crafted from raffia and synthetic fibre cords. The lead vocalist of this vibrant troupe is adorned with a pendant of gmelina cloves hooked to a necklace of fibre and wire filaments, while the right shoulder wears an incision of a lizard tattoo created from brandcard. A pendant severed from chipboard and tied with knotted raffia fibre took the form of a necklace worn by the sub-vocalist on the right side of the motif.`,
    ],
    woodPanel: {
      figureLabel: "Figure 26",
      styleLabel: "Multiple Objects on Wood Panel",
      size: "81.8 x 57 cm",
      year: "2022",
      image: "/projects/street-corner/wood-panel.jpg",
    },
    plastoCast: {
      figureLabel: "Figure 26 (Plasto-Cast)",
      styleLabel: "Street Corner in Plasto-Cast",
      size: "81.8 x 57 cm",
      year: "2023",
      image: "/projects/street-corner/plasto-cast.jpg",
    },
  },
  {
    slug: "the-trackers",
    title: "The Trackers",
    source: "M. U. Eghwrudjakpor",
    media: [
      "Bark",
      "Calcium carbonate",
      "Spoke",
      "Flat bar",
      "Rope",
      "Sackbag",
      "Straw",
      "Plate metal",
      "Card",
      "Fibre",
      "Cornstarch",
      "Wire",
      "Rod",
      "Braid",
      "Rug net",
      "Twine",
    ],
    description: [
      `In a society infested by diverse insecurity challenges, "The Trackers" exploits a variety of phenomena from platforms within and outside communities to investigate, identify, capture and subdue insecurity maskers, so as to forestall sanity in communal dwellings.`,
      `The artist employed diverse techniques and objects to address a complex production of the contextualised. What appeared like intelligence, policing or strategising hunters, warriors or spies were shielded behind a tree created from wood bark; other objects included sticks, wire and twine inlaid in grooves. The symbolic head of the first warrior was compiled from coloured card, hair braid and cornstarch to indicate eyes, nose and lips, and the arm which held on to a scabbard. Dress costumes were assembled from wire, metal plate, rods, yellow and blue cards, rolls of fibrous filaments, nets and a trail of fibres to represent fluffy feathers. Attached to the waist belt is a sheath bearing spears with the handle hung to the right shoulder. Costumes worn by the second warrior were compiled from sack bag, plastic element and rug fibres, with some spears issuing from the back plate. The head was formed from braid locks, coloured cards, fronds and metal rods.`,
    ],
    woodPanel: {
      figureLabel: "Figure 29",
      styleLabel: "Multiple Objects on Wood Panel",
      size: "77 x 59.8 cm",
      year: "2022",
      image: "/projects/the-trackers/wood-panel.jpg",
    },
    plastoCast: {
      figureLabel: "Figure 30",
      styleLabel: "Trackers on Metal Patina (Plasto-Cast)",
      size: "77 x 59.8 cm",
      year: "2023",
      image: "/projects/the-trackers/plasto-cast.jpg",
    },
  },
  {
    slug: "three-dancers",
    title: "Three Dancers",
    source: "M. U. Eghwrudjakpor",
    media: [
      "Iron rod",
      "Raffia",
      "Coloured stones and dust",
      "Sandcard/emery card",
      "Chipboard",
      "Braids",
      "Basket",
      "Wire",
      "Twine",
      "Food pack",
    ],
    description: [
      `Dance is a vital mechanical element intricately woven into the rapid rhythmic impulse of songs, sounds and movement within a given time and space. These intricate dance steps significantly enhance the radiance of a community's social and cultural well-being. The language of dance depicted in "Three Dancers" surpasses these boundaries, delving into the realm of forging personal connections within novel environments.`,
      `The stampeding legs of the lead dancer were formed from chipboard and emery cards, pounced on a coarse surface compiled from diverse sands/stones spread at a right angle. Raffia fibre, blue wire core and red twine with braidlock made the belts featured on the floating skirts of the dancers. The spread of rods on the first dancer's skirt made outrageous textures on metal. The torso of the first dancer was indicated by yellow brandcard and plastics of yellow and red designs, while the celebrating hands, formed from red plastics, were superimposed on chipboard. The blue body costume of the second dancer was equally mounted on chipboard, whereas the hands were made from flannel material. The entire features of the terminal figure were cultured from braidlock belt, whole plyboard, emery card, red twine and a spoon-bowl head. Two brown-coloured heads created from emery card were mounted on cut-out cards.`,
    ],
    woodPanel: {
      figureLabel: "Figure 31",
      styleLabel: "Objects on Wood Panel",
      size: "72 x 60 cm",
      year: "2022",
      image: "/projects/three-dancers/wood-panel.jpg",
    },
    plastoCast: {
      figureLabel: "Figure 32",
      styleLabel: "Three Dancers Patina in Plasto-Cast",
      size: "72 x 60 cm",
      year: "2023",
      image: "/projects/three-dancers/plasto-cast.jpg",
    },
  },
];

export const projects: WorkItem[] = [
  {
    slug: "sheet-metal",
    title: "Multiple Objects on Sheet Metal",
    meta: "Solo exhibition · PhD research · 2025",
    images: [],
    featured: true,
  },
  {
    slug: "echoes-of-unity",
    title: "Echoes of Unity",
    meta: "Wood panel & plasto-cast diptych · 2022–2023",
    images: ["/projects/echoes-of-unity/wood-panel.jpg", "/projects/echoes-of-unity/plasto-cast.jpg"],
    detailHref: "/projects/echoes-of-unity",
  },
  {
    slug: "installation-festival",
    title: "Installation Festival",
    meta: "Wood panel & plasto-cast diptych · 2022–2023",
    images: ["/projects/installation-festival/wood-panel.jpg", "/projects/installation-festival/plasto-cast.jpg"],
    detailHref: "/projects/installation-festival",
  },
  {
    slug: "street-corner",
    title: "Street Corner",
    meta: "Wood panel & plasto-cast diptych · 2022–2023",
    images: ["/projects/street-corner/wood-panel.jpg", "/projects/street-corner/plasto-cast.jpg"],
    detailHref: "/projects/street-corner",
  },
  {
    slug: "the-trackers",
    title: "The Trackers",
    meta: "Wood panel & plasto-cast diptych · 2022–2023",
    images: ["/projects/the-trackers/wood-panel.jpg", "/projects/the-trackers/plasto-cast.jpg"],
    detailHref: "/projects/the-trackers",
  },
  {
    slug: "three-dancers",
    title: "Three Dancers",
    meta: "Wood panel & plasto-cast diptych · 2022–2023",
    images: ["/projects/three-dancers/wood-panel.jpg", "/projects/three-dancers/plasto-cast.jpg"],
    detailHref: "/projects/three-dancers",
  },
  {
    slug: "spare-our-earth",
    title: "Spare Our Earth!",
    meta: "Solo exhibition · graphic advertising · 2017",
    images: [],
  },
  {
    slug: "harmattan-28",
    title: "28th Harmattan Workshop",
    meta: "Bruce Onobrakpeya Foundation · 2026",
    images: [],
  },
  {
    slug: "ovuomaroro-residency",
    title: "Studio residency, Ovuomaroro Gallery",
    meta: "Mushin-Lagos · field & studio practice · 2022",
    images: [],
  },
];

export const workStrip = [
  { label: "Studio Practice", href: "/#projects" },
  { label: "Teaching & Leadership", href: "/#path" },
  { label: "Doctoral Research", href: "/research" },
  { label: "Harmattan Workshop", href: "/#practice" },
  { label: "Get in Touch", href: "/#contact" },
];

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export const fullNavLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/#projects" },
  { label: "Path", href: "/#path" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/#contact" },
];

export const galleryImages = [
  "/gallery1.png",
  "/gallery2.png",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
  "/gallery7.jpg",
  "/gallery8.jpg",
  "/gallery9.jpg",
  "/gallery10.jpg",
  "/gallery11.jpg",
  "/gallery12.jpg",
  "/gallery13.jpg",
  "/gallery14.jpg",
  "/gallery15.jpg",
  "/gallery17.jpg",
];

export type Publication = {
  title: string;
  meta: string;
};

export const publications: Publication[] = [
  {
    title: "Observer Participant in Harmattan Printmaking Workshop (2019)",
    meta: "International Journal of African Development and Sustainable Research, 6(2) · 2024",
  },
  {
    title:
      "The Place of Traditional Signage in an Era of Computer Graphics: A Study of Selected Signwriters in Benin Metropolis",
    meta: "Journal of African Sustainable Development, 5(2) · 2024",
  },
  {
    title:
      "Spare Our Earth! A Project Report on Oil and Gas Pollution in Delta State: An Awareness Campaign Through Graphic Advertising",
    meta: "ISBN 978-978-695-371-7-4 · 2025",
  },
  {
    title: "An Exploration of Multiple Objects on Sheet Metal Technique in Printmaking: Solo Exhibition Report",
    meta: "ISBN 978-978-695-372-4 · 2025",
  },
];

export const aboutPhotos = [
  { label: "Classroom, 1993–2016", images: [] as string[] },
  { label: "Studio, Ovuomaroro", images: [] as string[] },
  { label: "Harmattan Workshop", images: [] as string[] },
  { label: "PhD defense, 2026", images: [] as string[] },
];

export type Recognition = {
  date: string;
  title: string;
  org: string;
};

// Structured so the Practice section can render it as a scannable list
// rather than a single run-on paragraph.
export const recognition: Recognition[] = [
  {
    date: "Dec 2022",
    title: "Letter of Recommendation",
    org: "Ovuomaroro Gallery, from Dr. Bruce Onobrakpeya, MFR, NNOM",
  },
  {
    date: "Jan 2016",
    title: "Regional Fulbright Education USA Workshop",
    org: "College Fair Art Exhibition",
  },
  {
    date: "Since Apr 2005",
    title: "Registered member",
    org: "Teachers Registration Council of Nigeria",
  },
];

// Set to a path like "/projects/portrait.jpg" once a real studio portrait is available.
export const heroImage: string | null = '/heroimg.jpg';

export const contact = {
  email: "martinaokoro562@gmail.com",
  phone: "+234 703 466 9156",
  studio: "Warri, Delta State, Nigeria",
};
