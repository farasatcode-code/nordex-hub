import type { Metadata } from "next";

import TeamPageContent from "@/components/team/TeamPageContent";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Combining technical engineering, administrative governance, strategic execution, and digital media to drive our vision forward.",
};

export default function TeamPage() {
  return <TeamPageContent />;
}
