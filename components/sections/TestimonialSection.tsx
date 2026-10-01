"use client";

import { useEffect, useRef } from "react";

import SectionHeading from "@/components/common/SectionHeading";
import { testimonials } from "@/lib/data";
import type { Spacing } from "@/lib/layout";
import { homeSpacing } from "@/lib/layout";
import { useLibsReady } from "@/lib/vendor";

type TestimonialSectionProps = {
  spacing?: Spacing;
};

export default function TestimonialSection({
  spacing = homeSpacing,
}: TestimonialSectionProps) {
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
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 0,
        nav: true,
        navText: false,
        responsiveClass: true,
        responsive: {
          0: { items: 1 },
          576: { items: 1 },
          768: { items: 2 },
          992: { items: 3 },
        },
      });
    } catch {
      // Owl Carousel failed to load — the testimonials are still readable.
    }
  }, [libsReady]);

  return (
    <div className={`container-fluid testimonial ${spacing.section}`}>
      <div className={spacing.container}>
        <SectionHeading eyebrow="Our Testimonial" title="Our Client Saying!" />

        <div
          className="owl-carousel testimonial-carousel wow fadeIn"
          data-wow-delay=".5s"
          ref={carouselRef}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.image} className="testimonial-item border p-4">
              <div className="d-flex align-items-center">
                <div className="">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="ms-4">
                  <h4 className="text-secondary">{testimonial.name}</h4>
                  <p className="m-0 pb-3">{testimonial.profession}</p>
                  <div className="d-flex pe-5" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }, (_, index) => (
                      <i key={index} className="fas fa-star me-1 text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="border-top mt-4 pt-3">
                <p className="mb-0">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
