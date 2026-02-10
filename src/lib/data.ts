/**
 * "Backend-friendly" data layer.
 *
 * 80/20 note:
 * Keeping content in a typed module mirrors what you’d do with a DB/API later.
 * It also makes it easy to fetch via API routes and TanStack Query.
 */

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Industries", href: "#sectors" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

/** Hero carousel: Now using local illustration (cad-work.svg) */
export const heroCarouselImages = [
  { id: "1514432324607", alt: "Mocha coffee – warmth and focus" },
  { id: "1495474472287", alt: "Coffee and workspace" },
  { id: "1581091226825", alt: "Industrial engineering" },
  { id: "1581092160562", alt: "Mining and resources sector" },
  { id: "1504384308090", alt: "CAD and technical delivery" },
  { id: "1545569341", alt: "Perth and Western Australia" },
] as const;

/** Portfolio card images: Now using local SVG illustrations */
export const portfolioImageIds = [
  "1581092160562",
  "1581091226825",
  "1504384308090",
  "1558611842",
] as const;

/** Service card images: Now using local SVG illustrations */
export const serviceImageIds = [
  "1581091226825",
  "1504384308090",
  "1581092160562",
  "1558611842",
  "1495474472287",
  "1514432324607",
] as const;

/** Founder: Now using local illustration (architect-desk.svg) */
export const founderImageId: string | null = "1560250097-0b935284c1";

export const brand = {
  name: "MochaTech Pty Ltd",
  location: "Perth, WA",
  palette: {
    primary: "#6F4E37",
    secondary: "#D2B48C",
    tertiary: "#F5F5DC",
    accent: "#D2691E",
  },
};

export type TeamMember = {
  id: string;
  name: string;
  title: string;
  experience: string;
  description: string;
  image: string;
  skills?: string[];
};

export const teamMembers: TeamMember[] = [
  {
    id: "anjan",
    name: "Anjan Shrestha",
    title: "Electrical Engineer",
    experience: "5+ years",
    description: "Electrical Engineer with 5+ years delivering complex infrastructure projects across Western Australia's mining and resources sector. Currently at WSP Australia, specializing in sustainable capital projects and electrical design.",
    image: "/team/founder.jpeg",
    skills: ["Electrical Design", "Client Interface", "Power CAD", "AutoCAD", "ETAP"],
  },
  {
    id: "pramod",
    name: "Pramod Sharma",
    title: "Electrical Engineer",
    experience: "5+ years",
    description: "Electrical Engineer with 5+ years of experience in electrical engineering and project delivery across diverse sectors in Nepal. Specializes in electrical design, power systems, and compliance with international standards.",
    image: "/team/pramod_sharma.jpg",
    skills: ["Electrical Design", "Power Systems", "AutoCAD", "Project Coordination"],
  },
  {
    id: "ashwin",
    name: "Ashwin Marahatha",
    title: "CAD Drafting & Electrical Engineering Specialist",
    experience: "5+ years",
    description: "Electrical engineering specialist with 5+ years of field experience and 3+ years of dedicated AutoCAD drafting expertise. Delivers precise technical documentation and electrical design solutions for complex projects.",
    image: "/team/ashwin_marahatha.png",
    skills: ["AutoCAD", "Electrical Design", "Sustainable Project Design"],
  },
  {
    id: "bibek",
    name: "Bibek Shrestha",
    title: "CAD Drafting Specialist",
    experience: "2 years",
    description: "CAD drafting specialist with 2 years of experience delivering precise AutoCAD documentation for electrical and mechanical projects.",
    image: "/team/bibek_shrestha.jpg",
    skills: ["AutoCAD", "Technical Drawing", "2D/3D Drafting"],
  },
  {
    id: "sandesh",
    name: "Sandesh Shrestha",
    title: "CAD Technician",
    experience: "1.5 years",
    description: "CAD technician with 1.5 years of experience providing efficient AutoCAD drafting support across engineering disciplines.",
    image: "/team/sandesh_shrestha.jpeg",
    skills: ["AutoCAD", "Drafting", "Design Coordination"],
  },
  {
    id: "saunak",
    name: "Saunak Shrestha",
    title: "Software Developer",
    experience: "2+ years",
    description: "Backend Developer with 2+ years of experience in Django, Python, REST APIs, and delivering reliable web solutions and technical support.",
    image: "/team/saunak_shrestha.png",
    skills: ["Software Engineer", "IT Support", "Website Development"],
  },
];

export const founderProfile = {
  name: "Anjan Shrestha",
  contact: {
    location: "Perth, WA.",
    phone: "+61 0424 055 711 (Mobile)",
    email: "projects@mochatech.com.au",
    linkedin: "www.linkedin.com/in/anjanshrestha57",
    blog:
      "postgradaustralia.com.au/institutions/curtin-university/student-stories/anjan-shrestha",
  },
  topSkills: [
    "Lighting & Rendering",
    "Lighting design & calculation",
    "Battery Design",
  ],
  languages: ["English (Professional Working)."],
  certifications: ["RTSA challenge."],
  honorsAwards: [
    "Master's Degree High achievement Award",
    "Bachelor's Degree with Distinction",
    "School Level - District Topper among Male Students (2010/11)",
    "Master's Degree with Distinction",
  ],
  summary:
    "I’m an Electrical Engineer with a strong background in delivering complex infrastructure projects across the mining and resources sector in Western Australia. Currently at WSP Australia, I support sustainable capital projects, bringing a blend of technical expertise and practical problem-solving to every phase of project delivery. Previously at Fluor Corporation, I played a key role in the BHP Nelson Point PDP2 Car Dumper Project, contributing across both the Definition and Execution phases. My work spanned scope development, procurement coordination, electrical design, vendor management, and cross-disciplinary collaboration—ensuring systems were delivered safely, efficiently, and on budget. I’m skilled in tools like Power CAD, AutoCAD, ETAP, MicroStation, Navisworks and other key design platforms, with a strong focus on compliance, system integrity, and operational performance. I'm passionate about building smarter, more sustainable systems that drive long-term value for clients and communities.",
  experience: [
    {
      company: "WSP in Australia",
      title: "Electrical Engineer",
      dates: "September 2025 - Present (5 months)",
      location: "Perth, WA.",
      team: "SusCap - Operations WA.",
      bullets: [
        "Supporting sustainable capital projects across Western Australia.",
      ],
    },
    {
      company: "Fluor Corporation",
      title: "Electrical Project Engineer",
      dates: "January 2025 - September 2025 (9 months)",
      location: "Perth, WA.",
      highlights: ["BHP Nelson Point PDP2 Car Dumper Project"],
      bullets: [
        "Develop comprehensive Scopes of Work.",
        "Support change management.",
      ],
    },
    {
      company: "Fluor Corporation",
      title: "Electrical Engineer",
      dates: "August 2024 - January 2025 (6 months)",
      location: "Perth, WA.",
      bullets: [
        "Ensured safety.",
        "Collaborated with multidisciplinary teams.",
      ],
    },
    {
      company: "IPS Design - Industrial Power Solutions",
      title: "Electrical Design Engineer",
      dates: "July 2021 - August 2024 (3 years 2 months)",
      location: "Perth, WA.",
      bullets: [
        "Collaborated with clients.",
        "Conducted Heat Calculation.",
      ],
    },
    {
      company: "Anser Technical Pty Ltd",
      title: "Graduate Electrical Engineer",
      dates: "September 2020 - July 2021 (11 months)",
      location: undefined,
      bullets: [
        "Participated in the design.",
        "Performed cable size calculations.",
      ],
    },
    {
      company: "Cloud Himalaya pvt Ltd.",
      title: "Junior Electrical Engineer",
      dates: "March 2017 - September 2018 (1 year 7 months)",
      location: "Thapathali, Kathmandu, Nepal.",
      bullets: ["Executed engineering work.", "Performed design tasks."],
    },
  ],
  education: [
    {
      institution: "Curtin University",
      qualification: "Master’s Degree",
      field: "Electrical Engineering Technologies/Technicians",
      dates: "February 2019 - July 2021",
    },
    {
      institution: "Western Region Campus",
      qualification: "Bachelor's degree",
      field: "Electrical Engineering",
      dates: "2013 - 2017",
    },
    {
      institution: "Nepal Mega College",
      qualification: "Associate Degree",
      field: "Science",
      dates: "2011 - 2013",
    },
    {
      institution: "Shree Neelkantha Higher Secondary School",
      qualification: "Secondary School",
      field: "Science Mathematics",
      dates: "2000 - 2011",
    },
  ],
} as const;

export const services = [
  {
    title: "2D/3D CAD Drafting",
    description: "Using AutoCAD for precise drawings",
    bullets: ["AutoCAD", "Power CAD", "MicroStation"],
  },
  {
    title: "Electrical Design & Calculations",
    description: "Load lists, transformer sizing, cable routing",
    bullets: ["ETAP", "System integrity", "Compliance"],
  },
  {
    title: "Motor Control Centre Design",
    description: "VSD parameters, starters",
    bullets: ["Vendor management", "Interface management"],
  },
  {
    title: "Vendor Document Review & Bid Evaluations",
    description: "Technical reviews, tender clarifications, and comparisons",
    bullets: ["Procurement coordination", "Cross-disciplinary collaboration"],
  },
  {
    title: "Site Visits, FAT, & Compliance",
    description: "On-site coordination and standards-driven delivery",
    bullets: ["Safety", "Operational performance"],
  },
  {
    title: "Heat/Arc Flash Assessments",
    description: "Risk-focused analysis for safer operations",
    bullets: ["Practical problem-solving", "Compliance focus"],
  },
] as const;

export const processSteps = [
  {
    title: "Receive Brief & Scope",
    description: "We gather your project requirements and clarify objectives to create a clear Scope of Work (SoW).",
  },
  {
    title: "Quotation & Estimation",
    description: "Provide a detailed cost estimate and timeline based on your scope.",
  },
  {
    title: "Confirmation & Acceptance",
    description: "You review and approve the quotation so we can officially start the project.",
  },
  {
    title: "CAD Drafting & Engineering Design",
    description: "Our team produces detailed AutoCAD drawings, engineering calculations, and design outputs according to standards.",
  },
  {
    title: "Review & Revisions",
    description: "Optional feedback, clarifications, or adjustments to ensure everything aligns with your expectations.",
  },
  {
    title: "Delivery & Handover",
    description: "Final CAD packages, documentation, and any compliance requirements are delivered ready for use.",
  },
  {
    title: "Invoicing",
    description: "Final invoice issued based on agreed terms, completing the project cycle.",
  },
] as const;

export const portfolioProjects = [
  {
    title: "BHP Nelson Point PDP2",
    description: "Electrical systems coordination and delivery support.",
    skills: ["AutoCAD", "ETAP", "Vendor management"],
  },
  {
    title: "Brownfield Upgrade Package",
    description: "As-built updates and interface alignment for operations.",
    skills: ["Power CAD", "Compliance", "Site coordination"],
  },
  {
    title: "Lighting Design & Calculations",
    description: "Lighting modelling and calculations for large facilities.",
    skills: ["Lighting design & calculation", "Lighting & Rendering"],
  },
  {
    title: "MCC & VSD Integration",
    description: "Starter/VSD parameter coordination and documentation.",
    skills: ["MCC design", "Cross-disciplinary collaboration"],
  },
] as const;

export const sectors = [
  {
    title: "Mining & Resources",
    description: "",
  },
  {
    title: "Infrastructure & Utilities",
    description: "",
  },
  {
    title: "Grain & Food Processing",
    description: "",
  },
  {
    title: "Lighting Design & Electrical Systems",
    description: "",
  },
  {
    title: "Oil, Gas & Energy",
    description: "",
  },
  {
    title: "Water & Wastewater Treatment",
    description: "",
  },
  {
    title: "Renewable Energy",
    description: "",
  },
] as const;

export const faqs = [
  {
    q: "What CAD tools do you use?",
    a: "We specialize in AutoCAD, delivering precise and industry-standard electrical CAD drafting solutions.",
  },
  {
    q: "How do you price projects?",
    a: "Projects are typically quoted based on scope, complexity, and timelines, with cost-effective options to fit your budget.",
  },
  {
    q: "Do you support NDAs and confidentiality?",
    a: "Yes, all projects are protected under strict NDAs and confidentiality agreements.",
  },
  {
    q: "Can you handle both small and large-scale projects?",
    a: "Absolutely. Our scalable team can support single-discipline or multi-discipline projects of any size.",
  },
  {
    q: "Do you offer revisions or design updates?",
    a: "Yes, we include feedback rounds to ensure your CAD outputs match your requirements.",
  },
  {
    q: "How quickly can you deliver a project?",
    a: "Turnaround depends on scope, but we prioritize efficiency without compromising accuracy.",
  },
  {
    q: "Do you work with clients outside Australia?",
    a: "Yes, we support global clients with our Nepal-based outsourcing model.",
  },
  {
    q: "How do you ensure quality and accuracy?",
    a: "All outputs go through a strict internal QA process before delivery to minimize errors and rework.",
  },
  {
    q: "Can you integrate with our existing workflows or software?",
    a: "Yes, our team can adapt to your project standards, formats, and collaboration tools.",
  },
  {
    q: "How do I get started?",
    a: "Simply share your project brief or Scope of Work (SoW), and we'll provide a quotation and timeline.",
  },
  {
    q: "Do you provide ongoing support after delivery?",
    a: "Yes, we offer support for revisions, updates, or additional drafting needs post-delivery.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Efficient delivery and clear coordination—exactly what we needed for a tight schedule.",
    author: "Mining client (anonymized)",
  },
  {
    quote: "High-quality CAD outputs with practical, standards-aligned thinking.",
    author: "EPC partner (anonymized)",
  },
  {
    quote: "Great communication across disciplines—reduced rework significantly.",
    author: "Owner’s team (anonymized)",
  },
] as const;

