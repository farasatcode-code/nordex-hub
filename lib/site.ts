export const siteConfig = {
  name: "HighTech",
  brandName: "nordex",
  brandSuffix: "HUB",
  tagline: "An Innovative IT Solutions Agency",
  title: "HighTech - IT Solutions Website Template",
  description:
    "HighTech is an innovative IT solutions agency offering web design, web development, UI/UX design, web security, digital marketing and programming services.",
  address: "23 Ranking Street, New York",
  shortAddress: "23 rank Str, NY",
  email: "farasat.code@gmail.com",
  topbarEmail: "farasat.code@gmail.com",
  phone: "+0123 456 7890",
  phoneHref: "tel:+0123456789",
  mapsUrl: "https://goo.gl/maps/Zd4BCynmTb98ivUJ6",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.4710403339755!2d-73.82241512404069!3d40.685622471397615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26749046ee14f%3A0xea672968476d962c!2s123rd%20St%2C%20Queens%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1686493221834!5m2!1sen!2sbd",
  note: "Note : We help you to Grow your Business",
  aboutBlurb:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere delectus qui placeat inventore consectetur repellendus optio debitis.",
  credit: {
    author: "HTML Codex",
    authorUrl: "https://htmlcodex.com",
    distributor: "ThemeWagon",
    distributorUrl: "https://themewagon.com",
  },
} as const;

export const socialLinks = [
  { icon: "fab fa-facebook-f", label: "Facebook" },
  { icon: "fab fa-twitter", label: "Twitter" },
  { icon: "fab fa-instagram", label: "Instagram" },
  { icon: "fab fa-linkedin-in", label: "LinkedIn" },
] as const;

export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = NavLink & {
  children?: NavLink[];
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Testimonial", href: "/testimonial" },
  { label: "Contact", href: "/contact" },
];

export const footerShortLinks: NavLink[] = [
  { label: "About us", href: "/about" },
  { label: "Contact us", href: "/contact" },
  { label: "Our Services", href: "/service" },
  { label: "Our Projects", href: "/project" },
  { label: "Latest Blog", href: "/blog" },
];

export const footerHelpLinks: NavLink[] = [
  { label: "Terms Of use", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Helps", href: "#" },
  { label: "FQAs", href: "#" },
  { label: "Contact", href: "/contact" },
];
