import { Metadata } from "next";
import React from "react";
import AnimatedTextSection from "@/app/components/AnimatedTextSection";
import ContentSection from "@/app/components/ContentSection";
import HeroSection from "@/app/components/HeroSection";
import QuoteSection from "@/app/components/QuoteSection";
import Timeline from "@/app/components/Timeline";
import VideoSection from "@/app/components/Video";
import { services } from "@/app/constants/services";
import {
  paymentList,
  productShowcaseList,
  schedulingList,
} from "@/app/constants/solutionsList";
import { timelineItems } from "@/app/constants/timelineItems";
import { whyChooseUsData } from "@/app/constants/why-choose-us-section-data";
import RenderServices from "@/app/ui/renderers/RenderServices";

export const metadata: Metadata = {
  title: "Services - Pixelated Chilies | Your Digital Marketing Agency",
  description:
    "Explore a wide range of digital marketing services at Pixelated Chilies. From web development and SEO to social media management and brand design, we provide customized solutions to help your business grow.",
  keywords: [
    "digital marketing agency",
    "SEO services",
    "brand strategy",
    "web development",
    "social media management",
    "e-commerce solutions",
    "custom web design",
    "branding",
    "digital marketing services",
  ],
  alternates: {
    canonical: "pxchilies.com/services",
  },
  openGraph: {
    title: "Services - Pixelated Chilies | Your Digital Marketing Agency",
    description:
      "Pixelated Chilies offers comprehensive digital marketing services, including custom web development, SEO, social media management, innovative brand strategies and interactive funnels. Elevate your business with our expert solutions.",
    url: "pxchilies.com/services",
    siteName: "Pixelated Chilies",
    images: [
      {
        url: "pxchilies.com/og-image.jpg",
        width: 1920,
        height: 921,
        alt: "Pixelated Chilies Services",
      },
    ],
  },
};

const Services: React.FC = () => {
  return (
    <main>
      <section className="container mx-auto my-4">
        <section className="relative overflow-hidden my-28 py-32 md:py-60">
          {/* Video Background */}
          <VideoSection src="https://res.cloudinary.com/dc10qw88i/video/upload/v1715794154/about-us-video-banner_ewewjh.mp4" />

          {/* Content Section */}
          <div className="relative z-10 flex items-center justify-center h-full md:w-2/3 mx-auto">
            <ContentSection
              title="Our Services"
              description="We provide tailored digital marketing solutions, including web development, e-commerce platforms, social media management, brand identity design and interactive funnels. Partner with us to create impactful, results-driven campaigns that elevate your brand."
              alignment="center"
              headingLevel="h1"
            />
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
      <section className="mt-16">
        <QuoteSection />
      </section>
      <section className="container">
        <section className="my-16 rounded-lg">
          <ContentSection
            title="Why choose us?"
            textColor="text-white"
            className="flex md:justify-center"
            headingSize="text-2xl md:text-3xl"
          />
          <hr className="border-[0.5px] border-black" />
          <section className="pt-2 md:pt-4">
            <AnimatedTextSection
              sections={whyChooseUsData}
              textColor="text-white"
              classNames="bg-gradient-to-tr from-[#000000] via-[#001116] to-[#000000] border border-slate-900/10 dark:border-slate-50/[0.06] p-4"
            />
          </section>
        </section>
      </section>
    </main>
  );
};

export default Services;
