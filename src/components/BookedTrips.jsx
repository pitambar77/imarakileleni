// import React, { useState, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import {
//   FaStar,
//   FaSearchPlus,
//   FaCalendarAlt,
//   FaMapMarkerAlt,
//   FaGlobe,
// } from "react-icons/fa";
// import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
// import { MdOutlineSavedSearch } from "react-icons/md";
// import { IoClose } from "react-icons/io5";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

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
//       "https://tanzania-horizon.com/wp-content/uploads/2021/09/2020-01-23-Mathias-Pfauwadel-Pictures-165-1-1024x719.jpg",
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
//       "https://wildrhythmsafaris.com/wp-content/uploads/2025/05/Wildrhytms-Safaris-265.webp",
//     title: "Big Drop. Low Prices.",
//     promo: true,
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
//       "https://wildrhythmsafaris.com/wp-content/uploads/2025/05/Wildrhytms-Safaris-265.webp",
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
//       "https://naturetravelafrica.com/wp-content/uploads/2020/04/Tanzania.jpg",
//     title: "Big Drop. Low Prices.",
//     promo: true,
//   },
//   {
//     id: 4,
//     image:
//       "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
//     title: "Wildlife Budget Cultural Fly in",
//     days: "11 Days",
//     places: "5 Places",
//     country: "1 Country",
//     rating: 4.7,
//     discountedPrice: "$2,415",
//     description:
//       "The one that gives you the ultimate Greek Island experience exploring Mykonos, Paros, Santorini and Ios",
//   },
// ];

// const BookedTrips = () => {
//   const [selectedTrip, setSelectedTrip] = useState(null);
//   const swiperNavPrevRef = useRef(null);
//   const swiperNavNextRef = useRef(null);

//   const openModal = (trip) => setSelectedTrip(trip);
//   const closeModal = () => setSelectedTrip(null);

//   return (
//     <section className="w-full py-16 bg-white relative">
//       <div className="px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto ">
//         <div className="relative flex items-center justify-center mb-10">
//           {/* Centered Title */}
//           <h2 className="text-2xl md:text-3xl text-center font-bold w-full capitalize">
//             Explore Our Signature Tours
//           </h2>

//           {/* Right-side navigation buttons */}
//           <div className=" hidden md:block absolute right-0 flex items-center space-x-3">
//             <button
//               ref={swiperNavPrevRef}
//               className="swiper-button-prev-custom bg-white border border-gray-300 text-gray-800 rounded-full p-3 hover:bg-gray-100 shadow-sm transition"
//             >
//               <FaArrowLeftLong />
//             </button>
//             <button
//               ref={swiperNavNextRef}
//               className="swiper-button-next-custom bg-white border border-gray-300 text-gray-800 rounded-full p-3 hover:bg-gray-100 shadow-sm transition"
//             >
//               <FaArrowRight />
//             </button>
//           </div>
//         </div>

//         {/* Swiper Section */}
//         <Swiper
//           modules={[Navigation, Pagination]}
//           spaceBetween={24}
//           slidesPerView={1.1}
//           // pagination={{ clickable: true }}

//           pagination={{
//             clickable: true,
//             el: ".custom-pagination",
//             renderBullet: (index, className) =>
//               `<span class="${className}"
//         style="
//           display:inline-block;
//           width:8px;
//           height:8px;
//           background-color:#c4c4c4;
//           border-radius:50%;
//           margin:0 6px;
//           transition:all 0.35s ease;

//         ">
//       </span>`,
//           }}
//           breakpoints={{
//             640: { slidesPerView: 1.5 },
//             768: { slidesPerView: 2.5 },
//             1024: { slidesPerView: 4 },
//           }}
//           onBeforeInit={(swiper) => {
//             // Link unique navigation buttons to this swiper instance
//             swiper.params.navigation.prevEl = swiperNavPrevRef.current;
//             swiper.params.navigation.nextEl = swiperNavNextRef.current;
//             swiper.params.pagination.el = ".custom-pagination";
//           }}
//           navigation={{
//             prevEl: swiperNavPrevRef.current,
//             nextEl: swiperNavNextRef.current,
//           }}
//           className="pb-12 custom-swiper"
//         >
//           {trips.map((trip) => (
//             <SwiperSlide key={trip.id}>
//               {trip.promo ? (
//                 <div className="rounded-sm overflow-hidden bg-white shadow-md flex flex-col justify-center items-center text-center h-[480px] relative ">
//                   <img
//                     src={trip.image}
//                     alt={trip.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 flex flex-col justify-center  items-center text-black">
//                     <img
//                       src="https://www.contiki.com/media/5iwe4eo4/lockup_black_friday.svg?width=426&height=139&mode=max"
//                       alt=""
//                     />
//                     {/* <h3 className="font-bold text-lg mb-2 text-white ">
//                       Big Drop. Low Prices.
//                     </h3> */}
//                     <p className="text-lg mb-2 text-white">
//                       Book today for the best price (tomorrow won’t be cheaper)
//                     </p>
//                     <button className="bg-[#d87028] hover:bg-orange-700 text-white font-semibold text-sm px-6 py-2 rounded-full mt-2 shadow">
//                       BOOK NOW
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-300 mb-4 h-[480px]">
//                   <div className="relative">
//                     <img
//                       src={trip.image}
//                       alt={trip.title}
//                       className="w-full h-40 object-cover"
//                     />
//                     <button
//                       onClick={() => openModal(trip)}
//                       className="absolute bottom-3 left-3 bg-white text-xs px-2 py-1 rounded shadow-sm hover:bg-gray-100 transition"
//                     >
//                       <span className=" flex items-center font-semibold gap-0.5"><MdOutlineSavedSearch className=" text-xl "/>QUICK VIEW</span>

//                     </button>
//                   </div>

//                   <div className="p-5">
//                     <div className="flex items-center text-yellow-500 mb-1">
//                       {Array.from({ length: 5 }).map((_, i) => (
//                         <FaStar key={i} size={14} />
//                       ))}
//                       <span className="text-black ml-2 font-semibold">
//                         {trip.rating}
//                       </span>
//                     </div>

//                     <h3 className=" text-xl mb-6 leading-tight">
//                       {trip.title}
//                     </h3>

//                     <div className="text-sm flex flex-wrap items-center gap-3 mb-3">
//                       <span className="flex items-center gap-1 ">
//                         <FaCalendarAlt /> <p className=" mt-1">{trip.days}</p>
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <FaMapMarkerAlt />
//                         <p className=" mt-1"> {trip.places}</p>
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <FaGlobe />{" "}
//                         <p className=" mt-1">
//                           <u className="">{trip.country}</u>
//                         </p>
//                       </span>
//                     </div>

//                     <p className=" text-[16px] mb-8 line-clamp-3">
//                       {trip.description}
//                     </p>

//                     <div className=" mb-2 flex justify-between  items-center ">
//                       <div className="text-xs text-gray-600">
//                         {trip.standardPrice && (
//                           <h3 className="text-xs mb-2">
//                             Standard Price <br /> {trip.standardPrice}
//                           </h3>
//                         )}
//                         <h3 className="font-bold text-sm text-black">
//                           From <span className="">{trip.discountedPrice}</span>
//                         </h3>
//                       </div>
//                       <button className="bg-[#d87028] hover:bg-orange-700 text-white  text-sm px-6 py-2 rounded-full mt-2 w-fit">
//                         VIEW TRIP
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* ✅ Pagination Dots */}
//         <div
//           className="custom-pagination flex justify-center mt-6"
//           style={{
//             position: "relative",
//             bottom: "0px",
//             textAlign: "center",
//           }}
//         ></div>

//         {/* ✅ Inline CSS for active dot + animation */}
//         <style>
//           {`
//   .custom-pagination .swiper-pagination-bullet-active {
//     background-color: #4a5464 !important;
//     width: 12px !important;
//     height: 12px !important;
//     transform: scale(1.3);
//     transition: all 0.35s ease;
//   }
// `}
//         </style>

//         {/* View All Trips Button */}
//         <div className="flex justify-center mt-10">
//           <button className="bg-[#d87028] hover:bg-orange-700 text-white font-semibold text-base px-8 py-3 rounded-full transition shadow">
//             VIEW ALL TRIPS
//           </button>
//         </div>
//       </div>

//       {/* Quick View Modal */}
//       {selectedTrip && (
//         <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
//           <div className="bg-white w-[90%] md:w-[700px] rounded-xl shadow-lg overflow-hidden relative animate-fadeIn">
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

//               <div className="text-sm mb-4 ">
//                 {selectedTrip.standardPrice && (
//                   <p>Standard Price {selectedTrip.standardPrice}</p>
//                 )}
//                 <p className="font-bold text-black">
//                   From{" "}
//                   <span className="bg-[#d87028]">
//                     {selectedTrip.discountedPrice}
//                   </span>
//                 </p>

//                 <button className="bg-[#d87028] hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-full">
//                   VIEW TRIP
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// // export default BookedTrips;

// import React, { useState, useRef, useEffect, useMemo } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import {
//   FaStar,
//   FaCalendarAlt,
//   FaMapMarkerAlt,
//   FaGlobe,
// } from "react-icons/fa";
// import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
// import { MdOutlineSavedSearch } from "react-icons/md";
// import { IoClose } from "react-icons/io5";
// import API from "../api/axios.js";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const BookedTrips = () => {
//   const [trips, setTrips] = useState([]);
//   const [selectedTrip, setSelectedTrip] = useState(null);

//   const swiperNavPrevRef = useRef(null);
//   const swiperNavNextRef = useRef(null);

//   /* ================= FETCH PACKAGES ================= */
//   useEffect(() => {
//     const fetchTrips = async () => {
//       try {
//         const res = await API.get("/packages");
//         setTrips(res.data || []);
//       } catch (err) {
//         console.error("Failed to fetch packages", err);
//       }
//     };

//     fetchTrips();
//   }, []);

//   /* ================= FILTER TANZANIA ================= */
//   const tanzaniaTrips = useMemo(() => {
//     return trips.filter(
//       (trip) =>
//         trip.destination &&
//         trip.destination.toLowerCase() === "tanzania"
//     );
//   }, [trips]);

//   /* ================= OPTIONAL PROMO INSERT ================= */
//   const mergedTrips = useMemo(() => {
//     if (!tanzaniaTrips.length) return [];

//     return [
//       ...tanzaniaTrips.slice(0, 2),
//       { promo: true, id: "promo" },
//       ...tanzaniaTrips.slice(2),
//     ];
//   }, [tanzaniaTrips]);

//   const openModal = (trip) => setSelectedTrip(trip);
//   const closeModal = () => setSelectedTrip(null);

//   if (!mergedTrips.length) return null;

//   return (
//     <section className="w-full py-16 bg-white relative">
//       <div className="px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto">

//         {/* ================= HEADER ================= */}
//         <div className="relative flex items-center justify-center mb-10">
//           <h2 className="text-2xl md:text-3xl text-center font-bold w-full capitalize">
//             Explore Our Signature Tours
//           </h2>

//           <div className="hidden md:block absolute right-0 flex items-center space-x-3">
//             <button
//               ref={swiperNavPrevRef}
//               className="bg-white border border-gray-300 rounded-full p-3 shadow-sm"
//             >
//               <FaArrowLeftLong />
//             </button>
//             <button
//               ref={swiperNavNextRef}
//               className="bg-white border border-gray-300 rounded-full p-3 shadow-sm"
//             >
//               <FaArrowRight />
//             </button>
//           </div>
//         </div>

//         {/* ================= SWIPER ================= */}
//         <Swiper
//           modules={[Navigation, Pagination]}
//           spaceBetween={24}
//           slidesPerView={1.1}
//           pagination={{
//             clickable: true,
//             el: ".custom-pagination",
//           }}
//           breakpoints={{
//             640: { slidesPerView: 1.5 },
//             768: { slidesPerView: 2.5 },
//             1024: { slidesPerView: 4 },
//           }}
//           onBeforeInit={(swiper) => {
//             swiper.params.navigation.prevEl = swiperNavPrevRef.current;
//             swiper.params.navigation.nextEl = swiperNavNextRef.current;
//             swiper.params.pagination.el = ".custom-pagination";
//           }}
//           navigation={{
//             prevEl: swiperNavPrevRef.current,
//             nextEl: swiperNavNextRef.current,
//           }}
//           className="pb-12"
//         >
//           {mergedTrips.map((trip, index) => (
//             <SwiperSlide key={trip._id || trip.id || index}>
//               {trip.promo ? (
//                 /* ================= PROMO CARD ================= */
//                 <div className="rounded-sm overflow-hidden bg-white shadow-md flex flex-col justify-center items-center text-center h-[480px] relative">
//                   <img
//                     src="https://naturetravelafrica.com/wp-content/uploads/2020/04/Tanzania.jpg"
//                     alt="Promo"
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/30">
//                     <p className="text-lg mb-2 text-white">
//                       Book today for the best price
//                     </p>
//                     <button className="bg-[#d87028] text-white px-6 py-2 rounded-full">
//                       BOOK NOW
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 /* ================= TRIP CARD ================= */
//                 <div className="rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-lg transition mb-4 h-[480px] flex flex-col">
//                   <div className="relative">
//                     <img
//                       src={trip.image}
//                       alt={trip.title}
//                       className="w-full h-40 object-cover"
//                     />
//                     <button
//                       onClick={() => openModal(trip)}
//                       className="absolute bottom-3 left-3 bg-white text-xs px-2 py-1 rounded shadow-sm"
//                     >
//                       <span className="flex items-center font-semibold gap-1">
//                         <MdOutlineSavedSearch className="text-lg" />
//                         QUICK VIEW
//                       </span>
//                     </button>
//                   </div>

//                   <div className="p-5 flex flex-col flex-1">
//                     <h3 className="text-xl mb-4 leading-tight">
//                       {trip.title}
//                     </h3>

//                     <div className="text-sm flex flex-wrap items-center gap-3 mb-3">
//                       <span className="flex items-center gap-1">
//                         <FaCalendarAlt /> {trip.accomoDay}
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <FaMapMarkerAlt /> {trip.itinerary?.length || 0} Stops
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <FaGlobe /> Tanzania
//                       </span>
//                     </div>

//                     <p className="text-[16px] mb-6 line-clamp-3 flex-1">
//                       {trip.description}
//                     </p>

//                     <div className="flex justify-between items-center mt-auto">
//                       <div className="text-xs text-gray-600">
//                         <h3 className="font-bold text-sm text-black">
//                           {trip.price}
//                         </h3>
//                       </div>

//                       <button className="bg-[#d87028] text-white text-sm px-6 py-2 rounded-full">
//                         VIEW TRIP
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* ================= PAGINATION ================= */}
//         <div className="custom-pagination flex justify-center mt-6"></div>

//         {/* ================= VIEW ALL ================= */}
//         <div className="flex justify-center mt-10">
//           <button className="bg-[#d87028] text-white px-8 py-3 rounded-full">
//             VIEW ALL TRIPS
//           </button>
//         </div>
//       </div>

//       {/* ================= QUICK VIEW MODAL ================= */}
//       {selectedTrip && (
//         <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
//           <div className="bg-white w-[90%] md:w-[700px] rounded-xl shadow-lg overflow-hidden relative">
//             <button
//               onClick={closeModal}
//               className="absolute top-3 right-3 text-gray-600"
//             >
//               <IoClose size={28} />
//             </button>

//             <img
//               src={selectedTrip.image}
//               alt={selectedTrip.title}
//               className="w-full h-64 object-cover"
//             />

//             <div className="p-6">
//               <h3 className="text-2xl font-bold mb-2">
//                 {selectedTrip.title}
//               </h3>
//               <p className="text-gray-700 mb-4">
//                 {selectedTrip.description}
//               </p>

//               <button className="bg-[#d87028] text-white px-6 py-2 rounded-full">
//                 VIEW TRIP
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default BookedTrips;

//corected work

import React, { useState, useRef, useEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaCalendarAlt, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { MdOutlineSavedSearch } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import API from "../api/axios.js";
import { slugify } from "../utils/slugify.js";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BookedTrips = () => {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);

  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  const navigate = useNavigate();

  /* ================= FETCH PACKAGES ================= */
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const res = await API.get("/packages");
        setTrips(res.data || []);
      } catch (err) {
        console.error("Failed to fetch packages", err);
      }
    };
    fetchTrips();
  }, []);

  /* ================= FILTER TANZANIA ================= */
  const tanzaniaTrips = useMemo(() => {
    return trips.filter(
      (trip) =>
        trip.destination && trip.destination.toLowerCase() === "tanzania"
    );
  }, [trips]);

  if (!tanzaniaTrips.length) return null;

  return (
    <section className="w-full py-16 bg-white relative">
      <div className="px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto">
        {/* ================= HEADER ================= */}
        <div className="relative flex items-center justify-center mb-10">
          <h2 className="text-2xl md:text-3xl text-center font-bold w-full capitalize">
            Explore Our Signature Tours
          </h2>

          <div className="hidden md:flex absolute right-0 gap-3 ">
            <button
              ref={swiperNavPrevRef}
              className="bg-white border border-gray-300 rounded-full p-3 shadow-sm cursor-pointer"
            >
              <FaArrowLeftLong />
            </button>
            <button
              ref={swiperNavNextRef}
              className="bg-white border border-gray-300 rounded-full p-3 shadow-sm cursor-pointer"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* ================= SWIPER ================= */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1.1}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4 },
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperNavPrevRef.current;
            swiper.params.navigation.nextEl = swiperNavNextRef.current;
            swiper.params.pagination.el = ".custom-pagination";
          }}
          navigation={{
            prevEl: swiperNavPrevRef.current,
            nextEl: swiperNavNextRef.current,
          }}
          className="pb-12"
        >
          {tanzaniaTrips.map((trip) => (
            <SwiperSlide key={trip._id}>
              <div className="h-[460px] mb-4 bg-white shadow-sm hover:shadow-lg transition flex flex-col">
                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-40 object-cover"
                  />
                  <button
                    onClick={() => setSelectedTrip(trip)}
                    className="absolute bottom-3 left-3 bg-white text-xs px-2 py-1 rounded shadow-sm"
                  >
                    <span className="flex items-center cursor-pointer font-semibold gap-1">
                      <MdOutlineSavedSearch className="text-lg" />
                      QUICK VIEW
                    </span>
                  </button>
                </div>

                {/* CONTENT */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-xl mb-6 leading-tight">{trip.title}</h3>

                  <div className="text-sm flex flex-wrap gap-3 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt /> {trip.accomoDay}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt /> {trip.itinerary?.length || 0} Stops
                    </span>
                    <span className="flex items-center gap-1">
                      <FaGlobe /> Tanzania
                    </span>
                  </div>

                  {/* ✅ CLAMPED DESCRIPTION */}
                  <p className="text-[16px] line-clamp-3 mb-4">
                    {trip.description}
                  </p>

                  {/* Spacer pushes footer down */}
                  <div className="flex-grow" />

                  {/* FOOTER */}
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-sm text-black">
                      {trip.price}
                    </h3>

                    <button
                      onClick={() =>
                        navigate(`/package/${slugify(trip.title)}`)
                      }
                      className="bg-[#d87028] text-white cursor-pointer text-sm px-6 py-2 rounded-full"
                    >
                      VIEW TRIP
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Pagination Dots */}
        <div
          className="custom-pagination flex justify-center mt-6"
          style={{
            position: "relative",
            bottom: "0px",
            textAlign: "center",
          }}
        ></div>

        {/* ✅ Inline CSS for active dot + animation */}
        <style>
          {`
  .custom-pagination .swiper-pagination-bullet-active {
    background-color: #4a5464 !important;
    width: 12px !important;
    height: 12px !important;
    transform: scale(1.3);
    transition: all 0.35s ease;
  }
`}
        </style>

        {/* <div className="custom-pagination flex justify-center mt-6" /> */}

        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate("/tanzania-safaris")}
            className="bg-[#d87028] text-white px-8 py-3 cursor-pointer rounded-full"
          >
            VIEW ALL TRIPS
          </button>
        </div>
      </div>

      {/* ================= QUICK VIEW MODAL ================= */}
      {/* {selectedTrip && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] md:w-[700px] rounded-xl overflow-hidden relative">
            <button
              onClick={() => setSelectedTrip(null)}
              className="absolute top-3 right-3"
            >
              <IoClose size={28} />
            </button>

            <img
              src={selectedTrip.image}
              alt={selectedTrip.title}
              className="w-full h-96 object-cover bg-black"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedTrip.title}</h3>
              <p className="text-gray-700 mb-4">{selectedTrip.description}</p>

              <button
                onClick={() =>
                  navigate(
                    `/package/${slugify(selectedTrip.title)}-${
                      selectedTrip._id
                    }`
                  )
                }
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
     
      <button
        onClick={() => setSelectedTrip(null)}
        className="absolute top-3 right-3 z-10 bg-white/80 rounded-full p-1"
      >
        <IoClose size={28} />
      </button>

      
      <div className="w-full h-[250px] sm:h-[300px] md:h-[420px] bg-black">
        <img
          src={selectedTrip.image}
          alt={selectedTrip.title}
          className="w-full h-full object-cover"
        />
      </div>

     
      <div className="p-6 overflow-y-auto flex-1">
        <h3 className="text-2xl font-bold mb-2">
          {selectedTrip.title}
        </h3>

        <p className="text-gray-700 mb-6 leading-relaxed">
          {selectedTrip.description}
        </p>

        <button
          onClick={() =>
            navigate(
              `/package/${slugify(selectedTrip.title)}`
            )
          }
          className="bg-[#d87028] text-white px-6 py-2 rounded-full"
        >
          VIEW TRIP
        </button>
      </div>
    </div>
  </div>
)}

    </section>
  );
};

export default BookedTrips;
