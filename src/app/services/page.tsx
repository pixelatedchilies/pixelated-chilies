import React from "react";
import RenderServices from "../ui/renderers/RenderServices";
import { services } from "../constants/services";
import VideoSection from "../components/Video";
import ContentSection from "../components/ContentSection";
import HeroSection from "../components/HeroSection";
import {
  paymentList,
  productShowcaseList,
  schedulingList,
} from "../constants/solutionsList";
import Timeline from "../components/Timeline";
import { timelineItems } from "../constants/timelineItems";

const Services: React.FC = () => {
  return (
    <main>
      <div className="container">
        <RenderServices services={services} />
      </div>
      <section className="w-full h-[300px] md:h-[700px] relative mb-8">
        <VideoSection src="https://res.cloudinary.com/dc10qw88i/video/upload/v1719947082/trio-salon-website-video-banner_xclrv1.mp4" />
      </section>
      <ContentSection
        title="Crafting Pixel-Perfect Solutions"
        description="Explore our dynamic creations below"
        alignment="center"
      ></ContentSection>
      <section className="my-8">
        <HeroSection
          imageUrl="https://pixelatedchilies.com/wp-content/uploads/2024/07/Screenshot-2024-07-02-at-1.12.58-AM-scaled.webp"
          title="Powerful Scheduling"
          listItems={schedulingList}
        />
        <HeroSection
          imageUrl="https://pixelatedchilies.com/wp-content/uploads/2024/07/Screenshot-2024-07-02-at-1.26.21-AM-scaled.webp"
          title="Payment Integration"
          listItems={paymentList}
          reverseContent={true}
        />
        <HeroSection
          imageUrl="https://pixelatedchilies.com/wp-content/uploads/2024/07/Screenshot-2024-07-02-at-1.12.58-AM-scaled.webp"
          title="Product Showcase"
          listItems={productShowcaseList}
        />
      </section>
      <section className="container my-16 flex flex-col gap-8 md:gap-12">
        <ContentSection title="How it works?" alignment="center" />
        <Timeline items={timelineItems} />
      </section>
    </main>
  );
};

export default Services;
