import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ image, title, buttonText, onButtonClick }) => {
  return (
    <section
      className="relative w-full h-[350px] md:h-[450px] bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

     
      <div className="relative text-center z-10">
        <h2 className="text-2xl md:text-5xl font-extrabold text-white mb-6 tracking-wide drop-shadow-lg">
          {title}
        </h2>

        <Link to={onButtonClick}
          
          className="bg-[#d87028] hover:bg-orange-700 cursor-pointer text-sm md:[text-17px] text-white font-semibold px-6 py-2 md:py-3 rounded-full shadow-lg  transition-all duration-300"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default Banner;
