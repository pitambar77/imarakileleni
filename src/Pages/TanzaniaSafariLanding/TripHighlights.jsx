import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const trips = [
  {
    id: 1,
    image:
      "https://africanscenicsafaris.com/assests/images/tanzania-safari-tours-banner.webp",
    title: "Tanzania Safari Adventure With Enjoy",

    description:
      "The one that sees you swish through the scenic south island kicking off in Christchurch The one that sees you swish through the scenic south island kicking off in Christchurch This epic 23 day trail through Europe balances all the sightseeing icons with unexpected marvels and underrated destinations. From walking the cobbled streets of Michelangelo's Florence and seeing Paris lit up at night, to being blown away by the",
  },
  {
    id: 2,
    image:
      "https://kilimanjarofairdeal.com/wp-content/uploads/2023/12/family-3.jpg",
    title: "Tanzania Family Safaris",

    description:
      "The one that takes you to west Thailand for a tour of Phuket, Koh Phi Phi, Krabi & other faves This epic 23 day trail through Europe balances all the sightseeing icons with unexpected marvels and underrated destinations. From walking the cobbled streets of Michelangelo's Florence and seeing Paris lit up at night, to being blown away by the",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    title: "Big Drop. Low Prices.",
    description:
      "The one that takes you to west Thailand for a tour of Phuket, Koh Phi Phi, Krabi & other faves This epic 23 day trail through Europe balances all the sightseeing icons with unexpected marvels and underrated destinations. From walking the cobbled streets of Michelangelo's Florence and seeing Paris lit up at night, to being blown away by the",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
    title: "Wildlife Budget Cultural Fly  ",

    description:
      "The one that gives you the ultimate Greek Island experience exploring Mykonos, Paros, Santorini and Ios This epic 23 day trail through Europe balances all the sightseeing icons with unexpected marvels and underrated destinations. From walking the cobbled streets of Michelangelo's Florence and seeing Paris lit up at night, to being blown away by the",
  },
  {
    id: 5,
    image:
      "https://africanscenicsafaris.com/assests/images/tanzania-safari-tours-banner.webp",
    title: "Tanzania Safari Adventure",

    description:
      "The one that sees you swish through the scenic south island kicking off in Christchurch This epic 23 day trail through Europe balances all the sightseeing icons with unexpected marvels and underrated destinations. From walking the cobbled streets of Michelangelo's Florence and seeing Paris lit up at night, to being blown away by the",
  },
  {
    id: 6,
    image:
      "https://ntandusafaris.com/wp-content/uploads/2024/12/Lion-Banner.webp",
    title: "Tanzania Family Safaris",

    description:
      "This epic 23 day trail through Europe balances all the sightseeing icons with unexpected marvels and underrated destinations. From walking the cobbled streets of Michelangelo's Florence and seeing Paris lit up at night, to being blown away by the",
  },
];

const BookedTrips = () => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  return (
    <section className="w-full py-16 bg-white relative">
      <div className="px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto">
        {/* Title + Navigation */}
        <div className="relative flex items-center justify-center mb-10">
          <h2 className="text-2xl md:text-3xl text-center font-bold w-full capitalize">
            Africa & Middle east trip highlights
          </h2>
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
              <div className="trip-card rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-300 mb-4">
                <div className="relative">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="trip-image"
                  />
                </div>

                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className=" text-xl mb-4 leading-tight">
                      {trip.title}
                    </h3>

                    <p className="text-[15px] line-clamp-6 mb-4">
                      {trip.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div
          className="custom-pagination flex justify-center mt-6"
          style={{
            position: "relative",
            bottom: "0px",
            textAlign: "center",
          }}
        ></div>

        {/* Inline CSS */}
        <style>
          {`
            .custom-pagination .swiper-pagination-bullet-active {
              background-color: #4a5464 !important;
              width: 12px !important;
              height: 12px !important;
              transform: scale(1.3);
              transition: all 0.35s ease;
            }

            /* Uniform Card Sizes */
            .trip-card, .promo-card {
              height: 440px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }

            .trip-image {
              height: 160px;
              width: 100%;
              object-fit: cover;
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default BookedTrips;
