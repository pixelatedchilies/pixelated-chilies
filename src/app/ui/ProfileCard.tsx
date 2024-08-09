"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, Variants, useInView } from "framer-motion";
import { TeamMember } from "../constants/team-members";

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

const ProfileCard: React.FC<TeamMember> = ({ src, name, description }) => {
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
      <div className="card bg-gradient-to-tr from-[#000000] via-[#001116] to-[#000000] shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-out">
        <figure className="overflow-hidden">
          <Image
            src={src}
            alt={`${name} profile image`}
            width={320}
            height={384}
            className="w-full h-96 object-cover object-top"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
