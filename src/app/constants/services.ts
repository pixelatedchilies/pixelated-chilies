interface Service {
  id: number;
  title: string;
  description: string;
  src: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Web Design & Development",
    description:
      "Craft visually stunning and functionally robust websites that leave a lasting impression.",
    src: "/web-development.svg",
  },
  {
    id: 2,
    title: "E-Commerce Shop",
    description:
      "Not only showcase your products but also drive sales and customer engagement.",
    src: "/e-commerce.svg",
  },
  {
    id: 3,
    title: "Social Media Management",
    description:
      "Create captivating landing pages optimized for maximum engagement and lead generation.",
    src: "/social-media.svg",
  },
  {
    id: 4,
    title: "Brand Design",
    description:
      "From logo design and brand guidelines to messaging and storytelling, we craft a cohesive brand identity.",
    src: "/brand-design.svg",
  },
  {
    id: 5,
    title: "Interactive Funnels",
    description:
      "Streamline your customer journey and maximize conversions with expertly crafted funnels.",
    src: "/interactive-funnels.svg",
  },
  {
    id: 6,
    title: "Social Recruiting & Talent Acquisition",
    description:
      "Create captivating landing pages optimized for maximum engagement and lead generation.",
    src: "/social-recruiting.svg",
  },
];
