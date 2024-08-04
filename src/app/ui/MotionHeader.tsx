"use client";

import { motion, Variants } from "framer-motion";

const textVariants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  hidden: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const MotionHeader = ({ children }: { children: React.ReactElement }) => {
  return (
    <motion.div variants={textVariants} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
};

export default MotionHeader;
