import React from "react";
import MotionText from "../ui/MotionText";

interface ContentSectionProps {
  title: string;
  description?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  description,
  alignment = "center",
  className = "",
}) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <section className={`container ${className}`}>
      <div className={`${alignmentClasses[alignment]}`}>
        <MotionText delay={0}>
          <h2 className="text-white font-semibold text-2xl md:text-3xl">
            {title}
          </h2>
        </MotionText>
        <MotionText delay={0.3}>
          <p className="text-white">{description}</p>
        </MotionText>
      </div>
    </section>
  );
};

export default ContentSection;
