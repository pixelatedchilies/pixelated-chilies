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
      <section className="container mx-auto my-4">
        <section className="relative overflow-hidden py-28 md:py-60">
          {/* Video Background */}
          <video
            src="https://res.cloudinary.com/dc10qw88i/video/upload/v1715794154/about-us-video-banner_ewewjh.mp4"
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            controls={false}
            playsInline
          ></video>

          {/* Content Section */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-4xl font-bold text-white mb-4">
                Our services
              </h1>
              <p className="text-lg text-white">
                Dedicated to crafting dynamic and innovative digital solutions.
                Specializing in custom web development, we blend cutting-edge
                technology with creative design to deliver websites that are not
                only visually stunning but also highly functional.
              </p>
            </div>
          </div>
        </section>
      </section>
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
