"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { SIMPLE_TESTIMONIALS } from "@/server/mock/testimonials";

const INTERVAL = 8000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const total = SIMPLE_TESTIMONIALS.length;

  const go = (i: number, dir: number) => {
    setDirection(dir);
    setIndex((i + total) % total);
  };

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => go(index + 1, 1), INTERVAL);
    return () => clearTimeout(id);
  }, [index, paused]);

  const t = SIMPLE_TESTIMONIALS[index]!;

  return (
    <section
      className="relative overflow-hidden px-6 md:px-20 py-20 md:py-28 dark:bg-[--surface-1] bg-[#F6F5FE]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Testimonials"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute top-2 md:top-6 right-4 md:right-20 font-bricolage font-bold leading-[0.8] text-identity/10 text-[200px] md:text-[320px] select-none"
      >
        &rdquo;
      </span>

      <div className="relative max-w-5xl">
        <p className="font-mono text-xs text-[--text-muted] uppercase tracking-[0.3em] mb-3">
          Colleagues say
        </p>
        <h2 className="font-bricolage font-bold text-4xl md:text-5xl dark:text-[--text-primary] text-gray-900 mb-12 md:mb-16">
          From the people I worked with
        </h2>

        <div className="min-h-[300px] md:min-h-[260px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="not-italic border-0 pl-0 m-0 font-bricolage text-xl md:text-3xl leading-snug md:leading-snug dark:text-[--text-primary] text-gray-900 max-w-4xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <Image
                  src={t.photo}
                  alt=""
                  width={52}
                  height={52}
                  className="rounded-full ring-2 ring-identity ring-offset-2 ring-offset-[#F6F5FE] dark:ring-offset-[--surface-1] object-cover"
                />
                <div>
                  <Link
                    href={t.linkedinUrl}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 font-semibold dark:text-[--text-primary] text-gray-900 hover:text-identity transition-colors"
                  >
                    {t.name}
                    <Linkedin size={13} className="text-[--text-muted]" />
                  </Link>
                  <p className="font-mono text-[11px] text-[--text-muted] uppercase tracking-wider mt-0.5">
                    {t.role} · {t.company}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-[--surface-border] pt-6">
          <div
            className="flex items-center gap-2 md:gap-3"
            role="tablist"
            aria-label="Choose a testimonial"
          >
            {SIMPLE_TESTIMONIALS.map((item, i) => {
              const active = i === index;
              return (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={active}
                  aria-label={`${item.name}, ${item.role}`}
                  onClick={() => go(i, i > index ? 1 : -1)}
                  className="relative flex flex-col items-center gap-1.5"
                >
                  <Image
                    src={item.photo}
                    alt=""
                    width={40}
                    height={40}
                    className={`rounded-full object-cover transition-all duration-300 ${
                      active
                        ? "opacity-100 scale-110"
                        : "opacity-45 grayscale hover:opacity-80 hover:grayscale-0"
                    }`}
                  />
                  <span className="block h-[2px] w-8 rounded-full bg-[--surface-border] overflow-hidden">
                    {active && (
                      <motion.span
                        key={`${item.id}-${paused}`}
                        className="block h-full bg-identity origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: paused ? 0 : 1 }}
                        transition={{
                          duration: paused ? 0 : INTERVAL / 1000,
                          ease: "linear",
                        }}
                      />
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-[--text-muted]">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
            <button
              onClick={() => go(index - 1, -1)}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-[--surface-border] flex items-center justify-center text-[--text-muted] hover:border-identity hover:text-identity transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => go(index + 1, 1)}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-[--surface-border] flex items-center justify-center text-[--text-muted] hover:border-identity hover:text-identity transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
