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

const TripDetailsSection = ({ trip }) => {
  const [readMore, setReadMore] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showNotIncluded, setShowNotIncluded] = useState(false);

  const mapIframe = trip?.itinerary?.[0]?.map;

  return (
    <section className="bg-white py-12 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 text-[#222]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT SIDE - Image */}
        <div className="relative">
          {/* Label */}
          <div className="absolute bg-[#f9d7b9] text-[#1a1a1a] text-xs font-semibold px-3 py-2 ">
            {trip.add}
          </div>

          <img
            src={trip.image}
            alt={trip.title}
            className="rounded-md w-full object-cover h-auto md:h-[500px]"
          />

          {/* Map Button */}
          <button
            onClick={() => setShowMap(true)}
            className="absolute flex gap-1 cursor-pointer top-4 right-4 bg-[#f9d7b9] text-[#222] text-xs font-semibold px-2 py-2 rounded-full shadow-sm border border-gray-200 hover:bg-gray-100 transition"
          >
            <span>
              <TbWorldSearch />
            </span>
            MAP
          </button>

          {/* Highlight Box */}
          <div className="bg-[#fde6d5] rounded-md mt-4 p-4">
            <h4 className="font-semibold text-[16px] mb-1">
              What makes this trip special...
            </h4>
            <p className="text-[16px] text-[#333] leading-relaxed">
              Every day brings new sights and quiet surprises from Tanzania’s
              open spaces.
            </p>
            <div className=" text-center">
              <button
                onClick={() => {
                  document
                    .getElementById("itina")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-2 text-[14px] cursor-pointer font-semibold text-[#222] underline hover:text-[#d87028] transition"
              >
                GO TO ITINERARY
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Trip Info */}
        <div className="flex flex-col justify-between">
          <div>
            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6 md:mb-10">
              {trip.title}
            </h1>

            {/* Price + Button */}
            <div className="flex items-center mb-8 gap-x-24">
              <div>
                <p className="uppercase text-sm text-gray-500">From</p>
                <p className="text-2xl font-bold">{trip.price}</p>
              </div>
              {/* Price + Button */}

              {/* <button className="bg-[#d87028] hover:bg-[#c35f22] text-white font-semibold text-sm px-6 py-3 rounded-full transition">
                VIEW DATES AND PRICES
              </button> */}
            </div>

            {/* Trip Info Icons */}
            <div className="flex flex-wrap items-center gap-4 text-[15px] font-medium text-[#333] mb-6 uppercase">
              <span className="flex items-center gap-1 uppercase">
                <FaMapMarkerAlt /> START: {trip.startLocation}
              </span>
              <span className="flex items-center gap-1 uppercase">
                <FaMapMarkerAlt /> END: {trip.endLocation}
              </span>
              <span className="flex items-center gap-1 ">
                <FaBus /> {trip.transport}
              </span>
            </div>

            {/* Stays */}
            <div className="flex flex-wrap items-center gap-3 mb-6 text-[15px]">
              {/* <span className="flex items-center gap-1">
                <FaUsers /> {trip.maxpeople}
              </span> */}
              <span className="flex items-center gap-2 bg-[#f9d7b9] px-3 py-2 rounded-full text-[15px] font-semibold">
                <FaBed /> {trip.accomoDay}
              </span>
              <span className="flex items-center gap-2 bg-[#f9d7b9] px-3 py-2 rounded-full text-[15px] font-semibold text-[#222]">
                <FaSuitcase />
                {trip.accomoNight}
              </span>
            </div>

            {/* Description */}
            <div className="text-[16px] text-[#333] leading-relaxed mb-4">
              <p>{trip.description}</p>
              {/* <div className="mt-4 text-center">
                <button
                  onClick={() => setReadMore(!readMore)}
                  className="mt-2 text-sm font-semibold underline text-[#222] hover:text-[#d87028]"
                >
                  {readMore ? "Read less" : "Read more"}
                </button>
              </div> */}
            </div>

            {/* What's Included */}
            {/* <div className=" mt-8 md:mt-12">
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

             
              <button
                onClick={() => setShowNotIncluded(!showNotIncluded)}
                className="mt-3 text-[15px] font-semibold cursor-pointer underline text-[#222] hover:text-[#d87028]"
              >
                {showNotIncluded
                  ? "Hide what's not included "
                  : "What's not included  "}
              </button>

              {showNotIncluded && (
                <ul className="mt-3 text-[15px] text-gray-700 list-disc pl-6 space-y-1">
                  <li className=" flex items-center gap-2">
                    {" "}
                    <FaGlobe />
                    International flights
                  </li>
                  <li className=" flex items-center gap-2">
                    {" "}
                    <FaGlobe />
                    Travel insurance
                  </li>
                  <li className=" flex items-center gap-2">
                    {" "}
                    <FaGlobe />
                    Personal expenses (souvenirs, drinks, etc.)
                  </li>
                  <li className=" flex items-center gap-2">
                    {" "}
                    <FaGlobe />
                    Tips for guides and drivers
                  </li>
                </ul>
              )}
            </div> */}
            <div className="mt-8 md:mt-12">
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                What's included
              </h3>

              {/* Meals */}
              <ul className="text-[14px] md:text-[15px] text-[#333] grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
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

              {/* Guides */}
              <ul className="text-[14px] md:text-[15px] text-[#333] mb-3">
                <li className="flex items-center gap-2">
                  <FaGlobe />
                  EXPERT TRIP MANAGER, DRIVER TEAM, LOCAL GUIDES
                </li>
              </ul>

              {/* Transport + Experiences */}
              <ul className="text-[14px] md:text-[15px] text-[#333] grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <li className="flex items-center gap-2">
                  <FaGlobe /> 9 INCLUDED EXPERIENCES
                </li>
                <li className="flex items-center gap-2">
                  <FaBus /> ALL INTERNAL TRANSPORT
                </li>
              </ul>

              {/* Accommodation */}
              <ul className="text-[14px] md:text-[15px] text-[#333] mb-4">
                <li className="flex items-center gap-2">
                  <FaBed /> ALL ACCOMMODATION
                </li>
              </ul>

              {/* Toggle */}
              <button
                onClick={() => setShowNotIncluded(!showNotIncluded)}
                className="text-[14px] md:text-[15px] font-semibold cursor-pointer underline text-[#222] hover:text-[#d87028]"
              >
                {showNotIncluded
                  ? "Hide what's not included"
                  : "What's not included"}
              </button>

              {/* Not Included */}
              {showNotIncluded && (
                <ul className="mt-3 text-[14px] md:text-[15px] text-gray-700 space-y-2">
                  <li className="flex items-center gap-2">
                    <FaGlobe /> International flights
                  </li>
                  <li className="flex items-center gap-2">
                    <FaGlobe /> Travel insurance
                  </li>
                  <li className="flex items-center gap-2">
                    <FaGlobe /> Personal expenses (souvenirs, drinks, etc.)
                  </li>
                  <li className="flex items-center gap-2">
                    <FaGlobe /> Tips for guides and drivers
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* Bottom Button */}
          {/* <div className="mt-8">
            <button className="border border-black text-black font-semibold px-8 py-3 rounded-full hover:bg-black hover:text-white transition">
              FIND OUT MORE
            </button>
          </div> */}
        </div>
      </div>

      {/* MAP MODAL */}
      {/* {showMap && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-3xl shadow-lg relative">
        
            <button
              onClick={() => setShowMap(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <FaTimes size={20} />
            </button>

        
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
      )} */}
      {/* MAP MODAL */}
      {showMap && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={() => setShowMap(false)}
              className="absolute top-3 cursor-pointer right-3 text-gray-600 hover:text-black z-10"
            >
              <FaTimes size={20} />
            </button>

            {/* MAP CONTENT */}
            {mapIframe ? (
              <div
                className="w-full h-[500px]"
                dangerouslySetInnerHTML={{ __html: mapIframe }}
              />
            ) : (
              <div className="h-[300px] flex items-center justify-center text-gray-500">
                Map not available
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default TripDetailsSection;
