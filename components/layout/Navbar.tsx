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
    <div className="container-fluid bg-primary">
      <div className="container">
        <nav className="navbar navbar-dark navbar-expand-lg py-0">
          <Link href="/" className="navbar-brand">
            <h1 className="text-white fw-bold d-block">
              High<span className="text-secondary">Tech</span>{" "}
            </h1>
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
                    className={`nav-item nav-link${isActive(pathname, item.href) ? " active text-secondary" : ""}`}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </div>
          </div>

          <div className="d-none d-xl-flex flex-shirink-0">
            <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
              <a href={siteConfig.phoneHref} className="position-relative animated tada infinite">
                <i className="fa fa-phone-alt text-white fa-2x" />
                <div className="position-absolute" style={{ top: -7, left: 20 }}>
                  <span>
                    <i className="fa fa-comment-dots text-secondary" />
                  </span>
                </div>
              </a>
            </div>

            <div className="d-flex flex-column pe-4 border-end">
              <span className="text-white-50">Have any questions?</span>
              <span className="text-secondary">Call: {siteConfig.phone}</span>
            </div>

            <div className="d-flex align-items-center justify-content-center ms-4">
              <a href="#">
                <i className="bi bi-search text-white fa-2x" />{" "}
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
