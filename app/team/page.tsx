import type { Metadata } from "next";

import PageHeader from "@/components/layout/PageHeader";
import FactSection from "@/components/sections/FactSection";
import TeamSection from "@/components/sections/TeamSection";
import { pageSpacing } from "@/lib/layout";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the experts behind HighTech's IT solutions and digital services.",
};

export default function TeamPage() {
  return (
    <>
      <PageHeader title="Our Team" />
      <FactSection />
      <TeamSection spacing={pageSpacing} />
    </>
  );
}
