import React from "react";

const AdventureTour = ({ title, sections }) => {
  return (
    <section className="text-[#111] py-16 px-6 md:px-10 lg:px-16 xl:px-18 2xl:px-28">
      
          
      {title && title.trim() !== "" && (
        <h2 className="text-center text-3xl mb-16">{title}</h2>
      )}

      {sections.map((item, index) => (
        <div key={index} className="mb-6">
          
          <div className="grid md:grid-cols-2 gap-x-6 items-center">

            {/* IMAGE BLOCK */}
            <div
              className={`shadow-sm rounded-md 
                ${index % 2 !== 0 ? "md:order-2" : "md:order-1"}
              `}
            >
              <img
                src={item.image}
                alt="Adventure"
                className="w-full h-48 md:h-[420px] object-cover rounded-md"
              />
            </div>

            {/* TEXT BLOCK */}
            <div
              className={`space-y-6 text-center px-12 leading-relaxed
                ${index % 2 !== 0 ? "md:order-1" : "md:order-2"}
              `}
            >
              <h3 className="text-[22px] text-[#111] leading-snug mb-4">
                {item.heading}
              </h3>

              <p className="text-gray-700 text-[16px] leading-relaxed">
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



