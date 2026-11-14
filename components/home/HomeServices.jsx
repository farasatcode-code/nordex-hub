import Link from "next/link";

const services = [
  {
    icon: "fas fa-laptop-code",
    title: "Software & Digital Systems",
    summary:
      "Custom enterprise platforms, mobile applications, and paperless workflow management portals.",
    href: "/services#software",
  },
  {
    icon: "fas fa-microchip",
    title: "Advanced Technology & AI Solutions",
    summary:
      "Intelligent automation, custom AI integrations, data analytics, and GIS mapping implementations.",
    href: "/services#ai",
  },
  {
    icon: "fas fa-network-wired",
    title: "IT Services & Infrastructure",
    summary:
      "Cloud architecture, network installation, cybersecurity audits, and SLA-based technical support.",
    href: "/services#it-services",
  },
  {
    icon: "fas fa-building",
    title: "Government Tech & Procurement",
    summary:
      "Turnkey E-governance portals, smart education systems, and general order supply contracting.",
    href: "/services#government",
  },
];

export default function HomeServices() {
  return (
    <section id="services-overview" className="home-services" >
      <div className="d-flex flex-row justify-content-center mb-4 home-section-title wow fadeIn" data-wow-delay=".1s">
        <h1>Our Services</h1>
      </div>
      <div className="container">
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={service.title} className="col-xl-3 col-lg-6">
              <article
                className="home-service-card wow fadeIn"
                data-wow-delay={`${0.1 + index * 0.1}s`}
              >
                <div className="home-service-icon">
                  <i className={service.icon} aria-hidden="true" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <Link href={service.href} className="home-card-link">
                  View Details
                  <i className="fas fa-arrow-right" aria-hidden="true" />
                </Link>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
