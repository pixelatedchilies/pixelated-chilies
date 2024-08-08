"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface AnimatedTextSectionProps {
  sections: {
    title: string;
    paragraphs: string[];
  }[];
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const AnimatedTextSection: React.FC<AnimatedTextSectionProps> = ({
  sections,
}) => {
  return (
    <section className="flex flex-col md:flex-row gap-4 w-full">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className="p-4 md:p-8 w-full md:w-1/2 rounded-lg shadow-xl border border-slate-900/10 dark:border-slate-50/[0.06]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          variants={sectionVariants}
          transition={{ duration: 0.4, delay: index * 0.6 }}
        >
          <motion.div
            className="flex flex-col"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-2xl text-white font-normal mb-2"
              variants={headerVariants}
              transition={{ duration: 0.4 }}
            >
              {section.title}
            </motion.h1>
            <div className="flex flex-col">
              {section.paragraphs.map((paragraph, pIndex) => (
                <motion.p
                  key={pIndex}
                  className="text-base mb-2"
                  variants={paragraphVariants}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
};

export default AnimatedTextSection;
