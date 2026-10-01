import type { Metadata } from "next";

import PageHeader from "@/components/layout/PageHeader";
import ContactSection from "@/components/sections/ContactSection";
import FactSection from "@/components/sections/FactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with HighTech for any query about our IT solutions, web development and digital marketing services.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" breadcrumb="Contact" />
      <FactSection />
      <ContactSection
        spacing={{ section: "py-5 mt-5", container: "container py-5" }}
      />
    </>
  );
}
