"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { slides } from "@/lib/data";
import { useLibsReady } from "@/lib/vendor";

export default function HeroCarousel() {
  const libsReady = useLibsReady();
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = carouselRef.current;
    if (!libsReady || !node) {
      return;
    }

    const Carousel = window.bootstrap?.Carousel;

    if (Carousel) {
      // `getOrCreateInstance` only exists from Bootstrap 5.0.2; the pinned
      // 5.0.0 build has just `getInstance` and the constructor.
      const carousel =
        Carousel.getOrCreateInstance?.(node) ??
        Carousel.getInstance?.(node) ??
        new Carousel(node);

      return () => carousel.dispose?.();
    }

    // Last resort: Bootstrap's jQuery plugin bridge.
    const $ = window.jQuery;
    if ($) {
      try {
        $(node).carousel();
        return () => {
          $(node).carousel("destroy");
        };
      } catch {
        // Bridge unavailable — the slides stay visible but static.
      }
    }
  }, [libsReady]);

  return (
    <div className="container-fluid px-0">
      {/* `data-bs-ride` is deliberately absent: the carousel is started
          explicitly in the effect below so it also works after a client-side
          navigation, where Bootstrap's DOMContentLoaded auto-ride never runs. */}
      <div id="carouselId" className="carousel slide" ref={carouselRef}>
        <ol className="carousel-indicators">
          {slides.map((slide, index) => (
            <li
              key={slide.image}
              data-bs-target="#carouselId"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : undefined}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </ol>

        <div className="carousel-inner" role="listbox">
          {slides.map((slide, index) => (
            <div
              key={slide.image}
              className={`carousel-item${index === 0 ? " active" : ""}`}
            >
              <img src={slide.image} className="img-fluid" alt={slide.heading} />
              <div className="carousel-caption">
                <div className="container carousel-content">
                  <h6 className="text-secondary h4 animated fadeInUp">{slide.eyebrow}</h6>
                  <h1 className={`text-white display-1 mb-4 ${slide.headingAnimation}`}>
                    {slide.heading}
                  </h1>
                  <p className="mb-4 text-white fs-5 animated fadeInDown">{slide.paragraph}</p>
                  <Link
                    href="/about"
                    className="me-2 btn btn-primary rounded-pill px-4 py-sm-3 px-sm-5 carousel-content-btn1 animated fadeInLeft"
                  >
                    Read More
                  </Link>
                  <Link
                    href="/contact"
                    className="ms-2 btn btn-primary rounded-pill px-4 py-sm-3 px-sm-5 carousel-content-btn2 animated fadeInRight"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
