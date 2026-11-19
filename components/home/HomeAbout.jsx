import Link from "next/link";

export default function HomeAbout() {
  return (
    <section className="home-about">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-6 wow fadeIn" data-wow-delay=".15s">
            <h2>Rooted in Gilgit-Baltistan, Built for Scale</h2>
            <p>
               Nordex Hub is a registered multi-vertical partnership combining
              advanced software engineering, rigorous operational management, and
              strategic procurement. We bridge the gap between complex technical
              requirements and reliable public/private execution.
            </p>
            <Link href="/about" className="home-text-link">
              Learn More About Our Vision
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>

          <div className="col-lg-6 wow fadeIn" data-wow-delay=".3s">
            <div className="home-about-visual">
              <div className="home-about-shape" />
              <div className="home-about-image home-about-image--main">
                <img src="/img/about-1.jpg" alt="Nordex Hub operations" />
              </div>
              <div className="home-about-image home-about-image--secondary">
                <img src="/img/about-2.jpg" alt="Nordex Hub team collaboration" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
