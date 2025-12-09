// src/pages/Destination/EditDestination.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import DestinationForm from "../../components/Destination/DestinationForm";
import API from "../../api/axios.js";
import DestinationDetailsForm from "../../components/Destination/DestinationDetailsForm";

const EditDestinationDetails = () => {
  const { id } = useParams();
  const [destinationData, setDestinationData] = useState(null);

  useEffect(() => {
    API.get(`/destinationdetails/${id}`).then((res) => setDestinationData(res.data));
  }, [id]);

  return (
    <div className="p-6">
      {destinationData ? (
        // <DestinationForm editData={destinationData} onSuccess={() => window.location.href = "/admin/destination/list"} />
        <DestinationDetailsForm/>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditDestinationDetails