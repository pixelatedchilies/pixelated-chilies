import React from "react";
import MotionText from "../ui/MotionText";
import Link from "next/link";

const QuoteSection = () => {
  return (
    <div className="relative bg-[url('https://pixelatedchilies.com/wp-content/uploads/2024/07/Screenshot-2024-07-02-at-10.43.38-AM-scaled.webp')] bg-cover bg-center md:bg-top h-72 md:h-96 w-full flex flex-col justify-center items-center">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex flex-col justify-center items-center">
        <MotionText delay={0}>
          <h2 className="text-white font-semibold text-2xl md:text-3xl mb-4 text-center">
            Ready to take your business to the next level?
          </h2>
        </MotionText>
        <MotionText delay={0.3}>
          <Link
            href="https://help.pixelatedchilies.com"
            className="btn btn-primary btn-sm font-normal rounded-lg"
          >
            Get your quote
          </Link>
        </MotionText>
      </div>
    </div>
  );
};

export default QuoteSection;
