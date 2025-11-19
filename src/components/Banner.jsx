import React from "react";

const Banner = ({ image, title, buttonText, onButtonClick }) => {
  return (
    <section
      className="relative w-full h-[64vh] bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

     
      <div className="relative text-center z-10">
        <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-6 tracking-wide drop-shadow-lg">
          {title}
        </h2>

        <button
          onClick={onButtonClick}
          className="bg-[#d87028] hover:bg-orange-700 text-white font-semibold px-8 py-3 md:px-10 md:py-4 rounded-full shadow-lg text-lg transition-all duration-300"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default Banner;
