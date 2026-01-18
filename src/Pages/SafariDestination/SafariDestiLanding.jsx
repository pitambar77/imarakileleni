import React from "react";
import SafariToursSection from "./SafariToursSection";
import TripSection from "../../components/TripSection";
import WhyVisitTanzania from "../Aboutus/WhyVisitTanzania";
import ReviewsSection from "../Aboutus/ReviewsSection";
import TourGroupSection from "../TanzaniaSafariLanding/TourGroupSection";
import TripHighlights from "../TanzaniaSafariLanding/TripHighlights";
import Featured from "../Home/Featured";
import SafariTour from "../TanzaniaSafariLanding/SafariTour";
import banner from "../../assets/imara-home-banner-3.webp"

const SafariDestiLanding = () => {


  return (
    <div>
      <div
        className="relative w-full h-[350px] md:h-[450px] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        <h2 className=" text-2xl md:text-5xl text-white uppercase z-10 ">
          TANZANIA SAFARI 
        </h2>
      </div>
      <SafariTour/>
      {/* <SafariToursSection /> */}
      {/* <TripSection
        title="Europe Backpacking"
        buttonLabel="EXPLORE EUROPE"
        trips={trips}
      /> */}
      <WhyVisitTanzania/>
      <ReviewsSection/>
      <TourGroupSection/>
      <TripHighlights/>
      <Featured/>
    </div>
  );
};

export default SafariDestiLanding;
