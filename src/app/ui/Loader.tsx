"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const iconVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

const transitionSettings = {
  default: { duration: 2, ease: "easeInOut" },
  fill: { duration: 2, ease: [1, 0, 0.8, 1] },
};

const Loader = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const loaderShown = localStorage.getItem("loaderShown");

    if (!loaderShown) {
      setShowLoader(true);

      const timer = setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setShowLoader(false);
          localStorage.setItem("loaderShown", "true");
        }, 1000);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!showLoader) return null;

  return (
    <motion.div
      className="fullscreen-loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.svg
        width="100"
        height="150"
        viewBox="0 0 211 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="item"
      >
        <motion.path
          d="M0 46.7759L47.3518 0L96.6765 48.7248L49.3248 95.5006L0 46.7759Z"
          fill="#DADADA"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={transitionSettings}
        />
        <motion.path
          d="M1.97266 142.276L49.3245 95.4994L98.6492 144.224L51.2974 191L1.97266 142.276Z"
          fill="#00CEDB"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={transitionSettings}
        />
        <motion.path
          d="M49.3248 95.5006L96.6765 48.7248L146 97.4485L98.6492 144.224L49.3248 95.5006Z"
          fill="#4e84b4"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={transitionSettings}
        />
        <motion.path
          d="M211 253.224L163.648 300L114.323 251.275L161.675 204.499L211 253.224Z"
          fill="#DADADA"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={transitionSettings}
        />
        <motion.path
          d="M209.027 157.724L161.676 204.501L112.351 155.776L159.703 109L209.027 157.724Z"
          fill="#00CEDB"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={transitionSettings}
        />
        <motion.path
          d="M161.675 204.499L114.323 251.275L65 202.551L112.351 155.776L161.675 204.499Z"
          fill="#4e84b4"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={transitionSettings}
        />
      </motion.svg>
    </motion.div>
  );
};

export default Loader;
