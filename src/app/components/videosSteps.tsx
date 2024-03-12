"use client";

import { useState } from "react";
import { Stepper } from "@mantine/core";
import { motion } from "framer-motion";
import Video from "next-video";

import firstVideo from "../../../videos/example.mov";
import secondVideo from "../../../videos/example.mov";
import HeaderTitle from "./headerTitle";

export function VideoSteps() {
  const [active, setActive] = useState(0);
  const steps = [
    {
      label: "Introduction",
      description: "Get to know more about my journey.",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      label: "Projects",
      description: "Deep dive into my projects.",
      videoUrl:
        "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4",
    },
    {
      label: "Technologies",
      description: "Explore the technologies I specialize in.",
      videoUrl:
        "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_10mb.mp4",
    },
    {
      label: "Conclusion",
      description: "Final thoughts and contact information.",
      videoUrl:
        "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    },
  ];
  return (
    <div className="flex flex-row gap-3 justify-between p-5">
      <div className="w-full h-screen flex flex-col">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full border-2 border-identity/65 rounded-lg overflow-hidden shadow-lg p-5"
          key={active}
        >
          <Video
            src={active === 0 ? firstVideo : secondVideo}
            controls
            accentColor="#7E74F1"
          />
        </motion.div>
      </div>
      <div className="w-2/3 h-screen flex place-items-center place-content-center">
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
              style={{ height: 200 }}
            />
          ))}
        </Stepper>
      </div>
    </div>
  );
}
