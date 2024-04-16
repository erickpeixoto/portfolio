import {
  TbBrandGraphql,
  TbBrandNextjs,
  TbBrandPrisma,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandTypescript,
  TbThumbUp,
  TbBrain,
  TbTrendingUp,
} from "react-icons/tb";
import {
  SiTrpc,
  SiTestinglibrary,
  SiNodedotjs,
  SiPrisma,
  SiMysql,
  SiGo,
  SiGraphql,
  SiMongodb,
  SiPostman,
  SiCircleci,
  SiAmazonaws,
  SiGooglemeet,
  SiVercel,
} from "react-icons/si";
import { GoGoal } from "react-icons/go";

export const stack = () => {
  return {
    front: [
      {
        id: 10,
        name: "Next.js Expertise",
        designation: "8+ years experience",
        icon: (
          <TbBrandNextjs className="w-10 h-10 hover:text-gray-400  transition duration-500 ease-in-out transform hover:scale-105" />
        ),
      },
      {
        id: 2,
        name: "React.js Mastery",
        designation: "8+ years experience",
        icon: (
          <TbBrandReact className="w-10 h-10 hover:text-blue-400  transition duration-500 ease-in-out transform hover:scale-105" />
        ),
      },
      {
        id: 3,
        name: "GraphQL Integration",
        designation: "6+ years experience",
        icon: (
          <TbBrandGraphql className="w-10 h-10 hover:text-[#db2777] transition duration-500 ease-in-out transform hover:scale-105" />
        ),
      },
      {
        id: 4,
        name: "Tailwind CSS for Design",
        designation: "4+ years experience",
        icon: (
          <TbBrandTailwind className="w-10 h-10 hover:text-blue-500  transition duration-500 ease-in-out transform hover:scale-105" />
        ),
      },
      {
        id: 5,
        name: "Prisma for ORM",
        designation: "3+ years experience",
        icon: (
          <TbBrandPrisma className="w-10 h-10  hover:text-identity transition duration-500 ease-in-out transform hover:scale-105" />
        ),
      },
      {
        id: 6,
        name: "tRPC for End-to-End Types",
        designation: "3+ year experience",
        icon: (
          <SiTrpc className="w-10 h-10  hover:text-blue-400  transition duration-500 ease-in-out transform hover:scale-105" />
        ),
      },
      {
        id: 7,
        name: "Quality Assurance",
        designation: "12+ years experience",
        icon: (
          <SiTestinglibrary className="w-10 h-10 hover:text-red-400 transition duration-500 ease-in-out transform hover:scale-105" />
        ),
      },
      {
        id: 8,
        name: "TypeScript",
        designation: "8+ years experience",
        icon: (
          <TbBrandTypescript className="w-10 h-10 hover:text-blue-400  transition duration-500 ease-in-out transform hover:scale-105" />
        ),
      },
    ],
    back: [
      {
        id: 1,
        name: "TypeScript",
        designation: "8+ years experience",
        icon: (
          <TbBrandTypescript className="w-10 h-10 hover:text-blue-400  transition duration-500 ease-in-out transform hover:scale-105" />
        ),
      },
      {
        id: 2,
        name: "Node.js Proficiency",
        designation: "10+ years experience",
        icon: (
          <SiNodedotjs className="w-10 h-10 hover:text-green-500 transition duration-500 ease-in-out transform hover:scale-105" />
        ),
      },
      {
        id: 3,
        name: "Prisma for ORM",
        designation: "4+ years experience",
        icon: (
          <SiPrisma className="w-10 h-10 hover:text-pink-500 transition duration-500 ease-in-out transform hover:scale-105" />
        ),
      },
      {
        id: 4,
        name: "SQL Databases",
        designation: "10+ years experience",
        icon: (
          <SiMysql className="w-10 h-10 hover:text-blue-500 transition duration-500 ease-in-out transform hover:scale-105" />
        ),
      },
      {
        id: 5,
        name: "NoSQL Databases",
        designation: "8+ years experience",
        icon: (
          <SiMongodb className="w-10 h-10 hover:text-green-400 transition duration-500 ease-in-out transform hover:scale-105" />
        ),
      },
      {
        id: 6,
        name: "RESTful APIs",
        designation: "12+ years experience",
        icon: (
          <SiPostman className="w-10 h-10 hover:text-orange-500 transition duration-500 ease-in-out transform hover:scale-105" />
        ),
      },
      {
        id: 7,
        name: "GraphQL APIs",
        designation: "8+ years experience",
        icon: (
          <SiGraphql className="w-10 h-10 hover:text-pink-400 transition duration-500 ease-in-out transform hover:scale-105" />
        ),
      },
      {
        id: 8,
        name: "Go Language",
        designation: "2+ years experience",
        icon: (
          <SiGo className="w-10 h-10 hover:text-blue-500 transition duration-500 ease-in-out transform hover:scale-105" />
        ),
      },
      {
        id: 9,
        name: "Testing & QA",
        designation: "12+ years experience",
        icon: (
          <SiTestinglibrary className="w-10 h-10 hover:text-red-400 transition duration-500 ease-in-out transform hover:scale-105" />
        ),
      },
    ],
    lead: [
      {
        id: 1,
        name: "Team Mentorship",
        designation: "Inspiring and guiding team members towards growth",
        icon: (
          <TbBrain className="w-10 h-10 hover:text-green-600 transition duration-500 ease-in-out transform hover:scale-105" />
        ),
      },
      {
        id: 2,
        name: "Strategic Planning",
        designation: "Aligning tech with business goals",
        icon: (
          <GoGoal className="w-10 h-10 hover:text-blue-600 transition duration-500 ease-in-out transform hover:scale-105" />
        ),
      },
      {
        id: 3,
        name: "Quality Assurance",
        designation: "Upholding high standards of software excellence",
        icon: (
          <TbThumbUp className="w-10 h-10 hover:text-green-500 transition duration-500 ease-in-out transform hover:scale-105" />
        ),
      },
      {
        id: 4,
        name: "Technical Decision Making",
        designation: "Architecting robust and scalable solutions",
        icon: (
          <TbTrendingUp className="w-10 h-10 hover:text-purple-600 transition duration-500 ease-in-out transform hover:scale-105" />
        ),
      },
    ],
    process: [
      {
        id: 1,
        name: "CI/CD Pipelines",
        designation: "Automating build and deployment processes",
        icon: (
          <SiCircleci className="w-10 h-10 hover:text-blue-400 transition duration-500 ease-in-out transform hover:scale-105" />
        ),
      },
      {
        id: 2,
        name: "Vercel Deployment",
        designation: "Seamless frontend deployment and hosting",
        icon: (
          <SiVercel className="w-10 h-10 hover:text-slate-400 transition duration-500 ease-in-out transform hover:scale-105" />
        ),
      },
      {
        id: 3,
        name: "AWS Cloud Services",
        designation: "Leveraging AWS for scalable cloud solutions",
        icon: (
          <SiAmazonaws className="w-10 h-10 hover:text-orange-500 transition duration-500 ease-in-out transform hover:scale-105" />
        ),
      },
      {
        id: 4,
        name: "Client Meetings",
        designation: "Effective communication and project alignment",
        icon: (
          <SiGooglemeet className="w-10 h-10 hover:text-green-500 transition duration-500 ease-in-out transform hover:scale-105" />
        ),
      },
    ],
  };
};
