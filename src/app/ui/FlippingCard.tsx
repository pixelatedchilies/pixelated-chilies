"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, Variants, useInView } from "framer-motion";

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

// Define the animation variants for fade-in-up effect
const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      type: "spring",
      stiffness: 150,
      damping: 15,
    },
  },
};

const FlippingCard: React.FC<FlippingCardProps> = ({
  src,
  title,
  description,
  tools,
  toolsImageProps,
}) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  return (
    <motion.div
      ref={ref}
      className="relative perspective"
      variants={fadeInUpVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
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
                width={toolsImageProps.width}
                height={toolsImageProps.height}
                alt="Tools icon"
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
    </motion.div>
  );
};

export default FlippingCard;
