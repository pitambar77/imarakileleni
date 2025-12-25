// import React from "react";

// const AdventureTour = ({ title, sections }) => {
//   return (
//     <section id="adventure" className="text-[#111] py-16 px-6 md:px-10 lg:px-16 xl:px-18 2xl:px-28">
      
          
//       {title && title.trim() !== "" && (
//         <h2 className="text-center text-3xl mb-16">{title}</h2>
//       )}

//       {sections.map((item, index) => (
//         <div key={index} className="mb-6">
          
//           <div className="grid md:grid-cols-2 gap-x-6 items-center">

//             {/* IMAGE BLOCK */}
//             <div
//               className={`shadow-sm rounded-md 
//                 ${index % 2 !== 0 ? "md:order-2" : "md:order-1"}
//               `}
//             >
//               <img
//                 src={item.image}
//                 alt="Adventure"
//                 className="w-full h-48 md:h-[420px] object-cover rounded-md"
//               />
//             </div>

//             {/* TEXT BLOCK */}
//             <div
//               className={`space-y-6  px-12 leading-relaxed
//                 ${index % 2 !== 0 ? "md:order-1" : "md:order-2"}
//               `}
//             >
//                <h2 className="text-3xl text-[#111] leading-snug mb-6 capitalize ">
//                 {item.heading}
//               </h2>
//               <h3 className="text-[18px] text-[#111] leading-snug mb-4">
//                 {item.subheading}
//               </h3>

//               <p className="text-gray-700 text-[16px] leading-relaxed">
//                 {item.description}
//               </p>
//             </div>

//           </div>
//         </div>
//       ))}

//     </section>
//   );
// };

// export default AdventureTour;

// responsive

import React from "react";

const AdventureTour = ({ title, sections }) => {

  return (
    <section
      id="adventure"
      className="text-[#111] py-4 md:py-16 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28"
    >
      {title && title.trim() !== "" && (
        <h2 className="text-center text-3xl md:text-[36px] mb-12 md:mb-16">
          {title}
        </h2>
      )}

      {sections.map((item, index) => (
        <div key={index} className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* IMAGE BLOCK */}
            <div
              className={`shadow-sm rounded-md ${
                index % 2 !== 0 ? "md:order-2" : "md:order-1"
              }`}
            >
              <img
                src={item.image}
                alt="Adventure"
                className="w-full h-auto md:h-[420px] object-cover rounded-md"
              />
            </div>

            {/* TEXT BLOCK */}
            <div
              className={`space-y-4 md:space-y-6 leading-relaxed ${
                index % 2 !== 0 ? "md:order-1" : "md:order-2"
              }`}
            >
              <h2 className="text-2xl md:text-3xl text-[#111] leading-snug mb-4 md:mb-6 capitalize">
                {item.heading}
              </h2>

              <h3 className="text-[17px] md:text-[18px] text-[#111] leading-snug mb-3">
                {item.subheading}
              </h3>

              <p className="text-gray-700 text-[15px] md:text-[16px] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AdventureTour;



