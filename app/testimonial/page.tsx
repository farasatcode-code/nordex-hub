import type { Metadata } from "next";

import PageHeader from "@/components/layout/PageHeader";
import FactSection from "@/components/sections/FactSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import { pageSpacing } from "@/lib/layout";

export const metadata: Metadata = {
  title: "Testimonial",
  description: "What our clients say about working with HighTech.",
};

export default function TestimonialPage() {
  return (
    <>
      <PageHeader title="Testimonial" />
      <FactSection />
      <TestimonialSection spacing={pageSpacing} />
    </>
  );
}
