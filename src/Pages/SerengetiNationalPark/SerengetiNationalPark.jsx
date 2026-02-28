


import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import API from "../../api/axios";

import SerengetiMigrationTabs from "./SerengetiMigrationTabs";
import ChoosingSafariSection from "./ChoosingSafariSection";
import TripHighlights from "../../components/TripHighlights";
import BestTimeToVisitSection from "./BestTimeToVisitSection";
import BookWithConfidence from "../Home/BookWithConfidence";
import Featured from "../Home/Featured";
import ActiveTravelDestinations from "../TravelGuideDetails/ActiveTravelDestinations";
import AdventureTour from "../../components/AdventureTour";
import FAQSection from "../../components/FAQSection";
import OverviewSections from "../../components/OverviewSections";
import TabLink from "./TabLink";
import { slugify } from "../../utils/slugify";
import useSEO from "../../hooks/useSEO";

const SerengetiNationalPark = () => {
  const { slug } = useParams();
  const location = useLocation();

  // ✅ use prefetched data if available
  const [data, setData] = useState(
    location.state?.prefetchedData || null
  );
  const [loading, setLoading] = useState(!data);

  /* ================= FETCH BY SLUG ================= */
  useEffect(() => {
    if (data) return; // 🚀 already prefetched

    const fetchDestination = async () => {
      try {
        const res = await API.get("/destinationdetails");

        const matched = res.data.find(
          (item) => slugify(item.title) === slug
        );

               // setTrip(matchedTrip || null);
        if (!matched) {
          setData(null);
          return;
        }

          // 3️⃣ Fetch SEO by ID
        const seoRes = await API.get(
          `/seo?referenceId=${matched._id}&referenceType=destinationdetails`
        );

         // 4️⃣ Attach SEO to trip manually
        setData({
          ...matched,
          seo: seoRes.data || null,
        });

      } catch (err) {
        console.error("Destination error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDestination();
  }, [slug, data]);

    useSEO({
    title:
      data?.seo?.metaTitle ||
      `${data?.title}`,

    description:
      data?.seo?.metaDescription ||
      data?.subtitle,

    keywords:
      data?.seo?.keywords ||
      `Tanzania safari, ${data?.title}`,

    image:
      data?.seo?.ogImage ||
      data?.landingImage ||
      data?.image,

    url:
      data?.seo?.canonicalUrl ||
      `https://imarakilelenisafaris.com/package/${slug}`,
  });

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

  /* ================= BEST TIME ================= */
  const monthData = besttime.flatMap((bt) =>
    (bt.section || []).map((m) => ({
      name: m.month,
      season: bt.title,
      rating: "Excellent",
      description: [m.content],
    }))
  );

  /* ================= TRIP HIGHLIGHTS ================= */
  const trips = highlight.flatMap((group, gIndex) =>
    (group.section || []).map((item, i) => ({
      id: `${gIndex}-${i}`,
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
      {/* ================= HERO ================= */}
      <div
        className="relative w-full h-[350px] md:h-[450px] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="text-xl md:text-5xl text-white uppercase z-10 text-center px-4">
          {title}
        </h1>
      </div>

      <TabLink />

      {/* ================= OVERVIEW ================= */}
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

      {/* ================= MIGRATION ================= */}
      {migration.length > 0 && (
        <SerengetiMigrationTabs data={migration} />
      )}

      {/* ================= HIGHLIGHTS ================= */}
      {trips.length > 0 && (
        <TripHighlights
          title={`${destination} Trip Highlights`}
          data={trips}
        />
      )}

      {/* ================= BEST TIME ================= */}
      {monthData.length > 0 && (
        <BestTimeToVisitSection
          title={`Best time to visit ${title}`}
          staticMonths={monthData}
        />
      )}

      {/* ================= ADVENTURE ================= */}
      {adventureSections.length > 0 && (
        <AdventureTour sections={adventureSections} />
      )}

      {/* ================= FAQ ================= */}
      {faqs.length > 0 && (
        <FAQSection
          title="What travellers ask about our safari tours?"
          faqs={faqs}
        />
      )}

      {/* <ActiveTravelDestinations /> */}
      <BookWithConfidence />
      <Featured />
    </div>
  );
};

export default SerengetiNationalPark;
