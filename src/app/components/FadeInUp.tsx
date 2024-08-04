"use client";

import { useEffect, useRef, useState } from "react";

interface FadeInUpProps {
  children: React.ReactNode;
  className?: string;
}

const FadeInUp: React.FC<FadeInUpProps> = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isInView) {
          setIsVisible(true);
          window.removeEventListener("scroll", handleScroll); // Remove listener after visibility is detected
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${className} ${isVisible ? "fade-in-up" : ""}`}
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {children}
    </div>
  );
};

export default FadeInUp;
