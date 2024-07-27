import React from "react";
import ProfileCard from "../ui/ProfileCard";

const AboutUs = () => {
  return (
    <main className="container mx-auto my-4 px-4">
      <h2 className="text-white font-semibold text-2xl md:text-3xl my-8 text-center">
        Meet the visionary team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
      </div>
    </main>
  );
};

export default AboutUs;
