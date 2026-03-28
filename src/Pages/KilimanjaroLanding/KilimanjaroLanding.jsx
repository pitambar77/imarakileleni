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
import useSEO from "../../hooks/useSEO.js";
import EnquiryForm from "../../components/EnquiryForm.jsx";

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
      "../where-to-visit.webp",
    title: "Experiences that count",
    text: "Adventure with Contiki is about more than hiking and scenery. Whether you’re learning to be a safari guide in Kruger or chatting to the Warrior Women of Jasper, you’ll exercise your brain as well as your body!",
  },
];

const KilimanjaroLanding = () => {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  useSEO({
    title: "Kilimanjaro Travel Guide 2026 – Training, Packing & Climb Tips",
    description:
      "Complete Kilimanjaro travel guide with advice on climbing prep, gear, food, insurance, costs, and the best time to summit Africa’s highest peak.",
    keywords: "Mount Kilimanjaro Guided Tours, Mount Kilimanjaro Guide, Mount Kilimanjaro Guided Climb, Kilimanjaro Guide Cost, Kilimanjaro Travel Guide",
    image: "https://res.cloudinary.com/dq0ug85oe/image/upload/v1766667138/imarakileleni_uploads/tjhizexpcvxliw2xappg.webp",
    url: "https://imarakilelenisafaris.com/mount-kilimanjaro",
  });

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
        title: block.heading,
        heading: s.title,
        subheading: s.subtitle,
        description: s.description,
      })),
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
        description: m.description || [], // ✅ KEEP FULL OBJECT
        image: m.image || "",
        events: [], // optional
      })),
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
        className="relative w-full h-[350px] md:h-[450px] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <h1 className="text-2xl md:text-5xl text-white text-center uppercase z-10">
          {heroTitle}
        </h1>
      </div>

      <SafariToursSection />
      <KilimanjaroRoute overview={page.overviewinfo} />
      <AdventureTour sections={adventureSections} />
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
      <BookAssurance />
      {/* <ContactForm /> */}
      <EnquiryForm formType="Kilimanjaro form" formheading="Plan Your Kilimanjaro Climb" formsubheading="Our team is always here to help you plan your climb."/>
      <WhyVisitSection
        title="Why visit Tanzania with Imara Kileleni Safaris?"
        cards={cards}
      />
      <ReviewsSection />
      <Featured />
    </>
  );
};

export default KilimanjaroLanding;
