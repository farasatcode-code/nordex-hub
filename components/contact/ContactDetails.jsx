import { CONTACT_INFO } from "@/lib/inquiry";

export default function ContactDetails() {
  return (
    <section className="container-fluid contact-details-section py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-3 col-lg-6 wow fadeIn" data-wow-delay=".2s">
            <div className="contact-info-card h-100">
              <div className="contact-info-icon">
                <i className="fas fa-envelope" aria-hidden="true" />
              </div>
              <h2 className="contact-info-title">Official Email</h2>
              <a className="contact-info-link" href={`mailto:${CONTACT_INFO.email}`}>
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6 wow fadeIn" data-wow-delay=".35s">
            <div className="contact-info-card h-100">
              <div className="contact-info-icon">
                <i className="fas fa-phone-alt" aria-hidden="true" />
              </div>
              <h2 className="contact-info-title">Phone / WhatsApp</h2>
              <a className="contact-info-link" href={CONTACT_INFO.phoneHref}>
                {CONTACT_INFO.phone}
              </a>
              <a
                className="contact-whatsapp"
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-whatsapp" aria-hidden="true" /> WhatsApp
              </a>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6 wow fadeIn" data-wow-delay=".5s">
            <div className="contact-info-card h-100">
              <div className="contact-info-icon">
                <i className="fas fa-map-marker-alt" aria-hidden="true" />
              </div>
              <h2 className="contact-info-title">Location</h2>
              <p className="contact-info-text">{CONTACT_INFO.location}</p>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6 wow fadeIn" data-wow-delay=".65s">
            <div className="contact-info-card h-100">
              <div className="contact-info-icon">
                <i className="fas fa-clock" aria-hidden="true" />
              </div>
              <h2 className="contact-info-title">Business Hours</h2>
              <p className="contact-info-text">{CONTACT_INFO.hours}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
