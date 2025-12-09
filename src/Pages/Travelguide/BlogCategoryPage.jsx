

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000";

export default function BlogCategoryPage({ category }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_BASE}/api/blog/category/${encodeURIComponent(category)}`)
      .then((res) => {
        console.log("API RESPONSE:", res.data);

        // ensure always array
        setBlogs(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => console.error("ERROR:", err))
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!blogs.length) return <p className="p-6">No blogs found</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{category}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="border rounded-xl p-4 shadow bg-white">
            <img
              src={blog.thumbnail}
              className="h-40 w-full object-cover rounded"
              alt={blog.title}
            />

            <h2 className="text-lg font-semibold mt-2">{blog.title}</h2>

            <Link
              to={`/travel-guide/${blog.slug}`}
              className="text-blue-600 underline mt-3 inline-block"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

