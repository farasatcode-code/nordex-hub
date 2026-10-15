import type { Metadata } from "next";

import PageHeader from "@/components/layout/PageHeader";
import ProjectSection from "@/components/sections/ProjectSection";
import { pageSpacing } from "@/lib/layout";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A look at our recently completed projects across web, mobile, security and digital marketing.",
};

export default function ProjectPage() {
  return (
    <>
      <PageHeader title="Projects" />
      <ProjectSection spacing={pageSpacing} />
    </>
  );
}
