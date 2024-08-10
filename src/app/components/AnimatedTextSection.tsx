import React from "react";
import AnimatedSection from "./AnimatedSection";

interface AnimatedTextSectionProps {
  sections: {
    title: string;
    paragraphs: string[];
  }[];
  classNames?: string;
  textColor?: string;
}

const AnimatedTextSection: React.FC<AnimatedTextSectionProps> = ({
  sections,
  classNames,
  textColor,
}) => {
  return (
    <section className={`flex flex-col md:flex-row gap-4 w-full`}>
      {sections.map((section, index) => (
        <AnimatedSection
          key={index}
          title={section.title}
          paragraphs={section.paragraphs}
          index={index}
          classNames={classNames}
          textColor={textColor}
        />
      ))}
    </section>
  );
};

export default AnimatedTextSection;
