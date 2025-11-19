
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaBus,
  FaSuitcase,
  FaBed,
  FaUtensils,
  FaUsers,
  FaGlobe,
  FaTimes,
} from "react-icons/fa";
import { TbWorldSearch } from "react-icons/tb";

const TripDetailsSection = () => {
  const [readMore, setReadMore] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showNotIncluded, setShowNotIncluded] = useState(false);

  return (
    <section className="bg-white py-12 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 text-[#222]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT SIDE - Image */}
        <div className="relative">
          {/* Label */}
          <div className="absolute bg-[#c8e29b] text-[#1a1a1a] text-xs font-semibold px-3 py-2 ">
            PREVIOUSLY TASTE OF TANZANIA
          </div>

          {/* Image */}
          <img
            src="https://www.nkuringosafaris.com/wp-content/uploads/2024/01/tanzania_ngorongoro__wildebeest-migration.jpg"
            alt="Tanzania Safari"
            className="rounded-md w-full object-cover h-[500px]"
          />

          {/* Map Button */}
          <button
            onClick={() => setShowMap(true)}
            className="absolute flex gap-1 top-4 right-4 bg-[#f9d7b9] text-[#222] text-xs font-semibold px-2 py-2 rounded-full shadow-sm border border-gray-200 hover:bg-gray-100 transition"
          >
            <span><TbWorldSearch /></span>
             MAP
          </button>

          {/* Highlight Box */}
          <div className="bg-[#fde6d5] rounded-md mt-4 p-4">
            <h4 className="font-semibold text-[16px] mb-1">
              What makes this trip special...
            </h4>
            <p className="text-[16px] text-[#333] leading-relaxed">
              The one that will see you safari your way around Tanzania’s
              wondrous wildlife
            </p>
            <div className=" text-center">
<button className="mt-2 text-[14px] font-semibold text-[#222] underline hover:text-[#d87028] transition">
              GO TO ITINERARY 
            </button>
            </div>
            
          </div>
        </div>

        {/* RIGHT SIDE - Trip Info */}
        <div className="flex flex-col justify-between">
          <div>
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-10">
              Tanzania Safari
            </h2>

            {/* Price + Button */}
            <div className="flex items-center mb-8 gap-x-24">
              <div>
                <p className="uppercase text-sm text-gray-500">From</p>
                <p className="text-2xl font-bold">$4,546</p>
              </div>
              <button className="bg-[#d87028] hover:bg-[#c35f22] text-white font-semibold text-sm px-6 py-3 rounded-full transition">
                VIEW DATES AND PRICES
              </button>
            </div>

            {/* Trip Info Icons */}
            <div className="flex flex-wrap items-center gap-4 text-[15px] font-medium text-[#333] mb-6">
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt /> START: ARUSHA
              </span>
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt /> END: ARUSHA
              </span>
              <span className="flex items-center gap-1">
                <FaBus /> SAFARI VEHICLES
              </span>
            </div>

            {/* Stays */}
            <div className="flex flex-wrap items-center gap-3 mb-6 text-[15px]">
              <span className="flex items-center gap-1">
                <FaUsers /> MAXIMUM 20 PEOPLE
              </span>
              <span className="flex items-center gap-2 bg-[#f9d7b9] px-3 py-2 rounded-full text-[15px] font-semibold">
                <FaBed /> 1 NIGHT IN HOTEL
              </span>
              <span className="flex items-center gap-2 bg-[#f9d7b9] px-3 py-2 rounded-full text-[15px] font-semibold text-[#222]">
                <FaSuitcase /> 2 NIGHTS IN SPECIAL STAY
              </span>
            </div>

            {/* Description */}
            <div className="text-[16px] text-[#333] leading-relaxed mb-4">
              <p>
                You can reel off the names of the Big 5, you've imagined
                yourself driving through the Serengeti in an open-top vehicle,
                and you've dreamed of going on safari since you first learnt how
                to say 'Hakuna Matata'.
                {readMore && (
                  <>
                    {" "}
                    How about we throw in some views of the Great Rift Valley, a
                    visit to an ancient volcano dense with game and predators,
                    and nights camping under the star-swept skies of the
                    Serengeti plains? Now this is the Africa trip you've been
                    waiting for.
                  </>
                )}
              </p>
              <div className="mt-4 text-center">
                <button
                  onClick={() => setReadMore(!readMore)}
                  className="mt-2 text-sm font-semibold underline text-[#222] hover:text-[#d87028]"
                >
                  {readMore ? "Read less" : "Read more"}
                </button>
              </div>
            </div>

            {/* What's Included */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-3">What's included</h3>

              <ul className="text-[15px] text-[#333] flex gap-8 mb-2">
                <li className="flex items-center gap-2">
                  <FaUtensils /> 5 BREAKFASTS
                </li>
                <li className="flex items-center gap-2">
                  <FaUtensils /> 5 LUNCHES
                </li>
                <li className="flex items-center gap-2">
                  <FaUtensils /> 5 DINNERS
                </li>
              </ul>

              <li className="flex items-center gap-2 mb-2 text-[15px]">
                <FaGlobe /> EXPERT TRIP MANAGER, DRIVER TEAM, LOCAL GUIDES
              </li>

              <ul className="text-[15px] text-[#333] flex gap-8 mb-2">
                <li className="flex items-center gap-2">
                  <FaGlobe /> 9 INCLUDED EXPERIENCES
                </li>
                <li className="flex items-center gap-2">
                  <FaBus /> ALL INTERNAL TRANSPORT
                </li>
              </ul>

              <li className="flex items-center gap-2 text-[15px] mb-3">
                <FaBed /> ALL ACCOMMODATION
              </li>

              {/* Toggle What’s Not Included */}
              <button
                onClick={() => setShowNotIncluded(!showNotIncluded)}
                className="mt-3 text-[15px] font-semibold underline text-[#222] hover:text-[#d87028]"
              >
                {showNotIncluded
                  ? "Hide what's not included "
                  : "What's not included  "}
              </button>

              {showNotIncluded && (
                <ul className="mt-3 text-[15px] text-gray-700 list-disc pl-6 space-y-1">
                  <li className=" flex items-center gap-2"> <FaGlobe />International flights</li>
                  <li className=" flex items-center gap-2"> <FaGlobe />Travel insurance</li>
                  <li className=" flex items-center gap-2"> <FaGlobe />Personal expenses (souvenirs, drinks, etc.)</li>
                  <li className=" flex items-center gap-2"> <FaGlobe />Tips for guides and drivers</li>
                </ul>
              )}
            </div>
          </div>

          {/* Bottom Button */}
          <div className="mt-8">
            <button className="border border-black text-black font-semibold px-8 py-3 rounded-full hover:bg-black hover:text-white transition">
              FIND OUT MORE
            </button>
          </div>
        </div>
      </div>

      {/* MAP MODAL */}
      {showMap && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-3xl shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={() => setShowMap(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <FaTimes size={20} />
            </button>

            {/* Google Map Embed */}
            <iframe
              title="Tanzania Safari Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15948977.457119478!2d28.77636437936594!3d-6.369028456049016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c443cf37a6e17%3A0xf9a0a7cf8c44e7da!2sTanzania!5e0!3m2!1sen!2sin!4v1699634189844!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              className="border-0 rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default TripDetailsSection;
