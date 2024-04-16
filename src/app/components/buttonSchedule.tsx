import Link from "next/link";

export function Schedule() {
  return (
    <Link
      href={
        "https://calendly.com/erickepeixoto/discover-opportunities-with-erick-eduardo"
      }
      target="_blank"
    >
      <button className="w-[150px] relative h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full dark:bg-slate-950 bg-slate-300 px-3 py-1 text-sm font-medium dark:text-white text-slate-500 hover:text-slate-700 dark:hover-none  backdrop-blur-3xl">
          Book a meeting
        </span>
      </button>
    </Link>
  );
}
