import React, { useState } from "react";
import { FaStar, FaChevronDown, FaChevronUp, FaMapMarkerAlt } from "react-icons/fa";

const tours = [
  {
    id: 1,
    image: "https://africanscenicsafaris.com/assests/images/tanzania-safari-tours-banner.webp",
    badge: "EARLY ACCESS DEAL",
    newTrip: true,
    title: "Kenya Adventure",
    region: "Kenya",
    duration: "1–2 weeks",
    travelStyle: "Adventure",
    accommodation: "Lodges",
    rating: 4.9,
    description:
      "The one that shows you Kenya at its boldest – with epic safaris & adrenaline-pumping activities.",
    oldPrice: "$3,035",
    price: "From $2,518",
  },
  {
    id: 2,
    image: "https://kilimanjarofairdeal.com/wp-content/uploads/2023/12/family-3.jpg",
    badge: "EARLY ACCESS DEAL",
    title: "Sea, Safari, South Africa",
    region: "South Africa",
    duration: "2–4 weeks",
    travelStyle: "Classic",
    accommodation: "Hotels",
    rating: 4.9,
    description:
      "The one that goes bigger on South Africa’s best wildlife spots – with 9 safari parks & city stops.",
    oldPrice: "$4,835",
    price: "From $4,143",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
    badge: "EARLY ACCESS DEAL",
    title: "Egypt and the Nile",
    region: "Egypt",
    duration: "1–2 weeks",
    travelStyle: "Luxury",
    accommodation: "Boutique",
    rating: 4.8,
    description:
      "The one that brings you face to face with Pharaohs and world wonders in enigmatic Egypt.",
    oldPrice: "$2,455",
    price: "From $2,210",
  },
  {
    id: 4,
    image: "https://africanscenicsafaris.com/assests/images/tanzania-safari-tours-banner.webp",
    badge: "NEW TRIP",
    title: "Serengeti Escape",
    region: "Serengeti",
    duration: "Up to 1 week",
    travelStyle: "Adventure",
    accommodation: "Camps",
    rating: 4.7,
    description:
      "An unforgettable journey through the Serengeti with expert guides and authentic experiences.",
    oldPrice: "$3,600",
    price: "From $3,150",
  },
  {
    id: 5,
    image: "https://kilimanjarofairdeal.com/wp-content/uploads/2023/12/family-3.jpg",
    badge: "EARLY ACCESS DEAL",
    title: "Sea, Safari, South Africa",
    region: "South Africa",
    duration: "2–4 weeks",
    travelStyle: "Classic",
    accommodation: "Hotels",
    rating: 4.9,
    description:
      "The one that goes bigger on South Africa’s best wildlife spots – with 9 safari parks & city stops.",
    oldPrice: "$4,835",
    price: "From $4,143",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
    badge: "EARLY ACCESS DEAL",
    title: "Egypt and the Nile",
    region: "Egypt",
    duration: "1–2 weeks",
    travelStyle: "Luxury",
    accommodation: "Boutique",
    rating: 4.8,
    description:
      "The one that brings you face to face with Pharaohs and world wonders in enigmatic Egypt.",
    oldPrice: "$2,455",
    price: "From $2,210",
  },
];

const filters = {
  region: ["Kenya", "South Africa", "Egypt", "Serengeti","Botswana","Tanzania"],
  duration: ["Up to 1 week", "1–2 weeks", "2–4 weeks","1 month"],
  travelStyle: ["Luxury", "Adventure", "Classic"],
  accommodation: ["Lodges", "Hotels", "Camps", "Boutique"],
};

const SafariToursSection = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    region: [],
    duration: [],
    travelStyle: [],
    accommodation: [],
  });
  const [openSections, setOpenSections] = useState({
    region: true,
    duration: true,
    travelStyle: false,
    accommodation: false,
  });

  const handleFilterToggle = (category, value) => {
    setSelectedFilters((prev) => {
      const categoryValues = prev[category];
      const newValues = categoryValues.includes(value)
        ? categoryValues.filter((item) => item !== value)
        : [...categoryValues, value];
      return { ...prev, [category]: newValues };
    });
  };

  const resetFilters = () =>
    setSelectedFilters({
      region: [],
      duration: [],
      travelStyle: [],
      accommodation: [],
    });

  const toggleSection = (category) => {
    setOpenSections((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const filteredTours = tours.filter((tour) => {
    const regionMatch =
      selectedFilters.region.length === 0 ||
      selectedFilters.region.includes(tour.region);
    const durationMatch =
      selectedFilters.duration.length === 0 ||
      selectedFilters.duration.includes(tour.duration);
    const styleMatch =
      selectedFilters.travelStyle.length === 0 ||
      selectedFilters.travelStyle.includes(tour.travelStyle);
    const accommodationMatch =
      selectedFilters.accommodation.length === 0 ||
      selectedFilters.accommodation.includes(tour.accommodation);

    return regionMatch && durationMatch && styleMatch && accommodationMatch;
  });

  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-[28px] md:text-3xl font-extrabold text-[#111]">
          Top Tanzania Safari & tours
        </h2>
        <p className="text-gray-700 text-[16px] font-medium">
          Adored by 18–35s worldwide since 1962
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
        {/* Sidebar Filter */}
        <aside className="lg:col-span-1 bg-[#fafafa] p-6 rounded-md shadow-sm border border-gray-200 h-fit">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-[#111]">Filter</h3>
            <button
              onClick={resetFilters}
              className="text-sm font-semibold text-gray-600 hover:text-[#d87028]"
            >
              RESET
            </button>
          </div>

          {/* Filter Groups */}
          {Object.entries(filters).map(([category, options]) => (
            <div key={category} className="mb-6 border-b border-gray-200 pb-3">
              {/* Header */}
              <button
                onClick={() => toggleSection(category)}
                className="flex items-center justify-between w-full text-[16px] font-semibold text-[#111]  mb-3"
              >
                <h3 className="capitalize">
                  {category.replace(/([A-Z])/g, " $1")}
                </h3>
                {openSections[category] ? (
                  <FaChevronUp className="text-gray-500" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </button>

              {/* Tanzania Destination heading below Region */}
              {category === "region" && (
                <div className="flex items-center gap-2 px-4 mb-4 text-[#222] bg-[#d87028] py-1 rounded-md text-white  font-semibold text-[15px]">
                  {/* <FaMapMarkerAlt className="" /> */}
                  <img src="https://static.vecteezy.com/system/resources/previews/023/639/560/non_2x/tanzania-map-in-africa-icons-showing-tanzania-location-and-flags-png.png" alt="" className="w-10 h-10" />
                  <span className=" ">Tanzania Destinations</span>
                </div>
              )}

              {/* Filter Options */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openSections[category]
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-2 pl-1">
                  {options.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-3 cursor-pointer bg-gray-100 hover:bg-gray-200 p-3 rounded-md"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFilters[category].includes(option)}
                        onChange={() => handleFilterToggle(category, option)}
                        className="accent-[#d87028] w-4 h-4"
                      />
                      <span className="text-[15px] text-[#333]">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </aside>

        {/* Tours Grid */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredTours.length > 0 ? (
            filteredTours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-md shadow-md hover:shadow-lg transition overflow-hidden border border-gray-100"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-48 object-cover"
                  />
                  {tour.badge && (
                    <span className="absolute top-3 right-3 bg-[#d87028] text-white text-xs font-bold px-3 py-1 rounded">
                      {tour.badge}
                    </span>
                  )}
                  {tour.newTrip && (
                    <span className="absolute top-3 left-3 bg-[#111] text-white text-xs font-bold px-3 py-1 rounded">
                      NEW TRIP
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 text-left">
                  <div className="flex items-center text-[#FFD700] mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-[#111]">
                    {tour.title}
                  </h3>

                  <p className="text-[16px]  mb-4">
                    {tour.description}
                  </p>

                  <div className="flex justify-between items-center mt-3">
                    <div>
                      <p className="text-sm text-gray-400 line-through">
                        {tour.oldPrice}
                      </p>
                      <h3 className="text-[16px] font-bold text-[#111]">
                        {tour.price}
                      </h3>
                    </div>
                    <button className="bg-[#d87028] hover:bg-orange-700 text-white  text-sm px-6 py-2 rounded-full mt-2 w-fit">
                        VIEW TRIP
                      </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600 font-medium">
              No tours match your filters. Try adjusting your options.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SafariToursSection;
