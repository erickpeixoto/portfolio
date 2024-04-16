"server only";

import { Project } from "@/server/mock/projects/project.types";

export const projects: Project[] = [
  {
    id: "1",
    title: "AI-Powered PDF Interactions",
    description:
      "My PDF Genius leverages AI to transform PDF documents into engaging, interactive experiences, facilitating easier understanding and interaction.",
    images: ["/example.png", "/mypdfgenius.2.png"],
    companyInfo: {
      name: "My PDF Genius",
      website: "https://mypdfgenius.com",
    },
    projectInfo: {
      achievements: [
        "Enhanced PDF interactivity with AI",
        "Simplified complex document engagement",
        "Pioneered quick, AI-driven document insights",
      ],
      role: "Senior Software Engineer",
      technologiesUsed: [
        "OpenAI",
        "NextJS",
        "ReactJS",
        "tRPC",
        "TailwindCSS",
        "CI/CD",
        "AWS",
        "Serverless",
        "Prisma",
        "PostgreSQL",
        "Auth0",
        "Go",
        "Jest",
        "Cypress",
      ],
      link: "https://mypdfgenius.com",
    },
  },

  {
    id: "2",
    title: "Veritone SportX",
    description:
      "Developed the interface for Veritone SportX, leveraging aiWARE to analyze and license sports data and videos, facilitating broad content distribution with secure payments.",
    images: ["/SportX.1.webp", "/SportX.2.webp", "/SportX.3.png"],
    companyInfo: {
      name: "Fuerza Studio",
      website: "https://www.fuerzastudio.com.br",
    },
    projectInfo: {
      achievements: [
        "Streamlined sports video licensing",
        "Enhanced audience reach with AI analysis",
        "Implemented secure transaction methods",
      ],
      role: "Tech Lead | Senior Frontend Developer",
      technologiesUsed: [
        "ReactJS",
        "NextJS",
        "AWS",
        "CI/CD",
        "StyledComponents",
        "Jest",
        "Cypress",
        "mui",
        "typescript",
        "Storybook",
      ],
      link: "https://www.fuerzastudio.com.br/en/cases/veritone-sportx/",
    },
  },

  {
    id: "3",
    title: "Ready Set - Comprehensive Digital Solution",
    description:
      "A full-cycle project engagement from design, logistics, to a new product for high-production, cost-effective creative videos with a customizable database for enhanced ad effectiveness.",
    images: [
      "/Readyset.1.webp",
      "/Readyset.2.png",
      "/Readyset.3.webp",
      "/Readyset.4.webp",
    ],
    companyInfo: {
      name: "Fuerza Studio",
      website: "https://www.fuerzastudio.com.br",
    },
    projectInfo: {
      achievements: [
        "Developed a comprehensive digital solution from the ground up",
        "Enabled creation of high-production creative videos at low cost",
      ],
      role: "Senior Full Stack Developer",
      technologiesUsed: [
        "ReactJS",
        "NextJS",
        "AWS",
        "CI/CD",
        "StyledComponents",
        "Jest",
        "Cypress",
        "mui",
        "typescript",
        "Storybook",
      ],
      link: "https://www.fuerzastudio.com.br/en/cases/ready-set/",
    },
  },
  {
    id: "4",
    title: "Marketing Platform for Businesses",
    description:
      "Empowers businesses to leverage digital referral marketing, customer loyalty, and rewards tools effectively.",
    images: ["/locorum_2.png", "/locorum_1.webp"],
    companyInfo: {
      name: "Locorum",
      website: "https://locorum.io",
    },
    projectInfo: {
      achievements: [
        "Enabled businesses to tap into 80% of their business from referrals",
        "Automated marketing campaigns with 100+ templates",
        "Streamlined reward system for referrals and customer loyalty",
      ],
      role: "Senior Full Stack Developer",
      technologiesUsed: [
        "ReactJS",
        "NextJS",
        "AWS",
        "CI/CD",
        "TailwindCSS",
        "Jest",
        "Cypress",
        "typescript",
        "Storybook",
        "postgreSQL",
        "NodeJS",
        "Serverless",
        "postgreSQL",
      ],
      link: "https://locorum.io",
    },
  },
  {
    id: "5",
    title: "Veritone AI Voice Creation",
    description:
      "Veritone Voice offers lifelike, scalable AI voice solutions, enabling custom voice creation and localization across various industries, enhancing content accessibility and audience engagement.",
    images: ["/veritone.1.png"],
    companyInfo: {
      name: "Veritone Voice",
      website: "https://www.veritonevoice.com",
    },
    projectInfo: {
      achievements: [
        "Pioneered realistic AI voice generation",
        "Facilitated global content reach with localized voices",
        "Streamlined content creation with text-to-speech technologies",
      ],
      role: "AI Engineer & Voice Designer",
      technologiesUsed: [
        "ReactJS",
        "NextJS",
        "AWS",
        "CI/CD",
        "TailwindCSS",
        "Jest",
        "Cypress",
        "typescript",
        "Storybook",
        "postgreSQL",
        "NodeJS",
        "Serverless",
        "postgreSQL",
        "AI",
        "NLP",
        "Speech Synthesis",
      ],
      link: "https://www.veritonevoice.com",
    },
  },
  {
    id: "6",
    title: "AppGami - Management Platforms",
    description:
      "Specializing in custom app development, Appgami enhances user experience on platforms like Monday, Jira, and Asana.",
    images: ["/appgami.1.png"],
    companyInfo: {
      name: "Appgami",
      website: "https://www.appgami.com",
    },
    projectInfo: {
      achievements: [
        "Developed custom solutions to extend platform functionalities",
        "Achieved seamless integration with various project management tools",
        "Enhanced productivity through improved user interfaces",
      ],
      role: "App Developer & Integration Specialist",
      technologiesUsed: [
        "ReactJS",
        "NodeJS",
        "AWS",
        "CI/CD",
        "StyledComponents",
        "Jest",
        "Cypress",
        "typescript",
        "Storybook",
        "Firebase",
        "postgreSQL",
        "Serverless",
      ],
      link: "https://www.appgami.com",
    },
  },
  {
    id: "7",
    title: "Atus Platform",
    description:
      "Developed a user-friendly platform for simplifying the process of mandatory legal publications.",
    images: [
      "/atus_step1.png",
      "/atus_step2.png",
      "/atus_step3.png",
      "/atus_step4.png",
    ],
    companyInfo: {
      name: "Atus Publicações",
      website: "https://www.atuspublicacoes.com",
    },
    projectInfo: {
      achievements: [
        "Streamlined the creation and management of legal publications",
        "Integrated a simple and efficient document upload system",
        "Developed a secure account management and login process",
      ],
      role: "Full Stack Developer | UI/UX Designer",
      technologiesUsed: [
        "ReactJS",
        "NextJS",
        "NodeJS",
        "AWS",
        "CI/CD",
        "StyledComponents",
        "Jest",
        "Cypress",
        "typescript",
        "Storybook",
        "Strapi",
        "postgreSQL",
        "Serverless",
      ],
      link: "https://www.atuspublicacoes.com",
    },
  },
  {
    id: "8",
    title: "Restaurant Management Platform",
    description:
      "Accon streamlines restaurant operations with its integrated platform for app, website, WhatsApp orders, and digital menus, enhancing efficiency and customer experience.",
    images: ["/accon.2.png", "/accon.1.png", "/accon.3.png", "/accon.4.png"],
    companyInfo: {
      name: "Accon",
      website: "https://accon.com.br",
    },
    projectInfo: {
      achievements: [
        "Optimized multi-channel ordering",
        "Improved logistics and payment processing",
        "Enhanced customer engagement with digital menus",
      ],
      role: "Full Stack Developer & Product Designer",
      technologiesUsed: [
        "ReactJS",
        "NodeJS",
        "Cloud Computing",
        "CI/CD",
        "Docker",
        "PostgreSQL",
        "Serverless",
        "Prisma",
        "PHP",
        "NextJS",
        "Postman",
        "MongoDB",
        "MUI",
      ],
      link: "https://accon.com.br",
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
