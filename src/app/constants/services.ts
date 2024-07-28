export interface Service {
  id: number;
  title: string;
  description: string;
  src: string;
  tools: string;
  toolsImageProps?: {
    width: number;
    height: number;
  };
}

export const services: Service[] = [
  {
    id: 1,
    title: "Web Design & Development",
    description:
      "Craft visually stunning and functionally robust websites that leave a lasting impression.",
    src: "/web-development.svg",
    tools: "/web-technologies.svg",
    toolsImageProps: {
      width: 200,
      height: 31,
    },
  },
  {
    id: 2,
    title: "E-Commerce Shop",
    description:
      "Not only showcase your products but also drive sales and customer engagement.",
    src: "/e-commerce.svg",
    tools: "/e-commerce-tools.svg",
    toolsImageProps: {
      width: 150,
      height: 30,
    },
  },
  {
    id: 3,
    title: "Social Media Management",
    description:
      "Create captivating landing pages optimized for maximum engagement and lead generation.",
    src: "/social-media.svg",
    tools: "/social-media-tools.svg",
    toolsImageProps: {
      width: 135,
      height: 25,
    },
  },
  {
    id: 4,
    title: "Brand Design",
    description:
      "From logo design and brand guidelines to messaging and storytelling, we craft a cohesive brand identity.",
    src: "/brand-design.svg",
    tools: "/brand-design-tools.svg",
    toolsImageProps: {
      width: 130,
      height: 30,
    },
  },
  {
    id: 5,
    title: "Interactive Funnels",
    description:
      "Streamline your customer journey and maximize conversions with expertly crafted funnels.",
    src: "/interactive-funnels.svg",
    tools: "/",
  },
  {
    id: 6,
    title: "Social Recruiting & Talent Acquisition",
    description:
      "Create captivating landing pages optimized for maximum engagement and lead generation.",
    src: "/social-recruiting.svg",
    tools: "/",
  },
];
