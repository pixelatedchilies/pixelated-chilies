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

const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
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
        className={`flip-card bg-gradient-to-br from-[#001116] rounded-3xl ${
          isFlipped ? "flipped" : ""
        }`}
        onClick={handleClick}
      >
        <div className="flip-card-inner">
          {/* Front Side */}
          <div className="flip-card-front flex flex-col gap-4 justify-center items-center py-20 px-6 border border-slate-900/10 dark:border-slate-50/[0.06] rounded-3xl hover:border-white hover:border-[0.5px] transition duration-300">
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
          <div className="flip-card-back flex flex-col gap-4 justify-center items-center py-20 px-6 border border-slate-900/10 dark:border-slate-50/[0.06] rounded-3xl hover:border-white hover:border-[0.5px] transition duration-300">
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
              className="btn btn-sm btn-primary font-normal rounded-lg"
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
