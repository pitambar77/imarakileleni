

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const API_BASE = import.meta.env.VITE_API_BASE || "https://imarabackend.safarimarketingpro.com";

// export default function BlogCategoryPage({ category }) {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get(`${API_BASE}/api/blog/category/${encodeURIComponent(category)}`)
//       .then((res) => {
//         console.log("API RESPONSE:", res.data);

//         // ensure always array
//         setBlogs(Array.isArray(res.data) ? res.data : []);
//       })
//       .catch((err) => console.error("ERROR:", err))
//       .finally(() => setLoading(false));
//   }, [category]);

//   if (loading) return <p className="p-6">Loading...</p>;
//   if (!blogs.length) return <p className="p-6">No blogs found</p>;

//   return (
//     <div className="p-6 max-w-5xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">{category}</h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {blogs.map((blog) => (
//           <div key={blog._id} className="border rounded-xl p-4 shadow bg-white">
//             <img
//               src={blog.thumbnail}
//               className="h-40 w-full object-cover rounded"
//               alt={blog.title}
//             />

//             <h2 className="text-lg font-semibold mt-2">{blog.title}</h2>

//             <Link
//               to={`/travel-guide/${blog.slug}`}
//               className="text-blue-600 underline mt-3 inline-block"
//             >
//               Read More →
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import axios from "axios";

import TravelguideCard from "../../components/TravelguideCard";
import BookWithConfidence from "../Home/BookWithConfidence";
import Featured from "../Home/Featured";
import tabanner from '../../assets/imara-home-banner-2.webp'
import kabanner from '../../assets/kabanner.webp'

const API_BASE =
  import.meta.env.VITE_API_BASE || "https://imarabackend.imarakilelenisafaris.com";

const BlogCategoryPage = ({ category }) => {
  const [asSeenItems, setAsSeenItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch blogs BY CATEGORY (same logic as your old BlogCategoryPage)
  useEffect(() => {
    if (!category) return;

    axios
      .get(
        `${API_BASE}/api/blog/category/${encodeURIComponent(category)}`
      )
      .then((res) => {
        const blogs = Array.isArray(res.data) ? res.data : [];

        // 🔁 Convert category blogs → TravelguideCard format
        const mappedItems = blogs.map((blog, index) => ({
          id: blog._id || index,
          image: blog.thumbnail,
          title: blog.title,
          subtitle:blog.subtitle,
          text:
            blog.sections?.[0]?.text ||
            blog.sections?.[0]?.content ||
            "Read our detailed travel guide.",
          link: `/travel-guide/${blog.slug}`,
        }));

        setAsSeenItems(mappedItems);
      })
      .catch((err) => console.error("Category API error:", err))
      .finally(() => setLoading(false));
  }, [category]);


  const isKilimanjaroCategory =
  category?.toLowerCase().includes("kilimanjaro");

const bannerImage = isKilimanjaroCategory ? kabanner : tabanner;

  return (
    <div>
      {/* ================= HERO ================= */}
      <div
        className="relative w-full h-[64vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <h2 className="text-xl md:text-5xl text-white uppercase z-10">
          {category || "All about travel guide"}
        </h2>
      </div>

      {/* ================= CONTENT ================= */}
      {loading ? (
        <p className="p-6 text-center">Loading...</p>
      ) : asSeenItems.length ? (
        <TravelguideCard items={asSeenItems} />
      ) : (
        <p className="p-6 text-center">No blogs found</p>
      )}

      <BookWithConfidence />
      <Featured />
    </div>
  );
};

export default BlogCategoryPage;
