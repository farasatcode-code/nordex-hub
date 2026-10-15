"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { primaryNav, siteConfig } from "@/lib/site";

function isActive(pathname: string, href: string): boolean {
  return href !== "#" && pathname === href;
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="container-fluid bg-white">
      <div className="container">
        <nav className="navbar navbar-expand-lg py-0">
          <Link href="/" className="navbar-brand me-lg-3">
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
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse bg-transparent" id="navbarCollapse">
            <div className="navbar-nav ms-auto mx-xl-auto p-0">
              {primaryNav.map((item) =>
                item.children ? (
                  <div className="nav-item dropdown" key={item.label}>
                    <a href={item.href} className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                      {item.label}
                    </a>
                    <div className="dropdown-menu rounded">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="dropdown-item"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-item nav-link${isActive(pathname, item.href) ? " active" : ""}`}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </div>
          </div>

          <div className="d-flex flex-shirink-0 ms-lg-4">
            <div className="d-flex align-items-center justify-content-center">
              <a href="#">
                <i className="bi bi-search text-primary fa-2x" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
