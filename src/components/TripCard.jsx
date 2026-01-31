import React from "react";
import { FaStar, FaCalendarAlt, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { slugify } from "../utils/slugify.js";
import { MdOutlineSavedSearch } from "react-icons/md";

const TripCard = ({ trip, onQuickView }) => {
  const navigate = useNavigate();

  if (trip.promo) {
    return (
      <div className="rounded-sm overflow-hidden bg-white shadow-md flex flex-col justify-center items-center text-center h-[480px] relative">
        <img
          src={trip.image}
          alt={trip.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/20">
          <h3 className="font-bold text-lg mb-2">Big Drop. Low Prices.</h3>
          <button className="bg-[#d87028] hover:bg-orange-700 cursor-pointer text-white font-semibold text-sm px-6 py-2 rounded-full mt-2 shadow">
            BOOK NOW
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-300 mb-4 h-[480px] flex flex-col">
      {/* Image */}
      <div className="relative">
        <img
          src={trip.image}
          alt={trip.title}
          className="w-full h-48 md:h-42 object-cover"
        />
        <button
          onClick={() => onQuickView(trip)}
          className="absolute bottom-3 left-3 cursor-pointer bg-white text-xs font-semibold px-3 py-1 rounded shadow-sm hover:bg-gray-100 transition"
        >
          <span className="flex items-center cursor-pointer font-semibold gap-1">
            <MdOutlineSavedSearch className="text-lg" />
            QUICK VIEW
          </span>
        </button>
      </div>

      <div className="p-5 flex flex-col flex-1">
        {/* Rating */}
        {/* <div className="flex items-center text-yellow-500 mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} size={14} />
          ))}
          <span className="text-black ml-2 font-semibold">{trip.rating}</span>
        </div> */}

        {/* Title */}
        <h3 className="text-xl mb-6 leading-tight">{trip.title}</h3>

        {/* Trip Info */}
        <div className="text-sm flex flex-wrap items-center gap-2 mb-3 text-[15px]">
          <span className="flex items-center gap-1 ">
            <FaCalendarAlt /> <p className=" mt-1">{trip.days}</p>
          </span>
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt />
            <p className=" mt-1"> {trip.places}</p>
          </span>
          <span className="flex items-center gap-1">
            <FaGlobe />{" "}
            <p className=" mt-1">
              <u className="">{trip.country}</u>
            </p>
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 line-clamp-3">{trip.description}</p>

        {/* Price & Button */}
        <div className="flex justify-between items-center mt-auto pb-2">
          <div className="text-xs text-gray-600">
            {trip.standardPrice && (
              <h3 className="mb-2">
                Standard Price <br /> {trip.standardPrice}
              </h3>
            )}
            <h3 className="font-bold text-sm text-black">
              $ {trip.discountedPrice}
            </h3>
          </div>

          <Link to={`/package/${slugify(trip.title)}`}
            // onClick={() =>
            //   navigate(`/package/${slugify(trip.title)}`)
            // }
            className="bg-[#d87028] hover:bg-orange-700 text-white text-sm px-6 py-2 cursor-pointer rounded-full w-fit"
          >
            VIEW TRIP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
