import { getProject } from "@/server/mock/projects/items-projects";
import Link from "next/link";
import React from "react";

import ProjectCarousel from "./projectsCarousel";
import { stackToIcon } from "@/server/mock/projects";

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-[--surface-border] pt-5">
      <h2 className="font-mono text-[11px] uppercase tracking-wider text-identity mb-2">
        {label}
      </h2>
      <div className="text-base leading-relaxed dark:text-[--text-primary] text-gray-800">
        {children}
      </div>
    </section>
  );
}

export default async function ProjectDetails({ id }: { id: string }) {
  const data = await getProject(id);
  const website = data.companyInfo.website;

  return (
    <article className="mx-auto max-w-5xl px-4 md:px-8 pt-6">
      <header className="mb-6">
        {data.tag && (
          <p className="font-mono text-[11px] uppercase tracking-wider text-identity mb-2">
            {data.tag}
            {data.period ? ` · ${data.period}` : ""}
          </p>
        )}
        <h1 className="font-bricolage font-bold text-3xl md:text-4xl dark:text-[--text-primary] text-gray-900 text-balance">
          {data.title}
        </h1>
        <p className="mt-3 max-w-2xl text-lg dark:text-[--text-secondary] text-gray-600">
          {data.description}
        </p>
        <p className="mt-2 text-sm dark:text-[--text-muted] text-gray-500">
          {website ? (
            <Link
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-identity underline underline-offset-4"
            >
              {data.companyInfo.name}
            </Link>
          ) : (
            data.companyInfo.name
          )}
        </p>
      </header>

      <div className="overflow-hidden rounded-2xl border border-[--surface-border]">
        <ProjectCarousel {...data} />
      </div>
      {data.imageNote && (
        <p className="mt-2 text-xs dark:text-[--text-muted] text-gray-500">
          {data.imageNote}
        </p>
      )}

      <div className="mt-10 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-x-12">
        {data.problem && <Section label="Problem">{data.problem}</Section>}
        <Section label="My role">{data.projectInfo.role}</Section>
        {data.ai && data.ai.length > 0 && (
          <Section label="AI">
            <ul className="list-disc pl-5 space-y-1">
              {data.ai.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>
        )}
        {data.result && <Section label="Result">{data.result}</Section>}
        <div className="md:col-span-2">
          <Section label="Stack">
            <div className="flex flex-wrap items-center gap-3 mt-1">
              {data.projectInfo.technologiesUsed.map((stackName) => (
                <span key={stackName}>{stackToIcon(stackName)}</span>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </article>
  );
}
