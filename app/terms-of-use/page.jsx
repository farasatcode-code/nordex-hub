import LegalPage from "@/components/legal/LegalPage";

export const metadata = {
  title: "Terms of Use",
  description: "Terms of Use for the M/S Nordex Hub website.",
};

const sections = [
  {
    heading: "Use of the Website",
    paragraphs: [
      "You may use this website for lawful purposes only. You may not attempt to disrupt the website, gain unauthorized access, or use it in a way that harms others.",
    ],
  },
  {
    heading: "Information and Inquiries",
    paragraphs: [
      "Content on this website is provided for general information. Submitting an inquiry does not create a contract or guarantee a service engagement.",
    ],
  },
  {
    heading: "Intellectual Property",
    paragraphs: [
      "All text, graphics, logos, and other content on this website are the property of M/S Nordex Hub unless otherwise stated. You may not reproduce or redistribute them without permission.",
    ],
  },
  {
    heading: "Third-Party Links",
    paragraphs: [
      "This website may link to third-party services. We are not responsible for the content or practices of those services.",
    ],
  },
  {
    heading: "Limitation of Liability",
    paragraphs: [
      "To the extent permitted by law, M/S Nordex Hub is not liable for any loss arising from the use of this website or reliance on its content.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      "Questions about these terms can be sent to info@nordexhub.com.",
    ],
  },
];

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="These Terms of Use govern your access to and use of the M/S Nordex Hub website. By using this website, you agree to these terms."
      sections={sections}
    />
  );
}
