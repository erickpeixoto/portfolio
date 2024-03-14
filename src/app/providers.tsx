"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { TRPCReactProvider } from "@/trpc/react";
import { NextUIProvider } from "@nextui-org/react";
import { MantineProvider, createTheme } from "@mantine/core";
import PlausibleProvider from "next-plausible";

const theme = createTheme({});

export function Providers({ children }: ThemeProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <PlausibleProvider domain="erickpeixoto.tech">
        <MantineProvider theme={theme}>
          <NextUIProvider>
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </NextUIProvider>
        </MantineProvider>
      </PlausibleProvider>
    </ThemeProvider>
  );
}
