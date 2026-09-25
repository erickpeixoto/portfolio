"server only";

import { Project } from "@/server/mock/projects/project.types";

export const projects: Project[] = [
  {
    id: "mestreobra",
    tag: "AI product",
    period: "Nov 2025 – present",
    title: "MestreObra, construction management on WhatsApp",
    description:
      "An AI agent on WhatsApp for civil engineers, renovation architects and small builders. In production at mestreobra.com.br.",
    problem:
      "On a job site a receipt arrives, the crew needs materials and the client wants an update, all at once. Small builders track it in chats and spreadsheets and lose control of costs.",
    images: [
      "/projects/mestreobra-site.jpg",
      "/projects/mestreobra-whatsapp.jpg",
    ],
    companyInfo: {
      name: "mestreobra.com.br",
      website: "https://mestreobra.com.br",
    },
    projectInfo: {
      role: "Founder and sole engineer",
      technologiesUsed: [
        "NextJS",
        "TypeScript",
        "PostgreSQL",
        "Anthropic Claude",
        "WhatsApp",
        "Stripe",
        "Vercel",
      ],
    },
    ai: [
      "The agent understands text, audio, photos and video: a receipt photo becomes an expense on the right job, a voice note becomes the daily log",
      "Purchase orders organized per job, rain alerts before a concrete pour, a link for the end client to follow the job",
      "Claude agent with read and write tools, schema validation, server-side authorization and tests per tool",
      "Prompt caching, model selection by plan and cost tracking per conversation",
    ],
    result:
      "In production with a single plan and a free trial. The field team never installs anything or creates a password; the manager gets everything organized.",
  },
  {
    id: "mentalcare",
    tag: "AI product",
    period: "Jul 2025 – present",
    title: "Mental Care, practice management for therapists",
    description:
      "A complete practice system with Luna, an AI secretary on WhatsApp, for psychologists, psychiatrists and small clinics. In production.",
    problem:
      "Therapists lose hours every week to scheduling, reminders, payments and notes instead of seeing patients.",
    images: ["/projects/mentalcare-site.jpg"],
    companyInfo: {
      name: "mentalcare.systemroot.cloud",
      website: "https://mentalcare.systemroot.cloud",
    },
    projectInfo: {
      role: "Founder and sole engineer",
      technologiesUsed: [
        "ReactJS",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "OpenAI",
        "WhatsApp",
        "Stripe",
      ],
    },
    ai: [
      "Luna runs the practice on WhatsApp: scheduling, patients, finances and reminders, by text, voice or a photo of a receipt",
      "AI drafts of clinical notes, always reviewed by the professional",
      "Embeddings pipeline for clinical notes on pgvector",
      "Privacy and LGPD by design; patients only receive reminders and links",
    ],
    result:
      "In production in three languages, with telehealth over Google Meet and a public page per professional.",
  },
  {
    id: "lino",
    tag: "AI product",
    period: "Jul 2026 – present",
    title: "Lino, homework tutor on WhatsApp",
    description:
      "A tutor for parents of kids in grades 1 to 9, in Brazil and for Hispanic families in the US. Pre-launch, site live.",
    problem:
      "Parents want to help with homework but do not always remember the subject well enough to explain it.",
    images: ["/projects/lino-site.jpg", "/projects/lino-whatsapp.jpg"],
    companyInfo: {
      name: "lino.systemroot.cloud",
      website: "https://lino.systemroot.cloud",
    },
    projectInfo: {
      role: "Founder and sole engineer",
      technologiesUsed: [
        "NextJS",
        "TypeScript",
        "Supabase",
        "Anthropic Claude",
        "WhatsApp",
        "Stripe",
      ],
    },
    ai: [
      "Claude vision reads a photo of the homework and explains it step by step at the child's grade level",
      "Practice exercises and a weekly summary of where the child got stuck",
      "Teaches instead of giving answers; the child never talks to the AI directly; photos are not stored",
    ],
    result:
      "Product complete and site live, pre-launch. Payment inside WhatsApp, Portuguese and English, priced in BRL and USD.",
  },
  {
    id: "hark",
    tag: "Client work",
    period: "2024 – Jul 2026",
    title: "AI lending platform for a major Australian bank",
    description:
      "A platform that automates loan applications end to end, built by Ambush for one of Australia's largest banks.",
    problem:
      "Analysts spent most of their time reading loan documents by hand, and full automation was too risky when a wrong income figure goes straight into a credit decision.",
    images: ["/projects/hark.png"],
    imageNote: "Illustration. The real product is under NDA.",
    companyInfo: {
      name: "Ambush, Austin",
      website: "https://www.getambush.com",
    },
    projectInfo: {
      role: "Core frontend engineer, embedded in US teams",
      technologiesUsed: [
        "ReactJS",
        "TypeScript",
        "GraphQL",
        "Playwright",
        "TailwindCSS",
      ],
    },
    ai: [
      "AI and OCR extract fields from loan documents, with a confidence score per field",
      "Low-confidence fields are flagged for an analyst to approve or correct",
      "A chat answers analysts' questions using the loan documents as context",
    ],
    result:
      "I built the document pipeline with real-time states, the human validation screens, the credit outcome experience and the end-to-end test strategy. I argued for human review on low-confidence extractions and we shipped it.",
  },
  {
    id: "1",
    tag: "Client work",
    period: "2024",
    title: "My PDF Genius, chat with your PDFs",
    description:
      "Upload a PDF and have a conversation with it, powered by OpenAI.",
    problem:
      "Long PDFs are slow to read and hard to search for a specific answer.",
    images: ["/example.png", "/mypdfgenius.2.png"],
    companyInfo: { name: "My PDF Genius" },
    projectInfo: {
      role: "Senior software engineer",
      technologiesUsed: [
        "OpenAI",
        "NextJS",
        "ReactJS",
        "tRPC",
        "Prisma",
        "PostgreSQL",
        "AWS",
        "Serverless",
        "Auth0",
        "Go",
      ],
    },
    ai: [
      "OpenAI integration for question answering over the uploaded document",
    ],
    result:
      "Users upload a document and ask questions about it in a chat next to the PDF viewer.",
  },
  {
    id: "2",
    tag: "Client work",
    period: "2021 – 2023",
    title: "Veritone SportX",
    description:
      "An AI-powered platform to tag, search and license sports video and media, built by Fuerza Studio for Veritone.",
    problem:
      "Licensing sports media meant long negotiations and months of manual tagging before content could be sold.",
    images: ["/sportx1.png", "/SportX.2.webp", "/SportX.3.png"],
    companyInfo: {
      name: "Fuerza Studio for Veritone",
      website: "https://fuerzastudio.com/cases/veritone-sportx",
    },
    projectInfo: {
      role: "Tech lead and senior frontend engineer",
      technologiesUsed: [
        "ReactJS",
        "NextJS",
        "TypeScript",
        "AWS",
        "Storybook",
        "Jest",
        "Cypress",
        "MUI",
      ],
    },
    ai: [
      "Interface on top of Veritone's aiWARE, which tags media with AI models from several providers",
    ],
    result:
      "Fuerza built the entire product interface. Veritone reports 60+ years of tagged media and metadata work cut from 371 days to hours.",
  },
  {
    id: "5",
    tag: "Client work",
    period: "2021 – 2023",
    title: "Veritone Voice",
    description:
      "Veritone's product for lifelike AI voices, custom voice creation and localization.",
    problem:
      "Media companies needed synthetic voices they could create, manage and localize at scale.",
    images: ["/veritone.1.png"],
    companyInfo: { name: "Veritone", website: "https://www.veritonevoice.com" },
    projectInfo: {
      role: "Frontend engineer",
      technologiesUsed: [
        "ReactJS",
        "NextJS",
        "TypeScript",
        "AWS",
        "Storybook",
        "Jest",
        "Cypress",
      ],
    },
    result: "Frontend work on the voice creation product.",
  },
  {
    id: "4",
    tag: "Client work",
    period: "Jun 2023 – Jun 2024",
    title: "Locorum, referral marketing for local businesses",
    description:
      "A referral marketing and loyalty platform that helps offline businesses grow through their own customers.",
    problem:
      "Local businesses depend on word of mouth but have no simple way to track and reward referrals.",
    images: ["/locorum_2.png", "/locorum_1.webp"],
    companyInfo: { name: "Locorum", website: "https://locorum.io" },
    projectInfo: {
      role: "Senior full stack engineer, leading a team of four",
      technologiesUsed: [
        "NextJS",
        "ReactJS",
        "TypeScript",
        "NodeJS",
        "PostgreSQL",
        "AWS",
        "Storybook",
        "TailwindCSS",
      ],
    },
    result:
      "Set the front-end direction, reviewed the team's code and shipped features across the whole stack.",
  },
  {
    id: "3",
    tag: "Client work",
    period: "2021 – 2023",
    title: "Ready Set",
    description:
      "A new product for producing creative videos at low cost, with a customizable database to improve ad performance.",
    problem:
      "Brands needed high-production creative videos without the cost of a full production.",
    images: [
      "/Readyset.1.webp",
      "/Readyset.2.png",
      "/Readyset.3.webp",
      "/Readyset.4.webp",
    ],
    companyInfo: {
      name: "Fuerza Studio",
      website: "https://fuerzastudio.com/cases/ready-set",
    },
    projectInfo: {
      role: "Senior full stack engineer",
      technologiesUsed: [
        "ReactJS",
        "NextJS",
        "TypeScript",
        "AWS",
        "Storybook",
        "Jest",
        "Cypress",
        "MUI",
      ],
    },
    result: "Full-cycle engagement from design to launch of the product.",
  },
  {
    id: "6",
    tag: "Client work",
    period: "Apr 2020 – Apr 2021",
    title: "Appgami, apps for Monday, Jira and Asana",
    description:
      "Custom apps that extend project management platforms like Monday, Jira and Asana.",
    problem:
      "Teams needed features their project management tools did not offer.",
    images: ["/appgami.1.png"],
    companyInfo: {
      name: "Appgami, London",
      website: "https://www.appgami.com",
    },
    projectInfo: {
      role: "Senior full stack engineer, leading developers across teams",
      technologiesUsed: [
        "ReactJS",
        "NodeJS",
        "TypeScript",
        "GraphQL",
        "AWS",
        "Firebase",
        "Playwright",
        "Cypress",
      ],
    },
    result:
      "Introduced GraphQL, AWS and end-to-end testing with Playwright, with Cypress and CodeCov in CI.",
  },
  {
    id: "7",
    tag: "Client work",
    title: "Atus, legal publications platform",
    description:
      "A platform that simplifies publishing mandatory legal notices.",
    problem:
      "Companies found the process of publishing mandatory legal notices slow and confusing.",
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
      role: "Full stack engineer and UI designer",
      technologiesUsed: [
        "ReactJS",
        "NextJS",
        "NodeJS",
        "TypeScript",
        "Strapi",
        "PostgreSQL",
        "AWS",
      ],
    },
    result:
      "A guided flow for creating publications, uploading documents and managing the account.",
  },
  {
    id: "8",
    tag: "Client work",
    period: "Dec 2012 – Jan 2019",
    title: "Accon, restaurant ordering platform",
    description:
      "App, website, WhatsApp orders and digital menus for restaurant and food franchise chains.",
    problem:
      "Restaurants needed one platform for orders coming from the app, the website and WhatsApp.",
    images: ["/accon.2.png", "/accon.1.png", "/accon.3.png", "/accon.4.png"],
    companyInfo: { name: "Accon", website: "https://accon.com.br" },
    projectInfo: {
      role: "Full stack engineer and team lead",
      technologiesUsed: [
        "ReactJS",
        "NodeJS",
        "TypeScript",
        "MongoDB",
        "PHP",
        "Docker",
      ],
    },
    result:
      "Grew to 3,100+ food-brand franchises, about 20% of its niche in year one. Led the migration from PHP to TypeScript, Node.js and React, with 40% better performance.",
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
