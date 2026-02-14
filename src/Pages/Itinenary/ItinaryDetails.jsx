import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/axios";
import { slugify } from "../../utils/slugify";

import TripDetailsSection from "./TripDetailsSection";
import TripMomentsSection from "./TripMomentsSection";
import MapItinerarySection from "./MapItinerarySection";
import BookWithConfidence from "../Home/BookWithConfidence";
import ReviewBanner from "./ReviewBanner";
import ContactUs from "../Contactus/ContactUs";
import Featured from "../Home/Featured";
import useSEO from "../../hooks/useSEO";

const ItinaryDetails = () => {
  const { slug } = useParams();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const res = await API.get("/packages");

        const matchedTrip = res.data.find(
          (item) => slugify(item.title) === slug
        );

        // setTrip(matchedTrip || null);
            if (!matchedTrip) {
          setTrip(null);
          return;
        }

        // 3️⃣ Fetch SEO by ID
        const seoRes = await API.get(
          `/seo?referenceId=${matchedTrip._id}&referenceType=package`
        );

        // 4️⃣ Attach SEO to trip manually
        setTrip({
          ...matchedTrip,
          seo: seoRes.data || null,
        });

      } catch (error) {
        console.error("Trip fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrip();
  }, [slug]);

  // if (trip) {
  //   useSEO({
  //     title: `${trip.title} | Imara Kileleni Safaris`,
  //     description: trip.subtitle,
  //     keywords: `Tanzania safari, ${trip.title}`,
  //     image: trip.landingImage || trip.image,
  //     url: `https://imarakilelenisafaris.com/package/${slug}`,
  //   });
  // }

  // 🔥 Use SEO dynamically
  useSEO({
    title:
      trip?.seo?.metaTitle ||
      `${trip?.title}`,

    description:
      trip?.seo?.metaDescription ||
      trip?.subtitle,

    keywords:
      trip?.seo?.keywords ||
      `Tanzania safari, ${trip?.title}`,

    image:
      trip?.seo?.ogImage ||
      trip?.landingImage ||
      trip?.image,

    url:
      trip?.seo?.canonicalUrl ||
      `https://imarakilelenisafaris.com/package/${slug}`,
  });
  

  if (loading) return <p className="p-6">Loading...</p>;
  if (!trip) return <p className="p-6">Trip not found</p>;

  return (
    <>
      <TripDetailsSection trip={trip} />
      <ReviewBanner />
      <TripMomentsSection experience={trip.experience} />
      <MapItinerarySection itinerary={trip.itinerary} />
      <BookWithConfidence />
      <ContactUs />
      <Featured />
    </>
  );
};

export default ItinaryDetails;
