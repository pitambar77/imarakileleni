


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image:
      "https://africanscenicsafaris.com/assests/images/tanzania-safari-tours-banner.webp",
    title: "EXPLORE TANZANIA",
    description:
      "More than just another trip, an African safari is the beginning of a love affair with all things wild...",
  },
  {
    id: 2,
    image: "https://yellowzebrasafaris.com/media/46270/wildlife-experiences-on-a-tanzania-safari.jpg?rxy=0.36666666666666664%2C0.41423948220064727&width=2048&height=1024&format=jpg&v=1da5e0fa5e13090",
    title: "DISCOVER KENYA",
    description:
      "Experience the heart of Africa with breathtaking landscapes and wildlife.",
  },
  {
    id: 3,
    image:
      "https://africanscenicsafaris.com/blog/wp-content/uploads/2025/05/off-the-beaten-path-tanzania-safari-packages-you-need-to-experience-banner-scaled.webp",
    title: "SAFARI ADVENTURES",
    description:
      "Step into the wild and let nature's beauty take your breath away.",
  },
];

const HeroSlider = () => {
  return (
    <section className="relative w-full h-[64vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-full custom-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
                <h2 className="text-4xl md:text-6xl  mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-6 max-w-2xl">
                  {slide.description}
                </p>
                <button className="bg-[#d87028] hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-full transition">
                  SEND AN INQUIRY
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev !bg-white !text-gray-800 !rounded-full !p-3 !shadow-md hover:!bg-gray-100 transition">
        <FaArrowLeftLong />
      </div>
      <div className="swiper-button-next !bg-white !text-gray-800 !rounded-full !p-3 !shadow-md hover:!bg-gray-100 transition">
        <FaArrowRight />
      </div>
    </section>
  );
};

export default HeroSlider;
