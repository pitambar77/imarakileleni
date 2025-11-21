import React from "react";
import { FaClock } from "react-icons/fa";

const TravelGuideDetails = () => {
  return (
    <section className="bg-[#F8E6D5] py-16 ">
      <div className=" px-4 max-w-4xl mx-auto">
        {/* ===== Heading ===== */}
        <h3 className="text-[28px] md:text-3xl text-center px-30 font-bold text-[#111] mb-4">
          When is the best time to visit the Ngorongoro Crater?
        </h3>
        <p className=" mb-6 text-center">Travel Trips</p>
        <img
          className=" w-full h-56 md:h-[480px] rounded-md shadow-md object-cover mb-8"
          src="https://www.asiliaafrica.com/wp-content/uploads/2024/04/Zebras-grazing-in-Ngorongoro-Tanzania.jpg"
          alt=""
        />

        {/* ===== Heading ===== */}
        <h3 className="text-[28px] md:text-3xl font-bold text-[#111] mb-4">
          When is the low season in the Ngorongoro Crater?
        </h3>

        <p className=" mb-6 leading-relaxed text-[16px] text-[#444]">
          The low season for the Ngorongoro Crater is during the long rainy
          season (March to May) and in November and December. This period is
          characterized by fewer tourists, potential for lower prices, and
          opportunities for bird watching due to migratory birds arriving. The
          long rains occur from March to May, while November and December are
          part of the short rains season.{" "}
        </p>

        <p className="mb-8 leading-relaxed text-[16px] text-[#444]">
          March to May (Long Rains): This season is marked by fewer visitors and
          the parks become much greener. You can find lower prices on
          accommodations and safari packages during this time. While it is the
          rainy season, it doesn't rain constantly; many days are sunny with
          short bursts of rain.
        </p>

        <img
          src="https://www.tanzania-experience.com/wp-content/uploads/2024/12/which-animals-ngo-crater.jpg"
          className="w-full h-56 md:h-[480px] rounded-md shadow-md object-cover mb-8"
          alt="Lodge"
        />
        {/* ===== Heading ===== */}
        <h3 className="text-[28px] md:text-3xl font-bold text-[#111] mb-4">
          When is the high season in the Ngorongoro Crater?
        </h3>

        {/* ===== Description ===== */}
        <p className="text-[16px] text-[#444] leading-relaxed max-w-4xl mb-5">
          The high season in the Ngorongoro Crater occurs during the dry season,
          which runs from June to October. This is also the best time to visit
          the Crater. The weather is ideal, and wildlife sightings are at their
          best. However, due to increased demand, peak prices apply and booking
          up to a year in advance is recommended.
        </p>

        <p className="text-[16px] text-[#444] leading-relaxed max-w-4xl mb-5">
          If you prefer to visit during a quieter time of year, you could
          consider visiting during the <strong>shoulder seasons</strong>. These
          periods occur from:
        </p>

        {/* ===== Bullet Lines ===== */}
        <ul className="text-[16px] text-[#444] leading-relaxed space-y-2 mb-12">
          <li className="flex items-center gap-3">
            <span className="w-8 border-t border-gray-600"></span>
            November to mid-December
          </li>
          <li className="flex items-center gap-3">
            <span className="w-8 border-t border-gray-600"></span>
            January to mid-March (brief dry period)
          </li>
          <li className="flex items-center gap-3">
            <span className="w-8 border-t border-gray-600"></span>
            Mid-June (start of dry season)
          </li>
        </ul>

        {/* ===== Two Safari Cards Heading ===== */}
        <h3 className="text-[24px] md:text-3xl font-bold text-[#111] mb-6">
          Two of our favourite safaris visiting the Ngorongoro Crater:
        </h3>

        {/* ===== Cards Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {/* Card 1 */}
          {/* Card 2 */}
          <div className="rounded-lg shadow-lg overflow-hidden bg-[#f7d2b6]">
            <div className=" p-3 ">
<h3 className="font-semibold text-xl ">Tanzania Kenya Safari</h3>

            <div className=" flex justify-between items-center mb-4">
              <div className="flex items-center gap-4 text-[16px] text-gray-600">
                <span>6 days</span> | <span>1 country</span>
              </div>
              <button className="text-[16px] items-center bg-[#d76e28] text-white px-4 py-2 rounded-full">
                VIEW TRIP
              </button>
            </div>
            <img
              src="https://photos.tpn.to/lp/og/pq/rt/1600x900.jpg"
              alt="Safari"
              className="w-full h-56 object-cover rounded-md"
            />
            </div>
            

            <div className="bg-[#d76e28] text-white text-center py-3  font-semibold">
              EXCLUSIVELY FOR 18–35 YEAR OLDS
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg shadow-lg overflow-hidden bg-[#f7d2b6]">
            <div className=" p-3 ">
<h3 className="font-semibold text-xl ">Tanzania Kenya Safari</h3>

            <div className=" flex justify-between items-center mb-4">
              <div className="flex items-center gap-4 text-[16px] text-gray-600">
                <span>6 days</span> | <span>1 country</span>
              </div>
              <button className="text-[16px] items-center bg-[#d76e28] text-white px-4 py-2 rounded-full">
                VIEW TRIP
              </button>
            </div>
            <img
              src="https://photos.tpn.to/lp/og/pq/rt/1600x900.jpg"
              alt="Safari"
              className="w-full h-56 object-cover rounded-md"
            />
            </div>
            

            <div className="bg-[#d76e28] text-white text-center py-3  font-semibold">
              EXCLUSIVELY FOR 18–35 YEAR OLDS
            </div>
          </div>
        </div>

        {/* ===== How to Plan Section ===== */}
        <h3 className="text-[26px] md:text-3xl font-bold text-[#111] mb-4">
          How to plan a safari to the Ngorongoro Crater
        </h3>

        <p className="text-[16px] text-[#444] leading-relaxed max-w-4xl mb-5">
          Tanzania is an excellent destination for an authentic safari,
          especially on the northern safari circuit, which includes Ngorongoro
          Crater, Serengeti and Tarangire National Park.
        </p>

        <p className="text-[16px] text-[#444] leading-relaxed max-w-4xl mb-8">
          With so many safari companies online, choosing one can be a daunting
          task. Start by reading reviews and then speak to one of our country
          experts for a no-obligation conversation.
        </p>

        {/* ===== Full Image ===== */}
        <div className="max-w-4xl mx-auto">
          <img
            src="https://www.tanzania-experience.com/wp-content/uploads/2024/12/which-animals-ngo-crater.jpg"
            className="w-full h-56 md:h-[480px] rounded-md shadow-md object-cover"
            alt="Lodge"
          />
        </div>
        <p className="text-center text-sm mt-2 text-gray-600">
          Photo: Kiele Lodge overlooks a coffee plantation in the Ngorongoro
          Highlands
        </p>
        <h3 className=" text-xl md:text-3xl my-8">
            The best time to visit the Ngorongoro Crater: a month-by-month guide
        </h3>
        <div className=" bg-[#d76e28] py-8 rounded-md text-center ">
            <h3 className=" text-3xl mb-4">Still Searching?</h3>
            <p className=" mb-4">Browse more travel style here, with 200+ trips worldwide to choose from</p>
            <button className=" py-2 px-5 border rounded-full  font-bold uppercase ">Find out more</button>
        </div>
          <h3 className=" text-xl md:text-3xl my-8">
           January the Ngorongoro Crater: the short dry season & shoulder season
        </h3>
         <p className="text-[16px] text-[#444] leading-relaxed max-w-4xl mb-5">
          Tanzania is an excellent destination for an authentic safari,
          especially on the northern safari circuit, which includes Ngorongoro
          Crater, Serengeti and Tarangire National Park.
        </p>

        <p className="text-[16px] text-[#444] leading-relaxed max-w-4xl mb-8">
          With so many safari companies online, choosing one can be a daunting
          task. Start by reading reviews and then speak to one of our country
          experts for a no-obligation conversation.
        </p>
           <h3 className=" text-xl md:text-3xl my-8">
           February the Ngorongoro Crater: the short dry season & high season
        </h3>
         <p className="text-[16px] text-[#444] leading-relaxed max-w-4xl mb-5">
          Tanzania is an excellent destination for an authentic safari,
          especially on the northern safari circuit, which includes Ngorongoro
          Crater, Serengeti and Tarangire National Park.
        </p>
      </div>
    </section>
  );
};

export default TravelGuideDetails;
