export type ProjectStatus = "completed" | "ongoing";

export type ProjectMedia = {
  src: string;
  type: "image" | "video";
  alt: string;
  caption: string;
};

export type ProjectRecord = {
  slug: string;
  title: string;
  shortTitle: string;
  client: string;
  location: string;
  year: string;
  status: ProjectStatus;
  sector: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  cover: string;
  intro: string[];
  scope: string[];
  outcomes: string[];
  media: ProjectMedia[];
};

export const projectStatuses: { id: ProjectStatus; label: string; description: string }[] = [
  {
    id: "completed",
    label: "Completed",
    description: "Work handed over, photographed, and in use.",
  },
  {
    id: "ongoing",
    label: "Ongoing",
    description: "Live sites where the team is still on the job.",
  },
];

export const projects: ProjectRecord[] = [
  {
    slug: "hbl-branch-renovations",
    title: "HBL Branch Renovations",
    shortTitle: "HBL Branch Renovations",
    client: "Habib Bank Limited",
    location: "Mastuj Branch and other HBL sites across Pakistan",
    year: "2025 to 2026",
    status: "completed",
    sector: "Banking",
    summary: "Full branch renovation for HBL, from the facade and generator pad through banking hall, joinery, and staff floors.",
    metaTitle: "HBL Branch Renovations | Ammarco Projects",
    metaDescription:
      "Ammarco renovated HBL branches including Mastuj, covering facade, interiors, electrical, HVAC, security, and backup power. See the completed branch gallery.",
    heroSubtitle: "A finished HBL branch, from the mountain-side facade through the banking hall and staff floors.",
    cover: "/projects/hbl-branch-renovations/01-mastuj-facade.jpeg",
    intro: [
      "Ammarco took HBL branch interiors and exteriors from a tired fit-out to the current bank standard. The photographs here are from Mastuj Branch and related sites. The work covers the public hall, staff rooms, wet areas, and the plant that keeps the branch running.",
      "The facade is granite, steel, and a full-width HBL fascia with downlights. Inside, glass partitions, branded wall graphics, teller counters, and a CAT generator on a proper pad sit in the same package so the branch can open without a second contractor finishing the leftovers.",
    ],
    scope: [
      "Facade, canopy, signage, and entrance stairs",
      "Banking hall, teller line, and Islamic banking counters",
      "Glass offices, meeting rooms, and staff workstations",
      "Joinery, flooring, paint, and column cladding",
      "Electrical, lighting, HVAC, and CCTV",
      "Backup generator, exhaust, and plinth",
      "Fire exit doors, corridors, and snagging",
    ],
    outcomes: [
      "A branch that reads as HBL from the road",
      "A hall customers can use without stepping around unfinished work",
      "Staff floors that match the public-side specification",
      "Power backup sitting on a finished pad, not on loose gravel",
    ],
    media: [
      {
        src: "/projects/hbl-branch-renovations/01-mastuj-facade.jpeg",
        type: "image",
        alt: "HBL Mastuj Branch facade with mountain backdrop",
        caption: "Completed Mastuj Branch facade, fascia, and entrance.",
      },
      {
        src: "/projects/hbl-branch-renovations/02-mastuj-entrance.jpeg",
        type: "image",
        alt: "HBL Mastuj Branch entrance stairs, railings, and generator",
        caption: "Entrance, railings, and generator pad seen together.",
      },
      {
        src: "/projects/hbl-branch-renovations/03-backup-generator.jpeg",
        type: "image",
        alt: "CAT backup generator installed beside the branch",
        caption: "CAT backup set on a raised plinth with exhaust.",
      },
      {
        src: "/projects/hbl-branch-renovations/12-islamic-banking-counters.jpeg",
        type: "image",
        alt: "HBL Islamic banking teller counters",
        caption: "Islamic banking counters, stone columns, and hall lighting.",
      },
      {
        src: "/projects/hbl-branch-renovations/11-lobby-entrance.jpeg",
        type: "image",
        alt: "Glass lobby entrance with stone-clad columns",
        caption: "Lobby doors and stone-clad columns at the public entrance.",
      },
      {
        src: "/projects/hbl-branch-renovations/05-staff-workstations.jpeg",
        type: "image",
        alt: "Staff workstations with HBL branded glass wall",
        caption: "Staff workstations against the branded glass wall.",
      },
      {
        src: "/projects/hbl-branch-renovations/08-meeting-room.jpeg",
        type: "image",
        alt: "Glass meeting room inside the renovated HBL branch",
        caption: "Glass meeting room off the main floor.",
      },
      {
        src: "/projects/hbl-branch-renovations/07-glass-partitions.jpeg",
        type: "image",
        alt: "Glass partitions between desks in the HBL branch",
        caption: "Partitioned desks looking through to the street.",
      },
      {
        src: "/projects/hbl-branch-renovations/04-branch-interior.jpeg",
        type: "image",
        alt: "Renovated HBL branch interior",
        caption: "Interior finishes after the hall was cleared for handover.",
      },
      {
        src: "/projects/hbl-branch-renovations/06-office-desks.jpeg",
        type: "image",
        alt: "Office desks in the renovated branch",
        caption: "Office desks, storage, and ceiling services coordinated.",
      },
      {
        src: "/projects/hbl-branch-renovations/09-customer-area.jpeg",
        type: "image",
        alt: "Customer area inside the HBL branch",
        caption: "Customer side of the renovated floor.",
      },
      {
        src: "/projects/hbl-branch-renovations/10-workstations-side.jpeg",
        type: "image",
        alt: "Side view of staff workstations",
        caption: "Side view of the workstation run.",
      },
      {
        src: "/projects/hbl-branch-renovations/13-service-corridor.jpeg",
        type: "image",
        alt: "Finished service corridor with ceiling lights",
        caption: "Service corridor after paint, tiles, and lights.",
      },
      {
        src: "/projects/hbl-branch-renovations/14-branch-finishes.jpeg",
        type: "image",
        alt: "Branch finishing works",
        caption: "Finishes checked before the branch was handed over.",
      },
      {
        src: "/projects/hbl-branch-renovations/15-fire-exit.jpeg",
        type: "image",
        alt: "Fire exit door at the end of a tiled corridor",
        caption: "Fire exit, panic bar, and tiled corridor at the rear.",
      },
    ],
  },
  {
    slug: "hbl-iconic-drive-thru-atm",
    title: "HBL Drive-Through ATM",
    shortTitle: "HBL Drive-Through ATM",
    client: "Habib Bank Limited",
    location: "Pakistan",
    year: "2025 to 2026",
    status: "ongoing",
    sector: "Banking",
    summary: "Iconic HBL drive-thru ATM canopy, lane, lighting, and pylon, with site video from build through night commissioning.",
    metaTitle: "HBL Drive-Through ATM | Ammarco Projects",
    metaDescription:
      "Ammarco is delivering HBL's iconic drive-thru ATM: canopy, branded cladding, drive lane, lighting, and night commissioning. See photos and site video.",
    heroSubtitle: "A drive-up ATM that reads clearly by day and at night, with a dedicated lane and a full canopy.",
    cover: "/projects/hbl-iconic-drive-thru-atm/06-night-front.jpeg",
    intro: [
      "This is HBL's iconic drive-thru ATM. Ammarco built the canopy, the branded tower, the drive lane, the pylon, and the lighting so a customer can pull up, transact, and leave without leaving the car.",
      "The photographs show the finished unit in daylight against the hills and at night with the green canopy lights on. The videos are from the site while the structure, cladding, and lane were still being closed out.",
    ],
    scope: [
      "Civil pad, canopy structure, and cladding",
      "HBL branded tower and service graphics",
      "Drive-thru lane marking, arrows, and barriers",
      "Pylon sign for cash, bills, and transfers",
      "Night lighting and accent strips",
      "Landscaping, kerbs, and approach",
      "Commissioning checks on site",
    ],
    outcomes: [
      "A unit the bank can photograph and use as the type-site",
      "A lane that is obvious to a driver at speed",
      "Lighting that holds the brand after dark",
      "A package we can repeat on the next sites",
    ],
    media: [
      {
        src: "/projects/hbl-iconic-drive-thru-atm/06-night-front.jpeg",
        type: "image",
        alt: "HBL drive-thru ATM at night with a car at the canopy",
        caption: "Night front: canopy lights, branded tower, and a car at the kiosk.",
      },
      {
        src: "/projects/hbl-iconic-drive-thru-atm/04-night-lane.jpeg",
        type: "image",
        alt: "Drive thru only lane markings leading to the ATM at night",
        caption: "Drive-thru lane markings leading to the unit at night.",
      },
      {
        src: "/projects/hbl-iconic-drive-thru-atm/05-night-canopy.jpeg",
        type: "image",
        alt: "HBL drive-thru ATM night canopy and service panel",
        caption: "Night canopy and the cash, bill, and transfer panel.",
      },
      {
        src: "/projects/hbl-iconic-drive-thru-atm/01-day-canopy.jpeg",
        type: "image",
        alt: "HBL drive-thru ATM canopy in daylight with mountains behind",
        caption: "Daylight canopy against the hills.",
      },
      {
        src: "/projects/hbl-iconic-drive-thru-atm/02-drive-thru-lane.jpeg",
        type: "image",
        alt: "Yellow and white drive thru only road markings",
        caption: "Lane paint, arrow, and approach to the kiosk.",
      },
      {
        src: "/projects/hbl-iconic-drive-thru-atm/03-pylon-sign.jpeg",
        type: "image",
        alt: "HBL drive thru ATM pylon sign",
        caption: "Pylon for cash withdrawal, bill payment, and funds transfer.",
      },
      {
        src: "/projects/hbl-iconic-drive-thru-atm/07-street-view.jpeg",
        type: "image",
        alt: "Street view of the HBL drive-thru ATM building",
        caption: "Street view of the finished ATM building.",
      },
      {
        src: "/projects/hbl-iconic-drive-thru-atm/08-site-walkthrough.mp4",
        type: "video",
        alt: "Site walkthrough of the HBL drive-thru ATM during construction",
        caption: "Site walkthrough while the unit was still being closed out.",
      },
      {
        src: "/projects/hbl-iconic-drive-thru-atm/09-night-walkthrough.mp4",
        type: "video",
        alt: "Night walkthrough of the HBL drive-thru ATM",
        caption: "Night walkthrough of lighting and the finished canopy.",
      },
    ],
  },
  {
    slug: "usaid-energy-distribution",
    title: "USAID Energy Distribution Projects",
    shortTitle: "USAID Energy Offices",
    client: "USAID",
    location: "DISCO offices across Pakistan",
    year: "Completed",
    status: "completed",
    sector: "Energy",
    summary: "Office renovations for electricity distribution companies, plus field vehicle decks, to USAID standards.",
    metaTitle: "USAID Energy Distribution Projects | Ammarco",
    metaDescription:
      "Ammarco renovated DISCO offices for USAID across Pakistan, including IESCO, MEPCO, PESCO, LESCO, FESCO, and KESCO, plus Ravi rear decks for field vehicles.",
    heroSubtitle: "DISCO offices and field kit renovated to the standard USAID asked for.",
    cover: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2035",
    intro: [
      "We renovated electricity distribution company offices across Pakistan for USAID. The work covered IESCO, MEPCO, PESCO, LESCO, FESCO, and KESCO, plus fabrication of Ravi rear decks for pickup vehicles used in the field.",
      "The brief was a usable office and kit that would pass USAID checks, not a showpiece that fell apart after the inspection.",
    ],
    scope: [
      "Office renovations for six DISCOs",
      "Electrical upgrades and HVAC",
      "Interior refurbishment, furniture, and fixtures",
      "Fabrication of Ravi rear decks",
      "Quality checks against USAID standards",
    ],
    outcomes: [
      "Offices that could be occupied after handover",
      "Field vehicles with decks that survived actual use",
      "A paper trail the client could show USAID",
    ],
    media: [
      {
        src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2035",
        type: "image",
        alt: "Institutional office building",
        caption: "Distribution company offices renovated under the USAID program.",
      },
    ],
  },
  {
    slug: "dai-kpg",
    title: "DAI KPG Project",
    shortTitle: "DAI KPG",
    client: "DAI, Khyber Pakhtunkhwa Governance Project",
    location: "Islamabad",
    year: "Completed",
    status: "completed",
    sector: "Institutional",
    summary: "HVAC, security cabins, and anti-blast film for KPG project offices in Islamabad.",
    metaTitle: "DAI KPG Project | Ammarco",
    metaDescription:
      "Ammarco supplied and installed HVAC, security cabins, and anti-blast film for DAI's Khyber Pakhtunkhwa Governance Project offices in Islamabad.",
    heroSubtitle: "HVAC, security cabins, and anti-blast film for a governance project office.",
    cover: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
    intro: [
      "For DAI's Khyber Pakhtunkhwa Governance Project in Islamabad we designed and installed HVAC, fabricated security cabins, and applied anti-blast film. The three pieces had to work as one security and comfort package.",
      "Cabins were built for the site, not bought as a generic box. Film and HVAC were coordinated with the same openings so one trade did not undo the other.",
    ],
    scope: [
      "HVAC design and installation",
      "Security cabin fabrication and install",
      "Anti-blast film",
      "Climate control and testing",
    ],
    outcomes: [
      "Offices that stay within a usable temperature range",
      "Cabins that match the security brief",
      "Glazing treated where the risk required it",
    ],
    media: [
      {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
        type: "image",
        alt: "Office interior for an institutional project",
        caption: "KPG project offices in Islamabad.",
      },
    ],
  },
  {
    slug: "naklah-wear-outlet",
    title: "Naklah Wear Factory Outlet",
    shortTitle: "Naklah Wear Outlet",
    client: "Naklah Supplies, Naklah Wear",
    location: "Pakistan",
    year: "Completed",
    status: "completed",
    sector: "Retail",
    summary: "Factory outlet and display center for Naklah Wear, including interiors, lighting, and retail fixtures.",
    metaTitle: "Naklah Wear Factory Outlet | Ammarco",
    metaDescription:
      "Ammarco built the Naklah Wear factory outlet and display center, covering interiors, display systems, lighting, electrical, and HVAC.",
    heroSubtitle: "A factory outlet and display floor built to the brand, not a generic shop fit.",
    cover: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069",
    intro: [
      "Naklah Wear needed a factory outlet and display center that looked like the brand and could take daily retail traffic. We planned the interior, built the display systems, and installed lighting, electrical, and HVAC as one job.",
      "Fixtures were made for the floor, not borrowed from a catalogue that did not match the clothing.",
    ],
    scope: [
      "Interior design and planning",
      "Display system fabrication",
      "Retail fixtures and lighting",
      "Electrical and HVAC",
      "Flooring, finishes, and signage",
    ],
    outcomes: [
      "A floor the brand could photograph",
      "Display that can be restocked without a carpenter",
      "Lighting that shows the product, not just the ceiling",
    ],
    media: [
      {
        src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069",
        type: "image",
        alt: "Retail interior for a factory outlet",
        caption: "Naklah Wear factory outlet and display center.",
      },
    ],
  },
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);

export const getProjectsByStatus = (status: ProjectStatus) =>
  projects.filter((project) => project.status === status);

export const getRelatedProjects = (slug: string, count = 2) => {
  const current = getProjectBySlug(slug);
  if (!current) {
    return projects.slice(0, count);
  }

  const sameStatus = projects.filter((project) => project.slug !== slug && project.status === current.status);
  const others = projects.filter((project) => project.slug !== slug && project.status !== current.status);
  return [...sameStatus, ...others].slice(0, count);
};
