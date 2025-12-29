// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import PrimaryButton from "./PrimaryButton";

// const slides = [
//   {
//     id: 1,
//     image:
//       "https://www.expertafrica.com/images/animal/0863be9189c648fea7ed2f3bb48cddc6.jpg",
//     title: "EXPLORE TANZANIA",
//     description:
//       "More than just another trip, an African safari is the beginning of a love affair with all things wild...",
//   },
//   {
//     id: 2,
//     image:
//       "https://images.goway.com/production/featured_images/gt_africa_cheetah_iStock-532180152%20copy.jpg?VersionId=CEfF267IuT89Oh5tPMSpbvFE1beoOI9G",
//     title: "DISCOVER KENYA",
//     description:
//       "Experience the heart of Africa with breathtaking landscapes and wildlife.",
//   },
//   {
//     id: 3,
//     image:
//       "https://thewanderers.travel/wp-content/uploads/2024/07/10-days-southern-tanzania-safari-banner.webp",
//     title: "SAFARI ADVENTURES",
//     description:
//       "Step into the wild and let nature's beauty take your breath away.",
//   },
// ];

// const HeroSlider = () => {
//   return (
//     <section className="relative w-full h-[64vh] 2xl:h-[50vh]">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop
//         className="h-full custom-swiper"
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div
//               className="relative w-full h-full bg-cover bg-center"
//               style={{ backgroundImage: `url(${slide.image})` }}
//             >
//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/30" />

//               {/* Text Content */}
//               <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
//                 <h2 className="text-4xl md:text-6xl  mb-4">{slide.title}</h2>
//                 <p className="text-lg md:text-xl mb-6 max-w-2xl">
//                   {slide.description}
//                 </p>
//                 <button className="bg-[#d87028] hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-full transition">
//                   SEND AN INQUIRY
//                 </button>
                
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Navigation Buttons */}
//       <div className=" hidden md:flex swiper-button-prev !bg-white !text-gray-800 !rounded-full !p-3 !shadow-md hover:!bg-gray-100 transition">
//         <FaArrowLeftLong />
//       </div>
//       <div className=" hidden md:flex swiper-button-next !bg-white !text-gray-800 !rounded-full !p-3 !shadow-md hover:!bg-gray-100 transition">
//         <FaArrowRight />
//       </div>
//     </section>
//   );
// };

// export default HeroSlider;

// responsive 


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../assets/imara-home-banner-1.webp"
import banner2 from "../assets/kilimanjaro-imara-home.webp"
import banner3 from "../assets/zanzibar-imara-home.webp"
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[40vh] md:h-[64vh] 2xl:h-[50vh]">
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
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
                <h2 className="text-2xl md:text-5xl mb-4 font-bold uppercase">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-6 max-w-2xl">
                  {slide.description}
                </p>
                <button
                onClick={()=>navigate('/contact-us')}
                 className="bg-[#d87028] hover:bg-orange-700 cursor-pointer text-white font-semibold px-6 py-2 md:py-3 rounded-full transition">
                  SEND AN INQUIRY
                </button>
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
