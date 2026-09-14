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
};

export const projects: WorkItem[] = [
  {
    slug: "sheet-metal",
    title: "Multiple Objects on Sheet Metal",
    meta: "Solo exhibition · PhD research · 2025",
    images: [
      "/projects/sheet-metal/01-exhibition.jpg",
      "/projects/sheet-metal/02-exhibition.jpg",
      "/projects/sheet-metal/03-religion-culture-and-state.jpg",
      "/projects/sheet-metal/04-the-delegates.jpg",
      "/projects/sheet-metal/05-ecospheric.jpg",
      "/projects/sheet-metal/06-spring-time.jpg",
      "/projects/sheet-metal/07-additive-plastography.jpg",
      "/projects/sheet-metal/08-objects-on-board.jpg",
      "/projects/sheet-metal/09-our-forest-floor.jpg",
      "/projects/sheet-metal/10-seafood.jpg",
      "/projects/sheet-metal/11-river-crossing.jpg",
      "/projects/sheet-metal/12-echoes-of-unity.jpg",
      "/projects/sheet-metal/13-the-trackers.jpg",
    ],
    featured: true,
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
    images: ["/projects/harmattan-28/01-workshop.jpg"],
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

export type TimelineItem = {
  date: string;
  title: string;
  desc?: string;
};

export const timeline: TimelineItem[] = [
  { date: "1993 – 1997", title: "Ekakpamre Grammar School, Ekakpamre", desc: "First teaching post." },
  { date: "1997 – 2000", title: "Urhobo College, Effurun" },
  { date: "2000 – 2011", title: "Our Lady's Model High School, Effurun" },
  {
    date: "2011 – 2016",
    title: "Ekpan Secondary School, Effurun",
    desc: "Vice-Principal — school administration, class coordination, policy implementation.",
  },
  {
    date: "2014",
    title: "Enrolled at the University of Benin",
    desc: "Full-time postgraduate study begins alongside continued teaching.",
  },
  { date: "2016", title: "Ohorhe Secondary School, Effurun", desc: "Current teaching post." },
  { date: "2017", title: "MFA, Advertising — University of Benin" },
  { date: "2019", title: "21st Harmattan Workshop", desc: "Bruce Onobrakpeya Foundation." },
  {
    date: "2022",
    title: "Studio residency — Ovuomaroro Gallery, Mushin-Lagos",
    desc: "Mentorship under Dr. Bruce Onobrakpeya.",
  },
  {
    date: "2026",
    title: "PhD, Printmaking (Graphics) — University of Benin",
    desc: 'Dissertation: "An Exploration of Multiple Objects on Sheet Metal Technique in Printmaking."',
  },
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
    title: "An Exploration of Multiple Objects on Sheet Metal Technique in Printmaking — Solo Exhibition Report",
    meta: "ISBN 978-978-695-372-4 · 2025",
  },
];

export const aboutPhotos = [
  { label: "Classroom, 1993–2016", images: [] as string[] },
  { label: "Studio, Ovuomaroro", images: [] as string[] },
  { label: "Harmattan Workshop", images: ["/about/harmattan-workshop.jpg"] as string[] },
  { label: "PhD defense, 2026", images: [] as string[] },
];

// Set to a path like "/projects/portrait.jpg" once a real studio portrait is available.
export const heroImage: string | null = "/main.png";

export const contact = {
  email: "martinaokoro562@gmail.com",
  phone: "+234 703 466 9156",
  studio: "Warri, Delta State, Nigeria",
};
