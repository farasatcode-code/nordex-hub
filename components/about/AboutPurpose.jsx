const purposeBlocks = [
  {
    icon: "fas fa-bullseye",
    label: "Our Mission",
    text: "To empower organizations and public institutions across Pakistan with dependable, high-performance digital systems, modern IT infrastructure, and flawless supply chain execution.",
  },
  {
    icon: "fas fa-eye",
    label: "Our Vision",
    text: "To establish M/S Nordex Hub as the premier regional benchmark for technological innovation, enterprise engineering, and government contracting excellence.",
  },
];

export default function AboutPurpose() {
  return (
    <section className="about-purpose">
      <div className="container">
        <h2 className="home-section-title wow fadeIn" data-wow-delay=".1s">
          Our Vision &amp; Mission
        </h2>

        <div className="row justify-content-center g-4">
          {purposeBlocks.map((block, index) => (
            <div key={block.label} className="col-lg-6">
              <article
                className="about-purpose-card wow fadeInUp"
                data-wow-delay={`${0.15 + index * 0.1}s`}
              >
                <div className="about-purpose-icon">
                  <i className={block.icon} aria-hidden="true" />
                </div>
                <h3>{block.label}</h3>
                <p>{block.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
