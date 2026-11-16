const approachPoints = [
  {
    icon: "fas fa-layer-group",
    title: "Single-Source Accountability",
    description:
      "Bringing software engineering, digital infrastructure, institutional procurement, and brand media together under unified coordination.",
  },
  {
    icon: "fas fa-eye",
    title: "Clarity & Transparency",
    description:
      "Maintaining open communication from initial discussion to final execution.",
  },
];

export default function TeamApproach() {
  return (
    <section className="team-approach">
      <div className="container">
        <div className="team-approach-inner wow fadeInUp" data-wow-delay=".1s">
          <h2>Our Working Approach</h2>

          <div className="row g-3 g-lg-4">
            {approachPoints.map((point, index) => (
              <div key={point.title} className="col-12 col-lg-6">
                <div
                  className="team-approach-item wow fadeInUp"
                  data-wow-delay={`${0.15 + index * 0.1}s`}
                >
                  <div className="team-approach-icon">
                    <i className={point.icon} aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
