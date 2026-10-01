"use client";

import { useEffect, useRef } from "react";

import SectionHeading from "@/components/common/SectionHeading";
import { team } from "@/lib/data";
import type { Spacing } from "@/lib/layout";
import { homeSpacing } from "@/lib/layout";
import { socialLinks } from "@/lib/site";
import { useLibsReady } from "@/lib/vendor";

type TeamSectionProps = {
  spacing?: Spacing;
};

export default function TeamSection({ spacing = homeSpacing }: TeamSectionProps) {
  const libsReady = useLibsReady();
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = carouselRef.current;
    const $ = window.jQuery;
    if (!libsReady || !node || !$) {
      return;
    }

    try {
      $(node).owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav: true,
        navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
        responsiveClass: true,
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          992: { items: 3 },
        },
      });
    } catch {
      // Owl Carousel failed to load — the grid of members is still readable.
    }
  }, [libsReady]);

  return (
    <div className={`container-fluid team ${spacing.section}`}>
      <div className={spacing.container}>
        <SectionHeading eyebrow="Our Team" title="Meet our expert Team" />

        <div className="owl-carousel team-carousel wow fadeIn" data-wow-delay=".5s" ref={carouselRef}>
          {team.map((member) => (
            <div key={member.image} className="rounded team-item">
              <div className="team-content">
                <div className="team-img-icon">
                  <div className="team-img rounded-circle">
                    <img
                      src={member.image}
                      className="img-fluid w-100 rounded-circle"
                      alt={member.name}
                    />
                  </div>
                  <div className="team-name text-center py-3">
                    <h4 className="">{member.name}</h4>
                    <p className="m-0">{member.designation}</p>
                  </div>
                  <div className="team-icon d-flex justify-content-center pb-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href="#"
                        aria-label={`${member.name} on ${social.label}`}
                        className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      >
                        <i className={social.icon} />
                      </a>
                    ))}
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
