"use client";

import { motion, Variants } from "framer-motion";

const textVariants: Variants = {
  visible: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
  hidden: { opacity: 0, transition: { duration: 0.4 } },
};

const MotionText = ({ children }: { children: React.ReactElement }) => {
  return (
    <motion.div variants={textVariants} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
};

export default MotionText;
