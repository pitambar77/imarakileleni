import React, { useState, useEffect } from "react";
import API from "../../api/axios.js";

const DestinationLandingForm = ({ editData, onSuccess }) => {

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
  });

  const [mainImage, setMainImage] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState(null);

  // ================= Dynamic Sections =======================
  const [overviewinfo, setOverviewinfo] = useState([
    { title: "", subtitle: "", description: [], image: null, imagePreview: null }
  ]);

  const [highlight, setHighlight] = useState([
    { heading: "", title: "", description: "", image: null, imagePreview: null }
  ]);

//   const [besttime, setBesttime] = useState([
//     { title: "", subtitle: "", description: "", month: "", content: [] }
//   ]);

const [besttime, setBesttime] = useState({
  title: "",
  subtitle: "",
  description: "",
  months: [{ month: "", content: [] }]
});


  // Prefill values on Edit
  useEffect(() => {
    if (editData) {
      setFormData(editData);
      setOverviewinfo(editData.overviewinfo || []);
      setHighlight(editData.highlight || []);
      setBesttime(editData.besttime || []);
      setMainImagePreview(editData.image);
    }
  }, [editData]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    setMainImage(file);
    setMainImagePreview(URL.createObjectURL(file));
  };

  // =======================================================
  // OVERVIEW INFO Dynamic Description Handlers
  const addOverview = () =>
    setOverviewinfo([
      ...overviewinfo,
      { title: "", subtitle: "", description: [], image: null, imagePreview: null },
    ]);

  const removeOverview = (i) => {
    const updated = [...overviewinfo];
    updated.splice(i, 1);
    setOverviewinfo(updated);
  };

  const handleOverviewChange = (i, e) => {
    const updated = [...overviewinfo];
    updated[i][e.target.name] = e.target.value;
    setOverviewinfo(updated);
  };

  const handleOverviewImage = (i, e) => {
    const file = e.target.files[0];
    const updated = [...overviewinfo];
    updated[i].image = file;
    updated[i].imagePreview = URL.createObjectURL(file);
    setOverviewinfo(updated);
  };

  const addOverviewDescription = (i) => {
    const updated = [...overviewinfo];
    updated[i].description.push({ type: "paragraph", content: "" });
    setOverviewinfo(updated);
  };

  const removeOverviewDescription = (i, j) => {
    const updated = [...overviewinfo];
    updated[i].description.splice(j, 1);
    setOverviewinfo(updated);
  };

  const handleOverviewDescriptionChange = (i, j, e) => {
    const updated = [...overviewinfo];
    updated[i].description[j][e.target.name] = e.target.value;
    setOverviewinfo(updated);
  };

  // =======================================================
  // HIGHLIGHT SECTION
  const addHighlight = () =>
    setHighlight([
      ...highlight,
      { heading: "", title: "", description: "", image: null, imagePreview: null },
    ]);

  const removeHighlight = (i) => {
    const updated = [...highlight];
    updated.splice(i, 1);
    setHighlight(updated);
  };

  const handleHighlightChange = (i, e) => {
    const updated = [...highlight];
    updated[i][e.target.name] = e.target.value;
    setHighlight(updated);
  };

  const handleHighlightImage = (i, e) => {
    const file = e.target.files[0];
    const updated = [...highlight];
    updated[i].image = file;
    updated[i].imagePreview = URL.createObjectURL(file);
    setHighlight(updated);
  };

  // =======================================================
  // BEST TIME SECTION
//   const addBesttime = () =>
//     setBesttime([
//       ...besttime,
//       { title: "", subtitle: "", description: "", month: "", content: [] },
//     ]);

//   const removeBesttime = (i) => {
//     const updated = [...besttime];
//     updated.splice(i, 1);
//     setBesttime(updated);
//   };

//   const handleBesttimeChange = (i, e) => {
//     const updated = [...besttime];
//     updated[i][e.target.name] = e.target.value;
//     setBesttime(updated);
//   };

//   const addBesttimeContent = (i) => {
//     const updated = [...besttime];
//     updated[i].content.push({ type: "paragraph", content: "" });
//     setBesttime(updated);
//   };

//   const handleBesttimeContentChange = (i, j, e) => {
//     const updated = [...besttime];
//     updated[i].content[j][e.target.name] = e.target.value;
//     setBesttime(updated);
//   };

//   const removeBesttimeContent = (i, j) => {
//     const updated = [...besttime];
//     updated[i].content.splice(j, 1);
//     setBesttime(updated);
//   };

const handleBesttimeMainChange = (e) =>
  setBesttime({ ...besttime, [e.target.name]: e.target.value });


const addMonth = () => {
  setBesttime({
    ...besttime,
    months: [...besttime.months, { month: "", content: [] }]
  });
};

const removeMonth = (i) => {
  const updated = [...besttime.months];
  updated.splice(i, 1);
  setBesttime({ ...besttime, months: updated });
};

const handleMonthChange = (i, e) => {
  const updated = [...besttime.months];
  updated[i][e.target.name] = e.target.value;
  setBesttime({ ...besttime, months: updated });
};

const addMonthContent = (i) => {
  const updated = [...besttime.months];
  updated[i].content.push({ type: "paragraph", content: "" });
  setBesttime({ ...besttime, months: updated });
};

const handleMonthContentChange = (i, j, e) => {
  const updated = [...besttime.months];
  updated[i].content[j][e.target.name] = e.target.value;
  setBesttime({ ...besttime, months: updated });
};

const removeMonthContent = (i, j) => {
  const updated = [...besttime.months];
  updated[i].content.splice(j, 1);
  setBesttime({ ...besttime, months: updated });
};


  // =======================================================
  // SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("formData", JSON.stringify(formData));

    if (mainImage) data.append("mainImage", mainImage);

    data.append("overviewinfo", JSON.stringify(overviewinfo));
    data.append("highlight", JSON.stringify(highlight));
    data.append("besttime", JSON.stringify(besttime));

    overviewinfo.forEach((x) => x.image && data.append("overviewImages", x.image));
    highlight.forEach((x) => x.image && data.append("highlightImages", x.image));

    try {
      let res;
      if (editData) {
        res = await API.put(`/destinationlanding/${editData._id}`, data);
      } else {
        res = await API.post("/destinationlanding", data);
      }

      alert("Saved Successfully!");
      onSuccess && onSuccess(res.data);
    } catch (err) {
      console.error(err);
      alert("Error saving data");
    }
  };

  // =======================================================
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 pb-20">
      <h2 className="col-span-2 text-xl font-bold">{editData ? "Edit Destination Landing" : "Create Destination Landing"}</h2>

      <input className="border p-2" name="title" placeholder="Main title" value={formData.title} onChange={handleChange} />
      <input className="border p-2" name="subtitle" placeholder="Subtitle" value={formData.subtitle} onChange={handleChange} />

      <div className="col-span-2">
        <label>Main Image</label>
        <input type="file" className="border p-2 w-full" onChange={handleMainImageChange} />
        {mainImagePreview && <img src={mainImagePreview} className="w-40 rounded mt-2" />}
      </div>

      {/* -------- Overview Section -------- */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Overview Info</h3>
          <button type="button" className="bg-green-600 text-white px-4 py-1 rounded" onClick={addOverview}>+ Add</button>
        </div>

        {overviewinfo.map((item, i) => (
          <div key={i} className="border bg-gray-50 p-4 rounded mt-3">
            <input className="border p-2 w-full mb-2" placeholder="Title" name="title" value={item.title} onChange={(e) => handleOverviewChange(i, e)} />
            <input className="border p-2 w-full mb-2" placeholder="Subtitle" name="subtitle" value={item.subtitle} onChange={(e) => handleOverviewChange(i, e)} />

            <div className="flex justify-between items-center">
              <h4 className="font-semibold">Description blocks</h4>
              <button type="button" onClick={() => addOverviewDescription(i)} className="bg-blue-600 text-white px-3 py-1 rounded">+ Part</button>
            </div>

            {item.description.map((desc, j) => (
              <div key={j} className="border p-2 rounded mt-2 bg-white">
                <select name="type" className="border p-2 w-full mb-2" value={desc.type} onChange={(e) => handleOverviewDescriptionChange(i, j, e)}>
                  <option value="header">Header</option>
                  <option value="paragraph">Paragraph</option>
                  <option value="list">List</option>
                </select>

                <textarea name="content" className="border p-2 w-full" placeholder="Description part"
                  value={desc.content} onChange={(e) => handleOverviewDescriptionChange(i, j, e)}></textarea>

                <button type="button" className="bg-red-600 text-white px-3 py-1 rounded mt-1"
                  onClick={() => removeOverviewDescription(i, j)}>Remove</button>
              </div>
            ))}

            <input type="file" className="border p-2 mb-2 w-full" onChange={(e) => handleOverviewImage(i, e)} />
            {item.imagePreview && <img src={item.imagePreview} className="w-32 rounded" />}

            <button type="button" className="bg-red-600 text-white px-3 py-1 rounded mt-3"
              onClick={() => removeOverview(i)}>Remove Overview</button>
          </div>
        ))}
      </section>

      {/* -------------- HIGHLIGHTS SECTION ---------------- */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Highlights</h3>
          <button type="button" className="bg-green-600 text-white px-4 py-1 rounded" onClick={addHighlight}>+ Add</button>
        </div>

        {highlight.map((item, i) => (
          <div key={i} className="border p-4 bg-gray-50 mt-3 rounded">
            <input className="border p-2 w-full mb-2" name="heading" placeholder="Heading" value={item.heading} onChange={(e) => handleHighlightChange(i, e)} />
            <input className="border p-2 w-full mb-2" name="title" placeholder="Title" value={item.title} onChange={(e) => handleHighlightChange(i, e)} />
            <textarea className="border p-2 w-full mb-2" name="description" placeholder="Description" value={item.description} onChange={(e) => handleHighlightChange(i, e)}></textarea>

            <input type="file" className="border p-2 mb-2" onChange={(e) => handleHighlightImage(i, e)} />
            {item.imagePreview && <img src={item.imagePreview} className="w-32 rounded" />}

            <button type="button" className="bg-red-600 text-white px-3 py-1 rounded mt-2"
              onClick={() => removeHighlight(i)}>Remove</button>
          </div>
        ))}
      </section>


      {/* -------------- BEST TIME SECTION ---------------- */}
      {/* <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Best Time</h3>
          <button type="button" onClick={addBesttime} className="bg-green-600 text-white px-4 py-1 rounded">+ Add</button>
        </div>

        {besttime.map((item, i) => (
          <div key={i} className="border p-4 bg-gray-50 rounded mt-3">
            <input className="border p-2 w-full mb-2" name="title" placeholder="Title" value={item.title} onChange={(e) => handleBesttimeChange(i, e)} />
            <input className="border p-2 w-full mb-2" name="subtitle" placeholder="Subtitle" value={item.subtitle} onChange={(e) => handleBesttimeChange(i, e)} />
            <input className="border p-2 w-full mb-2" name="month" placeholder="Month(s)" value={item.month} onChange={(e) => handleBesttimeChange(i, e)} />

            <textarea className="border p-2 w-full mb-2" name="description" placeholder="Description" value={item.description} onChange={(e) => handleBesttimeChange(i, e)}></textarea>

            <h4 className="font-semibold mt-2 mb-1">Content blocks:</h4>
            <button type="button" className="bg-blue-600 text-white px-3 py-1 rounded mb-2" onClick={() => addBesttimeContent(i)}>+ Add Content Part</button>

            {item.content.map((c, j) => (
              <div key={j} className="border p-2 rounded mt-2 bg-white">
                <select name="type" className="border p-2 w-full mb-2"
                  value={c.type} onChange={(e) => handleBesttimeContentChange(i, j, e)}>
                  <option value="header">Header</option>
                  <option value="paragraph">Paragraph</option>
                  <option value="list">List</option>
                </select>

                <textarea className="border p-2 w-full"
                  name="content" placeholder="Content" value={c.content}
                  onChange={(e) => handleBesttimeContentChange(i, j, e)}></textarea>

                <button type="button" onClick={() => removeBesttimeContent(i, j)}
                  className="bg-red-600 text-white px-3 py-1 rounded mt-2">Remove</button>
              </div>
            ))}

            <button type="button" onClick={() => removeBesttime(i)} className="bg-red-600 text-white px-3 py-1 rounded mt-4">
              Remove Section
            </button>
          </div>
        ))}
      </section> */}

      {/* ---------- BEST TIME SECTION --------- */}
<section className="col-span-2 mt-6">
  <h3 className="text-xl font-semibold">Best Time</h3>

  <input className="border p-2 w-full mb-2" name="title" placeholder="Title"
    value={besttime.title} onChange={handleBesttimeMainChange} />

  <input className="border p-2 w-full mb-2" name="subtitle" placeholder="Subtitle"
    value={besttime.subtitle} onChange={handleBesttimeMainChange} />

  <textarea className="border p-2 w-full mb-2" name="description" placeholder="Description"
    value={besttime.description} onChange={handleBesttimeMainChange}></textarea>

  <div className="flex justify-between items-center mt-3">
    <h4 className="text-lg font-semibold">Months</h4>
    <button type="button" className="bg-green-600 text-white px-4 py-1 rounded" onClick={addMonth}>+ Add Month</button>
  </div>

  {besttime.months.map((item, i) => (
    <div key={i} className="border p-4 bg-gray-50 rounded mt-3">
      <input className="border p-2 w-full mb-2" placeholder="Month(s)" name="month"
        value={item.month} onChange={(e) => handleMonthChange(i, e)} />

      <button type="button" className="bg-blue-600 text-white px-3 py-1 rounded mb-2"
        onClick={() => addMonthContent(i)}>+ Add Content</button>

      {item.content.map((c, j) => (
        <div key={j} className="border p-2 rounded mt-2 bg-white">
          <select name="type" className="border p-2 w-full mb-2"
            value={c.type} onChange={(e) => handleMonthContentChange(i, j, e)}>
            <option value="header">Header</option>
            <option value="paragraph">Paragraph</option>
            <option value="list">List</option>
          </select>

          <textarea className="border p-2 w-full" name="content"
            value={c.content} onChange={(e) => handleMonthContentChange(i, j, e)}></textarea>

          <button type="button" className="bg-red-600 text-white px-3 py-1 rounded mt-2"
            onClick={() => removeMonthContent(i, j)}>Remove Content</button>
        </div>
      ))}

      <button type="button" className="bg-red-600 text-white px-3 py-1 rounded mt-4"
        onClick={() => removeMonth(i)}>Remove Month</button>
    </div>
  ))}
</section>


      <button type="submit" className="bg-blue-600 text-white py-2 rounded col-span-2 mt-6">
        {editData ? "Update Destination Landing" : "Save Destination Landing"}
      </button>
    </form>
  );
};

export default DestinationLandingForm;
