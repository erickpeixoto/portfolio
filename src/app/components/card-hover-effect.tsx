"use client";

import { cn } from "@/lib/utils";
import { Project } from "@/server/mock/projects/project.types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HoverEffect = ({
  items,
  className,
}: {
  items: Project[];
  className?: string;
}) => {
  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2 gap-4 py-6", className)}
    >
      {items.map((item, index) => (
        <motion.div
          key={item?.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Link href={`/projects/${item.id}`} className="block h-full group">
            <Card project={item} />
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export const Card = ({ project }: { project: Project }) => {
  const techPills = project.projectInfo?.technologiesUsed?.slice(0, 4) ?? [];

  return (
    <div className="h-full rounded-2xl border border-[--surface-border] dark:bg-[--surface-1] bg-white transition-all duration-300 group-hover:border-identity/40 group-hover:shadow-[0_0_24px_rgba(126,116,241,0.12)] overflow-hidden">
      {/* Image */}
      {project.images?.[0] && (
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        {project.tag && (
          <p className="font-mono text-[10px] uppercase tracking-wider text-identity mb-2">
            {project.tag}
            {project.period ? ` · ${project.period}` : ""}
          </p>
        )}
        <h3 className="font-bricolage font-bold text-lg dark:text-[--text-primary] text-gray-900 mb-1">
          {project.title}
        </h3>
        {project.companyInfo?.name && (
          <p className="font-mono text-[11px] text-[--text-muted] uppercase tracking-wider mb-3">
            {project.companyInfo.name}
          </p>
        )}

        {project.problem && (
          <p className="text-sm leading-relaxed dark:text-[--text-secondary] text-gray-600 line-clamp-3">
            {project.problem}
          </p>
        )}

        {/* Tech pills */}
        {techPills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {techPills.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[--identity-dim] text-identity border border-identity/20"
              >
                {tech}
              </span>
            ))}
            {(project.projectInfo?.technologiesUsed?.length ?? 0) > 4 && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono text-[--text-muted]">
                +{project.projectInfo.technologiesUsed.length - 4} more
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
