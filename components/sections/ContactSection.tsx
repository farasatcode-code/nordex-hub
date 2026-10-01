import SectionHeading from "@/components/common/SectionHeading";
import { siteConfig } from "@/lib/site";
import type { Spacing } from "@/lib/layout";
import { homeSpacing } from "@/lib/layout";

type ContactSectionProps = {
  spacing?: Spacing;
};

const contactCards = [
  {
    icon: "fas fa-map-marker-alt",
    title: "Address",
    value: siteConfig.shortAddress,
    href: siteConfig.mapsUrl,
    external: true,
    delay: ".3s",
  },
  {
    icon: "fa fa-phone",
    title: "Call Us",
    value: "+012 3456 7890",
    href: siteConfig.phoneHref,
    external: false,
    delay: ".5s",
  },
  {
    icon: "fa fa-envelope",
    title: "Email Us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
    delay: ".7s",
  },
];

export default function ContactSection({ spacing = homeSpacing }: ContactSectionProps) {
  return (
    <div className={`container-fluid ${spacing.section}`}>
      <div className={spacing.container}>
        <SectionHeading eyebrow="Get In Touch" title="Contact for any query">
          <p className="mb-2">
            The contact form is currently inactive. Get a functional and working contact form with
            Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and
            you&apos;re done.{" "}
            <a href="https://htmlcodex.com/contact-form">Download Now</a>.
          </p>
        </SectionHeading>

        <div className="contact-detail position-relative p-5">
          <div className="row g-5 mb-5 justify-content-center">
            {contactCards.map((card) => (
              <div key={card.title} className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay={card.delay}>
                <div className="d-flex bg-light p-3 rounded">
                  <div
                    className="flex-shrink-0 btn-square bg-secondary rounded-circle"
                    style={{ width: 64, height: 64 }}
                  >
                    <i className={`${card.icon} text-white`} />
                  </div>
                  <div className="ms-3">
                    <h4 className="text-primary">{card.title}</h4>
                    <a
                      href={card.href}
                      className="h5"
                      {...(card.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    >
                      {card.value}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay=".3s">
              <div className="p-5 h-100 rounded contact-map">
                <iframe
                  title="HighTech office location"
                  className="rounded w-100 h-100"
                  src={siteConfig.mapEmbedUrl}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="col-lg-6 wow fadeIn" data-wow-delay=".5s">
              <div className="p-5 rounded contact-form">
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    aria-label="Your Name"
                    className="form-control border-0 py-3"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    aria-label="Your Email"
                    className="form-control border-0 py-3"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="project"
                    aria-label="Project"
                    className="form-control border-0 py-3"
                    placeholder="Project"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    aria-label="Message"
                    className="w-100 form-control border-0 py-3"
                    rows={6}
                    cols={10}
                    placeholder="Message"
                  />
                </div>
                <div className="text-start">
                  <button className="btn bg-primary text-white py-3 px-5" type="button">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
