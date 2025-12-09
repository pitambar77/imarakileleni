


import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000";

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get(`${API_BASE}/api/blog?slug=${slug}`)
//       .then((res) => {
//         console.log("DETAIL RESPONSE:", res.data);
//         setBlog(res.data);
//       })
//       .catch((err) => console.error(err))
//       .finally(() => setLoading(false));
//   }, [slug]);

useEffect(() => {
  axios
    .get(`${API_BASE}/api/blog/slug/${slug}`)
    .then((res) => {
      setBlog(res.data);
    })
    .catch((err) => console.error(err))
    .finally(() => setLoading(false));
}, [slug]);


  if (loading) return <p className="p-6">Loading...</p>;
  if (!blog) return <p className="p-6">No blog found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold">{blog.title}</h1>

      {blog.thumbnail && (
        <img
          src={blog.thumbnail}
          className="w-full rounded mt-4"
          alt={blog.title}
        />
      )}

      {/* Render section blocks */}
      {blog.sections?.map((s, i) => (
        <div key={i} className="mt-6">
          {s.type === "h1" && <h1>{s.text}</h1>}
          {s.type === "h2" && <h2>{s.text}</h2>}
          {s.type === "paragraph" && <p>{s.text}</p>}
          {s.type === "image" && <img src={s.imageUrl} alt={s.imageAlt} />}
          {s.type === "list" && (
            <ul>
              {s.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
