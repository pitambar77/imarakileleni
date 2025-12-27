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

// working code below

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import API from "../../api/axios";

// import TripDetailsSection from "./TripDetailsSection";
// import TripMomentsSection from "./TripMomentsSection";
// import MapItinerarySection from "./MapItinerarySection";
// import BookWithConfidence from "../Home/BookWithConfidence";
// import ReviewBanner from "./ReviewBanner";
// import ContactUs from "../Contactus/ContactUs";
// import Featured from "../Home/Featured";

// const ItinaryDetails = () => {
//   // const { id } = useParams();
//   const { slug } = useParams();

// // extract Mongo ID from end
// const id = slug.split("-").pop();

//   const [trip, setTrip] = useState(null);

//   useEffect(() => {
//     API.get(`/packages/${id}`).then((res) => setTrip(res.data));
//   }, [id]);

//   if (!trip) return <p className="p-6">Loading...</p>;

//   return (
//     <>
//       <TripDetailsSection trip={trip} />
//       <ReviewBanner/>
//       <TripMomentsSection experience={trip.experience} />
//       <MapItinerarySection itinerary={trip.itinerary} />
//       <BookWithConfidence />
//       <ContactUs/>
//       <Featured/>
//     </>
//   );
// };

// export default ItinaryDetails;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/axios";
import { slugify } from "../../utils/slugify";

import TripDetailsSection from "./TripDetailsSection";
import TripMomentsSection from "./TripMomentsSection";
import MapItinerarySection from "./MapItinerarySection";
import BookWithConfidence from "../Home/BookWithConfidence";
import ReviewBanner from "./ReviewBanner";
import ContactUs from "../Contactus/ContactUs";
import Featured from "../Home/Featured";

const ItinaryDetails = () => {
  const { slug } = useParams();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const res = await API.get("/packages");

        const matchedTrip = res.data.find(
          (item) => slugify(item.title) === slug
        );

        setTrip(matchedTrip || null);
      } catch (error) {
        console.error("Trip fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrip();
  }, [slug]);

  

  if (loading) return <p className="p-6">Loading...</p>;
  if (!trip) return <p className="p-6">Trip not found</p>;

  return (
    <>
      <TripDetailsSection trip={trip} />
      <ReviewBanner />
      <TripMomentsSection experience={trip.experience} />
      <MapItinerarySection itinerary={trip.itinerary} />
      <BookWithConfidence />
      <ContactUs />
      <Featured />
    </>
  );
};

export default ItinaryDetails;
