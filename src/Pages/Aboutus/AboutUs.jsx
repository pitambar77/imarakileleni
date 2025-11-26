import React from "react";
import Banner from "../../components/Banner";
import {
  FaCalendarAlt,
  FaHourglassHalf,
  FaShieldAlt,
  FaStar,
  FaWallet,
} from "react-icons/fa";
import AboutInfoSection from "./AboutInfoSection";
import OnTheRoadSection from "./OnTheRoadSection";
import OffTheRoadSection from "./OffTheRoadSection";
import SafariFeatureSection from "./SafariFeatureSection";
import ContikiCrewSection from "./ContikiCrewSection";

import ReviewsSection from "./ReviewsSection";

import Featured from "../Home/Featured";
import WhyVisitSection from "../../components/WhyVisitSection";
import FAQSection from "../../components/FAQSection";
import OverviewSections from "../../components/OverviewSections";

const AboutUs = () => {


    const data = [
    {
      id: 1,
      image:
        "https://tanzania-specialist.com/wp-content/uploads/2025/06/Tanzania-vacation-scaled.jpg",
      title: "Go further than you’d go alone",
      text: "On these Africa & the Middle East trips for 18–35s, you’ll travel with friendly people, plus an expert Trip Manager and local guides. Perfect for giving you confidence and bringing the fun vibes!",
    },
    {
      id: 2,
      image:
        "https://www.nkuringosafaris.com/wp-content/uploads/2024/05/African_safari_woman_sunset__-jpg.webp",
      title: "Seriously special stays",
      text: "Camping under the stars in Kruger. Luxury cruising on the Nile. Waterfront stays in Zambia. Our Africa & the Middle East trips are studded with stays that’ll make you wanna stay forever.",
    },
    {
      id: 3,
      image:
        "https://www.serengetiheroes.com/wp-content/uploads/2024/03/women-safari-1290x737.webp",
      title: "Experiences that count",
      text: "Support rescued elephants, meet Maasai people, and even visit a Women’s Collective in Morocco’s Dades Valley. These experiences aren’t just good for you – they’re good for people, planet & wildlife too!",
    },
  ];

  const safariFaqs = [
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


  return (
    <>
   
    
      <div
        className="relative w-full h-[64vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url('https://b-cdn.springnest.com/media/img/xz/ruaha_foxes_caseypratt_loveafrica-5126f577635.jpg?crop=6048%2C2419%2C0%2C1605&width=3000')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="w-full bg-[#d76e28]">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-white text-xs md:text-sm font-semibold">
          <span className="inline-flex items-center gap-2">
            RATED 4.7 / 5
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <span className="opacity-90">
              | BASED ON 25,000 VERIFIED REVIEWS
            </span>
          </span>
        </div>
      </div>
      <div className=" w-full bg-[#fedec7] py-16 ">
        <div className=" text-center max-w-3xl mx-auto  space-y-3 ">
          <h2 className=" text-xl md:text-3xl capitalize text-center">
            About Us
          </h2>
          <h3 className=" font-extrabold">
            From personsl passion to award-winning,bespoke tour operator
          </h3>
          <p>
            Grown from a deep love of the African contient and its people,
            Expert Africa is a dedicated team of travel specialists crafting
            high-quality, tailore-made trips to Sourthern and East Africa.
          </p>
        </div>
      </div>

      {/* <AboutInfoSection /> */}
      <OverviewSections 
       label="Tanzania Safaris"
      title="In Kilimanjaro's footprint, Tanzania mesmerizes with the great wildebeest migration wildlife"
      image="https://images.squarespace-cdn.com/content/v1/5f1ab4309bd4b45e29ec3e4b/1688629973354-NWWQV5E0GV2KDOY12YSU/South-Africa-Ngala-Safari-Lodge-andBeyonder-butlers-_3_-Collections-3000w.jpg"
      imagePosition="right"
      bg="#fcfcfc"
      paragraphs={[
        {
          italic:true,
          content:
            "We are seasoned off-the-beaten-track travellers and I marvel that everything worked exactly as it was supposed to, wrote a recent traveller of his Expert Africa safari. “Here we were, in the middle of central Tanzania, waiting for a 10:05 flight. Guess what? At 10:03, there was the plane, buzzing animals off the grass runway, then touching down to pick us up. It happened every time. Dazzling!",
        },
        {
          content:
            "The same traveller went on to describe visceral wildlife encounters: “Having a leopard on your tent porch is not something I will soon forget. This is not Disneyland.”",
        },
        {
          content:
            "Tanzania’s tropical coast, sun-dappled beaches and scattering of islands are equally fascinating. Here cosmopolitan towns date back centuries to early trade routes and secluded Indian Ocean islands lie surrounded by white-sand beaches and colourful coral reefs."
          },
        {
          italic: true,
          content:
           "Our eyes were wide with wonder from the moment we left the airstrip,” sighed a couple returning to Tanzania for the first time since their honeymoon 30 years earlier: “We had the most mind-blowing, amazing experience.”"
        },
      ]}
      />
      <div className="bg-[#fedec7]">
        {" "}
        {/* soft peach background */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
          {/* Heading centered */}
          <h2 className="text-center text-2xl md:text-3xl font-bold text-black mb-16 capitalize">
            Book with confidence
          </h2>

          {/* Features row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center ">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-14 h-14 rounded-full bg-black flex items-center justify-center">
                <FaWallet className="text-[#f3a85f] w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-black">
                  Lock in your spot with a{" "}
                  <span className="font-bold">$200 deposit</span>
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-14 h-14 rounded-full bg-black flex items-center justify-center">
                <FaHourglassHalf className="text-[#f3a85f] w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-black">
                  <u className="font-bold">Pay monthly</u> or bi-weekly
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-14 h-14 rounded-full bg-black flex items-center justify-center">
                <FaCalendarAlt className="text-[#f3a85f] w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-black">
                  Amend your booking up to{" "}
                  <span className="font-bold">60 days</span> pre-trip
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-14 h-14 rounded-full bg-black flex items-center justify-center">
                <FaShieldAlt className="text-[#f3a85f] w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-black">
                  Plans changed? Your payments are protected
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-16">
            <button
              className="px-8 py-3 rounded-full border-2 border-black text-black font-semibold bg-transparent hover:bg-black hover:text-white transition"
              aria-label="Find out more"
            >
              FIND OUT MORE
            </button>
          </div>
        </div>
      </div>

      <OnTheRoadSection/>
      <OffTheRoadSection/>
      <ContikiCrewSection/>
      <SafariFeatureSection/>
      {/* <WhyVisitTanzania/> */}
      <WhyVisitSection 
      title={" Why visit Tanzania with Imara Kileleni Safaris?"}
      cards={data}
      />
      <ReviewsSection/>
      
      <FAQSection 
      title=" What do travellers ask about our African safari tours?" faqs={safariFaqs}
      />
      <Featured/>
      
      
    </>
  );
};

export default AboutUs;
