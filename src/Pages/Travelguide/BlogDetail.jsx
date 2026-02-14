

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// import TravelGuideDetails from "../TravelGuideDetails/TravelGuideDetails";
// import TripHighlights from "../../components/TripHighlights";
// import ActiveTravelDestinations from "../TravelGuideDetails/ActiveTravelDestinations";
// import BookWithConfidence from "../Home/BookWithConfidence";
// import Featured from "../Home/Featured";
// import useSEO from "../../hooks/useSEO";

// const API_BASE =
//   import.meta.env.VITE_API_BASE ||
//   "https://imarabackend.imarakilelenisafaris.com";

// const BlogDetail = () => {
//   const { slug } = useParams();

//   const [blog, setBlog] = useState(null);
//   const [relatedBlogs, setRelatedBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   /* ================= FETCH BLOG DETAILS ================= */
//   useEffect(() => {
//     setLoading(true);

//     axios
//       .get(`${API_BASE}/api/blog/slug/${slug}`)
//       .then((res) => setBlog(res.data))
//       .catch((err) => console.error("Blog detail error:", err))
//       .finally(() => setLoading(false));
//   }, [slug]);


//   /* ================= FETCH RELATED BLOGS ================= */
//   useEffect(() => {
//     if (!blog?.category) return;

//     axios
//       .get(
//         `${API_BASE}/api/blog/category/${encodeURIComponent(
//           blog.category
//         )}`
//       )
//       .then((res) => {
//         const blogs = Array.isArray(res.data) ? res.data : [];

//         // ❌ remove current blog
//         const filtered = blogs.filter(
//           (item) => item.slug !== blog.slug
//         );

//         // ✅ map into TripHighlights format
//         const mapped = filtered.map((item) => ({
//           id: item._id,
//           image: item.thumbnail,
//           title: item.title,
//           subtitle: item.subtitle,
//           description:
//             item.sections?.find((s) => s.type === "paragraph")?.text ||
//             "Read our detailed travel guide.",
//           link: `/travel-guide/${item.slug}`,
//         }));

//         setRelatedBlogs(mapped);
//       })
//       .catch((err) => console.error("Related blog error:", err));
//   }, [blog]);


// // useSEO({
// //     title:
// //       blog?.seo?.metaTitle ||
// //       `${blog?.title}`,

// //     description:
// //       blog?.seo?.metaDescription,

// //     keywords:
// //       blog?.seo?.keywords ||
// //       `Tanzania safari, ${blog?.title}`,

// //     image:
// //       blog?.seo?.ogImage ||
// //       blog?.landingImage ||
// //       blog?.image,

// //     url:
// //       blog?.seo?.canonicalUrl ||
// //       `https://imarakilelenisafaris.com/package/${slug}`,
// //   });

// useSEO({
//   title:
//     blog?.seo?.metaTitle,

//   description:
//     blog?.seo?.metaDescription ||
//     blog?.subtitle ||
//     "Read our Tanzania travel guide.",

//   keywords:
//     blog?.seo?.keywords,

//   image:
//     blog?.seo?.ogImage ||
//     blog?.thumbnail,

//   url:
//     blog?.seo?.canonicalUrl ||
//     `https://imarakilelenisafaris.com/travel-guide/${slug}`,
// });





//   if (loading) return <p className="p-6">Loading...</p>;
//   if (!blog) return <p className="p-6">No blog found</p>;

//   return (
//     <div>
//       {/* BLOG CONTENT */}
//       <TravelGuideDetails blog={blog} />

//       {/* RELATED BLOGS */}
//       {relatedBlogs.length > 0 && (
//         <TripHighlights
//           title={`Related ${blog.category}`}
//           data={relatedBlogs}
//         />
//       )}

//       <ActiveTravelDestinations />
//       <BookWithConfidence />
//       <Featured />
//     </div>
//   );
// };

// export default BlogDetail;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/axios";

import TravelGuideDetails from "../TravelGuideDetails/TravelGuideDetails";
import TripHighlights from "../../components/TripHighlights";
import ActiveTravelDestinations from "../TravelGuideDetails/ActiveTravelDestinations";
import BookWithConfidence from "../Home/BookWithConfidence";
import Featured from "../Home/Featured";
import useSEO from "../../hooks/useSEO";

const BlogDetail = () => {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH BLOG + SEO ================= */
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // 1️⃣ Get blog by slug
        const res = await API.get(`/blog/slug/${slug}`);

        if (!res.data) {
          setBlog(null);
          return;
        }

        const blogData = res.data;

        // 2️⃣ Fetch SEO by blog _id
        const seoRes = await API.get(
          `/seo?referenceId=${blogData._id}&referenceType=blog`
        );

        // 3️⃣ Attach SEO to blog object
        setBlog({
          ...blogData,
          seo: seoRes.data || null,
        });

      } catch (err) {
        console.error("Blog fetch error:", err);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  /* ================= FETCH RELATED BLOGS ================= */
  useEffect(() => {
    if (!blog?.category) return;

    const fetchRelated = async () => {
      try {
        const res = await API.get(
          `/blog/category/${encodeURIComponent(blog.category)}`
        );

        const blogs = Array.isArray(res.data) ? res.data : [];

        const filtered = blogs.filter(
          (item) => item.slug !== blog.slug
        );

        const mapped = filtered.map((item) => ({
          id: item._id,
          image: item.thumbnail,
          title: item.title,
          subtitle: item.subtitle,
          description:
            item.sections?.find((s) => s.type === "paragraph")?.text ||
            "Read our detailed travel guide.",
          link: `/travel-guide/${item.slug}`,
        }));

        setRelatedBlogs(mapped);
      } catch (err) {
        console.error("Related blog error:", err);
      }
    };

    fetchRelated();
  }, [blog]);

  /* ================= DYNAMIC SEO ================= */
  useSEO({
    title:
      blog?.seo?.metaTitle ||
      `${blog?.title} | Imara Kileleni Safaris`,

    description:
      blog?.seo?.metaDescription ||
      blog?.subtitle ||
      "Read our Tanzania travel guide.",

    keywords:
      blog?.seo?.keywords ||
      `Tanzania travel guide, ${blog?.title}`,

    image:
      blog?.seo?.ogImage ||
      blog?.thumbnail,

    url:
      blog?.seo?.canonicalUrl ||
      `https://imarakilelenisafaris.com/travel-guide/${slug}`,
  });

  if (loading) return <p className="p-6">Loading...</p>;
  if (!blog) return <p className="p-6">No blog found</p>;

  return (
    <div>
      <TravelGuideDetails blog={blog} />

      {relatedBlogs.length > 0 && (
        <TripHighlights
          title={`Related ${blog.category}`}
          data={relatedBlogs}
        />
      )}

      <ActiveTravelDestinations />
      <BookWithConfidence />
      <Featured />
    </div>
  );
};

export default BlogDetail;
