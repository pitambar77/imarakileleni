


import React from "react";

const SafariFeatureSection = () => {
  const sections = [
    {
      id: 1,
      image:
        "https://bookaweb.s3.eu-central-1.amazonaws.com/assets/6374a44250b1e.jpg",
      title: "The secret to spectacular safari",
      subtitle: "Behind the scenes",
      text: "Our skilled team at Antarctica21 brings together experts in polar travel and hospitality to create safe, enriching, and sustainable Antarctic adventures.",
      button: "See Team Directory",
      reverse: false,
    },
    {
      id: 2,
      image: "https://masai-mara.in/wp-content/uploads/2024/11/image2-11.webp",
      title: "Our Safari Fleet",
      subtitle: "Explorers House",
      text: "Explorers House is Antarctica21’s new expedition center in Punta Arenas, Chile. It is more than a starting point for expeditions; it’s a gateway to the Antarctic experience.",
      button: "See Explorers House",
      reverse: true,
    },
    {
      id: 3,
      image:
        "https://www.tanzania-experience.com/wp-content/uploads/2017/07/Looking-for-new-routes-featured.jpg",
      title: "Sustainable Exploration",
      subtitle: "Journey with purpose",
      text: "Join us in our mission to experience Antarctica’s wonders while preserving them for future generations.",
      button: "Learn More",
      reverse: false,
    },
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28">
      <div className="space-y-8 ">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`flex flex-col md:flex-row ${
              section.reverse ? "" : "md:flex-row-reverse"
            } bg-[#fde6d5] rounded-lg overflow-hidden shadow-sm`}
          >
            {/* Text Content (60%) */}
            <div className="w-full md:w-[60%] flex flex-col justify-center px-8 py-10 text-left">
              <p className="text-sm text-gray-600 mb-2">{section.subtitle}</p>
              <h3 className="text-[26px] font-semibold text-[#222] mb-4 leading-snug">
                {section.title}
              </h3>
              <p className="text-[16px] text-[#333] leading-relaxed mb-6">
                {section.text}
              </p>
              <button className="bg-[#d87028] hover:bg-[#c35f22] text-white font-semibold px-6 py-3 rounded-md transition w-fit">
                {section.button}
              </button>
            </div>

            {/* Image (40%) */}
            <div className="w-full md:w-[40%] p-4 ">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-[320px] md:h-[380px] rounded object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SafariFeatureSection;
