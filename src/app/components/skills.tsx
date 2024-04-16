"use client";

import { StickyScroll } from "@/app/components/sticky-scroll-reveal";
import { Content } from "@/server/mock/skills/content";

export function Skills() {
  return (
    <div className="pb-10">
      <StickyScroll content={Content()} />
    </div>
  );
}
