"use client";
import React from "react";
import { StickyScroll } from "@/app/components/sticky-scroll-reveal";
import { EvervaultCard } from "@/app/components/evervault-card";
import { AnimatedTooltip } from "@/app/components/tooltip";

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
import ButtonVideo from "./buttonVideoCall";

const stack = {
  front: () => [
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
  back: () => [
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
  lead: () => [
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
  process: () => [
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

const content = [
  {
    title: "As a Frontend Specialist",
    description:
      "Harnessing over 8 years of expertise in React.js, I bring high-quality, optimized frontend solutions that exceed client expectations. By fostering real-time collaboration with teams, clients, and stakeholders, I streamline workflows and boost productivity. My commitment to excellence ensures seamless, collaborative editing and a dynamic user experience that stands out.",
    content: (
      <div className="border border-slate/[0.2] dark:border-white/[0.2] flex flex-col items-start mx-auto p-4 relative h-full">
        <EvervaultCard text="Client" />

        <div className="dark:text-white text-slate-500 mt-4 text-sm font-light flex flex-row gap-3">
          <AnimatedTooltip items={stack.front()} />
        </div>

        <div className="mt-5 dark:text-white text-slate-500">
          My expertise in Next.js empowers me to architect web applications that
          are not only high-performing and scalable but also SEO-friendly,
          meeting today's web standards. Through my mastery of React.js, I
          create interactive and state-of-the-art user interfaces that are both
          intuitive and delightful to use.
          <div className="mt-2">
            <ButtonVideo
              description="Watch the Video"
              URI="https://calendly.com/tech-lead"
              className="-mt-2 float-end"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "As a Backend Architect",
    description:
      "With profound knowledge in Node.js and database management, I ensure real-time data synchronization and system resilience. My backend solutions enable seamless tracking of modifications, eliminating confusion and revolutionizing project management with clarity and efficiency. Embrace simplicity and reliability in your projects with my expertise.",
    content: (
      <div className="border  border-slate/[0.2] dark:border-white/[0.2] flex flex-col items-start  mx-auto p-4 relative h-full">
        <EvervaultCard text="Server" />

        <div className="dark:text-white text-black mt-4 text-sm font-light flex flex-row gap-3  ">
          <AnimatedTooltip items={stack.back()} />
        </div>

        <div className="mt-5 dark:text-white text-slate-500">
          Leveraging advanced backend technologies such as Node.js, Go, and
          comprehensive database systems including SQL and NoSQL, I enhance
          backend operations. ORM tools like Prisma refine data management,
          while REST and GraphQL APIs facilitate seamless data exchange.
          <div className="mt-2">
            <ButtonVideo
              description="Watch the Video"
              URI="https://calendly.com/tech-lead"
              className="-mt-2 float-end"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "As a Tech Lead",
    description:
      "My leadership extends beyond technical expertise, as I steer cross-functional teams through complex projects with a strategic vision. I champion agile practices, enforce robust DevOps pipelines, and advocate for continuous learning and innovation.",
    content: (
      <div className="border  border-slate/[0.2] dark:border-white/[0.2] flex flex-col items-start mx-auto p-4 relative h-full">
        <EvervaultCard text="Leadership" />
        <div className="dark:text-white text-black mt-4 text-sm font-light flex flex-row gap-3">
          <AnimatedTooltip items={stack.lead()} />
        </div>
        <div className="mt-5 dark:text-white text-slate-500">
          In my capacity as a Tech Lead, I drive technological advancement and
          organizational growth by fostering a culture of innovation. I ensure
          that teams are agile, processes are optimized, and solutions are
          scalable, leading our projects to exceed business objectives and set
          new benchmarks in the industry.
          <div className="mt-2">
            <ButtonVideo
              description="Watch the Video"
              URI="https://calendly.com/tech-lead"
              className="-mt-2 float-end"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Mastering Development Processes",
    description:
      "Through automating build and deployment processes with CircleCI, hosting on Vercel, managing infrastructure on AWS, and maintaining open lines of communication with clients via Google Meet, I champion a process-driven culture. This approach not only enhances efficiency and scalability but also ensures that our deliverables are perfectly aligned with our clients' needs and expectations.",
    content: (
      <div className="border  border-slate/[0.2] dark:border-white/[0.2] flex flex-col items-start  mx-auto p-4 relative h-full">
        <EvervaultCard text="technology" />

        <div className="dark:text-white text-black mt-4 text-sm font-light flex flex-row gap-3">
          <AnimatedTooltip items={stack.process()} />
        </div>

        <div className="mt-5 dark:text-white text-slate-500">
          I spearhead development processes by integrating CI/CD pipelines with
          CircleCI, deploying via Vercel for front-end excellence, and
          leveraging AWS for scalable cloud infrastructure. My approach
          emphasizes seamless, automated workflows and effective client
          communication, ensuring project delivery that is both innovative and
          aligned with business objectives.
          <div className="-mt-3">
            <ButtonVideo
              description="Dive in-depth on it"
              URI="https://calendly.com/tech-lead"
              className="-mt-2 float-end"
            />
          </div>
        </div>
      </div>
    ),
  },
];

export function Skills() {
  return (
    <div className="pt-10 pb-10">
      <StickyScroll content={content} />
    </div>
  );
}
