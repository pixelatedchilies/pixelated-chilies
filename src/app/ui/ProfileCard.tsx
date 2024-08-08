"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, Variants, useInView } from "framer-motion";

interface ProfileCardProps {
  src: string;
  title: string;
  description: string;
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

const ProfileCard: React.FC<ProfileCardProps> = ({
  src,
  title,
  description,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });

  return (
    <motion.div
      ref={ref}
      className="relative perspective border border-slate-900/10 dark:border-slate-50/[0.06] rounded-xl"
      variants={fadeInUpVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="card bg-base-100 w-full shadow-2xl rounded-lg">
        <figure className="overflow-hidden">
          <Image
            src={src}
            alt={title}
            width={320}
            height={384}
            className="w-full h-96 object-cover object-top"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
