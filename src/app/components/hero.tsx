"use client";

import { ActivityGraph } from "@/app/components/activity-graph";

import { Spotlight } from "@/app/components/spotlight";
import Link from "next/link";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Meteors } from "@/app/components/meteors";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/erickpeixoto/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/erickpeixoto/",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "mailto:erickepeixoto@gmail.com",
    icon: Mail,
    label: "Email",
  },
  {
    href: "/Erick-Eduardo-Resume.pdf",
    icon: FileText,
    label: "Resume",
    external: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center">
      <Spotlight className="-top-8 -left-3" fill="#7E74F1" />

      <div className="w-full px-6 md:px-20 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 md:gap-8">
          {/* Left: Text content */}
          <div className="flex-1 max-w-2xl">
            {/* Role label */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="font-mono text-xs uppercase tracking-[0.3em] text-[--text-muted] mb-6 flex items-center gap-2"
            >
              <span className="text-identity">↗</span>
              Full Stack · Tech Lead · AI Engineer
            </motion.div>

            {/* Name */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
            >
              <h1 className="font-bricolage font-extrabold leading-[0.9] tracking-tight">
                <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-identity">
                  Erick
                </span>
                <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl dark:text-[--text-primary] text-gray-900">
                  Eduardo.
                </span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="mt-6 text-base md:text-lg text-[--text-secondary] max-w-md leading-relaxed"
            >
              13+ years building web products across agencies, startups and US
              teams. Today I also build AI products with agents at the core.
            </motion.p>

            {/* Social icons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="mt-8 flex items-center gap-5"
            >
              {socialLinks.map(({ href, icon: Icon, label, external }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={cn(
                    "text-[--text-muted] hover:text-identity transition-colors duration-200",
                  )}
                >
                  <Icon size={20} strokeWidth={1.5} />
                </Link>
              ))}
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-identity opacity-20 blur-2xl scale-105" />

              {/* Tilted backing */}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: -6 }}
                transition={{
                  delay: 0.4,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                className="absolute inset-0 rounded-2xl bg-identity/30"
              />

              {/* Photo frame */}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 4 }}
                transition={{
                  delay: 0.6,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                className="relative rounded-2xl overflow-hidden border border-[--surface-border] z-10"
              >
                <Image
                  src="/hero/profle2.png"
                  alt="Erick Eduardo"
                  width={280}
                  height={360}
                  className="block"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <ActivityGraph />
        </motion.div>
      </div>

      <Meteors number={12} className="-left-10" />
    </div>
  );
}
