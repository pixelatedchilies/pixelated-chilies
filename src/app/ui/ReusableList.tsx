"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export interface ListItem {
  text: string;
}

export interface ReusableListProps {
  items: ListItem[];
}

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const ReusableList: React.FC<ReusableListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <motion.li
          key={index}
          className="flex items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.3, delay: index * 0.2 },
            },
          }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#00aa6e"
            className="h-5 w-5 mr-2"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </motion.svg>
          <motion.p
            className="p-[2px]"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
          >
            {item.text}
          </motion.p>
        </motion.li>
      ))}
    </ul>
  );
};

export default ReusableList;
