import React from "react";
import Image from "next/image";
import ReusableList, { ListItem } from "../ui/ReusableList";

interface HeroSectionProps {
  listItems: ListItem[];
  reverseContent?: boolean;
  imageUrl: string;
  title: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  listItems,
  reverseContent,
  imageUrl,
  title,
}) => (
  <div className="hero py-4">
    <div
      className={`hero-content flex flex-col ${
        reverseContent ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <Image
        src={imageUrl}
        className="w-full md:w-1/2 rounded-lg shadow-2xl object-cover"
        alt={title}
        width={650}
        height={350}
      />
      <div className="w-full p-0 md:p-8">
        <h2 className="text-white font-semibold text-2xl md:text-3xl mb-2">
          {title}
        </h2>
        <ReusableList items={listItems} />
      </div>
    </div>
  </div>
);

export default HeroSection;
