import React from "react";
import ContentSection from "@/app/components/ContentSection";
import AnimatedTextSection from "@/app/components/AnimatedTextSection";
import {
  privacyPolicy,
  heyFlowSnippetDataPrivacy,
} from "@/app/constants/privacy-policy-data";

const dataSections = [privacyPolicy, heyFlowSnippetDataPrivacy];

const PrivacyPolicy = () => {
  return (
    <main className="container py-20">
      <ContentSection
        title="Privacy Policy"
        alignment="left"
        headingSize="text-2xl md:text-3xl"
        className="mt-12 mb-4"
      />
      <section className="flex flex-col gap-4">
        {dataSections.map((sections, index) => (
          <AnimatedTextSection
            key={index}
            sections={sections}
            classNames="p-4"
          />
        ))}
      </section>
    </main>
  );
};

export default PrivacyPolicy;
