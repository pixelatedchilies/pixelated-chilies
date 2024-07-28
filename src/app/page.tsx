import Image from "next/image";
import { services } from "./constants/services";
import Loader from "./ui/Loader";
import ReusableList, { ListItem } from "./ui/ReusableList";
import RenderServices from "./ui/renderers/RenderServices";

export default function Home() {
  const schedulingList: ListItem[] = [
    { text: "Services" },
    { text: "Calendar" },
    { text: "Time slots" },
    { text: "Business Locations" },
    { text: "Business Agents" },
    { text: "Live chat communication" },
    { text: "View and manage Appointments" },
    { text: "Working days & hours" },
    { text: "Service Durations" },
    { text: "QR Code Appointment Generator" },
  ];

  const paymentList: ListItem[] = [
    { text: "Security and credibility" },
    { text: "Multi-Currency support" },
    { text: "Increase conversions" },
    { text: "Workflow simplifier" },
    { text: "Reduce cart abandonment" },
    { text: "Pay in your preferred currency" },
  ];

  return (
    <>
      <Loader />
      <main className="my-4">
        <section className="container">
          <h2 className="text-white font-semibold text-2xl md:text-3xl mt-4">
            We develop & build <br />
            Digital Future
          </h2>
          <p className="mb-4 md:w-3/6">
            Embracing innovation and cutting-edge technology, we pioneer the
            development and construction of the digital future, shaping
            tomorrow&apos;s landscape with creativity and vision.
          </p>
        </section>
        <section className="container">
          <RenderServices services={services} />
        </section>
        <section className="container">
          <div className="flex flex-row-reverse flex-wrap my-12 gap-1">
            <div className="md:w-3/6 bg-white rounded-3xl"></div>
            <div className="md:w-3/6 flex flex-col gap-2">
              <div className="collapse collapse-arrow border border-slate-700 hover:bg-base-200 transition duration-300">
                <input type="radio" name="my-accordion-2" />
                <h2 className="collapse-title text-lg text-white font-normal">
                  01. Endless Possibilities
                </h2>
                <div className="collapse-content">
                  <p>
                    Unlock endless possibilities with Pixelated Chilies. As a
                    dynamic digital solutions provider, we specialize in a
                    diverse range of services tailored to elevate your online
                    presence.
                  </p>
                  <br />
                  <p>
                    From captivating web design and development to seamless
                    e-commerce solutions, strategic social media management, and
                    impactful branding initiatives, we empower businesses to
                    thrive in the digital landscape.
                  </p>
                  <br />
                  <p>
                    Dive into our expertise, including crafting engaging
                    funnels, optimizing conversion flows, and beyond. With
                    Pixelated Chilies, the potential for your online success
                    knows no boundaries.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow border border-slate-700 hover:bg-base-200 transition duration-300">
                <input type="radio" name="my-accordion-2" />
                <h2 className="collapse-title text-lg text-white font-normal">
                  02. Process Optimization
                </h2>
                <div className="collapse-content">
                  <p>
                    We&apos;re all about igniting growth and shaking up how
                    companies do digital marketing.
                  </p>
                  <br />
                  <p>
                    We kick things off with strategic planning that sets the
                    stage for killer campaigns blending everything from spicy
                    social media to fiery content.
                  </p>
                  <br />
                  <p>
                    Our data-driven insights keep things cooking, making sure
                    your marketing stays hot and fresh.
                  </p>
                  <p>
                    Let&apos;s turn up the heat on your competition together!
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow border border-slate-700 hover:bg-base-200 transition duration-300">
                <input type="radio" name="my-accordion-2" />
                <h2 className="collapse-title text-lg text-white font-normal">
                  03. Ongoing Support
                </h2>
                <div className="collapse-content">
                  <p>
                    Our support doesn&apos;t end when your campaign goes live.
                  </p>
                  <p>
                    We&apos;re here for you every step of the way, ensuring your
                    success remains steady.
                  </p>
                  <br />
                  <p>Let&apos;s keep the momentum going together!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full h-[300px] md:h-[700px] relative mb-8">
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
          <h2 className="text-white font-semibold text-2xl md:text-3xl text-center">
            Crafting Pixel-Perfect Solutions
          </h2>
          <p className="text-center">Explore our dynamic creations below</p>
        </section>
        <section className="mt-8">
          <div className="hero bg-base-200">
            <div className="hero-content flex flex-col md:flex-row">
              <Image
                src="https://pixelatedchilies.com/wp-content/uploads/2024/07/Screenshot-2024-07-02-at-1.12.58-AM-scaled.webp"
                className="w-full md:w-1/2 rounded-lg shadow-2xl object-cover"
                alt="Hero"
                width={650}
                height={350}
              />
              <div className="w-full p-0 md:p-8">
                <h2 className="text-white font-semibold text-2xl md:text-3xl mb-2">
                  Powerful Scheduling
                </h2>
                <ReusableList items={schedulingList} />
              </div>
            </div>
          </div>
          <div className="hero bg-base-200">
            <div className="hero-content flex flex-col md:flex-row-reverse">
              <Image
                src="https://pixelatedchilies.com/wp-content/uploads/2024/07/Screenshot-2024-07-02-at-1.26.21-AM-scaled.webp"
                className="w-full md:w-1/2 rounded-lg shadow-2xl object-cover"
                alt="Hero"
                width={650}
                height={350}
              />
              <div className="w-full p-0 md:p-8">
                <h2 className="text-white font-semibold text-2xl md:text-3xl mb-2">
                  Payment Integration
                </h2>
                <ReusableList items={paymentList} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
