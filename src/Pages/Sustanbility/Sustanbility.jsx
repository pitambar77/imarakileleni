// import React from "react";
// import AdventureTour from "../../components/AdventureTour";
// import AllyshipCommitment from "./AllyshipCommitment";
// import WhyVisitSection from "../../components/WhyVisitSection";
// import BookWithConfidence from "../Home/BookWithConfidence";
// import Featured from "../Home/Featured";

// const cards = [
//   {
//     id: 1,
//     image:
//       "https://tanzania-specialist.com/wp-content/uploads/2025/06/Tanzania-vacation-scaled.jpg",
//     title: "Go further than you’d go alone",
//     text: "It’s one thing to visit somewhere new. But when you travel with awesome new people, all aged between 18 and 35, you take the adventure to a whole new level - not to mention the fun!",
//   },
//   {
//     id: 2,
//     image:
//       "https://www.nkuringosafaris.com/wp-content/uploads/2024/05/African_safari_woman_sunset__-jpg.webp",
//     title: "Seriously special stays",
//     text: "We’ll take care of your stays, local transport, breakfasts and entry to the most sought-after sites – so you’re free to enjoy your adventure travel experience without the stress of planning.",
//   },
//   {
//     id: 3,
//     image:
//       "https://www.serengetiheroes.com/wp-content/uploads/2024/03/women-safari-1290x737.webp",
//     title: "Experiences that count",
//     text: "Adventure with Contiki is about more than hiking and scenery. Whether you’re learning to be a safari guide in Kruger or chatting to the Warrior Women of Jasper, you’ll exercise your brain as well as your body!",
//   },
// ];

// const Sustanbility = () => {
//   return (
//     <>
//       <div
//         className="relative w-full h-[64vh] bg-center bg-cover flex items-center justify-center"
//         style={{
//           backgroundImage: `url('https://experiencetravel.asia/wp-content/uploads/2024/10/java-plantation.jpg')`,
//         }}
//       >
//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/30"></div>
//         <h2 className=" text-xl md:text-5xl text-white uppercase z-10 ">
//           TRAVEL WITH PURPOSE
//         </h2>
//       </div>
//       <div className=" py-16 bg-[#fedec7] px-4">
//         <div className="max-w-4xl mx-auto text-center ">
//           <h3 className=" text-3xl mb-4 ">
//             We empower crucial wilderness areas in East Africa, benefitting
//             People and Nature alike.
//           </h3>
//           <p className=" mb-4 text-[#333] leading-relaxed">
//             Beacause for us, inclusivity isn't season or a slogan. It's the
//             engine that keeps every journey moving forword: today, tommorow and
//             for generation to come.
//           </p>
//           <p className="text-[#333] leading-relaxed">
//             Out of Beacause for us, inclusivity isn't season or a slogan. It's
//             the engine that keeps every journey moving forword: today, tommorow
//             and for generation to come.
//           </p>
//         </div>
//       </div>
//       <AdventureTour
//         sections={[
//           {
//             image:
//               "https://www.contiki.com/media/wcxfjs4s/south-america-peru.jpg",
//             heading:
//               "Whether it’s backpacking, camping or sailing, a Contiki adventure tour will totally redefine your idea of broadening your mind.",
//             description:
//               "You’ll traverse Norway in search of Arctic whales and the Northern Lights. You’ll kayak along Vietnam’s majestic Nho Que River. You’ll ride a horse on the jawdropping plains of Patagonia. Adventure travel is all about unleashing a new side of yourself and discovering what you’re capable of, and that’s exactly what you’ll do on these trips - whether you’re trekking Peru’s Inca Trail or swimming in the Great Barrier Reef.",
//           },
//           {
//             image:
//               "https://www.contiki.com/media/jqah4mlo/bungy-jumping-in-new-zealand.jpg",
//             heading:
//               "Adventure travel is all about the unbelievable people you meet, the new foods you try and the activities you embark on.",
//             description:
//               "What comes to mind when you hear the word ‘adventure’? Exploring cultural hotspots in historical cities, jumping out of planes over the gobsmacking landscapes of New Zealand or exploring the plains of Africa on a wildlife safari? Whatever you’re looking for on your adventure tour, it’s ready and waiting with Contiki.",
//           },
//         ]}
//       />
//       <AllyshipCommitment />
//       <BookWithConfidence/>
//       <WhyVisitSection
//         title="Why visit Tanzania with Imara Kileleni Safaris?"
//         cards={cards}
//       />
//       <Featured/>
//     </>
//   );
// };

// export default Sustanbility;


import React, { useEffect, useState } from "react";
import axios from "axios";

import AdventureTour from "../../components/AdventureTour";
import AllyshipCommitment from "./AllyshipCommitment";
// import WhyVisitSection from "../../components/WhyVisitSection";
import BookWithConfidence from "../Home/BookWithConfidence";
import Featured from "../Home/Featured";
import WhyVisitTanzania from "../Aboutus/WhyVisitTanzania";

const API_URL =
  "https://imarabackend.imarakilelenisafaris.com/api/sustanbility";

//   const cards = [
//   {
//     id: 1,
//     image:
//       "https://tanzania-specialist.com/wp-content/uploads/2025/06/Tanzania-vacation-scaled.jpg",
//     title: "Go further than you’d go alone",
//     text: "It’s one thing to visit somewhere new. But when you travel with awesome new people, all aged between 18 and 35, you take the adventure to a whole new level - not to mention the fun!",
//   },
//   {
//     id: 2,
//     image:
//       "https://www.nkuringosafaris.com/wp-content/uploads/2024/05/African_safari_woman_sunset__-jpg.webp",
//     title: "Seriously special stays",
//     text: "We’ll take care of your stays, local transport, breakfasts and entry to the most sought-after sites – so you’re free to enjoy your adventure travel experience without the stress of planning.",
//   },
//   {
//     id: 3,
//     image:
//       "https://www.serengetiheroes.com/wp-content/uploads/2024/03/women-safari-1290x737.webp",
//     title: "Experiences that count",
//     text: "Adventure with Contiki is about more than hiking and scenery. Whether you’re learning to be a safari guide in Kruger or chatting to the Warrior Women of Jasper, you’ll exercise your brain as well as your body!",
//   },
// ];

const Sustanbility = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        // API returns array → take first object
        setData(res.data?.[0]);
      })
      .catch((err) => console.error("API ERROR:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-10 text-center">Loading...</p>;
  if (!data) return null;

  const {
    title,
    subtitle,
    image,
    overviewinfo,
    adventure,
    whyvisit,
    effective,
  } = data;

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div
        className="relative w-full h-[64vh] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <h2 className="text-xl md:text-5xl text-white uppercase z-10">
          {title}
        </h2>
      </div>

      {/* ================= OVERVIEW ================= */}
      {overviewinfo?.map((item) => (
        <div key={item._id} className="py-16 bg-[#fedec7] px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl mb-4">{item.title}</h3>
            {item.description?.map((desc) => (
              <p
                key={desc._id}
                className="text-[#333] leading-relaxed mb-4"
              >
                {desc.content}
              </p>
            ))}
          </div>
        </div>
      ))}

      {/* ================= ADVENTURE SECTION ================= */}
      <AdventureTour
        sections={adventure?.map((item) => ({
          image: item.image,
          subtitle: item.title,
          description: item.description,
        }))}
      />

      {/* ================= ALLYSHIP ================= */}
      <AllyshipCommitment data={effective} />

      {/* ================= WHY VISIT ================= */}
      {/* <WhyVisitSection
        title="Why visit Tanzania with Imara Kileleni Safaris?"
        // cards={whyvisit?.map((item, index) => ({
        //   id: index,
        //   image: item.image,
        //   title: item.title,
        //   text: item.description,
        // }))}
        cards={cards}
      /> */}

      <WhyVisitTanzania/>

      <BookWithConfidence />
      <Featured />
    </>
  );
};

export default Sustanbility;
