import dynamic from "next/dynamic";
import {
  paymentList,
  productShowcaseList,
  schedulingList,
} from "./constants/solutionsList";
import { services } from "./constants/services";
import { accordionItems } from "./constants/accordion";
import ContentSection from "./components/ContentSection";
import HeroSection from "./components/HeroSection";
import RenderServices from "./ui/renderers/RenderServices";
import Loader from "./ui/Loader";
import Accordion from "./components/Accordion";
import QuoteSection from "./components/QuoteSection";
const VideoSection = dynamic(() => import("./components/Video"), {
  ssr: false,
});
const HeyflowWidget = dynamic(() => import("./components/HeyflowWidget"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Loader />
      <main className="flex flex-col gap-4 md:gap-8">
        <section className="container mx-auto my-4">
          <section className="relative overflow-hidden my-28 py-32 md:py-60">
            {/* Video Background */}
            <VideoSection src="https://res.cloudinary.com/dc10qw88i/video/upload/v1715794154/about-us-video-banner_ewewjh.mp4" />
            {/* Content Section */}
            <div className="relative z-10 flex items-center justify-center h-full md:w-2/3 mx-auto">
              <ContentSection
                title="Your digital marketing agency for growth"
                description="Dedicated to launch grow and elevate your brand's success"
                alignment="center"
                button="Discover your growth plan"
                headingLevel="h1"
              />
            </div>
          </section>
        </section>
        <section className="container flex flex-col gap-4">
          <ContentSection
            title="We develop & build Digital Future"
            description="Embracing innovation and cutting-edge technology, we pioneer the
          tomorrow&#39;s landscape with creativity and vision."
            alignment="left"
          />
          <RenderServices services={services} />
        </section>
        <section id="services" className="py-20 md:py-28">
          <section>
            <HeyflowWidget />
          </section>
        </section>
        <section className="w-full h-[300px] md:h-[700px] relative my-12">
          <VideoSection src="https://res.cloudinary.com/dc10qw88i/video/upload/v1719947082/trio-salon-website-video-banner_xclrv1.mp4" />
        </section>
        <section>
          <ContentSection
            title="Crafting Pixel-Perfect Solutions"
            description="Explore our dynamic creations below"
            alignment="center"
          />
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
        <section className="mb-8 mt-4 md:mb-0 md:mt-20">
          <QuoteSection />
        </section>
        <section className="container">
          <div className="flex flex-row items-center flex-wrap md:flex-nowrap md:py-12 gap-1">
            <div className="w-full md:w-3/6 rounded-3xl h-[200px] md:h-[400px]">
              <video
                className="w-full h-full object-cover"
                src={
                  "https://res.cloudinary.com/dc10qw88i/video/upload/v1713270728/pixelatedchilies-marketing-video_okwsvi.mp4"
                }
                autoPlay
                loop
                muted
                playsInline
                controls={false}
              />
            </div>
            <div className="w-full md:w-3/6 flex flex-col gap-2 my-4 md:my-0">
              <ContentSection
                title="Grow and prosper"
                className="flex justify-center mb-4 md:justify-start"
              />
              <Accordion items={accordionItems} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
