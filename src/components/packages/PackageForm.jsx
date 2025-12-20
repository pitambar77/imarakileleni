// // import React, { useState } from "react";
// // import API from "../../api/axios.js";

// // const PackageForm = () => {
// //   const [formData, setFormData] = useState({
// //     title: "",
// //     subtitle: "",
// //     startLocation: "",
// //     endLocation: "",
// //     duration: "",
// //     price: "",
// //     maxpeople: "",
// //     description: "",
// //     overviewTitle: "",
// //     overviewSubTitle: "",
// //     overviewDescription: "",
// //   });

// //   const [imagePreview, setImagePreview] = useState(null);
// //   const [selectedImage, setSelectedImage] = useState(null);

// //   // Handle input change
// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   // Upload Image preview
// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0];
// //     setSelectedImage(file);
// //     setImagePreview(URL.createObjectURL(file));
// //   };

// //   // Submit Form
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const data = new FormData();
// //     Object.keys(formData).forEach((key) => data.append(key, formData[key]));
// //     if (selectedImage) data.append("image", selectedImage);

// //     try {
// //       const response = await API.post("/packages", data, {
// //         headers: { "Content-Type": "multipart/form-data" },
// //       });

// //       alert("Package Created Successfully!");
// //       console.log(response.data);
// //     } catch (error) {
// //       alert("Error while saving package");
// //       console.log(error);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

// //       <input name="title" placeholder="Title" className="border p-2"
// //         value={formData.title} onChange={handleChange} required />

// //       <input name="subtitle" placeholder="Subtitle" className="border p-2"
// //         value={formData.subtitle} onChange={handleChange} />

// //       <input name="startLocation" placeholder="Start Location" className="border p-2"
// //         value={formData.startLocation} onChange={handleChange} required />

// //       <input name="endLocation" placeholder="End Location" className="border p-2"
// //         value={formData.endLocation} onChange={handleChange} required />

// //       <input name="duration" placeholder="Duration" className="border p-2"
// //         value={formData.duration} onChange={handleChange} required />

// //       <input name="price" placeholder="Price" className="border p-2"
// //         value={formData.price} onChange={handleChange} required />

// //       <input name="maxpeople" placeholder="Max People" className="border p-2"
// //         value={formData.maxpeople} onChange={handleChange} />

// //       <textarea name="description" placeholder="Description" className="border p-2 col-span-2"
// //         value={formData.description} onChange={handleChange} />

// //       <input name="overviewTitle" placeholder="Overview Title" className="border p-2"
// //         value={formData.overviewTitle} onChange={handleChange} required />

// //       <input name="overviewSubTitle" placeholder="Overview Subtitle" className="border p-2"
// //         value={formData.overviewSubTitle} onChange={handleChange} required />

// //       <textarea name="overviewDescription" placeholder="Overview Description"
// //         className="border p-2 col-span-2"
// //         value={formData.overviewDescription}
// //         onChange={handleChange}
// //         required
// //       />

// //       <div>
// //         <label>Package Image</label>
// //         <input type="file" accept="image/*" className="border p-2 w-full"
// //           onChange={handleImageChange} />
// //       </div>

// //       {imagePreview && (
// //         <img src={imagePreview} alt="preview" className="w-40 h-32 object-cover rounded border" />
// //       )}

// //       <button type="submit" className="bg-blue-600 text-white py-2 rounded col-span-2 mt-3">
// //         Save Package
// //       </button>
// //     </form>
// //   );
// // };

// // export default PackageForm;

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

//   // ===================== ITINERARY =====================
//   const [itinerary, setItinerary] = useState([
//     { day: "", title: "", location: "", description: "", map: "", accommodationName: "", image: null, imagePreview: null }
//   ]);

//   const addItinerary = () => {
//     setItinerary([...itinerary, { day: "", title: "", location: "", description: "", map: "", accommodationName: "", image: null, imagePreview: null }]);
//   };

//   const removeItinerary = (index) => {
//     const list = [...itinerary];
//     list.splice(index, 1);
//     setItinerary(list);
//   };

//   const handleItineraryChange = (index, e) => {
//     const list = [...itinerary];
//     list[index][e.target.name] = e.target.value;
//     setItinerary(list);
//   };

//   const handleItineraryImage = (index, e) => {
//     const file = e.target.files[0];
//     const list = [...itinerary];
//     list[index].image = file;
//     list[index].imagePreview = URL.createObjectURL(file);
//     setItinerary(list);
//   };

//   // ===================== EXPERIENCE =====================
//   const [experience, setExperience] = useState([
//     { description: "", image: null, imagePreview: null }
//   ]);

//   const addExperience = () => setExperience([...experience, { description: "", image: null, imagePreview: null }]);

//   const removeExperience = (index) => {
//     const ex = [...experience];
//     ex.splice(index, 1);
//     setExperience(ex);
//   };

//   const handleExperienceChange = (index, e) => {
//     const ex = [...experience];
//     ex[index].description = e.target.value;
//     setExperience(ex);
//   };

//   const handleExperienceImage = (index, e) => {
//     const file = e.target.files[0];
//     const ex = [...experience];
//     ex[index].image = file;
//     ex[index].imagePreview = URL.createObjectURL(file);
//     setExperience(ex);
//   };

//   // ===================== INCLUDE =====================
//   const [include, setInclude] = useState([{ icon: "", content: "" }]);

//   const addInclude = () => setInclude([...include, { icon: "", content: "" }]);
//   const removeInclude = (index) => {
//     const list = [...include];
//     list.splice(index, 1);
//     setInclude(list);
//   };
//   const handleIncludeChange = (index, e) => {
//     const list = [...include];
//     list[index][e.target.name] = e.target.value;
//     setInclude(list);
//   };

//   // ===================== EXCLUDE =====================
//   const [exclude, setExclude] = useState([{ icon: "", content: "" }]);

//   const addExclude = () => setExclude([...exclude, { icon: "", content: "" }]);
//   const removeExclude = (index) => {
//     const list = [...exclude];
//     list.splice(index, 1);
//     setExclude(list);
//   };
//   const handleExcludeChange = (index, e) => {
//     const list = [...exclude];
//     list[index][e.target.name] = e.target.value;
//     setExclude(list);
//   };

//   // ===================== Q & A =====================
//   const [qa, setQa] = useState([
//     { question: "", answer: [] }
//   ]);

//   const addQa = () => setQa([...qa, { question: "", answer: [] }]);
//   const removeQa = (index) => {
//     const list = [...qa];
//     list.splice(index, 1);
//     setQa(list);
//   };

//   const handleQaChange = (index, e) => {
//     const list = [...qa];
//     list[index].question = e.target.value;
//     setQa(list);
//   };

//   const addQaAnswer = (qaIndex) => {
//     const list = [...qa];
//     list[qaIndex].answer.push({ type: "paragraph", content: "" });
//     setQa(list);
//   };

//   const removeQaAnswer = (qaIndex, ansIndex) => {
//     const list = [...qa];
//     list[qaIndex].answer.splice(ansIndex, 1);
//     setQa(list);
//   };

//   const handleQaAnswerChange = (qaIndex, ansIndex, e) => {
//     const list = [...qa];
//     list[qaIndex].answer[ansIndex][e.target.name] = e.target.value;
//     setQa(list);
//   };

//   // ===================== MAIN FORM HANDLERS =====================
//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedImage(file);
//     setImagePreview(URL.createObjectURL(file));
//   };

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const data = new FormData();

//   // Main form fields
//   data.append("formData", JSON.stringify(formData));

//   // JSON stringify all dynamic sections
//   data.append("itinerary", JSON.stringify(itinerary.map(({ image, imagePreview, ...rest }) => rest)));
//   data.append("experience", JSON.stringify(experience.map(({ image, imagePreview, ...rest }) => rest)));
//   data.append("include", JSON.stringify(include));
//   data.append("exclude", JSON.stringify(exclude));
//   data.append("qa", JSON.stringify(qa));

//   // Main image
//   if (selectedImage) {
//     data.append("mainImage", selectedImage);
//   }

//   // Itinerary images
//   itinerary.forEach((item) => {
//     if (item.image) {
//       data.append("itineraryImages", item.image);
//     }
//   });

//   // Experience images
//   experience.forEach((item) => {
//     if (item.image) {
//       data.append("experienceImages", item.image);
//     }
//   });

//   try {
//     await API.post("/packages", data, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//     alert("Package created successfully!");
//   } catch (err) {
//     console.log("❌ Error creating package:", err);
//     alert("Error creating package");
//   }
// };

//   return (
//     <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 pb-20">

//       <h2 className="col-span-2 text-2xl font-bold mb-4">Create Package</h2>

//       {/* BASIC FIELDS */}
//       <input className="border p-2" name="title" placeholder="Title" onChange={handleChange} />
//       <input className="border p-2" name="subtitle" placeholder="Subtitle" onChange={handleChange} />
//       <input className="border p-2" name="startLocation" placeholder="Start Location" onChange={handleChange} />
//       <input className="border p-2" name="endLocation" placeholder="End Location" onChange={handleChange} />
//       <input className="border p-2" name="duration" placeholder="Duration" onChange={handleChange} />
//       <input className="border p-2" name="price" placeholder="Price" onChange={handleChange} />
//       <input className="border p-2" name="maxpeople" placeholder="Max People" onChange={handleChange} />

//       <textarea className="border p-2 col-span-2" name="description" placeholder="Description" onChange={handleChange} />
//       <input className="border p-2" name="overviewTitle" placeholder="Overview Title" onChange={handleChange} />
//       <input className="border p-2" name="overviewSubTitle" placeholder="Overview Subtitle" onChange={handleChange} />
//       <textarea className="border p-2 col-span-2" name="overviewDescription" placeholder="Overview Description" onChange={handleChange} />

//       {/* MAIN IMAGE */}
//       <div className="col-span-2">
//         <label>Main Image</label>
//         <input type="file" accept="image/*" className="border p-2 w-full" onChange={handleImageChange} />
//         {imagePreview && <img src={imagePreview} className="w-32 mt-2 rounded border" />}
//       </div>

//       {/* ========== ITINERARY UI ========== */}
//       <section className="col-span-2 mt-6">
//         <div className="flex justify-between">
//           <h3 className="text-xl font-semibold">Itinerary</h3>
//           <button type="button" className="bg-green-600 text-white px-3 py-1 rounded" onClick={addItinerary}>+ Add Day</button>
//         </div>

//         {itinerary.map((item, index) => (
//           <div key={index} className="border p-4 rounded mt-3 bg-gray-50">
//             <div className="grid grid-cols-2 gap-3">
//               <input className="border p-2" placeholder="Day" name="day" value={item.day} onChange={(e)=>handleItineraryChange(index,e)} />
//               <input className="border p-2" placeholder="Title" name="title" value={item.title} onChange={(e)=>handleItineraryChange(index,e)} />
//               <input className="border p-2" placeholder="Location" name="location" value={item.location} onChange={(e)=>handleItineraryChange(index,e)} />
//               <input className="border p-2" placeholder="Map URL" name="map" value={item.map} onChange={(e)=>handleItineraryChange(index,e)} />
//               <input className="border p-2 col-span-2" placeholder="Accommodation" name="accommodationName" value={item.accommodationName} onChange={(e)=>handleItineraryChange(index,e)} />
//               <textarea className="border p-2 col-span-2" placeholder="Description" name="description" value={item.description} onChange={(e)=>handleItineraryChange(index,e)} />

//               <input type="file" accept="image/*" className="border p-2 col-span-2"
//                 onChange={(e)=>handleItineraryImage(index,e)}
//               />

//               {item.imagePreview && <img src={item.imagePreview} className="w-32 h-24 object-cover rounded"/>}
//             </div>

//             <button type="button" className="bg-red-600 text-white px-3 py-1 mt-2 rounded" onClick={()=>removeItinerary(index)}>Remove</button>
//           </div>
//         ))}
//       </section>

//       {/* ========== EXPERIENCE UI ========== */}
//       <section className="col-span-2 mt-6">
//         <div className="flex justify-between">
//           <h3 className="text-xl font-semibold">Experience</h3>
//           <button type="button" className="bg-green-600 text-white px-3 py-1 rounded" onClick={addExperience}>+ Add</button>
//         </div>

//         {experience.map((ex, index)=>(
//           <div key={index} className="border p-4 rounded mt-3 bg-gray-50">
//             <textarea className="border p-2 w-full" placeholder="Description" value={ex.description} onChange={(e)=>handleExperienceChange(index,e)} />

//             <input type="file" className="border p-2 mt-2" onChange={(e)=>handleExperienceImage(index,e)} />
//             {ex.imagePreview && <img src={ex.imagePreview} className="w-32 mt-2 rounded" />}

//             <button type="button" className="bg-red-600 text-white px-3 py-1 mt-2 rounded" onClick={()=>removeExperience(index)}>Remove</button>
//           </div>
//         ))}
//       </section>

//       {/* ========== INCLUDE UI ========== */}
//       <section className="col-span-2 mt-6">
//         <div className="flex justify-between">
//           <h3 className="text-xl font-semibold">Included</h3>
//           <button type="button" onClick={addInclude} className="bg-green-600 text-white px-3 py-1 rounded">+ Add</button>
//         </div>

//         {include.map((inc, index)=>(
//           <div key={index} className="grid grid-cols-2 gap-3 border p-4 mt-3 rounded">
//             <input className="border p-2" placeholder="Icon Class" name="icon" value={inc.icon} onChange={(e)=>handleIncludeChange(index,e)} />
//             <input className="border p-2" placeholder="Content" name="content" value={inc.content} onChange={(e)=>handleIncludeChange(index,e)} />

//             <button type="button" className="bg-red-600 text-white px-3 py-1 rounded col-span-2" onClick={()=>removeInclude(index)}>Remove</button>
//           </div>
//         ))}
//       </section>

//       {/* ========== EXCLUDE UI ========== */}
//       <section className="col-span-2 mt-6">
//         <div className="flex justify-between">
//           <h3 className="text-xl font-semibold">Excluded</h3>
//           <button type="button" onClick={addExclude} className="bg-green-600 text-white px-3 py-1 rounded">+ Add</button>
//         </div>

//         {exclude.map((exc, index)=>(
//           <div key={index} className="grid grid-cols-2 gap-3 border p-4 mt-3 rounded">
//             <input className="border p-2" placeholder="Icon Class" name="icon" value={exc.icon} onChange={(e)=>handleExcludeChange(index,e)} />
//             <input className="border p-2" placeholder="Content" name="content" value={exc.content} onChange={(e)=>handleExcludeChange(index,e)} />

//             <button type="button" className="bg-red-600 text-white px-3 py-1 rounded col-span-2" onClick={()=>removeExclude(index)}>Remove</button>
//           </div>
//         ))}
//       </section>

//       {/* ========== Q&A UI ========== */}
//       <section className="col-span-2 mt-6">
//         <div className="flex justify-between">
//           <h3 className="text-xl font-semibold">FAQ / Q&A</h3>
//           <button type="button" onClick={addQa} className="bg-green-600 text-white px-3 py-1 rounded">+ Add</button>
//         </div>

//         {qa.map((item, i)=>(
//           <div key={i} className="border p-4 mt-4 bg-gray-50 rounded">
//             <input className="border p-2 w-full mb-2" placeholder="Question" value={item.question} onChange={(e)=>handleQaChange(i,e)} />

//             <button type="button" className="bg-blue-600 text-white px-3 py-1 mb-3 rounded" onClick={()=>addQaAnswer(i)}>+ Add Answer</button>

//             {item.answer.map((ans, j)=>(
//               <div key={j} className="grid grid-cols-2 gap-3 border p-3 mb-3 rounded">
//                 <select name="type" className="border p-2" value={ans.type} onChange={(e)=>handleQaAnswerChange(i,j,e)}>
//                   <option value="header">Header</option>
//                   <option value="paragraph">Paragraph</option>
//                   <option value="list">List</option>
//                 </select>

//                 <input name="content" className="border p-2" placeholder="Answer content"
//                   value={ans.content}
//                   onChange={(e)=>handleQaAnswerChange(i,j,e)}
//                 />

//                 <button type="button" className="bg-red-600 text-white px-3 py-1 rounded" onClick={()=>removeQaAnswer(i,j)}>Remove Answer</button>
//               </div>
//             ))}

//             <button type="button" className="bg-red-600 text-white px-3 py-1 rounded" onClick={()=>removeQa(i)}>Remove Question</button>
//           </div>
//         ))}
//       </section>

//       {/* SUBMIT BUTTON */}
//       <button className="col-span-2 bg-blue-600 text-white py-2 rounded mt-4" type="submit">
//         Save Package
//       </button>

//     </form>
//   );
// };

// export default PackageForm;

import React, { useState } from "react";
import API from "../../api/axios.js";
import { useEffect } from "react";

const PackageForm = ({ editData }) => {
  /* ================= BASIC FIELDS ================= */
  const [formData, setFormData] = useState({
    destination:"",
    title: "",
    subtitle: "",
    startLocation: "",
    endLocation: "",
    duration: "",
    price: "",
    maxpeople: "",
    description: "",
    typeStyle: "",
    accomoType: "",
    transport: "",
    accomoDay: "",
    accomoNight: "",
    add: "",
  });

  const [mainImage, setMainImage] = useState(null);
  const [mainPreview, setMainPreview] = useState(null);

  /* ================= ITINERARY ================= */
  const [itinerary, setItinerary] = useState([
    {
      heading: "",
      map: "",
      image: null,
      imagePreview: null,
      section: [
        {
          day: "",
          title: "",
          startpoint: "",
          endpoint: "",
          accommodationName: "",
          description: [],
          image: null,
          imagePreview: null,
        },
      ],
    },
  ]);

  /* ================= EXPERIENCE ================= */
  const [experience, setExperience] = useState([
    {
      heading: "",
      subheading: "",
      section: [
        { title: "", description: "", image: null, imagePreview: null },
      ],
    },
  ]);

  /* ================= INCLUDE / EXCLUDE ================= */
  const [include, setInclude] = useState([
    { content: "", image: null, imagePreview: null },
  ]);

  const [exclude, setExclude] = useState([
    { content: "", image: null, imagePreview: null },
  ]);

  /* ================= HANDLERS ================= */
  // const handleChange = (e) =>
  //   setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMainImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setMainImage(file);
    setMainPreview(URL.createObjectURL(file));
  };

  /* ================= Itinary HANDLERS ================= */

  const addItinerary = () => {
    setItinerary([
      ...itinerary,
      {
        heading: "",
        map: "",
        image: null,
        imagePreview: null,
        section: [
          {
            day: "",
            title: "",
            startpoint: "",
            endpoint: "",
            accommodationName: "",
            description: [],
            image: null,
            imagePreview: null,
          },
        ],
      },
    ]);
  };

  const removeItinerary = (i) => {
    const updated = [...itinerary];
    updated.splice(i, 1);
    setItinerary(updated);
  };

  const handleItineraryChange = (i, e) => {
    const updated = [...itinerary];
    updated[i][e.target.name] = e.target.value;
    setItinerary(updated);
  };

  const handleItineraryImage = (i, e) => {
    const file = e.target.files[0];
    const updated = [...itinerary];
    updated[i].image = file;
    updated[i].imagePreview = URL.createObjectURL(file);
    setItinerary(updated);
  };

  const addDay = (i) => {
    const updated = [...itinerary];
    updated[i].section.push({
      day: "",
      title: "",
      startpoint: "",
      endpoint: "",
      accommodationName: "",
      description: [],
      image: null,
      imagePreview: null,
    });
    setItinerary(updated);
  };

  const removeDay = (i, j) => {
    const updated = [...itinerary];
    updated[i].section.splice(j, 1);
    setItinerary(updated);
  };

  const handleDayChange = (i, j, e) => {
    const updated = [...itinerary];
    updated[i].section[j][e.target.name] = e.target.value;
    setItinerary(updated);
  };

  const handleDayImage = (i, j, e) => {
    const file = e.target.files[0];
    const updated = [...itinerary];
    updated[i].section[j].image = file;
    updated[i].section[j].imagePreview = URL.createObjectURL(file);
    setItinerary(updated);
  };

  const addDescriptionBlock = (i, j) => {
    const updated = [...itinerary];
    updated[i].section[j].description.push({
      type: "paragraph",
      content: "",
    });
    setItinerary(updated);
  };

  const handleDescriptionChange = (i, j, k, e) => {
    const updated = [...itinerary];
    updated[i].section[j].description[k][e.target.name] = e.target.value;
    setItinerary(updated);
  };

  const removeDescriptionBlock = (i, j, k) => {
    const updated = [...itinerary];
    updated[i].section[j].description.splice(k, 1);
    setItinerary(updated);
  };

  /* ================= experience ================= */

  const addExperience = () => {
    setExperience([
      ...experience,
      {
        heading: "",
        subheading: "",
        section: [
          { title: "", description: "", image: null, imagePreview: null },
        ],
      },
    ]);
  };

  const removeExperience = (i) => {
    const updated = [...experience];
    updated.splice(i, 1);
    setExperience(updated);
  };

  const handleExperienceChange = (i, e) => {
    const updated = [...experience];
    updated[i][e.target.name] = e.target.value;
    setExperience(updated);
  };

  const addExperienceSection = (i) => {
    const updated = [...experience];
    updated[i].section.push({
      title: "",
      description: "",
      image: null,
      imagePreview: null,
    });
    setExperience(updated);
  };

  const removeExperienceSection = (i, j) => {
    const updated = [...experience];
    updated[i].section.splice(j, 1);
    setExperience(updated);
  };

  const handleExperienceSectionChange = (i, j, e) => {
    const updated = [...experience];
    updated[i].section[j][e.target.name] = e.target.value;
    setExperience(updated);
  };

  const handleExperienceImage = (i, j, e) => {
    const file = e.target.files[0];
    const updated = [...experience];
    updated[i].section[j].image = file;
    updated[i].section[j].imagePreview = URL.createObjectURL(file);
    setExperience(updated);
  };

  /* ================= Include ================= */

  const addInclude = () => {
    setInclude([...include, { content: "", image: null, imagePreview: null }]);
  };

  const removeInclude = (i) => {
    const updated = [...include];
    updated.splice(i, 1);
    setInclude(updated);
  };

  const handleIncludeChange = (i, e) => {
    const updated = [...include];
    updated[i].content = e.target.value;
    setInclude(updated);
  };

  const handleIncludeImage = (i, e) => {
    const file = e.target.files[0];
    const updated = [...include];
    updated[i].image = file;
    updated[i].imagePreview = URL.createObjectURL(file);
    setInclude(updated);
  };

  /* ================= Exlude ================= */

  const addExclude = () => {
    setExclude([...exclude, { content: "", image: null, imagePreview: null }]);
  };

  const removeExclude = (i) => {
    const updated = [...exclude];
    updated.splice(i, 1);
    setExclude(updated);
  };

  const handleExcludeChange = (i, e) => {
    const updated = [...exclude];
    updated[i].content = e.target.value;
    setExclude(updated);
  };

  const handleExcludeImage = (i, e) => {
    const file = e.target.files[0];
    const updated = [...exclude];
    updated[i].image = file;
    updated[i].imagePreview = URL.createObjectURL(file);
    setExclude(updated);
  };

  // useEffect(() => {
  //   if (!editData) return;

  //   setFormData({
  //     title: editData.title || "",
  //     subtitle: editData.subtitle || "",
  //     startLocation: editData.startLocation || "",
  //     endLocation: editData.endLocation || "",
  //     duration: editData.duration || "",
  //     price: editData.price || "",
  //     maxpeople: editData.maxpeople || "",
  //     description: editData.description || "",
  //     typeStyle: editData.typeStyle || "",
  //     accomoType: editData.accomoType || "",
  //     transport: editData.transport || "",
  //     accomoDay: editData.accomoDay || "",
  //     accomoNight: editData.accomoNight || "",
  //     add: editData.add || "",
  //   });

  //   if (editData.image) {
  //     setMainPreview(editData.image);
  //   }
  // }, [editData]);


  useEffect(() => {
  if (!editData) return;

  setFormData({
    destination: editData.destination || "",
    title: editData.title || "",
    subtitle: editData.subtitle || "",
    startLocation: editData.startLocation || "",
    endLocation: editData.endLocation || "",
    duration: editData.duration || "",
    price: editData.price || "",
    maxpeople: editData.maxpeople || "",
    description: editData.description || "",
    typeStyle: editData.typeStyle || "",
    accomoType: editData.accomoType || "",
    transport: editData.transport || "",
    accomoDay: editData.accomoDay || "",
    accomoNight: editData.accomoNight || "",
    add: editData.add || "",
  });

  /* Main image */
  if (editData.image) {
    setMainPreview(editData.image);
    setMainImage(null);
  }

  /* Itinerary */
  if (editData.itinerary?.length) {
    setItinerary(
      editData.itinerary.map((it) => ({
        ...it,
        image: null,
        imagePreview: it.image || null,
        section: it.section.map((s) => ({
          ...s,
          image: null,
          imagePreview: s.image || null,
        })),
      }))
    );
  }

  /* Experience */
  if (editData.experience?.length) {
    setExperience(
      editData.experience.map((ex) => ({
        ...ex,
        section: ex.section.map((s) => ({
          ...s,
          image: null,
          imagePreview: s.image || null,
        })),
      }))
    );
  }

  /* Include */
  if (editData.include?.length) {
    setInclude(
      editData.include.map((i) => ({
        ...i,
        image: null,
        imagePreview: i.image || null,
      }))
    );
  }

  /* Exclude */
  if (editData.exclude?.length) {
    setExclude(
      editData.exclude.map((i) => ({
        ...i,
        image: null,
        imagePreview: i.image || null,
      }))
    );
  }
}, [editData]);


  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    /* ================= BASIC FORM DATA ================= */
    data.append("formData", JSON.stringify(formData));

    if (mainImage) {
      data.append("mainImage", mainImage);
    }

    /* ================= ITINERARY ================= */
    data.append(
      "itinerary",
      JSON.stringify(
        itinerary.map(({ image, imagePreview, ...rest }) => ({
          ...rest,
          section: rest.section.map(({ image, imagePreview, ...sec }) => sec),
        }))
      )
    );

    itinerary.forEach((item) => {
  if (item.image) {
    data.append("itineraryImages", item.image);
  }
});


    itinerary.forEach((item) =>
      item.section.forEach((sec) => {
        if (sec.image) {
          data.append("itineraryImages", sec.image);
        }
      })
    );

    /* ================= EXPERIENCE ================= */
    data.append(
      "experience",
      JSON.stringify(
        experience.map(({ image, imagePreview, ...rest }) => ({
          ...rest,
          section: rest.section.map(({ image, imagePreview, ...sec }) => sec),
        }))
      )
    );

    experience.forEach((exp) =>
      exp.section.forEach((sec) => {
        if (sec.image) {
          data.append("experienceImages", sec.image);
        }
      })
    );

    /* ================= INCLUDE ================= */
    data.append(
      "include",
      JSON.stringify(include.map(({ image, ...rest }) => rest))
    );

    include.forEach((item) => {
      if (item.image) {
        data.append("includeImages", item.image);
      }
    });

    /* ================= EXCLUDE ================= */
    data.append(
      "exclude",
      JSON.stringify(exclude.map(({ image, ...rest }) => rest))
    );

    exclude.forEach((item) => {
      if (item.image) {
        data.append("excludeImages", item.image);
      }
    });

    /* ================= API CALL ================= */
    try {
      if (editData?._id) {
        await API.put(`/packages/${editData._id}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await API.post("/packages", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      alert(editData ? "✅ Package updated successfully" : "✅ Package created successfully");

    } catch (err) {
      console.error("❌ Package create error:", err);
      alert("❌ Error creating package");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 pb-20">
      <h2 className="col-span-2 text-2xl font-bold">Create Package</h2>

      {/* main section */}

      <section className="col-span-2 grid grid-cols-2 gap-4 mt-4">
        <input
          className="border p-2"
          name="destination"
          placeholder="Destination"
          value={formData.destination}
          onChange={handleChange}
        />
        <input
          className="border p-2"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />

        <input
          className="border p-2"
          name="subtitle"
          placeholder="Subtitle"
          value={formData.subtitle}
          onChange={handleChange}
        />

        <input
          className="border p-2"
          name="startLocation"
          placeholder="Start Location"
          value={formData.startLocation}
          onChange={handleChange}
        />

        <input
          className="border p-2"
          name="endLocation"
          placeholder="End Location"
          value={formData.endLocation}
          onChange={handleChange}
        />

        <input
          className="border p-2"
          name="duration"
          placeholder="Duration (e.g. 7 Days)"
          value={formData.duration}
          onChange={handleChange}
        />

        <input
          className="border p-2"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />

        <input
          className="border p-2"
          name="maxpeople"
          placeholder="Max People"
          value={formData.maxpeople}
          onChange={handleChange}
        />

        <input
          className="border p-2"
          name="typeStyle"
          placeholder="Travel Style (Luxury / Budget)"
          value={formData.typeStyle}
          onChange={handleChange}
        />

        <input
          className="border p-2"
          name="accomoType"
          placeholder="Accommodation Type"
          value={formData.accomoType}
          onChange={handleChange}
        />

        <input
          className="border p-2"
          name="transport"
          placeholder="Transport"
          value={formData.transport}
          onChange={handleChange}
        />

        <input
          className="border p-2"
          name="accomoDay"
          placeholder="Accommodation Days"
          value={formData.accomoDay}
          onChange={handleChange}
        />

        <input
          className="border p-2"
          name="accomoNight"
          placeholder="Accommodation Nights"
          value={formData.accomoNight}
          onChange={handleChange}
        />

        <textarea
          className="border p-2 col-span-2"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <textarea
          className="border p-2 col-span-2"
          name="add"
          placeholder="Additional Info"
          value={formData.add}
          onChange={handleChange}
        />
      </section>

      <section className="col-span-2 mt-6">
        <label className="font-semibold block mb-2">Main Image</label>

        <input
          type="file"
          accept="image/*"
          onChange={handleMainImage}
          className="border p-2 w-full"
        />

        {mainPreview && (
          <img
            src={mainPreview}
            className="w-40 mt-3 rounded shadow"
            alt="Main Preview"
          />
        )}
      </section>

      {/* Experience section //  */}

      <section className="col-span-2 mt-8">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Experience / Moments</h3>
          <button
            type="button"
            onClick={addExperience}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            + Add Experience
          </button>
        </div>

        {experience.map((exp, i) => (
          <div key={i} className="border p-4 bg-gray-50 rounded mt-4">
            {/* EXPERIENCE HEADER */}
            <input
              className="border p-2 w-full mb-2"
              name="heading"
              placeholder="Heading"
              value={exp.heading}
              onChange={(e) => handleExperienceChange(i, e)}
            />

            <input
              className="border p-2 w-full mb-3"
              name="subheading"
              placeholder="Subheading"
              value={exp.subheading}
              onChange={(e) => handleExperienceChange(i, e)}
            />

            {/* EXPERIENCE SECTIONS */}
            <button
              type="button"
              onClick={() => addExperienceSection(i)}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              + Add Section
            </button>

            {exp.section.map((sec, j) => (
              <div key={j} className="border p-3 bg-white rounded mt-3">
                <input
                  className="border p-2 w-full mb-2"
                  name="title"
                  placeholder="Title"
                  value={sec.title}
                  onChange={(e) => handleExperienceSectionChange(i, j, e)}
                />

                <textarea
                  className="border p-2 w-full mb-2"
                  name="description"
                  placeholder="Description"
                  value={sec.description}
                  onChange={(e) => handleExperienceSectionChange(i, j, e)}
                />

                <input
                  type="file"
                  onChange={(e) => handleExperienceImage(i, j, e)}
                />

                {sec.imagePreview && (
                  <img
                    src={sec.imagePreview}
                    className="w-32 mt-2 rounded"
                    alt="Preview"
                  />
                )}

                <button
                  type="button"
                  onClick={() => removeExperienceSection(i, j)}
                  className="bg-red-600 text-white px-3 py-1 rounded mt-3"
                >
                  Remove Section
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={() => removeExperience(i)}
              className="bg-red-800 text-white px-3 py-1 rounded mt-4"
            >
              Remove Experience
            </button>
          </div>
        ))}
      </section>

      {/* Itinary section  */}

      <section className="col-span-2 mt-8">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Itinerary</h3>
          <button
            type="button"
            onClick={addItinerary}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            + Add Itinerary
          </button>
        </div>

        {itinerary.map((it, i) => (
          <div key={i} className="border p-4 bg-gray-50 rounded mt-4">
            {/* ITINERARY HEADER */}
            <input
              className="border p-2 w-full mb-2"
              name="heading"
              placeholder="Itinerary Heading"
              value={it.heading}
              onChange={(e) => handleItineraryChange(i, e)}
            />

            <input
              className="border p-2 w-full mb-2"
              name="map"
              placeholder="Map URL"
              value={it.map}
              onChange={(e) => handleItineraryChange(i, e)}
            />

            <input type="file" onChange={(e) => handleItineraryImage(i, e)} />
            {it.imagePreview && (
              <img src={it.imagePreview} className="w-32 mt-2 rounded" />
            )}

            {/* DAY SECTIONS */}
            <div className="mt-4">
              <button
                type="button"
                onClick={() => addDay(i)}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                + Add Day
              </button>

              {it.section.map((day, j) => (
                <div key={j} className="border p-3 bg-white rounded mt-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      name="day"
                      placeholder="Day"
                      className="border p-2"
                      value={day.day}
                      onChange={(e) => handleDayChange(i, j, e)}
                    />

                    <input
                      name="title"
                      placeholder="Title"
                      className="border p-2"
                      value={day.title}
                      onChange={(e) => handleDayChange(i, j, e)}
                    />

                    <input
                      name="startpoint"
                      placeholder="Start Point"
                      className="border p-2"
                      value={day.startpoint}
                      onChange={(e) => handleDayChange(i, j, e)}
                    />

                    <input
                      name="endpoint"
                      placeholder="End Point"
                      className="border p-2"
                      value={day.endpoint}
                      onChange={(e) => handleDayChange(i, j, e)}
                    />

                    <input
                      className="border p-2 col-span-2"
                      name="accommodationName"
                      placeholder="Accommodation"
                      value={day.accommodationName}
                      onChange={(e) => handleDayChange(i, j, e)}
                    />
                  </div>

                  {/* DESCRIPTION BLOCKS */}
                  <div className="mt-3">
                    <button
                      type="button"
                      onClick={() => addDescriptionBlock(i, j)}
                      className="bg-indigo-600 text-white px-3 py-1 rounded"
                    >
                      + Add Description
                    </button>

                    {day.description.map((d, k) => (
                      <div key={k} className="border p-2 mt-2 rounded">
                        <select
                          name="type"
                          className="border p-2 w-full mb-2"
                          value={d.type}
                          onChange={(e) => handleDescriptionChange(i, j, k, e)}
                        >
                          <option value="header">Header</option>
                          <option value="paragraph">Paragraph</option>
                          <option value="list">List</option>
                        </select>

                        <textarea
                          name="content"
                          className="border p-2 w-full"
                          placeholder="Content"
                          value={d.content}
                          onChange={(e) => handleDescriptionChange(i, j, k, e)}
                        />

                        <button
                          type="button"
                          onClick={() => removeDescriptionBlock(i, j, k)}
                          className="bg-red-600 text-white px-3 py-1 rounded mt-2"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* DAY IMAGE */}
                  <input
                    type="file"
                    className="mt-3"
                    onChange={(e) => handleDayImage(i, j, e)}
                  />
                  {day.imagePreview && (
                    <img src={day.imagePreview} className="w-32 mt-2 rounded" />
                  )}

                  <button
                    type="button"
                    onClick={() => removeDay(i, j)}
                    className="bg-red-700 text-white px-3 py-1 rounded mt-3"
                  >
                    Remove Day
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => removeItinerary(i)}
              className="bg-red-800 text-white px-3 py-1 rounded mt-4"
            >
              Remove Itinerary
            </button>
          </div>
        ))}
      </section>

      {/* Include section  */}

      <section className="col-span-2 mt-8">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Included</h3>
          <button
            type="button"
            onClick={addInclude}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            + Add
          </button>
        </div>

        {include.map((item, i) => (
          <div key={i} className="border p-4 bg-gray-50 rounded mt-3">
            <textarea
              className="border p-2 w-full mb-2"
              placeholder="Included item"
              value={item.content}
              onChange={(e) => handleIncludeChange(i, e)}
            />

            <input type="file" onChange={(e) => handleIncludeImage(i, e)} />

            {item.imagePreview && (
              <img
                src={item.imagePreview}
                className="w-24 mt-2 rounded"
                alt="Preview"
              />
            )}

            <button
              type="button"
              onClick={() => removeInclude(i)}
              className="bg-red-600 text-white px-3 py-1 rounded mt-3"
            >
              Remove
            </button>
          </div>
        ))}
      </section>

      {/* Exlude section  */}

      <section className="col-span-2 mt-8">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Excluded</h3>
          <button
            type="button"
            onClick={addExclude}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            + Add
          </button>
        </div>

        {exclude.map((item, i) => (
          <div key={i} className="border p-4 bg-gray-50 rounded mt-3">
            <textarea
              className="border p-2 w-full mb-2"
              placeholder="Excluded item"
              value={item.content}
              onChange={(e) => handleExcludeChange(i, e)}
            />

            <input type="file" onChange={(e) => handleExcludeImage(i, e)} />

            {item.imagePreview && (
              <img
                src={item.imagePreview}
                className="w-24 mt-2 rounded"
                alt="Preview"
              />
            )}

            <button
              type="button"
              onClick={() => removeExclude(i)}
              className="bg-red-600 text-white px-3 py-1 rounded mt-3"
            >
              Remove
            </button>
          </div>
        ))}
      </section>

      {/* SUBMIT */}
      <button className="col-span-2 bg-blue-600 text-white py-2 rounded mt-4">
        Save Package
      </button>
    </form>
  );
};

export default PackageForm;
