import React from "react";

const WhyVisitTanzania = () => {
  const cards = [
    {
      id: 1,
      image:
        "https://tanzania-specialist.com/wp-content/uploads/2025/06/Tanzania-vacation-scaled.jpg",
      title: "Locally Led Adventures",
      text: "Our roots here run deep, and that changes the way you experience each place. You’re not just following a route—you’re discovering quiet corners, real stories, and moments only locals know how to reveal.",
    },
    {
      id: 2,
      image:
        "https://www.nkuringosafaris.com/wp-content/uploads/2024/05/African_safari_woman_sunset__-jpg.webp",
      title: "Tailored Safari Journeys",
      text: "We listen closely to what excites you and what doesn’t. Then we build an itinerary shaped around your rhythm, your comfort, and your style, so the whole journey feels naturally made for you.",
    },
    {
      id: 3,
      image:
        "https://www.serengetiheroes.com/wp-content/uploads/2024/03/women-safari-1290x737.webp",
      title: "Ethical Travel Choices",
      text: "Your safari supports local livelihoods and protects the wilderness you came to see. We prioritise fair work, community involvement, and gentle travel practices that genuinely make a difference on the ground.",
    },
  ];

  return (
    <section className="bg-white py-8 md:py-16 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28">
      {/* Title */}
      <h2 className="text-[28px] md:text-3xl capitalize font-bold text-center text-[#111] mb-12">
        Start exploring Tanzania’s most iconic safaris
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
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
              <h3 className="text-[20px] md:text-[24px]  text-[#111] mb-3">
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

export default WhyVisitTanzania;
