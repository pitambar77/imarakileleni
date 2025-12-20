// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import API from "../../api/axios.js";
// import TripDetailsSection from './TripDetailsSection'
// import ReviewBanner from './ReviewBanner'
// import TripMomentsSection from './TripMomentsSection'
// import MapItinerarySection from './MapItinerarySection'
// import BookWithConfidence from '../Home/BookWithConfidence'

// const ItinaryDetails = () => {

//     const { id } = useParams(); // 👈 package id from URL
//   const [trip, setTrip] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchTrip = async () => {
//       try {
//         const res = await API.get(`/packages/${id}`);
//         setTrip(res.data);
//       } catch (err) {
//         console.error("Failed to fetch trip", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTrip();
//   }, [id]);

//   if (loading) return <p className="p-6">Loading...</p>;
//   if (!trip) return <p className="p-6">Trip not found</p>;

//   return (
//     <div>
//          <TripDetailsSection trip={trip}/>
//          <ReviewBanner/>
//          <TripMomentsSection/>
//           <MapItinerarySection/>
//           <BookWithConfidence/>
//     </div>
//   )
// }

// export default ItinaryDetails



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/axios";

import TripDetailsSection from "./TripDetailsSection";
import TripMomentsSection from "./TripMomentsSection";
import MapItinerarySection from "./MapItinerarySection";
import BookWithConfidence from "../Home/BookWithConfidence";

const ItinaryDetails = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    API.get(`/packages/${id}`).then((res) => setTrip(res.data));
  }, [id]);

  if (!trip) return <p className="p-6">Loading...</p>;

  return (
    <>
      <TripDetailsSection trip={trip} />
      <TripMomentsSection experience={trip.experience} />
      <MapItinerarySection itinerary={trip.itinerary} />
      <BookWithConfidence />
    </>
  );
};

export default ItinaryDetails;
