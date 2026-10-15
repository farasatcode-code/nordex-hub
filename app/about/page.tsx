import type { Metadata } from "next";

import PageHeader from "@/components/layout/PageHeader";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about HighTech, the IT solutions agency behind the web design, development and digital marketing work we ship.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" />
      <AboutSection />
      <TeamSection
        spacing={{ section: "pb-5 mb-5", container: "container pb-5" }}
      />
    </>
  );
}
