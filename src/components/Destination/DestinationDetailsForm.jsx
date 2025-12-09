import React, { useState, useEffect } from "react";
import API from "../../api/axios.js";

const DestinationDetailsForm = ({ editData, onSuccess }) => {

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    destination: "",
    duration: "",
    // price: "",
    // maxpeople: "",
    // description: "",
    // overviewTitle: "",
    // overviewSubTitle: "",
    // overviewDescription: "",
  });

  const [mainImage, setMainImage] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState(null);

  // =============== Dynamic sections ===================
  const [overviewinfo, setOverviewinfo] = useState([{ title: "", subtitle: "", description: "", image: null, imagePreview: null }]);
// const [overviewinfo, setOverviewinfo] = useState([
//   { title: "", subtitle: "", description: [], image: null, imagePreview: null }
// ]);

  const [highlight, setHighlight] = useState([{ heading:"", title:"", description:"", image:null, imagePreview:null }]);
  const [migration, setMigration] = useState([{ title:"", subtitle:"", description:"", nationalpark:"", details:[], image:null, imagePreview:null }]);
  const [adventure, setAdventure] = useState([{ title:"", subtitle:"", description:"", image:null, imagePreview:null }]);
  const [besttime, setBesttime] = useState([{ title:"", month:"", content:"" }]);
  const [qa, setQa] = useState([{ question:"", answer:[] }]);

  // ============= Prefill for edit =====================
  useEffect(() => {
    if (editData) {
      setFormData(editData);
      setOverviewinfo(editData.overviewinfo ?? []);
      setHighlight(editData.highlight ?? []);
      setMigration(editData.migration ?? []);
      setAdventure(editData.adventure ?? []);
      setBesttime(editData.besttime ?? []);
      setQa(editData.aboutBooking ?? []);
      setMainImagePreview(editData.image);
    }
  }, [editData]);

  // ============ Basic Change Handlers ================
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    setMainImage(file);
    setMainImagePreview(URL.createObjectURL(file));
  };

  // =================================================================
  // ------------------ OVERVIEW INFO SECTION ------------------------
  // =================================================================
  const addOverview = () => setOverviewinfo([...overviewinfo, { title:"", subtitle:"", description:"", image:null, imagePreview:null }]);

  const removeOverview = (i) => {
    const list = [...overviewinfo];
    list.splice(i, 1);
    setOverviewinfo(list);
  };

  const handleOverviewChange = (i, e) => {
    const list = [...overviewinfo];
    list[i][e.target.name] = e.target.value;
    setOverviewinfo(list);
  };

  const handleOverviewImage = (i, e) => {
    const file = e.target.files[0];
    const updated = [...overviewinfo];
    updated[i].image = file;
    updated[i].imagePreview = URL.createObjectURL(file);
    setOverviewinfo(updated);
  };

  // =================================================================
  // ------------------ HIGHLIGHT SECTION ----------------------------
  // =================================================================
  const addHighlight = () => setHighlight([...highlight, { heading:"", title:"", description:"", image:null, imagePreview:null }]);

  const removeHighlight = (i) => {
    const list = [...highlight];
    list.splice(i, 1);
    setHighlight(list);
  };

  const handleHighlightChange = (i, e) => {
    const list = [...highlight];
    list[i][e.target.name] = e.target.value;
    setHighlight(list);
  };

  const handleHighlightImage = (i, e) => {
    const file = e.target.files[0];
    const updated = [...highlight];
    updated[i].image = file;
    updated[i].imagePreview = URL.createObjectURL(file);
    setHighlight(updated);
  };

  // =================================================================
  // ------------------ MIGRATION SECTION ----------------------------
  // =================================================================
  const addMigration = () => setMigration([...migration, { title:"", subtitle:"", description:"", nationalpark:"", details:[], image:null }]);

  const removeMigration = (i) => {
    const list = [...migration];
    list.splice(i, 1);
    setMigration(list);
  };

  const handleMigrationChange = (i, e) => {
    const list = [...migration];
    list[i][e.target.name] = e.target.value;
    setMigration(list);
  };

  const handleMigrationImage = (i, e) => {
    const file = e.target.files[0];
    const updated = [...migration];
    updated[i].image = file;
    updated[i].imagePreview = URL.createObjectURL(file);
    setMigration(updated);
  };

  // MIGRATION DETAILS nested add/remove
  const addMigrationDetail = (index) => {
    const updated = [...migration];
    updated[index].details.push({ type:"paragraph", content:"" });
    setMigration(updated);
  };

  const removeMigrationDetail = (idx, jdx) => {
    const updated = [...migration];
    updated[idx].details.splice(jdx, 1);
    setMigration(updated);
  };

  const handleMigrationDetailChange = (idx, jdx, e) => {
    const updated = [...migration];
    updated[idx].details[jdx][e.target.name] = e.target.value;
    setMigration(updated);
  };

  // =================================================================
  // ------------------ ADVENTURE SECTION ----------------------------
  // =================================================================
  const addAdventure = () => setAdventure([...adventure, { title:"", subtitle:"", description:"", image:null }]);
  const removeAdventure = (i) => {
    const list = [...adventure];
    list.splice(i, 1);
    setAdventure(list);
  };
  const handleAdventureChange = (i, e) => {
    const list = [...adventure];
    list[i][e.target.name] = e.target.value;
    setAdventure(list);
  };
  const handleAdventureImage = (i, e) => {
    const updated = [...adventure];
    updated[i].image = e.target.files[0];
    updated[i].imagePreview = URL.createObjectURL(e.target.files[0]);
    setAdventure(updated);
  };

  // =================================================================
  // ------------------ BESTTIME SECTION -----------------------------
  // =================================================================
  const addBesttime = () => setBesttime([...besttime, { title:"", month:"", content:"" }]);
  const removeBesttime = (i) => {
    const list = [...besttime];
    list.splice(i, 1);
    setBesttime(list);
  };
  const handleBesttimeChange = (i, e) => {
    const list = [...besttime];
    list[i][e.target.name] = e.target.value;
    setBesttime(list);
  };

  // =================================================================
  // ------------------ Q&A SECTION ----------------------------------
  // =================================================================
  const addQa = () => setQa([...qa, { question:"", answer:[] }]);
  const removeQa = (i) => {
    const list = [...qa];
    list.splice(i, 1);
    setQa(list);
  };
  const handleQaChange = (i, e) => {
    const list = [...qa];
    list[i].question = e.target.value;
    setQa(list);
  };

  const addQaAnswer = (i) => {
    const list = [...qa];
    list[i].answer.push({ type:"paragraph", content:"" });
    setQa(list);
  };
  const removeQaAnswer = (i, j) => {
    const list = [...qa];
    list[i].answer.splice(j, 1);
    setQa(list);
  };
  const handleQaAnswerChange = (i, j, e) => {
    const list = [...qa];
    list[i].answer[j][e.target.name] = e.target.value;
    setQa(list);
  };

  // =================================================================
  // ------------------ SUBMIT FORM ----------------------------------
  // =================================================================

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("formData", JSON.stringify(formData));
    if (mainImage) data.append("mainImage", mainImage);

    data.append("overviewinfo", JSON.stringify(overviewinfo));
    data.append("highlight", JSON.stringify(highlight));
    data.append("migration", JSON.stringify(migration));
    data.append("adventure", JSON.stringify(adventure));
    data.append("besttime", JSON.stringify(besttime));
    data.append("qa", JSON.stringify(qa));

    overviewinfo.forEach((x) => x.image && data.append("overviewImages", x.image));
    highlight.forEach((x) => x.image && data.append("highlightImages", x.image));
    migration.forEach((x) => x.image && data.append("migrationImages", x.image));
    adventure.forEach((x) => x.image && data.append("adventureImages", x.image));

    try {
      let res;
      if (editData) {
        res = await API.put(`/destinationdetails/${editData._id}`, data);
      } else {
        res = await API.post("/destinationdetails", data);
      }
      alert("Saved Successfully!");
      onSuccess && onSuccess(res.data);

    } catch (err) {
      console.error(err);
      alert("Error saving destination details");
    }
  };


  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 pb-20">
      <h2 className="col-span-2 text-xl font-bold">{editData ? "Edit Destination" : "Create Destination"}</h2>

      {/* MAIN BASIC INPUTS */}
      <input className="border p-2" name="title" placeholder="Main title" value={formData.title} onChange={handleChange} />
      <input className="border p-2" name="subtitle" placeholder="Subtitle" value={formData.subtitle} onChange={handleChange} />

      <input className="border p-2" name="destination" placeholder="Destination" value={formData.destination} onChange={handleChange} />
      {/* <input className="border p-2" name="duration" placeholder="Duration" value={formData.duration} onChange={handleChange} />

      <textarea className="border p-2 col-span-2" placeholder="Description" name="description" value={formData.description} onChange={handleChange}></textarea> */}

      {/* Main Image */}
      <div className="col-span-2">
        <label>Main Image</label>
        <input type="file" className="border p-2 w-full" onChange={handleMainImageChange} />
        {mainImagePreview && <img src={mainImagePreview} className="w-40 rounded mt-2" />}
      </div>

      {/* =============================================================== */}
      {/* ================= OVERVIEW INFO UI ============================ */}
      {/* =============================================================== */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Overview Info</h3>
          <button type="button" className="bg-green-600 text-white px-4 py-1 rounded" onClick={addOverview}>+ Add</button>
        </div>

        {overviewinfo.map((item, i) => (
          <div key={i} className="border bg-gray-50 p-4 rounded mt-3">
            <input className="border p-2 w-full mb-2" placeholder="Title" name="title" value={item.title} onChange={(e)=>handleOverviewChange(i,e)} />
            <input className="border p-2 w-full mb-2" placeholder="Subtitle" name="subtitle" value={item.subtitle} onChange={(e)=>handleOverviewChange(i,e)} />
            <textarea className="border p-2 w-full mb-2" placeholder="Description" name="description" value={item.description} onChange={(e)=>handleOverviewChange(i,e)}></textarea>

            <input type="file" className="border p-2 mb-2 w-full" onChange={(e)=>handleOverviewImage(i,e)} />
            {item.imagePreview && <img src={item.imagePreview} className="w-32 rounded" />}
            
            <button type="button" className="bg-red-600 text-white px-3 py-1 rounded mt-2" onClick={()=>removeOverview(i)}>Remove</button>
          </div>
        ))}
      </section>


      {/* =============================================================== */}
      {/* ================= HIGHLIGHT SECTION =========================== */}
      {/* =============================================================== */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Highlights</h3>
          <button type="button" className="bg-green-600 text-white px-4 py-1 rounded" onClick={addHighlight}>+ Add</button>
        </div>

        {highlight.map((item, i)=>(
          <div key={i} className="border p-4 bg-gray-50 mt-3 rounded">
            <input className="border p-2 w-full mb-2" name="heading" placeholder="Heading" value={item.heading} onChange={(e)=>handleHighlightChange(i,e)} />
            <input className="border p-2 w-full mb-2" name="title" placeholder="Title" value={item.title} onChange={(e)=>handleHighlightChange(i,e)} />
            <textarea className="border p-2 w-full mb-2" name="description" placeholder="Description" value={item.description} onChange={(e)=>handleHighlightChange(i,e)}></textarea>

            <input type="file" className="border p-2 mb-2" onChange={(e)=>handleHighlightImage(i,e)} />
            {item.imagePreview && <img src={item.imagePreview} className="w-32 rounded" />}

            <button type="button" className="bg-red-600 text-white px-3 py-1 rounded mt-2" onClick={()=>removeHighlight(i)}>Remove</button>
          </div>
        ))}
      </section>


      {/* =============================================================== */}
      {/* ================= MIGRATION SECTION =========================== */}
      {/* =============================================================== */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Migration Section</h3>
          <button type="button" onClick={addMigration} className="bg-green-600 text-white px-4 py-1 rounded">+ Add</button>
        </div>

        {migration.map((item, i)=>(
          <div key={i} className="border p-4 bg-gray-50 mt-3 rounded">

            <input className="border p-2 w-full mb-2" placeholder="Title" name="title" value={item.title} onChange={(e)=>handleMigrationChange(i,e)} />
            <input className="border p-2 w-full mb-2" placeholder="Subtitle" name="subtitle" value={item.subtitle} onChange={(e)=>handleMigrationChange(i,e)} />
            <input className="border p-2 w-full mb-2" placeholder="National Park" name="nationalpark" value={item.nationalpark} onChange={(e)=>handleMigrationChange(i,e)} />

            <textarea className="border p-2 w-full mb-2" placeholder="Description" name="description" value={item.description} onChange={(e)=>handleMigrationChange(i,e)}></textarea>

            {/* Migration Image */}
            <input type="file" className="border p-2" onChange={(e)=>handleMigrationImage(i,e)} />
            {item.imagePreview && <img src={item.imagePreview} className="w-32 rounded" />}

            {/* Nested Details */}
            <div className="mt-3">
              <h4 className="font-semibold mb-2">Details</h4>
              <button type="button" className="bg-blue-600 text-white px-3 py-1 rounded" onClick={()=>addMigrationDetail(i)}>+ Detail</button>

              {item.details?.map((d,j)=>(
                <div key={j} className="border p-2 mt-2 rounded">
                  <select name="type" className="border p-2 w-full mb-2" value={d.type} onChange={(e)=>handleMigrationDetailChange(i,j,e)}>
                    <option value="header">Header</option>
                    <option value="paragraph">Paragraph</option>
                    <option value="list">List</option>
                  </select>

                  <input name="content" className="border p-2 w-full" value={d.content} onChange={(e)=>handleMigrationDetailChange(i,j,e)} placeholder="Content" />
                  <button type="button" className="bg-red-600 text-white px-3 py-1 rounded mt-2" onClick={()=>removeMigrationDetail(i,j)}>Remove Detail</button>
                </div>
              ))}
            </div>

            <button type="button" className="bg-red-600 text-white px-3 py-1 rounded mt-3" onClick={()=>removeMigration(i)}>Remove Section</button>
          </div>
        ))}
      </section>



      {/* =============================================================== */}
      {/* ================= ADVENTURE SECTION =========================== */}
      {/* =============================================================== */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Adventure</h3>
          <button type="button" className="bg-green-600 text-white px-4 py-1 rounded" onClick={addAdventure}>+ Add</button>
        </div>

        {adventure.map((item,i)=>(
          <div key={i} className="border p-4 bg-gray-50 rounded mt-3">
            <input className="border p-2 w-full mb-2" name="title" placeholder="Title" value={item.title} onChange={(e)=>handleAdventureChange(i,e)} />
            <input className="border p-2 w-full mb-2" name="subtitle" placeholder="Subtitle" value={item.subtitle} onChange={(e)=>handleAdventureChange(i,e)} />
            <textarea className="border p-2 w-full mb-2" name="description" placeholder="Description" value={item.description} onChange={(e)=>handleAdventureChange(i,e)}></textarea>

            <input type="file" className="border p-2" onChange={(e)=>handleAdventureImage(i,e)} />
            {item.imagePreview && <img src={item.imagePreview} className="w-32 rounded" />}

            <button type="button" onClick={()=>removeAdventure(i)} className="bg-red-600 text-white px-3 py-1 rounded mt-2">Remove</button>
          </div>
        ))}
      </section>



      {/* =============================================================== */}
      {/* ================= BEST TIME SECTION =========================== */}
      {/* =============================================================== */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Best Time</h3>
          <button type="button" onClick={addBesttime} className="bg-green-600 text-white px-4 py-1 rounded">+ Add</button>
        </div>

        {besttime.map((item,i)=>(
          <div key={i} className="border p-4 bg-gray-50 rounded mt-3">
            <input className="border p-2 w-full mb-2" name="title" placeholder="Title" value={item.title} onChange={(e)=>handleBesttimeChange(i,e)} />
            <input className="border p-2 w-full mb-2" name="month" placeholder="Month(s)" value={item.month} onChange={(e)=>handleBesttimeChange(i,e)} />
            <textarea className="border p-2 w-full" name="content" placeholder="Content" value={item.content} onChange={(e)=>handleBesttimeChange(i,e)}></textarea>

            <button type="button" onClick={()=>removeBesttime(i)} className="bg-red-600 text-white px-3 py-1 rounded mt-2">Remove</button>
          </div>
        ))}
      </section>


      {/* =============================================================== */}
      {/* ================= Q&A SECTION =========================== */}
      {/* =============================================================== */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">FAQs / About Booking</h3>
          <button type="button" onClick={addQa} className="bg-green-600 text-white px-4 py-1 rounded">+ Add</button>
        </div>

        {qa.map((item,i)=>(
          <div key={i} className="border p-4 bg-gray-50 rounded mt-3">
            <input className="border p-2 w-full mb-2"
              placeholder="Question"
              value={item.question}
              onChange={(e)=>handleQaChange(i,e)}
            />

            <button type="button" onClick={()=>addQaAnswer(i)} className="bg-blue-600 text-white px-3 py-1 rounded mb-2">+ Add Answer Part</button>

            {item.answer.map((ans,j)=>(
              <div key={j} className="border p-2 rounded mt-2">
                <select name="type" className="border p-2 w-full mb-2" value={ans.type} onChange={(e)=>handleQaAnswerChange(i,j,e)}>
                  <option value="header">Header</option>
                  <option value="paragraph">Paragraph</option>
                  <option value="list">List</option>
                </select>

                <textarea className="border p-2 w-full"
                  placeholder="Content"
                  name="content"
                  value={ans.content}
                  onChange={(e)=>handleQaAnswerChange(i,j,e)}
                ></textarea>

                <button type="button" onClick={()=>removeQaAnswer(i,j)} className="bg-red-600 text-white px-3 py-1 rounded mt-2">Remove</button>
              </div>
            ))}

            <button type="button" onClick={()=>removeQa(i)} className="bg-red-600 text-white px-3 py-1 rounded mt-4">Remove Question</button>
          </div>
        ))}
      </section>



      <button type="submit" className="bg-blue-600 text-white py-2 rounded col-span-2 mt-4">
        {editData ? "Update Destination" : "Save Destination"}
      </button>
    </form>
  );
};

export default DestinationDetailsForm;


