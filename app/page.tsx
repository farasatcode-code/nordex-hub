import type { Metadata } from "next";

import HomePageContent from "@/components/home/HomePageContent";

export const metadata: Metadata = {
  description:
    "M/S Nordex Hub delivers high-performance software systems, advanced AI solutions, institutional IT infrastructure, and rigorous general order supply for private enterprises and government sectors.",
};

export default function HomePage() {
  return <HomePageContent />;
}
