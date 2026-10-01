import Link from "next/link";

import { aboutParagraphs } from "@/lib/data";
import type { Spacing } from "@/lib/layout";
import { pageSpacing } from "@/lib/layout";

type AboutSectionProps = {
  spacing?: Spacing;
};

export default function AboutSection({
  spacing = pageSpacing,
}: AboutSectionProps) {
  return (
    <div className={`container-fluid ${spacing.section}`}>
      <div className={spacing.container}>
        <div className="row g-5">
          <div className="col-lg-5 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s">
            <div className="h-100 position-relative">
              <img
                src="/img/about-1.jpg"
                className="img-fluid w-75 rounded"
                alt="HighTech agency office"
                style={{ marginBottom: "25%" }}
              />
              <div className="position-absolute w-75" style={{ top: "25%", left: "25%" }}>
                <img
                  src="/img/about-2.jpg"
                  className="img-fluid w-100 rounded"
                  alt="HighTech team collaborating"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s">
            <h5 className="text-primary">About Us</h5>
            <h1 className="mb-4">About HighTech Agency And It&apos;s Innovative IT Solutions</h1>
            {aboutParagraphs.map((paragraph, index) => (
              <p key={paragraph.slice(0, 24)} className={index === aboutParagraphs.length - 1 ? "mb-4" : undefined}>
                {paragraph}
              </p>
            ))}
            <Link href="/about" className="btn btn-secondary rounded-pill px-5 py-3 text-white">
              More Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
