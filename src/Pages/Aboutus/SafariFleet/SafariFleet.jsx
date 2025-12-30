// import React from 'react'
// import VechileInfo from './VechileInfo'
// import VehicleAndCabinSection from './VehicleAndCabinSection'
// import SafariExtrasSection from './SafariExtrasSection'
// import FaqSection from './FaqSection'
// import BookWithConfidence from '../../Home/BookWithConfidence'
// import Featured from '../../Home/Featured'
// import FAQSection from '../../../components/FAQSection'
// import OverviewSections from '../../../components/OverviewSections'

// const SafariFleet = () => {

//     const FaqsData = [
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

//   return (
//     <div>
//          <div
//         className="relative w-full h-[64vh] bg-center bg-cover flex items-center justify-center"
//         style={{
//           backgroundImage: `url('https://www.tanzania-experience.com/wp-content/uploads/2025/05/tanzania-in-seven-days.jpg')`,
//         }}
//       >
//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/30"></div>
//         <h2 className=" text-xl md:text-5xl text-white uppercase z-10 ">
//           OUR SAFARI VEHICLES
//         </h2>
//       </div>
//       {/* <VechileInfo/> */}
//       <OverviewSections 
//        label="Tanzania Safaris"
//       title="Our African Safari Vehicles, Types, Price & Destinations"
//       image="https://altezzatravel.com/upload/medialibrary/7ba/bngydoha013tdt4zulhi3ut6i2f1lf9e.webp"
//       imagePosition="right"
//       bg="#fcfcfc"
//       paragraphs={[
//         {
//           italic:true,
//           content:
//             "We are seasoned off-the-beaten-track travellers and I marvel that everything worked exactly as it was supposed to, wrote a recent traveller of his Expert Africa safari. “Here we were, in the middle of central Tanzania, waiting for a 10:05 flight. Guess what? At 10:03, there was the plane, buzzing animals off the grass runway, then touching down to pick us up. It happened every time. Dazzling!",
//         },
//         {
//           content:
//             "The same traveller went on to describe visceral wildlife encounters: “Having a leopard on your tent porch is not something I will soon forget. This is not Disneyland.”",
//         },
//         {
//           content:
//             "Tanzania’s tropical coast, sun-dappled beaches and scattering of islands are equally fascinating. Here cosmopolitan towns date back centuries to early trade routes and secluded Indian Ocean islands lie surrounded by white-sand beaches and colourful coral reefs."
//           },
//         {
//           italic: true,
//           content:
//            "Our eyes were wide with wonder from the moment we left the airstrip,” sighed a couple returning to Tanzania for the first time since their honeymoon 30 years earlier: “We had the most mind-blowing, amazing experience.”"
//         },
//       ]}
//       />
//       <VehicleAndCabinSection/>
//       <SafariExtrasSection/>
//       {/* <FaqSection/> */}
//       <FAQSection 
//         title={" *Wanna know how we crunched the number?"}
//         faqs={FaqsData}
//       />
//       <BookWithConfidence/>
//       <Featured/>
//     </div>
//   )
// }

// export default SafariFleet


import React, { useEffect, useState } from "react";
import axios from "axios";

import VechileInfo from "./VechileInfo";
import VehicleAndCabinSection from "./VehicleAndCabinSection";
import SafariExtrasSection from "./SafariExtrasSection";
import BookWithConfidence from "../../Home/BookWithConfidence";
import Featured from "../../Home/Featured";
import FAQSection from "../../../components/FAQSection";
import OverviewSections from "../../../components/OverviewSections";
import overviewimage from '../../../assets/safari-fleet-1.webp'



const API_URL =
  "https://imarabackend.imarakilelenisafaris.com/api/fleet"; 
// ⬆️ replace if your endpoint is different

const SafariFleet = () => {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH DATA ================= */
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        // API returns array → use first object
        setPage(res.data?.[0] || null);
      })
      .catch((err) => console.error("API ERROR:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-10 text-center">Loading...</p>;
  if (!page) return <p className="p-10 text-center">No data found</p>;

  /* ================= DATA MAPPING ================= */

  /* HERO */
  const heroTitle = page.title;
  const heroImage = page.image;

  /* OVERVIEW */
  const overview = page.overviewinfo?.[0];

  /* FAQ */
  const faqs =
    page.faq?.map((f) => ({
      question: f.question,
      answerBlocks: f.answer.map((a) => ({
        type: a.type,
        text: a.content,
      })),
    })) || [];

  return (
    <div>
      {/* ================= HERO ================= */}
      <div
        className="relative w-full h-[40vh] md:h-[64vh] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <h2 className="text-2xl md:text-5xl text-white uppercase z-10">
          {heroTitle}
        </h2>
      </div>

      {/* ================= OVERVIEW ================= */}
      {overview && (
        <OverviewSections
          label={overview.subtitle || "Tanzania Safaris"}
          title={overview.title}
          image={overviewimage}
          imagePosition="right"
          bg="#fcfcfc"
          paragraphs={overview.description.map((d) => ({
            content: d.content,
          }))}
        />
      )}

      {/* ================= EXISTING SECTIONS (UNCHANGED) ================= */}
      <VehicleAndCabinSection />
      <SafariExtrasSection />

      {/* ================= FAQ ================= */}
      <FAQSection
        title="*Wanna know how we crunched the number?"
        faqs={faqs}
      />

      <BookWithConfidence />
      <Featured />
    </div>
  );
};

export default SafariFleet;
