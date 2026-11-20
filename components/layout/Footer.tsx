import Link from "next/link";

import FooterCredit from "@/components/layout/FooterCredit";

import {
  footerLegalLinks,
  footerQuickLinks,
  siteConfig,
} from "@/lib/site";

export default function Footer() {
  return (
    <footer className="container-fluid footer bg-dark wow fadeIn" data-wow-delay=".3s">
      <div className="container pt-5 pb-4">
        <div className="row g-4 g-lg-5">
          <div className="col-lg-6 col-md-12">
            <Link href="/" className="footer-brand">
              <span className="footer-logo-box">
                <img
                  src="/img/logo.png"
                  alt={siteConfig.name}
                  width={2084}
                  height={2084}
                  className="footer-logo"
                />
              </span>
              <span className="footer-brand-text">Nordex Hub</span>
            </Link>
            <p className="footer-tagline mt-4 mb-0 text-light">
               Nordex Hub Practical technology, connected infrastructure, and
              business solutions from Gilgit-Baltistan.
            </p>
          </div>

          <div className="col-lg-3 col-md-6">
            <h2 className="footer-heading h5">Quick Links</h2>
            <div className="footer-links mt-4">
              {footerQuickLinks.map((link) => (
                <Link key={link.label} href={link.href} className="footer-link">
                  <i className="fas fa-angle-right footer-link-icon" aria-hidden="true" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h2 className="footer-heading h5">Legal &amp; Compliance</h2>
            <div className="footer-links mt-4">
              {footerLegalLinks.map((link) => (
                <Link key={link.label} href={link.href} className="footer-link">
                  <i className="fas fa-angle-right footer-link-icon" aria-hidden="true" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <hr className="footer-divider mt-5 mb-4" />

        <div className="footer-bottom-bar">
          <span className="footer-bottom-spacer" aria-hidden="true" />
          <p className="footer-copyright text-center text-light mb-0 mx-auto">
            © 2026 Nordex Hub. All rights reserved.
          </p>
          <span className="footer-credit-cell">
            <FooterCredit />
          </span>
        </div>
      </div>
    </footer>
  );
}
