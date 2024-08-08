import React from "react";
import ProfileCard from "../ui/ProfileCard";
import ContentSection from "../components/ContentSection";
import AnimatedTextSection from "../components/AnimatedSection";
import { sectionsData } from "../constants/about-section-data";

const AboutUs = () => {
  return (
    <main className="container mx-auto my-4">
      <section className="container mx-auto my-4">
        <section className="relative overflow-hidden my-16 py-24 md:py-60">
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
            <ContentSection
              title="About Us"
              description="Dedicated to crafting dynamic and innovative digital solutions.
                Specializing in custom web development, we blend cutting-edge
                technology with creative design to deliver websites that are not
                only visually stunning but also highly functional."
              alignment="center"
            />
          </div>
        </section>
      </section>
      <section className="pb-24">
        <AnimatedTextSection
          sections={sectionsData}
          classNames="bg-gradient-to-br from-[#08cedc1f]"
        />
      </section>
      <section className="mb-8">
        <ContentSection title="Meet the visionary team" alignment="center" />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProfileCard
          src={
            "https://pixelatedchilies.com/wp-content/uploads/2024/05/Gent-Gllareva.png"
          }
          title={"Gent Gllareva"}
          description={"Co-Founder 🚀"}
        />
        <ProfileCard
          src={
            "https://pixelatedchilies.com/wp-content/uploads/2024/05/Valdrin-Nishori.jpg"
          }
          title={"Valdrin Nishori"}
          description={"Co-Founder 🚀"}
        />
        <ProfileCard
          src={
            "https://pixelatedchilies.com/wp-content/uploads/2024/05/Plator-Gllareva-scaled.webp"
          }
          title={"Plator Gllareva"}
          description={"Co-Founder 🚀"}
        />
      </section>
    </main>
  );
};

export default AboutUs;
