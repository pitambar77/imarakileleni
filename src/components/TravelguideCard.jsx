
import React from "react";

const TravelguideCard = ({ title, subtitle1, subtitle2, items }) => {
  return (
    <section className="py-16 px-4 md:px-16 lg:px-18 2xl:px-28 bg-white">

      {/* Title */}
      {title && (
        <h2 className="text-center text-2xl md:text-3xl capitalize font-bold mb-4">
          {title}
        </h2>
      )}

      {/* Subtitle 1 */}
      {subtitle1 && (
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
          {subtitle1}
        </p>
      )}

      {/* Subtitle 2 */}
      {subtitle2 && (
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed">
          {subtitle2}
        </p>
      )}

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {items?.map((item) => (
          <div
            key={item.id}
            className="rounded-md overflow-hidden bg-white shadow-md hover:shadow-lg transition flex flex-col"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[220px] object-cover"
            />

            {/* Content */}
            <div className="p-6 text-center flex flex-col flex-1">
              <h3 className="font-semibold text-[24px] mb-4">{item.title}</h3>

              <p className="text-gray-600 text-[16px] leading-relaxed mb-4">
                {item.text}
              </p>

              {/* Button stays at bottom always */}
              {item.link && (
                <button className="font-semibold underline mt-auto pb-1">
                  {item.link}
                </button>
              )}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelguideCard;
