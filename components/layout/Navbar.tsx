"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useContactModal } from "@/components/contact/contact-modal-context";
import { primaryNav, siteConfig } from "@/lib/site";

function isActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const { openContactModal } = useContactModal();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  const handleGetInTouch = () => {
    closeMenu();
    openContactModal({ title: "contact" });
  };

  return (
    <header className="nh-header sticky-top bg-white border-bottom">
      <div className="nh-container mx-auto px-4 py-3">
        <div className="d-flex align-items-center justify-content-between position-relative">
          <Link
            href="/"
            className="nh-brand d-flex align-items-center text-decoration-none flex-shrink-0"
            onClick={closeMenu}
          >
            <img
              src="/img/logo.png"
              alt={siteConfig.name}
              width={2084}
              height={2084}
              className="navbar-logo"
            />
            <span className="navbar-brand-text text-nowrap">
              {siteConfig.brandName}
              <span className="navbar-brand-suffix"> {siteConfig.brandSuffix}</span>
            </span>
          </Link>

          <nav className="nh-nav d-none d-md-flex align-items-center" aria-label="Primary">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nh-link text-nowrap${
                  isActive(pathname, item.href) ? " active" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="d-none d-md-flex flex-shrink-0">
            <button
              type="button"
              className="nh-cta btn text-nowrap"
              onClick={handleGetInTouch}
            >
              Get in Touch
            </button>
          </div>

          <button
            type="button"
            className="nh-toggler d-inline-flex d-md-none align-items-center justify-content-center"
            aria-controls="navbarMobileMenu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="navbar-toggle-icon" aria-hidden="true">
              <span className="navbar-toggle-bar" />
              <span className="navbar-toggle-bar" />
              <span className="navbar-toggle-bar" />
            </span>
          </button>
        </div>

        <div
          id="navbarMobileMenu"
          className={`nh-mobile-menu d-md-none${menuOpen ? " show" : ""}`}
        >
          <nav className="d-flex flex-column" aria-label="Mobile primary">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nh-mobile-link text-nowrap${
                  isActive(pathname, item.href) ? " active" : ""
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              className="nh-cta btn text-nowrap w-100 mt-2"
              onClick={handleGetInTouch}
            >
              Get in Touch
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
