"use client";

import { cn } from "@/lib/utils";
import { CardStack } from "@/app/components/ui/card-stack";
import { Separator } from "@/app/components/ui/separator";
import { AnimatedTooltip as Avatar } from "@/app/components/tooltip";
import Image from "next/image";

export function Testimonials() {
  return (
    <div className="md:pr-16 w-full md:mb-0 mb-8">
      <h1 className="text-2xl font-bold mb-5">
        Testimonials <span className="text-emerald-500">🔥</span>
      </h1>
      <Separator className="md:w-1/3 w-full mb-16" />
      <CardStack items={TESTIMONIALS} />
    </div>
  );
}

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className,
      )}
    >
      {children}
    </span>
  );
};

export const TESTIMONIALS = [
  {
    id: 0,
    name: "Guilherme Trindade",
    designation: "https://www.linkedin.com/in/guilhermeft/",
    company: "Fuerza Studio",
    role: "Full Stack Developer",
    content: (
      <div>
        <Avatar
          items={[
            {
              id: 0,
              name: "Guilherme Trindade",
              designation: "Full Stack Developer at Fuerza Studio",
              icon: (
                <Image
                  src="/testimonials/guilherme.jpeg"
                  alt="Guilherme Trindade"
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-identity m-3"
                />
              ),
            },
          ]}
          className="float-start m-3"
        />
        Working with Erick was very good for my career. From the way he manages
        teams to the technologies and programming techniques used, it makes both
        the team work better and any application easy to understand, applying{" "}
        <Highlight>legible market standards</Highlight>. It was with him that I
        learned about <Highlight>unit tests</Highlight> and the main programming
        patterns with <Highlight>Next.js</Highlight>. I had the privilege of
        managing a team of devs, and I applied everything that Erick had already
        done in other projects, which made the devs who stayed with me miss
        working on that project that had everything good and the best. The guy
        is awesome 😁
      </div>
    ),
  },
  {
    id: 1,
    name: "Lucas Aires",
    designation: "https://www.linkedin.com/in/lucasaires/",
    company: "Accon Technology",
    role: "QA Specialist",
    content: (
      <div>
        <Avatar
          items={[
            {
              id: 1,
              name: "Lucas Aires",
              designation: "QA Specialist at Accon Technology",
              icon: (
                <Image
                  src="/testimonials/lucas.jpeg"
                  alt="Lucas Aires"
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-identity m-3"
                />
              ),
            },
          ]}
          className="float-start m-3"
        />
        A grounded, focused, fun guy who always helps the people around him when
        he can. From personal experience, once he told me that I could move into
        the <Highlight>QA area</Highlight> because I had a certain aptitude for
        it, and today I actually work as a QA specialist. lol
      </div>
    ),
  },
  {
    id: 2,
    name: "Raphael Portela",
    designation: "https://www.linkedin.com/in/raphael-portela-7a1a5b1a/",
    company: "Radix Technology",
    role: "Software Engineer",
    content: (
      <div>
        <Avatar
          items={[
            {
              id: 2,
              name: "Raphael Portela",
              designation: "Software Engineer at Radix",
              icon: (
                <Image
                  src="/testimonials/raphael.jpeg"
                  alt="Raphael Portela"
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-identity m-3"
                />
              ),
            },
          ]}
          className="float-start m-3"
        />
        I had the opportunity to work with Erick at the beginning of my
        experience at Radix. As the Tech Lead of our team, Erick was not only
        supportive and helpful in addressing developers' needs, but he also
        excelled in enhancing{" "}
        <Highlight>team cohesion, good code standards, and practices</Highlight>
        . He consistently guided us to work collaboratively, encouraging growth
        beyond mere coding and feature development. Whenever possible, Erick
        shared his knowledge to strengthen our foundations and improve our
        careers as <Highlight>software engineers</Highlight>. I had an amazing
        time working with him.
      </div>
    ),
  },
];