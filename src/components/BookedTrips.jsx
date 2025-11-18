import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaStar, FaCalendarAlt, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const trips = [
  {
    id: 1,
    image:
      "https://africanscenicsafaris.com/assests/images/tanzania-safari-tours-banner.webp",
    title: "Tanzania Safari Adventure",
    days: "3 Days",
    places: "5 Places",
    country: "1 Country",
    rating: 4.8,
    standardPrice: "$2,075",
    discountedPrice: "$1,868",
    description:
      "The one that sees you swish through the scenic south island kicking off in Christchurch",
  },
  {
    id: 2,
    image:
      "https://kilimanjarofairdeal.com/wp-content/uploads/2023/12/family-3.jpg",
    title: "Tanzania Family Safaris",
    days: "8 Days",
    places: "3 Places",
    country: "1 Country",
    rating: 4.6,
    standardPrice: "$1,235",
    discountedPrice: "$1,050",
    description:
      "The one that takes you to west Thailand for a tour of Phuket, Koh Phi Phi, Krabi & other faves...",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    title: "Big Drop. Low Prices.",
    promo: true,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
    title: "Wildlife Budget Cultural Fly in ",
    days: "11 Days",
    places: "5 Places",
    country: "1 Country",
    rating: 4.7,
    discountedPrice: "$2,415",
    description:
      "The one that gives you the ultimate Greek Island experience exploring Mykonos, Paros, Santorini and Ios",
  },
  {
    id: 1,
    image:
      "https://africanscenicsafaris.com/assests/images/tanzania-safari-tours-banner.webp",
    title: "Tanzania Safari Adventure",
    days: "3 Days",
    places: "5 Places",
    country: "1 Country",
    rating: 4.8,
    standardPrice: "$2,075",
    discountedPrice: "$1,868",
    description:
      "The one that sees you swish through the scenic south island kicking off in Christchurch",
  },
  {
    id: 2,
    image:
      "https://ntandusafaris.com/wp-content/uploads/2024/12/Lion-Banner.webp",
    title: "Tanzania Family Safaris",
    days: "8 Days",
    places: "3 Places",
    country: "1 Country",
    rating: 4.6,
    standardPrice: "$1,235",
    discountedPrice: "$1,050",
    description:
      "The one that takes you to west Thailand for a tour of Phuket, Koh Phi Phi, Krabi & other faves...",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    title: "Big Drop. Low Prices.",
    promo: true,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
    title: "Wildlife Budget Cultural Fly in",
    days: "11 Days",
    places: "5 Places",
    country: "1 Country",
    rating: 4.7,
    discountedPrice: "$2,415",
    description:
      "The one that gives you the ultimate Greek Island experience exploring Mykonos, Paros, Santorini and Ios",
  },
];

const BookedTrips = () => {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  const openModal = (trip) => setSelectedTrip(trip);
  const closeModal = () => setSelectedTrip(null);

  return (
    <section className="w-full py-16 bg-white relative">
      <div className="px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto ">
        {/* Title + Navigation Buttons */}
        <div className="relative flex items-center justify-center mb-10">
          {/* Centered Title */}
          <h2 className="text-2xl md:text-3xl text-center font-bold w-full capitalize">
            Booked while you were scrolling
          </h2>

          {/* Right-side navigation buttons */}
          <div className="absolute right-0 flex items-center space-x-3">
            <button
              ref={swiperNavPrevRef}
              className="swiper-button-prev-custom bg-white border border-gray-300 text-gray-800 rounded-full p-3 hover:bg-gray-100 shadow-sm transition"
            >
              <FaArrowLeftLong />
            </button>
            <button
              ref={swiperNavNextRef}
              className="swiper-button-next-custom bg-white border border-gray-300 text-gray-800 rounded-full p-3 hover:bg-gray-100 shadow-sm transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Swiper Section */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1.1}
          // pagination={{ clickable: true }}

          pagination={{
    clickable: true,
    el: ".custom-pagination",
    renderBullet: (index, className) =>
      `<span class="${className}" 
        style="
          display:inline-block;
          width:8px;
          height:8px;
          background-color:#c4c4c4;
          border-radius:50%;
          margin:0 6px;
          transition:all 0.35s ease;
          
        ">
      </span>`,
  }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4 },
          }}
          onBeforeInit={(swiper) => {
            // Link unique navigation buttons to this swiper instance
            swiper.params.navigation.prevEl = swiperNavPrevRef.current;
            swiper.params.navigation.nextEl = swiperNavNextRef.current;
            swiper.params.pagination.el = ".custom-pagination";
          }}
          navigation={{
            prevEl: swiperNavPrevRef.current,
            nextEl: swiperNavNextRef.current,
          }}
          className="pb-12 custom-swiper"
        >
          {trips.map((trip) => (
            <SwiperSlide key={trip.id}>
              {trip.promo ? (
                <div className="rounded-sm overflow-hidden bg-white shadow-md flex flex-col justify-center items-center text-center h-[480px] relative ">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center  items-center text-black">
                    <h3 className="font-bold text-lg mb-2 text-white ">
                      Big Drop. Low Prices.
                    </h3>
                    <button className="bg-[#d87028] hover:bg-orange-700 text-white font-semibold text-sm px-6 py-2 rounded-full mt-2 shadow">
                      BOOK NOW
                    </button>
                  </div>
                </div>
              ) : (
                <div className="rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-300 mb-4 h-[480px]">
                  <div className="relative">
                    <img
                      src={trip.image}
                      alt={trip.title}
                      className="w-full h-40 object-cover"
                    />
                    <button
                      onClick={() => openModal(trip)}
                      className="absolute bottom-3 left-3 bg-white text-xs font-semibold px-3 py-1 rounded shadow-sm hover:bg-gray-100 transition"
                    >
                      🔍 QUICK VIEW
                    </button>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center text-yellow-500 mb-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar key={i} size={14} />
                      ))}
                      <span className="text-black ml-2 font-semibold">
                        {trip.rating}
                      </span>
                    </div>

                    <h3 className=" text-xl mb-6 leading-tight">
                      {trip.title}
                    </h3>

                    <div className="text-sm flex flex-wrap items-center gap-3 mb-3">
                      <span className="flex items-center gap-1 ">
                        <FaCalendarAlt /> <p className=" mt-1">{trip.days}</p> 
                      </span>
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt /><p className=" mt-1"> {trip.places}</p>
                      </span>
                      <span className="flex items-center gap-1">
                        <FaGlobe /> <p className=" mt-1"><u className="">{trip.country}</u></p> 
                      </span>
                    </div>

                    <p className=" text-[16px] mb-8 line-clamp-3">
                      {trip.description}
                    </p>

                    <div className=" mb-2 flex justify-between  items-center ">
                      <div className="text-xs text-gray-600">
                        {trip.standardPrice && (
                          <h3 className="text-xs mb-2">
                            Standard Price <br/> {trip.standardPrice}
                          </h3>
                        )}
                        <h3 className="font-bold text-sm text-black">
                          From{" "}
                          <span className="">
                            {trip.discountedPrice}
                          </span>
                        </h3>
                      </div>
                      <button className="bg-[#d87028] hover:bg-orange-700 text-white  text-sm px-6 py-2 rounded-full mt-2 w-fit">
                        VIEW TRIP
                      </button>
                    </div>
                  </div>
                </div>
              )}
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

        {/* View All Trips Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-[#d87028] hover:bg-orange-700 text-white font-semibold text-base px-8 py-3 rounded-full transition shadow">
            VIEW ALL TRIPS
          </button>
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedTrip && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] md:w-[700px] rounded-xl shadow-lg overflow-hidden relative animate-fadeIn">
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

              <div className="text-sm mb-4 ">
                {selectedTrip.standardPrice && (
                  <p>Standard Price {selectedTrip.standardPrice}</p>
                )}
                <p className="font-bold text-black">
                  From{" "}
                  <span className="bg-[#d87028]">
                    {selectedTrip.discountedPrice}
                  </span>
                </p>

                <button className="bg-[#d87028] hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-full">
                  VIEW TRIP
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BookedTrips;



