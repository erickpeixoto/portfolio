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
    },
    {
      text: "Eduardo",
      className: "text-identity dark:text-identity",
    },
  ];

  return (
    <div className="grid grid-flow-col justify-stretch w-full p-5 gap-5 mt-20">
      {/* First element */}
      <div className="mt-20 pl-12">
        <Spotlight className="-top-8 -left-3" fill="#C2BEBE" />
        <p className="text-gray-500 uppercase leading-loose tracking-[.25em] font-thin">
          <span className="after:content-['_↗'] mr-3"></span>
          my name is
        </p>
        <TypewriterEffect words={logoWords} />
        <p className="font-inter mt-4 font-thin text-base max-w-lg text-left text-gray-300">
          Seasoned developer with 10+ years' experience, specializing in React,
          across startups and major corporations, delivering innovative and
          efficient software solutions.
        </p>
        {/* Social Network Items */}
        <div className="mt-10 flex gap-4">
          <Link href="https://www.linkedin.com/in/erickpeixoto/">
            <HoverCard>
              <HoverCardTrigger>
                <Linkedin
                  className="text-gray-300 hover:text-identity 
                transitoion duration-300 ease-in-out
                "
                />
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="p-4">
                  <p className="font-bold text-blue-400">LinkedIn</p>
                  <p>
                    Let's connect! Find me on LinkedIn to explore professional
                    opportunities and collaborations.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </Link>
          <Link href="https://github.com/erickpeixoto/">
            <Github
              className="text-gray-300 hover:text-identity 
                transitoion duration-300 ease-in-out
                "
            />
          </Link>
          <Link href="mailto:erickepeixoto@gmail.com">
            <MailIcon
              className="text-gray-300 hover:text-identity 
                transitoion duration-300 ease-in-out
                "
            />
          </Link>
          <Link href="/resume">
            <HoverCard>
              <HoverCardTrigger>
                <FileText
                  className="text-gray-300 hover:text-identity
                        transitoion duration-300 ease-in-out
                        "
                />
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="p-4">
                  <p className="font-bold text-blue-400">Download my resume</p>
                  <p>Find my resume here. It's a PDF file.</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </Link>
        </div>
      </div>
      {/* Second Element */}
      <div className="grid place-content-center">
        <motion.div
          initial={{ width: 0, height: 0, rotate: 0 }}
          animate={{ width: 300, height: 320, rotate: -10 }}
          transition={{
            duration: 0.5,
            rotate: {
              type: "spring",
              stiffness: 260,
              damping: 20,
              restDelta: 2,
            },
          }}
          className="bg-identity rounded w-[300px] h-[80px] z-0"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 10 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-[#EAE6FE] p-4 rounded z-10 w-[300px] h-[320px] rotate-0 "
          >
            <Image src="/profile.png" alt="Hero" width={300} height={320} />
          </motion.div>
        </motion.div>
      </div>
      <Meteors number={20} className="-left-10" />
    </div>
  );
}
