"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { TRPCReactProvider } from "@/trpc/react";
import { NextUIProvider } from "@nextui-org/react";

// const theme = createTheme({});

export function Providers({ children }: ThemeProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NextUIProvider>
        {/* <MantineProvider theme={theme}> */}
        <TRPCReactProvider>{children}</TRPCReactProvider>
        {/* </MantineProvider> */}
      </NextUIProvider>
    </ThemeProvider>
  );
}
