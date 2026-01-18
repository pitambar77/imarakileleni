// import React from "react";
// import { useNavigate } from "react-router-dom";

// const destinations = [
//   { id: 1, name: "Best time to vist", image: "https://res.cloudinary.com/dq0ug85oe/image/upload/v1766065999/imarakileleni_uploads/svmyuhibyarhqgrdf2kp.webp" ,
//     link:"/travel-guide/when-is-the-best-time-to-visit-tanzania",
//   },
//   { id: 2, name: "what to pack", link:"/travel-guide/what-to-pack-for-a-tanzania-safari", image: "https://www.tripsavvy.com/thmb/uYv5JdnC9tiUWVp_ykK_ARpiKzw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-170954436-3d102c9ab69f47cfa81dad173d24f3a2.jpg" },
//   { id: 3, name: "tanzania food", link:"/travel-guide/what-to-eat-on-a-tanzania-safari",  image: "https://www.andbeyond.com/wp-content/uploads/sites/5/Lion-in-a-tree-in-Lake-Manyara-National-Park.jpg" },
//   { id: 4, name: "tanzania visa", link:"/travel-guide/what-are-the-requirements-for-a-tanzania-visa", image: "https://www.andbeyond.com/wp-content/uploads/sites/5/boabab-tarangire-national-park.jpg" },
//   { id: 5, name: "tanzania cost", link:"/travel-guide/how-much-does-it-cost-to-visit-tanzania", image: "https://www.asiliaafrica.com/wp-content/uploads/2024/04/A-Hippo-in-Lake-Manyara-Arusha-Tanzania.jpg" },
//   { id: 6, name: "travel safety", link:"/travel-guide/how-safe-is-a-safari-in-tanzania", image: "https://www.leopard-tours.com/wp-content/uploads/2015/07/manyara-national-park-5-1024x680.jpg" },
  
// ];

// const PopularWay = () => {

//   const navigate = useNavigate();

//   return (
//     <section className="w-full py-8 md:py-16 bg-white">
//       <div className="px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto">
//         {/* Title */}
//         <h2 className="text-2xl md:text-3xl font-bold text-center capitalize mb-10">
//            Ultimate Guide to Tanzania Travel
//         </h2>

//         {/* Destination Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//           {destinations.map((dest) => (
//             <div
//               key={dest.id}
//               onClick={()=>navigate(dest.link)}
//               className="relative w-full h-54 rounded-md overflow-hidden group"
//             >
//               <img
//                 src={dest.image}
//                 alt={dest.name}
//                 className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
//               />
//               {/* Centered Destination Label */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <span className="text-white  font-semibold px-6 py-2  text-sm md:text-2xl capitalize ">
//                   {dest.name}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View All Trips Button */}
//         <div className="flex justify-center mt-12">
//           <button
//           onClick={()=>(
//             navigate('/tanzania-travel-guide')
//           )}
//           className="bg-[#d87028] hover:bg-orange-700 text-white font-semibold text-base px-8 py-3 rounded-full transition shadow">
//             VIEW ALL 
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PopularWay;



import React from "react";
import { Link, useNavigate } from "react-router-dom";
import besttime from "../../assets/best-time.webp"
import cost from "../../assets/cost.webp"
import food from "../../assets/food.webp"
import safety from "../../assets/safety.webp"
import packing from "../../assets/packing.webp"
import visa from "../../assets/visa.webp"


const destinations = [
  {
    id: 1,
    name: "Best time to visit",
    link: "/travel-guide/when-is-the-best-time-to-visit-tanzania",
    image:
      besttime,
  },
  {
    id: 2,
    name: "What to pack",
    link: "/travel-guide/what-to-pack-for-a-tanzania-safari",
    image:packing,
  },
  {
    id: 3,
    name: "Tanzania food",
    link: "/travel-guide/what-to-eat-on-a-tanzania-safari",
    image:food,
  },
  {
    id: 4,
    name: "Tanzania visa",
    link: "/travel-guide/what-are-the-requirements-for-a-tanzania-visa",
    image:visa,
  },
  {
    id: 5,
    name: "Tanzania cost",
    link: "/travel-guide/how-much-does-it-cost-to-visit-tanzania",
    image:cost,
  },
  {
    id: 6,
    name: "Travel safety",
    link: "/travel-guide/how-safe-is-a-safari-in-tanzania",
    image:safety,
  }
];

const PopularWay = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-8 md:py-16 bg-white">
      <div className="px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center capitalize mb-10">
          Ultimate Guide to Tanzania Travel
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <Link
              key={dest.id}
              to={dest.link}
              // onClick={() => navigate(dest.link)}
              className="relative w-full h-56 rounded-md overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />

              {/* 🔥 SHADOW OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />

              {/* Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-semibold px-4 py-2 text-sm md:text-2xl capitalize text-center drop-shadow-lg">
                  {dest.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="flex justify-center mt-12">
          <Link to={"/tanzania-travel-guide"}
            
            className="bg-[#d87028] cursor-pointer hover:bg-orange-700 text-white font-semibold text-base px-8 py-3 rounded-full transition shadow"
          >
            VIEW ALL
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularWay;
