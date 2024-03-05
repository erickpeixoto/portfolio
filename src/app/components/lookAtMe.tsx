"use client";

import { Eye } from "lucide-react";
import Link from "next/link";

export const LookAtMe = () => {
  return (
    <Link href={"/look-at-me"}>
      <div className="w-[300px] gap-2 flex justify-center items-center">
        <h1>Look at ME</h1>
        <Eye className="w-9 h-9 text-identity" />
      </div>
    </Link>
  );
};
