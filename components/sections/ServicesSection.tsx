import Link from "next/link";

import SectionHeading from "@/components/common/SectionHeading";
import { services } from "@/lib/data";
import type { Spacing } from "@/lib/layout";
import { homeSpacing } from "@/lib/layout";

type ServicesSectionProps = {
  spacing?: Spacing;
};

export default function ServicesSection({
  spacing = homeSpacing,
}: ServicesSectionProps) {
  return (
    <div className={`container-fluid services ${spacing.section}`}>
      <div className={spacing.container}>
        <SectionHeading eyebrow="Our Services" title="Services Built Specifically For Your Business" />

        <div className="row g-5 services-inner">
          {services.map((service) => (
            <div key={service.title} className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay={service.delay}>
              <div className="services-item bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i className={`${service.icon} fa-7x mb-4 text-primary`} />
                    <h4 className="mb-3">{service.title}</h4>
                    <p className="mb-4">{service.description}</p>
                    <Link href="/service" className="btn btn-secondary text-white px-5 py-3 rounded-pill">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
