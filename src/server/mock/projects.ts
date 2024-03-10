"server only";

import { Project } from "@/server/mock/project.types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Innovative E-Commerce Platform",
    description:
      "Revolutionized online shopping experiences with cutting-edge web technologies.",
    image: "/example.png",
    companyInfo: {
      name: "Tech Innovate",
      website: "https://techinnovate.com",
      stackUsed: ["React", "GraphQL", "Node.js", "MongoDB"],
    },
    projectInfo: {
      achievements: [
        "Increased user engagement by 40%",
        "Reduced load times by 50%",
      ],
      role: "Lead Frontend Developer",
      technologiesUsed: ["React", "GraphQL", "Apollo Client"],
      link: "https://mypdfgenius.com.br",
    },
  },
  {
    id: "2",
    title: "Cloud-Based Collaboration Tool",
    description:
      "Developed a high-performance collaboration tool to enhance productivity.",
    image: "/example.png",
    companyInfo: {
      name: "CloudCollab",
      website: "https://cloudcollabtool.com",
      stackUsed: ["Vue.js", "Firebase", "Express", "Node.js"],
    },
    projectInfo: {
      achievements: [
        "Onboarded 10k+ users within the first month",
        "Implemented real-time collaboration features",
      ],
      role: "Full Stack Developer",
      technologiesUsed: ["Vue.js", "Firebase", "Node.js"],
      link: "https://mypdfgenius.com.br",
    },
  },
  {
    id: "3",
    title: "AI-Powered Analytics Dashboard",
    description:
      "Crafted an AI-driven dashboard for actionable insights and data visualization.",
    image: "/example.png",
    companyInfo: {
      name: "DataDriven AI",
      website: "https://datadrivenai.com",
      stackUsed: ["Python", "Django", "React", "D3.js"],
    },
    projectInfo: {
      achievements: [
        "Achieved 95% accuracy in predictive analytics",
        "Enabled customizable data visualizations",
      ],
      role: "Data Scientist & Developer",
      technologiesUsed: ["Python", "Django", "React", "D3.js"],
      link: "https://mypdfgenius.com.br",
    },
  },
  {
    id: "4",
    title: "Mobile Fitness Application",
    description:
      "Launched a comprehensive fitness app with personalized training programs.",
    image: "/example.png",
    companyInfo: {
      name: "FitLife",
      website: "https://fitlifeapp.com",
      stackUsed: ["Swift", "Kotlin", "Node.js", "MongoDB"],
    },
    projectInfo: {
      achievements: [
        "Surpassed 500k downloads",
        "Integrated with wearable devices for real-time health tracking",
      ],
      role: "Mobile Developer",
      technologiesUsed: ["Swift", "Kotlin", "Node.js"],
      link: "https://mypdfgenius.com.br",
    },
  },
  {
    id: "5",
    title: "Blockchain-Based Voting System",
    description:
      "Implemented a secure, transparent, and tamper-proof voting system using blockchain.",
    image: "/example.png",
    companyInfo: {
      name: "BlockVote",
      website: "https://blockvote.com",
      stackUsed: ["Ethereum", "Solidity", "Web3.js", "React"],
    },
    projectInfo: {
      achievements: [
        "Enabled secure and anonymous voting",
        "Facilitated instant vote tallying",
      ],
      role: "Blockchain Developer",
      technologiesUsed: ["Ethereum", "Solidity", "Web3.js"],
      link: "https://mypdfgenius.com.br",
    },
  },
  {
    id: "6",
    title: "Smart Home Automation System",
    description:
      "Developed a smart home system for automating household appliances and security.",
    image: "/example.png",
    companyInfo: {
      name: "SmartHome Tech",
      website: "https://smarthometech.com",
      stackUsed: ["IoT", "Node.js", "React Native", "AWS IoT"],
    },
    projectInfo: {
      achievements: [
        "Integrated with major smart home devices",
        "Introduced voice and mobile control capabilities",
      ],
      role: "IoT System Architect",
      technologiesUsed: ["IoT", "Node.js", "React Native"],
      link: "https://mypdfgenius.com.br",
    },
  },
  {
    id: "7",
    title: "Real-Time Messaging App",
    description:
      "Built a scalable, real-time messaging app supporting multimedia messages and group chats.",
    image: "/example.png",
    companyInfo: {
      name: "ChatSphere",
      website: "https://chatsphere.com",
      stackUsed: ["React", "Node.js", "WebSocket", "Redis"],
    },
    projectInfo: {
      achievements: [
        "Supported 100k+ concurrent users",
        "Implemented end-to-end encryption for privacy",
      ],
      role: "Backend Developer",
      technologiesUsed: ["Node.js", "WebSocket", "Redis"],
      link: "https://mypdfgenius.com.br",
    },
  },
  {
    id: "8",
    title: "Online Learning Platform",
    description:
      "Created an engaging learning platform offering courses from industry experts.",
    image: "/example.png",
    companyInfo: {
      name: "Learnify",
      website: "https://learnify.com",
      stackUsed: ["Django", "React", "PostgreSQL", "Docker"],
    },
    projectInfo: {
      achievements: [
        "Hosted 1k+ courses",
        "Implemented interactive coding environments",
      ],
      role: "Full Stack Developer",
      technologiesUsed: ["Django", "React", "Docker"],
      link: "https://mypdfgenius.com.br",
    },
  },
  {
    id: "9",
    title: "Digital Health Records Platform",
    description:
      "Modernized healthcare with a platform for digital health records accessible by authorized personnel.",
    image: "/example.png",
    companyInfo: {
      name: "HealthTech Solutions",
      website: "https://healthtechsolutions.com",
      stackUsed: ["Angular", "Spring Boot", "MySQL", "AWS"],
    },
    projectInfo: {
      achievements: [
        "Ensured HIPAA compliance",
        "Enabled seamless data sharing among healthcare providers",
      ],
      role: "Lead Developer",
      technologiesUsed: ["Angular", "Spring Boot", "AWS"],
      link: "https://mypdfgenius.com.br",
    },
  },
];

export function loadProjects(page: number, limit: number): Promise<Project[]> {
  try {
    return new Promise((resolve) => {
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      setTimeout(() => {
        resolve(projects.slice(startIndex, endIndex));
      }, 500);
    });
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function getProject(id: string): Promise<Project> {
  return new Promise((resolve, reject) => {
    const project = projects.find((item) => item.id === id);

    setTimeout(() => {
      if (project) {
        resolve(project);
      } else {
        reject(new Error("Project not found"));
      }
    }, 500);
  });
}
