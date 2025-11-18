import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { IoIosArrowDropupCircle } from "react-icons/io";

const brands = [
  { id: 1, name: "Lonely Planet", img: "https://www.contiki.com/media/5l1p24yg/contiki-lonely-planet-600x300.webp?&quality=80" },
  { id: 2, name: "Pedestrian", img: "https://www.contiki.com/media/dyjfzf1m/pedesrianlogo.webp?&quality=80" },
  { id: 3, name: "Cosmopolitan", img: "https://www.contiki.com/media/rjhjd3ej/cosmopolitan-emblem.png?&quality=80" },
  { id: 4, name: "UNILAD", img: "https://www.contiki.com/media/l5on2onh/unilad_logo-svg_.webp?&quality=80" },
  { id: 5, name: "Mashable", img: "https://www.contiki.com/media/1jbikr05/mashable-600x300.webp?&quality=80" },
];

const Featured = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto text-center">
        {/* --- Featured Section --- */}
        <h2 className="text-lg md:text-xl font-bold mb-8">As featured in</h2>
{/* 
        <div className="flex justify-center items-center gap-2 mb-16 max-h-[50px]">
          {brands.map((brand) => (
            <img
              key={brand.id}
              src={brand.img}
              alt={brand.name}
              className=" h-24 p-3 grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div> */}

        <div className=" flex h-30 p-4 items-center justify-between mb-16">
            <img src="https://www.contiki.com/media/5l1p24yg/contiki-lonely-planet-600x300.webp?&quality=80" alt="" className=' h-24'  />
            <img src="https://www.contiki.com/media/dyjfzf1m/pedesrianlogo.webp?&quality=80" alt="" className=" h-18" />
            <img src="https://www.contiki.com/media/rjhjd3ej/cosmopolitan-emblem.png?&quality=80" alt="" className=" h-24" />
            <img src="https://www.contiki.com/media/l5on2onh/unilad_logo-svg_.webp?&quality=80" alt="" className=" h-14" />
            <img src="https://www.contiki.com/media/1jbikr05/mashable-600x300.webp?&quality=80" alt="" className=" h-30"/>
        </div>

        {/* --- Promise Banner --- */}
        <div
          className="relative rounded-md overflow-hidden w-full h-[300px] md:h-[400px] flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://www.andbeyond.com/wp-content/uploads/sites/5/Serengeti-Balloon-Safari-andBeyond-Experience.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative text-center text-white z-10">
            <h3 className="text-xl md:text-3xl font-bold mb-16">
              Our Promise to our Esteemed Clients<sup>®</sup>
            </h3>
            <button className="px-6 py-2 border-2 border-white rounded-full text-white font-semibold text-sm hover:bg-white hover:text-black transition">
              TELL ME MORE
            </button>
          </div>
        </div>

        {/* --- Back to Top --- */}
        <div className="flex justify-center mt-12">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 cursor-pointer text-sm text-black font-medium hover:text-[#d87028] transition"
          >
            {/* <div className="border p-2 bg-[#d87028]  rounded-full"> */}
<IoIosArrowDropupCircle  className="text-[#d87028] text-[40px] " />
            {/* </div> */}
            
            <span>Back To Top</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured