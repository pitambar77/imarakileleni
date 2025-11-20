import React from 'react'

import { FaHandHoldingHeart, FaHandHolding } from "react-icons/fa";

const SafariExtrasSection = () => {
  const extras = [
    {
      id: 1,
      icon: <FaHandHolding className="text-[#d87028] text-4xl" />,
      number: "60",
      title: "Pop Up Roof",
      description:
        "Contiki is tried and tested by millions of travellers worldwide. Travel OGs since 1962? That’s right. Learned a few tricks along the way, to help us provide the best all-round travel experience? You bet.",
    },
    {
      id: 2,
      icon: <FaHandHoldingHeart className="text-[#d87028] text-4xl" />,
      title: "Wild Life Books and Maps",
      description:
        "Arrive solo, with your partner or with mates. Either way, you’ll travel the world with friendly new people from all around the world (and you might just meet a few new friends for life).",
    },
    {
      id: 3,
      icon: <FaHandHoldingHeart className="text-[#d87028] text-4xl" />,
      title: "Power Inverters",
      description:
        "Think: Trip Managers to guide you and Drivers to... drive you. Plus on-site masterchefs, expert local guides and dedicated support teams – on hand 24/7 to answer any Qs.",
    },
  ];

  return (
    <section className="bg-[#fedec7] py-16 px-6 md:px-12 lg:px-20 text-center">
      {/* Heading */}
      <h2 className="text-[22px] md:text-3xl capitalize font-extrabold text-[#111] mb-12">
        Plus the things you can’t put a price on...
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {extras.map((item) => (
          <div key={item.id} className="flex flex-col items-center text-center">
            {/* Icon Circle */}
            <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-black mb-6">
              {item.id === 1 && (
                <span className="absolute text-[#d87028] text-[32px] mb-4 font-extrabold">
                  {item.number}
                </span>
              )}
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-[22px] font-extrabold text-[#111] mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-[15px] font-semibold text-[#222] leading-relaxed max-w-[340px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SafariExtrasSection;