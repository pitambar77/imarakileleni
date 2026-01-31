import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Daniel M",
      trip: "United Kingdom",
      text: "Everything felt well planned from start to finish. Communication was clear, guides were patient, and wildlife sightings exceeded expectations. It felt calm, professional, and genuinely cared for throughout the journey.",
    },
    {
      id: 2,
      name: "Sarah L",
      trip: "Australia",
      text: "From arrival to departure, the Tanzania safari ran effortlessly. Communication stayed clear, sightings were well paced, and guides handled logistics quietly, allowing us to focus on wildlife, landscapes, and relaxed moments together daily.",
    },
    {
      id: 3,
      name: "Markus H",
      trip: "Germany",
      text: "Our Tanzania safari felt personal, not rushed. Requests were remembered, guides shared knowledge naturally, and each day unfolded smoothly. It never felt scripted, just thoughtfully managed with care and experience.",
    },
  ];

  return (
    <section className="bg-white py-8 md:py-16 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28">
      {/* Top Orange Bar */}
      <div className="bg-[#d87028] text-white font-semibold text-center py-3 rounded-md mb-16 ">
        RATED 5★ BY OVER 20,000 TRAVELLERS{" "}
        <span className="inline-flex items-center gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </span>{" "}
        <span className="text-white/90 font-normal">
          4.7/5 (25,000 REVIEWS)
        </span>
      </div>

      {/* Section Title */}
      <h2 className="text-[24px] md:text-3xl capitalize font-extrabold text-[#111] text-center mb-12">
        Real Stories From Our Travellers
      </h2>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-md shadow-md hover:shadow-lg transition duration-300 text-center p-8 flex flex-col items-center"
          >
            {/* Stars */}
            <div className="flex justify-center mb-5 text-[#FFD700] text-xl">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            {/* Quote */}
            <p className="text-[16px] text-[#333] italic leading-relaxed mb-6">
              “{review.text}”
            </p>

            {/* Green Divider */}
            <div className="w-8 h-1 bg-lime-400 mb-3"></div>

            {/* Name and Trip */}
            <p className="font-semibold italic text-[#111] mb-1">
              {review.name}
            </p>
            <p className="text-[#111] font-semibold underline text-[15px]">
              {review.trip}
            </p>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-14 text-center">
        <button className="border-2 border-[#111] text-[#111] font-semibold px-8 py-3 cursor-pointer rounded-full hover:bg-[#111] hover:text-white transition">
          VIEW ALL REVIEWS
        </button>
      </div>
    </section>
  );
};

export default ReviewsSection;
