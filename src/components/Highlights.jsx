

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Highlights = ({ title, trips }) => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  return (
    <section className="w-full py-16 bg-white relative">
      <div className="px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto">

        {/* Title + Navigation */}
        <div className="relative flex items-center justify-center mb-10">

          {title && (
            <h2 className="text-2xl md:text-3xl text-center font-bold w-full capitalize">
              {title}
            </h2>
          )}

          {/* Navigation Arrows */}
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

        {/* Swiper Slider */}
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
                "></span>`,
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
          className="pb-12"
        >
          {trips?.map((trip) => (
            <SwiperSlide key={trip.id} className=" h-auto">
              <div className="rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-300 mb-4 flex flex-col">

                {/* Image */}
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-[160px] object-cover"
                />

                {/* Content */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <h3 className="text-xl mb-4 leading-tight">
                    {trip.title}
                  </h3>

                  <p className="text-[16px] text-center mb-4">
                    {trip.description}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="custom-pagination flex justify-center mt-6"></div>

        {/* Pagination Active Style */}
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
      </div>
    </section>
  );
};

export default Highlights;
