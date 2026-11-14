export const siteConfig = {
  name: "Nordex Hub",
  brandName: "Nordex",
  brandSuffix: "Hub",
  tagline: "Practical technology, connected infrastructure, and business solutions.",
  title:
    "Nordex Hub | Engineering Scale, Digital Transformation & General Procurement",
  description:
    "Nordex Hub delivers high-performance software systems, advanced AI solutions, institutional IT infrastructure, and rigorous general order supply for private enterprises and government sectors.",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = NavLink & {
  children?: NavLink[];
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const footerQuickLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
];
