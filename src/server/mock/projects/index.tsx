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

export function stackToIcon(stackName: string): JSX.Element {
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
    AWS: <SiAwslambda size={32} className="hover:text-identity" title="AWS" />,
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
    Auth0: <SiAuth0 size={32} className="hover:text-identity" title="Auth0" />,
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
      <SiFirebase size={32} className="hover:text-identity" title="Firebase" />
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
}
