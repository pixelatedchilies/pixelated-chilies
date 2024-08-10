"use client";

import { motion, Variants, useAnimation, useInView } from "framer-motion";
import React, { useRef, useEffect } from "react";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const timelineVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.2,
    },
  }),
};

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <ul className="timeline timeline-vertical">
      {items.map((item, index) => (
        <TimelineItemComponent key={index} index={index} item={item} />
      ))}
    </ul>
  );
};

interface TimelineItemComponentProps {
  index: number;
  item: TimelineItem;
}

const TimelineItemComponent: React.FC<TimelineItemComponentProps> = ({
  index,
  item,
}) => {
  const ref = useRef<HTMLLIElement>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.li
      ref={ref}
      initial="hidden"
      animate={controls}
      custom={index}
      variants={timelineVariants}
    >
      {index % 2 === 0 ? (
        <>
          <div className="timeline-start timeline-box rounded-xl bg-gradient-to-tr from-[#000000] via-[#001116] to-[#000000]">
            <h3 className="text-base font-semibold text-white">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </div>
          <hr />
        </>
      ) : (
        <>
          <hr />
          <div className="timeline-end timeline-box rounded-xl bg-gradient-to-tl from-[#000000] via-[#001116] to-[#000000]">
            <h3 className="text-base font-semibold text-white">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </div>
          <hr />
        </>
      )}
    </motion.li>
  );
};

export default Timeline;
