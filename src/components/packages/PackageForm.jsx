// import React, { useState } from "react";
// import API from "../../api/axios.js";

// const PackageForm = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     subtitle: "",
//     startLocation: "",
//     endLocation: "",
//     duration: "",
//     price: "",
//     maxpeople: "",
//     description: "",
//     overviewTitle: "",
//     overviewSubTitle: "",
//     overviewDescription: "",
//   });

//   const [imagePreview, setImagePreview] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Upload Image preview
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedImage(file);
//     setImagePreview(URL.createObjectURL(file));
//   };

//   // Submit Form
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     Object.keys(formData).forEach((key) => data.append(key, formData[key]));
//     if (selectedImage) data.append("image", selectedImage);

//     try {
//       const response = await API.post("/packages", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       alert("Package Created Successfully!");
//       console.log(response.data);
//     } catch (error) {
//       alert("Error while saving package");
//       console.log(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

//       <input name="title" placeholder="Title" className="border p-2"
//         value={formData.title} onChange={handleChange} required />

//       <input name="subtitle" placeholder="Subtitle" className="border p-2"
//         value={formData.subtitle} onChange={handleChange} />

//       <input name="startLocation" placeholder="Start Location" className="border p-2"
//         value={formData.startLocation} onChange={handleChange} required />

//       <input name="endLocation" placeholder="End Location" className="border p-2"
//         value={formData.endLocation} onChange={handleChange} required />

//       <input name="duration" placeholder="Duration" className="border p-2"
//         value={formData.duration} onChange={handleChange} required />

//       <input name="price" placeholder="Price" className="border p-2"
//         value={formData.price} onChange={handleChange} required />

//       <input name="maxpeople" placeholder="Max People" className="border p-2"
//         value={formData.maxpeople} onChange={handleChange} />

//       <textarea name="description" placeholder="Description" className="border p-2 col-span-2"
//         value={formData.description} onChange={handleChange} />

//       <input name="overviewTitle" placeholder="Overview Title" className="border p-2"
//         value={formData.overviewTitle} onChange={handleChange} required />

//       <input name="overviewSubTitle" placeholder="Overview Subtitle" className="border p-2"
//         value={formData.overviewSubTitle} onChange={handleChange} required />

//       <textarea name="overviewDescription" placeholder="Overview Description"
//         className="border p-2 col-span-2"
//         value={formData.overviewDescription}
//         onChange={handleChange}
//         required
//       />

//       <div>
//         <label>Package Image</label>
//         <input type="file" accept="image/*" className="border p-2 w-full"
//           onChange={handleImageChange} />
//       </div>

//       {imagePreview && (
//         <img src={imagePreview} alt="preview" className="w-40 h-32 object-cover rounded border" />
//       )}

//       <button type="submit" className="bg-blue-600 text-white py-2 rounded col-span-2 mt-3">
//         Save Package
//       </button>
//     </form>
//   );
// };

// export default PackageForm;




import React, { useState } from "react";
import API from "../../api/axios.js";

const PackageForm = () => {

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    startLocation: "",
    endLocation: "",
    duration: "",
    price: "",
    maxpeople: "",
    description: "",
    overviewTitle: "",
    overviewSubTitle: "",
    overviewDescription: "",
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // ===================== ITINERARY =====================
  const [itinerary, setItinerary] = useState([
    { day: "", title: "", location: "", description: "", map: "", accommodationName: "", image: null, imagePreview: null }
  ]);

  const addItinerary = () => {
    setItinerary([...itinerary, { day: "", title: "", location: "", description: "", map: "", accommodationName: "", image: null, imagePreview: null }]);
  };

  const removeItinerary = (index) => {
    const list = [...itinerary];
    list.splice(index, 1);
    setItinerary(list);
  };

  const handleItineraryChange = (index, e) => {
    const list = [...itinerary];
    list[index][e.target.name] = e.target.value;
    setItinerary(list);
  };

  const handleItineraryImage = (index, e) => {
    const file = e.target.files[0];
    const list = [...itinerary];
    list[index].image = file;
    list[index].imagePreview = URL.createObjectURL(file);
    setItinerary(list);
  };

  // ===================== EXPERIENCE =====================
  const [experience, setExperience] = useState([
    { description: "", image: null, imagePreview: null }
  ]);

  const addExperience = () => setExperience([...experience, { description: "", image: null, imagePreview: null }]);

  const removeExperience = (index) => {
    const ex = [...experience];
    ex.splice(index, 1);
    setExperience(ex);
  };

  const handleExperienceChange = (index, e) => {
    const ex = [...experience];
    ex[index].description = e.target.value;
    setExperience(ex);
  };

  const handleExperienceImage = (index, e) => {
    const file = e.target.files[0];
    const ex = [...experience];
    ex[index].image = file;
    ex[index].imagePreview = URL.createObjectURL(file);
    setExperience(ex);
  };

  // ===================== INCLUDE =====================
  const [include, setInclude] = useState([{ icon: "", content: "" }]);

  const addInclude = () => setInclude([...include, { icon: "", content: "" }]);
  const removeInclude = (index) => {
    const list = [...include];
    list.splice(index, 1);
    setInclude(list);
  };
  const handleIncludeChange = (index, e) => {
    const list = [...include];
    list[index][e.target.name] = e.target.value;
    setInclude(list);
  };

  // ===================== EXCLUDE =====================
  const [exclude, setExclude] = useState([{ icon: "", content: "" }]);

  const addExclude = () => setExclude([...exclude, { icon: "", content: "" }]);
  const removeExclude = (index) => {
    const list = [...exclude];
    list.splice(index, 1);
    setExclude(list);
  };
  const handleExcludeChange = (index, e) => {
    const list = [...exclude];
    list[index][e.target.name] = e.target.value;
    setExclude(list);
  };

  // ===================== Q & A =====================
  const [qa, setQa] = useState([
    { question: "", answer: [] }
  ]);

  const addQa = () => setQa([...qa, { question: "", answer: [] }]);
  const removeQa = (index) => {
    const list = [...qa];
    list.splice(index, 1);
    setQa(list);
  };

  const handleQaChange = (index, e) => {
    const list = [...qa];
    list[index].question = e.target.value;
    setQa(list);
  };

  const addQaAnswer = (qaIndex) => {
    const list = [...qa];
    list[qaIndex].answer.push({ type: "paragraph", content: "" });
    setQa(list);
  };

  const removeQaAnswer = (qaIndex, ansIndex) => {
    const list = [...qa];
    list[qaIndex].answer.splice(ansIndex, 1);
    setQa(list);
  };

  const handleQaAnswerChange = (qaIndex, ansIndex, e) => {
    const list = [...qa];
    list[qaIndex].answer[ansIndex][e.target.name] = e.target.value;
    setQa(list);
  };

  // ===================== MAIN FORM HANDLERS =====================
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();

//     Object.keys(formData).forEach((key) => data.append(key, formData[key]));

//     // itinerary upload
//     // itinerary.forEach((item, i) => {
//     //   Object.keys(item).forEach((k) => {
//     //     if (k !== "image" && k !== "imagePreview") data.append(`itinerary[${i}][${k}]`, item[k]);
//     //   });
//     //   if (item.image) data.append(`itinerary[${i}][image]`, item.image);
//     // });

//     itinerary.forEach((item) => {
//   if (item.image) data.append("itineraryImages", item.image);
// });


//     experience.forEach((item, i) => {
      
//       if (item.image) data.append("experienceImages", item.image);
//     });

//     include.forEach((item, i) => {
//       data.append(`include[${i}][icon]`, item.icon);
//       data.append(`include[${i}][content]`, item.content);
//     });

//     exclude.forEach((item, i) => {
//       data.append(`exclude[${i}][icon]`, item.icon);
//       data.append(`exclude[${i}][content]`, item.content);
//     });

//     qa.forEach((item, i) => {
//       data.append(`aboutBooking[${i}][question]`, item.question);
//       item.answer.forEach((ans, j) => {
//         data.append(`aboutBooking[${i}][answer][${j}][type]`, ans.type);
//         data.append(`aboutBooking[${i}][answer][${j}][content]`, ans.content);
//       });
//     });

//     if (selectedImage) data.append("mainImage", selectedImage);

//     try {
//       await API.post("/packages", data, { headers: { "Content-Type": "multipart/form-data" }});
//       alert("Package created successfully!");
//     } catch (err) {
//       console.log(err);
//       alert("Error creating package");
//     }
//   };

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();

  // Main form fields
  data.append("formData", JSON.stringify(formData));

  // JSON stringify all dynamic sections
  data.append("itinerary", JSON.stringify(itinerary.map(({ image, imagePreview, ...rest }) => rest)));
  data.append("experience", JSON.stringify(experience.map(({ image, imagePreview, ...rest }) => rest)));
  data.append("include", JSON.stringify(include));
  data.append("exclude", JSON.stringify(exclude));
  data.append("qa", JSON.stringify(qa));

  // Main image
  if (selectedImage) {
    data.append("mainImage", selectedImage);
  }

  // Itinerary images
  itinerary.forEach((item) => {
    if (item.image) {
      data.append("itineraryImages", item.image);
    }
  });

  // Experience images
  experience.forEach((item) => {
    if (item.image) {
      data.append("experienceImages", item.image);
    }
  });

  try {
    await API.post("/packages", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    alert("Package created successfully!");
  } catch (err) {
    console.log("❌ Error creating package:", err);
    alert("Error creating package");
  }
};


  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 pb-20">

      <h2 className="col-span-2 text-2xl font-bold mb-4">Create Package</h2>

      {/* BASIC FIELDS */}
      <input className="border p-2" name="title" placeholder="Title" onChange={handleChange} />
      <input className="border p-2" name="subtitle" placeholder="Subtitle" onChange={handleChange} />
      <input className="border p-2" name="startLocation" placeholder="Start Location" onChange={handleChange} />
      <input className="border p-2" name="endLocation" placeholder="End Location" onChange={handleChange} />
      <input className="border p-2" name="duration" placeholder="Duration" onChange={handleChange} />
      <input className="border p-2" name="price" placeholder="Price" onChange={handleChange} />
      <input className="border p-2" name="maxpeople" placeholder="Max People" onChange={handleChange} />

      <textarea className="border p-2 col-span-2" name="description" placeholder="Description" onChange={handleChange} />
      <input className="border p-2" name="overviewTitle" placeholder="Overview Title" onChange={handleChange} />
      <input className="border p-2" name="overviewSubTitle" placeholder="Overview Subtitle" onChange={handleChange} />
      <textarea className="border p-2 col-span-2" name="overviewDescription" placeholder="Overview Description" onChange={handleChange} />

      {/* MAIN IMAGE */}
      <div className="col-span-2">
        <label>Main Image</label>
        <input type="file" accept="image/*" className="border p-2 w-full" onChange={handleImageChange} />
        {imagePreview && <img src={imagePreview} className="w-32 mt-2 rounded border" />}
      </div>

      {/* ========== ITINERARY UI ========== */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Itinerary</h3>
          <button type="button" className="bg-green-600 text-white px-3 py-1 rounded" onClick={addItinerary}>+ Add Day</button>
        </div>

        {itinerary.map((item, index) => (
          <div key={index} className="border p-4 rounded mt-3 bg-gray-50">
            <div className="grid grid-cols-2 gap-3">
              <input className="border p-2" placeholder="Day" name="day" value={item.day} onChange={(e)=>handleItineraryChange(index,e)} />
              <input className="border p-2" placeholder="Title" name="title" value={item.title} onChange={(e)=>handleItineraryChange(index,e)} />
              <input className="border p-2" placeholder="Location" name="location" value={item.location} onChange={(e)=>handleItineraryChange(index,e)} />
              <input className="border p-2" placeholder="Map URL" name="map" value={item.map} onChange={(e)=>handleItineraryChange(index,e)} />
              <input className="border p-2 col-span-2" placeholder="Accommodation" name="accommodationName" value={item.accommodationName} onChange={(e)=>handleItineraryChange(index,e)} />
              <textarea className="border p-2 col-span-2" placeholder="Description" name="description" value={item.description} onChange={(e)=>handleItineraryChange(index,e)} />

              <input type="file" accept="image/*" className="border p-2 col-span-2"
                onChange={(e)=>handleItineraryImage(index,e)}
              />

              {item.imagePreview && <img src={item.imagePreview} className="w-32 h-24 object-cover rounded"/>}
            </div>

            <button type="button" className="bg-red-600 text-white px-3 py-1 mt-2 rounded" onClick={()=>removeItinerary(index)}>Remove</button>
          </div>
        ))}
      </section>

      {/* ========== EXPERIENCE UI ========== */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Experience</h3>
          <button type="button" className="bg-green-600 text-white px-3 py-1 rounded" onClick={addExperience}>+ Add</button>
        </div>

        {experience.map((ex, index)=>(
          <div key={index} className="border p-4 rounded mt-3 bg-gray-50">
            <textarea className="border p-2 w-full" placeholder="Description" value={ex.description} onChange={(e)=>handleExperienceChange(index,e)} />

            <input type="file" className="border p-2 mt-2" onChange={(e)=>handleExperienceImage(index,e)} />
            {ex.imagePreview && <img src={ex.imagePreview} className="w-32 mt-2 rounded" />}

            <button type="button" className="bg-red-600 text-white px-3 py-1 mt-2 rounded" onClick={()=>removeExperience(index)}>Remove</button>
          </div>
        ))}
      </section>

      {/* ========== INCLUDE UI ========== */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Included</h3>
          <button type="button" onClick={addInclude} className="bg-green-600 text-white px-3 py-1 rounded">+ Add</button>
        </div>

        {include.map((inc, index)=>(
          <div key={index} className="grid grid-cols-2 gap-3 border p-4 mt-3 rounded">
            <input className="border p-2" placeholder="Icon Class" name="icon" value={inc.icon} onChange={(e)=>handleIncludeChange(index,e)} />
            <input className="border p-2" placeholder="Content" name="content" value={inc.content} onChange={(e)=>handleIncludeChange(index,e)} />

            <button type="button" className="bg-red-600 text-white px-3 py-1 rounded col-span-2" onClick={()=>removeInclude(index)}>Remove</button>
          </div>
        ))}
      </section>

      {/* ========== EXCLUDE UI ========== */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Excluded</h3>
          <button type="button" onClick={addExclude} className="bg-green-600 text-white px-3 py-1 rounded">+ Add</button>
        </div>

        {exclude.map((exc, index)=>(
          <div key={index} className="grid grid-cols-2 gap-3 border p-4 mt-3 rounded">
            <input className="border p-2" placeholder="Icon Class" name="icon" value={exc.icon} onChange={(e)=>handleExcludeChange(index,e)} />
            <input className="border p-2" placeholder="Content" name="content" value={exc.content} onChange={(e)=>handleExcludeChange(index,e)} />

            <button type="button" className="bg-red-600 text-white px-3 py-1 rounded col-span-2" onClick={()=>removeExclude(index)}>Remove</button>
          </div>
        ))}
      </section>

      {/* ========== Q&A UI ========== */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">FAQ / Q&A</h3>
          <button type="button" onClick={addQa} className="bg-green-600 text-white px-3 py-1 rounded">+ Add</button>
        </div>

        {qa.map((item, i)=>(
          <div key={i} className="border p-4 mt-4 bg-gray-50 rounded">
            <input className="border p-2 w-full mb-2" placeholder="Question" value={item.question} onChange={(e)=>handleQaChange(i,e)} />

            <button type="button" className="bg-blue-600 text-white px-3 py-1 mb-3 rounded" onClick={()=>addQaAnswer(i)}>+ Add Answer</button>

            {item.answer.map((ans, j)=>(
              <div key={j} className="grid grid-cols-2 gap-3 border p-3 mb-3 rounded">
                <select name="type" className="border p-2" value={ans.type} onChange={(e)=>handleQaAnswerChange(i,j,e)}>
                  <option value="header">Header</option>
                  <option value="paragraph">Paragraph</option>
                  <option value="list">List</option>
                </select>

                <input name="content" className="border p-2" placeholder="Answer content"
                  value={ans.content}
                  onChange={(e)=>handleQaAnswerChange(i,j,e)}
                />

                <button type="button" className="bg-red-600 text-white px-3 py-1 rounded" onClick={()=>removeQaAnswer(i,j)}>Remove Answer</button>
              </div>
            ))}

            <button type="button" className="bg-red-600 text-white px-3 py-1 rounded" onClick={()=>removeQa(i)}>Remove Question</button>
          </div>
        ))}
      </section>

      {/* SUBMIT BUTTON */}
      <button className="col-span-2 bg-blue-600 text-white py-2 rounded mt-4" type="submit">
        Save Package
      </button>

    </form>
  );
};

export default PackageForm;
