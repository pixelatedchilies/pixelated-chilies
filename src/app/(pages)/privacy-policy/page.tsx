import React from "react";
import ContentSection from "@/app/components/ContentSection";
import AnimatedTextSection from "@/app/components/AnimatedTextSection";

const PrivacyPolicy = () => {
  return (
    <main className="container py-20">
      <ContentSection
        title="Privacy Policy"
        alignment="left"
        headingSize="text-2xl md:text-3xl"
        className="mt-12 mb-4"
      />
    </main>
  );
};

export default PrivacyPolicy;
