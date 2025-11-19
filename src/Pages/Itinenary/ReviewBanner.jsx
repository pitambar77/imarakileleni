import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ReviewBanner = () => {
  return (
    <section className="bg-[#fee3cc] py-6 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between text-[#111]">
        {/* Left - Rating & Stars */}
        <div className="flex text-center items-center space-x-8">
          <h2 className="text-[48px] md:text-[64px] font-extrabold leading-none">
            4.9
          </h2>

          <div className="flex items-center text-[#111]">
            <FaStar className="text-[#111]" />
            <FaStar className="text-[#111]" />
            <FaStar className="text-[#111]" />
            <FaStar className="text-[#111]" />
            <FaStarHalfAlt className="text-[#111]" />
          </div>

          <p className="text-[16px] font-semibold text-[#222]">
            Based on 309 Independent Reviews
          </p>
        </div>

        {/* Right - Read Reviews Link */}
        <div className="mt-4 md:mt-0">
          <a
            href="#"
            className="text-[16px] font-semibold underline text-[#222] hover:text-[#d87028] transition"
          >
            Read reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewBanner;
