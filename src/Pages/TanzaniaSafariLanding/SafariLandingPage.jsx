// import React from 'react'
// import Banner from '../../components/Banner'
// import SafariInfoSection from './SafariInfoSection'
// import TanzaniaTabsSection from './TanzaniaTabsSection'
// import GuestReviewSection from './GuestReviewSection'
// import SafariTour from './SafariTour'
// import TourGroupSection from './TourGroupSection'
// import WhentoGo from './WhentoGo'
// import TripHighlights from './TripHighlights'
// import Featured from '../Home/Featured'

// const SafariLandingPage = () => {
//   return (
//     <div>
//         <Banner
//         image="https://easguides.travel/wp-content/uploads/2024/02/Tanzania-Tour.webp"
//         title="EXPLORE TANZANIA"
//         buttonText="VIEW TRIPS"
//         onButtonClick={() => alert("Redirecting to Tanzania Trips...")}
//       />
//       <SafariInfoSection/>
//       <TanzaniaTabsSection/>
//       <GuestReviewSection/>
//       <SafariTour/>
//       <TourGroupSection/>
//       <WhentoGo/>
//       <TripHighlights/>
//        {/* <Featured/> */}
//     </div>
//   )
// }

// export default SafariLandingPage

import React from "react";
import Banner from "../../components/Banner";
import SafariInfoSection from "./SafariInfoSection";
import TanzaniaTabsSection from "./TanzaniaTabsSection";
import GuestReviewSection from "./GuestReviewSection";
import SafariTour from "./SafariTour";
import TourGroupSection from "./TourGroupSection";
import WhentoGo from "./WhentoGo";
import TripHighlights from "./TripHighlights";
import Featured from "../Home/Featured";
import { useState } from "react";
import { useEffect } from "react";

import API from "../../api/axios";
import { useNavigate } from "react-router-dom";
import useSEO from "../../hooks/useSEO";

const SafariLandingPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useSEO({
    title: "Tanzania Safari Destinations - National Parks & Attractions",
    description:
      "Discover top Tanzania safari destinations, including Serengeti, Ngorongoro, Kilimanjaro, and hidden gems guided by local experts.",
    keywords:
      "Tanzania Safari Destinations, Tanzania National Parks, Tanzania Travel Destinations, Wildlife Destinations Tanzania, Northern Circuit Tanzania, Best Places To Visit In Tanzania, Safari Parks Tanzania",
    image:
      "https://res.cloudinary.com/dq0ug85oe/image/upload/v1766472384/imarakileleni_uploads/vkkwdqmiuf9yhcmqcrur.webp",
    url: "https://imarakilelenisafaris.com/tanzania-destinations",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/destinationlanding");
        setData(res.data?.[0]); // 👈 IMPORTANT (array → first object)
      } catch (err) {
        console.error("Landing fetch error:", err);
      }
    };

    fetchData();
  }, []);

  if (!data) return null; // or loader

  return (
    <div>
      <Banner
        image={data.image}
        title={data.title}
        buttonText="VIEW TRIPS"
        onButtonClick={() => navigate("/tanzania-safaris")}
      />
      <SafariInfoSection overview={data.overviewinfo?.[0]} />
      <TanzaniaTabsSection />
      <GuestReviewSection />
      <SafariTour />
      <TourGroupSection />
      <WhentoGo />
      <TripHighlights />
      <Featured />
    </div>
  );
};

export default SafariLandingPage;
