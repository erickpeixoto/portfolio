import { EvervaultCard } from "@/app/components/evervault-card";
import { AnimatedTooltip } from "@/app/components/tooltip";

import ButtonVideo from "@/app/components/buttonVideoCall";
import { toast } from "sonner";
import { stack } from "@/server/mock/skills/stack";

import type { Content } from "@/app/components/sticky-scroll-reveal";

export function Content(): Content[] {
  return [
    {
      title: "As a Frontend Specialist",
      description:
        "Harnessing over 8 years of expertise in React.js, I bring high-quality, optimized frontend solutions that exceed client expectations. By fostering real-time collaboration with teams, clients, and stakeholders, I streamline workflows and boost productivity. My commitment to excellence ensures seamless, collaborative editing and a dynamic user experience that stands out.",
      content: (
        <div className="border border-slate/[0.2] dark:border-white/[0.2] flex flex-col items-start mx-auto p-4 relative h-full">
          <EvervaultCard text="Client" />

          {/* <div className="dark:text-white text-slate-500 mt-4 text-sm font-light flex flex-row gap-3">
            <AnimatedTooltip items={stack().front} />
          </div> */}

          <div className="mt-5 dark:text-white text-slate-500">
            My expertise in Next.js empowers me to architect web applications
            that are not only high-performing and scalable but also
            SEO-friendly, meeting today's web standards. Through my mastery of
            React.js, I create interactive and state-of-the-art user interfaces
            that are both intuitive and delightful to use.
            <div className="-mt-3">
              <ButtonVideo
                description="Watch the Video"
                URI=""
                className="-mt-2 float-end"
                onClick={() => toast.info("coming soon!")}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "As a Backend Architect",
      description:
        "With profound knowledge in Node.js and database management, I ensure real-time data synchronization and system resilience. My backend solutions enable seamless tracking of modifications, eliminating confusion and revolutionizing project management with clarity and efficiency. Embrace simplicity and reliability in your projects with my expertise.",
      content: (
        <div className="border  border-slate/[0.2] dark:border-white/[0.2] flex flex-col items-start  mx-auto p-4 relative h-full">
          <EvervaultCard text="Server" />

          {/* <div className="dark:text-white text-black mt-4 text-sm font-light flex flex-row gap-3  ">
            <AnimatedTooltip items={stack().back} />
          </div> */}

          <div className="mt-5 dark:text-white text-slate-500">
            Leveraging advanced backend technologies such as Node.js, Go, and
            comprehensive database systems including SQL and NoSQL, I enhance
            backend operations. ORM tools like Prisma refine data management,
            while REST and GraphQL APIs facilitate seamless data exchange.
            <div className="-mt-3">
              <ButtonVideo
                description="Watch the Video"
                URI=""
                className="-mt-2 float-end"
                onClick={() => toast.info("coming soon!")}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "As a Tech Lead",
      description:
        "My leadership extends beyond technical expertise, as I steer cross-functional teams through complex projects with a strategic vision. I champion agile practices, enforce robust DevOps pipelines, and advocate for continuous learning and innovation.",
      content: (
        <div className="border  border-slate/[0.2] dark:border-white/[0.2] flex flex-col items-start mx-auto p-4 relative h-full">
          <EvervaultCard text="Leadership" />
          {/* <div className="dark:text-white text-black mt-4 text-sm font-light flex flex-row gap-3">
            <AnimatedTooltip items={stack().lead} />
          </div> */}
          <div className="mt-5 dark:text-white text-slate-500">
            In my capacity as a Tech Lead, I drive technological advancement and
            organizational growth by fostering a culture of innovation. I ensure
            that teams are agile, processes are optimized, and solutions are
            scalable, leading our projects to exceed business objectives and set
            new benchmarks in the industry.
            <div className="-mt-3">
              <ButtonVideo
                description="Watch the Video"
                URI=""
                className="-mt-2 float-end"
                onClick={() => toast.info("Coming soon!")}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Development Processes",
      description:
        "Through automating build and deployment processes with CircleCI, hosting on Vercel, managing infrastructure on AWS, and maintaining open lines of communication with clients via Google Meet, I champion a process-driven culture. This approach not only enhances efficiency and scalability but also ensures that our deliverables are perfectly aligned with our client's needs and expectations.",
      content: (
        <div className="border  border-slate/[0.2] dark:border-white/[0.2] flex flex-col items-start  mx-auto p-4 relative h-full">
          <EvervaultCard text="Technology" />

          {/* <div className="dark:text-white text-black mt-4 text-sm font-light flex flex-row gap-3">
            <AnimatedTooltip items={stack().process} />
          </div> */}

          <div className="mt-5 dark:text-white text-slate-500">
            I spearhead development processes by integrating CI/CD pipelines
            with CircleCI, deploying via Vercel for front-end excellence, and
            leveraging AWS for scalable cloud infrastructure. My approach
            emphasizes seamless, automated workflows and effective client
            communication, ensuring innovative project delivery.
            <div className="-mt-3">
              <ButtonVideo
                description="Dive in-depth on it"
                URI=""
                className="-mt-2 float-end"
                onClick={() => toast.info("coming soon!")}
              />
              ´
            </div>
          </div>
        </div>
      ),
    },
  ];
}
