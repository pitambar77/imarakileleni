import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../assets/tanzania-banner-5.webp"
import banner2 from "../assets/kilimanjaro-new-banner.webp"
import banner3 from "../assets/zanzibar-banne-newr.webp"
import { Link, useNavigate } from "react-router-dom";

const slides = [
  {
    id: 1,
    image:banner1,
    title: "Tanzania Safaris",
    description:
      "Wild spaces invite travellers into Tanzania’s raw beauty with genuine discovery.",
  },
  {
    id: 2,
    image:banner2,
    title: "Kilimanjaro Climbs",
    description:
      "Guided ascents built on steady expertise, safe pacing, and real mountain insight.",
  },
  {
    id: 3,
    image:banner3,
    title: "Zanzibar Escapes",
    description:
      "Easy coastal days shaped by warm waters, island culture, and quiet rest.",
  },
];

const HeroSlider = () => {

  // const navigate = useNavigate();

  return (
    <section className="relative w-full h-[350px] md:h-[450px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-full custom-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-cover bg-center md:bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
            
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white ">
                <h1 className="text-2xl md:text-5xl mb-4 font-bold uppercase">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-4 md:mb-6 max-w-2xl">
                  {slide.description}
                </p>
                <Link to={'/contact-us'}>
                <button
                // onClick={()=>navigate('/contact-us')}
                 className="bg-[#d87028] hover:bg-orange-700 cursor-pointer text-sm md:[text-17px] text-white font-semibold px-6 py-2 md:py-3 rounded-full transition">
                  SEND AN INQUIRY
                </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev !hidden md:!flex !bg-white !text-gray-800 !rounded-full !p-3 !shadow-md hover:!bg-gray-100 transition">
        <FaArrowLeftLong />
      </div>

      <div className="swiper-button-next !hidden md:!flex !bg-white !text-gray-800 !rounded-full !p-3 !shadow-md hover:!bg-gray-100 transition">
        <FaArrowRight />
      </div>
    </section>

  );
};

export default HeroSlider;
