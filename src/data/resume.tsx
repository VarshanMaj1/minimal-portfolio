import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Varshan",
  initials: "VM",
  url: "https://varshan.xyz",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
  "I am cool",
  summary:
  "I am cool",
  avatarUrl: "/varshan.jpeg",
  skills: [
    // Web/Frontend
    "React",
    "Next.js",
    "Typescript",
    "TailwindCSS",
    "Shadcn UI",
  
    // Backend
    "Node.js",
    "FastAPI",
    "Java",
    "Python",
    "PostgreSQL",
    "Prisma",
    "MongoDB",
    "Redis",
  
    // DevOps / Infra
    "Docker",
  
    // AI / LLM / Agents
    "LangChain",
    "Groq",
    "ElizaOS",
    "PocketFlow",
  
    // Web3 / Crypto
    "Solana",
    "Rust",
    "Anchor",
    "Chainlink Functions",
  
    // Databases & Graph
  
    // Other languages & tools
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "varshanmaji0@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/VarshanMaj1",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "varshanmaji0@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Freelancing",
      badges: [],
      href: "https://varshan.xyz/",

      location: "Remote",
      title: "Software Engineer",
      logoUrl: "",

      start: "March 2024",
      description:
        "Collaborated with clients to build MVPs across diverse domains, including AI agents, Web3 applications, and full-stack platforms. Delivered end-to-end solutions with a focus on scalability, performance, and rapid deployment.",
    },    
    
  ],
  education: [
    {
      school: "Indian Institute of Information Technology",
      href: "https://www.iiit.ac.in/",
      degree: "Bachelor of Technology in CSE(BTech)",
      logoUrl: "/bmc.jpg",
      start: "2023",
      end: "2027",
    },
    
  ],
  projects: [
    
  ],
  hackathons: [
 
  ],
} as const;
