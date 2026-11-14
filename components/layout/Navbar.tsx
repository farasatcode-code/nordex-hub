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

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const handleGetInTouch = () => {
    closeMenu();
    openContactModal({ title: "contact" });
  };

  return (
    <div className="container-fluid bg-white">
      <div className="container">
        <nav className="navbar navbar-expand-lg py-0">
          <Link href="/" className="navbar-brand me-lg-3" onClick={closeMenu}>
            <img
              src="/img/logo.png"
              alt={siteConfig.name}
              width={2084}
              height={2084}
              className="navbar-logo"
            />
            <span className="navbar-brand-text">
              {siteConfig.brandName}
              <span className="navbar-brand-suffix"> {siteConfig.brandSuffix}</span>
            </span>
          </Link>

          <button
            type="button"
            className="navbar-toggler me-0"
            aria-controls="navbarCollapse"
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

          <div
            className={`collapse navbar-collapse bg-transparent${menuOpen ? " show" : ""}`}
            id="navbarCollapse"
          >
            <div className="navbar-nav ms-auto mx-xl-auto p-0">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-item nav-link${
                    isActive(pathname, item.href) ? " active" : ""
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="navbar-cta d-flex pb-3 pb-lg-0">
              <button
                type="button"
                className="btn navbar-cta-btn px-4 py-2"
                onClick={handleGetInTouch}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
