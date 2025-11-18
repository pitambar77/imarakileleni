import React, { useState } from "react";

const tripsData = {
  south: [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80",
      title: "Serengeti National Park",
      description:
        "The one that gets your heart racing with epic safaris and thrilling adventures across Kenya and...",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      title: "Arusha National Park",
      description:
        "The one that shows you Kenya at its boldest - with epic safaris & adrenaline-pumping activities.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=800&q=80",
      title: "Tarengire National Park",
      description:
        "The one that brings together Tanzania’s top safaris, culture, and jaw-dropping sights.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=800&q=80",
      title: "Tarengire National Park",
      description:
        "The one that brings together Tanzania’s top safaris, culture, and jaw-dropping sights.",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80",
      title: "Serengeti National Park",
      description:
        "The one that gets your heart racing with epic safaris and thrilling adventures across Kenya and...",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      title: "Arusha National Park",
      description:
        "The one that shows you Kenya at its boldest - with epic safaris & adrenaline-pumping activities.",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=800&q=80",
      title: "Tarengire National Park",
      description:
        "The one that brings together Tanzania’s top safaris, culture, and jaw-dropping sights.",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=800&q=80",
      title: "Tarengire National Park",
      description:
        "The one that brings together Tanzania’s top safaris, culture, and jaw-dropping sights.",
    },
  ],
  north: [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1564135624576-c5c88640f235?auto=format&fit=crop&w=800&q=80",
      title: "Ngorongoro Crater",
      description:
        "An incredible natural wonder where wildlife roams freely in breathtaking landscapes.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      title: "Lake Manyara National Park",
      description:
        "A paradise for bird lovers with stunning lake views and vibrant pink flamingos.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
      title: "Mount Kilimanjaro",
      description:
        "Climb Africa’s highest peak and witness the most awe-inspiring views in Tanzania.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1580128633825-9b5a21c8a83e?auto=format&fit=crop&w=800&q=80",
      title: "Mkomazi National Park",
      description:
        "A hidden gem offering rhino sanctuaries, scenic landscapes, and peaceful exploration.",
    },
  ],
};

const TanzaniaTabsSection = () => {
  const [activeTab, setActiveTab] = useState("south");

  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto">
     
     <div className=" text-center mb-16 px-24 mx-auto text-[#222]">
       <h3 className="text-[30px] md:text-[36px] font-bold text-[#1a1a1a] mb-4">
          Tanzania’s top safari & holiday destinations
        </h3>

        {/* Subheading */}
        <p className="text-[18px] text-[#555] mb-10">
          Tanzania’s safari and beach areas fall naturally into four broad
          groups.
        </p>

        {/* Content Paragraphs */}
        <div className=" px-16 text-[17px] leading-[1.9] space-y-6 text-[#333]">
          <p>
            <span className="font-semibold">Tanzania’s ‘Northern Circuit’</span>{" "}
            is the term which defines the areas of the sprawling{" "}
            <a
              href="#"
              className="text-[#1c3e94] underline font-medium hover:text-[#d87028] transition"
            >
              Serengeti
            </a>
            , the stunning landscape of the{" "}
            <a
              href="#"
              className="text-[#1c3e94] underline font-medium hover:text-[#d87028] transition"
            >
              Ngorongoro Crater
            </a>
            ,{" "}
            <a
              href="#"
              className="text-[#1c3e94] underline font-medium hover:text-[#d87028] transition"
            >
              Tarangire
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-[#1c3e94] underline font-medium hover:text-[#d87028] transition"
            >
              Lake Manyara
            </a>{" "}
            national parks – the most famous safaris areas in Tanzania.
          </p>

          <p>
            For a quieter experience,{" "}
            <span className="font-semibold">Tanzania’s southern parks</span> offer
            unspoiled wilderness areas dotted with a smaller number of safari
            camps. The lakes and waterways of{" "}
            <a
              href="#"
              className="text-[#1c3e94] underline font-medium hover:text-[#d87028] transition"
            >
              Nyerere National Park
            </a>{" "}
            (formerly Selous) offer magical boating safaris, while{" "}
            <a
              href="#"
              className="text-[#1c3e94] underline font-medium hover:text-[#d87028] transition"
            >
              Ruaha
            </a>
            ’s rugged terrain is excellent for walking safaris and is home to a
            very strong population of lions.
          </p>

          <p>
            Nearer to Africa’s heart,{" "}
            <span className="font-semibold">Western Tanzania</span> is harder to
            reach, so few visitors come, but two parks are amazing.{" "}
            <a
              href="#"
              className="text-[#1c3e94] underline font-medium hover:text-[#d87028] transition"
            >
              Katavi National Park
            </a>{" "}
            protects a vast plain: the battleground for buffalo and lion, whilst
            an hour’s flight away, the spectacular{" "}
            <a
              href="#"
              className="text-[#1c3e94] underline font-medium hover:text-[#d87028] transition"
            >
              Mahale Mountains
            </a>
            rise sheer from the shores of Lake Tanganyika – providing probably
            the best place to track wild chimpanzees in Africa.
          </p>

          <p>
            Lush and tropical,{" "}
            <span className="font-semibold">Tanzania’s coast & islands</span> are
            the venue for simple beach retreats to luxurious lodges – with the
            odd private island included.
          </p>
        </div>
     </div>
      <div className="">
        {/* Tabs */}
        <div className="flex justify-center mb-10 space-x-4">
          <button
            onClick={() => setActiveTab("south")}
            className={`px-6 py-2.5 rounded-full text-base font-semibold border transition-all duration-300 ${
              activeTab === "south"
                ? "bg-[#d87028] text-white border-[#d87028]"
                : "border-black text-black hover:bg-gray-100"
            }`}
          >
            Southern Tanzania
          </button>

          <button
            onClick={() => setActiveTab("north")}
            className={`px-6 py-2.5 rounded-full text-base font-semibold border transition-all duration-300 ${
              activeTab === "north"
                ? "bg-[#d87028] text-white border-[#d87028]"
                : "border-black text-black hover:bg-gray-100"
            }`}
          >
            Northern Tanzania
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tripsData[activeTab].map((trip) => (
            <div
              key={trip.id}
              className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="relative">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-40 object-cover"
                />

                {/* QUICK VIEW Button */}
                <button className="absolute bottom-2 left-2 bg-white text-[11px] font-semibold px-2.5 py-1 rounded shadow-sm hover:bg-gray-100 transition">
                  🔍 QUICK VIEW
                </button>

                {/* EARLY ACCESS DEAL */}
                <span className="absolute top-2 right-2 bg-[#ff3b30] text-white text-[10px] font-semibold px-2 py-1 rounded">
                  EARLY ACCESS DEAL
                </span>
              </div>

              <div className="p-5  ">
                <div>
                  <h3 className="font-semibold text-[16px] mb-6 leading-tight">
                    {trip.title}
                  </h3>
                  <p className="text-[15px] text-gray-700 mb-6 line-clamp-3">
                    {trip.description}
                  </p>
                </div>

                <div className=" flex justify-end mb-4">
                  <button className="bg-[#d87028] hover:bg-orange-700 text-white font-semibold text-sm px-6 py-2 rounded-full transition ">
                    VIEW TRIP
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TanzaniaTabsSection;
