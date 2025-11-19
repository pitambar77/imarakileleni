import React from "react";
import { FaMapMarkedAlt, FaUserFriends, FaBookOpen } from "react-icons/fa";

const OnTheRoadSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 text-center">
      {/* Title Banner */}
      <div className="flex justify-center mb-12  ">
        <div className=" w-56">
         <img src="https://www.contiki.com/media/1qjdgbvo/on-the-road.svg?width=280&height=82&mode=max" alt="" />

        </div>
      </div>
     

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4  items-center">
        {/* === 1. Trip Manager & Driver === */}
        <div className="flex flex-col items-center text-center px-8 ">
          <FaMapMarkedAlt size={80} className="text-[#42a7ff] mb-4" />
          <h3 className="text-[20px] md:text-3xl font-extrabold text-[#222] mb-4">
            Trip Manager & Driver
          </h3>
          <p className="text-[15px] md:text-[16px] text-[#333] leading-relaxed">
            Your Trip Manager brings the group together with all the info, fun
            facts and food recos you’ll ever need. Your Driver gets you from A
            to B and takes the stress out of travelling. Together, these guys
            don’t just bring the vibes, they bring your destination to life.
          </p>
        </div>

        <div>
          <img
            src="https://www.wildernessdestinations.com/media/zsmnvlxd/wilderness-careers-values-respectful.jpg?rmode=crop&width=1280&height=853"
            alt="Trip Manager and Driver"
            className="rounded-md shadow-md w-full object-cover h-[400px]"
          />
        </div>

        {/* === 2. Local Guides === */}
        <div>
          <img
            src="https://static.wixstatic.com/media/2904cb_bef0a582cb094a97989c3c0ea292f835~mv2.jpg/v1/fill/w_1920,h_1280,al_c,q_90/53132030573_b11f84a2c7_k.jpg"
            alt="Local Guides"
            className="rounded-md shadow-md w-full object-cover h-[400px]"
          />
        </div>

        <div className="flex flex-col items-center text-center px-8 ">
          <div className="text-[#ff7c2a] text-4xl mb-4">
            <FaUserFriends size={80} />
          </div>
          <h3 className="text-[20px] md:text-3xl font-extrabold text-[#222] mb-4">
            Local Guides
          </h3>
          <p className="text-[15px] md:text-[16px] text-[#333] leading-relaxed">
            With their unique expertise, these guys will give you a local
            perspective on faraway lands.With their unique expertise, 
          </p>
        </div>

        {/* === 3. On-site Crew === */}
        <div className="flex flex-col items-center text-center px-8 ">
          <div className="text-[#e63946] text-4xl mb-4">
            <FaBookOpen size={80} />
          </div>
          <h3 className="text-[20px] md:text-3xl font-extrabold text-[#222] mb-4">
            On-site Crew
          </h3>
          <p className="text-[15px] md:text-[16px] text-[#333] leading-relaxed">
            Chefs, servers and hosts, helping you feel right at home in our
            exclusive properties helping you feel right.
          </p>
        </div>

        <div>
          <img
            src="https://masai-mara.in/wp-content/uploads/2024/11/image2-11.webp"
            alt="On-site Crew"
            className="rounded-md shadow-md w-full object-cover h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default OnTheRoadSection;
