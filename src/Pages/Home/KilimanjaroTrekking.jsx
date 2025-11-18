import React, { useState } from "react";
import { FaStar, FaCalendarAlt,FaInfo, FaMapMarkerAlt, FaGlobe, FaInfoCircle } from "react-icons/fa";
import TripCard from "../../components/TripCard";
import { IoClose } from "react-icons/io5";


const trips = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1200&q=80",
    title: "Thai Island Hopper West",
    rating: 4.6,
    days: "8 Days",
    places: "3 Places",
    countries: "1 Country",
    standardPrice: "$1,235",
    discountedPrice: "$1,050",
    description:
      "The one that takes you to west Thailand for a tour of Phuket, Koh Phi Phi, Krabi & other faves...",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    title: "European Whirl",
    rating: 4.7,
    days: "19 Days",
    places: "6 Places",
    countries: "8 Countries",
    discountedPrice: "$3,425",
    description:
      "The one that combines urban parties, ancient history and mountain beauty in 19 days",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=1200&q=80",
    title: "Croatia Island Sail",
    rating: 4.5,
    days: "8 Days",
    places: "6 Places",
    countries: "1 Country",
    standardPrice: "$1,765",
    discountedPrice: "$1,616",
    description:
      "The one that lets you cruise the Dalmatian Coastline & go Croatian island hopping, from Split to Dubrovnik...",
    tag: "Sailing",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=1200&q=80",
    title: "Great Britain and Ireland",
    rating: 4.8,
    days: "18 Days",
    places: "31 Places",
    countries: "5 Countries",
    discountedPrice: "$3,832",
    description:
      "The one that shows you Britain’s best hotspots, topped off with The Emerald Isles",
  },
];

const KilimanjaroTrekking = () => {

    const [selectedTrip, setSelectedTrip] = useState(null);
    const openModal = (trip) => setSelectedTrip(trip);
    const closeModal = () => setSelectedTrip(null);

  return (
    <section className="w-full bg-[#fedec7] py-16">
      <div className="mx-auto px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Kilimanjaro Trekking
        </h2>
{/* 
        Cards Grid */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-[480px]">
          {trips.map((trip) => (
            <div
              key={trip.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
             
              <div className="relative">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-40 object-cover"
                />
                <button className="absolute bottom-3 left-3 bg-white text-xs font-semibold px-3 py-1 rounded shadow-sm hover:bg-gray-100 transition">
                  🔍 QUICK VIEW
                </button>

                {trip.tag && (
                  <span className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded">
                    {trip.tag}
                  </span>
                )}
              </div>

           
              <div className="p-5">
                <div className="flex items-center text-yellow-500 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      size={14}
                      className={i < Math.floor(trip.rating) ? "text-yellow-500" : "text-gray-300"}
                    />
                  ))}
                  <span className="text-black ml-2 font-semibold">{trip.rating}</span>
                </div>

                <h2 className="font-bold text-lg mb-3">{trip.title}</h2>

               
                <div className="flex items-center gap-2 bg-white  border-l-4  border-[#d87028] rounded-md px-3 py-1.5 mb-4 text-sm  text-black shadow-sm">
                  <FaInfo className="text-[#d87028]" />
                  <span>More Options Available</span>
                </div>

                
                <div className="text-sm flex flex-wrap items-center gap-3 mb-3">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt /> <p className=" mt-1">{trip.days}</p> 
                  </span>
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt /><p className=" mt-1"> {trip.places}</p> 
                  </span>
                  <span className="flex items-center gap-1">
                    <FaGlobe /><p className=" mt-1">  <u>{trip.countries}</u></p>
                  </span>
                </div>

                <p className=" text-sm mb-4 line-clamp-3">
                  {trip.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-600">
                    {trip.standardPrice && (
                      <p className="text-xs">Standard Price {trip.standardPrice}</p>
                    )}
                    <h3 className="font-bold text-black">
                      From{" "}
                      {trip.discountedPrice}
                    </h3>
                  </div>

                  <button className="bg-[#d87028] border border-[#d87078]  hover:bg-orange-700 text-white font-semibold text-sm px-5 py-2 rounded-full transition shadow">
                    VIEW TRIP
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div> */}

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} onQuickView={openModal} />
          ))}
        </div>

        {/* Explore Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-[#d87028] border border-black hover:bg-orange-700 text-white font-semibold text-base px-8 py-3 rounded-full transition shadow">
            EXPLORE KILIMANJARAO
          </button>
        </div>

           {/* Quick View Modal */}
              {selectedTrip && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                  <div className="bg-white w-[90%] md:w-[700px] rounded-xl shadow-lg overflow-hidden relative">
                    <button
                      onClick={closeModal}
                      className="absolute top-3 right-3 text-gray-600 hover:text-black"
                    >
                      <IoClose size={28} />
                    </button>
        
                    <img
                      src={selectedTrip.image}
                      alt={selectedTrip.title}
                      className="w-full h-64 object-cover"
                    />
        
                    <div className="p-6 text-gray-800">
                      <h3 className="text-2xl font-bold mb-2">{selectedTrip.title}</h3>
        
                      <div className="flex items-center text-yellow-500 mb-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar key={i} size={16} />
                        ))}
                        <span className="text-black ml-2 font-semibold">
                          {selectedTrip.rating}
                        </span>
                      </div>
        
                      <div className="text-sm flex flex-wrap items-center gap-4 mb-3 text-gray-600">
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt /> {selectedTrip.days}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaMapMarkerAlt /> {selectedTrip.places}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaGlobe /> {selectedTrip.country}
                        </span>
                      </div>
        
                      <p className="text-gray-700 mb-4">{selectedTrip.description}</p>
        
                      <div className="text-sm mb-4 flex justify-between items-center">
                        <div>
                          {selectedTrip.standardPrice && (
                            <p>Standard Price <br/> {selectedTrip.standardPrice}</p>
                          )}
                          <p className="font-bold text-black">
                            From{" "}
                            <span className="text-[#d87028]">
                              {selectedTrip.discountedPrice}
                            </span>
                          </p>
                        </div>
        
                        <button className="bg-[#d87028] hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-full">
                          VIEW TRIPss
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
      </div>
    </section>
  );
};

export default KilimanjaroTrekking;
