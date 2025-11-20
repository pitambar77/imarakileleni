import React from "react";

const WhyVisitTanzania = () => {
  const cards = [
    {
      id: 1,
      image:
        "https://tanzania-specialist.com/wp-content/uploads/2025/06/Tanzania-vacation-scaled.jpg",
      title: "Go further than you’d go alone",
      text: "On these Africa & the Middle East trips for 18–35s, you’ll travel with friendly people, plus an expert Trip Manager and local guides. Perfect for giving you confidence and bringing the fun vibes!",
    },
    {
      id: 2,
      image:
        "https://www.nkuringosafaris.com/wp-content/uploads/2024/05/African_safari_woman_sunset__-jpg.webp",
      title: "Seriously special stays",
      text: "Camping under the stars in Kruger. Luxury cruising on the Nile. Waterfront stays in Zambia. Our Africa & the Middle East trips are studded with stays that’ll make you wanna stay forever.",
    },
    {
      id: 3,
      image:
        "https://www.serengetiheroes.com/wp-content/uploads/2024/03/women-safari-1290x737.webp",
      title: "Experiences that count",
      text: "Support rescued elephants, meet Maasai people, and even visit a Women’s Collective in Morocco’s Dades Valley. These experiences aren’t just good for you – they’re good for people, planet & wildlife too!",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28">
      {/* Title */}
      <h2 className="text-[28px] md:text-3xl capitalize font-bold text-center text-[#111] mb-12">
        Why visit Tanzania with Imara Kileleni Safaris?
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
