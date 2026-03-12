import React from "react";
import SafariToursSection from "./SafariToursSection";
import TripSection from "../../components/TripSection";
import WhyVisitTanzania from "../Aboutus/WhyVisitTanzania";
import ReviewsSection from "../Aboutus/ReviewsSection";
import TourGroupSection from "../TanzaniaSafariLanding/TourGroupSection";
import TripHighlights from "../TanzaniaSafariLanding/TripHighlights";
import Featured from "../Home/Featured";
import SafariTour from "../TanzaniaSafariLanding/SafariTour";
import banner from "../../assets/imara-home-banner-3.webp";
import useSEO from "../../hooks/useSEO";

const SafariDestiLanding = () => {
  
  
  useSEO({
    title: "Tanzania Safari 2026 - Luxury & Private Packages",
    description:
      "Tanzania Safari 2026 featuring luxury and private safari packages, expert guides, and unforgettable wildlife experiences across top parks.",
    keywords:
      "Tanzania Safari Packages, Tanzania Safari, Tanzania Safari Tours, Tanzania Tour Safari, African Safari Tanzania, Tanzania Safaris, Safari Tanzania, Safari In Tanzania, Tour Safari Tanzania, Tanzania Safari Tour, Tanzania Safaris And Tours, Safari Tours Tanzania, Tanzania Safari Trip,",
    image:
      "https://imarakilelenisafaris.com/src/assets/imara-home-banner-3.webp",
    url: "https://imarakilelenisafaris.com/tanzania-safaris",
  });

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
        <h1 className=" text-2xl md:text-5xl text-white uppercase z-10 ">
          TANZANIA SAFARI
        </h1>
      </div>
      <SafariTour />
      {/* <SafariToursSection /> */}
      {/* <TripSection
        title="Europe Backpacking"
        buttonLabel="EXPLORE EUROPE"
        trips={trips}
      /> */}
      <WhyVisitTanzania />
      <ReviewsSection />
      <TourGroupSection />
      <TripHighlights />
      <Featured />
    </div>
  );
};

export default SafariDestiLanding;
