import React from "react";

const WhyVisitSection = ({ title, cards }) => {
  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28">

      {/* Render title only if provided */}
      {title && (
        <h2 className="text-[28px] md:text-3xl capitalize font-bold text-center text-[#111] mb-12">
          {title}
        </h2>
      )}

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards?.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-60 object-cover"
            />

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-[20px] md:text-[24px] text-[#111] mb-3">
                {card.title}
              </h3>
              <p className="text-[16px] text-[#333] leading-relaxed">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default WhyVisitSection;
