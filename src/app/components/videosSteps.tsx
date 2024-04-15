"use client";

import { useState } from "react";
import { Stepper } from "@mantine/core";
import { motion } from "framer-motion";
import Video from "next-video";
import Image from "next/image";

import { Separator } from "@/app/components/ui/separator";
import firstVideo from "@/videos/introduction.mov";

import Link from "next/link";

export function VideoSteps() {
  const [active, setActive] = useState(0);
  const steps = [
    {
      label: "Introduction",
      description:
        "Discover the milestones of my decade-long journey in software development, leading diverse teams and innovating with cutting-edge technologies",
      videoSrc: firstVideo,
      placeholder: "/video-placeholder.png",
    },
    {
      label: "Signature Projects",
      description:
        "A showcase of key projects that highlight my problem-solving skills, from conceptualization to deployment, emphasizing my role in driving project success",
      videoSrc: null,
    },
    {
      label: "Technology Insights",
      description:
        "Dive into my expertise with React.js and Node.js, including advanced techniques and best practices that I've implemented to optimize project outcomes",
      videoSrc: null,
    },
    {
      label: "Leadership & Innovation",
      description:
        "Insights into my leadership approach, fostering team growth, and embracing innovative solutions to meet and exceed project goals",
      videoSrc: null,
    },
    {
      label: "Connect & Collaborate",
      description:
        "opportunities and collaboration. Here's how you can reach out to me for partnerships, projects, or to exchange ideas about the future of tech",
      videoSrc: null,
    },
  ];

  return (
    <div className="md:flex flex-row gap-3 justify-between p-5">
      <div className="w-full md:h-400px flex flex-col md:mb-0 mb-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full border-2 border-identity/65 rounded-lg overflow-hidden shadow-lg p-5"
          key={active}
        >
          {steps[active].videoSrc ? (
            <Video
              src={steps[active].videoSrc ?? ""}
              controls
              accentColor="#7E74F1"
              poster={steps[active].placeholder}
            />
          ) : (
            <div className="text-center text-lg md:h-[400px] h-[200px]  place-content-center">
              <div>Video coming soon...</div>
            </div>
          )}
        </motion.div>
        <Separator className="mt-10" />
        <div className="mt-4 p-4">
          <Stepper
            active={active + 1}
            onStepClick={setActive}
            orientation="vertical"
            color="violet"
          >
            {steps.map((step, index) => (
              <Stepper.Step
                key={index}
                label={step.label}
                description={step.description}
                style={{ height: 100 }}
              />
            ))}
          </Stepper>
        </div>
      </div>
      <div className="md:w-2/3 w-full h-screen flex place-content-center pl-4">
        <div className="text-lg my-4">
          <h2 className="font-bold text-xl mb-2">Segment Insight</h2>
          <div className="text-base">
            In this segment{" "}
            <span className="font-bold">{steps[active].label}</span>, we delve
            into <strong>{steps[active].description.toLowerCase()}</strong>.
            This journey highlights the evolution of my career, the challenges
            overcome, and the milestones reached. Whether you're interested in
            the technical aspects or the stories behind the projects, there's
            something here for everyone.
          </div>

          <div className="mt-8">
            <h3 className="font-bold text-lg mb-2">Join the Conversation</h3>
            <div className="text-base">
              I'm keen to hear your thoughts, questions, or feedback. Sharing
              ideas can spark meaningful discussions and lead to collaborative
              opportunities. Don't hesitate to reach out {":)"}
            </div>

            <div className="mt-4">
              <Link
                href="mailto:erickepeixoto@gmail.com"
                className="inline-block bg-identity text-white font-bold py-2 px-4 rounded hover:bg-identity/65 transition-colors duration-300"
              >
                Send an Email
              </Link>

              <Link
                href="https://www.linkedin.com/in/erickpeixoto"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
