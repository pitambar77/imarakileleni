import React from "react";
import Featured from "./Featured";
import HeroSlider from "../../components/HeroSlider";
import BookedTrips from "../../components/BookedTrips";
import PopularDestinations from "./PopularDestinations";
import BookWithConfidence from "./BookWithConfidence";
import KilimanjaroTrekking from "./KilimanjaroTrekking";
import PopularWay from "./PopularWay";
import useSEO from "../../hooks/useSEO";

const Home = () => {
  useSEO({
    title:
      "Imara kileleni Safaris - Local Tanzania Safari & Kilimanjaro Specialists",
    description:
      "Local experts creating personalised Tanzania safaris and Kilimanjaro climbs with honest guidance.",
    keywords: "Tanzania safari, Kilimanjaro climb, local safari experts",
    image: "https://imarakilelenisafaris.com/src/assets/tanzania-banner-5.webp",
    url: "https://imarakilelenisafaris.com/",
  });

  return (
    <div>
      <HeroSlider />
      <BookedTrips />
      <PopularDestinations />
      <BookWithConfidence />
      <KilimanjaroTrekking />
      <PopularWay />
      <Featured />
    </div>
  );
};

export default Home;
