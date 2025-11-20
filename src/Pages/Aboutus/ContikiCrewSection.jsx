import React from "react";

const ContikiCrewSection = () => {
  return (
    <section className="bg-[#d76e28] py-16 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 text-white">
      <div className=" flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://cheetahsafaris.com/wp-content/uploads/2022/10/best-time-to-visit-tanzania-for-safari-tourist-guide-cheetah-safaris-2.jpg" // replace with your image
            alt="Contiki Crew"
            className="rounded-md w-full h-[400px] object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center px-16  text-black">
          <h2 className="text-[24px] md:text-[28px] font-extrabold mb-4">
            And best of all... your Contiki crew
          </h2>
          <p className="text-[17px] leading-relaxed font-medium text-[#111] ">
            Join solo or with friends. Either way, you’ll travel with{" "}
            <span className="font-bold">awesome 18–35s from around the world</span> – 
            and you might just make a few friends for life.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ContikiCrewSection;
