import { getProject } from "@/server/mock/projects";
import Link from "next/link";
import React from "react";
import {
  SiTypescript,
  SiMongodb,
  SiGraphql,
  SiNextdotjs,
  SiTailwindcss,
  SiGithubactions,
  SiServerless,
  SiTrpc,
  SiOpenai,
  SiAwslambda,
  SiReact,
  SiNodedotjs,
  SiPrisma,
  SiPostgresql,
  SiPhp,
  SiDocker,
  SiAuth0,
  SiPostman,
  SiGo,
  SiStyledcomponents,
  SiJest,
  SiMui,
  SiStrapi,
  SiVercel,
  SiFirebase,
  SiCypress,
  SiPlaywright,
  SiStorybook,
} from "react-icons/si";
import ProjectCarousel from "./projectsCarousel";

export default async function ProjectDetails({ id }: { id: string }) {
  const data = await getProject(id);

  const stackToIcon = (stackName: string): JSX.Element => {
    const iconMap: { [key: string]: JSX.Element } = {
      ReactJS: (
        <SiReact size={32} className="hover:text-identity" title="ReactJS" />
      ),
      NextJS: (
        <SiNextdotjs size={32} className="hover:text-identity" title="NextJS" />
      ),
      NodeJS: (
        <SiNodedotjs size={32} className="hover:text-identity" title="NodeJS" />
      ),
      AWS: (
        <SiAwslambda size={32} className="hover:text-identity" title="AWS" />
      ),
      MongoDB: (
        <SiMongodb size={32} className="hover:text-identity" title="MongoDB" />
      ),
      TypeScript: (
        <SiTypescript
          size={32}
          className="hover:text-identity"
          title="TypeScript"
        />
      ),
      GraphQL: (
        <SiGraphql size={32} className="hover:text-identity" title="GraphQL" />
      ),
      TailwindCSS: (
        <SiTailwindcss
          size={32}
          className="hover:text-identity"
          title="TailwindCSS"
        />
      ),
      "CI/CD": (
        <SiGithubactions
          size={32}
          className="hover:text-identity"
          title="CI/CD"
        />
      ),
      Serverless: (
        <SiServerless
          size={32}
          className="hover:text-identity"
          title="Serverless"
        />
      ),
      tRPC: <SiTrpc size={32} className="hover:text-identity" title="tRPC" />,
      OpenAI: (
        <SiOpenai size={32} className="hover:text-identity" title="OpenAI" />
      ),
      Prisma: (
        <SiPrisma size={32} className="hover:text-identity" title="Prisma" />
      ),
      PostgreSQL: (
        <SiPostgresql
          size={32}
          className="hover:text-identity"
          title="PostgreSQL"
        />
      ),
      Auth0: (
        <SiAuth0 size={32} className="hover:text-identity" title="Auth0" />
      ),
      Docker: (
        <SiDocker size={32} className="hover:text-identity" title="Docker" />
      ),
      Postman: (
        <SiPostman size={32} className="hover:text-identity" title="Postman" />
      ),
      PHP: <SiPhp size={32} className="hover:text-identity" title="PHP" />,
      Go: <SiGo size={32} className="hover:text-identity" title="Go" />,
      StyledComponents: (
        <SiStyledcomponents
          size={32}
          className="hover:text-identity"
          title="StyledComponents"
        />
      ),
      Jest: <SiJest size={32} className="hover:text-identity" title="Jest" />,
      Storybook: (
        <SiStorybook
          size={32}
          className="hover:text-identity"
          title="Storybook"
        />
      ),
      MUI: <SiMui size={32} className="hover:text-identity" title="MUI" />,
      Strapi: (
        <SiStrapi size={32} className="hover:text-identity" title="Strapi" />
      ),
      Vercel: (
        <SiVercel size={32} className="hover:text-identity" title="Vercel" />
      ),
      Firebase: (
        <SiFirebase
          size={32}
          className="hover:text-identity"
          title="Firebase"
        />
      ),
      Cypress: (
        <SiCypress size={32} className="hover:text-identity" title="Cypress" />
      ),
      Playwright: (
        <SiPlaywright
          size={32}
          className="hover:text-identity"
          title="Playwright"
        />
      ),
    };
    return iconMap[stackName];
  };

  return (
    <div className="px-5">
      <div className="md:flex  h-full gap-4 p-4 ">
        <div className="md:w-1/3 p-4 rounded-lg flex flex-col justify-between">
          <div className="md:flex flex-col justify-between flex-1">
            <div>
              <h2 className="text-2xl font-bold mb-4">Company Information</h2>
              <div className="font-semibold">
                Name:{" "}
                <span className="font-normal">{data.companyInfo.name}</span>
              </div>
              <div className="font-semibold">
                Website:{" "}
                <Link
                  href={data.companyInfo.website}
                  className="font-normal hover:text-identity text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.companyInfo.website}
                </Link>
              </div>
            </div>
            <div className="mt-4">
              <div className="font-semibold">
                Stack Used:{" "}
                <div className="flex gap-2 flex-wrap overflow-hidden">
                  {data.projectInfo.technologiesUsed.map((stackName, index) => (
                    <span key={index}>{stackToIcon(stackName)}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-2/3 p-4 rounded-lg flex flex-col">
          <ProjectCarousel {...data} />
        </div>
      </div>
      <div className="flex gap-1 flex-col flex-1">
        <div>
          <strong>Product:</strong> {data.title}
        </div>
        <div>
          <strong>Business:</strong> {data.description}
        </div>
        <div>
          <strong>Role:</strong> {data.projectInfo.role}
        </div>
        <div>
          <strong>Technologies Used:</strong>{" "}
          {data.projectInfo?.technologiesUsed?.join(", ")}
        </div>
        {data.projectInfo.achievements && (
          <div>
            <strong>Achievements:</strong>{" "}
            {data.projectInfo.achievements.join(", ")}
          </div>
        )}
      </div>
    </div>
  );
}
