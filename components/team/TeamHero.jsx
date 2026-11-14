export default function TeamHero() {
  return (
    <section className="services-hero team-hero">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-8">
            <h1 className="wow fadeInUp" data-wow-delay=".1s">
              Meet the Leadership Behind Nordex Hub
            </h1>
            <p className="wow fadeInUp" data-wow-delay=".2s">
              Combining technical engineering, administrative governance, strategic
              execution, and digital media to drive our vision forward.
            </p>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="about-hero-panel wow fadeInRight" data-wow-delay=".3s">
              <div className="about-hero-panel-icon">
                <i className="fas fa-users-cog" aria-hidden="true" />
              </div>
              <div className="about-hero-panel-icon">
                <i className="fas fa-code" aria-hidden="true" />
              </div>
              <div className="about-hero-panel-icon">
                <i className="fas fa-landmark" aria-hidden="true" />
              </div>
              <div className="about-hero-panel-icon">
                <i className="fas fa-bullhorn" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
