// import React from "react";
// import { FaMapMarkedAlt, FaUserFriends, FaBookOpen } from "react-icons/fa";

// const OnTheRoadSection = () => {
//   return (
//     <section className="bg-white py-16 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 text-center">
//       {/* Title Banner */}
//       <div className="flex justify-center mb-12  ">
//         <div className=" w-56">
//          <img src="https://www.contiki.com/media/1qjdgbvo/on-the-road.svg?width=280&height=82&mode=max" alt="" />

//         </div>
//       </div>
     

//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4  items-center ">
//         {/* === 1. Trip Manager & Driver === */}
//         <div className=" order-1 flex flex-col items-center text-center px-8 ">
//           <FaMapMarkedAlt size={80} className="text-[#42a7ff] mb-4" />
//           <h3 className="text-[20px] md:text-3xl font-extrabold text-[#222] mb-4">
//             Trip Manager & Driver
//           </h3>
//           <p className="text-[15px] md:text-[16px] text-[#333] leading-relaxed">
//             Your Trip Manager brings the group together with all the info, fun
//             facts and food recos you’ll ever need. Your Driver gets you from A
//             to B and takes the stress out of travelling. Together, these guys
//             don’t just bring the vibes, they bring your destination to life.
//           </p>
//         </div>

//         <div className=" order-2">
//           <img
//             src="https://www.wildernessdestinations.com/media/zsmnvlxd/wilderness-careers-values-respectful.jpg?rmode=crop&width=1280&height=853"
//             alt="Trip Manager and Driver"
//             className="rounded-md shadow-md w-full object-cover h-[400px]"
//           />
//         </div>

//         {/* === 2. Local Guides === */}
//         <div className=" order-4 md:order-3 ">
//           <img
//             src="https://static.wixstatic.com/media/2904cb_bef0a582cb094a97989c3c0ea292f835~mv2.jpg/v1/fill/w_1920,h_1280,al_c,q_90/53132030573_b11f84a2c7_k.jpg"
//             alt="Local Guides"
//             className="rounded-md shadow-md w-full object-cover h-[400px]"
//           />
//         </div>

//         <div className="flex flex-col items-center text-center px-8 order-3 md:order-4  ">
//           <div className="text-[#ff7c2a] text-4xl mb-4">
//             <FaUserFriends size={80} />
//           </div>
//           <h3 className="text-[20px] md:text-3xl font-extrabold text-[#222] mb-4">
//             Local Guides
//           </h3>
//           <p className="text-[15px] md:text-[16px] text-[#333] leading-relaxed">
//             With their unique expertise, these guys will give you a local
//             perspective on faraway lands.With their unique expertise, 
//           </p>
//         </div>

//         {/* === 3. On-site Crew === */}
//         <div className="flex flex-col items-center text-center px-8 order-5 ">
//           <div className="text-[#e63946] text-4xl mb-4">
//             <FaBookOpen size={80} />
//           </div>
//           <h3 className="text-[20px] md:text-3xl font-extrabold text-[#222] mb-4">
//             On-site Crew
//           </h3>
//           <p className="text-[15px] md:text-[16px] text-[#333] leading-relaxed">
//             Chefs, servers and hosts, helping you feel right at home in our
//             exclusive properties helping you feel right.
//           </p>
//         </div>

//         <div className=" order-6">
//           <img
//             src="https://masai-mara.in/wp-content/uploads/2024/11/image2-11.webp"
//             alt="On-site Crew"
//             className="rounded-md shadow-md w-full object-cover h-[400px]"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OnTheRoadSection;




// import React from "react";
// import { FaMapMarkedAlt, FaUserFriends, FaBookOpen } from "react-icons/fa";

// const OnTheRoadSection = () => {
//   return (
//     <section className="bg-white py-16 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 text-center">
      
//       {/* Title Banner */}
//       <div className="flex justify-center mb-12">
//         <div className="w-56">
//           <img
//             src="https://www.contiki.com/media/1qjdgbvo/on-the-road.svg?width=280&height=82&mode=max"
//             alt=""
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 items-center">

//         {/* === 1. Trip Manager & Driver === */}
//         <div className="order-1 flex flex-col items-center text-center px-4 md:px-8">
//           <FaMapMarkedAlt size={80} className="text-[#42a7ff] mb-4" />
//           <h3 className="text-[20px] md:text-3xl font-extrabold text-[#222] mb-4">
//             Trip Manager & Driver
//           </h3>
//           <p className="text-[15px] md:text-[16px] text-[#333] leading-relaxed">
//             Your Trip Manager brings the group together with info, fun facts,
//             and recommendations to enhance your journey.
//           </p>
//         </div>

//         <div className="order-2">
//           <img
//             src="https://www.wildernessdestinations.com/media/zsmnvlxd/wilderness-careers-values-respectful.jpg?rmode=crop&width=1280&height=853"
//             alt="Trip Manager and Driver"
//             className="rounded-md shadow-md w-full object-cover h-auto md:h-[400px]"
//           />
//         </div>

//         {/* === 2. Local Guides (REVERSED ON DESKTOP) === */}
//         <div className="order-4 md:order-3">
//           <img
//             src="https://static.wixstatic.com/media/2904cb_bef0a582cb094a97989c3c0ea292f835~mv2.jpg/v1/fill/w_1920,h_1280,al_c,q_90/53132030573_b11f84a2c7_k.jpg"
//             alt="Local Guides"
//             className="rounded-md shadow-md w-full object-cover h-auto md:h-[400px]"
//           />
//         </div>

//         <div className="order-3 md:order-4 flex flex-col items-center text-center px-4 md:px-8">
//           <FaUserFriends size={80} className="text-[#ff7c2a] mb-4" />
//           <h3 className="text-[20px] md:text-3xl font-extrabold text-[#222] mb-4">
//             Local Guides
//           </h3>
//           <p className="text-[15px] md:text-[16px] text-[#333] leading-relaxed">
//             Their unique expertise brings the destination to life and gives you
//             a real local perspective.
//           </p>
//         </div>

//         {/* === 3. On-site Crew === */}
//         <div className="order-5 flex flex-col items-center text-center px-4 md:px-8">
//           <FaBookOpen size={80} className="text-[#e63946] mb-4" />
//           <h3 className="text-[20px] md:text-3xl font-extrabold text-[#222] mb-4">
//             On-site Crew
//           </h3>
//           <p className="text-[15px] md:text-[16px] text-[#333] leading-relaxed">
//             Chefs, servers and hosts ensure comfort and warm hospitality at every stay.
//           </p>
//         </div>

//         <div className="order-6">
//           <img
//             src="https://masai-mara.in/wp-content/uploads/2024/11/image2-11.webp"
//             alt="On-site Crew"
//             className="rounded-md shadow-md w-full object-cover h-auto md:h-[400px]"
//           />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default OnTheRoadSection;


import React from "react";
import { FaMapMarkedAlt, FaUserFriends, FaBookOpen } from "react-icons/fa";

const iconMap = [FaMapMarkedAlt, FaUserFriends, FaBookOpen];

const OnTheRoadSection = ({ adventure = [] }) => {
  if (!adventure.length || !adventure[0]?.team?.length) return null;

  const section = adventure[0];

  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-16 2xl:px-28">
      
      {/* Title Banner */}
      <div className="flex justify-center mb-16">
        <img
          src="https://www.contiki.com/media/1qjdgbvo/on-the-road.svg?width=280&height=82&mode=max"
          alt="On the Road"
          className="w-56"
        />
      </div>

      <div className="space-y-20">
        {section.team.map((item, index) => {
          const Icon = iconMap[index % iconMap.length];
          const isEven = index % 2 === 0;

          return (
            <div
              key={item._id || index}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            >
              {/* LEFT COLUMN */}
              {isEven ? (
                <>
                  {/* TEXT */}
                  <div className="flex flex-col items-center text-center px-4">
                    <Icon size={80} className="text-[#d76e28] mb-4" />
                    <h3 className="text-xl md:text-3xl font-extrabold text-[#222] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-[15px] md:text-[16px] text-[#333] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-md shadow-md w-full object-cover h-[260px] md:h-[420px]"
                  />
                </>
              ) : (
                <>
                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-md shadow-md w-full object-cover h-[260px] md:h-[420px]"
                  />

                  {/* TEXT */}
                  <div className="flex flex-col items-center text-center px-4">
                    <Icon size={80} className="text-[#d76e28] mb-4" />
                    <h3 className="text-xl md:text-3xl font-extrabold text-[#222] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-[15px] md:text-[16px] text-[#333] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OnTheRoadSection;


