


// import React from "react";

// const SafariFeatureSection = () => {
//   const sections = [
//     {
//       id: 1,
//       image:
//         "https://bookaweb.s3.eu-central-1.amazonaws.com/assets/6374a44250b1e.jpg",
//       title: "The secret to spectacular safari",
//       subtitle: "Behind the scenes",
//       text: "Our skilled team at Antarctica21 brings together experts in polar travel and hospitality to create safe, enriching, and sustainable Antarctic adventures.",
//       button: "See Team Directory",
//       reverse: false,
//     },
//     {
//       id: 2,
//       image: "https://masai-mara.in/wp-content/uploads/2024/11/image2-11.webp",
//       title: "Our Safari Fleet",
//       subtitle: "Explorers House",
//       text: "Explorers House is Antarctica21’s new expedition center in Punta Arenas, Chile. It is more than a starting point for expeditions; it’s a gateway to the Antarctic experience.",
//       button: "See Explorers House",
//       reverse: true,
//       largeImage: true, // ✅ Mark this one as large
//     },
//     {
//       id: 3,
//       image:
//         "https://www.tanzania-experience.com/wp-content/uploads/2017/07/Looking-for-new-routes-featured.jpg",
//       title: "Sustainable Exploration",
//       subtitle: "Journey with purpose",
//       text: "Join us in our mission to experience Antarctica’s wonders while preserving them for future generations.",
//       button: "Learn More",
//       reverse: false,
//     },
//   ];

//   return (
//     <section className="bg-white py-20 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28">
//       <div className="space-y-8 ">
//         {sections.map((section) => (
//           <div
//             key={section.id}
//             className={`flex flex-col md:flex-row ${
//               section.reverse ? "" : " md:flex-row-reverse"
//             } bg-[#fde6d5] rounded-lg overflow-hidden shadow-sm`}
//           >
//             {/* Text Content (60%) */}
//             <div className="w-full md:w-[60%] flex flex-col justify-center px-12 py-10 text-left">
//               <div className="w-[70%] ">
//                 <p className="text-sm text-gray-600 mb-2">{section.subtitle}</p>
//                 <h3 className="text-[26px] font-semibold text-[#222] mb-4 leading-snug">
//                   {section.title}
//                 </h3>
//                 <p className="text-[16px] text-[#333] leading-relaxed mb-6">
//                   {section.text}
//                 </p>
//                 <button className="bg-[#d87028] hover:bg-[#c35f22] text-white font-semibold px-6 py-3 rounded-md transition w-fit">
//                   {section.button}
//                 </button>
//               </div>
//             </div>

//             {/* Image (40% normally, larger for 2nd section) */}
//             <div
//               className={`w-full ${
//                 section.largeImage ? "md:w-[70%]" : "md:w-[50%]"
//               } p-4`}
//             >
//               <img
//                 src={section.image}
//                 alt={section.title}
//                 className={`w-full ${
//                   section.largeImage
//                     ? "w-[350px] md:h-[450px]" // ✅ Larger height for 2nd
//                     : "h-[320px] md:h-[380px]"
//                 } rounded object-cover`}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default SafariFeatureSection;


import React from "react";

const SafariIntroSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 space-y-8">
      <div className=" bg-[#fde6d5] rounded-md overflow-hidden shadow-sm flex flex-col md:flex-row items-center p-4">
        
        {/* Left Image */}
        <div className="w-full md:w-2/5">
          <img
            src="https://bookaweb.s3.eu-central-1.amazonaws.com/assets/6374a44250b1e.jpg"
            alt="Safari Team"
            className=" w-full h-[320px] md:h-[420px] object-cover rounded-lg"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 px-8 md:px-12 py-10 text-left">
          <p className="text-sm text-gray-700 mb-2">Behind the scenes</p>
          <h3 className="text-[32px] md:text-[36px] font-semibold text-[#222] leading-snug mb-4">
            The secret to <br/> spectacular safari
          </h3>
          <p className="text-[17px] text-[#333] leading-relaxed mb-8 ">
            Our skilled team at Antarctica21 brings together experts in polar
            travel and hospitality to create safe, enriching, and sustainable
            Antarctic adventures.
          </p>
          <button className="bg-[#d87028] hover:bg-[#c35f22] text-white font-semibold px-8 py-3 rounded-md transition">
            See Team Directory
          </button>
        </div>
      </div>

       <div className=" bg-[#fde6d5] rounded-md overflow-hidden shadow-sm flex flex-col md:flex-row items-center p-4">
        
        

        {/* Right Content */}
        <div className="w-full md:w-1/2 px-8 md:px-12 py-10 text-left">
          <p className="text-sm text-gray-700 mb-2">Behind the scenes</p>
          <h3 className="text-[32px] md:text-[36px] font-semibold text-[#222] leading-snug mb-4">
            Our Safari Fleet
          </h3>
          <p className="text-[17px] text-[#333] leading-relaxed mb-8 ">
           Explorers House is Antarctica21’s new expedition center in Punta Arenas, Chile. It is more than a starting point for expeditions; it’s a gateway to the Antarctic experience.
          </p>
          <button className="bg-[#d87028] hover:bg-[#c35f22] text-white font-semibold px-8 py-3 rounded-md transition">
            See Team Directory
          </button>
        </div>
        {/* Left Image */}
        <div className="w-full md:w-3/5">
          <img
            src="https://bookaweb.s3.eu-central-1.amazonaws.com/assets/6374a44250b1e.jpg"
            alt="Safari Team"
            className=" w-full h-[320px] md:h-[460px] object-cover rounded-lg"
          />
        </div>
      </div>
         <div className=" bg-[#fde6d5] rounded-md overflow-hidden shadow-sm flex flex-col md:flex-row items-center p-4">
        
        {/* Left Image */}
        <div className="w-full md:w-2/5">
          <img
            src="https://bookaweb.s3.eu-central-1.amazonaws.com/assets/6374a44250b1e.jpg"
            alt="Safari Team"
            className=" w-full h-[320px] md:h-[420px] object-cover rounded-lg"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 px-8 md:px-12 py-10 text-left">
          <p className="text-sm text-gray-700 mb-2">Behind the scenes</p>
          <h3 className="text-[32px] md:text-[36px] font-semibold text-[#222] leading-snug mb-4">
            Sustainable Exploration
          </h3>
          <p className="text-[17px] text-[#333] leading-relaxed mb-8 ">
            Join us in our mission to experience Antarctica’s wonders while preserving them for future generations.
          </p>
          <button className="bg-[#d87028] hover:bg-[#c35f22] text-white font-semibold px-8 py-3 rounded-md transition">
            See Team Directory
          </button>
        </div>
      </div>
    </section>
  );
};

export default SafariIntroSection;
