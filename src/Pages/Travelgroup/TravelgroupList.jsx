import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api/axios";

const TravelgroupList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/travelgroup")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {data.map((item) => (
        <div key={item._id} className="border rounded p-4 shadow bg-white">
          <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded" />

          <h2 className="text-xl font-bold mt-2">{item.title}</h2>
          <p className="text-gray-600">{item.subtitle}</p>
          <p className="text-sm mt-1 font-semibold">{item.category}</p>

          {/* <Link
            to={`/travelgroup/${item._id}`}
            className="inline-block bg-blue-600 text-white px-4 py-2 mt-3 rounded"
          >
            View Details
          </Link> */}
          <Link to={`/${item.slug}`} className="bg-blue-600 text-white px-4 py-2 mt-3 inline-block rounded">
  View Details
</Link>
        </div>
      ))}
    </div>
  );
};

export default TravelgroupList;
