import React from "react";
import MotionText from "../ui/MotionText";

interface ContentSectionProps {
  title: string;
  description?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
  button?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  description,
  alignment = "center",
  className = "",
  button,
}) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <section className={`${className}`}>
      <div className={`${alignmentClasses[alignment]}`}>
        <MotionText delay={0}>
          <h2 className="text-white font-semibold text-3xl mb-2">{title}</h2>
        </MotionText>
        <MotionText delay={0.3}>
          <p className="text-white font-light">{description}</p>
        </MotionText>
        {button && (
          <MotionText delay={0.6}>
            <a
              className="btn btn-sm btn-primary rounded-lg font-normal mt-4"
              href="#services"
            >
              {button}
            </a>
          </MotionText>
        )}
      </div>
    </section>
  );
};

export default ContentSection;
