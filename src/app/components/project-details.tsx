import { getProject } from "@/server/mock/projects/items-projects";
import Link from "next/link";
import React from "react";

import ProjectCarousel from "./projectsCarousel";
import { stackToIcon } from "@/server/mock/projects";

export default async function ProjectDetails({ id }: { id: string }) {
  const data = await getProject(id);

  return (
    <div className="md:p-8">
      <div className="md:flex  h-full gap-4 md:p-4 ">
        <div className="md:w-1/3 p-4 flex flex-col justify-between">
          <div className="md:flex flex-col justify-between flex-1">
            <div className="hidden md:block">
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
            <div className="mt-4 hidden md:block">
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
        <div className="md:w-2/3 w-full md:p-8 flex flex-col">
          <ProjectCarousel {...data} />
        </div>
      </div>
      <div className="flex gap-2 flex-col flex-1 mt-10 p-5 md:p-0">
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
