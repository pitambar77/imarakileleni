// import React, { useState } from "react";
// import {
//   FaStar,
//   FaCalendarAlt,
//   FaInfo,
//   FaMapMarkerAlt,
//   FaGlobe,
//   FaInfoCircle,
// } from "react-icons/fa";
// import TripCard from "../../components/TripCard";
// import { IoClose } from "react-icons/io5";


// const trips = [
//   {
//     id: 1,
//     image:
//       "https://www.contiki.com/media/azyfwhto/thailand2024_brandshoot-095-1-7.jpg?center=0.5%2C0.5&format=webp&mode=crop&width=1920&height=1720&quality=80",
//     title: "Thai Island Hopper West",
//     rating: 4.6,
//     days: "8 Days",
//     places: "3 Places",
//     country: "1 Country",
//     standardPrice: "$1,235",
//     discountedPrice: "$1,050",
//     description:
//       "The one that takes you to west Thailand for a tour of Phuket, Koh Phi Phi, Krabi & other faves...",
//   },
//   {
//     id: 2,
//     image:
//       "https://www.trafalgar.com/media/by3ihnoz/arc-de-triomphe-paris-france-3.jpg?crop=0%2C0.25%2C0%2C0&cropmode=percentage&format=webp&mode=crop&width=800&height=450&quality=80",
//     title: "European Whirl",
//     rating: 4.7,
//     days: "19 Days",
//     places: "6 Places",
//     country: "8 Countries",
//     discountedPrice: "$3,425",
//     description:
//       "The one that combines urban parties, ancient history and mountain beauty in 19 days",
//   },
//   {
//     id: 3,
//     image: "https://www.contiki.com/media/z05l51pp/0119eurs2022-8.jpg",
//     title: "Croatia Island Sail",
//     rating: 4.5,
//     days: "8 Days",
//     places: "6 Places",
//     country: "1 Country",
//     standardPrice: "$1,765",
//     discountedPrice: "$1,616",
//     description:
//       "The one that lets you cruise the Dalmatian Coastline & go Croatian island hopping, from Split to Dubrovnik...",
//     tag: "Sailing",
//   },
//   {
//     id: 4,
//     image:
//       "https://media.bookmundi.com/files/agency/trafalgar/cropped/products/6c91c4d5-ffd0-4f02-ab96-f8412e06fc7e.jpg?format=auto&quality=60&width=960",
//     title: "Great Britain and Ireland",
//     rating: 4.8,
//     days: "18 Days",
//     places: "31 Places",
//     country: "5 Countries",
//     discountedPrice: "$3,832",
//     description:
//       "The one that shows you Britain’s best hotspots, topped off with The Emerald Isles",
//   },
// ];

// const KilimanjaroTrekking = () => {
//   const [selectedTrip, setSelectedTrip] = useState(null);
//   const openModal = (trip) => setSelectedTrip(trip);
//   const closeModal = () => setSelectedTrip(null);


//   return (
//     <section className="w-full bg-[#fedec7] py-10 md:py-16">
//       <div className="mx-auto px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28">
//         {/* Title */}
//         <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
//           Trekking Packages for Every Climber
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {trips.map((trip) => (
//             <TripCard key={trip.id} trip={trip} onQuickView={openModal} />
//           ))}
//         </div>

//         {/* Explore Button */}
//         <div className="flex justify-center mt-10">
//           <button className="bg-[#d87028] border border-black hover:bg-orange-700 text-white font-semibold text-base px-8 py-3 rounded-full transition shadow">
//             EXPLORE KILIMANJARAO
//           </button>
//         </div>

//         {/* Quick View Modal */}
//         {selectedTrip && (
//           <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
//             <div className="bg-white w-[90%] md:w-[700px] rounded-xl shadow-lg overflow-hidden relative">
//               <button
//                 onClick={closeModal}
//                 className="absolute top-3 right-3 text-gray-600 hover:text-black"
//               >
//                 <IoClose size={28} />
//               </button>

//               <img
//                 src={selectedTrip.image}
//                 alt={selectedTrip.title}
//                 className="w-full h-64 object-cover"
//               />

//               <div className="p-6 text-gray-800">
//                 <h3 className="text-2xl font-bold mb-2">
//                   {selectedTrip.title}
//                 </h3>

//                 <div className="flex items-center text-yellow-500 mb-3">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <FaStar key={i} size={16} />
//                   ))}
//                   <span className="text-black ml-2 font-semibold">
//                     {selectedTrip.rating}
//                   </span>
//                 </div>

//                 <div className="text-sm flex flex-wrap items-center gap-4 mb-3 text-gray-600">
//                   <span className="flex items-center gap-1">
//                     <FaCalendarAlt /> {selectedTrip.days}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <FaMapMarkerAlt /> {selectedTrip.places}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <FaGlobe /> {selectedTrip.country}
//                   </span>
//                 </div>

//                 <p className="text-gray-700 mb-4">{selectedTrip.description}</p>

//                 <div className="text-sm mb-4 flex justify-between items-center">
//                   <div>
//                     {selectedTrip.standardPrice && (
//                       <p>
//                         Standard Price <br /> {selectedTrip.standardPrice}
//                       </p>
//                     )}
//                     <p className="font-bold text-black">
//                       From{" "}
//                       <span className="text-[#d87028]">
//                         {selectedTrip.discountedPrice}
//                       </span>
//                     </p>
//                   </div>

//                   <button className="bg-[#d87028] hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-full">
//                     VIEW TRIPss
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default KilimanjaroTrekking;


import React, { useEffect, useMemo, useState } from "react";
import TripCard from "../../components/TripCard";
import { IoClose } from "react-icons/io5";
import {
  FaStar,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";
import API from "../../api/axios.js";
import { slugify } from "../../utils/slugify.js";
import { Link, useNavigate } from "react-router-dom";

const KilimanjaroTrekking = () => {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const res = await API.get("/packages");
        setTrips(res.data || []);
      } catch (err) {
        console.error("Trip fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  // ✅ FILTER ONLY KILIMANJARO
const kilimanjaroTrips = useMemo(() => {
  return trips.filter(
    (trip) =>
      trip.destination &&
      trip.destination.toLowerCase() === "kili"
  );
}, [trips]);


  const openModal = (trip) => setSelectedTrip(trip);
  const closeModal = () => setSelectedTrip(null);

  if (loading) {
    return <p className="text-center py-10">Loading trekking tours…</p>;
  }

  return (
    <section className="w-full bg-[#fedec7] py-8 md:py-16 relative">
      <div className="mx-auto px-4 md:px-10 lg:px-16 2xl:px-28">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Trekking Packages For Every Climber
        </h2>

        {/* Empty State */}
        {kilimanjaroTrips.length === 0 && (
          <p className="text-center text-gray-600">
            No Kilimanjaro trekking packages available
          </p>
        )}

        {/* Trips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 sm:gap-4 md:gap-6">
          {kilimanjaroTrips.map((trip) => (
            <TripCard
              key={trip._id}
              trip={{
                id: trip._id,
                image: trip.image,
                title: trip.title,
                days: `${trip.accomoDay}`,
                places: trip.itinerary?.length
                  ? `${trip.itinerary.length} Routes`
                  : "Multiple Routes",
                country: "Tanzania",
                discountedPrice: trip.price,
                description: trip.description,
              }}
              onQuickView={() => openModal(trip)}
            />
          ))}
        </div>

        {/* Explore Button */}
        <div className="flex justify-center mt-10">
          <Link
          to={'/mount-kilimanjaro'}
            // onClick={() => navigate("/mount-kilimanjaro")}
            className="bg-[#d87028] hover:bg-orange-700 cursor-pointer text-white font-semibold px-8 py-3 rounded-full transition shadow"
          >
            EXPLORE KILIMANJARO
          </Link>
        </div>

        {/* Quick View Modal */}
      

        {selectedTrip && (
  <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-3 sm:p-4">
    <div className="bg-white w-full max-w-[700px] max-h-[90vh] rounded-xl shadow-lg overflow-hidden relative flex flex-col">
      
      {/* Close */}
      <button
        onClick={closeModal}
        className="absolute top-3 right-3 z-10 text-gray-600 hover:text-black"
      >
        <IoClose size={26} />
      </button>

      {/* Image */}
      <img
        src={selectedTrip.image}
        alt={selectedTrip.title}
        className="w-full h-40 sm:h-52 md:h-64 object-cover"
      />

      {/* Content */}
      <div className="p-4 sm:p-6 overflow-y-auto">
        <h3 className="text-lg sm:text-2xl font-bold mb-2">
          {selectedTrip.title}
        </h3>

        {/* Stars */}
        <div className="flex items-center text-yellow-500 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} size={14} className="sm:text-base" />
          ))}
        </div>

        {/* Meta */}
        <div className="text-xs sm:text-sm flex flex-wrap gap-3 sm:gap-4 mb-3 text-gray-600">
          <span className="flex items-center gap-1">
            <FaCalendarAlt /> {selectedTrip.accomoDay} Days
          </span>
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt /> Kilimanjaro Routes
          </span>
          <span className="flex items-center gap-1">
            <FaGlobe /> Tanzania
          </span>
        </div>

        <p className="text-sm sm:text-base text-gray-700 mb-4">
          {selectedTrip.description}
        </p>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <p className="font-bold text-sm sm:text-base">
            
            <span className="text-[#d87028]">
              ${selectedTrip.price}
            </span>
          </p>

          <Link to={`/package/${slugify(selectedTrip.title)}`}
            className="bg-[#d87028] hover:bg-[#e5b230] transition text-white px-5 sm:px-6 py-2 rounded-full text-sm sm:text-base"
          >
            VIEW TRIP
          </Link>
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

