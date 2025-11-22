import React from "react";

const PositionsSection = ({ title, subtitle, positions }) => {
  return (
    <section className="py-16 bg-white px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl capitalize font-bold text-[#111]">{title}</h2>
        <p className="text-gray-700 text-[16px] mt-2">{subtitle}</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {positions.map((item, index) => (
          <div
            key={index}
            className="bg-[#f6d1b8] rounded-md py-12 text-center shadow-sm border border-[#f2c6a5]"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#111]">
              {item.position}
            </h3>

            <p className="text-gray-700 mb-4">{item.location}</p>

            <button className="text-[#111] font-semibold underline hover:text-black transition">
              {item.linkText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PositionsSection;
