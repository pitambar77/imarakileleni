


// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const API_BASE = import.meta.env.VITE_API_BASE || "https://imarabackend.safarimarketingpro.com";

// export default function BlogDetail() {
//   const { slug } = useParams();
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     axios
// //       .get(`${API_BASE}/api/blog?slug=${slug}`)
// //       .then((res) => {
// //         console.log("DETAIL RESPONSE:", res.data);
// //         setBlog(res.data);
// //       })
// //       .catch((err) => console.error(err))
// //       .finally(() => setLoading(false));
// //   }, [slug]);

// useEffect(() => {
//   axios
//     .get(`${API_BASE}/api/blog/slug/${slug}`)
//     .then((res) => {
//       setBlog(res.data);
//     })
//     .catch((err) => console.error(err))
//     .finally(() => setLoading(false));
// }, [slug]);


//   if (loading) return <p className="p-6">Loading...</p>;
//   if (!blog) return <p className="p-6">No blog found</p>;

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-4xl font-bold">{blog.title}</h1>

//       {blog.thumbnail && (
//         <img
//           src={blog.thumbnail}
//           className="w-full rounded mt-4"
//           alt={blog.title}
//         />
//       )}

//       {/* Render section blocks */}
//       {blog.sections?.map((s, i) => (
//         <div key={i} className="mt-6">
//           {s.type === "h1" && <h1>{s.text}</h1>}
//           {s.type === "h2" && <h2>{s.text}</h2>}
//           {s.type === "paragraph" && <p>{s.text}</p>}
//           {s.type === "image" && <img src={s.imageUrl} alt={s.imageAlt} />}
//           {s.type === "list" && (
//             <ul>
//               {s.items.map((item, j) => (
//                 <li key={j}>{item}</li>
//               ))}
//             </ul>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import TravelGuideDetails from "../TravelGuideDetails/TravelGuideDetails";
import TripHighlights from "../../components/TripHighlights";
import ActiveTravelDestinations from "../TravelGuideDetails/ActiveTravelDestinations";
import BookWithConfidence from "../Home/BookWithConfidence";
import Featured from "../Home/Featured";

const API_BASE =
  import.meta.env.VITE_API_BASE ||
  "https://imarabackend.safarimarketingpro.com";


  const trips = [
  {
    id: 1,
    image:
      "https://africanscenicsafaris.com/assests/images/tanzania-safari-tours-banner.webp",
    title: "Tanzania Safari Adventure With Enjoy",

    description:
      "The one that sees you swish through the scenic south island kicking off in Christchurch The one that sees you swish through the scenic south island kicking off in Christchurch This epic 23 day trail through Europe balances all the sightseeing icons with unexpected marvels and underrated destinations. From walking the cobbled streets of Michelangelo's Florence and seeing Paris lit up at night, to being blown away by the",
  },
  {
    id: 2,
    image:
      "https://kilimanjarofairdeal.com/wp-content/uploads/2023/12/family-3.jpg",
    title: "Tanzania Family Safaris",

    description:
      "The one that takes you to west Thailand for a tour of Phuket, Koh Phi Phi, Krabi & other faves This epic 23 day trail through Europe balances all the sightseeing icons with unexpected marvels and underrated destinations. From walking the cobbled streets of Michelangelo's Florence and seeing Paris lit up at night, to being blown away by the",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    title: "Big Drop. Low Prices.",
    description:
      "The one that takes you to west Thailand for a tour of Phuket, Koh Phi Phi, Krabi & other faves This epic 23 day trail through Europe balances all the sightseeing icons with unexpected marvels and underrated destinations. From walking the cobbled streets of Michelangelo's Florence and seeing Paris lit up at night, to being blown away by the",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
    title: "Wildlife Budget Cultural Fly  ",

    description:
      "The one that gives you the ultimate Greek Island experience exploring Mykonos, Paros, Santorini and Ios This epic 23 day trail through Europe balances all the sightseeing icons with unexpected marvels and underrated destinations. From walking the cobbled streets of Michelangelo's Florence and seeing Paris lit up at night, to being blown away by the",
  },
  {
    id: 5,
    image:
      "https://africanscenicsafaris.com/assests/images/tanzania-safari-tours-banner.webp",
    title: "Tanzania Safari Adventure",

    description:
      "The one that sees you swish through the scenic south island kicking off in Christchurch This epic 23 day trail through Europe balances all the sightseeing icons with unexpected marvels and underrated destinations. From walking the cobbled streets of Michelangelo's Florence and seeing Paris lit up at night, to being blown away by the",
  },
  {
    id: 6,
    image:
      "https://ntandusafaris.com/wp-content/uploads/2024/12/Lion-Banner.webp",
    title: "Tanzania Family Safaris",

    description:
      "This epic 23 day trail through Europe balances all the sightseeing icons with unexpected marvels and underrated destinations. From walking the cobbled streets of Michelangelo's Florence and seeing Paris lit up at night, to being blown away by the",
  },
];

const BlogDetail = () => {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH BLOG DETAILS ================= */
  useEffect(() => {
    axios
      .get(`${API_BASE}/api/blog/slug/${slug}`)
      .then((res) => {
        setBlog(res.data);
      })
      .catch((err) => console.error("Blog detail error:", err))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!blog) return <p className="p-6">No blog found</p>;

  /* ================= MAP TRIP HIGHLIGHTS ================= */
  // const trips =
  //   blog.sections
  //     ?.filter((s) => s.type === "image")
  //     .map((s, index) => ({
  //       id: index + 1,
  //       image: s.imageUrl,
  //       title: blog.title,
  //       description:
  //         blog.sections?.find((p) => p.type === "paragraph")?.text ||
  //         "Explore this amazing travel experience.",
  //     })) || [];

  return (
    <div>
      {/* ✅ SAME STRUCTURE */}
      <TravelGuideDetails blog={blog} />

      <TripHighlights
        title="Highlights of our africa safari tour"
        data={trips}
      />

      <ActiveTravelDestinations />
      <BookWithConfidence />
      <Featured />
    </div>
  );
};

export default BlogDetail;

