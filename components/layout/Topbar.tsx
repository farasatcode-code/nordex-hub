import { siteConfig, socialLinks } from "@/lib/site";

export default function Topbar() {
  return (
    <div className="container-fluid bg-dark py-2 d-none d-md-flex">
      <div className="container">
        <div className="d-flex justify-content-between topbar">
          <div className="top-info">
            <small className="me-3 text-white-50">
              <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">
                <i className="fas fa-map-marker-alt me-2 text-secondary" />
              </a>
              {siteConfig.address}
            </small>
            <small className="me-3 text-white-50">
              <a href={`mailto:${siteConfig.email}`}>
                <i className="fas fa-envelope me-2 text-secondary" />
              </a>
              {siteConfig.topbarEmail}
            </small>
          </div>

          <div id="note" className="text-secondary d-none d-xl-flex">
            <small>{siteConfig.note}</small>
          </div>

          <div className="top-link">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className={`bg-light nav-fill btn btn-sm-square rounded-circle${index === socialLinks.length - 1 ? " me-0" : ""}`}
              >
                <i className={`${social.icon} text-primary`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
