import type { Metadata } from "next";

import PageHeader from "@/components/layout/PageHeader";
import NotFoundSection from "@/components/sections/NotFoundSection";

export const metadata: Metadata = {
  title: "404 Error",
  description: "The page you were looking for could not be found.",
};

export default function NotFoundDemoPage() {
  return (
    <>
      <PageHeader title="404 Error" />
      <NotFoundSection />
    </>
  );
}
