"use client";

import * as React from "react";
import { ModeToggle } from "@/components/dark-mode-toggle";

export default function Home() {
  return (
    <main className="relateive container flex min-h-screen flex-col">
      <div className="p-4 flex h-14 items-center justify-between supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <span className="font-bold">pdf-chat</span>
        <ModeToggle />
      </div>
    </main>
  );
}
