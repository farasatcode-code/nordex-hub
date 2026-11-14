import type { Metadata } from "next";

import AboutPageContent from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the vision, operational structure, and core standards that drive M/S Nordex Hub forward.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
