


import React, { useEffect, useMemo, useState } from "react";
import TripCard from "../../components/TripCard";
import { IoClose } from "react-icons/io5";
import { FaStar, FaCalendarAlt, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import API from "../../api/axios";

const SafariToursSection = () => {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const res = await API.get("/packages"); // 🔁 confirm endpoint
        setTrips(res.data || []);
      } catch (err) {
        console.error("Trip fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  // ✅ FILTER ONLY TANZANIA
  const tanzaniaTrips = useMemo(() => {
    return trips.filter(
      (trip) =>
        trip.destination &&
        trip.destination.trim().toLowerCase() === "kili"
    );
  }, [trips]);

  const openModal = (trip) => setSelectedTrip(trip);
  const closeModal = () => setSelectedTrip(null);

  if (loading) {
    return <p className="text-center py-10">Loading tours…</p>;
  }

  return (
    <section className="w-full py-16 bg-white relative">
      <div className="px-4 md:px-10 lg:px-16 2xl:px-28 mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl text-center font-bold mb-4">
          Top Tanzania Safari & Tours
        </h2>
        <p className="text-center mb-10">
          Handpicked safari experiences across Tanzania
        </p>

        {/* Empty State */}
        {tanzaniaTrips.length === 0 && (
          <p className="text-center text-gray-500">
            No Tanzania trips available
          </p>
        )}

        {/* Trips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tanzaniaTrips.map((trip) => (
            <TripCard
              key={trip._id}
              trip={{
                id: trip._id,
                image: trip.image,
                title: trip.title,
                days: trip.accomoDay,
                places: trip.itinerary?.length
                  ? `${trip.itinerary.length} Stops`
                  : "Multiple Places",
                country: "1 Country",
                rating: 4.8,
                discountedPrice: trip.price,
                description: trip.description,
              }}
              onQuickView={() => openModal(trip)}
            />
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedTrip && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] md:w-[700px] rounded-xl shadow-lg overflow-hidden relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <IoClose size={28} />
            </button>

            <img
              src={selectedTrip.image}
              alt={selectedTrip.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                {selectedTrip.title}
              </h3>

              <p className="text-gray-700 mb-4">
                {selectedTrip.description}
              </p>

              <button className="bg-[#d87028] text-white px-6 py-2 rounded-full">
                VIEW TRIP
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SafariToursSection;
