// import React, { useState } from "react";
// import TripCard from "../../components/TripCard";
// import { IoClose } from "react-icons/io5";
// import { FaStar, FaCalendarAlt, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

// const trips = [
//   {
//     id: 1,
//     image:
//       "https://africanscenicsafaris.com/assests/images/tanzania-safari-tours-banner.webp",
//     title: "Tanzania Safari Adventure",
//     days: "3 Days",
//     places: "5 Places",
//     country: "1 Country",
//     rating: 4.8,
//     standardPrice: "$2,075",
//     discountedPrice: "$1,868",
//     description:
//       "The one that sees you swish through the scenic south island kicking off in Christchurch",
//   },
//   {
//     id: 2,
//     image:
//       "https://kilimanjarofairdeal.com/wp-content/uploads/2023/12/family-3.jpg",
//     title: "Tanzania Family Safaris",
//     days: "8 Days",
//     places: "3 Places",
//     country: "1 Country",
//     rating: 4.6,
//     standardPrice: "$1,235",
//     discountedPrice: "$1,050",
//     description:
//       "The one that takes you to west Thailand for a tour of Phuket, Koh Phi Phi, Krabi & other faves...",
//   },
//   {
//     id: 3,
//     image:
//       "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
//     title: "Big Drop. Low Prices.",
//      days: "3 Days",
//     places: "5 Places",
//     country: "1 Country",
//     rating: 4.8,
//     standardPrice: "$2,075",
//     discountedPrice: "$1,868",
//     description:
//       "The one that sees you swish through the scenic south island kicking off in Christchurch",
//   },
//   {
//     id: 4,
//     image:
//       "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
//     title: "Wildlife Budget Cultural Fly in ",
//     days: "11 Days",
//     places: "5 Places",
//     country: "1 Country",
//     rating: 4.7,
//     discountedPrice: "$2,415",
//     description:
//       "The one that gives you the ultimate Greek Island experience exploring Mykonos, Paros, Santorini and Ios",
//   },
//   {
//     id: 5,
//     image:
//       "https://africanscenicsafaris.com/assests/images/tanzania-safari-tours-banner.webp",
//     title: "Tanzania Safari Adventure",
//     days: "3 Days",
//     places: "5 Places",
//     country: "1 Country",
//     rating: 4.8,
//     standardPrice: "$2,075",
//     discountedPrice: "$1,868",
//     description:
//       "The one that sees you swish through the scenic south island kicking off in Christchurch",
//   },
//   {
//     id: 6,
//     image:
//       "https://kilimanjarofairdeal.com/wp-content/uploads/2023/12/family-3.jpg",
//     title: "Tanzania Family Safaris",
//     days: "8 Days",
//     places: "3 Places",
//     country: "1 Country",
//     rating: 4.6,
//     standardPrice: "$1,235",
//     discountedPrice: "$1,050",
//     description:
//       "The one that takes you to west Thailand for a tour of Phuket, Koh Phi Phi, Krabi & other faves...",
//   },
//   {
//     id: 7,
//     image:
//       "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
//     title: "Big Drop. Low Prices.",
//      days: "3 Days",
//     places: "5 Places",
//     country: "1 Country",
//     rating: 4.8,
//     standardPrice: "$2,075",
//     discountedPrice: "$1,868",
//     description:
//       "The one that sees you swish through the scenic south island kicking off in Christchurch",
//   },
//   {
//     id: 8,
//     image:
//       "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
//     title: "Wildlife Budget Cultural Fly in ",
//     days: "11 Days",
//     places: "5 Places",
//     country: "1 Country",
//     rating: 4.7,
//     discountedPrice: "$2,415",
//     description:
//       "The one that gives you the ultimate Greek Island experience exploring Mykonos, Paros, Santorini and Ios",
//   },
// ];

// const SafariTour = () => {
//   const [selectedTrip, setSelectedTrip] = useState(null);
//   const openModal = (trip) => setSelectedTrip(trip);
//   const closeModal = () => setSelectedTrip(null);

//   return (
//     <section className="w-full py-16 bg-white relative">
//       <div className="px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto">
//         {/* Title */}
//         <h2 className="text-2xl md:text-3xl text-center font-bold mb-4 capitalize">
//           Top Tanzania Safari & tours
//         </h2>
//         <p className=" text-center mb-10 ">
//             Adored by 18-35s worldwide since 1962
//         </p>

//         {/* Grid of Reusable Trip Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {trips.map((trip) => (
//             <TripCard key={trip.id} trip={trip} onQuickView={openModal} />
//           ))}
//         </div>

//         {/* View All Button */}
//         {/* <div className="flex justify-center mt-10">
//           <button className="bg-[#d87028] hover:bg-orange-700 text-white font-semibold text-base px-8 py-3 rounded-full transition shadow">
//             VIEW ALL TRIPS
//           </button>
//         </div> */}
//       </div>

//       {/* Quick View Modal */}
//       {selectedTrip && (
//         <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
//           <div className="bg-white w-[90%] md:w-[700px] rounded-xl shadow-lg overflow-hidden relative">
//             <button
//               onClick={closeModal}
//               className="absolute top-3 right-3 text-gray-600 hover:text-black"
//             >
//               <IoClose size={28} />
//             </button>

//             <img
//               src={selectedTrip.image}
//               alt={selectedTrip.title}
//               className="w-full h-64 object-cover"
//             />

//             <div className="p-6 text-gray-800">
//               <h3 className="text-2xl font-bold mb-2">{selectedTrip.title}</h3>

//               <div className="flex items-center text-yellow-500 mb-3">
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <FaStar key={i} size={16} />
//                 ))}
//                 <span className="text-black ml-2 font-semibold">
//                   {selectedTrip.rating}
//                 </span>
//               </div>

//               <div className="text-sm flex flex-wrap items-center gap-4 mb-3 text-gray-600">
//                 <span className="flex items-center gap-1">
//                   <FaCalendarAlt /> {selectedTrip.days}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <FaMapMarkerAlt /> {selectedTrip.places}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <FaGlobe /> {selectedTrip.country}
//                 </span>
//               </div>

//               <p className="text-gray-700 mb-4">{selectedTrip.description}</p>

//               <div className="text-sm mb-4 flex justify-between items-center">
//                 <div>
//                   {selectedTrip.standardPrice && (
//                     <p>Standard Price <br/> {selectedTrip.standardPrice}</p>
//                   )}
//                   <p className="font-bold text-black">
//                     From{" "}
//                     <span className="text-[#d87028]">
//                       {selectedTrip.discountedPrice}
//                     </span>
//                   </p>
//                 </div>

//                 <button className="bg-[#d87028] hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-full">
//                   VIEW TRIPss
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default SafariTour

import React, { useEffect, useMemo, useState } from "react";
import TripCard from "../../components/TripCard";
import { IoClose } from "react-icons/io5";
import { FaStar, FaCalendarAlt, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import API from "../../api/axios";
import { slugify } from "../../utils/slugify.js";
import { Link, useNavigate } from "react-router-dom";

const SafariTour = () => {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const res = await API.get("/packages"); // 🔁 confirm endpoint
        setTrips(res.data || []);
      } catch (err) {
        console.error("Trip fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  // ✅ FILTER ONLY TANZANIA
  const tanzaniaTrips = useMemo(() => {
    return trips.filter(
      (trip) =>
        trip.destination && trip.destination.trim().toLowerCase() === "tanzania"
    );
  }, [trips]);

  const openModal = (trip) => setSelectedTrip(trip);
  const closeModal = () => setSelectedTrip(null);

  if (loading) {
    return <p className="text-center py-10">Loading tours…</p>;
  }

  return (
    <section className="w-full py-8 md:py-16 bg-white relative">
      <div className="px-4 md:px-10 lg:px-18 2xl:px-28 mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl text-center font-bold mb-4">
          Top Tanzania Safari & Tours
        </h2>
        <p className="text-center mb-10">
          Handpicked safari experiences across Tanzania
        </p>

        {/* Empty State */}
        {tanzaniaTrips.length === 0 && (
          <p className="text-center text-gray-500">
            No Tanzania trips available
          </p>
        )}

        {/* Trips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tanzaniaTrips.map((trip) => (
            <TripCard
              key={trip._id}
              trip={{
                id: trip._id,
                image: trip.image,
                title: trip.title,
                days: trip.accomoDay,
                places: trip.itinerary?.length
                  ? `${trip.itinerary.length} Stops`
                  : "Multiple Places",
                country: "1 Country",

                discountedPrice: trip.price,
                description: trip.description,
              }}
              onQuickView={() => openModal(trip)}
            />
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {/* {selectedTrip && (
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
              className="w-full h-96 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedTrip.title}</h3>

              <p className="text-gray-700 mb-4">{selectedTrip.description}</p>

              <button
                onClick={() => {
                  closeModal();
                  navigate(
                    `/package/${slugify(selectedTrip.title)}`
                  );
                }}
                className="bg-[#d87028] text-white px-6 py-2 cursor-pointer rounded-full"
              >
                VIEW TRIP
              </button>
            </div>
          </div>
        </div>
      )} */}
    {selectedTrip && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-3">
    <div
      className="
        bg-white
        w-full max-w-[700px]
        max-h-[84vh]
        rounded-xl
        overflow-hidden
        relative
        flex flex-col
      "
    >
      {/* Close Button */}
      <button
        onClick={() => setSelectedTrip(null)}
        className="absolute top-3 right-3 z-10 bg-white/80 rounded-full p-1"
      >
        <IoClose size={28} />
      </button>

      {/* Image */}
      <div className="w-full h-[220px] sm:h-[300px] md:h-[420px] bg-black">
        <img
          src={selectedTrip.image}
          alt={selectedTrip.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 overflow-y-auto flex-1">
        <h3 className="text-xl sm:text-2xl font-bold mb-2">
          {selectedTrip.title}
        </h3>

        <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
          {selectedTrip.description}
        </p>

        <Link to={`/package/${slugify(selectedTrip.title)}`}
        
          className="bg-[#d87028] hover:bg-orange-700 transition text-white px-6 py-2 rounded-full w-full sm:w-auto"
        >
          VIEW TRIP
        </Link>
      </div>
    </div>
  </div>
)}

    </section>
  );
};

export default SafariTour;
