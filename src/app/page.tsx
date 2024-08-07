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
import Timeline from "./components/Timeline";
import { timelineItems } from "./constants/timelineItems";

export default function Home() {
  return (
    <>
      <Loader />
      <main>
        <section className="my-8">
          <ContentSection
            title="We develop & build Digital Future"
            description="Embracing innovation and cutting-edge technology, we pioneer the
          tomorrow&#39;s landscape with creativity and vision."
            alignment="center"
          />
        </section>
        <section className="container">
          <RenderServices services={services} />
        </section>
        <section className="w-full h-[300px] md:h-[700px] relative mb-8">
          <VideoSection src="https://res.cloudinary.com/dc10qw88i/video/upload/v1719947082/trio-salon-website-video-banner_xclrv1.mp4" />
        </section>
        <ContentSection
          title="Crafting Pixel-Perfect Solutions"
          description="Explore our dynamic creations below"
          alignment="center"
        />
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
        <section className="container">
          <div className="flex flex-row-reverse flex-wrap my-12 gap-1">
            <div className="md:w-3/6 bg-white rounded-3xl"></div>
            <div className="md:w-3/6 flex flex-col gap-2">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
