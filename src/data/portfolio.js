export const meta = {
  name: "Swagat Khodkumbhe",
  role: "Software Engineer",
  company: "Pine Labs (Mosambee)",
  headline: "Building low-latency payment rails & high-throughput distributed systems.",
  tagline: "Specializing in ISO 8583 financial messaging, C++20 memory engines, and real-time Kafka event streams.",
  email: "swagatk1004@gmail.com",
  phone: "+91-9511780389",
  github: "https://github.com/Swagat-K04",
  linkedin: "https://www.linkedin.com/in/swagat-khodkumbhe-29b436258/",
  leetcode: "https://leetcode.com/u/swagat_k04/",
  resume: "https://drive.google.com/file/d/1Yv21-0CIBEBH5Z-pf1sTI5_F2LWK4oPz/view",
  location: "Mumbai, India",
  cgpa: "8.60",
  college: "IIIT Nagpur",
  degree: "B.Tech in Computer Science & Engineering",
  gradYear: "2026",
};

export const about = `I am a Software Engineer at Pine Labs (Mosambee) working on critical card payment infrastructure — handling ISO 8583 messaging between POS terminals, transaction gateways, and banking hosts, as well as designing high-concurrency payment schedulers and refund flows.

I specialize in distributed systems, real-time data streaming, and high-performance computing in C++20 and Java. I am a LeetCode Knight (1800+ peak rating, 600+ problems solved) driven by algorithmic efficiency, low-latency architecture, and clean production-grade engineering.`;

export const experience = [
  {
    company: "Pine Labs (Mosambee)",
    role: "Software Engineer — Card Payments Module",
    location: "Mumbai, Maharashtra",
    duration: "July 2026 – Present",
    current: true,
    highlights: [
      "Integrated bank-specific card payment flows, working with ISO 8583 messaging between POS terminals, transaction gateways, and banking hosts.",
      "Implemented a JSON-based strategy for SBI verified card-present refunds, preserving the existing ISO-based processing strategy without disrupting other transaction flows.",
      "Optimized transaction state transitions and error-handling pipelines to ensure idempotent execution under high concurrency.",
    ],
    tech: ["Java", "Spring Boot", "ISO 8583", "POS Terminals", "PostgreSQL", "Banking APIs"],
  },
  {
    company: "Pine Labs (Mosambee)",
    role: "Software Engineer Intern — Alternate Payments Module",
    location: "Mumbai, Maharashtra",
    duration: "Sept 2025 – July 2026",
    current: false,
    highlights: [
      "Integrated UPI and Bharat QR payment flows with banking APIs, covering QR generation, transaction status polling, callbacks, and refunds using Java and Spring Boot.",
      "Developed a concurrent transaction scheduler with bank-specific retry policies to process pending transactions in parallel, significantly reducing settlement latency.",
      "Implemented robust callback handling and transaction state updates to support reliable asynchronous payment processing.",
    ],
    tech: ["Java", "Spring Boot", "UPI", "Bharat QR", "PostgreSQL", "Concurrency"],
  },
];

export const projects = [
  {
    id: "fraud-detection",
    name: "Real-Time Fraud Detection Pipeline",
    tagline: "End-to-end ML streaming pipeline with explainable AI and live WebSocket dashboard",
    bullets: [
      "Built a distributed streaming pipeline: Python producer publishes synthetic transactions to Kafka (3 partitions); consumer engineers 7 features, runs XGBoost inference, and writes results to PostgreSQL + Redis — achieving AUC: 0.9614.",
      "Integrated SHAP for feature-level explainability on each prediction and Claude AI for human-readable fraud reasoning, surfaced via a React + Recharts dashboard with live WebSocket updates.",
      "Implemented Redis Pub/Sub for real-time push to the frontend, replacing DB polling and reducing dashboard latency from 5s intervals to sub-second delivery.",
      "Containerized all services (Kafka, PostgreSQL/TimescaleDB, Redis, FastAPI, React) with Docker Compose for single-command local deployment.",
    ],
    metrics: [
      { label: "AUC Score", value: "0.9614" },
      { label: "Dashboard Latency", value: "< 250ms" },
      { label: "Kafka Partitions", value: "3 Active" },
    ],
    tech: ["Python", "Kafka", "XGBoost", "FastAPI", "Redis", "PostgreSQL", "Docker", "React", "SHAP", "Claude AI"],
    github: "https://github.com/Swagat-K04/Fraud-Transaction-Detection",
    featured: true,
  },
  {
    id: "parallel-encrypter",
    name: "Parallel File Encrypter Engine",
    tagline: "High-performance C++20 engine for parallel AES-256 encryption with POSIX IPC",
    bullets: [
      "Built a parallel file encryption engine in C++20 using OpenSSL AES-256-GCM, achieving 2.5+ GB/s in-memory throughput across multi-core workers.",
      "Optimized file I/O with POSIX mmap and madvise, reducing page-fault overhead by 65% for gigabyte-scale datasets.",
      "Implemented a multi-process worker pool using POSIX shared memory, synchronized circular queues, robust mutexes, and semaphores for lock-free IPC.",
    ],
    metrics: [
      { label: "Throughput", value: "2.5+ GB/s" },
      { label: "Page-Fault Reduction", value: "-65%" },
      { label: "Cipher", value: "AES-256-GCM" },
    ],
    tech: ["C++20", "OpenSSL", "POSIX IPC", "mmap", "Multithreading", "Shared Memory", "Semaphores"],
    github: "https://github.com/Swagat-K04/parallel-file-encrypter",
    featured: true,
  },
  {
    id: "bookworm",
    name: "BookWorm Mobile App",
    tagline: "Full-stack mobile application for discovering and sharing curated book recommendations",
    bullets: [
      "JWT-based authentication with MongoDB-backed user management and secure session refresh.",
      "Built using React Native, Expo Router, and Zustand for snappy global state management.",
      "Scalable backend in Node.js + Express with indexed MongoDB collections.",
    ],
    metrics: [
      { label: "Platform", value: "iOS / Android" },
      { label: "State Mgmt", value: "Zustand" },
    ],
    tech: ["React Native", "Expo", "Node.js", "Express", "MongoDB", "Zustand", "JWT"],
    github: "https://github.com/Swagat-K04/bookworm-mobile-app",
    featured: false,
  },
  {
    id: "telechat",
    name: "TeleChat Social & Messaging",
    tagline: "Full-stack real-time social platform with low-latency WebSocket messaging",
    bullets: [
      "Built a scalable MERN application supporting posts, dynamic feeds, likes, comments, and user profiles with secure JWT authentication.",
      "Implemented real-time bidirectional messaging using WebSockets with online/offline presence tracking.",
      "Optimized media delivery and feed indexing for smooth 60fps mobile and web navigation.",
    ],
    metrics: [
      { label: "Communication", value: "WebSockets" },
      { label: "Auth", value: "JWT + Bcrypt" },
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "WebSockets", "JWT"],
    github: "https://github.com/Swagat-K04/TeleChat",
    featured: false,
  },
  {
    id: "customizer-t",
    name: "Customizer-T 3D Studio",
    tagline: "Interactive 3D product customization platform with real-time WebGL rendering",
    bullets: [
      "Built an interactive web studio allowing users to customize apparel with procedural textures, decals, and dynamic color palettes.",
      "Integrated Three.js for real-time 3D lighting, material shaders, and canvas baking.",
    ],
    metrics: [
      { label: "3D Engine", value: "Three.js" },
      { label: "Framerate", value: "60 FPS" },
    ],
    tech: ["React", "Three.js", "JavaScript", "Tailwind CSS", "Canvas API"],
    github: "https://github.com/Swagat-K04/Customizer-T",
    featured: false,
  },
];

export const skills = {
  "Core Languages": ["C/C++ (C++20)", "Java", "Python", "TypeScript", "JavaScript", "SQL"],
  "Backend & Systems": ["Spring Boot", "FastAPI", "Node.js", "Express", "Distributed Systems", "POSIX IPC"],
  "Data & Streaming": ["Apache Kafka", "Redis (Pub/Sub)", "PostgreSQL", "TimescaleDB", "MongoDB", "MySQL"],
  "ML & High-Performance": ["XGBoost", "SHAP", "scikit-learn", "OpenSSL AES-GCM", "pandas", "NumPy"],
  "Infrastructure & Tools": ["Docker", "Docker Compose", "Git / GitHub", "WebSockets", "Appwrite", "Expo"],
  "Protocols & Standards": ["ISO 8583 Messaging", "UPI & Bharat QR", "REST APIs", "JWT Auth", "POSIX Shared Memory"],
};

export const achievements = [
  {
    title: "LeetCode Knight",
    highlight: "1800+ Peak Rating",
    desc: "Solved 600+ algorithmic problems spanning dynamic programming, graph theory, trees, and concurrency. Top 5% worldwide.",
    link: "https://leetcode.com/u/swagat_k04/",
    badge: "Knight",
  },
  {
    title: "IIIT Nagpur",
    highlight: "CGPA 8.60",
    desc: "Bachelor of Technology in Computer Science & Engineering · Batch of 2022–2026.",
    link: null,
    badge: "B.Tech CSE",
  },
  {
    title: "Pine Labs (Mosambee)",
    highlight: "Card & Alternate Payments",
    desc: "Production engineering on mission-critical POS and banking payment rails across India.",
    link: null,
    badge: "Production SWE",
  },
];

// Interactive ISO 8583 sample packet for the HUD Inspector
export const iso8583Sample = {
  mti: "0200",
  mtiDescription: "Financial Transaction Request (POS Card Present)",
  bitmap: "7238448108C08018",
  fields: [
    { de: "DE 0", name: "Message Type Identifier (MTI)", value: "0200", desc: "Acquirer Financial Request" },
    { de: "DE 3", name: "Processing Code", value: "000000", desc: "Goods & Services Purchase (Account to Merchant)" },
    { de: "DE 4", name: "Transaction Amount", value: "000000150000", desc: "INR 1,500.00 (Minor currency units)" },
    { de: "DE 11", name: "Systems Trace Audit Number (STAN)", value: "482910", desc: "Unique transaction trace ID" },
    { de: "DE 12", name: "Local Transaction Time", value: "174120", desc: "17:41:20 IST" },
    { de: "DE 22", name: "Point of Service (POS) Entry Mode", value: "051", desc: "Integrated Circuit Card (EMV Chip) with PIN" },
    { de: "DE 41", name: "Card Acceptor Terminal ID (TID)", value: "PINELAB01", desc: "Mosambee Smart POS Terminal" },
    { de: "DE 48", name: "Private Additional Data", value: "SBI_REFUND_STRAT:JSON_VERIFIED", desc: "SBI Verified Card-Present Refund Payload" },
    { de: "DE 49", name: "Transaction Currency Code", value: "356", desc: "356 (Indian Rupee - INR)" },
  ],
  hexDump: "00000000  02 00 72 38 44 81 08 C0  80 18 00 00 00 00 15 00  |..r8D...........|\n00000010  00 04 82 91 01 74 12 00  51 50 49 4E 45 4C 41 42  |.....t..QPINELAB|\n00000020  30 31 53 42 49 5F 52 45  46 55 4E 44 5F 53 54 52  |01SBI_REFUND_STR|\n00000030  41 54 3A 4A 53 4F 4E 5F  56 45 52 49 46 49 45 44  |AT:JSON_VERIFIED|",
};

// C++20 Benchmark simulator data
export const benchmarkMetrics = {
  throughput: "2.54 GB/s",
  baselineThroughput: "0.82 GB/s",
  speedup: "3.1x",
  pageFaultReduction: "65.4%",
  mmapAdvantage: "Zero-copy kernel buffer mapping via madvise(MADV_WILLNEED)",
  workerPool: "POSIX shared memory circular queue with robust mutex locks",
};
