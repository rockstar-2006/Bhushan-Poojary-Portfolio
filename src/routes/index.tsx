import { createFileRoute } from "@tanstack/react-router";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  AnimatePresence,
} from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Trophy,
  Award,
  Sparkles,
  Users,
  Coffee,
  Sun,
  Moon,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Square,
  Volume2,
  VolumeX,
  Instagram,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import GITHUB_PROJECTS from "../data/github_projects.json";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const check = () => {
      setIsMobile(
        window.innerWidth < 768 ||
        window.matchMedia("(hover: none)").matches ||
        ("ontouchstart" in window) ||
        navigator.maxTouchPoints > 0
      );
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

function openCalendly() {
  if (typeof window === "undefined") return;
  const url = "https://calendly.com/bhushan-poojary2006/30min";
  
  if (!(window as any).Calendly) {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      (window as any).Calendly.initPopupWidget({ url });
    };
    document.body.appendChild(script);
  } else {
    (window as any).Calendly.initPopupWidget({ url });
  }
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhushan Poojary - AI & Full-Stack Developer" },
      { name: "description", content: "AI & Data Science undergraduate building React, FastAPI, Firebase, and AI products for real users." },
      { property: "og:title", content: "Bhushan Poojary - Portfolio" },
      { property: "og:description", content: "Trainee Fullstack Developer at Antarita Digital Cloud, NAIN 2.0 funded builder, and 5+ hackathon winner." },
    ],
  }),
  component: Portfolio,
});

/* ---------- Data ---------- */

type SkillNode = { name: string; level: number; note: string };

const EXPERIENCE = [
  {
    company: "Antarita Digital Cloud Pvt Ltd",
    role: "Trainee Fullstack Developer",
    date: "Apr 2026 - Present",
    initials: "AD",
    color: "var(--terracotta)",
    bullets: [
      "Developing Journeybuddy.ai, an AI-powered travel assistant platform",
      "Building full-stack features with React, FastAPI, and Firebase integration",
      "Collaborating with the product owner and team in agile development cycles",
      "Documenting technical specifications and delivering weekly progress reports",
    ],
  },
  {
    company: "SystemTron Online Internship",
    role: "Frontend Developer Intern",
    date: "Feb 2024 - Mar 2025",
    initials: "ST",
    color: "var(--teal)",
    bullets: [
      "Developed responsive UI components using HTML, CSS, and JavaScript",
      "Built frontend applications with DOM manipulation and event-driven logic",
      "Integrated REST APIs and improved client-side performance",
    ],
  },
];

const LeetCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M16.102 17.93l-2.69 2.607c-.466.451-1.111.696-1.744.696a2.285 2.285 0 0 1-1.744-.696L3.666 14.3c-.466-.451-.71-.1-.71-.71V9.45c0-.61.244-1.258.71-1.709l6.258-6.103a2.285 2.285 0 0 1 1.744-.696c.633 0 1.278.245 1.744.696l2.69 2.607a.64.64 0 0 1-.01.902l-2.072 2.008a.63.63 0 0 1-.902-.01l-1.442-1.396a.434.434 0 0 0-.643 0l-3.9 3.8a.46.46 0 0 0 0 .653l3.9 3.8a.434.434 0 0 0 .643 0l1.442-1.396a.63.63 0 0 1 .902-.01l2.072 2.008a.64.64 0 0 1 .01.902zm6.464-8.78a.44.44 0 0 0-.44-.44h-5.06a.44.44 0 0 0-.44.44v5.06a.44.44 0 0 0 .44.44h5.06a.44.44 0 0 0 .44-.44V9.15z" />
  </svg>
);

type ProjectType = {
  id: string;
  name: string;
  blurb: string;
  tags: string[];
  accent: string;
  featured?: boolean;
  badge?: string;
  live?: string;
  github?: string;
  year: string;
  month: string;
  story: string;
  impact: string[];
  longImpact?: string[];
  category: string;
  architecture: string[];
  challenges: { title: string; solution: string }[];
  deviceType: "laptop" | "mobile";
  videoUrl?: string;
};

const PROJECTS: ProjectType[] = [
  {
    id: "varnothsava",
    name: "Varnothsava",
    blurb: "College fest platform for registrations, payments, and ticket validation",
    tags: ["Next.js 16", "React 19", "TypeScript", "Three.js", "Spline", "Framer Motion", "Firebase", "Razorpay", "Redis", "Gemini API"],
    accent: "var(--terracotta)",
    featured: true,
    badge: "500+ users",
    live: "https://varnothsava.sode-edu.in/",
    github: "https://github.com/rockstar-2006/Varnothsava---College-Fest-Website-",
    year: "2026",
    month: "Mar",
    story: "Architectured and Deployed a High-Performance, Live web application using Next.js 16 (App Router), React 19, and TypeScript, delivering a futuristic, immersive UI powered by Three.js, Spline, and Framer Motion for a high-fidelity Real-Time user experience.",
    impact: [
      "Supported 500+ active users concurrently during college fest peaks.",
      "Integrated Razorpay API with HMAC server-side verification.",
      "Implemented role-based dashboard controls & QR ticket validation.",
      "Scaled with Gemini AI, Upstash Redis rate limiting, and Edge SSR."
    ],
    longImpact: [
      "Architectured and Deployed a High-Performance, Live web application using Next.js 16 (App Router), React 19, and TypeScript, delivering a futuristic, immersive UI powered by Three.js, Spline, and Framer Motion for a high-fidelity Real-Time user experience.",
      "Engineered an Enterprise-Grade Fintech Layer by integrating the Razorpay API, implementing HMAC-SHA256 Server-Side Signature Verification, Background Webhooks, and Idempotency logic to handle thousands of live transaction flows with 100% security.",
      "Developed a Sophisticated Real-Time Backend Ecosystem using Firebase/Firestore NoSQL, featuring Role-Based Access Control (RBAC), Zod Schema Validation, and a Live QR-based Ticketing and scanning system for automated event entry and attendance tracking.",
      "Optimized for Extreme Scalability & High Availability by embedding Google Gemini AI for automated query handling, Upstash Redis for rate limiting, and Server-Side Rendering (SSR) on Edge Runtimes, ensuring 99.9% uptime during peak fest traffic surges and deploy on Vercel."
    ],
    category: "Web Apps",
    architecture: ["Next.js 16 App Router", "React 19 & Three.js", "Cloud Firestore NoSQL", "Razorpay Fintech Layer", "Upstash Redis Cache"],
    challenges: [
      {
        title: "Database Performance Hotspots",
        solution: "Configured local cache invalidation schemes and query throttling in React to reduce Firestore read counts by 45% under concurrent load peaks."
      },
      {
        title: "Webhook Reliability Issues",
        solution: "Built a transaction recovery state machine inside the FastAPI backend to catch and retry delayed payment webhooks safely without double charging."
      }
    ],
    deviceType: "laptop",
    videoUrl: "/varnothsava_demo.mp4"
  },
  {
    id: "mindshift",
    name: "MindShift",
    blurb: "AI sentiment analysis app with multilingual voice interaction",
    tags: ["Android SDK", "Java", "Gemini API", "Instagram API", "Murf AI"],
    accent: "var(--teal)",
    featured: true,
    badge: "AI App",
    github: "https://github.com/rockstar-2006/MindShiftAI",
    year: "2025",
    month: "Nov",
    story: "Developed an AI-powered mental wellness companion featuring real-time sentiment detection from social media content through Instagram Reels, initiating therapeutic conversations using Gemini LLM, and delivering empathetic voice responses via Murf AI with voice synthesis and bilingual support (English/Hindi).",
    impact: [
      "Real-time AI sentiment analysis on Instagram Reels using Gemini LLM.",
      "Bilingual voice synthesis companion with English/Hindi voice output.",
      "Empathetic, automated therapeutic conversation trigger logic."
    ],
    longImpact: [
      "Developed an AI-powered mental wellness companion featuring real-time sentiment detection from social media content through Instagram Reels, initiating therapeutic conversations using Gemini LLM, and delivering empathetic voice responses via Murf AI with voice synthesis and bilingual support (English/Hindi).",
      "Real-time sentiment inference from Instagram Reels utilizing Gemini Pro API integrations.",
      "Multilingual natural voice synthesis output (English/Hindi) through Murf AI API.",
      "Robust offline SQLite persistence layer keeping local user conversation histories safe."
    ],
    category: "AI & ML",
    architecture: ["Native Android SDK", "Instagram Reel Integration", "Gemini API SDK", "Murf AI TTS Service", "SQLite Database Layer"],
    challenges: [
      {
        title: "Text-to-Speech Delay Latencies",
        solution: "Developed an asynchronous background worker pool in Java to process sentiment analytics and preload speech chunks concurrently."
      },
      {
        title: "Prompt Context Maintenance",
        solution: "Constructed structured token buffers locally to compile prompt chat histories, keeping mobile token costs within optimal usage parameters."
      }
    ],
    deviceType: "mobile"
  },
  {
    id: "guardian",
    name: "Guardian",
    blurb: "AI surveillance system for video anomaly detection",
    tags: ["Python", "PyTorch", "YOLOv8", "CNN-LSTM", "FastAPI", "WebSockets"],
    accent: "var(--peach)",
    github: "https://github.com/rockstar-2006/Guardian-AI",
    year: "2025",
    month: "Mar",
    story: "Designed and engineered an end-to-end AI-driven surveillance platform that automatically detects high-risk anomalies like fighting, robberies, or accidents in live video streams to enable rapid emergency response.",
    impact: [
      "Automatic anomaly detection for fights, robberies, or accidents.",
      "FastAPI backend & React dashboard for low-latency WebSocket alerts.",
      "Sub-100ms detection push alerts with hybrid YOLOv8 & CNN-LSTM."
    ],
    longImpact: [
      "Designed and engineered an end-to-end AI-driven surveillance platform that automatically detects high-risk anomalies like fighting, robberies, or accidents in live video streams to enable rapid emergency response.",
      "Implemented a hybrid YOLOv8 and CNN-LSTM architecture in PyTorch for temporal video analysis.",
      "Integrated a FastAPI backend with a React dashboard for low-latency, real-time security alerts via WebSockets.",
      "Real-time object spatial checking leveraging multi-threaded YOLOv8 pipelines with sub-100ms push alert latency."
    ],
    category: "AI & ML",
    architecture: ["OpenCV Input", "YOLOv8 & CNN-LSTM (PyTorch)", "FastAPI WebSocket Server", "React Dashboard"],
    challenges: [
      {
        title: "Video Stream Dropping",
        solution: "Established ring buffers locally using Python queues to isolate frames, sustaining 30 FPS inference speeds even under temporary network lag."
      },
      {
        title: "False Positives Filtering",
        solution: "Imposed a double-pass threshold gate filter which cross-validates CNN classification confidence with sequential YOLO tracking states."
      }
    ],
    deviceType: "laptop"
  },
  {
    id: "smartquiz",
    name: "SmartQuiz AI",
    blurb: "Quiz management system with dashboards and auth",
    tags: ["MERN Stack", "Tailwind CSS", "shadcn/ui", "Capacitor", "JWT", "Render"],
    accent: "var(--terracotta)",
    live: "https://faculty-quiz-management-system.vercel.app/",
    github: "https://github.com/rockstar-2006/The-EXAM-EDGE",
    year: "2024",
    month: "Sept",
    story: "Architected a cross-platform system featuring a comprehensive Faculty Dashboard for AI-driven quiz generation and a responsive Student Webview App for optimized mobile quiz delivery built using the MERN stack with Tailwind CSS/shadcn/ui for premium UX, JWT for role-based security and session management, Capacitor (Mobile Webview), and deployed on Vercel.",
    impact: [
      "Faculty Dashboard for AI-driven quiz generation & management.",
      "Responsive Student App built using MERN stack with Tailwind & shadcn/ui.",
      "Capacitor integration for mobile webview wrapper deployment."
    ],
    longImpact: [
      "Architectured a cross-platform system featuring a comprehensive Faculty Dashboard for AI-driven quiz generation and a responsive Student Webview App for optimized mobile quiz delivery built using the MERN stack with Tailwind CSS/shadcn/ui for premium UX, and JWT for role-based security and session management, Capacitor (Mobile Webview) and deployed on Vercel.",
      "Full REST API structures built with Express, routing over 20+ secure quiz endpoints.",
      "Type-safe client-side layouts using React, Tailwind, and local storage managers.",
      "Fully protected routes using client/server JWT authentication signatures with Capacitor mobile webview integration."
    ],
    category: "Web Apps",
    architecture: ["React SPA Client", "Capacitor Mobile Webview", "Node.js & Express API", "MongoDB Database Server", "JWT Session Management"],
    challenges: [
      {
        title: "Preventing Browser Tab Cheats",
        solution: "Created window visibility tracking parameters that log exam tab-swapping, trigger warnings, and auto-submit tests if limits are breached."
      },
      {
        title: "Leaderboard DB Compilation Aggregates",
        solution: "Structured indexation schemes and aggregate query pathways in MongoDB to return scoreboard metrics instantly."
      }
    ],
    deviceType: "laptop"
  },
  {
    id: "ambucare",
    name: "Ambucare+",
    blurb: "Smart ambulance booking system with real-time tracking",
    tags: ["Java", "Android SDK", "Firebase Realtime DB", "Google Maps API", "SMS Manager API"],
    accent: "var(--teal)",
    github: "https://github.com/rockstar-2006/Ambucare_Driver-",
    year: "2024",
    month: "Aug",
    story: "Developed an Android-based emergency response application using Java, Android SDK, Firebase Realtime Database, and Google Maps integration to enable real-time SOS alerts, live location sharing, and nearby hospital navigation.",
    impact: [
      "Google Maps real-time SOS alerts, driver tracking, & nearby navigation.",
      "SMS Manager API integration for automated emergency contacts.",
      "Camera & Gallery API integration for medical report uploads."
    ],
    longImpact: [
      "Developed an Android-based emergency response application using Java, Android SDK, Firebase Realtime Database, and Google Maps integration to enable real-time SOS alerts, live location sharing, and nearby hospital navigation.",
      "The system allows users to send emergency messages via SMS Manager, share medical reports using Camera & Gallery APIs, and interact through Text-to-Speech (TTS) and Lottie animations for improved accessibility and usability.",
      "Designed using Fragment-based architecture, runtime permission handling, and asynchronous processing (Handlers) to ensure smooth performance, reliability, and a seamless user experience during critical situations.",
      "Sub-500ms driver coordinate update relays via Firebase Realtime Database and custom route navigation overlay."
    ],
    category: "Mobile & IoT",
    architecture: ["Android Native App", "Firebase Realtime DB & Storage", "Google Maps Directions API", "SMS Manager & Camera APIs"],
    challenges: [
      {
        title: "Battery Draw of GPS Sampling",
        solution: "Coded dynamic telemetry polling in Android SDK, which decreases coordinate refresh frequency when vehicles are stuck in traffic."
      },
      {
        title: "Offline Sync Collisions",
        solution: "Established a local queue in SQLite to hold driver telemetry records during tunnels or dropouts, auto-syncing them once online."
      }
    ],
    deviceType: "mobile"
  },
  {
    id: "cropmate",
    name: "CropMate",
    blurb: "AI and IoT agriculture system for soil monitoring",
    tags: ["Java", "Android SDK", "Bluetooth IoT", "Gemini AI", "JSON"],
    accent: "var(--peach)",
    live: "https://drive.google.com/drive/folders/1ua5_nZKDWEAQg9HztDV7Z0WU6p-qKaOw",
    github: "https://github.com/rockstar-2006/Cropmate",
    year: "2024",
    month: "Feb",
    story: "Developed an offline-capable Android application that interfaces via Bluetooth with a custom agricultural hardware rover equipped with NPK, pH, moisture, and temperature sensors for instant, on-field soil diagnostics.",
    impact: [
      "Bluetooth connectivity with custom agricultural sensor rover hardware.",
      "Soil analysis models & Gemini AI for multilingual farming insights.",
      "Resilient local JSON fallback for offline remote rural operation."
    ],
    longImpact: [
      "Developed an offline-capable Android application that interfaces via Bluetooth with a custom agricultural hardware rover equipped with NPK, pH, moisture, and temperature sensors for instant, on-field soil diagnostics.",
      "Integrated Machine Learning models and the Google Gemini AI API to dynamically analyze real-time soil data, delivering farmers multi-lingual, precision farming insights on pest control, crop depth, and customized fertilizer schedules.",
      "Engineered a resilient, real-time data pipeline with a local JSON knowledge-base fallback, ensuring continuous hardware connectivity and uninterrupted agricultural assistance in rural areas without internet access."
    ],
    category: "Mobile & IoT",
    architecture: ["BLE Soil Sensor Hardware Rover", "Native Android BLE Client", "Gemini Pro API Advisor", "Local JSON Knowledge-base Fallback"],
    challenges: [
      {
        title: "Sensor BLE Pairing Failures",
        solution: "Engineered an automated reconnect handler routine with exponential delay increments to resolve pairing conflicts."
      },
      {
        title: "Missing Field Internet Signals",
        solution: "Preloaded a basic SQLite prediction matrix on the client app to generate soil diagnostics offline when cell towers are unreachable."
      }
    ],
    deviceType: "mobile"
  }
];

const ALL_PROJECTS: ProjectType[] = [
  ...PROJECTS,
  ...GITHUB_PROJECTS
    .filter(gp => !PROJECTS.some(p => p.id === gp.id || gp.id.includes(p.id)))
    .map((gp) => ({
      id: gp.id,
      name: gp.name,
      blurb: gp.blurb || "GitHub repository showcasing software development.",
      tags: gp.tags,
      accent: gp.language === "TypeScript" ? "var(--terracotta)" : gp.language === "Python" ? "var(--peach)" : "var(--teal)",
      featured: gp.stars > 0,
      live: gp.live || undefined,
      github: gp.github,
      year: gp.created_at.split("-")[0],
      month: new Date(gp.created_at).toLocaleString("en-US", { month: "short" }),
      story: gp.blurb || "GitHub repository showcasing software development.",
      impact: [
        `Primary development language: ${gp.language}`,
        `GitHub stars: ${gp.stars}`,
        `Last updated: ${new Date(gp.updated_at).toLocaleDateString()}`
      ],
      category: gp.language === "Python" ? "AI & ML" 
                : (gp.language === "Java" || gp.tags.some(t => ["android", "mobile", "ios"].includes(t.toLowerCase()))) ? "Mobile & IoT" 
                : "Web Apps",
      architecture: [gp.language, "GitHub VCS"],
      challenges: [
        {
          title: "Repository Initialization",
          solution: "Maintained clean repository architecture and automated builds for production delivery."
        }
      ],
      deviceType: (gp.language === "Java" || gp.tags.some(t => ["android", "mobile", "ios"].includes(t.toLowerCase()))) ? "mobile" as const : "laptop" as const,
      videoUrl: undefined
    }))
];

const ACHIEVEMENTS = [
  { title: "Infosys Project Exhibition – 1st Place", detail: "Infosys Mudipu Campus, Aug 2025" },
  { title: "Anveshana Competitions (National & State)", detail: "Best Project – 2023 (National Level); 1st Place – 2024 (Dharwad & Bangalore); 2nd Place – 2025 (State & National Level); 4th Place – 2026 (National Level)" },
  { title: "Srinivas SIT Envision Hackathon – 1st Place", detail: "Envision Hackathon & Project Expo, May 2025" },
  { title: "JNNCE Hackathon – 1st Place", detail: "Secured first place in Dec 2024 CS Hackathon" },
  { title: "Manipal Poster Competition – 1st Place", detail: "Secured first place in Sep 2024 Poster Competition" },
  { title: "IEEE Eureka Pune – Top 10 Team Selection", detail: "Selected as Top 10 National Finalists, Nov 2024" },
  { title: "Srinivas College Code Meet – 2nd Place", detail: "Hackathon & Paper Presentation, Oct 2024" },
  { title: "Canara College Achievements (2024)", detail: "Paper Presentation – 2nd Place; Hackathon – 2nd Place; Project Expo (Software) – 2nd Place; Poster Presentation (PPC) – 1st Place" },
  { title: "ACU Project Exhibition – 3rd Place (2025 & 2026)", detail: "Adichunchanagiri University Project Exhibition, Feb 2025 & Feb 2026" },
  { title: "Project SoilSense – NAIN 2.0 Funded", detail: "Selected for NAIN 2.0 program with Rs. 5 Lakh funding for product development" },
  { title: "JCE Belagavi MSME Ideathon – 2nd Place", detail: "Secured 2nd place in Belagavi MSME Ideathon (2024)" },
  { title: "Tech Yuva 2024 Ideathon – 2nd Place", detail: "Secured 2nd place in March 2024 Ideathon competition" },
  { title: "SynErgia24 Sahyadri Hackathon – 2nd Place", detail: "Secured 2nd place in Sahyadri Hackathon (08th - 09th NOV 2024)" },
  { title: "JNNCE Paper Presentation & Ideathon – 2nd Place", detail: "Paper Presentation 2nd place, Ideathon 2nd place (02nd - 3rd MAY 2024)" },
  { title: "SystemTron First Year Internship", detail: "Completed Online Frontend Developer Internship (26th Feb – 24th March 2024)" },
  { title: "SMVITM ML Workshop Participant", detail: "Attended Advanced Machine Learning using Python Workshop (26th Oct 2024)" },
  { title: "Java Development Workshop Participant", detail: "Attended Real Time Project Using Java Workshop (26th Oct 2024)" }
];

const LEADERSHIP = [
  { icon: "01", title: "Ideathon Club Coordinator", detail: "Coordinated Ideathon under the Co-curricular & Hobby Project Club at SMVITM Bantakal. Managed 126 participants (63 teams) across two venues (2nd OCT)." },
  { icon: "02", title: "Squid Game Event Coordinator", detail: "Coordinated the Squid Game event for both internal and external sections at Varanothsav 2k25 (12th March – 21st March)." },
  { icon: "03", title: "LAN Party Event Coordinator", detail: "Coordinated the Mini Militia LAN Party event in external competitions at Varanothsav 2k25 (21st March)." },
  { icon: "04", title: "Extracurricular Team Captain", detail: "Leads student groups for Hackathons, Ideathons, Anveshana, Paper Presentations, and Poster Competitions." },
  { icon: "05", title: "ALGORITHM 2024 MC", detail: "Served as Master of Ceremonies (MC) for the ALGORITHM 2024 computer science fest." },
  { icon: "06", title: "Community & Civic Volunteer", detail: "Volunteered at Bantakal Blood Donation Camp (and donor) and volunteer for the General Election Voting registration campaign (2024)." },
  { icon: "07", title: "Hackotsava & Mini Hackathon Mentor", detail: "Mentor and Website Manager for events with 100+ participants, handling website operations, idea submission, and checking in/out." },
  { icon: "08", title: "IEEE CS Association Manager (AMD)", detail: "Served as Association Manager for the IEEE Computer Society, College Chapter." },
  { icon: "09", title: "Event Organizer & Pitch-a-thon Lead", detail: "Led 'Prompt to Product' hackathon with 84 teams and internal/external 'Pitch-a-thon' expo with 23 teams." },
  { icon: "10", title: "Workshop Lead (RAG Chatbots)", detail: "Conducted technical workshops on Retrieval-Augmented Generation (RAG) architecture and live chatbot development." },
  { icon: "11", title: "Varnothsava Tech Coordinator & Web Lead", detail: "Headed all technical operations and website development for the annual college fest platform." },
  { icon: "12", title: "Ignite AI Club Lead", detail: "Led the Ignite AI Club, mentoring students in building AI/ML solutions and practical models." }
];

/* ---------- Shared bits ---------- */

function LaptopMockup({ videoUrl, fallbackImg }: { videoUrl?: string; fallbackImg?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMuteToggle = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleStop = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
    setProgress(0);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    if (duration > 0) {
      setProgress((current / duration) * 100);
    }
  };

  return (
    <div className="relative w-full max-w-[680px] mx-auto select-none">
      {/* Screen Frame */}
      <div className="relative border-[10px] border-[#1e1d1b] rounded-t-2xl bg-[#1e1d1b] shadow-2xl aspect-[16/10] overflow-hidden">
        {/* Webcam */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 z-30 h-1.5 w-1.5 rounded-full bg-zinc-800 flex items-center justify-center">
          <div className="h-0.5 w-0.5 rounded-full bg-blue-900" />
        </div>
        
        {/* Screen Content */}
        <div className="relative w-full h-full bg-[#0c0c0e] overflow-hidden flex flex-col">
          {videoUrl && (
            /* Mock Browser Header */
            <div className="h-6 bg-[#1a1917] border-b border-white/5 flex items-center px-2 gap-2 select-none shrink-0 z-20">
              {/* Dots */}
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
              </div>
              {/* Address Bar */}
              <div className="flex-1 max-w-[280px] mx-auto h-4 bg-black/30 rounded-md flex items-center justify-center px-2 border border-white/5">
                <span className="text-[7px] text-cream/40 font-mono truncate">varnothsava.sode-edu.in</span>
              </div>
            </div>
          )}

          <div className="flex-1 relative bg-[#0c0c0e] overflow-hidden flex items-center justify-center">
            {videoUrl ? (
              <>
                <video
                  ref={videoRef}
                  src={videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                  className="w-full h-full object-contain"
                />
                
                {/* Control bar overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2 z-20">
                  <div className="flex items-center justify-between text-white text-[10px] bg-black/60 backdrop-blur-sm p-1.5 rounded-md gap-2 pointer-events-auto">
                    <button onClick={handlePlayPause} className="hover:text-terracotta transition-colors p-1" title="Play/Pause">
                      {isPlaying ? <Pause className="h-3.5 w-3.5 fill-white text-white" /> : <Play className="h-3.5 w-3.5 fill-white text-white" />}
                    </button>
                    <button onClick={handleStop} className="hover:text-terracotta transition-colors p-1" title="Stop">
                      <Square className="h-3.5 w-3.5 fill-white text-white" />
                    </button>
                    
                    {/* Progress bar */}
                    <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer" onClick={(e) => {
                      if (!videoRef.current) return;
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      const width = rect.width;
                      const newTime = (clickX / width) * videoRef.current.duration;
                      videoRef.current.currentTime = newTime;
                    }}>
                      <div className="h-full bg-terracotta transition-all duration-100" style={{ width: `${progress}%` }} />
                    </div>

                    <button onClick={handleMuteToggle} className="hover:text-terracotta transition-colors p-1" title={isMuted ? "Unmute" : "Mute"}>
                      {isMuted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#262320] to-[#1c1a17] text-cream/40 text-center font-mono">
                {fallbackImg ? (
                  <img src={fallbackImg} className="w-full h-full object-cover" alt="Project screen" />
                ) : (
                  <>
                    <div className="text-[10px] text-terracotta animate-pulse uppercase tracking-wider mb-2 font-sans font-bold">Project Online</div>
                    <div className="text-[8px] opacity-75">SECURE DEVICE PREVIEW</div>
                  </>
                )}
              </div>
            )}
            {/* Glare overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] z-10" />
          </div>
        </div>
      </div>
      
      {/* Laptop Base Hinge */}
      <div className="relative h-2 w-[108%] -left-[4%] bg-gradient-to-b from-[#e5e7eb] to-[#9ca3af] dark:from-[#3f3f46] dark:to-[#18181b] rounded-b-md shadow-lg border-t border-white/20 dark:border-white/5 flex justify-center">
        {/* Notch */}
        <div className="w-16 h-1 bg-[#babcbe] dark:bg-[#27272a] rounded-b-sm" />
      </div>
      <div className="absolute -bottom-1 inset-x-[-2%] h-1 bg-black/25 blur-sm rounded-full" />
    </div>
  );
}

function MobileMockup({ videoUrl, fallbackImg }: { videoUrl?: string; fallbackImg?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMuteToggle = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleStop = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
    setProgress(0);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    if (duration > 0) {
      setProgress((current / duration) * 100);
    }
  };

  return (
    <div className="relative w-[210px] sm:w-[230px] mx-auto select-none">
      {/* Phone Frame */}
      <div className="relative border-[8px] border-[#1e1d1b] rounded-[30px] bg-[#1e1d1b] shadow-2xl aspect-[9/19] overflow-hidden ring-1 ring-white/10">
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 h-4 w-12 rounded-full bg-black flex items-center justify-center">
          <div className="absolute right-3.5 h-1 w-1 rounded-full bg-blue-900" />
        </div>
        
        {/* Screen Content */}
        <div className="relative w-full h-full bg-[#0c0c0e] overflow-hidden rounded-[22px] flex flex-col">
          {videoUrl && (
            /* Mobile Status Bar */
            <div className="h-5 bg-black/25 flex items-center justify-between px-3 text-[7px] text-white/80 font-mono select-none z-10 shrink-0">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-white/80 inline-block" />
                <span className="text-[6px] opacity-75">5G</span>
                <div className="w-3 h-1.5 border border-white/60 rounded-xs p-0.5 flex items-center">
                  <div className="h-full w-full bg-white/80 rounded-3xs" />
                </div>
              </div>
            </div>
          )}

          <div className="flex-1 relative bg-[#0c0c0e] overflow-hidden flex items-center justify-center">
            {videoUrl ? (
              <>
                <video
                  ref={videoRef}
                  src={videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                  className="w-full h-full object-contain"
                />
                
                {/* Control bar overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2 z-20">
                  <div className="flex items-center justify-between text-white text-[9px] bg-black/60 backdrop-blur-sm p-1.5 rounded-md gap-1.5 pointer-events-auto">
                    <button onClick={handlePlayPause} className="hover:text-terracotta transition-colors p-0.5" title="Play/Pause">
                      {isPlaying ? <Pause className="h-3 w-3 fill-white text-white" /> : <Play className="h-3 w-3 fill-white text-white" />}
                    </button>
                    <button onClick={handleStop} className="hover:text-terracotta transition-colors p-0.5" title="Stop">
                      <Square className="h-3 w-3 fill-white text-white" />
                    </button>
                    
                    {/* Progress bar */}
                    <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer" onClick={(e) => {
                      if (!videoRef.current) return;
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      const width = rect.width;
                      const newTime = (clickX / width) * videoRef.current.duration;
                      videoRef.current.currentTime = newTime;
                    }}>
                      <div className="h-full bg-terracotta transition-all duration-100" style={{ width: `${progress}%` }} />
                    </div>

                    <button onClick={handleMuteToggle} className="hover:text-terracotta transition-colors p-0.5" title={isMuted ? "Unmute" : "Mute"}>
                      {isMuted ? <VolumeX className="h-3 w-3" /> : <Volume2 className="h-3 w-3" />}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#262320] to-[#1c1a17] text-cream/40 text-center font-mono">
                {fallbackImg ? (
                  <img src={fallbackImg} className="w-full h-full object-cover" alt="Mobile Screen" />
                ) : (
                  <>
                    <div className="text-[9px] text-teal animate-pulse uppercase tracking-wider mb-2 font-sans font-bold">Mobile App</div>
                    <div className="text-[7px] opacity-75">LIVE APP DEMO</div>
                  </>
                )}
              </div>
            )}
            {/* Glare overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] z-10" />
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="absolute left-[-10px] top-16 w-0.5 h-8 bg-[#1e1d1b] rounded-l-sm" />
      <div className="absolute left-[-10px] top-26 w-0.5 h-8 bg-[#1e1d1b] rounded-l-sm" />
      <div className="absolute right-[-10px] top-20 w-0.5 h-10 bg-[#1e1d1b] rounded-r-sm" />
      
      {/* Bottom Shadow */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4/5 h-2 bg-black/20 blur-md rounded-full" />
    </div>
  );
}

const EASE = [0.22, 1, 0.36, 1] as const;

function SectionHeading({ eyebrow, title, story }: { eyebrow: string; title: string; story?: string }) {
  return (
    <div className="mb-14 text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mb-3 text-xs font-medium uppercase tracking-[0.32em] text-terracotta"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
        className="font-display text-4xl font-bold text-charcoal md:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.18, ease: EASE }}
        className="mx-auto mt-4 h-[2px] w-14 origin-left rounded-full bg-teal"
      />
      {story && <MicroStory text={story} />}
    </div>
  );
}

function MicroStory({ text }: { text: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: EASE }}
      className="mx-auto mt-6 max-w-xl font-display text-base italic leading-relaxed text-charcoal/65 md:text-lg"
    >
      {text}
    </motion.p>
  );
}

function Reveal({ children, delay = 0, x = 0, y = 30 }: { children: ReactNode; delay?: number; x?: number; y?: number }) {
  const isMobile = useIsMobile();
  const targetX = isMobile ? 0 : x;
  const targetY = isMobile ? 12 : y;

  return (
    <motion.div
      initial={{ opacity: 0, x: targetX, y: targetY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: isMobile ? 0 : delay * 0.5, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Immersion: scroll bar + grain + cursor + spotlight ---------- */

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const w = useTransform(scrollYProgress, (v) => `${v * 100}%`);
  return (
    <motion.div
      aria-hidden
      style={{ width: w }}
      className="fixed left-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-terracotta via-peach to-teal"
    />
  );
}

function Grain() {
  const isMobile = useIsMobile();
  if (isMobile) return null;
  const svg =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.18  0 0 0 0 0.16  0 0 0 0 0.14  0 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.35'/></svg>`,
    );
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[55] opacity-[0.07] mix-blend-multiply"
      style={{ backgroundImage: `url("${svg}")`, backgroundSize: "180px 180px" }}
    />
  );
}

function OrganicCursor() {
  const isMobile = useIsMobile();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 350, damping: 28, mass: 0.5 });
  const ry = useSpring(y, { stiffness: 350, damping: 28, mass: 0.5 });
  const dx = useSpring(x, { stiffness: 700, damping: 30, mass: 0.25 });
  const dy = useSpring(y, { stiffness: 700, damping: 30, mass: 0.25 });
  const [mode, setMode] = useState<"idle" | "link" | "tag">("idle");
  const [section, setSection] = useState<"hero" | "skills" | "work" | "contact" | "default">("default");
  const [label, setLabel] = useState<string>("");

  useEffect(() => {
    if (isMobile) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement;
      if (el.closest("[data-cursor='tag']")) setMode("tag");
      else if (el.closest("a, button, [data-cursor='link']")) setMode("link");
      else setMode("idle");
      const sec = el.closest("[data-section]") as HTMLElement | null;
      const s = (sec?.dataset.section as typeof section) || "default";
      setSection(s);
      const customLabel = (el.closest("[data-cursor-label]") as HTMLElement | null)?.dataset.cursorLabel;
      setLabel(customLabel || "");
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y, isMobile]);

  const palette = {
    hero:    { ring: "#C2654A", dot: "#2D2A24", glow: "rgba(194,101,74,0.25)", shape: "circle", verb: "explore" },
    skills:  { ring: "#3A7C7C", dot: "#3A7C7C", glow: "rgba(58,124,124,0.30)", shape: "plus",   verb: "pluck"   },
    work:    { ring: "#E8A87C", dot: "#C2654A", glow: "rgba(232,168,124,0.35)", shape: "square", verb: "open"    },
    contact: { ring: "#3A7C7C", dot: "#C2654A", glow: "rgba(58,124,124,0.25)", shape: "nib",    verb: "write"   },
    default: { ring: "#C2654A", dot: "#2D2A24", glow: "rgba(194,101,74,0.18)", shape: "circle", verb: ""         },
  }[section];

  if (isMobile) return null;

  const ringScale = mode === "link" ? 1.9 : mode === "tag" ? 1.4 : 1;
  const showVerb = mode === "link" && !!palette.verb;
  const radius = palette.shape === "square" ? "4px" : palette.shape === "nib" ? "50% 0 50% 50%" : "9999px";

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: rx, y: ry, background: `radial-gradient(circle, ${palette.glow}, transparent 70%)` }}
        className="pointer-events-none fixed left-0 top-0 z-[59] hidden h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
      />
      <motion.div
        aria-hidden
        style={{ x: rx, y: ry, scale: ringScale, borderColor: palette.ring, borderRadius: radius }}
        transition={{ scale: { duration: 0.25, ease: EASE } }}
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 border-[1.5px] md:block"
      >
        {palette.shape === "plus" && (
          <>
            <span className="absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2" style={{ background: palette.ring }} />
            <span className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2" style={{ background: palette.ring }} />
          </>
        )}
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x: dx, y: dy, background: palette.dot }}
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
      />
      <AnimatePresence>
        {showVerb && (
          <motion.div
            aria-hidden
            key="verb"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.18 }}
            style={{ x: rx, y: ry, background: palette.ring }}
            className="pointer-events-none fixed left-0 top-0 z-[61] ml-6 mt-4 hidden -translate-y-1/2 rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-cream md:block"
          >
            {label || palette.verb}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Spotlight() {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isMobile) return;
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.background = `radial-gradient(620px circle at ${e.clientX}px ${e.clientY}px, rgba(232,168,124,0.18), transparent 55%)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [isMobile]);

  if (isMobile) return null;
  return <div ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-[1]" />;
}

function Magnetic({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });

  if (isMobile) {
    return <div style={{ display: "inline-block" }}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy, display: "inline-block" }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

function Marquee({ items }: { items: string[] }) {
  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-charcoal/10 bg-charcoal py-5 text-cream w-full"
      style={{ transform: "rotate(-1.2deg)", marginLeft: "-2%", width: "104%" }}
    >
      <div className="flex w-max shrink-0 animate-marquee-scroll">
        {/* Track 1 */}
        <div className="flex items-center gap-12 pr-12 whitespace-nowrap font-display text-2xl italic">
          {items.map((t, i) => (
            <span key={i} className="flex items-center gap-12">
              <span>{t}</span>
              <span className="text-peach">*</span>
            </span>
          ))}
        </div>
        {/* Track 2 */}
        <div className="flex items-center gap-12 pr-12 whitespace-nowrap font-display text-2xl italic" aria-hidden="true">
          {items.map((t, i) => (
            <span key={i} className="flex items-center gap-12">
              <span>{t}</span>
              <span className="text-peach">*</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function NowWidget() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const fmt = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        timeZone: "Asia/Kolkata",
        hour12: true,
      });
      setTime(fmt.format(new Date()));
    };
    tick();
    const i = setInterval(tick, 30000);
    return () => clearInterval(i);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6, ease: EASE }}
      className="fixed bottom-5 right-5 md:right-20 z-40 hidden items-center gap-3 rounded-full border border-charcoal/10 bg-white/85 px-4 py-2.5 shadow-warm backdrop-blur-md md:flex dark:bg-card/85"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-teal" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
      </span>
      <span className="font-mono text-[11px] text-charcoal/70">
        Udupi · {time || "—"} · open to work
      </span>
    </motion.div>
  );
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsVisible(latest > 300);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });
  const strokeDashoffset = useTransform(pathLength, (v) => 100 - v * 100);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 15 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/10 bg-white/90 text-charcoal shadow-warm backdrop-blur-sm transition-colors hover:border-terracotta hover:text-terracotta dark:bg-card/90 dark:border-border/30 cursor-pointer"
          aria-label="Scroll to top"
        >
          <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-charcoal/5 dark:text-cream/5"
            />
            <motion.circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="100"
              style={{
                strokeDashoffset,
              }}
              className="text-terracotta"
            />
          </svg>
          <ArrowUp className="h-4 w-4 relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function FloatingMusicPlayer({ loadingComplete }: { loadingComplete: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted,   setIsMuted]   = useState(false);
  const [volume,    setVolume]    = useState(0.35);
  const [expanded,  setExpanded]  = useState(false);
  const audioRef   = useRef<HTMLAudioElement | null>(null);
  const unmuteDone = useRef(false); // guard so the unmute only runs once

  // Unmute and play once the loading screen completes
  useEffect(() => {
    if (!loadingComplete) return;
    const audio = audioRef.current;
    if (!audio || unmuteDone.current) return;

    unmuteDone.current = true;
    
    // Function to try to play and unmute
    const startAudio = () => {
      audio.muted = false;
      audio.play().then(() => {
        setIsPlaying(true);
        // Ramp up volume
        let v = 0;
        audio.volume = 0;
        const ramp = setInterval(() => {
          v = Math.min(v + 0.02, 0.35);
          audio.volume = v;
          setVolume(parseFloat(v.toFixed(2)));
          if (v >= 0.35) clearInterval(ramp);
        }, 25);
        cleanup();
      }).catch((err) => {
        console.log("Autoplay blocked, waiting for user gesture:", err);
      });
    };

    const handleGesture = () => {
      startAudio();
    };

    const cleanup = () => {
      window.removeEventListener("click", handleGesture);
      window.removeEventListener("touchstart", handleGesture);
      window.removeEventListener("keydown", handleGesture);
    };

    // Try immediately
    startAudio();

    // Setup fallback listeners for first interaction
    window.addEventListener("click", handleGesture);
    window.addEventListener("touchstart", handleGesture);
    window.addEventListener("keydown", handleGesture);

    return () => cleanup();
  }, [loadingComplete]);

  // ── Play / Pause ── directly controls the audio element
  const handlePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  // ── Mute ── directly controls the audio element
  const handleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;
    const next = !isMuted;
    audio.muted = next;
    setIsMuted(next);
  };

  // ── Volume slider ── directly controls the audio element
  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const audio = audioRef.current;
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (audio) {
      audio.volume = v;
      if (v > 0 && isMuted) {
        audio.muted = false;
        setIsMuted(false);
      }
    }
  };

  const BARS = [0.5, 1, 0.65, 0.85, 0.55];

  return (
    <motion.div
      initial={{ y: 64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-6 left-4 z-50 select-none"
      style={{ touchAction: "manipulation" }}
    >
      {/* autoPlay + muted → browser always allows muted autoplay */}
      <audio
        ref={audioRef}
        src="/ambient.mp3"
        autoPlay
        muted
        loop
        preload="auto"
        style={{ display: "none" }}
      />

      {/* Pill — hover/tap to expand */}
      <motion.div
        animate={{ width: expanded ? 232 : 110 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="flex h-11 items-center overflow-hidden rounded-full border border-white/40 bg-white/85 shadow-[0_6px_28px_rgba(0,0,0,0.14)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#1c1a17]/90"
        style={{ paddingLeft: 6, paddingRight: 6 }}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        onClick={(e) => { e.stopPropagation(); setExpanded(p => !p); }}
      >
        {/* Play / Pause */}
        <button
          onClickCapture={handlePlayPause}
          aria-label={isPlaying ? "Pause music" : "Play music"}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-terracotta text-white shadow-sm transition-transform duration-150 hover:scale-105 active:scale-90 cursor-pointer"
        >
          {isPlaying
            ? <Pause className="h-[11px] w-[11px]" />
            : <Play  className="h-[12px] w-[12px] translate-x-[1px]" />
          }
        </button>

        {/* Waveform bars */}
        <div
          aria-hidden
          className="mx-[10px] flex shrink-0 items-end gap-[3px]"
          style={{ height: 18 }}
        >
          {BARS.map((scale, i) => (
            <motion.span
              key={i}
              style={{
                display: "block",
                width: 3,
                height: 18,
                borderRadius: 99,
                background: "#3A7C7C",
                transformOrigin: "bottom",
                willChange: "transform",
              }}
              animate={
                isPlaying && !isMuted
                  ? { scaleY: [scale * 0.25, scale, scale * 0.5, scale * 0.88, scale * 0.25] }
                  : { scaleY: 0.18 }
              }
              transition={{
                duration: 0.78 + i * 0.12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1,
                repeatType: "loop",
              }}
            />
          ))}
        </div>

        {/* Mute button */}
        <button
          onClickCapture={handleMute}
          aria-label={isMuted ? "Unmute music" : "Mute music"}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-charcoal/60 transition-colors duration-150 hover:bg-charcoal/10 hover:text-terracotta active:scale-90 dark:text-cream/60 cursor-pointer"
        >
          {isMuted
            ? <VolumeX className="h-[15px] w-[15px]" />
            : <Volume2 className="h-[15px] w-[15px]" />
          }
        </button>

        {/* Volume slider (only when expanded) */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              key="vol"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 68 }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="ml-1 shrink-0 overflow-hidden flex items-center"
              style={{ height: 44 }}
              onClickCapture={(e) => e.stopPropagation()}
            >
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={isMuted ? 0 : volume}
                onChange={handleVolume}
                aria-label="Volume"
                className="w-[64px] cursor-pointer accent-terracotta"
                style={{ height: 4 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Track label */}
      <AnimatePresence>
        {isPlaying && (
          <motion.p
            key="lbl"
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            aria-hidden
            className="mt-1.5 text-center font-mono text-[9px] uppercase tracking-[0.18em] text-charcoal/38 dark:text-cream/32"
          >
            {isMuted ? "🔇 muted" : "♩ calm piano · looping"}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}


/* ---------- Sections ---------- */

function Nav({ theme, toggleTheme }: { theme: "light" | "dark"; toggleTheme: () => void }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md border-b border-charcoal/10" style={{ background: theme === "dark" ? "rgba(18,17,14,0.75)" : "rgba(253,248,243,0.75)" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3 group">
          {/* Geometric BP Monogram Logo */}
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:rotate-12">
            <polygon points="18,2 34,10 34,26 18,34 2,26 2,10" fill="#C2654A" opacity="0.12" />
            <polygon points="18,2 34,10 34,26 18,34 2,26 2,10" stroke="#C2654A" strokeWidth="1.5" fill="none" />
            <polygon points="18,8 28,13 28,23 18,28 8,23 8,13" stroke="#3A7C7C" strokeWidth="1" fill="none" opacity="0.5" />
            <text x="18" y="22" textAnchor="middle" fontFamily="serif" fontWeight="bold" fontSize="12" fill="currentColor" className="text-charcoal" letterSpacing="-1">BP</text>
          </svg>
          <span className="font-display text-xl font-bold tracking-tight text-charcoal">
            bhushan<span className="text-terracotta">.</span>
          </span>
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-charcoal/70 md:flex">
          <a href="#work" className="hover:text-terracotta transition-colors">Work</a>
          <a href="#experience" className="hover:text-terracotta transition-colors">Journey</a>
          <a href="#achievements" className="hover:text-terracotta transition-colors">Wins</a>
          <a href="#contact" className="hover:text-terracotta transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="grid h-8 w-8 place-items-center rounded-full border border-charcoal/20 text-charcoal hover:border-terracotta hover:text-terracotta transition-all cursor-pointer"
            aria-label="Toggle theme"
            data-cursor="link"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Moon className="h-4 w-4" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Sun className="h-4 w-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          <a
            href="/Bhushan Poojary.pdf"
            download="Bhushan_Poojary_Resume.pdf"
            className="hidden items-center gap-1.5 rounded-full border border-charcoal/20 px-3.5 py-1.5 text-xs font-medium text-charcoal transition-all hover:border-terracotta hover:text-terracotta md:inline-flex"
          >
            Resume.pdf
          </a>
          <button
            onClick={openCalendly}
            className="rounded-full bg-terracotta px-4 py-2 text-xs font-medium text-cream transition-transform hover:-translate-y-0.5 cursor-pointer"
          >
            Schedule Call
          </button>
          <a
            href="#contact"
            className="rounded-full bg-charcoal px-4 py-2 text-xs font-medium text-cream transition-transform hover:-translate-y-0.5"
          >
            Say hi
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yIllu = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const rotIllu = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const opacityIllu = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spx = useSpring(px, { stiffness: 80, damping: 20 });
  const spy = useSpring(py, { stiffness: 80, damping: 20 });
  const tx1 = useTransform(spx, (v) => v * 18);
  const ty1 = useTransform(spy, (v) => v * 18);
  const tx2 = useTransform(spx, (v) => v * -28);
  const ty2 = useTransform(spy, (v) => v * -28);

  const nameWords = ["Bhushan", "Poojary"];

  return (
    <section
      id="top"
      data-section="hero"
      ref={ref}
      onMouseMove={(e) => {
        if (isMobile) return;
        const r = ref.current!.getBoundingClientRect();
        px.set((e.clientX - r.left - r.width / 2) / r.width);
        py.set((e.clientY - r.top - r.height / 2) / r.height);
      }}
      className="relative overflow-hidden px-6 pb-32 pt-12 md:pt-20"
    >
      {/* organic blobs */}
      <div
        aria-hidden
        className="animate-blob absolute -right-32 -top-20 h-[480px] w-[480px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, #E8A87C 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="animate-blob absolute -left-32 top-40 h-[360px] w-[360px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #3A7C7C 0%, transparent 70%)", animationDelay: "3s" }}
      />

      {/* Faint rule lines, editorial feel */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-32 mx-auto hidden h-px max-w-6xl bg-charcoal/10 md:block" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-40 mx-auto hidden h-px max-w-6xl bg-charcoal/10 md:block" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-12">
        {/* Details column (order-2 on mobile, md:order-1 on desktop) */}
        <div className="order-2 md:order-1 md:col-span-7">
          <div className="mb-5 flex items-center gap-3">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="h-px w-10 origin-left bg-terracotta"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xs font-medium uppercase tracking-[0.4em] text-terracotta"
            >
              Hello, I'm
            </motion.p>
            <span className="font-mono text-[11px] text-charcoal/40">No. 01 / Portfolio</span>
          </div>

          {/* Word-by-word name reveal with mask */}
          <h1 className="font-display text-5xl font-bold leading-[1.02] text-charcoal md:text-7xl">
            {nameWords.map((w, i) => (
              <span key={w} className={`mr-3 inline-block overflow-hidden align-bottom pb-4 -mb-4 ${i === 1 ? "pr-6" : ""}`}>
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease: EASE }}
                  className={`inline-block pb-4 ${i === 1 ? "text-gradient-warm italic pr-4" : ""}`}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <div className="mt-6 overflow-hidden">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
              className="max-w-lg font-display text-xl italic text-charcoal/75 md:text-2xl"
            >
              AI &amp; Data Science Undergraduate
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-terracotta/20 bg-white/70 px-4 py-2 text-sm text-charcoal shadow-warm backdrop-blur-sm dark:bg-card/70"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-terracotta" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-terracotta" />
            </span>
            <span className="font-mono text-xs">Currently building</span>
            <span className="font-mono text-xs font-semibold text-terracotta">Journeybuddy.ai</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-sm font-medium text-cream shadow-warm transition-shadow hover:shadow-warm-lg"
              >
                See My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-medium text-cream hover:bg-teal/90 shadow-warm transition-colors cursor-pointer"
              >
                Schedule a Meeting
              </button>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-6 py-3 text-sm font-medium text-charcoal/70 transition-colors hover:border-terracotta hover:text-terracotta cursor-pointer dark:text-cream/70 dark:border-white/20"
              >
                Send Message
              </a>
            </Magnetic>
          </motion.div>

          {/* Hero Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="mt-6 flex flex-wrap items-center gap-5 text-charcoal/70 dark:text-cream/70"
          >
            <a
              href="https://www.linkedin.com/in/bhushan-poojary-26a717296/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-terracotta transition-colors p-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/rockstar-2006"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-terracotta transition-colors p-1"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://leetcode.com/u/NyYdc4RBn5/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-terracotta transition-colors p-1"
              aria-label="LeetCode"
            >
              <LeetCodeIcon className="h-5 w-5 text-charcoal dark:text-cream hover:text-terracotta dark:hover:text-terracotta transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/_vinu_.4/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-terracotta transition-colors p-1"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="mailto:bhushan.poojary2006@gmail.com"
              className="hover:text-terracotta transition-colors p-1"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: EASE }}
            className="mt-12 grid max-w-md grid-cols-3 divide-x divide-charcoal/10"
          >
            {[
              { v: "500+", l: "Users shipped" },
              { v: "5+", l: "Hackathon wins" },
              { v: "Rs. 5L", l: "NAIN 2.0 funded" },
            ].map((s) => (
              <div key={s.l} className="px-4 first:pl-0">
                <p className="font-display text-2xl font-bold text-charcoal">{s.v}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-charcoal/55">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Circular Telemetry Profile Photo Widget (order-1 on mobile, md:order-2 on desktop) */}
        <div className="order-1 md:order-2 md:col-span-5 relative flex items-center justify-center py-6 md:py-0">
          <motion.div
            style={{ y: yIllu, rotate: rotIllu, opacity: opacityIllu }}
            className="relative flex h-[280px] w-[280px] items-center justify-center md:h-[310px] md:w-[310px]"
          >
            {/* Outer rotating dashed ring */}
            <motion.div 
              style={isMobile ? {} : { x: tx1, y: ty1 }}
              className="animate-rotate-cw absolute inset-0 rounded-full border border-dashed border-terracotta/40" 
            />
            
            {/* Middle rotating tech ring */}
            <motion.div 
              style={isMobile ? {} : { x: tx2, y: ty2 }}
              className="animate-rotate-ccw absolute inset-3 rounded-full border border-charcoal/10"
            >
              <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-teal shadow-warm" />
              <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-teal shadow-warm" />
            </motion.div>
 
            {/* Static alignment guides */}
            <div className="absolute inset-6 rounded-full border border-charcoal/5">
              <div className="absolute -left-1 top-1/2 h-px w-2 -translate-y-1/2 bg-charcoal/20" />
              <div className="absolute -right-1 top-1/2 h-px w-2 -translate-y-1/2 bg-charcoal/20" />
              <div className="absolute -top-1 left-1/2 h-2 w-px -translate-x-1/2 bg-charcoal/20" />
              <div className="absolute -bottom-1 left-1/2 h-2 w-px -translate-x-1/2 bg-charcoal/20" />
            </div>
 
            {/* Inner frame wrapper */}
            <div className="absolute inset-9 rounded-full border border-terracotta/20 bg-cream/30 shadow-[0_0_24px_rgba(194,101,74,0.05)] backdrop-blur-[2px]" />
 
            {/* Profile Photo Wrapper */}
            <div className="relative h-[165px] w-[165px] overflow-hidden rounded-full border-4 border-cream ring-4 ring-terracotta shadow-warm md:h-[185px] md:w-[185px] group cursor-none">
              <img 
                src="/profile.png" 
                alt="Bhushan Poojary" 
                className="h-full w-full object-cover object-[center_17%] scale-[1.15] transition-transform duration-700 ease-out group-hover:scale-[1.25]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=240&h=240";
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-terracotta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-color-dodge" />
            </div>

            {/* Orbiting Tech Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 4 }}
              transition={{ delay: 1.1, duration: 0.6, ease: EASE }}
              className="absolute bottom-4 left-0 max-w-[150px] rounded-md border border-charcoal/10 bg-peach/95 p-2.5 font-mono text-[9px] leading-snug text-charcoal shadow-warm backdrop-blur-sm"
              style={{ transform: "rotate(4deg)" }}
            >
              <p className="font-bold uppercase tracking-wider text-charcoal/60">About</p>
              <p className="mt-0.5">SMVITM, Udupi</p>
              <p>AI &amp; DS · 2027</p>
            </motion.div>

            <div className="pointer-events-none absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-charcoal/10 bg-cream/95 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-charcoal shadow-warm backdrop-blur-sm dark:bg-card/95">
              Udupi · Open to Work
            </div>
          </motion.div>
        </div>
      </div>

      {/* organic divider */}
      <svg viewBox="0 0 1440 80" className="absolute bottom-0 left-0 w-full text-cream-tint" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,40 C360,90 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,80 L0,80 Z" />
      </svg>
    </section>
  );
}

/* ---------- Skills ---------- */

const CATEGORY_META: Record<string, { color: string; label: string; bg: string }> = {
  Languages:  { color: "#C2654A", label: "Languages",  bg: "rgba(194,101,74,0.07)" },
  Frameworks: { color: "#3A7C7C", label: "Frameworks", bg: "rgba(58,124,124,0.07)" },
  Tools:      { color: "#E8A87C", label: "Tools",       bg: "rgba(232,168,124,0.07)" },
  Databases:  { color: "#2D2A24", label: "Databases",   bg: "rgba(45,42,36,0.05)" },
};

type HexSkill = SkillNode & { category: string };
const HEX_SKILLS: HexSkill[] = [
  { name: "Python", level: 92, note: "AI workflows, data scripts, and FastAPI services", category: "Languages" },
  { name: "Java", level: 86, note: "Android apps and SDK-based mobile builds", category: "Languages" },
  { name: "JavaScript", level: 88, note: "DOM logic, APIs, and production frontends", category: "Languages" },
  { name: "TypeScript", level: 84, note: "Type-safe React and Next.js applications", category: "Languages" },
  { name: "SQL", level: 80, note: "Relational queries, reporting, and schema design", category: "Languages" },
  { name: "Dart", level: 70, note: "Cross-platform mobile foundations", category: "Languages" },
  { name: "React", level: 90, note: "Component systems and interactive UI", category: "Frameworks" },
  { name: "Next.js", level: 86, note: "SSR, routing, and deploy-ready web apps", category: "Frameworks" },
  { name: "FastAPI", level: 84, note: "Python APIs, WebSockets, and AI service layers", category: "Frameworks" },
  { name: "Django", level: 76, note: "Structured backend development", category: "Frameworks" },
  { name: "Flask", level: 78, note: "Lightweight Python APIs and prototypes", category: "Frameworks" },
  { name: "Express", level: 80, note: "REST APIs for MERN workflows", category: "Frameworks" },
  { name: "Firebase", level: 88, note: "Auth, Firestore, hosting, and real-time apps", category: "Tools" },
  { name: "Git & GitHub", level: 90, note: "Version control, collaboration, and repo delivery", category: "Tools" },
  { name: "Docker", level: 78, note: "Containerized app environments", category: "Tools" },
  { name: "Android Studio", level: 82, note: "Native Android development and testing", category: "Tools" },
  { name: "Vercel", level: 86, note: "Frontend deployment and previews", category: "Tools" },
  { name: "Render", level: 78, note: "Backend deployment and service hosting", category: "Tools" },
  { name: "MySQL", level: 80, note: "Relational database design and queries", category: "Databases" },
  { name: "MongoDB", level: 78, note: "Document data models and aggregation", category: "Databases" },
  { name: "Firestore", level: 86, note: "NoSQL schemas, RBAC, and real-time data", category: "Databases" },
];

const TECH_LOGOS: Record<string, string> = {
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  Dart: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  FastAPI: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  Django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
  "Git & GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Android Studio": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
  Vercel: "https://cdn.simpleicons.org/vercel/000000",
  Render: "https://cdn.simpleicons.org/render/46E3B7",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Firestore: "https://cdn.simpleicons.org/firebase/FFCA28",
};

function TechLogo({ name }: { name: string }) {
  return (
    <img
      src={TECH_LOGOS[name]}
      alt={`${name} logo`}
      loading="lazy"
      className="h-12 w-12 object-contain drop-shadow-[0_10px_18px_rgba(45,42,36,0.12)] md:h-14 md:w-14"
    />
  );
}

function HexCell({
  skill,
  index,
  onHover,
  dimmed,
  highlighted,
}: {
  skill: HexSkill;
  index: number;
  onHover: (s: HexSkill | null) => void;
  dimmed: boolean;
  highlighted: boolean;
}) {
  const meta = CATEGORY_META[skill.category];
  const isExpert = skill.level >= 90;
  const clipHex = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: dimmed ? 0.2 : 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut", delay: isMobile ? 0 : (index % 6) * 0.015 }}
      className={`flex h-full min-w-0 flex-col items-center justify-start gap-3 transition-opacity duration-300 ${dimmed ? "opacity-20 pointer-events-none" : "opacity-100"}`}
    >
      {/* Floating inner wrapper */}
      <motion.div
        animate={isMobile ? {} : { y: [0, -5, 0] }}
        transition={{
          duration: 3.2 + (index % 5) * 0.35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2,
        }}
        whileHover={{ y: -8, scale: 1.06, zIndex: 30 }}
        onMouseEnter={() => onHover(skill)}
        onMouseLeave={() => onHover(null)}
        className="relative h-[118px] w-[104px] cursor-pointer md:h-[150px] md:w-[132px]"
      >
        {/* Glow ring */}
        {(isExpert || highlighted) && (
          <motion.div
            className="absolute inset-[-8px]"
            style={{ clipPath: clipHex, background: meta.color, filter: "blur(6px)" }}
            animate={isMobile ? {} : { opacity: highlighted ? [0.4, 0.9, 0.4] : [0, 0.4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.28 }}
          />
        )}
        {/* Hex body */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: clipHex,
            background: `linear-gradient(145deg, white 10%, ${meta.color}28 60%, ${meta.color}18 100%)`,
          }}
        />
        {/* Hex border */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: clipHex,
            boxShadow: `inset 0 0 0 ${highlighted ? "2.5px" : "1.5px"} ${meta.color}${highlighted ? "" : "60"}`,
          }}
        />
        {/* Level indicator */}
        <div
          className="absolute left-0 right-0 bottom-0"
          style={{
            clipPath: clipHex,
            height: `${skill.level * 0.7}%`,
            background: `linear-gradient(180deg, transparent 0%, ${meta.color}25 100%)`,
          }}
        />
        {/* Tech logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white/72 shadow-[0_12px_28px_rgba(45,42,36,0.09)] backdrop-blur-sm md:h-20 md:w-20 dark:bg-card/72">
            <TechLogo name={skill.name} />
          </div>
        </div>
        {/* Expert indicator */}
        {isExpert && (
          <motion.div
            className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full ring-2 ring-cream-tint"
            style={{ background: meta.color }}
            animate={isMobile ? {} : { scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
          />
        )}
      </motion.div>

      {/* Label */}
      <div className="text-center leading-tight">
        <p
          className="max-w-[8.5rem] text-wrap font-mono text-[10px] font-bold uppercase tracking-widest"
          style={{ color: meta.color }}
        >
          {skill.name}
        </p>
      </div>
    </motion.div>
  );
}

function Skills() {
  const [hovered, setHovered] = useState<HexSkill | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const cats = Object.keys(CATEGORY_META);

  const catCounts = cats.reduce<Record<string, number>>((acc, c) => {
    acc[c] = HEX_SKILLS.filter(s => s.category === c).length;
    return acc;
  }, {});

  return (
    <section data-section="skills" id="skills" className="relative overflow-hidden bg-cream-tint px-6 pt-28 pb-14">
      <div aria-hidden className="pointer-events-none absolute -left-40 -top-20 h-[500px] w-[500px] rounded-full opacity-25 blur-3xl"
           style={{ background: "radial-gradient(circle, #C2654A 0%, transparent 65%)" }} />
      <div aria-hidden className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full opacity-20 blur-3xl"
           style={{ background: "radial-gradient(circle, #3A7C7C 0%, transparent 65%)" }} />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="My Tech Stack"
          story="A practical set of technologies shaped by building web applications, mobile platforms, and AI prototypes."
        />

        {/* Search bar */}
        <div className="mx-auto mb-12 max-w-md">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-charcoal/35">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder="Search stack (e.g. Python, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 rounded-full border border-charcoal/15 bg-white/70 backdrop-blur-sm outline-none font-sans text-xs transition-all focus:border-terracotta focus:ring-1 focus:ring-terracotta/20 text-charcoal dark:bg-card/70"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-charcoal/35 hover:text-terracotta"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category legend */}
        <div className="mb-14 flex flex-wrap justify-center gap-6">
          {cats.map((c) => {
            const cm = CATEGORY_META[c];
            const isHovered = hoveredCategory === c;
            return (
              <div
                key={c}
                onMouseEnter={() => setHoveredCategory(c)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`flex items-center gap-2.5 cursor-pointer transition-all duration-300 p-1.5 rounded-lg ${isHovered ? "bg-white/80 shadow-warm scale-105 dark:bg-card/80" : "hover:scale-105"}`}
              >
                <div className="h-4 w-4 flex-shrink-0"
                  style={{ background: cm.color, clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
                <span className="font-mono text-xs text-charcoal/65 uppercase tracking-wider">
                  {c} <span className="text-charcoal/30">({catCounts[c]})</span>
                </span>
              </div>
            );
          })}
          <div className="flex items-center gap-2">
            <motion.div className="h-3 w-3 rounded-full flex-shrink-0" style={{ background: "#C2654A" }}
              animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
            <span className="font-mono text-xs text-charcoal/55 uppercase tracking-wider">Expert</span>
          </div>
        </div>

        {/* Honeycomb grid */}
        <div className="relative mx-auto grid max-w-6xl select-none grid-cols-2 place-items-center gap-x-5 gap-y-9 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {HEX_SKILLS.map((skill, skillIdx) => {
            const matchesSearch = searchQuery === "" || skill.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = hoveredCategory === null || skill.category === hoveredCategory;
            const isDimmed = !matchesSearch || !matchesCategory;
            const isHighlighted = searchQuery !== "" && skill.name.toLowerCase().includes(searchQuery.toLowerCase());

            return (
              <HexCell
                key={skill.name}
                skill={skill}
                index={skillIdx}
                onHover={setHovered}
                dimmed={isDimmed}
                highlighted={isHighlighted}
              />
            );
          })}
        </div>

        {/* Premium hover detail card */}
        <div className="mx-auto mt-14 max-w-2xl" style={{ minHeight: 130 }}>
          <AnimatePresence mode="wait">
            {hovered ? (
              <motion.div
                key={hovered.name}
                initial={{ opacity: 0, y: 18, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.96 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="relative overflow-hidden rounded-3xl"
                style={{
                  background: `linear-gradient(135deg, white 50%, ${CATEGORY_META[hovered.category].color}12 100%)`,
                  border: `1px solid ${CATEGORY_META[hovered.category].color}45`,
                  boxShadow: `0 24px 60px ${CATEGORY_META[hovered.category].color}22, 0 4px 16px rgba(0,0,0,0.06)`,
                }}
              >
                <div className="flex items-center gap-6 p-7">
                  <div className="relative flex-shrink-0" style={{ width: 80, height: 92 }}>
                    <div className="absolute inset-0" style={{
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      background: `linear-gradient(145deg, ${CATEGORY_META[hovered.category].color}30, ${CATEGORY_META[hovered.category].color}65)`,
                    }} />
                    <div className="absolute inset-0 flex items-center justify-center p-5">
                      <TechLogo name={hovered.name} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-display text-2xl font-bold text-charcoal">{hovered.name}</h4>
                        <p className="font-mono text-[11px] uppercase tracking-[0.3em] mt-0.5"
                           style={{ color: CATEGORY_META[hovered.category].color }}>
                          {hovered.category}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="font-mono text-sm font-bold uppercase tracking-wider"
                           style={{ color: CATEGORY_META[hovered.category].color }}>
                          {hovered.level >= 90 ? "Expert" : hovered.level >= 75 ? "Proficient" : "Familiar"}
                        </p>
                      </div>
                    </div>
                    {/* Animated proficiency bar */}
                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-charcoal/8">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${CATEGORY_META[hovered.category].color}77, ${CATEGORY_META[hovered.category].color})` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${hovered.level}%` }}
                        transition={{ duration: 0.75, ease: EASE }}
                      />
                    </div>
                    <p className="mt-3 font-display text-sm italic text-charcoal/60 leading-relaxed">
                      {hovered.note}
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center rounded-3xl border border-dashed border-charcoal/12 py-10"
              >
                <p className="font-display text-base italic text-charcoal/30">
                  Hover any hexagon to explore the skill
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

/* ---------- Experience ---------- */

function Experience() {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.6"] });
  const pathLen = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" ref={ref} className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Work Experience"
          title="Professional Journey"
          story="Hands-on experience building platforms, working with product teams, and delivering clean frontend and backend code."
        />

        <div className="relative">
          {/* scroll-drawn wavy line */}
          <svg className="pointer-events-none absolute left-0 top-0 hidden h-full w-full md:block" preserveAspectRatio="none" viewBox="0 0 800 800">
            <path d="M100,80 C400,160 600,40 700,200 C800,360 200,400 100,560 C0,720 500,700 700,760" fill="none" stroke="#C2654A" strokeWidth="2" strokeDasharray="6 8" opacity="0.18" />
            <motion.path
              d="M100,80 C400,160 600,40 700,200 C800,360 200,400 100,560 C0,720 500,700 700,760"
              fill="none"
              stroke="#C2654A"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ pathLength: pathLen }}
            />
          </svg>

          <div className="space-y-10">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={e.company} delay={i * 0.05} x={i % 2 === 0 ? -30 : 30}>
                <div className={`md:flex ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                  <div
                    className="relative w-full max-w-xl rounded-2xl bg-white p-6 shadow-warm md:p-8 dark:bg-card"
                    style={isMobile ? {} : { transform: `rotate(${i % 2 === 0 ? "-1.2deg" : "1.5deg"})` }}
                  >
                    <div className="mb-4 flex items-start gap-4">
                      <div
                        className="grid h-12 w-12 shrink-0 place-items-center rounded-full font-mono text-sm font-bold text-cream"
                        style={{ background: e.color }}
                      >
                        {e.initials}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-display text-xl font-bold text-charcoal">{e.role}</h3>
                        <p className="text-sm text-teal">{e.company} | <span className="font-mono text-xs text-charcoal/60">{e.date}</span></p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-charcoal/80">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 h-[2px] w-3 shrink-0 bg-terracotta" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING...");
  const [isComplete, setIsComplete] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            if (onComplete) onComplete();
            setTimeout(() => setVisible(false), 900);
          }, 500);
          return 100;
        }

        const next = prev + 1;

        if (next === 25) setStatusText("PREPARING STACK...");
        if (next === 50) setStatusText("COMPILING PROJECTS...");
        if (next === 75) setStatusText("CALIBRATING INTERFACE...");
        if (next === 95) setStatusText("SYSTEM READY...");

        return next;
      });
    }, 14);

    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  const radius = 50;
  const strokeWidth = 3;
  const circ = 2 * Math.PI * radius;
  const strokeDashoffset = circ * (1 - progress / 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none select-none">
      {/* Sliding Upper Panel */}
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: isComplete ? "-100%" : "0%" }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        className="absolute top-0 left-0 w-full h-[50vh] bg-[#12110e] flex flex-col justify-end items-center pointer-events-auto"
      >
        {/* Faint blueprint lines in background */}
        <div className="absolute inset-0 blueprint-grid opacity-[0.03]" />
        <div className="absolute inset-0 tech-dot-grid opacity-[0.05]" />
      </motion.div>

      {/* Sliding Lower Panel */}
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: isComplete ? "100%" : "0%" }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        className="absolute bottom-0 left-0 w-full h-[50vh] bg-[#12110e] pointer-events-auto"
      >
        {/* Faint blueprint lines in background */}
        <div className="absolute inset-0 blueprint-grid opacity-[0.03]" />
        <div className="absolute inset-0 tech-dot-grid opacity-[0.05]" />
      </motion.div>

      {/* Floating Center Tech HUD Overlay */}
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: isComplete ? 0 : 1, scale: isComplete ? 0.9 : 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-[#fdf8f3]"
      >
        <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
          {/* Pulsing circular glow background */}
          <div className="absolute h-64 w-64 rounded-full bg-terracotta/[0.04] blur-3xl animate-pulse" />

          {/* Premium Circular Loader */}
          <div className="relative flex h-32 w-32 items-center justify-center">
            {/* SVG Progress Ring */}
            <svg className="absolute inset-0 h-full w-full rotate-[-90deg]" viewBox="0 0 112 112">
              <circle
                cx="56"
                cy="56"
                r={radius}
                stroke="rgba(253, 248, 243, 0.05)"
                strokeWidth={strokeWidth}
                fill="none"
              />
              <motion.circle
                cx="56"
                cy="56"
                r={radius}
                stroke="var(--terracotta)"
                strokeWidth={strokeWidth}
                strokeDasharray={circ}
                animate={{ strokeDashoffset }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            {/* Logo Text inside the circle */}
            <div className="font-display text-2xl font-bold tracking-tighter text-[#fdf8f3]">
              BP<span className="text-terracotta">.</span>
            </div>
          </div>

          <span className="mt-8 font-mono text-[10px] tracking-[0.3em] text-terracotta font-bold">
            {String(progress).padStart(3, "0")}%
          </span>

          <span className="mt-2 font-mono text-[9px] uppercase tracking-[0.45em] text-[#fdf8f3]/45 min-h-[1.5em] transition-all">
            {statusText}
          </span>
        </div>
      </motion.div>
    </div>
  );
}

function CircularProgress({ pct, color }: { pct: number; color: string }) {
  const radius = 16;
  const circ = 2 * Math.PI * radius;
  const strokeDashoffset = circ - (pct / 100) * circ;
  return (
    <div className="relative h-11 w-11 flex items-center justify-center shrink-0">
      <svg className="h-full w-full rotate-[-90deg]">
        <circle
          cx="22"
          cy="22"
          r={radius}
          stroke="currentColor"
          strokeWidth="2"
          fill="transparent"
          className="text-charcoal/5"
        />
        <motion.circle
          cx="22"
          cy="22"
          r={radius}
          stroke={color}
          strokeWidth="2"
          fill="transparent"
          strokeDasharray={circ}
                    initial={{ strokeDashoffset: circ }}
          whileInView={{ strokeDashoffset }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute font-mono text-[8px] font-bold text-charcoal/80">{pct}%</span>
    </div>
  );
}

function Education() {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const pointerY = useSpring(useTransform(scrollYProgress, [0.15, 0.75], ["0%", "92%"]), {
    stiffness: 100,
    damping: 25,
  });

  const EDUCATION_LIST = [
    {
      institution: "Shri Madhwa Vadiraja Institute of Technology and Management, Udupi",
      degree: "B.E. in Artificial Intelligence and Data Science",
      date: "Aug 2023 – Jun 2027",
      details: [
        "Specializing in Machine Learning, Deep Learning, and RAG architectures.",
        "Hands-on labs in Database Systems, Operating Systems, and full-stack integration.",
        "Active member of campus AI club and technical event organizer.",
        "Maintained academic performance with a current CGPA of 7.33."
      ],
      badge: "CGPA: 7.33",
      accent: "#C2654A", // terracotta
      progress: 75,
      status: "In Progress"
    },
    {
      institution: "Anandathirtha PU College, Kunjargiri",
      degree: "Pre-University Education (PCM-CS)",
      date: "Jun 2021 – Mar 2023",
      details: [
        "Specialized in Physics, Chemistry, Mathematics, and Computer Science.",
        "Strong foundation in core computing theory, logic design, and mathematics.",
        "Active participant in science exhibitions and coding meets."
      ],
      badge: "Science (PCM-CS)",
      accent: "#3A7C7C", // teal
      progress: 100,
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="relative bg-cream-tint/30 px-6 py-24 border-t border-charcoal/5">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Education"
          title="Academic Background"
          story="My formal studies in Artificial Intelligence and Data Science, building core foundations in algorithms, databases, and software engineering."
        />

        <div className="grid gap-12 md:grid-cols-12 mt-12" ref={sectionRef}>
          {/* Left Column: Cybernetic Chrono-Scale */}
          <div className="hidden md:flex md:col-span-3 flex-col items-end justify-between py-10 pr-8 border-r border-charcoal/5 relative min-h-[440px]">
            {/* Ruler rail track */}
            <div className="absolute right-0 top-0 bottom-0 w-px bg-charcoal/10 dark:bg-border/20">
              {/* Glowing runner pointer */}
              <motion.div
                style={{ top: pointerY }}
                className="absolute right-[-4.5px] h-2.5 w-2.5 rounded-full bg-terracotta border-2 border-cream dark:border-card shadow-[0_0_10px_#c2654a]"
              />
            </div>

            {/* Scale Year Points */}
            <div className="relative text-right w-full flex flex-col justify-between h-full min-h-[380px]">
              <div className="relative">
                <span className="font-mono text-xs font-bold text-charcoal/60 block">2027</span>
                <span className="font-display text-[9px] uppercase tracking-wider text-terracotta font-semibold">Graduation</span>
                <span className="absolute right-[-36px] top-1.5 h-[1px] w-2 bg-charcoal/20" />
              </div>
              <div className="relative pt-24">
                <span className="font-mono text-xs font-bold text-charcoal/60 block">2023</span>
                <span className="font-display text-[9px] uppercase tracking-wider text-teal font-semibold">B.E. Admission</span>
                <span className="absolute right-[-36px] top-[102px] h-[1px] w-2 bg-charcoal/20" />
              </div>
              <div className="relative pt-24">
                <span className="font-mono text-xs font-bold text-charcoal/60 block">2021</span>
                <span className="font-display text-[9px] uppercase tracking-wider text-charcoal/40 font-semibold">PUC Phase</span>
                <span className="absolute right-[-36px] top-[102px] h-[1px] w-2 bg-charcoal/20" />
              </div>
            </div>
          </div>

          {/* Right Column: Stage Cards */}
          <div className="md:col-span-9 space-y-8">
            {EDUCATION_LIST.map((edu, idx) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="group relative p-[1px] clip-tech-card bg-charcoal/10 hover:bg-gradient-to-r hover:from-terracotta hover:to-teal transition-all duration-500 shadow-warm"
              >
                <div
                  className="relative overflow-hidden clip-tech-card bg-white p-6 md:p-8 h-full flex flex-col justify-between dark:bg-card"
                  onMouseMove={(e) => {
                    if (isMobile) return;
                    const rect = e.currentTarget.getBoundingClientRect();
                    const mouseX = e.clientX - rect.left;
                    const mouseY = e.clientY - rect.top;
                    e.currentTarget.style.setProperty("--x", `${mouseX}px`);
                    e.currentTarget.style.setProperty("--y", `${mouseY}px`);
                  }}
                >
                  {/* Hover Spotlight Glow */}
                  {!isMobile && (
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(220px circle at var(--x, 50%) var(--y, 50%), ${edu.accent}14, transparent 70%)`
                      }}
                    />
                  )}
                  
                  {/* Decorative dot matrix layer */}
                  <div className="absolute inset-0 tech-dot-grid opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none" />

                  {/* Cybernetic code identifier */}
                  <span className="absolute top-2 right-4 font-mono text-[7px] text-charcoal/20 uppercase select-none pointer-events-none">
                    [ academic.stage // {String(idx + 1).padStart(2, "0")} ]
                  </span>

                  <div>
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full px-2.5 py-0.5 font-mono text-[8px] uppercase tracking-widest text-cream font-bold" style={{ background: edu.accent }}>
                          {edu.badge}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-charcoal/40">{edu.status}</span>
                      </div>
                      
                      {/* Interactive Circular Progress Dial */}
                      <CircularProgress pct={edu.progress} color={edu.accent} />
                    </div>

                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                      <h3 className="font-display text-xl font-bold text-charcoal group-hover:text-gradient-warm transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <span className="font-mono text-xs text-charcoal/45 whitespace-nowrap md:ml-4">{edu.date}</span>
                    </div>
                    
                    <p className="mt-1 text-sm font-semibold text-teal leading-snug">
                      {edu.institution}
                    </p>

                    <ul className="mt-6 space-y-2.5">
                      {edu.details.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs text-charcoal/80 leading-normal">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: edu.accent }} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Projects Card Grid & Modals ---------- */

function ProjectCard({
  project,
  index,
  onOpenCaseStudy,
}: {
  project: typeof PROJECTS[0];
  index: number;
  onOpenCaseStudy: () => void;
}) {
  const isMobile = useIsMobile();
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);
  const springX = useSpring(rotateX, { stiffness: 220, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 220, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    cardRef.current.style.setProperty("--x", `${mouseX}px`);
    cardRef.current.style.setProperty("--y", `${mouseY}px`);

    const tiltX = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const tiltY = (e.clientY - rect.top - rect.height / 2) / rect.height;
    x.set(tiltX);
    y.set(tiltY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={isMobile ? {} : { rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.02 }}
      className="group relative p-[1px] clip-tech-card bg-charcoal/10 hover:bg-gradient-to-r hover:from-terracotta hover:to-teal transition-all duration-500 shadow-warm hover:shadow-warm-lg"
    >
      <div className="relative overflow-hidden clip-tech-card bg-white p-6 md:p-8 h-full flex flex-col justify-between dark:bg-card">
        {/* Dynamic Glowing Accent Light */}
        {!isMobile && (
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(220px circle at var(--x, 50%) var(--y, 50%), ${project.accent}20, transparent 65%)`,
            }}
          />
        )}

        {/* Technical dot matrix grid pattern */}
        <div className="absolute inset-0 tech-dot-grid opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none" />

        {/* Cybernetic code identifier */}
        <span className="absolute top-2 right-4 font-mono text-[7px] text-charcoal/20 uppercase select-none pointer-events-none">
          [ sys:project // {String(index + 1).padStart(2, "0")} ]
        </span>

        <div>
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-wider text-charcoal/45">
              {project.month} {project.year}
            </span>
            <span
              className="rounded-full px-2.5 py-0.5 font-mono text-[8px] uppercase tracking-widest text-cream"
              style={{ background: project.accent }}
            >
              {project.category}
            </span>
          </div>

          <h3 className="font-display text-2xl font-bold text-charcoal group-hover:text-gradient-warm transition-colors duration-300">
            {project.name}
          </h3>
          <p className="mt-2 text-xs italic text-charcoal/70 leading-relaxed">
            {project.blurb}
          </p>

          {/* Quick Metrics / Bullets preview */}
          <ul className="mt-4 space-y-1.5">
            {project.impact.slice(0, 2).map((imp, idx) => (
              <li key={idx} className="flex gap-1.5 text-[11px] text-charcoal/80">
                <span style={{ color: project.accent }}>✦</span>
                <span className="line-clamp-1">{imp}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 pt-4 border-t border-charcoal/10">
          {/* Tech badges */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-md border bg-cream-tint/30 px-1.5 py-0.5 font-mono text-[9px]"
                style={{ borderColor: `${project.accent}25`, color: "var(--charcoal)" }}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="font-mono text-[9px] text-charcoal/45 px-1">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between">
            {project.live && project.live !== "#" ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-widest text-teal hover:text-terracotta transition-colors font-semibold"
              >
                <ExternalLink className="h-3 w-3" /> Live
              </a>
            ) : (
              <span className="font-mono text-[9px] text-charcoal/30 select-none cursor-not-allowed">
                Private Repo
              </span>
            )}

            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenCaseStudy();
              }}
              className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-widest text-terracotta hover:underline font-semibold cursor-pointer"
            >
              Deep Dive <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  const [viewMode, setViewMode] = useState<"grid" | "timeline">("timeline");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<typeof PROJECTS[0] | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory]);

  const [activeTimelineIdx, setActiveTimelineIdx] = useState(0);

  const [isAutoplay, setIsAutoplay] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isAutoplay && viewMode === "timeline") {
      autoplayTimerRef.current = setInterval(() => {
        setActiveTimelineIdx((prev) => (prev + 1) % PROJECTS.length);
      }, 5000);
    } else {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    }
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isAutoplay, viewMode]);

  const nextProject = () => {
    setActiveTimelineIdx((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevProject = () => {
    setActiveTimelineIdx((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const toggleAutoplay = () => {
    setIsAutoplay((prev) => !prev);
  };

  const stopAutoplay = () => {
    setIsAutoplay(false);
    setActiveTimelineIdx(0);
  };

  const categories = ["All", "Featured", "AI & ML", "Web Apps", "Mobile & IoT"];

  const filteredProjects = ALL_PROJECTS.filter((p) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Featured") return p.featured;
    return p.category === activeCategory;
  });

  const timelineProj = PROJECTS[activeTimelineIdx];

  return (
    <section data-section="work" id="work" className="relative bg-cream-tint px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Projects"
          story="A collection of web apps, full-stack tools, and AI prototypes built to solve real-world problems."
        />

        {/* View Toggle & Filtering Tabs */}
        <div className="flex flex-col items-center justify-between gap-6 mb-12 border-b border-charcoal/10 pb-6 md:flex-row">
          {/* Toggle buttons */}
          <div className="inline-flex rounded-full border border-charcoal/15 bg-white/50 p-1 backdrop-blur-sm dark:bg-card/50">
            <button
              onClick={() => setViewMode("grid")}
              className={`rounded-full px-5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                viewMode === "grid" ? "bg-terracotta text-cream" : "text-charcoal/65 hover:text-charcoal"
              }`}
            >
              More Projects
            </button>
            <button
              onClick={() => setViewMode("timeline")}
              className={`rounded-full px-5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                viewMode === "timeline" ? "bg-terracotta text-cream" : "text-charcoal/65 hover:text-charcoal"
              }`}
            >
              Timeline Story
            </button>
          </div>

          {/* Filtering tabs */}
          {viewMode === "grid" && (
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`rounded-md px-3.5 py-1 font-mono text-[10px] uppercase tracking-widest transition-all cursor-pointer ${
                    activeCategory === c
                      ? "bg-charcoal text-cream"
                      : "border border-charcoal/15 bg-white/40 hover:bg-white text-charcoal/70 dark:bg-card/40"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Grid View Panel */}
        {viewMode === "grid" ? (
          <div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.slice(0, visibleCount).map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={idx}
                  onOpenCaseStudy={() => setSelectedCaseStudy(project)}
                />
              ))}
            </div>
            {visibleCount < filteredProjects.length && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 flex flex-col items-center gap-3"
              >
                <p className="font-mono text-xs text-charcoal/40 uppercase tracking-widest">
                  Showing {visibleCount} of {filteredProjects.length} projects
                </p>
                <button
                  onClick={() => setVisibleCount((n) => n + 6)}
                  className="group inline-flex items-center gap-2 rounded-full border-2 border-charcoal/20 bg-white/60 px-8 py-3 font-mono text-sm font-semibold text-charcoal/80 backdrop-blur-sm transition-all hover:border-terracotta hover:bg-terracotta hover:text-cream hover:shadow-warm-lg dark:bg-card/60 dark:text-cream/80 cursor-pointer"
                >
                  Load More Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            )}
            {visibleCount >= filteredProjects.length && filteredProjects.length > 6 && (
              <p className="mt-10 text-center font-mono text-xs text-charcoal/35 uppercase tracking-widest">
                ✓ All {filteredProjects.length} projects loaded
              </p>
            )}
          </div>
        ) : (
          /* Original Interactive Timeline View */
          <div className="mx-auto max-w-6xl">
            {/* Timeline rail */}
            <div className="relative mx-auto mt-8 max-w-6xl">
              <div className="absolute left-0 right-0 top-7 hidden h-px bg-charcoal/15 md:block" />
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: EASE }}
                className="absolute left-0 right-0 top-7 hidden h-[2px] origin-left bg-gradient-to-r from-terracotta via-peach to-teal md:block"
                style={{ opacity: 0.35 }}
              />

              <div className="grid grid-cols-2 gap-y-6 md:grid-cols-3 lg:grid-cols-6 md:gap-y-0">
                {PROJECTS.map((pr, i) => {
                  const isActive = i === activeTimelineIdx;
                  return (
                    <div key={pr.name} className="relative flex flex-col items-center">
                      <button
                        onMouseEnter={() => setActiveTimelineIdx(i)}
                        onFocus={() => setActiveTimelineIdx(i)}
                        onClick={() => setActiveTimelineIdx(i)}
                        data-cursor="link"
                        data-cursor-label={pr.name}
                        className="group relative grid h-14 w-14 place-items-center cursor-pointer"
                      >
                        {isActive && (
                          <motion.span
                            className="absolute inset-0 rounded-full border-2"
                            style={{ borderColor: pr.accent }}
                            animate={{ scale: [1, 1.6], opacity: [0.7, 0] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                          />
                        )}
                        <motion.span
                          animate={{ scale: isActive ? 1.15 : 1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 18 }}
                          className="relative grid h-6 w-6 place-items-center rounded-full ring-4 ring-cream-tint"
                          style={{ background: pr.accent }}
                        />
                      </button>
                      <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-charcoal/55">
                        {pr.month} {pr.year}
                      </p>
                      <p className={`mt-1 text-center font-display text-sm font-semibold transition-colors ${isActive ? "text-charcoal" : "text-charcoal/50"}`}>
                        {pr.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Timeline card panel */}
            <div className="mx-auto mt-12 max-w-6xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={timelineProj.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="relative p-[1.5px] clip-tech-card shadow-warm"
                  style={{ background: `linear-gradient(135deg, ${timelineProj.accent}66 0%, rgba(45,42,36,0.15) 100%)` }}
                >
                  <div className="relative grid gap-8 overflow-hidden clip-tech-card bg-white p-8 md:grid-cols-12 md:p-12 dark:bg-card">
                    <div
                      aria-hidden
                      className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-20 blur-3xl pointer-events-none"
                      style={{ background: timelineProj.accent }}
                    />
                    <span className="absolute right-6 top-5 font-mono text-[10px] text-charcoal/30 select-none">
                      No. {String(activeTimelineIdx + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
                    </span>

                    {/* Left info */}
                    <div className="relative md:col-span-5 flex flex-col justify-between">
                      <div>
                        <div className="mb-3 flex items-center gap-3">
                          <span className="h-px w-8 animate-pulse" style={{ background: timelineProj.accent }} />
                          <span className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: timelineProj.accent }}>
                            The Project Story
                          </span>
                        </div>
                        <h3 className="font-display text-3xl font-bold text-charcoal md:text-4xl">
                          {timelineProj.name}
                          {timelineProj.badge && (
                            <span
                              className="ml-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 align-middle text-[10px] font-medium text-cream font-mono"
                              style={{ background: timelineProj.accent }}
                            >
                              <Users className="h-3 w-3" /> {timelineProj.badge}
                            </span>
                          )}
                        </h3>
                        <p className="mt-2 font-display text-base italic text-charcoal/70">{timelineProj.blurb}</p>
                        <p className="mt-5 text-[15px] leading-relaxed text-charcoal/80">{timelineProj.story}</p>

                        <div className="mt-6 flex flex-wrap gap-5 text-xs font-mono uppercase tracking-wider">
                          {timelineProj.live && timelineProj.live !== "#" ? (
                            <a href={timelineProj.live} target="_blank" rel="noopener noreferrer" className="group/l inline-flex items-center gap-1.5 text-teal hover:text-terracotta transition-colors font-semibold">
                              <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                            </a>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 text-charcoal/30 cursor-not-allowed select-none">
                              <ExternalLink className="h-3.5 w-3.5" /> Private Repo
                            </span>
                          )}
                          {timelineProj.github && timelineProj.github !== "#" && (
                            <a href={timelineProj.github} target="_blank" rel="noopener noreferrer" className="group/g inline-flex items-center gap-1.5 text-charcoal/70 hover:text-terracotta transition-colors font-semibold">
                              <Github className="h-3.5 w-3.5" /> Source Code
                            </a>
                          )}
                          <button
                            onClick={() => setSelectedCaseStudy(timelineProj)}
                            className="group/c inline-flex items-center gap-1.5 text-terracotta hover:underline font-semibold cursor-pointer"
                          >
                            Deep Case Study
                          </button>
                        </div>
                      </div>

                      {/* Sub-layout for Impact and Technologies in Left Column */}
                      <div className="mt-8 grid gap-6 sm:grid-cols-2 border-t border-charcoal/10 pt-6">
                        <div>
                          <div className="mb-3 flex items-center gap-3">
                            <span className="h-px w-6 bg-teal" />
                            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-teal">Key Impact</span>
                          </div>
                          <ul className="space-y-2">
                            {timelineProj.impact.map((m) => (
                              <li key={m} className="flex items-start gap-2 text-xs">
                                <span className="font-display text-sm font-bold leading-none mt-0.5" style={{ color: timelineProj.accent }}>
                                  ✦
                                </span>
                                <span className="text-[12px] text-charcoal/85 leading-normal">{m}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="mb-3 flex items-center gap-3">
                            <span className="h-px w-6 bg-charcoal/30" />
                            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-charcoal/55">Technologies</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {timelineProj.tags.map((t) => (
                              <span
                                key={t}
                                className="rounded-md border bg-cream-tint/30 px-2 py-0.5 font-mono text-[9px] clip-tech-card-sm"
                                style={{ borderColor: `${timelineProj.accent}44`, color: "var(--charcoal)" }}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Device Mockup */}
                    <div className="relative md:col-span-7 flex flex-col justify-center items-center">
                      {timelineProj.deviceType === "laptop" ? (
                        <LaptopMockup videoUrl={timelineProj.videoUrl} />
                      ) : (
                        <MobileMockup videoUrl={timelineProj.videoUrl} />
                      )}

                      {/* Slideshow Controller Bar */}
                      <div className="mt-6 flex items-center gap-4 bg-charcoal/5 dark:bg-white/5 px-4 py-2 rounded-full border border-charcoal/10 dark:border-white/10 shadow-sm backdrop-blur-md">
                        <button
                          onClick={prevProject}
                          className="p-1.5 rounded-full hover:bg-charcoal/10 dark:hover:bg-white/10 text-charcoal/70 hover:text-terracotta transition-colors cursor-pointer"
                          title="Previous Project"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        
                        <button
                          onClick={toggleAutoplay}
                          className="p-1.5 rounded-full hover:bg-charcoal/10 dark:hover:bg-white/10 text-charcoal/70 hover:text-terracotta transition-colors cursor-pointer"
                          title={isAutoplay ? "Pause Slideshow" : "Start Slideshow"}
                        >
                          {isAutoplay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </button>

                        <button
                          onClick={stopAutoplay}
                          className="p-1.5 rounded-full hover:bg-charcoal/10 dark:hover:bg-white/10 text-charcoal/70 hover:text-terracotta transition-colors cursor-pointer"
                          title="Stop Slideshow"
                        >
                          <Square className="h-4 w-4" />
                        </button>

                        <button
                          onClick={nextProject}
                          className="p-1.5 rounded-full hover:bg-charcoal/10 dark:hover:bg-white/10 text-charcoal/70 hover:text-terracotta transition-colors cursor-pointer"
                          title="Next Project"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Public GitHub repositories footer list removed as it is redundant with the More Projects tab */}
      </div>

      <Dialog open={selectedCaseStudy !== null} onOpenChange={(open) => { if (!open) setSelectedCaseStudy(null); }}>
        <DialogContent className="max-w-4xl md:max-w-5xl bg-cream border-charcoal/20 dark:bg-[#12110e] dark:border-[#302c27] max-h-[90vh] overflow-y-auto">
          {selectedCaseStudy && (() => {
            const isFeatured = PROJECTS.some((p) => p.id === selectedCaseStudy.id);
            return (
              <>
                <DialogHeader className="border-b border-charcoal/10 pb-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-charcoal/50">
                      {isFeatured ? "Case Study deep-dive" : "GitHub Repository details"}
                    </span>
                    <span
                      className="rounded-full px-2.5 py-0.5 font-mono text-[8px] uppercase tracking-widest text-cream"
                      style={{ background: selectedCaseStudy.accent }}
                    >
                      {selectedCaseStudy.category}
                    </span>
                  </div>
                  <DialogTitle className="font-display text-3xl font-bold text-charcoal">
                    {selectedCaseStudy.name}
                  </DialogTitle>
                  <p className="mt-1 text-sm italic text-charcoal/70">
                    {selectedCaseStudy.blurb}
                  </p>
                </DialogHeader>
                
                <div className="grid gap-8 md:grid-cols-12 text-sm text-charcoal/90">
                  {/* Left Column: Details, Architecture, Challenges */}
                  <div className={isFeatured ? "md:col-span-7 space-y-6" : "md:col-span-8 space-y-6"}>
                    {/* Story / Description */}
                    <div>
                      <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-terracotta mb-2 font-bold">
                        {isFeatured ? "Project Story & Details" : "Repository Description"}
                      </h4>
                      <p className="leading-relaxed text-xs">
                        {selectedCaseStudy.story}
                      </p>
                    </div>
                    
                    {/* Subsystem Architecture Diagram */}
                    {isFeatured && (
                      <div>
                        <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal mb-2 font-bold">
                          System Architecture
                        </h4>
                        <div className="rounded-xl border border-dashed border-charcoal/20 bg-cream-tint/50 p-4 dark:bg-card/50">
                          <div className="flex flex-wrap items-center justify-center gap-3">
                            {selectedCaseStudy.architecture.map((node, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <div className="rounded-md border bg-white px-2.5 py-1.5 font-mono text-[10px] shadow-sm text-center border-charcoal/10 dark:bg-card dark:border-border">
                                  {node}
                                </div>
                                {index < selectedCaseStudy.architecture.length - 1 && (
                                  <span className="font-mono text-xs text-charcoal/30 animate-pulse">→</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Engineering Challenges */}
                    {isFeatured && (
                      <div>
                        <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal mb-3 font-bold">
                          Engineering Challenges &amp; Resolutions
                        </h4>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {selectedCaseStudy.challenges.map((ch, idx) => (
                            <div key={idx} className="rounded-xl bg-white/70 p-4 border border-charcoal/5 dark:bg-card/70">
                              <p className="font-display text-sm font-bold text-charcoal mb-1">
                                {ch.title}
                              </p>
                              <p className="text-[11px] text-charcoal/75 leading-normal">
                                {ch.solution}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Generic Project Tech/Topics */}
                    {!isFeatured && (
                      <div>
                        <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal mb-2.5 font-bold">
                          Technologies &amp; Topics
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedCaseStudy.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-md border bg-cream-tint/30 px-2 py-0.5 font-mono text-[10px] clip-tech-card-sm"
                              style={{ borderColor: `${selectedCaseStudy.accent}44`, color: "var(--charcoal)" }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Right Column: Device Mockup & Metrics */}
                  <div className={isFeatured ? "md:col-span-5 space-y-6 flex flex-col justify-between" : "md:col-span-4 space-y-6 flex flex-col justify-between"}>
                    {/* Video Mockup Frame - Featured Only */}
                    {isFeatured && (
                      <div className="flex items-center justify-center py-6 bg-cream-tint/30 rounded-2xl border border-charcoal/5 dark:bg-[#1c1a17]/40">
                        {selectedCaseStudy.deviceType === "laptop" ? (
                          <LaptopMockup videoUrl={selectedCaseStudy.videoUrl} />
                        ) : (
                          <MobileMockup videoUrl={selectedCaseStudy.videoUrl} />
                        )}
                      </div>
                    )}
                    
                    {/* Impact / Stats */}
                    <div>
                      <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-terracotta mb-3 font-bold">
                        {isFeatured ? "Core Metrics & Impact" : "Repository Statistics"}
                      </h4>
                      <ul className="space-y-2">
                        {(selectedCaseStudy.longImpact || selectedCaseStudy.impact).map((imp, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs">
                            <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                            <span>{imp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Case study footer links */}
                    <div className="pt-4 border-t border-charcoal/10 flex items-center justify-end gap-4">
                      {selectedCaseStudy.github && selectedCaseStudy.github !== "#" && (
                        <a
                          href={selectedCaseStudy.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-charcoal/70 hover:text-terracotta"
                        >
                          <Github className="h-4 w-4" /> Source Code
                        </a>
                      )}
                      {selectedCaseStudy.live && selectedCaseStudy.live !== "#" ? (
                        <a
                          href={selectedCaseStudy.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-terracotta px-4 py-2 text-xs font-mono uppercase tracking-wider text-cream shadow-sm hover:shadow-warm-lg"
                        >
                          <ExternalLink className="h-3.5 w-3.5" /> Launch App
                        </a>
                      ) : (
                        <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal/30 select-none">
                          Internal Corporate Sandbox
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </>
            );
          })()}
        </DialogContent>
      </Dialog>
    </section>
  );
}

/* ---------- Achievements ---------- */

function Achievements() {
  const isMobile = useIsMobile();

  return (
    <section id="achievements" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Awards & Milestones"
          title="Recognition & Wins"
          story="Key milestones from hackathons, incubation programs, and academic achievements."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{
                opacity: 0,
                scale: isMobile ? 1 : 0.6,
                rotate: isMobile ? 0 : -8,
                y: isMobile ? 12 : 30
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                y: 0
              }}
              viewport={{ once: true, margin: "-60px" }}
              transition={isMobile ? { duration: 0.4, delay: (i % 4) * 0.03 } : { type: "spring", stiffness: 160, damping: 14, delay: (i % 4) * 0.03 }}
              className="relative p-[1.5px] clip-tech-card-sm bg-charcoal/10 hover:bg-terracotta transition-all duration-300 shadow-warm"
            >
              <motion.div
                whileHover={{ rotateX: 4, rotateY: -4, translateY: -4 }}
                style={{ transformPerspective: 800 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden clip-tech-card-sm bg-white p-6 flex flex-col justify-between dark:bg-card"
              >
                {/* stamp numeral */}
                <span className="pointer-events-none absolute -right-1 -top-1 font-mono text-6xl font-bold italic text-terracotta/[0.06] select-none">
                  0{i + 1}
                </span>
                <div>
                  <div className="mb-4 grid h-10 w-10 place-items-center rounded-md bg-teal/10 text-teal clip-tech-card-sm transition-colors group-hover:bg-teal group-hover:text-cream">
                    {i === 0 ? <Trophy className="h-5 w-5" /> : i === 3 ? <Sparkles className="h-5 w-5" /> : <Award className="h-5 w-5" />}
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug text-charcoal">{a.title}</h3>
                </div>
                <p className="mt-4 text-xs text-charcoal/65 leading-relaxed">{a.detail}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Leadership ---------- */

function Leadership() {
  return (
    <section className="bg-cream-tint px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Leadership"
          title="Extracurricular Activities"
          story="Organizing technical events, leading project teams, and contributing to the developer community."
        />
        <div className="space-y-5">
          {LEADERSHIP.map((l, i) => (
            <Reveal key={l.title} x={i % 2 === 0 ? -30 : 30}>
              <div
                className={`flex items-start gap-4 rounded-2xl bg-white p-6 shadow-warm dark:bg-card ${i % 2 === 0 ? "md:ml-0 md:mr-16" : "md:ml-16 md:mr-0"}`}
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-cream-tint text-2xl font-mono dark:bg-muted font-bold text-terracotta">
                  {l.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-bold text-charcoal">{l.title}</h3>
                  <p className="mt-1 text-sm text-charcoal/70">{l.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section data-section="contact" id="contact" className="relative overflow-hidden px-6 py-24">
      <div
        aria-hidden
        className="animate-blob absolute -left-32 top-20 h-96 w-96 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, #E8A87C 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
        <Reveal x={-30}>
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.32em] text-terracotta">Contact</p>
            <h2 className="font-display text-4xl font-bold leading-tight text-charcoal md:text-5xl">
              Let's work <span className="italic text-gradient-warm">together</span>
            </h2>
            <p className="mt-3 max-w-md font-display text-base italic text-charcoal/65">
              The best collaborations start with a single, low-stakes message. This is yours.
            </p>
            <div className="mt-8 mb-6">
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2.5 rounded-full bg-teal px-6 py-3 text-sm font-medium text-cream shadow-warm transition-transform hover:-translate-y-0.5 cursor-pointer"
              >
                Schedule Call
              </button>
            </div>

            <div className="space-y-4 text-sm">
              <a href="mailto:bhushan.poojary2006@gmail.com" className="group flex items-center gap-3 text-charcoal hover:text-terracotta transition-colors">
                <Mail className="h-4 w-4" />
                <span className="underline-offset-4 group-hover:underline">bhushan.poojary2006@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/bhushan-poojary-26a717296/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-charcoal hover:text-terracotta transition-colors">
                <Linkedin className="h-4 w-4" />
                <span className="underline-offset-4 group-hover:underline">linkedin.com/in/bhushan-poojary-26a717296</span>
              </a>
              <a href="https://github.com/rockstar-2006" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-charcoal hover:text-terracotta transition-colors">
                <Github className="h-4 w-4" />
                <span className="underline-offset-4 group-hover:underline">github.com/rockstar-2006</span>
              </a>
              <a href="https://leetcode.com/u/NyYdc4RBn5/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-charcoal hover:text-terracotta transition-colors">
                <LeetCodeIcon className="h-4 w-4 text-charcoal group-hover:text-terracotta transition-colors" />
                <span className="underline-offset-4 group-hover:underline">leetcode.com/u/NyYdc4RBn5</span>
              </a>
              <a href="https://www.instagram.com/_vinu_.4/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-charcoal hover:text-terracotta transition-colors">
                <Instagram className="h-4 w-4" />
                <span className="underline-offset-4 group-hover:underline">instagram.com/_vinu_.4</span>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal x={30}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-6"
          >
            {(["Name", "Email", "Message"] as const).map((label) => (
              <div key={label}>
                <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.25em] text-charcoal/60">
                  {label}
                </label>
                {label === "Message" ? (
                  <textarea
                    rows={4}
                    required
                    className="w-full resize-none border-b-2 border-charcoal/15 bg-transparent py-2 text-sm text-charcoal outline-none transition-colors focus:border-terracotta"
                  />
                ) : (
                  <input
                    type={label === "Email" ? "email" : "text"}
                    required
                    className="w-full border-b-2 border-charcoal/15 bg-transparent py-2 text-sm text-charcoal outline-none transition-colors focus:border-terracotta"
                  />
                )}
              </div>
            ))}
            <Magnetic strength={0.45}>
              <button
                type="submit"
                disabled={sent}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-terracotta px-7 py-3.5 text-sm font-medium text-cream shadow-warm transition-shadow hover:shadow-warm-lg disabled:opacity-90 cursor-pointer"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {sent ? (
                    <motion.span key="ok" initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -12, opacity: 0 }} className="inline-flex items-center gap-2">
                      Thanks - I'll be in touch
                    </motion.span>
                  ) : (
                    <motion.span key="send" initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -12, opacity: 0 }} className="inline-flex items-center gap-2">
                      Send Message
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </Magnetic>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="relative border-t border-charcoal/10 px-6 pb-10 pt-16">
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-5xl font-bold leading-none text-charcoal md:text-7xl">
          Let's <span className="italic text-gradient-warm">build</span> something
        </p>
        <p className="mt-4 max-w-md text-sm text-charcoal/60">
          Open to internships, freelance, and the occasional weekend hackathon team-up.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={openCalendly}
            className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-cream shadow-warm transition-transform hover:-translate-y-0.5 cursor-pointer"
          >
            Schedule a Meeting
          </button>
          <a
            href="mailto:bhushan.poojary2006@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:border-terracotta hover:text-terracotta cursor-pointer dark:text-cream/70 dark:border-white/20 dark:hover:bg-white/5"
          >
            Email Me
          </a>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-charcoal/10 pt-6 text-xs text-charcoal/60">
          <p className="inline-flex items-center gap-1.5">
            Copyright 2026 Bhushan Poojary - Built with <Coffee className="h-3 w-3 text-terracotta" /> and curiosity
          </p>
          <p className="font-mono">v2.0 | verified portfolio</p>
        </div>
      </div>
    </footer>
  );
}

function BlueprintLayout({ theme }: { theme?: "light" | "dark" }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
      {/* Background blueprint grid pattern */}
      <div className="absolute inset-0 blueprint-grid opacity-50" />
      {/* Background dotted grid pattern */}
      <div className="absolute inset-0 tech-dot-grid opacity-30" />
      
      {/* Vertical layout lines */}
      <div className="absolute left-[5%] top-0 bottom-0 w-px bg-charcoal/5 hidden md:block" />
      <div className="absolute left-[15%] top-0 bottom-0 w-px bg-charcoal/5 hidden md:block" />
      <div className="absolute right-[15%] top-0 bottom-0 w-px bg-charcoal/5 hidden md:block" />
      <div className="absolute right-[5%] top-0 bottom-0 w-px bg-charcoal/5 hidden md:block" />
      
      {/* Horizontal divider coordinates */}
      <div className="absolute top-[32%] left-[5%] text-[8px] font-mono text-charcoal/20 hidden md:block tracking-widest">
        SYS · GRID · 22
      </div>
      <div className="absolute top-[68%] right-[5%] text-[8px] font-mono text-charcoal/20 hidden md:block tracking-widest text-right">
        SYS · GRID · 99
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

function Portfolio() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "light" | "dark") || "light";
    }
    return "light";
  });
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <div className="relative min-h-screen bg-cream text-charcoal overflow-x-hidden transition-colors duration-300">
      <LoadingScreen onComplete={() => setLoadingComplete(true)} />
      <BlueprintLayout theme={theme} />
      <ScrollProgress />
      <Grain />
      <Spotlight />
      <OrganicCursor />
      <NowWidget />
      <ScrollToTop />
      <FloatingMusicPlayer loadingComplete={loadingComplete} />
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <main className="relative z-10">
        <Hero />
        <Marquee items={["Available for work", "5+ hackathon wins", "Building Journeybuddy.ai", "NAIN 2.0 funded", "AI · Full-stack · Android"]} />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Achievements />
        <Leadership />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
