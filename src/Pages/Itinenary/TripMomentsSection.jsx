// import React, { useState } from "react";
// import { FaExpand, FaTimes } from "react-icons/fa";

// const moments = [
//   {
//     id: 1,
//     image:
//       "https://wakandatanzaniasafari.com/wp-content/uploads/2025/09/tz-safari-1-1024x1024.webp",
//     caption:
//       "23 Days, 13 countries and a lifetime of incredible memories!! Thank you so much to all of these absolute legends for the time of my life!! 👌🏼❤❤ #contiki #eutrail #contikimads #contikipatryk",
//   },
//   {
//     id: 2,
//     image:
//       "https://manoramaseoservice.com/scenic/blog/wp-content/uploads/2025/05/Tanzania-6-682x1024.webp",
//     caption: "AmsterDAMNNNN you were fun 😍☀️",
//   },
//   {
//     id: 3,
//     image:
//       "https://d2g6byanrj0o4m.cloudfront.net/images/61992/dreamstimemedium_185432404__schema.jpg",
//     caption:
//       "Exploring Schönbrunn Palace 🇦🇹 #austria #Vienna #schönbrunn #summer #eutrail #contikihayley",
//   },
//   {
//     id: 4,
//     image:
//       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/ee/ef/29/caption.jpg?w=1200&h=900&s=1",
//     caption: "Making unforgettable memories with my Contiki fam 💛",
//   },
//   {
//     id: 5,
//     image:
//       "https://d2g6byanrj0o4m.cloudfront.net/images/61992/dreamstimemedium_185432404__schema.jpg",
//     caption: "Hiking through the Alps with legends 🏔",
//   },
// ];

// const TripMomentsSection = () => {
//   const [activeImage, setActiveImage] = useState(null);

//   return (
//     <section className="bg-[#fafafa] py-16 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 text-center">
//       {/* Heading */}
//       <h2 className="text-[24px] md:text-[28px] font-extrabold mb-1 text-[#111]">
//         @Contiki moments on this trip
//       </h2>
//       <p className="text-[18px] font-medium text-[#222] mb-12">#eutrail</p>

//       {/* Image Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
//         {moments.map((moment) => (
//           <div
//             key={moment.id}
//             className="relative group overflow-hidden rounded-md cursor-pointer"
//           >
//             {/* Image */}
//             <img
//               src={moment.image}
//               alt={`Moment ${moment.id}`}
//               className="w-full h-[450px] object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
//             />

//             {/* Fullscreen Icon */}
//             <div
//               onClick={() => setActiveImage(moment)}
//               className="absolute top-3 right-3 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition"
//             >
//               <FaExpand className="text-white text-[14px]" />
//             </div>

//             {/* Caption */}
//             <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white text-left px-4 py-3 text-[14px] font-medium">
//               {moment.caption}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {activeImage && (
//         <div className="fixed inset-0 bg-black/80 flex flex-col justify-center items-center z-50">
//           {/* Modal Container */}
//           <div className="bg-[#f6ffd1] rounded-lg shadow-lg max-w-6xl w-[95%] mx-auto p-6 relative flex flex-col md:flex-row gap-6">
//             {/* Close Button */}
//             <button
//               onClick={() => setActiveImage(null)}
//               className="absolute top-3 right-3 text-gray-600 hover:text-black"
//             >
//               <FaTimes size={20} />
//             </button>

//             {/* Left - Image */}
//             <div className="flex-1 flex justify-center items-center">
//               <img
//                 src={activeImage.image}
//                 alt="Selected moment"
//                 className="rounded-lg max-h-[480px] object-contain"
//               />
//             </div>

//             {/* Right - Caption */}
//             <div className="flex-1 text-left flex items-center">
//               <p className="text-[#111] text-[15px] leading-relaxed font-medium">
//                 {activeImage.caption}
//               </p>
//             </div>
//           </div>

//           {/* Thumbnails */}
//           <div className="flex items-center justify-center gap-3 mt-6 overflow-x-auto w-full px-6 pb-3">
//             {moments.map((thumb) => (
//               <img
//                 key={thumb.id}
//                 src={thumb.image}
//                 alt="Thumbnail"
//                 onClick={() => setActiveImage(thumb)}
//                 className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition-all ${
//                   thumb.id === activeImage.id
//                     ? "ring-2 ring-[#d87028] scale-105"
//                     : "opacity-70 hover:opacity-100"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default TripMomentsSection;

import React, { useState, useEffect } from "react";
import {
  FaExpand,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const moments = [
  {
    id: 1,
    image:
      "https://wakandatanzaniasafari.com/wp-content/uploads/2025/09/tz-safari-1-1024x1024.webp",
    caption:
      "23 Days, 13 countries and a lifetime of incredible memories!! Thank you so much to all of these absolute legends for the time of my life!! 👌🏼❤❤ #contiki #eutrail #contikimads #contikipatryk",
  },
  {
    id: 2,
    image:
      "https://manoramaseoservice.com/scenic/blog/wp-content/uploads/2025/05/Tanzania-6-682x1024.webp",
    caption: "AmsterDAMNNNN you were fun 😍☀️",
  },
  {
    id: 3,
    image:
      "https://d2g6byanrj0o4m.cloudfront.net/images/61992/dreamstimemedium_185432404__schema.jpg",
    caption:
      "Exploring Schönbrunn Palace 🇦🇹 #austria #Vienna #schönbrunn #summer #eutrail #contikihayley",
  },
  {
    id: 4,
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/ee/ef/29/caption.jpg?w=1200&h=900&s=1",
    caption: "Making unforgettable memories with my Contiki fam 💛",
  },
  {
    id: 5,
    image:
      "https://d2g6byanrj0o4m.cloudfront.net/images/61992/dreamstimemedium_185432404__schema.jpg",
    caption: "Hiking through the Alps with legends 🏔",
  },
];

const TripMomentsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const openModal = (index) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % moments.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? moments.length - 1 : prev - 1));
  };

  // ✅ Close modal with ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="bg-[#fafafa] py-16 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 text-center">
      {/* Heading */}
      <h2 className="text-[24px] md:text-3xl capitalize font-extrabold mb-1 text-[#111]">
        @Contiki moments on this trip
      </h2>
      <p className="text-[18px] font-medium text-[#222] mb-12">#eutrail</p>

      {/* Image Cards — only 3 visible */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {moments.slice(0, 3).map((moment, index) => (
          <div
            key={moment.id}
            className="relative group overflow-hidden rounded-md cursor-pointer"
          >
            {/* Image */}
            <img
              src={moment.image}
              alt={`Moment ${moment.id}`}
              className="w-full h-[450px] object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
            />

            {/* Fullscreen Icon */}
            <div
              onClick={() => openModal(index)}
              className="absolute top-3 right-3 bg-black/50 rounded-full p-2 "
            >
              <FaExpand className="text-white text-[14px]" />
            </div>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white text-left px-4 py-3 text-[14px] font-medium">
              {moment.caption}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex flex-col justify-center items-center z-50">
          {/* Modal Container */}
          <div className="bg-[#fee3cc] rounded-lg shadow-lg max-w-6xl w-[95%] mx-auto p-6 relative flex flex-col md:flex-row ">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <FaTimes size={20} />
            </button>

            {/* Left - Image */}
            <div className=" flex ">
              <div className=" bg-black rounded-md">
                <img
                  src={moments[activeIndex].image}
                  alt="Selected moment"
                  className="rounded-lg h-[480px] w-[420px]  object-contain"
                />
              </div>
            </div>

            {/* Right - Caption */}
            <div className="flex-1 text-left p-8">
              <p className="text-[#111] text-[15px] leading-relaxed font-medium">
                {moments[activeIndex].caption}
              </p>
            </div>
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-24 top-1/2 transform -translate-y-1/2 bg-white  text-black p-2 rounded-full transition"
          >
            <FaChevronLeft size={16} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-24 top-1/2 transform -translate-y-1/2  bg-white  text-black p-2 rounded-full transition"
          >
            <FaChevronRight size={16} />
          </button>

          {/* Thumbnails */}
          <div className="flex items-center justify-center gap-3 mt-6 overflow-x-auto w-full px-6 pb-3">
            {moments.map((thumb, i) => (
              <img
                key={thumb.id}
                src={thumb.image}
                alt="Thumbnail"
                onClick={() => setActiveIndex(i)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition-all ${
                  i === activeIndex
                    ? "ring-2 ring-[#d87028] scale-105"
                    : "opacity-70 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default TripMomentsSection;
