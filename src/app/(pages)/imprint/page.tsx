import AnimatedTextSection from "@/app/components/AnimatedTextSection";
import ContentSection from "@/app/components/ContentSection";
import { imprintData } from "@/app/constants/imprint-section-data";
import React from "react";

const Imprint: React.FC = () => {
  return (
    <main className="container py-20">
      <ContentSection
        title="Imprint"
        alignment="left"
        headingSize="text-2xl md:text-3xl"
        className="mt-12 mb-4"
      />
      <AnimatedTextSection
        sections={imprintData}
        containerClassNames="flex flex-col gap-4"
        classNames="p-4"
      />
    </main>
  );
};

export default Imprint;
