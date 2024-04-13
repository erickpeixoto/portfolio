"use client";

import { Spotlight } from "@/app/components/spotlight";
import { TypewriterEffect } from "./typingHero";
import Link from "next/link";
import { Github, Linkedin, MailIcon, FileText } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/app//components/ui/hover-card";
import { Meteors } from "@/app/components/meteors";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const logoWords = [
    {
      text: "Erick",
      className: "text-[32px]",
    },
    {
      text: "Eduardo",
      className: "text-identity dark:text-identity text-[32px]",
    },
  ];

  return (
    <div className="md:grid grid-flow-col justify-stretch w-full p-5 gap-5 md:mt-20">
      {/* First element */}
      <div className="mt-20 pl-12">
        <Spotlight className="-top-8 -left-3" fill="#C2BEBE" />
        <p className="text-gray dark:text-gray-500 uppercase leading-loose tracking-[.25em]">
          <span className="after:content-['_↗'] mr-3"></span>
          my name is
        </p>
        <TypewriterEffect words={logoWords} />
        <p className="font-inter mt-4 text-base max-w-lg text-left text-gray-500 dark:text-gray-400 ">
          Seasoned developer with 10+ years' experience, specializing in React,
          across startups and major corporations, delivering innovative and
          efficient software solutions.
        </p>
        {/* Social Network Items */}
        <div className="mt-10 flex gap-4">
          <HoverCard>
            <HoverCardTrigger>
              <Linkedin
                className="dark:text-gray-300 text-gray-500 hover:text-identity 
                transitoion duration-300 ease-in-out cursor-pointer
                "
              />
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="p-4 flex gap-3 flex-col">
                <Link
                  href="https://www.linkedin.com/in/erickpeixoto/"
                  className="text-blue-400"
                  target="_blank"
                >
                  LinkedIn
                </Link>
                <p>
                  Let's connect! Find me on LinkedIn to explore professional
                  opportunities and collaborations.
                </p>
                <p>
                  <Link
                    href="https://www.linkedin.com/in/erickpeixoto/"
                    className="text-blue-400"
                    target="_blank"
                  >
                    Click here
                  </Link>
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
          <Link href="https://github.com/erickpeixoto/" target="_blank">
            <Github
              className="dark:text-gray-300 text-gray-500 hover:text-identity 
                transitoion duration-300 ease-in-out
                "
            />
          </Link>
          <Link href="mailto:erickepeixoto@gmail.com">
            <MailIcon
              className="dark:text-gray-300 text-gray-500 hover:text-identity 
                transitoion duration-300 ease-in-out
                "
            />
          </Link>

          <HoverCard>
            <HoverCardTrigger>
              <FileText
                className="dark:text-gray-300 text-gray-500 hover:text-identity
                        transitoion duration-300 ease-in-out cursor-pointer
                        "
              />
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="p-4 flex gap-4 flex-col">
                <p className="font-bold text-blue-400">Resume</p>
                <p>Find my resume here. It's a PDF file.</p>
                <Link
                  href="https://www.linkedin.com/in/erickpeixoto/"
                  className="text-blue-400"
                  target="_blank"
                >
                  Click here to download
                </Link>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
      {/* Second Element */}
      <div className="grid place-content-center mt-11 md:mt-0">
        <motion.div
          initial={{ width: 0, height: 0, rotate: 0 }}
          animate={{ width: 300, height: 380, rotate: -10 }}
          transition={{
            duration: 0.5,
            rotate: {
              type: "spring",
              stiffness: 260,
              damping: 20,
              restDelta: 2,
            },
          }}
          className="bg-identity rounded w-[380px] h-[80px] z-0"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 10 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-[#EAE6FE] p-4 rounded z-10 w-[300px] h-[370px] rotate-0 "
          >
            <Image src="/profile.jpeg" alt="Hero" width={300} height={380} />
          </motion.div>
        </motion.div>
      </div>
      <Meteors number={20} className="-left-10" />
    </div>
  );
}
