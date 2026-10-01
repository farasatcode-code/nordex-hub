import Link from "next/link";

import {
  footerHelpLinks,
  footerShortLinks,
  siteConfig,
  socialLinks,
} from "@/lib/site";

export default function Footer() {
  return (
    <div className="container-fluid footer bg-dark wow fadeIn" data-wow-delay=".3s">
      <div className="container pt-5 pb-4">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <Link href="/">
              <h1 className="text-white fw-bold d-block">
                High<span className="text-secondary">Tech</span>{" "}
              </h1>
            </Link>
            <p className="mt-4 text-light">{siteConfig.aboutBlurb}</p>
            <div className="d-flex hightech-link">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className={`btn-light nav-fill btn btn-square rounded-circle${index === socialLinks.length - 1 ? " me-0" : " me-2"}`}
                >
                  <i className={`${social.icon} text-primary`} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <a href="#" className="h3 text-secondary">
              Short Link
            </a>
            <div className="mt-4 d-flex flex-column short-link">
              {footerShortLinks.map((link) => (
                <Link key={link.label} href={link.href} className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <a href="#" className="h3 text-secondary">
              Help Link
            </a>
            <div className="mt-4 d-flex flex-column help-link">
              {footerHelpLinks.map((link) => (
                <Link key={link.label} href={link.href} className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <a href="#" className="h3 text-secondary">
              Contact Us
            </a>
            <div className="text-white mt-4 d-flex flex-column contact-link">
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="pb-3 text-light border-bottom border-primary"
              >
                <i className="fas fa-map-marker-alt text-secondary me-2" /> 123 Street, New York,
                USA
              </a>
              <a
                href={siteConfig.phoneHref}
                className="py-3 text-light border-bottom border-primary"
              >
                <i className="fas fa-phone-alt text-secondary me-2" /> {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="py-3 text-light border-bottom border-primary"
              >
                <i className="fas fa-envelope text-secondary me-2" /> {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        <hr className="text-light mt-5 mb-4" />

        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <span className="text-light">
              <a href="#" className="text-secondary">
                <i className="fas fa-copyright text-secondary me-2" />
                Your Site Name
              </a>
              , All right reserved.
            </span>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <span className="text-light">
              Designed By
              <a href={siteConfig.credit.authorUrl} className="text-secondary">
                {siteConfig.credit.author}
              </a>{" "}
              Distributed By{" "}
              <a href={siteConfig.credit.distributorUrl}>{siteConfig.credit.distributor}</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
