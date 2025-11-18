import React from "react";

const destinations = [
  { id: 1, name: "Serengeti", image: "https://www.andbeyond.com/wp-content/uploads/sites/5/Serengeti-Balloon-Safari-andBeyond-Experience.jpg" },
  { id: 2, name: "Gombe", image: "https://www.tripsavvy.com/thmb/uYv5JdnC9tiUWVp_ykK_ARpiKzw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-170954436-3d102c9ab69f47cfa81dad173d24f3a2.jpg" },
  { id: 3, name: "Zanzibar", image: "https://www.andbeyond.com/wp-content/uploads/sites/5/Lion-in-a-tree-in-Lake-Manyara-National-Park.jpg" },
  { id: 4, name: "Tarengire", image: "https://www.andbeyond.com/wp-content/uploads/sites/5/boabab-tarangire-national-park.jpg" },
  { id: 5, name: "Manyara", image: "https://www.asiliaafrica.com/wp-content/uploads/2024/04/A-Hippo-in-Lake-Manyara-Arusha-Tanzania.jpg" },
  { id: 6, name: "Serengeti", image: "https://www.leopard-tours.com/wp-content/uploads/2015/07/manyara-national-park-5-1024x680.jpg" },
  { id: 7, name: "Gombe", image: "https://www.andbeyond.com/wp-content/uploads/sites/5/Lion-in-a-tree-in-Lake-Manyara-National-Park.jpg" },
  { id: 8, name: "Zanzibar", image: "https://www.asiliaafrica.com/wp-content/uploads/2024/04/Elephants-grazing-among-the-trees-in-Tarangire-Tanzania.jpg" },
  
];

const PopularWay = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center capitalize mb-10">
          Popular Way To Go
        </h2>

        {/* Destination Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="relative w-full h-48 rounded-md overflow-hidden group"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
              {/* Centered Destination Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white  font-semibold px-6 py-2  text-sm md:text-2xl ">
                  {dest.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Trips Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-[#d87028] hover:bg-orange-700 text-white font-semibold text-base px-8 py-3 rounded-full transition shadow">
            VIEW ALL TRIPS
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularWay;
