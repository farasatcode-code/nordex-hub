import HomeModalButton from "@/components/home/HomeModalButton";

export default function HomeHero() {
  return (
    <section className="home-hero">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-7">
            <span className="home-hero-badge wow fadeInDown" data-wow-delay=".1s">
              <i className="fas fa-map-marker-alt" aria-hidden="true" />
              Enterprise Technology &amp; Institutional Solutions Gilgit-Baltistan
            </span>

            <h1 className="wow fadeInUp" data-wow-delay=".2s">
              Engineering Scale, Digital Transformation &amp; General Procurement
            </h1>

            <p className="wow fadeInUp" data-wow-delay=".3s">
              Nordex Hub delivers high-performance software systems, advanced AI
              solutions, institutional IT infrastructure, and rigorous general order
              supply for private enterprises and government sectors.
            </p>

            <div className="home-hero-actions wow fadeInUp" data-wow-delay=".4s">
              <a href="#services-overview" className="home-cta home-cta--outline">
                <span>Explore Services</span>
                <i className="fas fa-arrow-down" aria-hidden="true" />
              </a>
              <HomeModalButton variant="primary">Discuss Your Project</HomeModalButton>
            </div>
          </div>

          <div className="col-lg-5 d-none d-lg-block">
            <div className="home-hero-visual wow fadeInRight" data-wow-delay=".3s">
              <div className="home-hero-orbit home-hero-orbit--outer" />
              <div className="home-hero-orbit home-hero-orbit--inner" />

              <div className="home-hero-core">
                <i className="fas fa-cubes" aria-hidden="true" />
              </div>

              <div className="home-hero-node home-hero-node--1">
                <i className="fas fa-laptop-code" aria-hidden="true" />
              </div>
              <div className="home-hero-node home-hero-node--2">
                <i className="fas fa-robot" aria-hidden="true" />
              </div>
              <div className="home-hero-node home-hero-node--3">
                <i className="fas fa-server" aria-hidden="true" />
              </div>
              <div className="home-hero-node home-hero-node--4">
                <i className="fas fa-university" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
