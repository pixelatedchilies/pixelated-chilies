import React from "react";
import ProfileCard from "../ui/ProfileCard";
import ContentSection from "../components/ContentSection";
import AnimatedTextSection from "../components/AnimatedSection";
import { sectionsData } from "../constants/about-section-data";

const AboutUs = () => {
  return (
    <main className="container mx-auto my-4">
      <section className="py-8">
        <ContentSection
          title="About Us"
          description="Dedicated to crafting dynamic and innovative digital solutions. Specializing in custom web development, we blend cutting-edge technology with creative design to deliver websites that are not only visually stunning but also highly functional."
          alignment="center"
        />
      </section>
      <section className="mb-4">
        <AnimatedTextSection sections={sectionsData} />
      </section>
      <section className="my-8">
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
