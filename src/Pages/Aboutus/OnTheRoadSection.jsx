import React from "react";
import { FaMapMarkedAlt, FaUserFriends, FaBookOpen } from "react-icons/fa";
import imaraour from '../../assets/imarasafari-2.png'

const iconMap = [FaMapMarkedAlt, FaUserFriends, FaBookOpen];

const OnTheRoadSection = ({ adventure = [] }) => {
  if (!adventure.length || !adventure[0]?.team?.length) return null;

  const section = adventure[0];

  return (
   
    <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-10 lg:px-16 2xl:px-28">

  {/* Title Banner */}
  <div className="flex justify-center mb-10 sm:mb-16">
    <img
      src={imaraour}
      alt="On the Road"
      className="w-40 sm:w-48 md:w-56"
    />
  </div>

  <div className="space-y-14 sm:space-y-20">
    {section.team.map((item, index) => {
      const Icon = iconMap[index % iconMap.length];
      const isEven = index % 2 === 0;

      return (
        <div
          key={item._id || index}
          className="
            grid grid-cols-1 md:grid-cols-2
            gap-6 sm:gap-8 md:gap-10
            items-center
          "
        >
          {/* IMAGE (Mobile first) */}
          <div
            className={`
              order-1
              ${isEven ? "md:order-2" : "md:order-1"}
            `}
          >
            <img
              src={item.image}
              alt={item.title}
              className="
                rounded-md shadow-md w-full object-cover
                h-[220px] sm:h-[280px] md:h-[420px]
              "
            />
          </div>

          {/* TEXT */}
          <div
            className={`
              flex flex-col items-center text-center px-2 sm:px-4
              order-2
              ${isEven ? "md:order-1" : "md:order-2"}
            `}
          >
            <Icon
              size={48}
              className="text-[#d76e28] mb-3 sm:mb-4 sm:scale-110"
            />

            <h3 className="text-lg sm:text-xl md:text-3xl font-extrabold text-[#222] mb-3 sm:mb-4">
              {item.title}
            </h3>

            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#333] leading-relaxed max-w-xl">
              {item.description}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</section>

  );
};

export default OnTheRoadSection;


