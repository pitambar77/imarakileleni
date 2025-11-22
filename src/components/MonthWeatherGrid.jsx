import React from "react";
import { IoSunny,IoRainyOutline } from "react-icons/io5";

const MonthWeatherGrid = ({ data }) => {
  return (
    <div className="w-full px-4 md:px-10 lg:px-18 2xl:px-28 pb-16">
      {/* HEADER ROW */}
      <div className="grid grid-cols-12 text-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#d87328] text-white font-semibold py-3 border-2 border-white"
          >
            {item.month}
          </div>
        ))}
      </div>

      {/* TEMPERATURE ROW */}
      <div className="grid grid-cols-12 text-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#fddac5] py-6 border-2 border-white flex flex-col items-center"
          >
            <span className="text-3xl text-[#ffa127]">
              <IoSunny />
            </span>
            <p className="font-semibold mt-2">{item.temp}</p>
          </div>
        ))}
      </div>

      {/* RAINFALL ROW */}
      <div className="grid grid-cols-12 mt-2 text-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#fddac5] py-6 border-2 border-white flex flex-col items-center"
          >
            <span className="text-3xl text-[#5698c1]"><IoRainyOutline /></span>
            <p className="font-semibold mt-2">{item.rain}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthWeatherGrid;
