import React from "react";

import {
  FaStar,
  FaWallet,
  FaHourglassHalf,
  FaCalendarAlt,
  FaShieldAlt,
} from "react-icons/fa";

const tourGroups = [
  {
    id: 1,
    title: "Custom tours",
    image:
      "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Custom tours for your group. You dream it, we create it very well as it as >",
  },
  {
    id: 2,
    title: "Groups of 9+",
    image:
      "https://images.pexels.com/photos/3184187/pexels-photo-3184187.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "Bring your group and block book one of our amazing existing itineraries >",
  },
  {
    id: 3,
    title: "Solo travel",
    image:
      "https://images.pexels.com/photos/712876/pexels-photo-712876.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "For real travel experiences, making friends along the way >",
  },
  {
    id: 4,
    title: "Family tours",
    image:
      "https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "With something for everyone, our tours will let you rediscover the joy of travel as a family >",
  },
  {
    id: 5,
    title: "Single parent vacations",
    image:
      "https://images.pexels.com/photos/167964/pexels-photo-167964.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "We take care of everything from exciting stays to fun adventures >",
  },
  {
    id: 6,
    title: "Couple vacations",
    image:
      "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "We've got the perfect honeymoon vacations and romantic getaways >",
  },
];

const TourGroupSection = () => {
  return (
    <section className="bg-[#fedec8] py-20 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28">
      {/* Header */}
      <h2 className="text-center capitalize text-2xl md:text-3xl font-bold text-[#222] mb-12">
        Tours by group type
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {tourGroups.map((tour) => (
          <div key={tour.id} className="flex flex-col">
            {/* Image with overlay */}
            <div className="relative rounded-md overflow-hidden group cursor-pointer h-56">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all"></div>
              <h3 className="absolute inset-0 flex justify-center items-center text-white text-[22px] md:text-[28px] font-bold">
                {tour.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-[#222] text-[16px] mt-3 leading-relaxed">
              {tour.description}
            </p>
          </div>
        ))}
      </div>

<div className="bg-[#fedec7]"> {/* soft peach background */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 mt-24">
          {/* Heading centered */}
          <h2 className="text-center text-2xl md:text-3xl font-bold text-black mb-16 capitalize">
            Book with confidence
          </h2>

          {/* Features row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-14 h-14 rounded-full bg-black flex items-center justify-center">
                <FaWallet className="text-[#f3a85f] w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-black">
                  Lock in your spot with a <span className="font-bold">$200 deposit</span>
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-14 h-14 rounded-full bg-black flex items-center justify-center">
                <FaHourglassHalf className="text-[#f3a85f] w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-black">
                  <u className="font-bold">Pay monthly</u> or bi-weekly
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-14 h-14 rounded-full bg-black flex items-center justify-center">
                <FaCalendarAlt className="text-[#f3a85f] w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-black">
                  Amend your booking up to <span className="font-bold">60 days</span> pre-trip
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-14 h-14 rounded-full bg-black flex items-center justify-center">
                <FaShieldAlt className="text-[#f3a85f] w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-black">
                  Plans changed? Your payments are protected
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-16">
            <button
              className="px-8 py-3 rounded-full border-2 border-black text-black font-semibold bg-transparent hover:bg-black hover:text-white transition"
              aria-label="Find out more"
            >
              FIND OUT MORE
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default TourGroupSection;
