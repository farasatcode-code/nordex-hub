export default function AboutHero() {
  return (
    <section className="services-hero about-hero">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-8">
            <h1 className="wow fadeInUp" data-wow-delay=".1s">
              Bridging Technology, Infrastructure &amp; Institutional Execution
            </h1>
            <p className="wow fadeInUp" data-wow-delay=".2s">
              Discover the vision, operational structure, and core standards that
              drive Nordex Hub forward.
            </p>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="about-hero-panel wow fadeInRight" data-wow-delay=".3s">
              <div className="about-hero-panel-icon">
                <i className="fas fa-bullseye" aria-hidden="true" />
              </div>
              <div className="about-hero-panel-icon">
                <i className="fas fa-eye" aria-hidden="true" />
              </div>
              <div className="about-hero-panel-icon">
                <i className="fas fa-handshake" aria-hidden="true" />
              </div>
              <div className="about-hero-panel-icon">
                <i className="fas fa-sitemap" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
