import React from "react";
import SafariToursSection from "./SafariToursSection";
import TripSection from "../../components/TripSection";
import WhyVisitTanzania from "../Aboutus/WhyVisitTanzania";
import ReviewsSection from "../Aboutus/ReviewsSection";
import TourGroupSection from "../TanzaniaSafariLanding/TourGroupSection";
import TripHighlights from "../TanzaniaSafariLanding/TripHighlights";
import Featured from "../Home/Featured";
import SafariTour from "../TanzaniaSafariLanding/SafariTour";

const SafariDestiLanding = () => {


  return (
    <div>
      <div
        className="relative w-full h-[64vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url('https://travcoholidays.com/wp-content/uploads/2025/10/African-safari-scaled.jpg')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        <h2 className=" text-xl md:text-5xl text-white uppercase z-10 ">
          All About tanzania safari
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
