const points = [
  {
    icon: "fas fa-handshake",
    title: "Single-Source Accountability",
    description:
      "Unifying software development, IT deployment, and physical procurement under one roof.",
  },
  {
    icon: "fas fa-check-double",
    title: "Rigorous Execution",
    description:
      "Maintained through strict administrative discipline and hands-on technical leadership.",
  },
  {
    icon: "fas fa-layer-group",
    title: "Scalable Architecture",
    description:
      "Built with modern tech stacks and sustainable frameworks designed for long-term reliability.",
  },
];

export default function HomeWhyChoose() {
  return (
    <section className="home-why">
      <div className="container">
        <h2 className="home-section-title wow fadeIn" data-wow-delay=".1s">
          Why Choose Nordex Hub
        </h2>

        <div className="row g-3 g-lg-4">
          {points.map((point, index) => (
            <div key={point.title} className="col-12 col-md-6 col-lg-4">
              <div
                className="home-why-card wow fadeInUp"
                data-wow-delay={`${0.15 + index * 0.1}s`}
              >
                <div className="home-why-icon">
                  <i className={point.icon} aria-hidden="true" />
                </div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
