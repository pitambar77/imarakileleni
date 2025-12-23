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


import React from 'react'
import Banner from '../../components/Banner'
import SafariInfoSection from './SafariInfoSection'
import TanzaniaTabsSection from './TanzaniaTabsSection'
import GuestReviewSection from './GuestReviewSection'
import SafariTour from './SafariTour'
import TourGroupSection from './TourGroupSection'
import WhentoGo from './WhentoGo'
import TripHighlights from './TripHighlights'
import Featured from '../Home/Featured'
import { useState } from 'react'
import { useEffect } from 'react'

import API from "../../api/axios";

const SafariLandingPage = () => {


  const [data, setData] = useState(null);

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
        onButtonClick={() => alert("Redirecting to Tanzania Trips...")}
      />
      <SafariInfoSection overview={data.overviewinfo?.[0]}/>
      <TanzaniaTabsSection />
      <GuestReviewSection/>
      <SafariTour/>
      <TourGroupSection/>
      <WhentoGo/>
      <TripHighlights/>
       {/* <Featured/> */}
    </div>
  )
}

export default SafariLandingPage