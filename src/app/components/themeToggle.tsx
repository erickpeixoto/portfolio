"use client";

import * as React from "react";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

import { Button } from "@/app/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      {theme === "dark" ? (
        <Button
          className="dark:text-white text-black dark:bg-identity md:dark:bg-black"
          variant="outline"
          onClick={() => setTheme("light")}
        >
          <MdLightMode className="w-6 h-6 text-white md:text-slate-500" />
        </Button>
      ) : (
        <Button
          className="dark:text-white text-black"
          variant="outline"
          onClick={() => setTheme("dark")}
        >
          <MdOutlineDarkMode className="w-6 h-6 text-slate-500" />
        </Button>
      )}
    </>
  );
}
