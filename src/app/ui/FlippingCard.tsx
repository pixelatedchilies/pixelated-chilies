"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FlippingCardProps {
  src: string;
  title: string;
  description: string;
  tools: string;
  toolsImageProps?: {
    width: number;
    height: number;
  };
}

const FlippingCart: React.FC<FlippingCardProps> = ({
  src,
  title,
  description,
  tools,
  toolsImageProps,
}) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  return (
    <div className="relative perspective">
      <div
        className={`flip-card ${isFlipped ? "flipped" : ""}`}
        onClick={handleClick}
      >
        <div className="flip-card-inner">
          {/* Front Side */}
          <div className="flip-card-front flex flex-col gap-4 justify-center items-center py-20 px-6 border border-slate-700 rounded-3xl hover:bg-base-200 transition duration-300">
            <Image
              className="relative"
              src={src}
              alt="Service icon"
              width={70}
              height={70}
              priority
            />
            <h2 className="text-lg text-white font-normal text-center">
              {title}
            </h2>
            <Image
              src="/click-arrow.svg"
              width={50}
              height={27}
              alt="Flip card arrow icon"
            />
          </div>
          {/* Back Side */}
          <div className="flip-card-back flex flex-col gap-4 justify-center items-center py-20 px-6 border border-slate-700 rounded-3xl bg-blue-500">
            <h2 className="text-lg text-white font-normal text-center">
              {description}
            </h2>
            {toolsImageProps && (
              <Image
                src={tools}
                width={toolsImageProps?.width || 200}
                height={toolsImageProps?.height || 31}
                alt="Flip card arrow icon"
              />
            )}
            <button
              className="btn btn-sm btn-primary font-normal"
              onClick={handleButtonClick}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippingCart;
