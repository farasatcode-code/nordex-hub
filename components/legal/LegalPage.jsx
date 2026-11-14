import PageHeader from "@/components/layout/PageHeader";

export default function LegalPage({ title, intro, sections }) {
  return (
    <>
      <PageHeader title={title} />

      <section className="container-fluid legal-page py-5">
        <div className="container">
          <div className="legal-content mx-auto wow fadeIn" data-wow-delay=".2s">
            {intro ? <p className="legal-intro">{intro}</p> : null}

            {sections.map((section) => (
              <div key={section.heading} className="legal-block">
                <h2 className="legal-heading">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
