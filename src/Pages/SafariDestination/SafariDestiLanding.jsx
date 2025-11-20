import React from "react";
import SafariToursSection from "./SafariToursSection";
import TripSection from "../../components/TripSection";
import WhyVisitTanzania from "../Aboutus/WhyVisitTanzania";
import ReviewsSection from "../Aboutus/ReviewsSection";
import TourGroupSection from "../TanzaniaSafariLanding/TourGroupSection";
import TripHighlights from "../TanzaniaSafariLanding/TripHighlights";
import Featured from "../Home/Featured";

const SafariDestiLanding = () => {

//   const trips = [
//   {
//     id: 1,
//     image: "https://www.contiki.com/media/azyfwhto/thailand2024_brandshoot-095-1-7.jpg?center=0.5%2C0.5&format=webp&mode=crop&width=1920&height=1720&quality=80",
//     title: "Thai Island Hopper West",
//     rating: 4.6,
//     days: "8 Days",
//     places: "3 Places",
//     countries: "1 Country",
//     standardPrice: "$1,235",
//     discountedPrice: "$1,050",
//     description:
//       "The one that takes you to west Thailand for a tour of Phuket, Koh Phi Phi, Krabi & other faves...",
//   },
//   {
//     id: 2,
//     image: "https://www.trafalgar.com/media/by3ihnoz/arc-de-triomphe-paris-france-3.jpg?crop=0%2C0.25%2C0%2C0&cropmode=percentage&format=webp&mode=crop&width=800&height=450&quality=80",
//     title: "European Whirl",
//     rating: 4.7,
//     days: "19 Days",
//     places: "6 Places",
//     countries: "8 Countries",
//     discountedPrice: "$3,425",
//     description:
//       "The one that combines urban parties, ancient history and mountain beauty in 19 days",
//   },
//   {
//     id: 3,
//     image: "https://www.contiki.com/media/z05l51pp/0119eurs2022-8.jpg",
//     title: "Croatia Island Sail",
//     rating: 4.5,
//     days: "8 Days",
//     places: "6 Places",
//     countries: "1 Country",
//     standardPrice: "$1,765",
//     discountedPrice: "$1,616",
//     description:
//       "The one that lets you cruise the Dalmatian Coastline & go Croatian island hopping, from Split to Dubrovnik...",
//     tag: "Sailing",
//   },
//   {
//     id: 4,
//     image: "https://media.bookmundi.com/files/agency/trafalgar/cropped/products/6c91c4d5-ffd0-4f02-ab96-f8412e06fc7e.jpg?format=auto&quality=60&width=960",
//     title: "Great Britain and Ireland",
//     rating: 4.8,
//     days: "18 Days",
//     places: "31 Places",
//     countries: "5 Countries",
//     discountedPrice: "$3,832",
//     description:
//       "The one that shows you Britain’s best hotspots, topped off with The Emerald Isles",
//   },
  
// ];

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
      <SafariToursSection />
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
