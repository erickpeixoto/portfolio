"use client";

import { cn } from "@/lib/utils";
import { Eye } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const LookAtMe = () => {
  const pathname = usePathname();

  return (
    <Link href={"/look-at-me"}>
      <div className="w-[300px] gap-2 flex justify-center items-center">
        <h1
          className={cn(
            pathname === "/look-at-me"
              ? "text-identity border-b-2 border-identity"
              : "text-black dark:text-white",
          )}
        >
          Behind the Code
        </h1>
        <Eye className="w-9 h-9 text-identity" />
      </div>
    </Link>
  );
};
