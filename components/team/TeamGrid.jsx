import { getInitials, teamMembers } from "@/lib/team";

export default function TeamGrid() {
  return (
    <section className="team-grid">
      <div className="container">
        <div className="row g-3 g-lg-4">
          {teamMembers.map((member, index) => (
            <div key={member.name} className="col-12 col-md-6 col-xl-4">
              <article
                className="team-profile-card wow fadeInUp"
                data-wow-delay={`${0.1 + index * 0.06}s`}
              >
                <div className="team-profile-band" aria-hidden="true" />
                <div className="team-profile-avatar">
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} width={176} height={176} />
                  ) : (
                    <span aria-hidden="true">{getInitials(member.name)}</span>
                  )}
                </div>

                <h3>{member.name}</h3>
                <p className="team-profile-designation">{member.designation}</p>

                <div className="team-profile-divider" />

                <p className="team-profile-label">Role &amp; Focus</p>
                <p className="team-profile-focus">{member.focus}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
