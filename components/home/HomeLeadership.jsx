import Link from "next/link";

import { getInitials, teamMembers } from "@/lib/team";

const leaders = teamMembers.slice(0, 2);

export default function HomeLeadership() {
  return (
    <section className="home-leadership">
      <div className="container">
        <h2 className="text-center wow fadeInDown" data-wow-delay=".1s">
          Led by Experienced Management
        </h2>

        <div className="row justify-content-center g-3 g-lg-4">
          {leaders.map((member, index) => (
            <div key={member.name} className="col-12 col-sm-6 col-lg-4">
              <article
                className="team-profile-card home-leadership-card wow fadeInUp"
                data-wow-delay={`${0.15 + index * 0.08}s`}
              >
                <div className="team-profile-avatar">
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} />
                  ) : (
                    <span aria-hidden="true">{getInitials(member.name)}</span>
                  )}
                </div>

                <h3>{member.name}</h3>
                <p className="team-profile-designation">{member.designation}</p>
              </article>
            </div>
          ))}
        </div>

        <div className="text-center mt-4 wow fadeIn" data-wow-delay=".3s">
          <Link href="/team" className="home-text-link">
            Meet the Full Team
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
