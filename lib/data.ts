export type Service = {
  icon: string;
  title: string;
  description: string;
  delay: string;
};

export const services: Service[] = [
  {
    icon: "fa fa-code",
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.",
    delay: ".3s",
  },
  {
    icon: "fa fa-file-code",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.",
    delay: ".5s",
  },
  {
    icon: "fa fa-external-link-alt",
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.",
    delay: ".7s",
  },
  {
    icon: "fas fa-user-secret",
    title: "Web Cecurity",
    description:
      "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.",
    delay: ".3s",
  },
  {
    icon: "fa fa-envelope-open",
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.",
    delay: ".5s",
  },
  {
    icon: "fas fa-laptop",
    title: "Programming",
    description:
      "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.",
    delay: ".7s",
  },
];

export type Project = {
  image: string;
  title: string;
  subtitle: string;
  delay: string;
};

export const projects: Project[] = [
  {
    image: "/img/project-1.jpg",
    title: "Web design",
    subtitle: "Web Analysis",
    delay: ".3s",
  },
  {
    image: "/img/project-2.jpg",
    title: "Cyber Security",
    subtitle: "Cyber Security Core",
    delay: ".5s",
  },
  {
    image: "/img/project-3.jpg",
    title: "Mobile Info",
    subtitle: "Upcomming Phone",
    delay: ".7s",
  },
  {
    image: "/img/project-4.jpg",
    title: "Web Development",
    subtitle: "Web Analysis",
    delay: ".3s",
  },
  {
    image: "/img/project-5.jpg",
    title: "Digital Marketing",
    subtitle: "Marketing Analysis",
    delay: ".5s",
  },
  {
    image: "/img/project-6.jpg",
    title: "keyword Research",
    subtitle: "keyword Analysis",
    delay: ".7s",
  },
];

export type Post = {
  image: string;
  category: string;
  date: string;
  excerpt: string;
  delay: string;
};

export const posts: Post[] = [
  {
    image: "/img/blog-1.jpg",
    category: "Web Design",
    date: "24 March 2023",
    excerpt:
      "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet",
    delay: ".3s",
  },
  {
    image: "/img/blog-2.jpg",
    category: "Development",
    date: "23 April 2023",
    excerpt:
      "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet",
    delay: ".5s",
  },
  {
    image: "/img/blog-3.jpg",
    category: "Mobile App",
    date: "30 jan 2023",
    excerpt:
      "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet",
    delay: ".7s",
  },
];

export const postAuthor = {
  name: "Daniel Martin",
  avatar: "/img/admin.jpg",
  shares: "5324 Share",
  comments: "5 Comments",
};

export type TeamMember = {
  image: string;
  name: string;
  designation: string;
};

export const team: TeamMember[] = [
  { image: "/img/team-1.jpg", name: "Full Name", designation: "Designation" },
  { image: "/img/team-2.jpg", name: "Full Name", designation: "Designation" },
  { image: "/img/team-3.jpg", name: "Full Name", designation: "Designation" },
  { image: "/img/team-4.jpg", name: "Full Name", designation: "Designation" },
];

export type Testimonial = {
  image: string;
  name: string;
  profession: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    image: "/img/testimonial-1.jpg",
    name: "Client Name",
    profession: "Profession",
    quote:
      "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.",
  },
  {
    image: "/img/testimonial-2.jpg",
    name: "Client Name",
    profession: "Profession",
    quote:
      "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.",
  },
  {
    image: "/img/testimonial-3.jpg",
    name: "Client Name",
    profession: "Profession",
    quote:
      "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.",
  },
  {
    image: "/img/testimonial-4.jpg",
    name: "Client Name",
    profession: "Profession",
    quote:
      "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.",
  },
];

export type Slide = {
  image: string;
  eyebrow: string;
  heading: string;
  headingAnimation: string;
  paragraph: string;
  paragraphLine: string;
};

export const slides: Slide[] = [
  {
    image: "/img/carousel-1.jpg",
    eyebrow: "Smart Enterprise Solutions",
    heading: "NORDEX HUB",
    headingAnimation: "animated fadeInRight",
    paragraph: "Government Contractor & Supplier | Private Sector solutions",
    paragraphLine: "Gilgit Baltistan",
  },
];

export const aboutParagraphs = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus. Etiam gravida justo nec erat vestibulum, et malesuada augue laoreet.",
  "Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus.",
];
