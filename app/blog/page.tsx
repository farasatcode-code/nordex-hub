import type { Metadata } from "next";

import PageHeader from "@/components/layout/PageHeader";
import BlogSection from "@/components/sections/BlogSection";
import { pageSpacing } from "@/lib/layout";

export const metadata: Metadata = {
  title: "Our Blog",
  description: "Latest blog posts and news from the HighTech team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader title="Our Blog" breadcrumb="Blog" />
      <BlogSection spacing={pageSpacing} />
    </>
  );
}
