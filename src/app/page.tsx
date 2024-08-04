import { services } from "./constants/services";
import RenderServices from "./ui/renderers/RenderServices";
import ReusableList from "./ui/ReusableList";
import Loader from "./ui/Loader";
import Image from "next/image";
import {
  paymentList,
  productShowcaseList,
  schedulingList,
} from "./constants/solutionsList";
import MotionHeader from "./ui/MotionHeader";
import MotionText from "./ui/MotionText";
import HeroSection from "./components/HeroSection";
import { accordionItems } from "./constants/accordion";
import Accordion from "./components/Accordion";

export default function Home() {
  return (
    <>
      <Loader />
      <main className="my-4">
        <section className="container">
          <MotionText>
            <h2 className="text-white font-semibold text-2xl md:text-3xl mt-4">
              We develop & build <br />
              Digital Future
            </h2>
          </MotionText>
          <MotionText>
            <p>
              Embracing innovation and cutting-edge technology, we pioneer the
              tomorrow&#39;s landscape with creativity and vision.
            </p>
          </MotionText>
        </section>
        <section className="container">
          <RenderServices services={services} />
        </section>
        <section className="w-full h-[300px] md:h-[700px] relative my-8">
          <video
            className="absolute inset-0 w-full h-[300px] md:h-[700px] object-cover"
            src="https://res.cloudinary.com/dc10qw88i/video/upload/v1719947082/trio-salon-website-video-banner_xclrv1.mp4"
            autoPlay
            loop={true}
            muted={true}
            playsInline
          ></video>
        </section>
        <section className="container">
          <MotionHeader>
            <h2 className="text-white font-semibold text-2xl md:text-3xl text-center">
              Crafting Pixel-Perfect Solutions
            </h2>
          </MotionHeader>
          <p className="text-center">Explore our dynamic creations below</p>
        </section>
        <section className="mt-8">
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
