import { getProject } from "@/server/mock/projects";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiGraphql } from "react-icons/si";

export default async function ProjectDetails({ id }: { id: string }) {
  const data = await getProject(id);

  const stackToIcon = (stackName: string): JSX.Element => {
    const iconMap: { [key: string]: JSX.Element } = {
      "React.js": <FaReact size={32} />,
      "Node.js": <FaNodeJs size={32} />,
      AWS: <FaAws size={32} />,
      MongoDB: <SiMongodb size={32} />,
      TypeScript: <SiTypescript size={32} />,
      GraphQL: <SiGraphql size={32} />,
    };
    return iconMap[stackName];
  };

  return (
    <div className="flex justify-between h-full gap-4 p-4">
      <div className="w-1/3 p-4 rounded-lg flex flex-col justify-between">
        <div className="flex flex-col justify-between flex-1">
          <div>
            <h2 className="text-2xl font-bold mb-4">Company Information</h2>
            <p className="font-semibold">
              Name: <span className="font-normal">{data.companyInfo.name}</span>
            </p>
            <p className="font-semibold">
              Website:{" "}
              <Link
                href={data.companyInfo.website}
                className="font-normal hover:text-identity text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.companyInfo.website}
              </Link>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold">
              Stack Used:{" "}
              <div className="flex gap-2 flex-wrap">
                {data.companyInfo.stackUsed.map((stackName, index) => (
                  <span key={index}>{stackToIcon(stackName)}</span>
                ))}
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className="w-2/3 p-4 rounded-lg flex flex-col">
        <Image
          isZoomed
          src={data.image}
          alt="Project Image"
          width="100%"
          height="100%"
          className="rounded-md mb-4"
        />
        <div className="flex gap-1 flex-col">
          <p>
            <strong>Product:</strong> {data.title}
          </p>
          <p>
            <strong>Business:</strong> {data.description}
          </p>
          <p>
            <strong>Role:</strong> {data.projectInfo.role}
          </p>
          <p>
            <strong>Technologies Used:</strong>{" "}
            {data.projectInfo.technologiesUsed.join(", ")}
          </p>
          {data.projectInfo.achievements && (
            <p>
              <strong>Achievements:</strong>{" "}
              {data.projectInfo.achievements.join(", ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
