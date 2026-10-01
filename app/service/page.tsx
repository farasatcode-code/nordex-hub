import type { Metadata } from "next";

import PageHeader from "@/components/layout/PageHeader";
import FactSection from "@/components/sections/FactSection";
import ServicesSection from "@/components/sections/ServicesSection";
import { pageSpacing } from "@/lib/layout";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Services built specifically for your business: web design, web development, UI/UX design, web security, digital marketing and programming.",
};

export default function ServicePage() {
  return (
    <>
      <PageHeader title="Services" />
      <FactSection />
      <ServicesSection spacing={pageSpacing} />
    </>
  );
}
