import activity from "@/server/mock/activity.json";

const DAY = 86400000;
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const LEVEL_CLASS = [
  "bg-slate-200/70 dark:bg-white/[0.06]",
  "bg-identity/25",
  "bg-identity/45",
  "bg-identity/70",
  "bg-identity",
];

function level(count: number) {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 10) return 2;
  if (count <= 25) return 3;
  return 4;
}

function buildWeeks() {
  const end = new Date(`${activity.generatedAt}T00:00:00Z`);
  const start = new Date(end.getTime() - 52 * 7 * DAY - end.getUTCDay() * DAY);
  const weeks: { date: string; count: number }[][] = [];
  for (let t = start.getTime(); t <= end.getTime(); t += DAY) {
    const d = new Date(t);
    if (d.getUTCDay() === 0) weeks.push([]);
    const date = d.toISOString().slice(0, 10);
    weeks[weeks.length - 1].push({
      date,
      count: (activity.days as Record<string, number>)[date] ?? 0,
    });
  }
  return weeks;
}

export function ActivityGraph() {
  const weeks = buildWeeks();
  const monthLabels = weeks.map((week, i) => {
    const first = new Date(`${week[0].date}T00:00:00Z`);
    const prev = i > 0 ? new Date(`${weeks[i - 1][0].date}T00:00:00Z`) : null;
    return !prev || prev.getUTCMonth() !== first.getUTCMonth()
      ? MONTHS[first.getUTCMonth()]
      : "";
  });

  return (
    <figure className="mt-12 w-fit max-w-full">
      <figcaption className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
        <span className="font-bricolage font-bold text-2xl text-identity">
          {activity.total.toLocaleString("en-US")}
        </span>
        <span className="text-sm text-[--text-secondary]">
          commits in the last 12 months, {activity.activeDays} active days
          across {activity.repos} repositories
        </span>
      </figcaption>

      <div className="overflow-x-auto pb-1 [scrollbar-width:thin]">
        <div className="inline-flex flex-col gap-1 min-w-max">
          <div className="flex gap-[3px] md:gap-[4px] font-mono text-[10px] text-[--text-muted] h-3">
            {monthLabels.map((label, i) => (
              <span
                key={i}
                className="w-[11px] md:w-[15px] overflow-visible whitespace-nowrap"
              >
                {label}
              </span>
            ))}
          </div>
          <div
            className="flex gap-[3px] md:gap-[4px]"
            role="img"
            aria-label={`${activity.total} commits in the last 12 months`}
          >
            {weeks.map((week, i) => (
              <div key={i} className="flex flex-col gap-[3px] md:gap-[4px]">
                {week.map((day) => (
                  <span
                    key={day.date}
                    title={`${day.count} commit${day.count === 1 ? "" : "s"} on ${day.date}`}
                    className={`block h-[11px] w-[11px] md:h-[15px] md:w-[15px] rounded-[3px] ${LEVEL_CLASS[level(day.count)]}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between gap-4 font-mono text-[10px] text-[--text-muted]">
        <span>From my git history: client work and my own products</span>
        <span className="flex items-center gap-1 whitespace-nowrap">
          Less
          {LEVEL_CLASS.map((c, i) => (
            <span
              key={i}
              className={`block h-[10px] w-[10px] rounded-[2px] ${c}`}
            />
          ))}
          More
        </span>
      </div>
    </figure>
  );
}
