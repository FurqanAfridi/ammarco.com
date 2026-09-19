export type ServiceIconName =
  | "layout"
  | "building"
  | "zap"
  | "droplets"
  | "wind"
  | "flame"
  | "shield"
  | "sun"
  | "power"
  | "wifi";

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceRecord = {
  slug: string;
  icon: ServiceIconName;
  title: string;
  shortTitle: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  image: string;
  imageAlt: string;
  intro: string[];
  approach: string[];
  audience: string[];
  typicalWork: string[];
  scope: string[];
  outcomes: string[];
  process: { title: string; detail: string }[];
  faqs: ServiceFaq[];
};

export const services: ServiceRecord[] = [
  {
    slug: "interior",
    icon: "layout",
    title: "Interior and Exterior Design",
    shortTitle: "Interior & Exterior Design",
    summary: "Space planning, interiors, and facade work for homes, offices, and commercial buildings.",
    metaTitle: "Interior and Exterior Design in Islamabad | Ammarco",
    metaDescription:
      "Interior and exterior design in Islamabad for homes, offices, hotels, and commercial buildings. Space planning, materials, finishes, and site supervision by Ammarco.",
    heroSubtitle: "Spaces that match how you live or work, from layout through finishes and the facade.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158",
    imageAlt: "Interior design of a modern living space",
    intro: [
      "Ammarco plans interior and exterior design for residential and commercial projects across Pakistan. The work starts with how the space will be used, then moves into materials, color, lighting, and the look of the building from the street.",
      "A designer stays with the job through drawings and site visits. That keeps the finishes, joinery, and facade aligned with the original brief instead of drifting once construction starts.",
      "Most clients come to us with a mix of constraints: a fixed budget, an existing structure, a brand that has to read clearly, or a family home that has to work for daily life. We treat those as the brief, not as afterthoughts.",
      "We also coordinate with civil and MEP teams so false ceilings, wet areas, and facade openings do not fight the services behind them. A good interior fails if the air conditioner drip or the electrical point is in the wrong place.",
    ],
    approach: [
      "We survey the site before we draw. Room sizes, daylight, existing services, and what can be kept all affect the plan. Mood boards come after that, not before.",
      "Materials are chosen for how they will look in two years, not only on handover day. We prefer finishes you can source again, clean, and repair in Pakistan rather than one-off imports that cannot be matched.",
    ],
    audience: [
      "Homeowners planning a new house or a full interior refresh",
      "Offices and retail brands that need a space that matches how they work",
      "Hotels, schools, and commercial buildings that need interior and facade coordination",
      "Clients who already have a contractor and need drawings, samples, and site checks",
    ],
    typicalWork: [
      "Measured surveys and space plans for houses, apartments, and offices",
      "Joinery design for kitchens, wardrobes, reception desks, and storage",
      "Lighting layouts that work with the electrical drawings",
      "Bathroom and wet-area detailing so waterproofing and fixtures line up",
      "Facade color, cladding, and entrance treatment",
      "Sample boards and site mock-ups before bulk material is ordered",
      "Snagging of paint, alignment, ironmongery, and ceiling work",
    ],
    scope: [
      "Design consultancy and space planning",
      "Interior design for homes and businesses",
      "Exterior design and facade treatment",
      "Material selection and sourcing",
      "Color schemes and finishes",
      "Joinery and built-in furniture drawings",
      "Lighting and ceiling coordination",
      "Site supervision and quality checks",
    ],
    outcomes: [
      "A layout you can build from, not a mood that disappears on site",
      "Approved drawings and sample boards for the contractor",
      "Materials that can be maintained after we leave",
      "A coordinated interior and facade, checked before handover",
    ],
    process: [
      { title: "Brief and survey", detail: "We walk the site, note constraints, and agree how rooms and circulation should work." },
      { title: "Concept and materials", detail: "Layouts, mood, and a shortlist of finishes you can actually source and maintain." },
      { title: "Drawings and samples", detail: "Detailed drawings and sample boards so contractors build what was approved." },
      { title: "Procurement support", detail: "Quantities and specifications are locked so substitutions do not undo the design." },
      { title: "Site supervision", detail: "We check joinery, paint, lighting, and facade work as it goes in, not only at the end." },
    ],
    faqs: [
      {
        question: "Do you design both interiors and the building exterior?",
        answer:
          "Yes. We handle interior layouts and finishes as well as facade treatment so the inside and outside of the building read as one project.",
      },
      {
        question: "Can you work on an existing office or home?",
        answer:
          "Yes. Many jobs are refits. We survey what is already there, keep what still works, and redesign the parts that do not.",
      },
      {
        question: "Do you supervise the contractor on site?",
        answer:
          "Yes. Supervision is part of the service. We check materials and workmanship against the drawings before handover.",
      },
      {
        question: "Will you work with a contractor we already have?",
        answer:
          "Yes. We can produce the design package and visit site to check the work, even if another firm is doing the build.",
      },
      {
        question: "How long does a typical interior project take?",
        answer:
          "A house or office interior usually needs a few weeks for survey, concept, and drawings, then the site period depends on the contractor and the amount of joinery. We give a programme after the first visit.",
      },
      {
        question: "Do you source materials yourselves?",
        answer:
          "We specify and can help source. Some clients buy through us, others buy from their own vendors against our sample boards. Either way, we check what arrives on site.",
      },
    ],
  },
  {
    slug: "civil",
    icon: "building",
    title: "Civil Construction",
    shortTitle: "Civil Construction",
    summary: "Civil works for institutional, commercial, and healthcare buildings, with engineers on site.",
    metaTitle: "Civil Construction Company in Pakistan | Ammarco",
    metaDescription:
      "Civil construction in Pakistan for hospitals, offices, malls, and institutional buildings. Ammarco engineers specify materials and check work as it is built.",
    heroSubtitle: "Civil construction with qualified engineers on the job, from structure through finishing.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070",
    imageAlt: "Civil construction site with structural work in progress",
    intro: [
      "Ammarco takes on civil construction for commercial, institutional, and healthcare buildings. Our own engineers stay on site so materials, plant, and workmanship match the specification.",
      "Quality is checked as the work progresses. That means formwork, concrete, masonry, and finishes are inspected in sequence, not only when the building is nearly done.",
      "We prefer a clear sequence: access, foundations or structural work, envelope, then finishes and services coordination. Rushing finishes while structure is still moving is how snags multiply.",
      "Where the client already has an architect or consultant, we build to those drawings and raise clashes early. Where they need a single team, we can take design coordination as well as the build.",
    ],
    approach: [
      "Materials are specified for the job and inspected as they arrive. Cement, steel, blocks, and waterproofing are not left to whatever the supplier sent that morning.",
      "Safety and housekeeping are part of the programme. A tidy site is easier to inspect and safer for the people working on it.",
    ],
    audience: [
      "Clients building hospitals, schools, or other institutional facilities",
      "Developers of offices, malls, parking, and mixed-use complexes",
      "Organizations that need a contractor with in-house civil engineers",
      "Owners who want stage-wise inspection instead of a single completion check",
    ],
    typicalWork: [
      "Mobilisation, site offices, and temporary works",
      "Foundations, columns, slabs, and structural frames",
      "Masonry, plaster, and external envelope",
      "Parking structures, ramps, and hard landscaping",
      "Waterproofing to roofs, basements, and wet areas",
      "Coordination with electrical, plumbing, HVAC, and interiors",
      "Snagging, as-built notes, and practical completion",
    ],
    scope: [
      "Modern and institutional buildings",
      "Hospitals and healthcare facilities",
      "Parking areas and garages",
      "Shopping malls and retail centers",
      "Event halls and commercial complexes",
      "Structural and finishing works",
      "Project management and site supervision",
      "Quality assurance and compliance checks",
    ],
    outcomes: [
      "A building built to the agreed drawings and specification",
      "Inspection records for the stages that matter",
      "A snag list closed before you occupy the space",
      "Handover documents the next contractor or facility team can use",
    ],
    process: [
      { title: "Scope and programme", detail: "We confirm drawings, quantities, and a realistic build sequence before mobilisation." },
      { title: "Site setup", detail: "Access, plant, and material storage are set so work can proceed safely and in order." },
      { title: "Structure", detail: "Foundations and frame are built and checked before finishes start in earnest." },
      { title: "Envelope and finishes", detail: "Weatherproofing, masonry, and finishes follow the approved details." },
      { title: "Handover", detail: "Snagging, documentation, and a clean handover of the completed works." },
    ],
    faqs: [
      {
        question: "Do you have civil engineers on site?",
        answer:
          "Yes. Civil, and where needed MEP, engineers stay with the job so decisions are made on site instead of being passed from desk to desk.",
      },
      {
        question: "What kinds of buildings do you construct?",
        answer:
          "Hospitals, schools, offices, malls, parking structures, event halls, and other commercial or institutional buildings across Pakistan.",
      },
      {
        question: "How do you control quality during construction?",
        answer:
          "Materials are specified for the job and inspected as they arrive. Work is checked at each stage, not only at practical completion.",
      },
      {
        question: "Can you work as a contractor to an existing consultant?",
        answer:
          "Yes. We build to the consultant's drawings and raise RFIs when something on site does not match the paper.",
      },
      {
        question: "Do you handle permits and local approvals?",
        answer:
          "We support the drawings and site information the approving body needs. The client usually remains the applicant unless we agree otherwise in the contract.",
      },
      {
        question: "How do you handle variations during the build?",
        answer:
          "Changes are written down, priced, and approved before they are built. That keeps the programme and the cost visible.",
      },
    ],
  },
  {
    slug: "electrical",
    icon: "zap",
    title: "Electrical Works",
    shortTitle: "Electrical Works",
    summary: "Electrical design and installation for commercial and residential buildings.",
    metaTitle: "Electrical Works and Installation in Islamabad | Ammarco",
    metaDescription:
      "Electrical design and installation in Islamabad for commercial and residential buildings. Power, lighting, and backup systems using approved materials.",
    heroSubtitle: "Electrical systems planned to the brief, installed with materials from authorized vendors.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070",
    imageAlt: "Electrical power infrastructure and building wiring",
    intro: [
      "We plan and install electrical systems for commercial and residential buildings. The design is agreed first. Installation starts only after loads, routes, and equipment are settled.",
      "Materials come from authorized vendors. That keeps panels, cables, and fittings consistent with the specification and easier to maintain later.",
      "A building's electrical system has to cover more than lights and sockets. Distribution, earthing, containment, emergency lighting, and backup all have to work as one layout.",
      "We coordinate with interiors and HVAC so ceiling voids, shafts, and plant rooms are shared instead of being claimed twice. That is cheaper than opening finished work to move a tray.",
    ],
    approach: [
      "Load studies come before cable sizes. We look at diversity, future expansion, and what must stay on during an outage.",
      "Testing is documented. Insulation, polarity, earth continuity, and panel schedules are part of handover, not an afterthought.",
    ],
    audience: [
      "New buildings that need a complete electrical installation",
      "Offices and homes upgrading lighting, power, or backup systems",
      "Facilities that need inspection, troubleshooting, or energy-efficient upgrades",
      "Projects that also need generators, solar, or networking on the same drawings",
    ],
    typicalWork: [
      "Load calculations and single-line diagrams",
      "Main and sub-main distribution boards",
      "Cable trays, conduits, and concealed wiring",
      "Lighting, small power, and outdoor circuits",
      "Earthing and lightning protection where specified",
      "Emergency lighting and essential circuits",
      "Coordination with generators, UPS, and solar inverters",
      "Testing, labelling, and as-built panel schedules",
    ],
    scope: [
      "Complete electrical installations",
      "Power distribution systems",
      "Lighting design and installation",
      "Backup generators and emergency power",
      "Building automation where it is useful",
      "Energy-efficient fittings and controls",
      "Electrical safety inspections",
      "Maintenance and troubleshooting",
    ],
    outcomes: [
      "An installation that matches the approved drawings",
      "Labelled boards and circuits a technician can follow",
      "Test results recorded before energising",
      "A system that can take later loads without a full rip-out",
    ],
    process: [
      { title: "Load study", detail: "We map demand, circuits, and any backup the building actually needs." },
      { title: "Design approval", detail: "Drawings and a materials list are agreed before any cable is pulled." },
      { title: "Containment", detail: "Trays, conduits, and routes are fixed while walls and ceilings are still open." },
      { title: "Installation", detail: "Distribution, lighting, and small power are installed to the approved design." },
      { title: "Testing", detail: "Circuits are tested, labelled, and documented before the system is handed over." },
    ],
    faqs: [
      {
        question: "Do you design the electrical system as well as install it?",
        answer:
          "Yes. We size distribution, lighting, and backup to the building, then install only after the design is agreed.",
      },
      {
        question: "Where do you source electrical materials?",
        answer:
          "From authorized vendors. We do not substitute unspecified brands once the specification is locked.",
      },
      {
        question: "Can you inspect an existing installation?",
        answer:
          "Yes. We inspect safety, loading, and workmanship, then recommend repairs or upgrades where they are needed.",
      },
      {
        question: "Do you coordinate with solar or generator contractors?",
        answer:
          "Yes. Changeover, earthing, and inverter connections are part of the same electrical picture. We can do that work ourselves or coordinate with your other vendor.",
      },
      {
        question: "Will the boards be labelled?",
        answer:
          "Yes. Circuits are labelled at the board and, where useful, at the outlet. Future maintenance should not depend on one electrician's memory.",
      },
      {
        question: "Can you work in an occupied building?",
        answer:
          "Yes, with planned isolations. We agree which circuits can go down and when, so the rest of the building can keep working.",
      },
    ],
  },
  {
    slug: "plumbing",
    icon: "droplets",
    title: "Plumbing Services",
    shortTitle: "Plumbing Services",
    summary: "Sewer, drainage, water supply, septic tanks, and fittings, inspected before handover.",
    metaTitle: "Plumbing, Drainage and Water Supply | Ammarco Pakistan",
    metaDescription:
      "Plumbing services in Pakistan for sewer, drainage, water supply, and septic systems. Pipework, manholes, and fittings inspected before handover.",
    heroSubtitle: "Water supply, drainage, and septic work that is inspected before you take it over.",
    image: "/plumbing.png",
    imageAlt: "Plumbing and drainage pipework installation",
    intro: [
      "Ammarco handles sewer and drainage pipework, water supply, septic tanks, manholes, and related fittings. The aim is a system that runs quietly and can be maintained without opening up finished floors later.",
      "Every installation is inspected before handover. We check falls, joints, and fixtures while they are still accessible.",
      "Plumbing problems after occupation are expensive because they sit behind tiles and screed. We pressure-test supply and water-test drainage in sections, not only at the end.",
      "We also look at how the building will be used. A hospital, a restaurant, and a house need different pipe sizes, access points, and hot-water arrangements.",
    ],
    approach: [
      "Invert levels and falls are set on paper before trenches are opened. Guessing on site is how you get standing water in a line.",
      "Fixtures are specified with the interior designer so traps, wastes, and stopcocks sit where they can be reached later.",
    ],
    audience: [
      "New houses and commercial buildings that need full plumbing",
      "Sites that need septic tanks, manholes, or drainage upgrades",
      "Facility teams dealing with leaks, poor pressure, or blocked lines",
      "Projects that need water supply, drainage, and firefighting tanks coordinated",
    ],
    typicalWork: [
      "Cold and hot water distribution",
      "Soil, waste, and vent pipework",
      "Roof and surface drainage",
      "Septic tanks, soakaways, and treatment connections",
      "Manholes, inspection chambers, and clean-outs",
      "Pumps, pressure sets, and overhead tanks",
      "Sanitary fixtures and valves",
      "Pressure tests and handover inspection",
    ],
    scope: [
      "Sewer and drainage systems",
      "Pipe fittings and installations",
      "Septic tank setup and maintenance",
      "Manhole construction",
      "Water supply systems",
      "Fixtures and fittings",
      "Operational inspection",
      "Quality checks before handover",
    ],
    outcomes: [
      "Supply and drainage that hold pressure and fall correctly",
      "Access points so blockages can be cleared without breaking floors",
      "Fixtures installed to the interior layout",
      "A written record of tests before you occupy",
    ],
    process: [
      { title: "Survey", detail: "We map existing lines, invert levels, and where new runs can go without clash." },
      { title: "Design", detail: "Pipe sizes, falls, and tank locations are set to the building and local practice." },
      { title: "First fix", detail: "Concealed pipework is installed and tested before screed or tiles go down." },
      { title: "Second fix", detail: "Fixtures, valves, and visible fittings are installed to the interior drawings." },
      { title: "Inspect", detail: "We pressure-test, check fixtures, and only then sign the work off." },
    ],
    faqs: [
      {
        question: "Do you install septic tanks as well as internal plumbing?",
        answer:
          "Yes. We install septic tanks, manholes, sewer and drainage lines, and the fixtures inside the building.",
      },
      {
        question: "Will the system be tested before handover?",
        answer:
          "Yes. Supply and drainage are inspected and tested while they are still accessible, then verified again at handover.",
      },
      {
        question: "Can you repair existing plumbing?",
        answer:
          "Yes. We diagnose leaks, blockages, and pressure problems, then repair or replace the affected runs.",
      },
      {
        question: "Do you work with an interior designer on bathroom layouts?",
        answer:
          "Yes. Waste positions, valve access, and fixture models should be agreed before tiling. We coordinate that drawing.",
      },
      {
        question: "Can you upgrade water pressure in an existing building?",
        answer:
          "Often yes. We check the incoming supply, tank levels, pipe sizes, and whether a pump set is the right answer rather than a bigger pump on a blocked line.",
      },
      {
        question: "Do you handle rainwater and roof drainage?",
        answer:
          "Yes. Roof outlets, downpipes, and surface drainage are part of the same plumbing package when the building needs them.",
      },
    ],
  },
  {
    slug: "hvac",
    icon: "wind",
    title: "HVAC Systems",
    shortTitle: "HVAC Systems",
    summary: "Heating, ventilation, and air conditioning sized for the building you have.",
    metaTitle: "HVAC Design and Installation in Pakistan | Ammarco",
    metaDescription:
      "HVAC design and installation in Pakistan for offices, homes, and commercial buildings. Comfortable spaces without wasting energy, with maintenance support.",
    heroSubtitle: "Heating, ventilation, and air conditioning specified for the building, not a one-size package.",
    image: "/HVAC.webp",
    imageAlt: "HVAC air conditioning and ventilation equipment",
    intro: [
      "We design and install HVAC systems that keep rooms comfortable without running oversized plant all day. The spec follows the building: orientation, occupancy, and how spaces are used.",
      "After installation we can set a maintenance plan. Filters, controls, and seasonal checks keep the system efficient after handover.",
      "Pakistan's climate punishes guesswork. An oversized split in a small room short-cycles, noise goes up, and bills follow. A central system that ignores solar gain on the west elevation will never feel even.",
      "Ventilation is not optional in denser buildings. Fresh air, extract from wet areas and kitchens, and where needed energy recovery, are designed with the cooling load, not added later as a fan in a window.",
    ],
    approach: [
      "We calculate loads from drawings or a measured survey. Equipment is selected after that, including noise limits and the space available for outdoor units and ducts.",
      "Commissioning includes airflow checks and control settings. A system that is installed but never balanced is only half finished.",
    ],
    audience: [
      "Offices and retail floors that need reliable cooling and fresh air",
      "Homes and apartments that want a quiet, efficient system",
      "Healthcare and institutional buildings with strict air quality needs",
      "Owners replacing old plant who want to keep usable ductwork",
    ],
    typicalWork: [
      "Cooling and heating load calculations",
      "VRF, split, and packaged systems",
      "Ducted air distribution and diffusers",
      "Fresh air, extract, and kitchen ventilation",
      "Energy recovery ventilators where they pay back",
      "Thermostats, zoning, and simple building controls",
      "Outdoor unit placement, vibration, and condensate",
      "Seasonal maintenance and filter programs",
    ],
    scope: [
      "HVAC system design and planning",
      "Central air conditioning installation",
      "Ventilation and air quality systems",
      "Energy recovery ventilators",
      "Climate control automation",
      "Preventive maintenance programs",
      "System optimization and upgrades",
      "Technical support after handover",
    ],
    outcomes: [
      "Plant sized to the rooms you actually occupy",
      "Airflow that reaches the space instead of dumping in a corridor",
      "Controls the user can understand",
      "A maintenance plan so filters and coils do not get ignored",
    ],
    process: [
      { title: "Load calculation", detail: "We size cooling and ventilation to rooms, occupancy, and solar gain." },
      { title: "Equipment selection", detail: "Plant and ductwork are chosen for the load, noise limits, and available space." },
      { title: "Coordination", detail: "Duct routes are checked against structure, lights, and other services." },
      { title: "Install and commission", detail: "Units, ducting, and controls are installed, balanced, and commissioned." },
      { title: "Handover", detail: "You get operating notes and, if you want it, a maintenance schedule." },
    ],
    faqs: [
      {
        question: "Do you size HVAC to the actual building?",
        answer:
          "Yes. We calculate loads from the space, not from a catalog package. That avoids noisy, oversized systems that waste power.",
      },
      {
        question: "Can you upgrade an existing air conditioning system?",
        answer:
          "Yes. We survey what is installed, fix what still works, and replace plant or controls that no longer match the load.",
      },
      {
        question: "Do you offer maintenance after installation?",
        answer:
          "Yes. Preventive maintenance keeps filters, coils, and controls in good order so comfort and bills stay predictable.",
      },
      {
        question: "VRF or split units: how do you choose?",
        answer:
          "It depends on the number of rooms, the distance to outdoor plant, and how independently you need to control spaces. We set that out in the proposal instead of defaulting to one product.",
      },
      {
        question: "Will the system be quiet enough for offices or bedrooms?",
        answer:
          "Noise is part of the selection. Indoor unit type, duct velocity, and outdoor unit location are all chosen with that in mind.",
      },
      {
        question: "Do you handle kitchen and toilet extract as well as comfort cooling?",
        answer:
          "Yes. Extract, makeup air, and comfort cooling have to be designed together or one will undo the other.",
      },
    ],
  },
  {
    slug: "firefighting",
    icon: "flame",
    title: "Firefighting and Panic Alarms",
    shortTitle: "Firefighting & Alarms",
    summary: "Fire detection, suppression, sprinklers, and panic alarms, tested before handover.",
    metaTitle: "Firefighting and Alarm Systems in Pakistan | Ammarco",
    metaDescription:
      "Fire detection, suppression, sprinklers, and panic alarms for buildings in Pakistan. Ammarco installs and tests systems so they meet required safety standards.",
    heroSubtitle: "Detection, suppression, and emergency alarms installed and tested to the required standard.",
    image: "/Fire-Alarms-Blare.jpg",
    imageAlt: "Fire alarm and firefighting safety system",
    intro: [
      "We install fire detection, suppression, sprinklers, and panic alarms so a building can meet the safety standard that applies to it. The layout follows exits, occupancy, and the type of space.",
      "Systems are tested before handover. Detectors, sounders, and suppression equipment are checked so they work as a set, not as separate gadgets.",
      "A fire system is only useful if people hear it, if the panel tells you where the event is, and if suppression actually discharges where it should. We design cause-and-effect, not just a count of devices.",
      "Where the building already has a system, we audit coverage against how the space is used now. A shop converted into an office often has the wrong detector types and dead sounder zones.",
    ],
    approach: [
      "We start with occupancy, travel distances, and the standard the client or authority has asked for. Device locations come after that.",
      "Labelling, zone charts, and a short staff briefing are part of handover. A system nobody understands will be silenced or ignored.",
    ],
    audience: [
      "Commercial and institutional buildings that must meet fire codes",
      "Offices, malls, and halls that need detection and public alarms",
      "Sites that need panic alarms as well as fire systems",
      "Facilities that need inspection, testing, and a maintenance routine",
    ],
    typicalWork: [
      "Addressable and conventional detection",
      "Sounders, beacons, and public alarm circuits",
      "Manual call points and panic buttons",
      "Sprinkler and hose reel layouts",
      "Fire pumps, tanks, and valve sets",
      "Gas or other suppression in plant and server rooms",
      "Interface with access control so doors release on alarm",
      "Periodic testing and certificate support",
    ],
    scope: [
      "Fire detection systems",
      "Fire suppression systems",
      "Panic alarm installations",
      "Emergency response systems",
      "Sprinkler systems",
      "Fire extinguisher installation",
      "Safety compliance audits",
      "Regular maintenance and testing",
    ],
    outcomes: [
      "Detection and alarm coverage that matches how the building is used",
      "Suppression where the risk needs it",
      "A tested cause-and-effect before occupation",
      "Zone charts and a simple briefing for the people on site",
    ],
    process: [
      { title: "Risk and code review", detail: "We map occupancy, exits, and the standard the building has to meet." },
      { title: "System design", detail: "Detection zones, suppression, and alarm coverage are drawn to that brief." },
      { title: "Install", detail: "Devices, piping, and panels are installed with clear labelling for later service." },
      { title: "Cause-and-effect test", detail: "Alarms, releases, and suppression signals are proven together." },
      { title: "Test and train", detail: "We test the system and show the client how to respond if it sounds." },
    ],
    faqs: [
      {
        question: "Do you install both detection and suppression?",
        answer:
          "Yes. Detection, alarms, sprinklers or other suppression, and panic alarms can be specified as one coordinated system.",
      },
      {
        question: "Will the system be tested before we occupy the building?",
        answer:
          "Yes. We test devices and cause-and-effect before handover, then can set a routine for later maintenance tests.",
      },
      {
        question: "Can you audit an existing fire system?",
        answer:
          "Yes. We check coverage, device condition, and whether the installation still matches how the building is used.",
      },
      {
        question: "Do panic alarms sit on the same panel as fire?",
        answer:
          "They can be linked or kept distinct, depending on how you want staff to respond. We agree that before cabling starts.",
      },
      {
        question: "Will doors unlock when the fire alarm sounds?",
        answer:
          "If access control is in the building, we can interface it so designated exits release on alarm. That has to be designed, not assumed.",
      },
      {
        question: "Do you supply extinguishers and signage as well?",
        answer:
          "Yes. Portable extinguishers, hose reels where specified, and basic fire signage can be included with the installation.",
      },
    ],
  },
  {
    slug: "security",
    icon: "shield",
    title: "CCTV and Security Systems",
    shortTitle: "CCTV & Security",
    summary: "CCTV, alarms, access control, and monitoring for homes and commercial premises.",
    metaTitle: "CCTV and Security Systems in Islamabad | Ammarco",
    metaDescription:
      "CCTV, IP cameras, alarms, and access control in Islamabad. Ammarco installs security systems that can connect to existing monitoring.",
    heroSubtitle: "Cameras, alarms, and access control so you can see and control what happens on site.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070",
    imageAlt: "CCTV security camera installation",
    intro: [
      "Ammarco installs CCTV, alarms, and access control for homes, offices, and larger sites. Camera positions follow actual entry points and blind spots, not a generic grid.",
      "If you already have a monitoring room or a service provider, the new system can be tied in. Backup power can be added where cameras must stay up during an outage.",
      "A useful camera is one that identifies a person or a vehicle at the distance you care about, at night as well as in daylight. Pixel counts on a brochure do not guarantee that.",
      "Recording retention, who can view live footage, and how doors are controlled are part of the design. We write those rules down so the installer and the client mean the same thing.",
    ],
    approach: [
      "We walk the site at the times that matter, including dusk if night coverage is required. Lighting and foliage change what a camera can actually see.",
      "Cabling is dressed and labelled. A security system that cannot be serviced will fail quietly.",
    ],
    audience: [
      "Offices, banks, and retail sites that need cameras and access control",
      "Homes and compounds that want perimeter and entry coverage",
      "Facilities that already have monitoring and need better cameras or alarms",
      "Sites that need cameras, alarms, and door control as one system",
    ],
    typicalWork: [
      "IP camera layouts for entries, yards, and interiors",
      "NVRs, storage, and remote viewing",
      "Door controllers, readers, and gate barriers",
      "Intruder alarms and perimeter detection",
      "Video intercoms",
      "Integration with existing monitoring rooms",
      "UPS for cameras and recorders",
      "User training and password handover",
    ],
    scope: [
      "CCTV camera installation",
      "IP surveillance systems",
      "Access control solutions",
      "Security alarm systems",
      "Intrusion detection",
      "Perimeter security",
      "Monitoring integration",
      "Security system maintenance",
    ],
    outcomes: [
      "Camera views that cover the places people actually enter",
      "Recording you can search when something happens",
      "Access rules that match staff and visitor movement",
      "A short guide so the system is used after we leave",
    ],
    process: [
      { title: "Site walk", detail: "We note entries, storage, and places people actually move through." },
      { title: "System design", detail: "Camera types, recording, and access points are matched to that layout." },
      { title: "Install", detail: "Cabling, cameras, and controllers are installed with tidy containment." },
      { title: "Configure", detail: "Users, retention, and notifications are set to the rules you approved." },
      { title: "Handover", detail: "You get a live view, recording checks, and simple operating notes." },
    ],
    faqs: [
      {
        question: "Can the CCTV connect to a system we already use?",
        answer:
          "In most cases yes. We check compatibility first, then integrate cameras and alarms with your existing monitoring if it is suitable.",
      },
      {
        question: "Do you install access control as well as cameras?",
        answer:
          "Yes. Doors, gates, and staff access can be specified with the camera layout so security is one system.",
      },
      {
        question: "What happens if the power goes out?",
        answer:
          "We can add UPS or generator backup for cameras and recorders that must keep running during an outage.",
      },
      {
        question: "Can we view cameras on a phone?",
        answer:
          "Yes, where the network allows it. We set up remote viewing with the access you want, not an open link anyone can find.",
      },
      {
        question: "How long is footage stored?",
        answer:
          "That depends on camera count, resolution, and disk size. We size storage to the retention you need and tell you honestly when a lower frame rate is required to hit that number of days.",
      },
      {
        question: "Do you replace older analogue cameras?",
        answer:
          "Yes. Sometimes existing cable can be reused. Sometimes it is cleaner to recable. We survey before we quote a full rip-out.",
      },
    ],
  },
  {
    slug: "solar",
    icon: "sun",
    title: "Solar Panel Installation",
    shortTitle: "Solar Panels",
    summary: "Grid-tied and off-grid solar systems specified for the load and the site.",
    metaTitle: "Solar Panel Installation in Pakistan | Ammarco",
    metaDescription:
      "Solar panel installation in Pakistan for homes and businesses. Grid-tied or off-grid systems, batteries, and support with available incentives.",
    heroSubtitle: "Solar systems sized for your load and roof, so bills fall without guesswork.",
    image: "https://images.unsplash.com/photo-1498354178607-a79df2916198?q=80&w=2070",
    imageAlt: "Solar panel array installed on a building",
    intro: [
      "We design and install solar for homes and commercial sites. The array is sized to the actual load and the roof or ground space you have, whether the system is grid-tied or off-grid.",
      "Batteries and backup can be added where you need power after sunset or during outages. We can also help with paperwork for incentives that apply to the project.",
      "A solar job that starts with a panel count is the wrong way round. Bills, daytime load, shading, roof structure, and how you want to behave during load-shedding all change the design.",
      "We also look at the electrical board the inverter will sit on. Earthing, surge protection, and changeover with a generator have to be part of the same drawing.",
    ],
    approach: [
      "We review at least a few months of electricity use when bills exist. For new buildings we use the load list instead of a round number.",
      "Mounting is checked against the roof. Waterproofing and structure matter as much as the panel brand.",
    ],
    audience: [
      "Homes looking to cut electricity bills",
      "Offices and factories with daytime loads that suit solar",
      "Sites that need off-grid or hybrid power with batteries",
      "Clients who already have a generator and want solar to share the load",
    ],
    typicalWork: [
      "Load assessment from bills or equipment lists",
      "Roof or ground mount layout and shading check",
      "Grid-tied, hybrid, and off-grid inverters",
      "Battery storage and backup circuits",
      "DC and AC isolation, earthing, and surge protection",
      "Net metering paperwork where a scheme applies",
      "Monitoring apps and yield checks",
      "Cleaning and inspection after the first season",
    ],
    scope: [
      "Solar panel installation",
      "Grid-tied systems",
      "Off-grid solutions",
      "Battery backup and storage",
      "Load assessment and system sizing",
      "Help with available incentives",
      "Monitoring after installation",
      "Maintenance and performance checks",
    ],
    outcomes: [
      "An array sized to your load and roof, not a catalog kit",
      "Safe electrical connection to the existing board",
      "Monitoring so you can see what the system is producing",
      "Clear notes on what stays on during an outage if batteries are included",
    ],
    process: [
      { title: "Load and site check", detail: "We review bills, roof space, shading, and how much backup you want." },
      { title: "Proposal", detail: "Panel count, inverter, and optional batteries are set out in plain numbers." },
      { title: "Structure and electrics", detail: "Mounting, cable routes, and board changes are agreed before install day." },
      { title: "Install", detail: "Mounting, cabling, and grid connection are completed to the agreed design." },
      { title: "Commission", detail: "The system is tested, monitoring is set up, and you are shown how to read it." },
    ],
    faqs: [
      {
        question: "Do you install grid-tied and off-grid solar?",
        answer:
          "Yes. Grid-tied, off-grid, and hybrid systems with batteries are all within scope, sized to the load and the site.",
      },
      {
        question: "How do you decide the system size?",
        answer:
          "From your electricity use, roof or ground area, and whether you want backup after dark. We do not sell a fixed kit.",
      },
      {
        question: "Can you help with government incentives?",
        answer:
          "Where a scheme applies to the project, we can help with the paperwork. Availability depends on current rules.",
      },
      {
        question: "Will solar work with my generator?",
        answer:
          "Usually yes, if changeover and inverter settings are designed together. Dumping solar into a generator without that design is how equipment gets damaged.",
      },
      {
        question: "Do I need batteries?",
        answer:
          "Not always. If your goal is to cut daytime bills on a stable grid, a grid-tied system may be enough. If you need lights and fans during outages, batteries or a hybrid setup are the honest answer.",
      },
      {
        question: "What maintenance does a solar system need?",
        answer:
          "Panel cleaning, a check of isolators and connections, and a look at monitoring for strings that have dropped. We can include that after handover.",
      },
    ],
  },
  {
    slug: "generators",
    icon: "power",
    title: "Generators and UPS Systems",
    shortTitle: "Generators & UPS",
    summary: "Backup power sized for your load, with testing before handover.",
    metaTitle: "Generator and UPS Installation in Pakistan | Ammarco",
    metaDescription:
      "Generator and UPS installation in Pakistan for homes and businesses. Backup power sized to your load, with automatic transfer and handover testing.",
    heroSubtitle: "Backup power that starts when the grid drops, sized for the load you actually run.",
    image: "/differences-between-generators-and-ups-systems.webp",
    imageAlt: "Backup generator and UPS power systems",
    intro: [
      "Ammarco supplies and installs generators and UPS systems so work does not stop when the grid does. The set is sized to the load, not to a round number that looks impressive on paper.",
      "Automatic transfer switches and handover testing are part of the job. You should know the backup will start before you need it in earnest.",
      "Motor starting current, medical or IT loads, and what can wait during an outage all change the kVA. Buying a larger set than you need wastes fuel. Buying a smaller one trips the breaker when the lift or the AHU starts.",
      "Placement matters as much as size. Exhaust, noise, fuel, and flooding risk have to be solved on the drawings, not after the crane has left.",
    ],
    approach: [
      "We build a load list with you: what must stay on, what can wait, and what has a heavy start. The generator and UPS are selected from that list.",
      "We simulate an outage before handover. Transfer, start-up, and restoration are proven on site.",
    ],
    audience: [
      "Offices, banks, and clinics that cannot afford downtime",
      "Homes that need quiet, reliable backup",
      "Sites combining generators with UPS for clean switchover",
      "Facilities adding solar and needing generator interlock",
    ],
    typicalWork: [
      "Load lists and starting-current checks",
      "Diesel or gas generator supply and install",
      "Foundations, acoustic treatment, and exhaust",
      "Fuel storage and bunding where required",
      "Automatic transfer switches",
      "UPS for IT, controls, and medical loads",
      "Earthing and changeover with solar inverters",
      "Outage simulation and operator briefing",
    ],
    scope: [
      "Generator installation",
      "UPS systems",
      "Power backup solutions",
      "Automatic transfer switches",
      "Load management",
      "Emergency power systems",
      "Maintenance services",
      "Monitoring where it is useful",
    ],
    outcomes: [
      "A set that starts the loads you listed, including motors",
      "Automatic changeover instead of a manual switch in the dark",
      "UPS cover for equipment that cannot tolerate a gap",
      "A test you watched, not a promise in a brochure",
    ],
    process: [
      { title: "Load list", detail: "We list what must stay on, what can wait, and the starting current of large kit." },
      { title: "Equipment choice", detail: "Generator, UPS, and transfer gear are sized to that list and the space available." },
      { title: "Civil and exhaust", detail: "Foundations, noise, exhaust, and fuel are fixed before the set arrives." },
      { title: "Install", detail: "Electrical changeover is completed to spec and labelled." },
      { title: "Test", detail: "We simulate an outage, confirm start-up, and hand over operating notes." },
    ],
    faqs: [
      {
        question: "How do you size a generator?",
        answer:
          "From the loads that must stay on, including motor starting current. Oversizing wastes fuel. Undersizing trips the set.",
      },
      {
        question: "Do I need a UPS as well as a generator?",
        answer:
          "If computers or controls cannot tolerate a few seconds of darkness, a UPS bridges the gap until the generator is up.",
      },
      {
        question: "Do you test the system before leaving site?",
        answer:
          "Yes. We run a simulated outage so transfer, start-up, and restoration are proven before handover.",
      },
      {
        question: "Can you install a generator on a roof or in a basement?",
        answer:
          "Sometimes. Weight, exhaust, fresh air, and flooding all have to work. We survey before we agree a location.",
      },
      {
        question: "Do you service generators after installation?",
        answer:
          "Yes. Oil, filters, batteries, and a monthly start are what keep a set ready. We can put that on a schedule.",
      },
      {
        question: "Will this work with solar?",
        answer:
          "Yes, if the inverter and generator are interlocked correctly. We design that connection rather than leaving two vendors to guess.",
      },
    ],
  },
  {
    slug: "networking",
    icon: "wifi",
    title: "Data and Voice Networking",
    shortTitle: "Data Networking",
    summary: "Structured cabling, racks, cabinets, and communication rooms that stay easy to maintain.",
    metaTitle: "Data and Voice Networking in Islamabad | Ammarco",
    metaDescription:
      "Data and voice networking in Islamabad. Structured cabling, racks, cabinets, switchgear, and VoIP rooms designed so the network is tidy enough to maintain.",
    heroSubtitle: "Networks, racks, and communication rooms laid out so the building stays connected and serviceable.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070",
    imageAlt: "Data networking racks and structured cabling",
    intro: [
      "We set up data and voice networks, communication racks, data cabinets, switchgear, and control panels. Cabling is labelled and dressed so the next person can work on it without guesswork.",
      "The same team can coordinate with electrical and security trades so trays and rooms are shared cleanly instead of fighting for space.",
      "A network that looks finished from the desk can still be a mess in the ceiling. We treat pathways, patching, and documentation as part of the install, because that is what keeps Wi-Fi and phones working two years later.",
      "For new offices we count outlets from the furniture plan, not from a round number per room. For refits we survey what can be reused and what should be pulled out.",
    ],
    approach: [
      "Containment is planned with electrical and HVAC. Data cable next to an unshielded power feed is how you get mysterious faults.",
      "Every outlet, patch panel, and cabinet gets a label that matches a simple drawing. That drawing is part of handover.",
    ],
    audience: [
      "New offices and campuses that need structured cabling from day one",
      "Buildings adding VoIP, Wi-Fi, or a server room",
      "Facilities that have outgrown messy, undocumented cabling",
      "Projects that need CCTV, access control, and data on shared pathways",
    ],
    typicalWork: [
      "Cat6 and fibre backbone cabling",
      "Floor outlets, patch panels, and faceplates",
      "Racks, cabinets, and cable management",
      "Server and communication rooms",
      "Wi-Fi access point cabling and placement support",
      "VoIP handset cabling and patching",
      "Switchgear and control panel dressing",
      "Testing, certification, and as-built maps",
    ],
    scope: [
      "Network infrastructure setup",
      "Data room and cabinet solutions",
      "Communication rack installation",
      "Server rooms and data cabinets",
      "Cable management systems",
      "Switchgear and control panels",
      "VoIP systems",
      "Network maintenance and support",
    ],
    outcomes: [
      "Cabling that tests clean and is labelled at both ends",
      "Racks with airflow and space for the next switch",
      "A map of outlets the IT team can keep up to date",
      "Pathways that do not have to be ripped out for the next floor change",
    ],
    process: [
      { title: "Requirements", detail: "We count outlets, Wi-Fi zones, and which rooms need racks or cabinets." },
      { title: "Pathways", detail: "Trays, risers, and containment are planned with electrical and HVAC in mind." },
      { title: "Install", detail: "Cabling is terminated, labelled, and tested. Racks are dressed for airflow." },
      { title: "Active kit", detail: "Where we supply switching or VoIP, it is patched to the agreed plan." },
      { title: "Documentation", detail: "You get a simple map of outlets and cabinets so future changes are safer." },
    ],
    faqs: [
      {
        question: "Do you install voice as well as data cabling?",
        answer:
          "Yes. Data, voice, VoIP, racks, and communication rooms can be delivered as one package.",
      },
      {
        question: "Will the cabling be labelled?",
        answer:
          "Yes. Outlets, patch panels, and cabinets are labelled so maintenance does not depend on one person remembering the layout.",
      },
      {
        question: "Can you tidy an existing comms room?",
        answer:
          "Yes. We can recable, recabinet, and document a room that has grown messy over time, usually with planned downtime.",
      },
      {
        question: "Do you supply switches and Wi-Fi access points?",
        answer:
          "We can. Some clients only want the structured cabling and bring their own IT kit. Others want the whole stack. We quote both clearly.",
      },
      {
        question: "Can CCTV share the same network cabling?",
        answer:
          "Cameras can run on the data network if VLANs and power are designed for it. Dedicated runs are sometimes cleaner. We choose that on the survey, not as a default.",
      },
      {
        question: "Do you certify the cable?",
        answer:
          "Yes. Copper and fibre are tested. Results are part of handover so you are not guessing whether a link will take the speed you need.",
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);

export const getRelatedServices = (slug: string, count = 3) => {
  const index = services.findIndex((service) => service.slug === slug);
  if (index === -1) {
    return services.slice(0, count);
  }

  return Array.from({ length: count }, (_, offset) => services[(index + offset + 1) % services.length]);
};
