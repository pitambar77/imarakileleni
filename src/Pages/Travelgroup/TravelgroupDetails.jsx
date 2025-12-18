// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import API from "../../api/axios";

// const TravelgroupDetails = () => {
//   const { slug } = useParams();
//   const [item, setItem] = useState(null);

//   useEffect(() => {
//     API.get(`/travelgroup/slug/${slug}`)
//       .then((res) => 
//         setItem(res.data))
//       .catch((err) => console.error(err));
//   }, [slug]);

//   if (!item) return <p className="p-6">Loading...</p>;

//   return (
//     <div className="p-6">
//       {/* Main Banner */}
//       <img src={item.image} className="w-full h-64 object-cover rounded" alt={item.title} />

//       <h1 className="text-3xl font-bold mt-4">{item.title}</h1>
//       <p className="text-lg text-gray-600">{item.subtitle}</p>

//       {/* Overview Info */}
//       <section className="mt-6">
//         <h2 className="text-2xl font-semibold">Overview Info</h2>
//         {item.overviewinfo.map((o) => (
//           <div key={o._id} className="mt-4 p-4 border rounded">
//             <h3 className="text-xl font-bold">{o.title}</h3>
//             <p className="text-gray-700">{o.subtitle}</p>
//             {o.image && <img src={o.image} className="mt-2 w-64 rounded" />}

//             {o.description.map((d) => (
//               <div key={d._id} className="mt-2">
//                 {d.type === "header" && <h4 className="font-bold">{d.content}</h4>}
//                 {d.type === "paragraph" && <p>{d.content}</p>}
//                 {d.type === "list" && <li>{d.content}</li>}
//               </div>
//             ))}
//           </div>
//         ))}
//       </section>

//       {/* Adventure */}
//       <section className="mt-6">
//         <h2 className="text-2xl font-semibold">Adventure</h2>
//         {item.adventure.map((adv) => (
//           <div key={adv._id} className="mt-4 p-4 border rounded">
//             <h3 className="font-bold">{adv.title}</h3>
//             <p>{adv.subtitle}</p>
//             <p className="mt-2">{adv.description}</p>
//             {adv.image && <img src={adv.image} className="mt-2 w-64 rounded" />}
//           </div>
//         ))}
//       </section>

//       {/* Q&A */}
//       <section className="mt-6">
//         <h2 className="text-2xl font-semibold">FAQ / About Booking</h2>
//         {item.aboutBooking.map((q) => (
//           <div key={q._id} className="mt-4 p-4 border rounded">
//             <h3 className="font-bold">{q.question}</h3>

//             {q.answer.map((ans) => (
//               <div key={ans._id} className="mt-2">
//                 {ans.type === "header" && <h4 className="font-bold">{ans.content}</h4>}
//                 {ans.type === "paragraph" && <p>{ans.content}</p>}
//                 {ans.type === "list" && <li>{ans.content}</li>}
//               </div>
//             ))}
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default TravelgroupDetails;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/axios";

import LandingBanner from "../../components/LandingBanner";
import OverviewSections from "../../components/OverviewSections";
import ChoosingSafariSection from "../SerengetiNationalPark/ChoosingSafariSection";
import AdventureTour from "../../components/AdventureTour";
import FAQSection from "../../components/FAQSection";
import BookWithConfidence from "../Home/BookWithConfidence";
import Featured from "../Home/Featured";

const TravelgroupDetails = () => {
  const { slug } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    API.get(`/travelgroup/slug/${slug}`)
      .then((res) => setItem(res.data))
      .catch((err) => console.error(err));
  }, [slug]);

  if (!item) return <p className="p-6">Loading...</p>;

  /* ================= MAP ADVENTURE ================= */
  const adventureSections = item.adventure.map((a) => ({
    image: a.image,
    heading: a.title,
    subheading: a.subtitle,
    description: a.description,
  }));

  /* ================= MAP FAQ ================= */
  const safariFaqs = item.aboutBooking.map((q) => ({
    question: q.question,
    answerBlocks: q.answer.map((ans) => ({
      type: ans.type,
      text: ans.content,
      items: ans.type === "list" ? [ans.content] : undefined,
    })),
  }));

  return (
    <div>
      {/* ================= BANNER ================= */}
      <LandingBanner
        bannerImg={item.image}
        title={item.title}
      />

      {/* ================= OVERVIEW ================= */}
      {item.overviewinfo.map((o) => (
        <OverviewSections
          key={o._id}
          label={item.title}
          title={o.title}
          image={o.image}
          imagePosition="right"
          bg="#fcfcfc"
          paragraphs={o.description.map((d) => ({
            content: d.content,
          }))}
        />
      ))}

      <ChoosingSafariSection />

      {/* ================= ADVENTURE ================= */}
      <AdventureTour sections={adventureSections} />

      {/* ================= FAQ ================= */}
      <FAQSection
        title="Top Frequently ask questions"
        faqs={safariFaqs}
      />

      <BookWithConfidence />
      <Featured />
    </div>
  );
};

export default TravelgroupDetails;
