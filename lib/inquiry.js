export const CONTACT_INFO = {
  email: "info@nordexhub.com",
  phone: "03118608350",
  phoneHref: "tel:03118608350",
  whatsappUrl: "https://wa.me/923118608350",
  location: "Gilgit-Baltistan, Pakistan",
  hours: "Monday – Saturday, 9:00 AM – 6:00 PM (PST)",
};

export const INQUIRY_SERVICES = [
  "Software & Digital Systems",
  "Advanced Technology & AI Solutions",
  "IT Services & Professional Consulting",
  "Government Technology Solutions",
  "Procurement & Equipment Supply",
  "Other / General Inquiry",
];

const EMPTY_INQUIRY = {
  fullName: "",
  organization: "",
  email: "",
  phone: "",
  service: "",
  details: "",
};

export function createEmptyInquiry(source = "") {
  return { ...EMPTY_INQUIRY, source };
}

export function buildInquirySummary(values) {
  return [
    ["Source", values.source || "Website"],
    ["Full Name", values.fullName || "Not provided"],
    ["Organization / Company Name", values.organization || "Not provided"],
    ["Email Address", values.email],
    ["Phone / WhatsApp Number", values.phone],
    ["Service Required", values.service || "Not selected"],
    ["Project Details / Scope Description", values.details || "Not provided"],
  ]
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
}

export function submitInquiry(values) {
  const text = buildInquirySummary(values);
  const whatsappUrl = `${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;

  if (typeof window !== "undefined") {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return Promise.resolve({ ok: true });
}
