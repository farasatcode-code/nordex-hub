import LegalPage from "@/components/legal/LegalPage";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the M/S Nordex Hub website.",
};

const sections = [
  {
    heading: "Information We Collect",
    paragraphs: [
      "We may collect information you voluntarily provide when you contact us, including your name, organization, email address, phone or WhatsApp number, and the details of your inquiry.",
    ],
  },
  {
    heading: "How We Use Information",
    paragraphs: [
      "We use the information you provide to respond to inquiries, prepare proposals, deliver services, and maintain records related to our work.",
    ],
  },
  {
    heading: "Sharing and Disclosure",
    paragraphs: [
      "We do not sell your personal information. We may share information only when required by law or when necessary to deliver a service you have requested.",
    ],
  },
  {
    heading: "Data Security",
    paragraphs: [
      "We apply reasonable administrative and technical measures to protect the information you share with us. No method of transmission or storage is completely secure, so please share sensitive information carefully.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      "For privacy questions, contact us at info@nordexhub.com.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="M/S Nordex Hub respects your privacy. This Privacy Policy explains what information we collect when you contact us or use this website, and how we use it."
      sections={sections}
    />
  );
}
