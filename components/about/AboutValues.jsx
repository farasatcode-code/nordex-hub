const values = [
  {
    icon: "fas fa-code",
    title: "Technical Rigor",
    description:
      "Writing clean, scalable code and deploying robust hardware architectures that stand the test of time.",
  },
  {
    icon: "fas fa-balance-scale",
    title: "Administrative Integrity",
    description:
      "Maintaining absolute transparency, clear documentation, and strict compliance in all institutional dealings.",
  },
  {
    icon: "fas fa-exchange-alt",
    title: "Operational Versatility",
    description:
      "Seamlessly transitioning between complex software engineering and large-scale physical procurement.",
  },
];

export default function AboutValues() {
  return (
    <section className="home-why about-values">
      <div className="container">
        <h2 className="home-section-title wow fadeIn" data-wow-delay=".1s">
          Core Operating Values
        </h2>

        <div className="row g-3 g-lg-4">
          {values.map((value, index) => (
            <div key={value.title} className="col-12 col-md-6 col-lg-4">
              <div
                className="home-why-card wow fadeInUp"
                data-wow-delay={`${0.15 + index * 0.1}s`}
              >
                <div className="home-why-icon">
                  <i className={value.icon} aria-hidden="true" />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
