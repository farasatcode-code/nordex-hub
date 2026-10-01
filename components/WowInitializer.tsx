"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { useLibsReady } from "@/lib/vendor";

/**
 * WOW.js scans the document for `.wow` elements once and never again, so it has
 * to be re-run after every client-side navigation for sections that were
 * streamed in later.
 */
export default function WowInitializer() {
  const ready = useLibsReady();
  const pathname = usePathname();

  useEffect(() => {
    if (!ready || typeof window.WOW !== "function") {
      return;
    }

    new window.WOW().init();
  }, [ready, pathname]);

  return null;
}
