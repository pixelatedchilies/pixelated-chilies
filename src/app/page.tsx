import FlippingCart from "./ui/FlippingCard";
import { Video } from "./ui/video";

export default function Home() {
  return (
    <>
      <div className="container mx-auto mt-24 px-4">
        <div className="grid md:grid-cols-3 gap-4">
          <FlippingCart
            title={"Web Design & Development"}
            description="Craft visually stunning and functionally robust websites that leave a lasting impression."
            src="/web-development.svg"
          />
          <FlippingCart
            title={`E-Commerce Shop`}
            description="Not only showcase your products but also drive sales and customer engagement."
            src="/e-commerce.svg"
          />
          <FlippingCart
            title={"Social Media Management"}
            description="Create captivating landing pages optimized for maximum engagement and lead generation."
            src="/social-media.svg"
          />
          <FlippingCart
            title={"Brand Design"}
            description="From logo design and brand guidelines to messaging and storytelling, we craft a cohesive brand identity."
            src="/brand-design.svg"
          />
          <FlippingCart
            title={`Interactive Funnels`}
            description="Streamline your customer journey and maximize conversions with expertly crafted funnels."
            src="/interactive-funnels.svg"
          />
          <FlippingCart
            title={"Social Recruiting & Talent Acquisition"}
            description="Create captivating landing pages optimized for maximum engagement and lead generation."
            src="/social-recruiting.svg"
          />
        </div>
        <div className="flex flex-wrap my-12 gap-1">
          <div className="md:w-3/6 bg-white rounded-3xl"></div>
          <div className="md:w-3/6 flex flex-col gap-2">
            <div className="collapse collapse-arrow border border-slate-700 hover:bg-base-200 transition duration-300">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl text-white font-medium">
                01. Endless Possibilities
              </div>
              <div className="collapse-content">
                <p>
                  Unlock endless possibilities with Pixelated Chilies. As a
                  dynamic digital solutions provider, we specialize in a diverse
                  range of services tailored to elevate your online presence.
                </p>
                <p>
                  From captivating web design and development to seamless
                  e-commerce solutions, strategic social media management, and
                  impactful branding initiatives, we empower businesses to
                  thrive in the digital landscape.
                </p>
                <p>
                  Dive into our expertise, including crafting engaging funnels,
                  optimizing conversion flows, and beyond. With Pixelated
                  Chilies, the potential for your online success knows no
                  boundaries.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow border border-slate-700 hover:bg-base-200 transition duration-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl text-white font-medium">
                02. Process Optimization
              </div>
              <div className="collapse-content">
                <p>
                  We&apos;re all about igniting growth and shaking up how
                  companies do digital marketing.
                </p>
                <p>
                  We kick things off with strategic planning that sets the stage
                  for killer campaigns blending everything from spicy social
                  media to fiery content.
                </p>
                <p>
                  Our data-driven insights keep things cooking, making sure your
                  marketing stays hot and fresh.
                </p>
                <p>Let&apos;s turn up the heat on your competition together!</p>
              </div>
            </div>
            <div className="collapse collapse-arrow border border-slate-700 hover:bg-base-200 transition duration-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl text-white font-medium">
                03. Ongoing Support
              </div>
              <div className="collapse-content">
                <p>
                  Our support doesn&apos;t end when your campaign goes live.
                </p>
                <p>
                  We&apos;re here for you every step of the way, ensuring your
                  success remains steady.
                </p>
                <p>Let&apos;s keep the momentum going together!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
