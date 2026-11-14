"use client";

import { useEffect, useState } from "react";

export const LIBS_READY_EVENT = "nordexhub:libs-ready";

export function markLibsReady(): void {
  window.__nordexhubLibsReady = true;
  window.dispatchEvent(new Event(LIBS_READY_EVENT));
}

/**
 * Returns true once jQuery, Bootstrap, WOW.js, easing and Owl Carousel have
 * finished loading. Components that drive those libraries must wait for this,
 * otherwise `afterInteractive` scripts may land after hydration has run their
 * effects and the initialisation would silently do nothing.
 */
export function useLibsReady(): boolean {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.__nordexhubLibsReady) {
      setReady(true);
      return;
    }

    const handleReady = () => setReady(true);
    window.addEventListener(LIBS_READY_EVENT, handleReady);
    return () => window.removeEventListener(LIBS_READY_EVENT, handleReady);
  }, []);

  return ready;
}
