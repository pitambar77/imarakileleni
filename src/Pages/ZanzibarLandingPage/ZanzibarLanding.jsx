// import React from "react";
// import LandingBanner from "../../components/LandingBanner";
// import zanzibarL from "../../assets/zanzibarL.webp";
// import ThingsToDo from "./ThingsToDo";
// import Highlights from "../../components/Highlights";
// import PackagesSection from "./PackagesSection";
// import BestTimeToVisitSection from "../SerengetiNationalPark/BestTimeToVisitSection";
// import FAQSection from "../../components/FAQSection";
// import BookWithConfidence from "../Home/BookWithConfidence";
// import Featured from "../Home/Featured";
// import AdventureTour from "../../components/AdventureTour";
// import OverviewSections from "../../components/OverviewSections";
// import TabLink from "./TabLink";

// const tripsData = [
//   {
//     id: 1,
//     image: "https://www.zanzibar.com/media-assets/spice-farm-featured.jpg",
//     title: "Abdalla Abeid Spice Farm",
//     description:
//       "The one that sees you swish through the scenic south island. The one that sees you swish through the scenic south island.....",
//   },
//   {
//     id: 2,
//     image:
//       "https://www.zanzibar.com/media-assets/sunset-on-zanzibar-beach-featured.jpg",
//     title: "Sunset Dhow Cruise",
//     description:
//       "The one that takes you to west Thailand..The one that sees you swish through the scenic south island. you to west Thailand....",
//   },
//   {
//     id: 3,
//     image: "https://www.zanzibar.com/media-assets/deep-fishing-featured.jpg",
//     title: "Deep-Sea Fishing",
//     description:
//       "The one that sees you swish through the scenic south island.. The one that sees you swish through the scenic south island....",
//   },
//   {
//     id: 4,
//     image:
//       "https://www.zanzibar.com/media-assets/mnarani-aquarium-hero-mobile-992-768x768.jpg.webp",
//     title: "Nungwi Mnarani Aquarium",
//     description:
//       "The one that takes you to west Thailand.. The one that sees you swish through the scenic south island... you to west Thailand..",
//   },
//   {
//     id: 5,
//     image:
//       "https://www.zanzibar.com/media-assets/wedding-home-feature-visual-1400-1200x736.jpg.webp",
//     title: "WEDDINGS IN ZANZIBAR",
//     description:
//       "The one that sees you swish through the scenic south island..The one that sees you swish through the scenic south island....",
//   },
//   {
//     id: 6,
//     image:
//       "https://www.zanzibar.com/media-assets/forodhani-gardens-featured.jpg.webp",
//     title: "Forodhani Gardens Market",
//     description:
//       "The one that takes you to west Thailand. The one that sees you swish through the scenic south island... you to west Thailand...",
//   },
// ];
// const monthData = [
//   {
//     name: "Jan",
//     season: "Summer Season",
//     rating: "Excellent",
//     color: "bg-[#A5D6A7]",
//     description: [
//       "When the drought comes in May, the herd moves north, towards the Masai Mara in Kenya, chomping down the high green grass, quickly followed by the gazelles and zebras. The migration is not without risk: crossing rivers means facing about 3,000 crocodiles, patiently waiting for a kill. Not to mention the famous Serengeti lion population: by far the largest in Africa. Despite the abundance of hoofed meat in this area, life is not easy for these big cats in this unforgiving landscape. But seeing a group of lions collaborating to hunt down a wildebeest is an unforgettable sight.",
//     ],
//   },
//   {
//     name: "Feb",
//     season: "Summer Season",
//     rating: "Excellent",
//     color: "bg-[#A5D6A7]",
//     description: [
//       "February continues the warm, sunny conditions ideal for beach days and game drives.",
//       "Cape Town’s wine festivals and outdoor dining experiences are in full swing.",
//       "It’s a great time to enjoy both the coast and wildlife reserves.",
//     ],
//   },
//   {
//     name: "Mar",
//     season: "Autumn Begins",
//     rating: "Excellent",
//     color: "bg-[#A5D6A7]",
//     description: [
//       "March offers slightly cooler weather, fewer crowds, and amazing scenery.",
//       "Perfect for hiking, safari, and photography with clear skies and lush landscapes.",
//       "Still warm enough for coastal activities and cultural experiences.",
//     ],
//   },
//   {
//     name: "Apr",
//     season: "Autumn",
//     rating: "Good",
//     color: "bg-[#F1F8C0]",
//     description: [
//       "April brings mild temperatures and fewer tourists, great for relaxed travel.",
//       "Wildlife spotting improves as vegetation thins.",
//       "Ideal for exploring cities, vineyards, and nature reserves alike.",
//     ],
//   },
//   {
//     name: "May",
//     season: "Wet Season",
//     rating: "Mixed",
//     color: "bg-[#E1D7F8]",
//     description: [
//       "This is the period that the wildebeest, after having feasted on the short green grasses of the southeastern Serengeti and after having giving birth to their offspring, start getting ready for their 800 kilometer long trek. The actual starting date may be anytime between late April and early June. This is the time to you may have the privilege to see one of the greatest natural phenomena in the world: more than a million marching animals in a column up to 40 kilometers long. During the migration, the herd will move towards the Western Corridor, where they will face the first major obstacle: crossing the Grumeti River. Many animals don’t survive the crossing as they are being awaited by the area’s population of oversized crocodiles ready to feast. The herd may congregate on the southern bank of the river and stay there for up to two weeks before crossing the river.",
//     ],
//   },
//   {
//     name: "Jun",
//     season: "Winter",
//     rating: "Mixed",
//     color: "bg-[#E1D7F8]",
//     description: [
//       "Cooler weather makes it perfect for safaris and wildlife spotting.",
//       "Cape Town experiences rain, but landscapes are lush and green.",
//     ],
//   },
//   {
//     name: "Jul",
//     season: "Winter",
//     rating: "Mixed",
//     color: "bg-[#E1D7F8]",
//     description: [
//       "This is the period that the wildebeest, after having feasted on the short green grasses of the southeastern Serengeti and after having giving birth to their offspring, start getting ready for their 800 kilometer long trek. The actual starting date may be anytime between late April and early June. This is the time to you may have the privilege to see one of the greatest natural phenomena in the world: more than a million marching animals in a column up to 40 kilometers long. During the migration, the herd will move towards the Western Corridor, where they will face the first major obstacle: crossing the Grumeti River. Many animals don’t survive the crossing as they are being awaited by the area’s population of oversized crocodiles ready to feast. The herd may congregate on the southern bank of the river and stay there for up to two weeks before crossing the river.",
//     ],
//   },
//   {
//     name: "Aug",
//     season: "Winter",
//     rating: "Good",
//     color: "bg-[#F1F8C0]",
//     description: [
//       "When the Grumeti River obstacle has been taken, the herd moves further north and starts crossing the next big hurdle, the Mara River, in July or August. The Mara River crossing is where so many iconic Great Migration photos have been taken. After this crossing the herd flocks to the northwest plains and Masai Mara National Reserve in Kenya. The August – September period is considered being a bad time to visit Serengeti National Park and see the Great Migration as the herd moves into the Masai Mara in Kenya. However, migration patterns show that about half of the herd stays on the Tanzanian side, in the Mara Serengeti area. In this period, smaller herds of wildebeest (well consider small… herds may count up to between 500 and thousands of individuals) frequently cross the Mara River, back and forth, for no apparent reason. This is an excellent time to stay at one of the Serengeti Mara camps.",
//     ],
//   },
//   {
//     name: "Sep",
//     season: "Spring",
//     rating: "Good",
//     color: "bg-[#F1F8C0]",
//     description: [
//       "Crossing the Mara River northbound means that, at one point, the herd needs to cross the river one more time before commencing the trek back in a southerly direction. This usually happens in October, but sometimes earlier. In this period the herd will cross the northern plains and Lobo area. This section of Serengeti National Park is little-visited, so if you are looking to see the migration in relative quietness, this would be the time. The wildebeest return to the short- grass plains and calving ground around Ndutu in late November. And from here, the Great Migration starts all over again.",
//     ],
//   },
//   {
//     name: "Oct",
//     season: "Spring",
//     rating: "Excellent",
//     color: "bg-[#A5D6A7]",
//     description: [
//       "October offers warm weather and fewer crowds — perfect for adventure and relaxation.",
//       "Ideal for whale watching and outdoor exploration.",
//     ],
//   },
//   {
//     name: "Nov",
//     season: "Early Summer",
//     rating: "Excellent",
//     color: "bg-[#A5D6A7]",
//     description: [
//       "November welcomes summer with long, sunny days and vibrant energy.",
//       "Perfect time for safaris, beaches, and festive events.",
//     ],
//   },
//   {
//     name: "Dec",
//     season: "Summer",
//     rating: "Excellent",
//     color: "bg-[#A5D6A7]",
//     description: [
//       "December is lively and festive, with perfect beach weather.",
//       "Expect crowds and higher prices, but amazing summer vibes.",
//     ],
//   },
// ];

// const FaqsData = [
//   {
//     question: "How long does an African safari take?",
//     answerBlocks: [
//       {
//         type: "paragraph",
//         text: [
//           "Mount Kilimanjaro is a large dormant volcano in Tanzania. It is the highest mountain in Africa and the highest free-standing mountain above sea level in the world, at 5,895 m above sea level and 4,900 m above its plateau base.",
//           "Mount Kilimanjaro is a large dormant volcano in Tanzania. It is the highest mountain in Africa and the highest free-standing mountain above sea level in the world, at 5,895 m above sea level and 4,900 m above its plateau base.",
//           "For a deeper experience, 2 weeks is ideal.",
//         ],
//       },
//       {
//         type: "heading",
//         text: "Recommended Duration:",
//       },
//       {
//         type: "list",
//         items: [
//           "Short Safaris: 3–5 days",
//           "Mount Kilimanjaro is a large dormant volcano in Tanzania. It is the highest mountain in Africa and the highest free-standing mountain above sea level in the world, at 5,895 m above sea level and 4,900 m above its plateau base.",
//           "Full Safari Experience: 12–14 days",
//           "Extended Adventure: 21+ days",
//         ],
//       },
//       {
//         type: "paragraph",
//         text: "If you want the full wildlife experience, 2 weeks is ideal.",
//       },
//     ],
//   },

//   {
//     question: "What is the best month to go on safari?",
//     answerBlocks: [
//       {
//         type: "paragraph",
//         text: [
//           "June to October is considered the dry season.",
//           "Mount Kilimanjaro is a large dormant volcano in Tanzania. It is the highest mountain in Africa and the highest free-standing mountain above sea level in the world, at 5,895 m above sea level and 4,900 m above its plateau base.",
//         ],
//       },
//       {
//         type: "heading",
//         text: "Why Dry Season?",
//       },
//       {
//         type: "paragraph",
//         text: "Animals gather around water sources, making sightings easier.",
//       },
//     ],
//   },
// ];

// const teamData = [
//   {
//     image: "https://www.contiki.com/media/wcxfjs4s/south-america-peru.jpg",
//     heading: "Contiki adventure tour",
//     subheading:
//       "When we founded Timbuktu in 2014, we knew exactly what we wanted to do: make planning extraordinary trips to the far-flung corners of the world ",
//     description:
//       "You’ll traverse Norway in search of Arctic whales and the Northern Lights. You’ll kayak along Vietnam’s majestic Nho Que River. You’ll ride a horse on the jawdropping plains of Patagonia. Adventure travel is all about unleashing a new side of yourself and discovering what you’re capable of, and that’s exactly what you’ll do on these trips - whether you’re trekking Peru’s Inca Trail or swimming in the Great Barrier Reef.",
//   },
//   {
//     image:
//       "https://www.contiki.com/media/jqah4mlo/bungy-jumping-in-new-zealand.jpg",
//     heading: "Adventure travel",
//     subheading:
//       "Adventure travel is all about the unbelievable people you meet, the new foods you try and the activities you embark on.",
//     description:
//       "What comes to mind when you hear the word ‘adventure’? Exploring cultural hotspots in historical cities, jumping out of planes over the gobsmacking landscapes of New Zealand or exploring the plains of Africa on a wildlife safari? Whatever you’re looking for on your adventure tour, it’s ready and waiting with Contiki.",
//   },
// ];

// const ZanzibarLanding = () => {
//   return (
//     <div>
//       <LandingBanner bannerImg={zanzibarL} title={"VISIT ZANZIBAR"} />

//       <TabLink />
//       <OverviewSections
//         label="Explore Zanzibar"
//         title="5 Reasons to Visit Zanzibar for a Beach Holiday Explore Historic Stone Town"
//         image="https://www.tanzaniatourism.com/images/uploads/Nakupenda_Sandbank_Zanzibar.jpg"
//         imagePosition="right"
//         bg="#fcfcfc"
//         paragraphs={[
//           {
//             content:
//               "Situated in the heart of East Africa, Tanzania has earned a distinguished reputation as a top-tier safari spot, showcasing a breathtaking variety of wildlife, diverse landscapes, and rich cultural heritage. With an increasing appeal for family-centric travel adventures, driven by the allure of unspoiled wilderness, Tanzania has emerged as a prime choice for family safaris.",
//           },
//           {
//             content:
//               "Join us on this exploration as we navigate the wonders of Tanzania’s wildlife, landscapes, and cultural heritage through the lens of a family safari. the wonders of Tanzania’s wildlife",
//           },
//           {
//             content:
//               "Opting for a Tanzania family safari guarantees a distinctive and enriching journey that caters to the diverse interests and requirements of each family member. The nation’s abundant biodiversity, showcasing iconic wildlife and conservation havens like the Serengeti National Park and Ngorongoro Crater, sets a unique stage for witnessing the annual Great Migration. ",
//           },
//           {
//             italic: true,
//             content:
//               "“Our eyes were wide with wonder from the moment we left the airstrip...”",
//           },
//         ]}
//       />
//       <PackagesSection />
//       <ThingsToDo />
//       <Highlights title="Visit in Zanzibar" trips={tripsData} />
//       <BestTimeToVisitSection
//         title={`Best Time to visit serengeti`}
//         subtitle=""
//         staticMonths={monthData}
//       />
//       <AdventureTour sections={teamData} />
//       <FAQSection
//         title={"Frequently ask question for Zanzibar"}
//         faqs={FaqsData}
//       />
//       <BookWithConfidence />
//       <Featured />
//     </div>
//   );
// };

// export default ZanzibarLanding;

import React, { useEffect, useState } from "react";

import API from "../../api/axios";
import SerengetiMigrationTabs from "../SerengetiNationalPark/SerengetiMigrationTabs";
import ChoosingSafariSection from "../SerengetiNationalPark/ChoosingSafariSection";
import TripHighlights from "../../components/TripHighlights";
import BestTimeToVisitSection from "../SerengetiNationalPark/BestTimeToVisitSection";
import BookWithConfidence from "../Home/BookWithConfidence";
import Featured from "../Home/Featured";
import ActiveTravelDestinations from "../TravelGuideDetails/ActiveTravelDestinations";
import AdventureTour from "../../components/AdventureTour";
import FAQSection from "../../components/FAQSection";
import OverviewSections from "../../components/OverviewSections";
import TabLink from "./TabLink";

const ZanzibarLanding = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/zanzibardetails")
      .then((res) => {
        setData(res.data[0]); // 👈 single page
      })
      .catch((err) => console.error("Destination error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-10 text-center">Loading...</p>;
  if (!data) return <p className="p-10 text-center">No data found</p>;

  const {
    title,
    subtitle,
    destination,
    image,
    overviewinfo = [],
    highlight = [],
    besttime = [],
    migration = [],
    adventure = [],
    aboutBooking = [],
  } = data;

  /* ================= FAQ ================= */
  const faqs = aboutBooking.map((item) => ({
    question: item.question,
    answerBlocks: item.answer.map((a) => ({
      type: a.type,
      text: a.content,
    })),
  }));

  const monthData = besttime.flatMap((bt) =>
    (bt.section || []).map((m) => ({
      name: m.month, // ✅ month name
      season: bt.title, // ✅ group title
      rating: "Excellent", // optional (UI only)
      description: [m.content], // ✅ must be ARRAY
    }))
  );

  /* ================= TRIP HIGHLIGHTS ================= */
  const trips = highlight.flatMap((group, groupIndex) =>
    (group.section || []).map((item, index) => ({
      id: `${groupIndex}-${index}`,
      image: item.image,
      title: item.title,
      description: item.description,
    }))
  );

  /* ================= ADVENTURE ================= */
  const adventureSections = adventure.map((item) => ({
    image: item.image,
    heading: item.title,
    subheading: item.subtitle,
    description: item.description,
  }));

  return (
    <div>
      {/* HERO */}
      <div
        className="relative w-full h-[40vh] md:h-[64vh] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h2 className="text-2xl md:text-5xl text-center text-white uppercase z-10">
          {title}
        </h2>
      </div>

      <TabLink />

      {/* OVERVIEW */}
      {overviewinfo.map((item) => (
        <OverviewSections
          key={item._id}
          label={item.subtitle}
          title={item.title}
          image={item.image}
          imagePosition="right"
          bg="#fcfcfc"
          paragraphs={item.description}
        />
      ))}

      <ChoosingSafariSection />

      {/* MIGRATION */}
      {migration.length > 0 && <SerengetiMigrationTabs data={migration} />}

      {trips.length > 0 && (
        <TripHighlights title={`${destination} Trip Highlights`} data={trips} />
      )}

      {monthData.length > 0 && (
        <BestTimeToVisitSection
          title={`Best time to visit ${title}`}
          staticMonths={monthData}
        />
      )}

      {/* ADVENTURE */}
      {adventureSections.length > 0 && (
        <AdventureTour sections={adventureSections} />
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <FAQSection
          title="What travellers ask about our safari tours?"
          faqs={faqs}
        />
      )}

      <ActiveTravelDestinations />
      <BookWithConfidence />
      <Featured />
    </div>
  );
};

export default ZanzibarLanding;
