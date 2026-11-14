export const teamMembers = [
  {
    name: "Farasat Ali",
    designation: "President",
    focus:
      "Leading the overarching vision, core software engineering, custom system architecture, and strategic technical direction of Nordex Hub. Ensuring all digital platforms and tech solutions are built for high performance and modern scale.",
    photo: null,
  },
  {
    name: "Raheel Hussain",
    designation: "Vice President",
    focus:
      "Co-leading organizational operations, physical infrastructure deployments, and procurement execution. Ensuring every project—from enterprise software delivery to hardware supply—is coordinated efficiently to standard.",
    photo: null,
  },
  {
    name: "Rizwan",
    designation: "Secretary",
    focus:
      "Managing institutional correspondence, administrative workflows, internal documentation, and operational communications across all company projects and stakeholder engagements.",
    photo: null,
  },
  {
    name: "Syed Sajjad Hussain",
    designation: "Finance Secretary",
    focus:
      "Overseeing financial planning, budgeting, monetary accounting, and fiscal compliance, maintaining strong economic governance across our digital services and procurement operations.",
    photo: null,
  },
  {
    name: "Muhammad Ahmed Mir",
    designation: "CER (Chief Executive Representative)",
    focus:
      "Representing Nordex Hub across strategic institutional relations, external partnerships, and high-level client engagements, expanding our collaborative footprint across public and private sectors.",
    photo: null,
  },
  {
    name: "Fatha Ali",
    designation: "Creative Director & Media Lead",
    focus:
      "Directing the visual identity and online presence of Nordex Hub. Responsible for capturing event photography, producing and editing high-end video content, and managing comprehensive digital media strategies across all public platforms.",
    photo: null,
  },
];

export function getInitials(name) {
  const parts = name.trim().split(/\s+/);

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}
