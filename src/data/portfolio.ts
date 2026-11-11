export type ProjectCategory = "Full-Stack" | "AI / ML";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  year: string;
  categories: ProjectCategory[];
  description: string;
  architecture: string[];
  stack: string[];
  liveUrl?: string;
  githubUrl: string;
}

export interface SkillGroup {
  id: string;
  label: string;
  items: string[];
}

export interface Achievement {
  title: string;
  organization: string;
  badge: string;
  year: string;
  description: string;
}

export const profile = {
  name: "Aditya Mittal",
  role: "CS Undergrad & Full-Stack Developer",
  university: "Guru Gobind Singh Indraprastha University",
  shortUniversity: "GGSIPU, New Delhi",
  degree: "B.Tech in Computer Science & Engineering",
  graduation: "2025 – 2029",
  cgpa: "9.45 / 10.0",
  location: "New Delhi, India",
  email: "adityamittal568@gmail.com",
  github: "https://github.com/ADITYAMITTAL1604",
  linkedin: "https://www.linkedin.com/in/aditya-mittal-40b09435b/",
  resumePath: "/resume.pdf",
  resumeFileName: "Aditya_Mittal_Resume.pdf",
};

export const projects: Project[] = [
  {
    id: "decodex",
    name: "Decodex",
    tagline: "AI dyslexia-diagnostic reading platform",
    year: "2026",
    categories: ["Full-Stack", "AI / ML"],
    description:
      "Transcribes student read-aloud audio using Whisper, aligns transcripts to source text, and classifies reading errors against the Orton-Gillingham taxonomy.",
    architecture: [
      "Used Needleman-Wunsch dynamic programming for transcript-to-source word alignment.",
      "Built an async Redis/Bull job pipeline with an Opossum circuit breaker that degrades to rule-based classification if OpenAI fails.",
      "Implemented consent-gated RBAC (student, teacher, parent, admin) with bcrypt + httpOnly JWT auth.",
    ],
    stack: [
      "React 19",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Redis",
      "Whisper",
    ],
    liveUrl: "https://decodex-five.vercel.app/",
    githubUrl: "https://github.com/ADITYAMITTAL1604/DECODEX",
  },
  {
    id: "nobroke",
    name: "NoBroke",
    tagline: "Personal finance & spending-leak tracker",
    year: "Apr 2026",
    categories: ["Full-Stack"],
    description:
      "Analyzes UPI transaction history to detect recurring spending leaks, calculate a 0–100 Money Health Score, and generate personalized 30-day recovery plans.",
    architecture: [
      "Categorizes simulated UPI spends across merchants (Swiggy, Zomato, Uber, Netflix, Myntra) into 5 leak buckets.",
      "Visualizes monthly savings projections with Recharts and exports downloadable reports via jsPDF.",
    ],
    stack: [
      "React",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "Gemini API",
      "Recharts",
    ],
    liveUrl: "https://no-broke.vercel.app/",
    githubUrl: "https://github.com/ADITYAMITTAL1604/NO-BROKE",
  },
  {
    id: "flowpulse",
    name: "FlowPulse",
    tagline: "Business intelligence dashboard for Indian SMEs",
    year: "Apr 2026",
    categories: ["Full-Stack"],
    description:
      "Interactive BI dashboard covering 5 high-growth sectors across 10 Indian states, matching SMEs to government schemes like PLI, CGTMSE, and Udyam.",
    architecture: [
      "Computes a weighted 0–95 SME Readiness Score to match businesses with relevant schemes.",
      "Integrates Leaflet.js state-level maps and an OpenRouter Claude co-pilot constrained to concise Indian context.",
    ],
    stack: ["React", "Vite", "FastAPI", "Python", "Leaflet.js", "OpenRouter"],
    githubUrl: "https://github.com/ADITYAMITTAL1604/FLOW_PULSE",
  },
  {
    id: "solar-ai",
    name: "Solar AI",
    tagline: "Solar output prediction & ROI estimator",
    year: "Feb 2026",
    categories: ["AI / ML"],
    description:
      "Compares 4 regression models trained on 5,000 samples and 33 engineered features to predict solar generation, paired with a live weather API and ROI calculator.",
    architecture: [
      "Gradient Boosting achieved Test R2 = 0.9950 and RMSE = 0.0036 across engineered weather and irradiance features.",
      "Served via a Flask backend on Render with PDF generation for installation estimates.",
    ],
    stack: [
      "Python",
      "Flask",
      "Scikit-learn",
      "Gradient Boosting",
      "Pandas",
      "NumPy",
    ],
    githubUrl: "https://github.com/ADITYAMITTAL1604",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    items: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "HTML & CSS"],
  },
  {
    id: "frontend",
    label: "Frontend & Mobile",
    items: [
      "React",
      "React Native",
      "Expo",
      "Tailwind CSS",
      "Vite",
      "Recharts",
      "Leaflet.js",
    ],
  },
  {
    id: "backend",
    label: "Backend & Databases",
    items: [
      "FastAPI",
      "Flask",
      "Express",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Firebase",
    ],
  },
  {
    id: "ai-ml",
    label: "AI & Machine Learning",
    items: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Gradient Boosting",
      "Gemini API",
      "Claude API",
    ],
  },
  {
    id: "tools",
    label: "Tools & CS Core",
    items: [
      "Git",
      "GitHub",
      "Linux",
      "Render",
      "Vercel",
      "DSA (Java)",
      "System Design",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    title: "Hack VSIT 7.0",
    organization: "VIPS Technical Campus",
    badge: "Top 10 / 500+ Teams",
    year: "2026",
    description:
      "Ranked among the top 10 finalist teams out of more than 500 competing teams for building and pitching a working full-stack prototype under hackathon constraints.",
  },
  {
    title: "Hack 4 Delhi",
    organization: "MCD & IEEE NSUT",
    badge: "Top 50 / 1,000+ Teams",
    year: "2026",
    description:
      "Selected in the top 50 teams from over 1,000 entries across Delhi NCR for designing a civic-focused software solution.",
  },
  {
    title: "Head Boy",
    organization: "Shanti Gyan Niketan School",
    badge: "Leadership",
    year: "2024 – 2025",
    description:
      "Led a council of 30+ students across logistics, design, and events while managing a Rs. 50,000+ annual fest budget and vendor negotiations.",
  },
  {
    title: "Alpha — DSA with Java",
    organization: "Apna College",
    badge: "Certification",
    year: "2025",
    description:
      "Completed an intensive Data Structures and Algorithms track in Java covering arrays, linked lists, trees, graphs, recursion, and dynamic programming.",
  },
];
