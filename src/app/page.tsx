import { services } from "./constants/services";
import FlippingCart from "./ui/FlippingCard";

export default function Home() {
  return (
    <>
      <main className="container mx-auto my-4 px-4">
        <h2 className="text-white font-semibold text-2xl md:text-3xl">
          We develop & build <br />
          Digital Future
        </h2>
        <p className="my-4 font-light md:w-3/6">
          Embracing innovation and cutting-edge technology, we pioneer the
          development and construction of the digital future, shaping tomorrow's
          landscape with creativity and vision.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map(({ id, title, description, src }) => (
            <FlippingCart
              title={title}
              description={description}
              src={src}
              key={id}
            />
          ))}
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
      </main>
    </>
  );
}
