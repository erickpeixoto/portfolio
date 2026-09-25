import { SkillBar } from "@/app/components/skill-bar";

const frontendSkills = [
  { name: "React.js", years: 10 },
  { name: "TypeScript", years: 10 },
  { name: "GraphQL", years: 10 },
  { name: "Next.js", years: 9 },
  { name: "Tailwind CSS", years: 8 },
  { name: "tRPC", years: 5 },
];

const backendSkills = [
  { name: "Node.js", years: 12 },
  { name: "REST APIs", years: 13 },
  { name: "SQL / PostgreSQL", years: 13 },
  { name: "TypeScript", years: 10 },
  { name: "MongoDB", years: 10 },
];

const leadershipItems = [
  "Tech lead for teams of 4 to 6 engineers",
  "Architecture and technical decisions",
  "Code review and mentoring",
  "Client-facing work in English",
  "Testing culture with Playwright and Cypress",
];

const devopsItems = [
  "LLM APIs: OpenAI and Anthropic",
  "Agents with tool calling",
  "Embeddings, pgvector and RAG",
  "Prompt caching and cost tracking",
  "Human-in-the-loop review flows",
  "AWS, Vercel and CI/CD",
];

function QuadrantHeader({ label, years }: { label: string; years?: string }) {
  return (
    <div className="flex items-baseline justify-between mb-5 pb-3 border-b border-[--surface-border]">
      <h3 className="font-bricolage font-bold text-lg dark:text-[--text-primary] text-gray-900">
        {label}
      </h3>
      {years && (
        <span className="font-mono text-[10px] text-identity uppercase tracking-widest">
          {years}
        </span>
      )}
    </div>
  );
}

function CheckItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2.5 py-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-identity flex-shrink-0" />
      <span className="text-sm dark:text-[--text-secondary] text-gray-600">
        {label}
      </span>
    </div>
  );
}

export function Skills() {
  return (
    <section className="px-6 md:px-20 py-16 md:py-24">
      <div className="mb-12">
        <p className="font-mono text-xs text-[--text-muted] uppercase tracking-[0.3em] mb-3">
          Expertise
        </p>
        <h2 className="font-bricolage font-bold text-4xl md:text-5xl dark:text-[--text-primary] text-gray-900">
          Skills & Stack
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Frontend */}
        <div className="p-6 rounded-2xl border border-[--surface-border] dark:bg-[--surface-1] bg-gray-50">
          <QuadrantHeader label="Frontend" years="10+ years" />
          <div className="flex flex-col gap-4">
            {frontendSkills.map((s) => (
              <SkillBar key={s.name} {...s} />
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="p-6 rounded-2xl border border-[--surface-border] dark:bg-[--surface-1] bg-gray-50">
          <QuadrantHeader label="Backend" years="13+ years" />
          <div className="flex flex-col gap-4">
            {backendSkills.map((s) => (
              <SkillBar key={s.name} {...s} />
            ))}
          </div>
        </div>

        {/* Tech Lead */}
        <div className="p-6 rounded-2xl border border-[--surface-border] dark:bg-[--surface-1] bg-gray-50">
          <QuadrantHeader label="Tech Leadership" />
          <div className="flex flex-col">
            {leadershipItems.map((item) => (
              <CheckItem key={item} label={item} />
            ))}
          </div>
        </div>

        {/* AI & DevOps */}
        <div className="p-6 rounded-2xl border border-[--surface-border] dark:bg-[--surface-1] bg-gray-50">
          <QuadrantHeader label="AI Engineering" />
          <div className="flex flex-col">
            {devopsItems.map((item) => (
              <CheckItem key={item} label={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
