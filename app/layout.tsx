import type { Metadata } from "next";
import type { ReactNode } from "react";

import BackToTop from "@/components/layout/BackToTop";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Spinner from "@/components/layout/Spinner";
import Topbar from "@/components/layout/Topbar";
import VendorScripts from "@/components/VendorScripts";
import WowInitializer from "@/components/WowInitializer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "512x512" }],
    shortcut: ["/favicon.png"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  keywords: [
    "IT solutions",
    "web design",
    "web development",
    "UI/UX design",
    "cyber security",
    "digital marketing",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Saira:wght@500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />

        <link href="/lib/animate/animate.min.css" rel="stylesheet" />
        <link href="/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
      </head>
      <body>
        <Spinner />
        <Topbar />
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
        <VendorScripts />
        <WowInitializer />
      </body>
    </html>
  );
}
