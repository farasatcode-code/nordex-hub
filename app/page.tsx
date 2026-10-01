import type { Metadata } from "next";

import AboutSection from "@/components/sections/AboutSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import FactSection from "@/components/sections/FactSection";
import HeroCarousel from "@/components/sections/HeroCarousel";
import ProjectSection from "@/components/sections/ProjectSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

export const metadata: Metadata = {
  description:
    "HighTech is an innovative IT solutions agency offering web design, web development, UI/UX design, web security, digital marketing and programming services.",
};

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <FactSection />
      <AboutSection
        spacing={{ section: "py-5 my-5", container: "container pt-5" }}
      />
      <ServicesSection />
      <ProjectSection />
      <BlogSection />
      <TeamSection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
}
