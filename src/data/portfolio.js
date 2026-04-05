export const meta = {
  name: "Swagat Khodkumbhe",
  role: "Software Engineer",
  tagline: "I build robust backend systems and real-time data pipelines.",
  email: "swagatk1004@gmail.com",
  phone: "+91-9511780389",
  github: "https://github.com/Swagat-K04",
  linkedin: "https://www.linkedin.com/in/swagat-khodkumbhe-29b436258/", 
  leetcode: "https://leetcode.com/u/swagat_k04/", 
  resume: "https://drive.google.com/file/d/1Yv21-0CIBEBH5Z-pf1sTI5_F2LWK4oPz/view", 
};

export const about = `I'm a final-year Computer Science student at IIIT Nagpur, currently interning as a Software Engineer at Pine Labs (Mosambee) in Mumbai, where I work on alternate payments infrastructure — QR generation, transaction scheduling, and async callback handling.

I enjoy building distributed systems, real-time data pipelines, and solving hard algorithmic problems. I'm a LeetCode Knight (1800+ rating, 600+ problems) and I care deeply about writing clean, production-grade code.

Currently looking for full-time SDE roles starting June 2026.`;

export const experience = [
  {
    company: "Pine Labs (Mosambee)",
    role: "Software Engineer Intern — Alternate Payments Module",
    location: "Mumbai, Maharashtra",
    duration: "Sept 2025 – Present",
    bullets: [
      "Engineered end-to-end bank integration flows covering QR code generation, transaction status polling, callback processing, and refund initiation using Java and Spring Boot.",
      "Designed and implemented a concurrent transaction scheduler that periodically polls pending transactions per bank-specific retry requirements, processing requests in parallel to reduce settlement latency.",
      "Integrated multiple banking partners and alternate payment methods (UPI, BQR) into the existing payments platform, enabling support for new payment channels with minimal changes to core modules.",
      "Built robust callback-handling mechanisms to process async payment confirmations from banking APIs, ensuring idempotent state transitions and consistent transaction records.",
    ],
    tech: ["Java", "Spring Boot", "UPI", "BQR", "PostgreSQL"],
  },
];

export const projects = [
  {
    name: "Real-Time Fraud Detection Pipeline",
    description:
      "End-to-end ML system for streaming fraud detection with explainable AI and a live React dashboard.",
    bullets: [
      "Distributed streaming pipeline: Python producer → Kafka (3 partitions) → XGBoost inference → PostgreSQL + Redis. AUC: 0.9614 on the credit card fraud dataset.",
      "Integrated SHAP for feature-level explainability and Claude AI for human-readable fraud reasoning, surfaced via React + Recharts dashboard with live WebSocket updates.",
      "Redis Pub/Sub for real-time push to frontend, reducing dashboard latency from 5s polling to sub-second delivery.",
      "Containerized all services (Kafka, PostgreSQL/TimescaleDB, Redis, FastAPI, React) with Docker Compose for single-command local deployment.",
    ],
    tech: ["Python", "Kafka", "XGBoost", "FastAPI", "Redis", "PostgreSQL", "Docker", "React", "SHAP"],
    github: "https://github.com/Swagat-K04/Fraud-Transaction-Detection", 
    featured: true,
  },
  {
    name: "Parallel File Encrypter",
    description:
      "High-performance C++ application for parallel encryption and decryption of 1000+ files simultaneously.",
    bullets: [
      "Encrypts and decrypts 1000+ files simultaneously using multithreading.",
      "Utilized POSIX shared memory (shm_open, mmap) for efficient inter-process communication.",
      "Optimized batch processing to minimize execution time; handled race conditions and fault tolerance.",
    ],
    tech: ["C++", "Multithreading", "POSIX IPC", "shm_open", "mmap"],
    github: "https://github.com/Swagat-K04/parallel-file-encrypter",
    featured: true,
  },
  {
    name: "BookWorm",
    description:
      "Full-stack React Native mobile app for sharing and discovering book recommendations.",
    bullets: [
      "JWT-based authentication with MongoDB-backed user management.",
      "Users can post recommendations, view others' posts, with a clean intuitive UI.",
      "Built using Expo Router, Zustand for state management; backend in Node.js + Express on Render.",
    ],
    tech: ["React Native", "Expo", "Node.js", "Express", "MongoDB", "Zustand", "JWT"],
    github: "https://github.com/Swagat-K04/bookworm-mobile-app",
    featured: false,
  },
  {
    name: "TeleChat",
    description:
      "Full-stack social media web app with real-time chat and Instagram-like features.",
    bullets: [
      "Built a scalable MERN application supporting posts, likes, comments, and user profiles with secure JWT authentication.",
      "Implemented real-time messaging using WebSockets, enabling low-latency one-to-one chat between users.",
      "Optimized media handling and API performance for smooth feed rendering and reduced load times.",
      "Designed responsive UI with React for seamless experience across devices.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "WebSockets", "JWT"],
    github: "https://github.com/Swagat-K04/TeleChat",
    featured: false,
  },
  {
    name: "Customizer-T",
    description:
      "Interactive 3D T-shirt customization platform with real-time design preview.",
    bullets: [
      "Developed a web app allowing users to customize T-shirts with colors, textures, and images in real-time.",
      "Integrated 3D rendering using Three.js for dynamic visualization of user designs.",
      "Implemented state management and smooth UI interactions for a responsive customization experience.",
      "Focused on performance optimization to ensure seamless rendering and fast updates.",
    ],
    tech: ["React", "Three.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Swagat-K04/Customizer-T",
    featured: false,
  },
];

export const skills = {
  Languages: ["C/C++", "Java", "Python", "JavaScript", "TypeScript"],
  Frameworks: ["Spring Boot", "FastAPI", "React", "React Native", "Express", "Next.js"],
  Databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  "Tools & Infra": ["Kafka", "Docker", "Node.js", "Git", "Appwrite", "Expo"],
  "ML & Data": ["XGBoost", "scikit-learn", "SHAP", "pandas", "NumPy"],
  Concepts: ["Distributed Systems", "REST APIs", "WebSockets", "Multithreading", "POSIX IPC", "JWT"],
};

export const achievements = [
  {
    title: "LeetCode Knight",
    desc: "1800+ rating · 600+ problems solved",
    link: "https://leetcode.com/Swagat-K04",
  },
  {
    title: "IIIT Nagpur",
    desc: "B.Tech CSE · CGPA 8.59 · Batch of 2026",
    link: null,
  },
];
