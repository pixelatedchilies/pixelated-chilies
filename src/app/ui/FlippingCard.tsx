"use client";

import React, { useState } from "react";
import Image from "next/image";

const FlippingCart = ({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

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
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src={src}
              alt="Service icon"
              width={70}
              height={40}
              priority
            />
            <h3 className="text-lg text-white font-semibold text-center">
              {title}
            </h3>
            <Image
              src="/click-arrow.svg"
              width={50}
              height={50}
              alt="Flip card arrow icon"
            />
          </div>
          {/* Back Side */}
          <div className="flip-card-back flex flex-col gap-2 justify-center items-center py-20 px-6 border border-slate-700 rounded-3xl bg-blue-500">
            <p className="text-lg text-white font-bold text-center">
              {description}
            </p>
            <button
              className="btn btn-primary font-normal"
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
