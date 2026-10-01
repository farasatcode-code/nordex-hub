"use client";

import Script from "next/script";
import { useState } from "react";

import { markLibsReady } from "@/lib/vendor";

/**
 * The template's original script tags, in their original order. They are mounted
 * one at a time — each script renders only after the previous one has settled —
 * because `next/script` does not guarantee execution order between siblings.
 */
const VENDOR_SCRIPTS = [
  "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js",
  "/lib/wow/wow.min.js",
  "/lib/easing/easing.min.js",
  "/lib/waypoints/waypoints.min.js",
  "/lib/owlcarousel/owl.carousel.min.js",
];

export default function VendorScripts() {
  const [settled, setSettled] = useState(0);

  const advance = () => setSettled((count) => count + 1);

  return (
    <>
      {VENDOR_SCRIPTS.slice(0, settled + 1).map((src, index) => (
        <Script
          key={src}
          id={`hightech-vendor-${index}`}
          src={src}
          strategy="afterInteractive"
          onLoad={index === VENDOR_SCRIPTS.length - 1 ? markLibsReady : advance}
          onError={index === VENDOR_SCRIPTS.length - 1 ? markLibsReady : advance}
        />
      ))}
    </>
  );
}
