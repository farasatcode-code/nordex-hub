import Link from "next/link";

import SectionHeading from "@/components/common/SectionHeading";
import { postAuthor, posts } from "@/lib/data";
import type { Spacing } from "@/lib/layout";
import { homeSpacing } from "@/lib/layout";
import { socialLinks } from "@/lib/site";

type BlogSectionProps = {
  spacing?: Spacing;
};

export default function BlogSection({ spacing = homeSpacing }: BlogSectionProps) {
  return (
    <div className={`container-fluid blog ${spacing.section}`}>
      <div className={spacing.container}>
        <SectionHeading eyebrow="Our Blog" title="Latest Blog & News" />

        <div className="row g-5 justify-content-center">
          {posts.map((post) => (
            <div key={post.image} className="col-lg-6 col-xl-4 wow fadeIn" data-wow-delay={post.delay}>
              <div className="blog-item position-relative bg-light rounded">
                <img src={post.image} className="img-fluid w-100 rounded-top" alt={post.category} />
                <span
                  className="position-absolute px-4 py-3 bg-primary text-white rounded"
                  style={{ top: -28, right: 20 }}
                >
                  {post.category}
                </span>

                <div
                  className="blog-btn d-flex justify-content-between position-relative px-3"
                  style={{ marginTop: -75 }}
                >
                  <div className="blog-icon btn btn-secondary px-3 rounded-pill my-auto">
                    <Link href="/blog" className="btn text-white">
                      Read More
                    </Link>
                  </div>
                  <div className="blog-btn-icon btn btn-secondary px-4 py-3 rounded-pill">
                    <div className="blog-icon-1">
                      <p className="text-white px-2">
                        Share<i className="fa fa-arrow-right ms-3" />
                      </p>
                    </div>
                    <div className="blog-icon-2">
                      {socialLinks.slice(0, 3).map((social) => (
                        <a key={social.label} href="#" aria-label={`Share on ${social.label}`} className="btn me-1">
                          <i className={`${social.icon} text-white`} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className="blog-content text-center position-relative px-3"
                  style={{ marginTop: -25 }}
                >
                  <img
                    src={postAuthor.avatar}
                    className="img-fluid rounded-circle border border-4 border-white mb-3"
                    alt={postAuthor.name}
                  />
                  <h5 className="">By {postAuthor.name}</h5>
                  <span className="text-secondary">{post.date}</span>
                  <p className="py-2">{post.excerpt}</p>
                </div>

                <div className="blog-coment d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                  <a href="#" className="text-white">
                    <small>
                      <i className="fas fa-share me-2 text-secondary" />
                      {postAuthor.shares}
                    </small>
                  </a>
                  <a href="#" className="text-white">
                    <small>
                      <i className="fa fa-comments me-2 text-secondary" />
                      {postAuthor.comments}
                    </small>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
