import React from "react";
import MotionText from "../ui/MotionText";
import Link from "next/link";

interface ContentSectionProps {
  title: string;
  description?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
  button?: string;
  textColor?: string;
  headingSize?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  description,
  alignment = "center",
  className = "",
  button,
  headingSize,
  textColor,
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
          <h2
            className={`${textColor ? textColor : "text-white"} font-semibold ${
              headingSize ? headingSize : "text-3xl"
            } mb-2`}
          >
            {title}
          </h2>
        </MotionText>
        <MotionText delay={0.3}>
          <p className={`${textColor ? textColor : "text-white"} font-light`}>
            {description}
          </p>
        </MotionText>
        {button && (
          <MotionText delay={0.6}>
            <Link
              className="btn btn-sm btn-primary rounded-lg font-normal mt-4"
              href="#services"
            >
              {button}
            </Link>
          </MotionText>
        )}
      </div>
    </section>
  );
};

export default ContentSection;
