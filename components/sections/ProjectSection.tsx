import Link from "next/link";

import SectionHeading from "@/components/common/SectionHeading";
import { projects } from "@/lib/data";
import type { Spacing } from "@/lib/layout";
import { homeSpacing } from "@/lib/layout";

type ProjectSectionProps = {
  spacing?: Spacing;
};

export default function ProjectSection({ spacing = homeSpacing }: ProjectSectionProps) {
  return (
    <div className={`container-fluid project ${spacing.section}`}>
      <div className={spacing.container}>
        <SectionHeading eyebrow="Our Project" title="Our Recently Completed Projects" />

        <div className="row g-5">
          {projects.map((project) => (
            <div key={project.title} className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay={project.delay}>
              <div className="project-item">
                <div className="project-img">
                  <img src={project.image} className="img-fluid w-100 rounded" alt={project.title} />
                  <div className="project-content">
                    <Link href="/project" className="text-center">
                      <h4 className="text-secondary">{project.title}</h4>
                      <p className="m-0 text-white">{project.subtitle}</p>
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
