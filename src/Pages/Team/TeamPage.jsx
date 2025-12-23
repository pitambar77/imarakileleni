// import React from 'react'
// import AboutAfricaSection from './AboutAfricaSection'
// import SafariExpertsSection from './SafariExpertsSection'

// import BookWithConfidence from '../Home/BookWithConfidence'
// import Featured from '../Home/Featured'
// import AdventureTour from '../../components/AdventureTour'

// const teamData = [
    
//         {
//             image:
//               "https://www.contiki.com/media/wcxfjs4s/south-america-peru.jpg",
           
//             description:
//               "You’ll traverse Norway in search of Arctic whales and the Northern Lights. You’ll kayak along Vietnam’s majestic Nho Que River. You’ll ride a horse on the jawdropping plains of Patagonia. Adventure travel is all about unleashing a new side of yourself and discovering what you’re capable of, and that’s exactly what you’ll do on these trips - whether you’re trekking Peru’s Inca Trail or swimming in the Great Barrier Reef.",
//           },
//           {
//             image:
//               "https://www.contiki.com/media/jqah4mlo/bungy-jumping-in-new-zealand.jpg",
//           description:
//               "What comes to mind when you hear the word ‘adventure’? Exploring cultural hotspots in historical cities, jumping out of planes over the gobsmacking landscapes of New Zealand or exploring the plains of Africa on a wildlife safari? Whatever you’re looking for on your adventure tour, it’s ready and waiting with Contiki.",
//           },
    
// ]

// const TeamPage = () => {
//   return (
//     <div>
//          <div
//         className="relative w-full h-[64vh] bg-center bg-cover flex items-center justify-center"
//         style={{
//           backgroundImage: `url('https://www.wildernessdestinations.com/media/3imn2iov/wilderness-experiences-guided-walks-landscape.jpg')`,
//         }}
//       >
//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/30"></div>
//         <h2 className=" text-xl md:text-5xl text-white uppercase z-10 ">
//           MEET OUR TEAM
//         </h2>
//       </div>
//       <AboutAfricaSection/>
//       <SafariExpertsSection/>
//       {/* <AdventureTour/> */}
//       <AdventureTour
//       title={"Why go on an adventure tour with contiki?"}
      
//      sections={teamData}
//      />
//       <BookWithConfidence/>
//       <Featured/>
//     </div>
//   )
// }

// export default TeamPage

import React, { useEffect, useState } from "react";
import API from "../../api/axios";

import AboutAfricaSection from "./AboutAfricaSection";
import SafariExpertsSection from "./SafariExpertsSection";
import AdventureTour from "../../components/AdventureTour";
import BookWithConfidence from "../Home/BookWithConfidence";
import Featured from "../Home/Featured";

const TeamPage = () => {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH DATA ================= */
  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await API.get("/team"); // 🔁 adjust endpoint if needed
        setPage(res.data?.[0] || null);
      } catch (err) {
        console.error("Team API error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  if (loading) return <p className="p-10 text-center">Loading...</p>;
  if (!page) return null;

  /* ================= MAP ADVENTURE DATA ================= */
  const teamSections =
    page.adventure?.flatMap((block) =>
      block.adventure.map((item) => ({
        image: item.image,
        description: item.description,
      }))
    ) || [];

  return (
    <div>
      {/* ================= HERO ================= */}
      <div
        className="relative w-full h-[64vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url('https://www.wildernessdestinations.com/media/3imn2iov/wilderness-experiences-guided-walks-landscape.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <h2 className="text-xl md:text-5xl text-white uppercase z-10">
          MEET OUR TEAM
        </h2>
      </div>

      {/* ================= STATIC SECTIONS ================= */}
      <AboutAfricaSection />
      <SafariExpertsSection />

      {/* ================= ADVENTURE TOUR (DYNAMIC) ================= */}
      <AdventureTour
        title="Why go on an adventure tour with contiki?"
        sections={teamSections}
      />

      <BookWithConfidence />
      <Featured />
    </div>
  );
};

export default TeamPage;
