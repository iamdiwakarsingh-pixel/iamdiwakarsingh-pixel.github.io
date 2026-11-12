import { 
  BookOpen, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Users, 
  Lightbulb, 
  Heart, 
  Globe, 
  Anchor,
  Layers
} from "lucide-react";

export const personalInfo = {
  name: "Dr. Diwakar Singh",
  title: "Assistant Professor, EDII | Scholar-Curator, The Theory Lab | IAF Veteran",
  subtitle: "Assistant Professor, Entrepreneurship Development Institute of India, Ahmedabad",
  email: "iamdiwakarsingh@gmail.com",
  socials: {
    googleScholar: "https://scholar.google.com/citations?user=MhNKED8AAAAJ&hl=en",
    researchGate: "https://www.researchgate.net/profile/Diwakar-Singh-11",
    linkedIn: "https://www.linkedin.com/in/dr-diwakar-singh-5b6846171/",
    orcid: "0000-0002-3505-2324",
    scopus: "58109430700"
  },
  philosophy: "Focus on empathy, lokasamgraha, seva, sustainability, and inner clarity. Blending academic rigor with spiritual wisdom.",
  iafQuote: "Service before self. A journey of discipline, ethics, and unwavering duty."
};

export const journey = [
  {
    year: "1998-2018",
    title: "Indian Air Force Service",
    description: "20 years of leadership, HR operations, and technical management. Served with distinction in various roles including cybersecurity, IT systems, and training.",
    icon: Anchor
  },
  {
    year: "2004",
    title: "BA (Hons)",
    description: "Indira Gandhi National Open University",
    icon: GraduationCap
  },
  {
    year: "2009",
    title: "MA (Psychology)",
    description: "Gujarat University",
    icon: GraduationCap
  },
  {
    year: "2011",
    title: "MBA (OB/HRM)",
    description: "Indira Gandhi National Open University",
    icon: GraduationCap
  },
  {
    year: "2024",
    title: "PhD (Management)",
    description: "Dr. B. R. Ambedkar University Delhi. Thesis: Understanding Organizational Culture of Social Enterprises Using Case Study Approach.",
    icon: Award
  },
  {
    year: "2025-Present",
    title: "Assistant Professor",
    description: "Entrepreneurship Development Institute of India (EDII), Ahmedabad. Teaching Innovation, Entrepreneurship, and Business Analytics.",
    icon: Briefcase
  },
  {
    year: "2025-2026",
    title: "Ecosystem Leadership in Ladakh",
    description: "State Program Implementation Unit (SPIU) Head for the RAMP project in UT Ladakh and lead collaborator on Enterprising Ladakh.",
    icon: Globe
  },
  {
    year: "2026-Present",
    title: "Founder & Scholar-Curator, The Theory Lab",
    description: "Launched a structured 24-week scholarly curriculum translating seminal management theory and editorial standards for doctoral researchers and early-career faculty.",
    icon: Layers
  }
];

export const qualifications = [
  {
    degree: "PhD (Management)",
    institution: "Dr. B. R. Ambedkar University Delhi",
    year: "2024",
    details: "Thesis: Understanding Organizational Culture of Social Enterprises Using Case Study Approach"
  },
  {
    degree: "MBA (OB/HRM)",
    institution: "IGNOU",
    year: "2011"
  },
  {
    degree: "MA (Psychology)",
    institution: "Gujarat University",
    year: "2009"
  },
  {
    degree: "BA (Hons)",
    institution: "IGNOU",
    year: "2004"
  }
];

export const researchInterests = [
  { title: "Social Entrepreneurship & Indigenous Management", icon: Users },
  { title: "Organizational Culture & OB", icon: Briefcase },
  { title: "Frugality, Jugaad & Innovation", icon: Lightbulb },
  { title: "Spirituality & Management", icon: Heart },
  { title: "Qualitative Research Methods", icon: BookOpen },
  { title: "Indian Knowledge Systems", icon: Globe }
];

export const publications = {
  journalArticles: [
    "Navigating Paradox through Jugaad: Sustainability Practices in Indian Social Enterprises. Journal of Social Entrepreneurship (2025).",
    "Lokasamgraha: An Indigenous Construct for Social Entrepreneurship. IIMB Management Review (2023).",
    "Expanding Horizons of Social Entrepreneurship Through Indigenous Research. Journal of Social Entrepreneurship (2023).",
    "Spirituality in Social Entrepreneurship. Social Enterprise Journal (2024).",
    "Organizational Culture: A Longitudinal Study of a Public Sector Bank. Parikalpana (2023).",
    "Employee Retention Review. IJSRST (2019).",
    "Managing Cross-cultural Diversity. IOSR-JMCE (2014)."
  ],
  proceedings: [
    "Community Engagement as Moral Governance: A Process Model of Value Co-creation in Social Enterprise. Academy of Management Proceedings, 2026",
    "Meditation and the Making of Academic Identity: A Collaborative Autoethnography Across Contemplative Traditions. Academy of Management Proceedings, 2026",
    "What Makes Social Enterprises Unique? Examining Sustainability Through a Cultural Lens, Academy of Management Proceedings, Aug 2025",
    "Exploring the role of Spirituality in Social Entrepreneurship using sustainability lens, Academy of Management Proceedings, Aug 2023",
    "Lokasamgraha: An Indigenous Construct for Social Entrepreneurship from India, Academy of Management Proceedings, Aug 2022"
  ],
  bookChapters: [
    "Talent Acquisition and Retention: Issues and Challenges. (2014)",
    "Spirituality at Workplace: Managing Millennials. (2019)",
    "Philosophical Underpinnings of Research Paradigms. (2019)",
    "Disaster Management Education in India. (2014)"
  ]
};

export const teaching =