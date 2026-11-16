import HomeModalButton from "@/components/home/HomeModalButton";

export default function HomeGovernment() {
  return (
    <section className="home-government mt-4 mt-lg-5 pb-0">
      <div className="container">
        <div className="home-government-inner wow fadeInUp" data-wow-delay=".1s">
          <div className="row align-items-center g-4">
            <div className="col-lg-8 text-center text-lg-start">
              <h2>Empowering Public-Sector E-Governance &amp; Infrastructure</h2>
              <p>
                Specialized in deploying secure paperless e-office workflows, spatial
                GIS mapping systems, and institutional supply contracts across
                Gilgit-Baltistan.
              </p>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <HomeModalButton variant="light">Partner With Us</HomeModalButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
