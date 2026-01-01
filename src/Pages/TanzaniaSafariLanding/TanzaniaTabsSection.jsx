import React, { useEffect, useMemo, useState } from "react";
import API from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { slugify } from "../../utils/slugify.js";

const TanzaniaTabsSection = () => {
  const [destinations, setDestinations] = useState([]);
  const [activeTab, setActiveTab] = useState("Northern");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await API.get("/destinationdetails");
        setDestinations(res.data || []);
      } catch (error) {
        console.error("Destination fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  // 🔐 SAFE FILTER
  const filteredDestinations = useMemo(() => {
    return destinations.filter(
      (item) =>
        item.destination?.trim().toLowerCase() === activeTab.toLowerCase()
    );
  }, [destinations, activeTab]);

  if (loading) {
    return <p className="text-center py-10">Loading destinations…</p>;
  }

  return (
    <section className="bg-white py-8 md:py-16 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto">
      {/* Title + Description */}
      <div className="text-center mb-8 md:mb-16 max-w-5xl mx-auto text-[#222]">
        <h2 className="text-2xl md:text-[32px] lg:text-[36px] font-bold text-[#1a1a1a] mb-4 capitalize">
          Place to vist in tanzania
        </h2>

        <p className="text-[16px] md:text-[18px] text-[#555] mb-6 md:mb-10">
          Tanzania’s seasons shift gently and quietly, influencing every travel
          experience across the country.
        </p>

        {/* Main paragraph block */}
        <div className="text-[15px] md:text-[17px] leading-[1.8] space-y-6 text-[#333] px-2 md:px-10">
          <p>
            The{" "}
            <span className=" font-bold">Tanzania Northern Safari Circuit</span>{" "}
            is the route most people picture first, and honestly, it deserves
            that attention.{" "}
            <span className="font-semibold">Arusha National Park </span> offers
            peaceful forests and clear mountain views, while{" "}
            <span className="font-semibold"> Lake Manyara </span> surprises with
            its bright birdlife and calm stretches of water sitting beneath
            towering, uneven rift cliffs.
          </p>

          <p>
            <span className="font-semibold">Tarangire</span> brings a different
            mood altogether with its wide spaces and slow-moving elephants
            weaving between giant baobabs. Not far away, the{" "}
            <span className="font-semibold"> Ngorongoro Crater </span> feels
            almost unreal—animals scattered across a volcanic bowl that looks
            carved on purpose, though nature clearly never worked with straight
            lines.
          </p>

          <p>
            Then there’s{" "}
            <span className="font-semibold">Serengeti National Park </span> ,
            where the horizon keeps shifting and the days stretch long and open.
            Kilimanjaro National Park stands apart, its slopes rising from
            farmland to moorland and finally into alpine cold, offering a
            mountain journey that tests patience, rhythm, and sometimes your own
            certainty.
          </p>

          <p>
            For travelers drawn to quieter places, Mkomazi offers dry-country
            wildlife and a rhythm that feels untouched.{" "}
            <span className="font-semibold">Lake Natron</span> glows with
            minerals and flamingos. Further south, Nyerere, Ruaha, Mikumi, and
            Udzungwa create a different Tanzania—wide rivers, deep wilderness,
            and parks where human presence feels wonderfully small.
          </p>
        </div>
      </div>

      {/* Tabs */}
      {/* <div className="flex justify-center mb-10 overflow-x-auto space-x-3 scrollbar-hide">
        <button
          onClick={() => setActiveTab("south")}
          className={`whitespace-nowrap px-5 py-2.5 rounded-full text-base font-semibold border transition-all duration-300 ${
            activeTab === "south"
              ? "bg-[#d87028] text-white border-[#d87028]"
              : "border-black text-black hover:bg-gray-100"
          }`}
        >
          Southern Tanzania
        </button>

        <button
          onClick={() => setActiveTab("north")}
          className={`whitespace-nowrap px-5 py-2.5 rounded-full text-base font-semibold border transition-all duration-300 ${
            activeTab === "north"
              ? "bg-[#d87028] text-white border-[#d87028]"
              : "border-black text-black hover:bg-gray-100"
          }`}
        >
          Northern Tanzania
        </button>
      </div> */}

      <div className="flex justify-center mb-10 space-x-1.5 md:space-x-3 ">
        

        <button
          onClick={() => setActiveTab("Northern")}
          className={` px-3 md:px-5  py-1.5 md:py-2.5 rounded-full text-sm md:text-[17px] cursor-pointer font-semibold border ${
            activeTab === "Northern"
              ? "bg-[#d87028] text-white border-[#d87028] active"
              : "border-black text-black"
          }`}
        >
          Northern Tanzania
        </button>
        <button
          onClick={() => setActiveTab("Southern")}
          className={`px-3 md:px-5 py-1.5 md:py-2.5 rounded-full text-sm md:text-[17px] cursor-pointer font-semibold border ${
            activeTab === "Southern"
              ? "bg-[#d87028] text-white border-[#d87028] active"
              : "border-black text-black"
          }`}
        >
          Southern Tanzania
        </button>
      </div>
      {/* Empty state */}
      {filteredDestinations.length === 0 && (
        <p className="text-center text-gray-500">No destinations found</p>
      )}
      {/* Cards section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredDestinations.map((trip) => (
        
          <div
            key={trip._id}
            className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-xl transition duration-300 h-[400px] flex flex-col"
          >
            {/* IMAGE */}
            <div className="relative">
              <img
                src={trip.image}
                alt={trip.title}
                className="w-full h-44 object-cover"
              />

              {/* <button className="absolute bottom-2 left-2 bg-white text-[11px] font-semibold px-2.5 py-1 rounded shadow-sm hover:bg-gray-100 transition">
                🔍 QUICK VIEW
              </button> */}
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col flex-1">
              {/* Title */}
              <h3 className="font-semibold text-lg md:text-xl mb-3 leading-tight capitalize">
                {trip.title
                  ?.toLowerCase()
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </h3>

              {/* Description (CLAMP WORKS) */}
              <p className="text-[14px] md:text-[15px] line-clamp-3">
                {trip.overviewinfo?.[0]?.description?.[0]?.content}
              </p>

              {/* SPACER → pushes button down */}
              <div className="flex-grow" />

              {/* Button (FIXED BOTTOM) */}
              <div className="flex justify-end pt-4">
                <button
                  onClick={() =>
                    navigate(`/tanzania-destinations/${slugify(trip.title)}`, {
                      state: { prefetchedData: trip },
                    })
                  }
                  className="bg-[#d87028] hover:bg-orange-700 cursor-pointer text-white font-semibold text-sm px-6 py-2 rounded-full transition"
                >
                  VIEW TRIP
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredDestinations.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-44 object-cover"
              />

              <button className="absolute bottom-2 left-2 bg-white text-[11px] font-semibold px-2.5 py-1 rounded shadow-sm">
                🔍 QUICK VIEW
              </button>
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-lg mb-3">{item.title}</h3>

              <p className="text-sm text-gray-600 line-clamp-3 mb-6">
                {item.overviewinfo?.[0]?.title}
              </p>

              <div className="flex justify-end">
                <button className="bg-[#d87028] hover:bg-orange-700 text-white text-sm px-6 py-2 rounded-full">
                  VIEW TRIP
                </button>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default TanzaniaTabsSection;
