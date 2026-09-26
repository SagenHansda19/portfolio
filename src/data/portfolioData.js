// Portfolio data - centralized data management for Sagen Hansda
export const personalInfo = {
  name: "Sagen Hansda",
  title: "Full-Stack Software Engineer & CS Student",
  email: "sagenhansda19072003@gmail.com",
  phone: "+91 70018 81518",
  location: "Mohali, India",
  linkedin: "https://www.linkedin.com/in/sagen-hansda/",
  github: "https://github.com/SagenHansda19",
  codeforces: "https://codeforces.com/profile/Comeback_When",
  codechef: "https://www.codechef.com/users/sagen",
  codingProfiles: "https://codeforces.com/profile/Comeback_When",
  resumePath: "/resume.pdf",
  summary: `Computer Science and Engineering undergraduate at Chandigarh University with strong expertise in high-concurrency backend architectures, Spring Boot ecosystems, and algorithmic problem solving. Passionate about engineering fault-tolerant transactional systems and clean, performant web applications.`,
  approach: `I architect production-grade backends with Spring Boot, JPA Optimistic Concurrency Control (OCC), and multi-tier Redis caching, backed by solid transactional integrity in PostgreSQL and modern React user interfaces.`
};

export const socialLinks = [
  { name: "GitHub", icon: "fab fa-github", href: "https://github.com/SagenHansda19", label: "GitHub" },
  { name: "LinkedIn", icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/sagen-hansda/", label: "LinkedIn" },
  { name: "Codeforces", icon: "fas fa-chart-line", href: "https://codeforces.com/profile/Comeback_When", label: "Codeforces" },
  { name: "CodeChef", icon: "fas fa-code", href: "https://www.codechef.com/users/sagen", label: "CodeChef" },
  { name: "Email", icon: "fas fa-envelope", href: "mailto:sagenhansda19072003@gmail.com", label: "Email" }
];

export const stats = [
  { value: "1818", label: "LeetCode Peak (Top 5%)" },
  { value: "3★", label: "CodeChef (1612 Max Rating)" },
  { value: "Pupil", label: "Codeforces (1276 Max Rating)" },
  { value: "8.16", label: "CGPA at Chandigarh University" }
];

export const education = [
  {
    id: 1,
    degree: "B.E. Computer Science and Engineering",
    institution: "Chandigarh University",
    period: "2023 – Present",
    grade: "CGPA: 8.16"
  },
  {
    id: 2,
    degree: "Higher Secondary & Secondary Education",
    institution: "Nand Prasad High School",
    period: "Completed",
    grade: "Percentage: 91%"
  }
];

export const experience = [
  {
    id: 1,
    title: "Full-Stack Software Engineer & Platform Architect",
    company: "StockVerse (Flagship Production Project)",
    period: "2024 - Present",
    description: `Architected and deployed an enterprise-grade transactional trading simulator and quantitative portfolio engine. Implemented optimistic concurrency control (OCC) with JPA @Version to eliminate write-contention lockups, multi-tier Redis caching, and LangChain4j with Google Gemini 1.5 Flash. Benchmarked 705 req/sec under Grafana K6 load testing with 0% failure rate.`
  },
  {
    id: 2,
    title: "Competitive Programmer & Algorithmic Problem Solver",
    company: "Competitive Programming (Codeforces / CodeChef / LeetCode)",
    period: "2023 - Present",
    description: `Competitive programmer with peak achievements: Codeforces Pupil (1276 rating), CodeChef 3★ (1612 rating), and LeetCode peak rating ~1818 (Top 5%). Solved hundreds of complex algorithmic challenges with deep mastery in graph theory, dynamic programming, and computational performance in C++ and Java.`
  }
];

export const projects = [
  {
    id: 1,
    title: "StockVerse (Flagship Production Project)",
    description: `High-concurrency transactional trading engine with optimistic locking, Redis caching, and Gemini AI integration. Built to eliminate thread-blocking database locks under write contention and deliver sub-millisecond execution with structured portfolio intelligence.`,
    tech: ["Spring Boot", "React", "PostgreSQL", "Redis", "Gemini API", "Grafana K6"],
    github: "https://github.com/SagenHansda19",
    live: "https://stockverse-web.onrender.com"
  },
  {
    id: 2,
    title: "Sorting Visualizer",
    description: `Interactive visualizer for Selection, Merge, and Quick Sort algorithms with custom animations. Designed with high-performance rendering to illustrate step-by-step partitioning, comparisons, and algorithmic complexity.`,
    tech: ["C++", "SDL2"],
    github: "https://github.com/SagenHansda19",
    live: null
  },
  {
    id: 3,
    title: "Tower of Hanoi Simulation",
    description: `Recursive state simulation tool with dynamic animation playback controls. Visualizes call-stack transitions, recursive state trees, and optimal move sequence resolution.`,
    tech: ["JavaScript", "SVG"],
    github: "https://github.com/SagenHansda19",
    live: null
  }
];

export const skills = {
  programming: [
    { name: "Java", level: 92 },
    { name: "C++", level: 90 },
    { name: "Python", level: 82 },
    { name: "SQL", level: 88 },
    { name: "JavaScript", level: 88 }
  ],
  backend: [
    { name: "Spring Boot", level: 92 },
    { name: "Spring Security", level: 88 },
    { name: "Redis", level: 85 },
    { name: "RESTful APIs", level: 90 }
  ],
  frontend: [
    { name: "React", level: 90 },
    { name: "JavaScript (ES6+)", level: 88 },
    { name: "HTML5 & CSS3", level: 90 },
    { name: "State Management", level: 85 }
  ],
  databases: [
    { name: "PostgreSQL", level: 90 },
    { name: "Redis", level: 88 },
    { name: "SQL", level: 88 }
  ],
  coreCS: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (DBMS)",
    "Operating Systems",
    "Computer Networks",
    "High-Concurrency & Optimistic Locking"
  ],
  tools: [
    "Docker",
    "Git & GitHub",
    "Grafana K6",
    "Postman",
    "Linux / Shell",
    "Render & Vercel"
  ]
};

export const extracurricular = [
  {
    id: 1,
    title: "Technical Contributor & Peer Mentor",
    organization: "Chandigarh University Developer Community",
    description: "Mentoring junior engineers in Data Structures, Algorithms, C++, and modern full-stack backend development practices."
  },
  {
    id: 2,
    title: "Open Source Contributor",
    organization: "GitHub Community",
    description: "Actively building and open-sourcing developer tools, algorithmic visualizers, and transactional simulation utilities."
  }
];

export const certifications = [];

export const achievements = [
  {
    id: 1,
    title: "CodeChef 3★ (1612 Max Rating)",
    description: `Achieved 3-star rating with a peak rating of 1612 on CodeChef, demonstrating competitive problem-solving proficiency, speed, and algorithmic mastery in division contests.`,
    icon: "code"
  },
  {
    id: 2,
    title: "LeetCode Peak ~1818 (Top 5%)",
    description: `Earned a contest rating peak of ~1818, ranking among the top 5% of competitive programmers globally with strong problem-solving proficiency across dynamic programming, graph algorithms, and data structures.`,
    icon: "trophy"
  },
  {
    id: 3,
    title: "Codeforces Pupil (1276 Max Rating)",
    description: `Attained Pupil rank with a peak rating of 1276 in Codeforces competitive rounds, tackling high-speed algorithmic challenges under strict constraints.`,
    icon: "code"
  },
  {
    id: 4,
    title: "AtCoder Global Rank 1904",
    description: `Secured an international rank of 1904 in AtCoder contests, solving complex mathematical and algorithmic problems against global participants.`,
    icon: "trophy"
  }
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" }
];
