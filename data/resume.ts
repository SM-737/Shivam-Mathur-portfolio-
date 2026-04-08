// Centralized resume data — single source of truth for all portfolio pages

export const personal = {
  name: "Shivam Mathur",
  email: "sm0181196@gmail.com",
  phone: "+971 56 795 1630",
  location: "Dubai, UAE / Wollongong, Australia",
  title: "LATTICE Developer & Aerospace Engineer",
  tagline:
    "Engineering next-generation defense systems, hypersonic platforms, and autonomous robotics. Bridging cutting-edge research with operational technology at the frontier of aerospace and AI.",
  roles: [
    "LATTICE Developer",
    "Aerospace Engineer",
    "Defense Researcher",
    "Robotics Founder",
    "Hypersonic Systems",
  ],
};

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  notes?: string[];
  highlight?: boolean;
}

export const education: Education[] = [
  {
    degree: "B.E. Honours — Mechatronics Engineering (Aerospace)",
    institution: "University of Wollongong",
    period: "2024 – Present",
    location: "Wollongong, Australia",
    notes: [
      "Calculus 1-2 and Calculus-based Physics",
      "MATLAB for Engineers",
      "Statics & Dynamics",
      "Electrical Systems",
      "Engineering Design and Ethics",
      "Mechanics of Materials",
      "Digital Logic Design",
      "Experimental Practices for Engineering",
    ],
    highlight: true,
  },
  {
    degree: "MIT Beaverworks Summer Program — Build a CubeSat",
    institution: "Massachusetts Institute of Technology",
    period: "10/2025 – Present",
    location: "Cambridge, MA, USA",
    highlight: true,
  },
  {
    degree: "High School Diploma — International Baccalaureate (IBDP)",
    institution: "Raffles World Academy",
    period: "03/2017 – 06/2024",
    location: "Dubai, UAE",
    notes: [
      "Captain, Viper House",
      "Wide Receiver, RWA Stallions Football Team (Performance League)",
      "Captain & Mentor, Robotics Team (2023)",
    ],
    highlight: false,
  },
];

export interface Course {
  title: string;
  institution: string;
  period: string;
  location: string;
}

export const courses: Course[] = [
  {
    title: "Introduction to Aerodynamics",
    institution: "Massachusetts Institute of Technology",
    period: "12/2024 – 08/2025",
    location: "Massachusetts, USA",
  },
  {
    title: "The Science of the Solar System",
    institution: "California Institute of Technology",
    period: "01/2025 – 05/2025",
    location: "California, USA",
  },
  {
    title: "Intro to Aerospace Structures and Materials",
    institution: "Technical University of Delft (TU Delft)",
    period: "09/2024 – 12/2024",
    location: "Delft, Netherlands",
  },
  {
    title: "Space Mission Design and Operations",
    institution: "École Polytechnique Fédérale de Lausanne (EPFL)",
    period: "08/2024 – 10/2024",
    location: "Lausanne, Switzerland",
  },
  {
    title: "AI for Intelligence Analysts",
    institution: "International Association for Intelligence Education (IAIE)",
    period: "02/2026",
    location: "Online",
  },
];

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  color: string;
  description: string;
  tags: string[];
}

export const experiences: Experience[] = [
  {
    title: "LATTICE Developer",
    company: "Anduril Industries",
    period: "01/2026 – Present",
    location: "Remote",
    type: "Full-time",
    color: "#00d4ff",
    description:
      "Developing next-generation unified Command & Control (C2) systems on Project LATTICE — Anduril's software platform for autonomous defense systems and sensor fusion pipelines enabling multi-domain operations.",
    tags: ["LATTICE", "C2 Systems", "Defense Tech", "Systems Engineering"],
  },
  {
    title: "Team Lead",
    company: "AI Grand Prix",
    period: "02/2026 – Present",
    location: "International",
    type: "Competition",
    color: "#4facfe",
    description:
      "Leading team in international AI competition focused on intelligent systems and machine learning applications in advanced operational contexts.",
    tags: ["AI", "Leadership", "Machine Learning"],
  },
  {
    title: "Founder & Director",
    company: "Baxter Dynamics",
    period: "08/2025 – Present",
    location: "Wollongong, Australia",
    type: "Founder",
    color: "#4facfe",
    description:
      "Founded the robotics association at the University of Wollongong. Primary aim is to compete in national and international robotics competitions with emphasis on autonomous mobility and advanced electromechanical systems.",
    tags: ["Robotics", "Leadership", "R&D", "UOW"],
  },
  {
    title: "Founder & Director",
    company: "Innoventures Aerospace Society",
    period: "12/2022 – Present",
    location: "Dubai, UAE",
    type: "Founder",
    color: "#0066cc",
    description:
      "Founded a student-led organization focused on drones, aircraft, and rockets. Active in regional and AIAA student competitions. Participated in regional rocket competitions and collaborated with the National Association of Rocketry.",
    tags: ["Aerospace", "Drones", "Rocketry", "Leadership"],
  },
  {
    title: "Research Team Member",
    company: "NASA STMD / NIAC",
    period: "04/2017 – Present",
    location: "Remote / USA",
    type: "Research",
    color: "#00d4ff",
    description:
      "Contributed to multiple NASA-affiliated research projects including: VOS (Venus Observatory Satellite), DSE (Deep Space Exploration), MSL/EV (Mars Surface Lander / Exploration Vehicle), AREE (Automaton Rover for Extreme Environments), and RARC (Robotic Assembly Research Program).",
    tags: ["NASA", "Mars", "Venus", "Space Systems", "NIAC"],
  },
  {
    title: "Mechanical & Electrical Team",
    company: "FIRST Robotics UAE",
    period: "07/2024 – 09/2024",
    location: "Greece (FIRST Global Challenge)",
    type: "Competition",
    color: "#4facfe",
    description:
      "Designed and built competition robot mechanisms and electrical systems. Team secured 2nd place in robot game among 193 nations, and earned the International Excellence Award, Social Media Challenge Award, and International Enthusiasm Award (Bronze).",
    tags: ["Robotics", "Mechanical Design", "Electrical Systems", "FIRST"],
  },
  {
    title: "Team Lead",
    company: "NASA Space Apps Challenge",
    period: "08/2022 – 10/2022",
    location: "UAE",
    type: "Competition",
    color: "#0066cc",
    description:
      "Led team to global finalist position with Project ZEUS (Zero-Electricity Utilization System) — a concept for in-situ resource utilization on Venus leveraging atmospheric chemistry without electrical power.",
    tags: ["NASA", "Venus", "ISRU", "Leadership"],
  },
  {
    title: "Robotics & Payload Lead",
    company: "International Space Challenge",
    period: "09/2020 – 11/2021",
    location: "International",
    type: "Competition",
    color: "#4facfe",
    description:
      "Led design of a volatile-extracting lunar rover for resource utilization. Secured 1st place in AWS category for cloud-connected autonomy architecture.",
    tags: ["Lunar Rover", "Robotics", "AWS", "Payload Design"],
  },
  {
    title: "Speaker",
    company: "International Astronautical Federation — GLEX 2021",
    period: "06/2021",
    location: "Moscow, Russia",
    type: "Speaking",
    color: "#00d4ff",
    description:
      "Presented the MSL/EV Mars exploration concept — a combined surface lander and exploration vehicle architecture — to the international astronautics community at IAF GLEX 2021.",
    tags: ["IAF", "Mars", "Public Speaking", "Space Systems"],
  },
];

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  status: string;
  color: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "qresar",
    title: "Project QRESAR",
    subtitle: "Quantum Radar Early Sensing and Ranging",
    role: "Research Lead",
    status: "Active",
    color: "#00d4ff",
    description:
      "Research into quantum radar technology for stealth detection and precision targeting. Exploring quantum entanglement-based radar systems that offer immunity to jamming and enhanced target discrimination beyond classical radar limits.",
    tags: ["Quantum Physics", "Radar Systems", "Defense", "Signal Processing"],
  },
  {
    id: "haven",
    title: "Project HAVEN",
    subtitle: "Hypersonic Acoustic Vibration Elimination Node",
    role: "Research Lead",
    status: "Active",
    color: "#4facfe",
    description:
      "Developing acoustic vibration suppression systems for hypersonic vehicles operating above Mach 5. Addresses structural resonance and thermal-acoustic coupling that threatens vehicle integrity at extreme velocities.",
    tags: ["Hypersonics", "Vibration Control", "Structural Dynamics", "Acoustics"],
  },
  {
    id: "arise",
    title: "ARISE",
    subtitle: "Adaptive Robotic Interface for Support and Endurance",
    role: "Research Lead",
    status: "Active",
    color: "#00d4ff",
    description:
      "Sensor-driven soft robotic exoskeleton designed to assist human mobility and reduce fatigue in demanding environments. Combines compliant actuators, bio-inspired control, and real-time sensor fusion for natural motion assistance.",
    tags: ["Soft Robotics", "Exoskeleton", "Bio-inspired", "Human Augmentation"],
  },
  {
    id: "hypersonic-aircraft",
    title: "Hypersonic Aircraft Research",
    subtitle: "Thrust, Engine & Intake Optimization",
    role: "Research Lead",
    status: "Ongoing",
    color: "#4facfe",
    description:
      "Experimental hypersonic research project focused on optimizing thrust, engine efficiency, and intake geometry. Work centers on ramjet-scramjet transition dynamics and detonation-based augmentation with published results in AIAA and AIDAA.",
    tags: ["Hypersonics", "Scramjet", "Propulsion", "AIAA Published"],
  },
  {
    id: "aam-missile",
    title: "AAM Missile Deterrence Research",
    subtitle: "Sensor-Fused Dead Reckoning RWR System",
    role: "Research Lead",
    status: "Active",
    color: "#0066cc",
    description:
      "Developing a concept for a sensor-fused dead reckoning Radar Warning Receiver (RWR) system for use in fighter aircraft. System intended for USAF and NATO aircraft platforms only.",
    tags: ["Defense", "USAF", "NATO", "Sensor Fusion", "Electronic Warfare"],
  },
  {
    id: "gnc",
    title: "GNC Control System for Rockets",
    subtitle: "Kalman Filter Guidance at Mach 4+",
    role: "Developer",
    status: "Development",
    color: "#0066cc",
    description:
      "Guidance, Navigation, and Control system using Kalman filter algorithms to optimize rocket guidance and control at Mach 4+ velocities. Handles sensor noise, atmospheric disturbances, and thrust vectoring for precision trajectory management.",
    tags: ["GNC", "Kalman Filter", "Rocketry", "Control Theory", "MATLAB"],
  },
];

export interface Publication {
  title: string;
  journal: string;
  year: string;
  type: string;
  color: string;
  abstract: string;
  doi: string | null;
}

export const publications: Publication[] = [
  {
    title:
      "Integrated Ramjet-Scramjet Transition with Detonation Based Augmentation and Structural Acoustic Stability Control",
    journal: "Associazione Italiana di Aeronautica e Astronautica (AIDAA)",
    year: "2024",
    type: "Journal Article",
    color: "#00d4ff",
    abstract:
      "This paper presents an integrated approach to ramjet-scramjet transition dynamics with novel detonation-based augmentation for propulsion efficiency. The study addresses structural acoustic stability control at hypersonic flight regimes, providing a framework for sustained hypersonic cruise capability.",
    doi: null,
  },
  {
    title:
      "Universal High Energy Type II Transfer with Precision Stabilized Martian Insertion",
    journal: "American Institute of Aeronautics and Astronautics (AIAA)",
    year: "2025",
    type: "Conference Paper",
    color: "#4facfe",
    abstract:
      "This paper presents a universal high-energy orbital transfer methodology for Mars missions incorporating Type II transfer trajectories with precision stabilized insertion maneuvers. The methodology optimizes Δv requirements while achieving high targeting accuracy for Martian orbital insertion across a range of launch windows.",
    doi: "https://arc.aiaa.org/doi/10.2514/6.2025-105040",
  },
];

export const technicalSkills = [
  {
    category: "CAD & Design",
    color: "#00d4ff",
    skills: ["Fusion 360", "Onshape", "SolidWorks", "AutoCAD"],
  },
  {
    category: "Programming",
    color: "#4facfe",
    skills: ["MATLAB", "Python", "LaTeX", "ROS 2"],
  },
  {
    category: "Defense & Space Systems",
    color: "#0066cc",
    skills: ["LATTICE", "GOTHAM", "Ansys STK", "Space Mission Design"],
  },
  {
    category: "Engineering",
    color: "#00d4ff",
    skills: ["Systems Engineering", "UAV/UCAV Design", "GNC Systems", "Structural Analysis"],
  },
];

export const softSkills = [
  "Team Leadership",
  "Collaboration",
  "Problem-Solving",
  "Creativity",
  "Public Speaking",
  "Research & Analysis",
];

export const radarSkills = [
  { skill: "Systems Engineering", value: 90 },
  { skill: "Aerospace Design", value: 88 },
  { skill: "CAD Modeling", value: 85 },
  { skill: "Programming", value: 80 },
  { skill: "Robotics", value: 87 },
  { skill: "Space Mission Design", value: 85 },
  { skill: "Defense Systems", value: 82 },
  { skill: "Research", value: 92 },
];

export const certifications = [
  { name: "Six Sigma White Belt", issuer: "Lean Six Sigma" },
  { name: "Systems Engineering Certification", issuer: "NASA JPL" },
  { name: "MBSE Certification (DOORS background)", issuer: "IBM" },
  { name: "GD&T Certification", issuer: "ASME" },
];

export const awards = [
  {
    title: "2nd Place — FIRST Robotics",
    subtitle: "Robot Game Among 193 Nations",
    year: "2024",
    category: "Competition",
  },
  {
    title: "International Excellence Award",
    subtitle: "FIRST Robotics International",
    year: "2024",
    category: "Competition",
  },
  {
    title: "Innovation Award",
    subtitle: "FIRST Robotics Competition",
    year: "2024",
    category: "Competition",
  },
  {
    title: "NASA Space Apps — Global Finalist",
    subtitle: "Project ZEUS",
    year: "2022",
    category: "Research",
  },
  {
    title: "1st Place — AWS Category",
    subtitle: "International Space Challenge",
    year: "2021",
    category: "Competition",
  },
  {
    title: "IAAC Bronze Award",
    subtitle: "International Aerospace & Astronautics Community",
    year: "",
    category: "Academic",
  },
  {
    title: "UAE National Space Week Hackathon — Runners Up",
    subtitle: "National Space Week UAE",
    year: "",
    category: "Competition",
  },
  {
    title: "Planetary Defence & Asteroid Redirection Program",
    subtitle: "AMEX & AIP Recognition",
    year: "",
    category: "Research",
  },
  {
    title: "Performance League Title — Football",
    subtitle: "RWA Stallions",
    year: "",
    category: "Athletics",
  },
  {
    title: "Innoventures Education Award",
    subtitle: "Innoventures Education",
    year: "",
    category: "Academic",
  },
  {
    title: "2023 Viper House Cup",
    subtitle: "Raffles World Academy",
    year: "2023",
    category: "Academic",
  },
];

export const languages = [
  { language: "English", level: "Native", proficiency: 100 },
  { language: "French", level: "Intermediate", proficiency: 60 },
  { language: "Spanish", level: "Intermediate", proficiency: 55 },
];

export const blogPosts = [
  {
    slug: "hypersonic-propulsion-2025",
    title: "The Future of Hypersonic Propulsion: Ramjet-Scramjet Transition",
    excerpt:
      "An in-depth exploration of the thermodynamic and structural challenges at the ramjet-to-scramjet transition point, and how detonation-based augmentation can extend the operational envelope beyond Mach 6.",
    date: "2025-03-15",
    readTime: "8 min",
    tags: ["Hypersonics", "Propulsion", "Research"],
  },
  {
    slug: "mars-transfer-orbits",
    title: "Precision Martian Insertion: Beyond Hohmann Transfers",
    excerpt:
      "Exploring high-energy Type II transfer trajectories for Mars missions that optimize delta-v budgets while achieving precision orbital insertion — key insights from our AIAA 2025 paper.",
    date: "2025-02-28",
    readTime: "6 min",
    tags: ["Mars", "Orbital Mechanics", "Space Mission Design"],
  },
  {
    slug: "anduril-lattice-c2",
    title: "Next-Generation C2: The LATTICE Architecture",
    excerpt:
      "How Anduril Industries' LATTICE platform is redefining command and control for autonomous systems — a look at the software-defined approach to modern defense infrastructure.",
    date: "2026-01-20",
    readTime: "5 min",
    tags: ["Defense", "LATTICE", "Autonomous Systems"],
  },
  {
    slug: "soft-robotics-exoskeleton",
    title: "ARISE: Building Soft Robotic Exoskeletons for Extreme Environments",
    excerpt:
      "Designing compliant actuator systems for wearable robotics that must operate reliably under thermal and mechanical stress — design philosophy and material selection for Project ARISE.",
    date: "2025-11-10",
    readTime: "7 min",
    tags: ["Robotics", "Exoskeleton", "Soft Robotics"],
  },
];
