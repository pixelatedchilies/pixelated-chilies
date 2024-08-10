"use client";

import React from "react";
import { motion, Variants, useInView } from "framer-motion";

interface AnimatedSectionProps {
  title: string;
  paragraphs: string[];
  index: number;
  classNames?: string;
  textColor?: string;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  title,
  paragraphs,
  index,
  classNames,
  textColor,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });

  return (
    <motion.div
      ref={ref}
      className={`w-full md:w-1/2 rounded-xl border border-slate-900/10 dark:border-slate-50/[0.06] ${classNames}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
      transition={{ duration: 0.6, delay: index * 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
    >
      <motion.div
        className="flex flex-col"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h1
          className={`text-xl md:text-2xl ${
            textColor ? textColor : "text-white"
          } font-semibold mb-2`}
          variants={headerVariants}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
        <div className="flex flex-col">
          {paragraphs.map((paragraph, pIndex) => (
            <motion.p
              key={pIndex}
              className={`${textColor ? textColor : ""} text-base mb-2`}
              variants={paragraphVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedSection;
