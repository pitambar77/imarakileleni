import React from 'react'
import LandingBanner from '../../components/LandingBanner'
import zanzibarL from '../../assets/zanzibarL.webp'
import ThingsToDo from './ThingsToDo'
import Highlights from '../../components/Highlights';
import OverViewSection from './OverViewSection';
import PackagesSection from './PackagesSection';
import BestTimeToVisitSection from '../SerengetiNationalPark/BestTimeToVisitSection';
import FAQSection from '../../components/FAQSection';
import BookWithConfidence from '../Home/BookWithConfidence';
import Featured from '../Home/Featured';


const tripsData = [
  {
    id: 1,
    image:
      "https://www.zanzibar.com/media-assets/spice-farm-featured.jpg",
    title:"Abdalla Abeid Spice Farm",
    description:
      "The one that sees you swish through the scenic south island. The one that sees you swish through the scenic south island.....",
  },
  {
    id: 2,
    image:
      "https://www.zanzibar.com/media-assets/sunset-on-zanzibar-beach-featured.jpg",
title:"Sunset Dhow Cruise",
    description:
      "The one that takes you to west Thailand..The one that sees you swish through the scenic south island. you to west Thailand....",
  },
  {
    id: 3,
    image:
      "https://www.zanzibar.com/media-assets/deep-fishing-featured.jpg",
title:"Deep-Sea Fishing",
    description:
      "The one that sees you swish through the scenic south island.. The one that sees you swish through the scenic south island....",
  },
  {
    id: 4,
    image:
      "https://www.zanzibar.com/media-assets/mnarani-aquarium-hero-mobile-992-768x768.jpg.webp",
title:"Nungwi Mnarani Aquarium",
    description:
      "The one that takes you to west Thailand.. The one that sees you swish through the scenic south island... you to west Thailand..",
  },
  {
    id: 5,
    image:
      "https://www.zanzibar.com/media-assets/wedding-home-feature-visual-1400-1200x736.jpg.webp",
    title:"WEDDINGS IN ZANZIBAR",
    description:
      "The one that sees you swish through the scenic south island..The one that sees you swish through the scenic south island....",
  },
  {
    id: 6,
    image:
      "https://www.zanzibar.com/media-assets/forodhani-gardens-featured.jpg.webp",
    title:"Forodhani Gardens Market",
    description:
      "The one that takes you to west Thailand. The one that sees you swish through the scenic south island... you to west Thailand...",
  },
];
  const monthData = [
    {
      name: "Jan",
      season: "Summer Season",
      rating: "Excellent",
      color: "bg-[#A5D6A7]",
      description: [
        "When the drought comes in May, the herd moves north, towards the Masai Mara in Kenya, chomping down the high green grass, quickly followed by the gazelles and zebras. The migration is not without risk: crossing rivers means facing about 3,000 crocodiles, patiently waiting for a kill. Not to mention the famous Serengeti lion population: by far the largest in Africa. Despite the abundance of hoofed meat in this area, life is not easy for these big cats in this unforgiving landscape. But seeing a group of lions collaborating to hunt down a wildebeest is an unforgettable sight.",
      ],
    },
    {
      name: "Feb",
      season: "Summer Season",
      rating: "Excellent",
      color: "bg-[#A5D6A7]",
      description: [
        "February continues the warm, sunny conditions ideal for beach days and game drives.",
        "Cape Town’s wine festivals and outdoor dining experiences are in full swing.",
        "It’s a great time to enjoy both the coast and wildlife reserves.",
      ],
    },
    {
      name: "Mar",
      season: "Autumn Begins",
      rating: "Excellent",
      color: "bg-[#A5D6A7]",
      description: [
        "March offers slightly cooler weather, fewer crowds, and amazing scenery.",
        "Perfect for hiking, safari, and photography with clear skies and lush landscapes.",
        "Still warm enough for coastal activities and cultural experiences.",
      ],
    },
    {
      name: "Apr",
      season: "Autumn",
      rating: "Good",
      color: "bg-[#F1F8C0]",
      description: [
        "April brings mild temperatures and fewer tourists, great for relaxed travel.",
        "Wildlife spotting improves as vegetation thins.",
        "Ideal for exploring cities, vineyards, and nature reserves alike.",
      ],
    },
    {
      name: "May",
      season: "Wet Season",
      rating: "Mixed",
      color: "bg-[#E1D7F8]",
      description: [
        "This is the period that the wildebeest, after having feasted on the short green grasses of the southeastern Serengeti and after having giving birth to their offspring, start getting ready for their 800 kilometer long trek. The actual starting date may be anytime between late April and early June. This is the time to you may have the privilege to see one of the greatest natural phenomena in the world: more than a million marching animals in a column up to 40 kilometers long. During the migration, the herd will move towards the Western Corridor, where they will face the first major obstacle: crossing the Grumeti River. Many animals don’t survive the crossing as they are being awaited by the area’s population of oversized crocodiles ready to feast. The herd may congregate on the southern bank of the river and stay there for up to two weeks before crossing the river."
    ]
    },
    {
      name: "Jun",
      season: "Winter",
      rating: "Mixed",
      color: "bg-[#E1D7F8]",
      description: [
        "Cooler weather makes it perfect for safaris and wildlife spotting.",
        "Cape Town experiences rain, but landscapes are lush and green.",
      ],
    },
    {
      name: "Jul",
      season: "Winter",
      rating: "Mixed",
      color: "bg-[#E1D7F8]",
      description: [
        "This is the period that the wildebeest, after having feasted on the short green grasses of the southeastern Serengeti and after having giving birth to their offspring, start getting ready for their 800 kilometer long trek. The actual starting date may be anytime between late April and early June. This is the time to you may have the privilege to see one of the greatest natural phenomena in the world: more than a million marching animals in a column up to 40 kilometers long. During the migration, the herd will move towards the Western Corridor, where they will face the first major obstacle: crossing the Grumeti River. Many animals don’t survive the crossing as they are being awaited by the area’s population of oversized crocodiles ready to feast. The herd may congregate on the southern bank of the river and stay there for up to two weeks before crossing the river.",
      ],
    },
    {
      name: "Aug",
      season: "Winter",
      rating: "Good",
      color: "bg-[#F1F8C0]",
      description: [
        "When the Grumeti River obstacle has been taken, the herd moves further north and starts crossing the next big hurdle, the Mara River, in July or August. The Mara River crossing is where so many iconic Great Migration photos have been taken. After this crossing the herd flocks to the northwest plains and Masai Mara National Reserve in Kenya. The August – September period is considered being a bad time to visit Serengeti National Park and see the Great Migration as the herd moves into the Masai Mara in Kenya. However, migration patterns show that about half of the herd stays on the Tanzanian side, in the Mara Serengeti area. In this period, smaller herds of wildebeest (well consider small… herds may count up to between 500 and thousands of individuals) frequently cross the Mara River, back and forth, for no apparent reason. This is an excellent time to stay at one of the Serengeti Mara camps.",
      ],
    },
    {
      name: "Sep",
      season: "Spring",
      rating: "Good",
      color: "bg-[#F1F8C0]",
      description: [
        "Crossing the Mara River northbound means that, at one point, the herd needs to cross the river one more time before commencing the trek back in a southerly direction. This usually happens in October, but sometimes earlier. In this period the herd will cross the northern plains and Lobo area. This section of Serengeti National Park is little-visited, so if you are looking to see the migration in relative quietness, this would be the time. The wildebeest return to the short- grass plains and calving ground around Ndutu in late November. And from here, the Great Migration starts all over again."
      ],
    },
    {
      name: "Oct",
      season: "Spring",
      rating: "Excellent",
      color: "bg-[#A5D6A7]",
      description: [
        "October offers warm weather and fewer crowds — perfect for adventure and relaxation.",
        "Ideal for whale watching and outdoor exploration.",
      ],
    },
    {
      name: "Nov",
      season: "Early Summer",
      rating: "Excellent",
      color: "bg-[#A5D6A7]",
      description: [
        "November welcomes summer with long, sunny days and vibrant energy.",
        "Perfect time for safaris, beaches, and festive events.",
      ],
    },
    {
      name: "Dec",
      season: "Summer",
      rating: "Excellent",
      color: "bg-[#A5D6A7]",
      description: [
        "December is lively and festive, with perfect beach weather.",
        "Expect crowds and higher prices, but amazing summer vibes.",
      ],
    },
  ];

      const FaqsData = [
  {
    question: "How long does an African safari take?",
    answerBlocks: [
      {
        type: "paragraph",
        text: [
          "Mount Kilimanjaro is a large dormant volcano in Tanzania. It is the highest mountain in Africa and the highest free-standing mountain above sea level in the world, at 5,895 m above sea level and 4,900 m above its plateau base.",
          "Mount Kilimanjaro is a large dormant volcano in Tanzania. It is the highest mountain in Africa and the highest free-standing mountain above sea level in the world, at 5,895 m above sea level and 4,900 m above its plateau base.",
          "For a deeper experience, 2 weeks is ideal.",
        ],
      },
      {
        type: "heading",
        text: "Recommended Duration:",
      },
      {
        type: "list",
        items: [
          "Short Safaris: 3–5 days",
          "Mount Kilimanjaro is a large dormant volcano in Tanzania. It is the highest mountain in Africa and the highest free-standing mountain above sea level in the world, at 5,895 m above sea level and 4,900 m above its plateau base.",
          "Full Safari Experience: 12–14 days",
          "Extended Adventure: 21+ days",
        ],
      },
      {
        type: "paragraph",
        text: "If you want the full wildlife experience, 2 weeks is ideal.",
      },
    ],
  },

  {
    question: "What is the best month to go on safari?",
    answerBlocks: [
      {
        type: "paragraph",
        text: [
          "June to October is considered the dry season.",
          "Mount Kilimanjaro is a large dormant volcano in Tanzania. It is the highest mountain in Africa and the highest free-standing mountain above sea level in the world, at 5,895 m above sea level and 4,900 m above its plateau base.",
        ],
      },
      {
        type: "heading",
        text: "Why Dry Season?",
      },
      {
        type: "paragraph",
        text: "Animals gather around water sources, making sightings easier.",
      },
    ],
  },
];

const ZanzibarLanding = () => {
  return (
    <div>
        <LandingBanner 
        bannerImg={zanzibarL}
        title={"VISIT ZANZIBAR"}
        />
        <OverViewSection/>
        <PackagesSection/>
        <ThingsToDo/>
         <Highlights title="Visit in Zanzibar" trips={tripsData} />
              <BestTimeToVisitSection
        title={`Best Time to visit serengeti`}
        subtitle=""
        staticMonths={monthData}
      />
      <FAQSection 
      title={"Frequently ask question for Zanzibar"}
      faqs={FaqsData}
      />
      <BookWithConfidence/>
      <Featured/>
    </div>
  )
}

export default ZanzibarLanding