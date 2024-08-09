import {
  paymentList,
  productShowcaseList,
  schedulingList,
} from "./constants/solutionsList";
import { services } from "./constants/services";
import { accordionItems } from "./constants/accordion";
import ContentSection from "./components/ContentSection";
import HeroSection from "./components/HeroSection";
import VideoSection from "./components/Video";
import RenderServices from "./ui/renderers/RenderServices";
import Loader from "./ui/Loader";
import Accordion from "./components/Accordion";
import HeyflowWidget from "./components/HeyflowWidget";
import MotionText from "./ui/MotionText";

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
          <section className="container">
            <HeyflowWidget />
          </section>
        </section>
        <section className="w-full h-[300px] md:h-[700px] relative mt-12">
          <VideoSection src="https://res.cloudinary.com/dc10qw88i/video/upload/v1719947082/trio-salon-website-video-banner_xclrv1.mp4" />
        </section>
        <section className="container">
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
        <section className="hidden md:flex">
          <div className="relative bg-[url('https://pixelatedchilies.com/wp-content/uploads/2024/07/Screenshot-2024-07-02-at-10.43.38-AM-scaled.webp')] h-96 w-full flex flex-col justify-center items-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10 flex flex-col justify-center items-center">
              <MotionText delay={0}>
                <h2 className="text-white font-semibold text-3xl mb-2 text-center">
                  Ready to take your business to the next level?
                </h2>
              </MotionText>
              <MotionText delay={0.3}>
                <button className="bg-primary py-1 px-8 rounded-xl text-black text-xl font-medium my-0 flex flex-col">
                  Get your quote
                  <span className="w-full text-sm font-light">
                    in less than 20 seconds
                  </span>
                </button>
              </MotionText>
            </div>
          </div>
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
            <div className="w-full md:w-3/6 flex flex-col gap-2">
              <ContentSection title="Grow and prosper" alignment="left" />
              <Accordion items={accordionItems} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
