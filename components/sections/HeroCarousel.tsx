import Link from "next/link";

import { slides } from "@/lib/data";

const [slide] = slides;

export default function HeroCarousel() {
  return (
    <div className="container-fluid px-0">
      <div className="hero">
        <img src={slide.image} className="hero-image" alt={slide.heading} />

        <div className="carousel-caption">
          <div className="container carousel-content">
            <h6 className="text-secondary h4 animated fadeInUp">{slide.eyebrow}</h6>
            <h1
              className={`text-white hero-heading display-1 mb-4 ${slide.headingAnimation}`}
            >
              {slide.heading}
            </h1>
            <p className="mb-4 text-white fs-5 animated fadeInDown">
              {slide.paragraph}
              <br />
              {slide.paragraphLine}
            </p>
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
    </div>
  );
}