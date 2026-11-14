import type { Metadata } from "next";

import ContactDetails from "@/components/contact/ContactDetails";
import ContactHero from "@/components/contact/ContactHero";
import InquiryForm from "@/components/contact/InquiryForm";
import InquiryGuidance from "@/components/contact/InquiryGuidance";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact M/S Nordex Hub to discuss custom software development, IT infrastructure, public sector requirements, procurement, and technology solutions from Gilgit-Baltistan.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactDetails />

      <section className="container-fluid inquiry-section py-5">
        <div className="container">
          <div className="inquiry-card mx-auto wow fadeIn" data-wow-delay=".2s">
            <h2 className="inquiry-heading">Formal Inquiry Form</h2>
            <InquiryForm source="contact-page" />
          </div>
        </div>
      </section>

      <InquiryGuidance />
    </>
  );
}
