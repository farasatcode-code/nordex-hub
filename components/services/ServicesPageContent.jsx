import { serviceVerticals } from "@/lib/services";

import ServicesCtaButton from "@/components/services/ServicesCtaButton";

export default function ServicesPageContent() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-8">
              <h1 className="wow fadeInUp" data-wow-delay=".1s">
                Technology, Infrastructure &amp; Strategic Procurement Built for Scale
              </h1>
              <p className="wow fadeInUp" data-wow-delay=".2s">
                From custom software engineering and intelligent AI automation to
                public-sector E-tech and general order supply, explore our comprehensive
                service verticals.
              </p>
              {/* <div className="services-hero-actions wow fadeInUp" data-wow-delay=".3s">
                <ServicesCtaButton variant="primary">
                  Discuss Your Requirement
                </ServicesCtaButton>
                <ServicesCtaButton variant="outline">
                  Request a Proposal
                </ServicesCtaButton>
              </div> */}
            </div>

            <div className="col-lg-4 d-none d-lg-block">
              <div className="services-hero-panel wow fadeInRight" data-wow-delay=".3s">
                {serviceVerticals.map((vertical) => (
                  <div key={vertical.id} className="services-hero-panel-icon">
                    <i className={vertical.icon} aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {serviceVerticals.map((vertical) => (
        <section
          key={vertical.id}
          id={vertical.id}
          className={`services-vertical services-vertical--${vertical.theme}`}
        >
          <div className="container">
            <div
              className={`row align-items-center g-5 ${
                vertical.align === "right" ? "flex-lg-row-reverse" : ""
              }`}
            >
              <div className="col-lg-5">
                <div className="services-vertical-intro wow fadeIn" data-wow-delay=".15s">
                  <div className="services-vertical-icon">
                    <i className={vertical.icon} aria-hidden="true" />
                  </div>
                  <h2>{vertical.title}</h2>
                  <p>{vertical.overview}</p>
                  <ServicesCtaButton
                    variant={vertical.theme === "dark" ? "outline" : "primary"}
                  >
                    {vertical.cta}
                  </ServicesCtaButton>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="row g-3">
                  {vertical.items.map((item, index) => (
                    <div key={item} className="col-md-6">
                      <div
                        className="service-capability-card wow fadeIn"
                        data-wow-delay={`${0.15 + index * 0.06}s`}
                      >
                        <i className="fas fa-check-circle" aria-hidden="true" />
                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="services-closing">
        <div className="container">
          <div className="services-closing-inner wow fadeIn" data-wow-delay=".15s">
            <h2>Not Sure Which Solution Fits Your Need?</h2>
            <p>
              Tell us what you want to achieve. We will help you define the exact tech
              stack, hardware specifications, and implementation path.
            </p>
            <ServicesCtaButton variant="light" modalTitle="contact">
              Start a Conversation
            </ServicesCtaButton>
          </div>
        </div>
      </section>
    </div>
  );
}
