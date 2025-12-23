import React, { useEffect, useState } from "react";
import API from "../../api/axios.js";
import SafariToursSection from "../SafariDestination/SafariToursSection";
import KilimanjaroRoute from "./KilimanjaroRoute";
import AdventureTour from "../../components/AdventureTour";
import TanzaniaExpertCTA from "./TanzaniaExpertCTA";
import WhyJoin from "./WhyJoin";
import Highlights from "../../components/Highlights";
import PositionsSection from "../../components/PositionsSection";
import MonthGuide from "../../components/MonthGuide";
import MonthWeatherGrid from "../../components/MonthWeatherGrid";
import AsSeenIn from "./AsSeenIn";
import FAQSection from "../../components/FAQSection";
// import BookWithConfidence from "../Home/BookWithConfidence";
import ContactForm from "./ContactForm";
import WhyVisitSection from "../../components/WhyVisitSection";
import GuestReviewSection from "../TanzaniaSafariLanding/GuestReviewSection";
import ReviewsSection from "../Aboutus/ReviewsSection";
import Featured from "../Home/Featured";
import BookAssurance from "./BookAssurance.jsx";

// const data = [
//   {
//     image: "https://www.contiki.com/media/wcxfjs4s/south-america-peru.jpg",
//     heading:"adventure tour will totally ",
//     subheading:
//       "Whether it’s backpacking, camping or sailing, a Contiki adventure tour will totally redefine your idea of broadening your mind.",
//     description:
//       "You’ll traverse Norway in search of Arctic whales and the Northern Lights. You’ll kayak along Vietnam’s majestic Nho Que River. You’ll ride a horse on the jawdropping plains of Patagonia. Adventure travel is all about unleashing a new side of yourself and discovering what you’re capable of, and that’s exactly what you’ll do on these trips - whether you’re trekking Peru’s Inca Trail or swimming in the Great Barrier Reef.",
//   },
//   {
//     image:
//       "https://www.contiki.com/media/jqah4mlo/bungy-jumping-in-new-zealand.jpg",
//       heading:"adventure tour will totally ",
//     subheading:
//       "Adventure travel is all about the unbelievable people you meet, the new foods you try and the activities you embark on.",
//     description:
//       "What comes to mind when you hear the word ‘adventure’? Exploring cultural hotspots in historical cities, jumping out of planes over the gobsmacking landscapes of New Zealand or exploring the plains of Africa on a wildlife safari? Whatever you’re looking for on your adventure tour, it’s ready and waiting with Contiki.",
//   },
//   {
//     image: "https://www.contiki.com/media/wcxfjs4s/south-america-peru.jpg",
//     heading:"adventure tour will totally ",
//     subheading:
//       "Whether it’s backpacking, camping or sailing, a Contiki adventure tour will totally redefine your idea of broadening your mind.",
//     description:
//       "You’ll traverse Norway in search of Arctic whales and the Northern Lights. You’ll kayak along Vietnam’s majestic Nho Que River. You’ll ride a horse on the jawdropping plains of Patagonia. Adventure travel is all about unleashing a new side of yourself and discovering what you’re capable of, and that’s exactly what you’ll do on these trips - whether you’re trekking Peru’s Inca Trail or swimming in the Great Barrier Reef.",
//   },
//   {
//     image:
//       "https://www.contiki.com/media/jqah4mlo/bungy-jumping-in-new-zealand.jpg",
//       heading:"adventure tour will totally ",
//     subheading:
//       "Adventure travel is all about the unbelievable people you meet, the new foods you try and the activities you embark on.",
//     description:
//       "What comes to mind when you hear the word ‘adventure’? Exploring cultural hotspots in historical cities, jumping out of planes over the gobsmacking landscapes of New Zealand or exploring the plains of Africa on a wildlife safari? Whatever you’re looking for on your adventure tour, it’s ready and waiting with Contiki.",
//   },
// ];

// const tripsData = [
//   {
//     id: 1,
//     image:
//       "https://www.contiki.com/media/5l1p24yg/contiki-lonely-planet-600x300.webp?&quality=80",
//     description:
//       "The one that sees you swish through the scenic south island. The one that sees you swish through the scenic south island.....",
//   },
//   {
//     id: 2,
//     image:
//       "https://www.contiki.com/media/5l1p24yg/contiki-lonely-planet-600x300.webp?&quality=80",

//     description:
//       "The one that takes you to west Thailand..The one that sees you swish through the scenic south island. you to west Thailand....",
//   },
//   {
//     id: 3,
//     image:
//       "https://www.contiki.com/media/5l1p24yg/contiki-lonely-planet-600x300.webp?&quality=80",

//     description:
//       "The one that sees you swish through the scenic south island.. The one that sees you swish through the scenic south island....",
//   },
//   {
//     id: 4,
//     image:
//       "https://www.contiki.com/media/5l1p24yg/contiki-lonely-planet-600x300.webp?&quality=80",

//     description:
//       "The one that takes you to west Thailand.. The one that sees you swish through the scenic south island... you to west Thailand..",
//   },
//   {
//     id: 5,
//     image:
//       "https://www.contiki.com/media/5l1p24yg/contiki-lonely-planet-600x300.webp?&quality=80",

//     description:
//       "The one that sees you swish through the scenic south island..The one that sees you swish through the scenic south island....",
//   },
//   {
//     id: 6,
//     image:
//       "https://www.contiki.com/media/5l1p24yg/contiki-lonely-planet-600x300.webp?&quality=80",

//     description:
//       "The one that takes you to west Thailand. The one that sees you swish through the scenic south island... you to west Thailand...",
//   },
// ];

const jobData = [
  {
    position: "Climbing Routes",
    location: "6 official routes",
    
  },
  {
    position: "Climbers",
    location: "1000+ climbers",
    
  },
  {
    position: "Success Rates",
    location: "More than 95 %",
   
  },
  {
    position: "Local Experts",
    location: "More than 30+ seasoned crew",
    
  },
];

// const monthData = [
//   {
//     id: 1,
//     label: "JAN - MAR",
//     contentTitle: "Visiting Australia in January - March",
//     description: [
//       "Mount Kilimanjaro National Park  ( Kilimanjaro national park) is a true definition of East African beauty. This park shelters Africa’s highest point – Mount Kilimanjaro, a very popular creation that holds quite a strong profile. Mount Kilimanjaro, along with its three volcanic cones “Mawenzi”, “Kibo” and “Shira” is a dormant volcanic mountain in Tanzania. It is one of the seven summits and also turns out to be the highest freestanding mountain in the whole world. It is hiked by so many tourists who travel to Tanzania annually and is one of those daring places every adventurous traveler should visit at all costs. ",
//       "Tanzania’s Kilimanjaro National Park is situated near a town called Moshi and can easily be accessed by plane or road via Arusha town. It spans up to approximately 650 square kilometers and is currently under the administration of Tanzania National Parks Authority (TANAPA). Besides the daring climbing adventures that take place in the park each year, Mount Kilimanjaro National Park turns out to be a great wildlife viewing destination too and boasts in various species of fauna.",
//     ],
//     events: [
//       "Firework displays and lively celebrations around Sydney Harbour.",
//       "Outdoor cinema screenings throughout summer.",
//     ],
//     image:
//       "https://worldadventuretours.com/wp-content/uploads/2019/11/product-lemosho-kili-top.jpg",
//   },

//   {
//     id: 2,
//     label: "April - May",
//     contentTitle: "Visiting Australia in April - May",
//     description: [
//       "Hot and humid conditions and storms bring tropical rain bursts in northern Australia...",
//       "Tanzania’s Kilimanjaro National Park is situated near a town called Moshi and can easily be accessed by plane or road via Arusha town. It spans up to approximately 650 square kilometers and is currently under the administration of Tanzania National Parks Authority (TANAPA). Besides the daring climbing adventures that take place in the park each year, Mount Kilimanjaro National Park turns out to be a great wildlife viewing destination too and boasts in various species of fauna.",
//     ],
//     events: [
//       "Firework displays and lively celebrations around Sydney Harbour.",
//       "Outdoor cinema screenings throughout summer.",
//     ],
//     image:
//       "https://www.climbing-kilimanjaro.com/wp-content/uploads/2020/11/Mount-Kilimanjaro-Meaning.jpg",
//   },
//   {
//     id: 3,
//     label: "Jun-sep",
//     contentTitle: "Visiting Australia in Jun-sep",
//     description: [
//       "Hot and humid conditions and storms bring tropical rain bursts in northern Australia...",
//       "Tanzania’s Kilimanjaro National Park is situated near a town called Moshi and can easily be accessed by plane or road via Arusha town. It spans up to approximately 650 square kilometers and is currently under the administration of Tanzania National Parks Authority (TANAPA). Besides the daring climbing adventures that take place in the park each year, Mount Kilimanjaro National Park turns out to be a great wildlife viewing destination too and boasts in various species of fauna.",
//     ],
//     events: [
//       "Firework displays and lively celebrations around Sydney Harbour.",
//       "Outdoor cinema screenings throughout summer.",
//     ],
//     image:
//       "https://www.climbing-kilimanjaro.com/wp-content/uploads/2020/11/Mount-Kilimanjaro-Meaning.jpg",
//   },
//   {
//     id: 4,
//     label: "oct - dec",
//     contentTitle: "Visiting Australia in oct - dec",
//     description: [
//       "Hot and humid conditions and storms bring tropical rain bursts in northern Australia...",
//       "Tanzania’s Kilimanjaro National Park is situated near a town called Moshi and can easily be accessed by plane or road via Arusha town. It spans up to approximately 650 square kilometers and is currently under the administration of Tanzania National Parks Authority (TANAPA). Besides the daring climbing adventures that take place in the park each year, Mount Kilimanjaro National Park turns out to be a great wildlife viewing destination too and boasts in various species of fauna.",
//     ],
//     events: [
//       "Firework displays and lively celebrations around Sydney Harbour.",
//       "Outdoor cinema screenings throughout summer.",
//     ],
//     image:
//       "https://www.climbing-kilimanjaro.com/wp-content/uploads/2020/11/Mount-Kilimanjaro-Meaning.jpg",
//   },
// ];

const weatherData = [
  { month: "JAN", temp: "25°C", rain: "35mm" },
  { month: "FEB", temp: "25°C", rain: "50mm" },
  { month: "MAR", temp: "25°C", rain: "119mm" },
  { month: "APR", temp: "24°C", rain: "350mm" },
  { month: "MAY", temp: "22°C", rain: "236mm" },
  { month: "JUN", temp: "21°C", rain: "38mm" },
  { month: "JUL", temp: "20°C", rain: "25mm" },
  { month: "AUG", temp: "21°C", rain: "15mm" },
  { month: "SEP", temp: "21°C", rain: "14mm" },
  { month: "OCT", temp: "24°C", rain: "25mm" },
  { month: "NOV", temp: "25°C", rain: "63mm" },
  { month: "DEC", temp: "24°C", rain: "53mm" },
];

// const safariFaqs = [
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

const cards = [
  {
    id: 1,
    image:
      "https://tanzania-specialist.com/wp-content/uploads/2025/06/Tanzania-vacation-scaled.jpg",
    title: "Go further than you’d go alone",
    text: "It’s one thing to visit somewhere new. But when you travel with awesome new people, all aged between 18 and 35, you take the adventure to a whole new level - not to mention the fun!",
  },
  {
    id: 2,
    image:
      "https://www.nkuringosafaris.com/wp-content/uploads/2024/05/African_safari_woman_sunset__-jpg.webp",
    title: "Seriously special stays",
    text: "We’ll take care of your stays, local transport, breakfasts and entry to the most sought-after sites – so you’re free to enjoy your adventure travel experience without the stress of planning.",
  },
  {
    id: 3,
    image:
      "https://www.serengetiheroes.com/wp-content/uploads/2024/03/women-safari-1290x737.webp",
    title: "Experiences that count",
    text: "Adventure with Contiki is about more than hiking and scenery. Whether you’re learning to be a safari guide in Kruger or chatting to the Warrior Women of Jasper, you’ll exercise your brain as well as your body!",
  },
];

const KilimanjaroLanding = () => {

const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH DATA ================= */
  useEffect(() => {
    const fetchPage = async () => {
      try {
        const res = await API.get("/kilimanjarolanding");
        setPage(res.data?.[0] || null);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPage();
  }, []);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!page) return <p className="p-6">No data found</p>;

  /* ================= DATA MAPPINGS ================= */

  /* HERO */
  const heroImage = page.image;
  const heroTitle = page.title;

  /* ROUTE */
  const routeData = page.route || [];

  /* ADVENTURE */
  const adventureSections =
    page.adventure?.flatMap((block) =>
      block.section.map((s) => ({
        image: s.image,
        heading: block.heading,
        title: s.title,
        subtitle:s.subtitle,
        description: s.description,
      }))
    ) || [];

  const highlightTrips =
    page.route?.map((r, index) => ({
      id: r._id || index,
      image: r.image,
      title: r.title,
      description: r.description,
    })) || [];

  /* FAQ */
  const faqs =
    page.faq?.map((f) => ({
      question: f.question,
      answerBlocks: f.answer.map((a) => {
        if (a.type === "list") {
          return { type: "list", items: a.content };
        }
        return { type: a.type, text: a.content };
      }),
    })) || [];

  /* MONTH GUIDE */
  // const monthTabs =
  //   page.whenvisit?.flatMap((w, wi) =>
  //     w.months.map((m, mi) => ({
  //       id: `${wi}-${mi}`,
  //       label: m.monthname || `Month ${mi + 1}`,
  //       contentTitle: m.title || "",
  //       description: Array.isArray(m.description)
  //         ? m.description.map((d) => d.content)
  //         : [],
  //       image: m.image || "",
  //       events: [], // 👈 REQUIRED by UI (empty for now)
  //     }))
  //   ) || [];

  /* MONTH GUIDE */
const monthTabs =
  page.whenvisit?.flatMap((w, wi) =>
    w.months.map((m, mi) => ({
      id: `${wi}-${mi}`,
      label: m.monthname || `Month ${mi + 1}`,
      contentTitle: m.title || "",
      description: m.description || [],   // ✅ KEEP FULL OBJECT
      image: m.image || "",
      events: [], // optional
    }))
  ) || [];


  /* WHY VISIT */
  const whyVisitCards =
    page.overviewinfo?.map((o, i) => ({
      id: i,
      image: o.image,
      title: o.title,
      text: o.description?.[0]?.content || "",
    })) || [];


  return (
    <>
      {/* <div
        className="relative w-full h-[40vh] md:h-[64vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url('https://yellowzebrasafaris.com/media/47967/game-drive-march-in-tanzania-safari-africa.jpg?width=1900&height=920&format=jpg&v=1da5e0f615dab60')`,
        }}
      >
       
        <div className="absolute inset-0 bg-black/30"></div>
        <h2 className=" text-xl md:text-5xl text-white uppercase z-10 ">
          All about tanzania safaris
        </h2>
      </div> */}

 {/* ================= HERO ================= */}
      <div
        className="relative w-full h-[40vh] md:h-[64vh] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <h2 className="text-xl md:text-5xl text-white uppercase z-10">
          {heroTitle}
        </h2>
      </div>

      <SafariToursSection />
      <KilimanjaroRoute overview={page.overviewinfo} />
      <AdventureTour  sections={adventureSections}/>
      <TanzaniaExpertCTA />
      <WhyJoin />
      <Highlights title="Kilimanjaro Climbing Routes" trips={highlightTrips} />
      <PositionsSection
        title="Our Track Record"
        subtitle="Guiding climbers with steady care, deep experience, and thoughtful safety standards built from years of paying close attention to the mountain’s shifting moods.
"
        positions={jobData}
      />
       <MonthGuide
        title="Month-by-Month Guide for Climbing Kilimanjaro"
        tabs={monthTabs}
      />

      <MonthWeatherGrid data={weatherData} />
      <AsSeenIn />
      <FAQSection title="Frequently Asked Questions" faqs={faqs} />
      {/* <BookWithConfidence/> */}
      <BookAssurance/>
      <ContactForm/>
         <WhyVisitSection
        title="Why visit Tanzania with Imara Kileleni Safaris?"
        cards={cards}
      />
      <ReviewsSection/>
      <Featured/>
    </>
  );
};

export default KilimanjaroLanding;
