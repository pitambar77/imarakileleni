

// import React, { useState } from "react";
// import { FiChevronDown, FiSearch, FiMessageCircle } from "react-icons/fi";
// import imaralogo from "../assets/imaralogo.png";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [openMenu, setOpenMenu] = useState(null);

//   const menuItems = [
//     {
//       title: "DESTINATIONS",
//       links: [
//         { label: "Tanzania", path: "/tanzania" },
//         { label: "Kenya", path: "/kenya" },
//         { label: "Zanzibar", path: "/zanzibar" },
//         { label: "Rwanda", path: "/rwanda" },
//       ],
//     },
//     {
//       title: "DEALS",
//       links: ["Last Minute Offers", "Summer Deals", "Group Discounts"],
//     },
//     {
//       title: "TRAVEL STYLES",
//       links: [
//         "Luxury Safari",
//         "Budget Safari",
//         "Honeymoon Safari",
//         "Family Trips",
//       ],
//     },
//     {
//       title: "ABOUT IMARA",
//       links: [
//         { label: "About us", path: "/about-us" },
//         { label: "team", path: "/team" },
//         { label: "Safari fleet", path: "/safari-fleet" },
//         { label: "Rwanda", path: "/rwanda" },
//       ],
//     },
//     {
//       title: "GET INSPIRED",
//       links: ["Travel Blog", "Photo Gallery", "Success Stories"],
//     },
//   ];

//   return (
//     <header className="w-full bg-white shadow-sm sticky top-0 z-50">
//       {/* Top Bar */}
//       <div className="flex justify-end items-center text-[12px] text-gray-600 py-2 pt-4 px-8 space-x-4 border-b-[0.5px] border-gray-100">
//         <a href="#" className="hover:underline">
//           Contact us
//         </a>
//         <a href="#" className="hover:underline">
//           Subscribe to emails
//         </a>
//         <a href="#" className="hover:underline">
//           Tanzania Travel Guide
//         </a>
//         <a href="#" className="hover:underline">
//           Kilimanjaro Travel guide
//         </a>
//       </div>

//       {/* Main Navbar */}
//       <nav className="flex items-center justify-between px-8 py-4">
//         <div className="flex items-center space-x-8">
//           <img
//             src={imaralogo}
//             alt="Imara Kileleni Safaris"
//             className="h-12 w-auto"
//           />

//           {/* Nav Menu with Dropdown */}
//           <ul className="hidden md:flex space-x-4 font-semibold text-sm text-gray-800 relative">
//             {menuItems.map((item, index) => (
//               <li
//                 key={index}
//                 className="relative cursor-pointer hover:text-orange-600"
//                 onMouseEnter={() => setOpenMenu(index)}
//                 onMouseLeave={() => setOpenMenu(null)}
//               >
//                 <div className="flex items-center">
//                   {item.title}
//                   <FiChevronDown className="ml-1" />
//                 </div>

//                 {/* Dropdown Menu */}
//                 {/* {openMenu === index && (
//                   <ul className="absolute top-5 left-0 bg-white shadow-lg rounded-md py-2 w-48 text-gray-700">
//                     {item.links.map((link, idx) => (
//                       <li
//                         key={idx}
//                         className="px-4 py-2 hover:bg-orange-50 hover:text-orange-600 text-[13px]"
//                       >
//                         <a href="#">{link}</a>
//                       </li>
//                     ))}
//                   </ul>
//                 )} */}
//                 {/* Dropdown Menu */}
//                 {openMenu === index && (
//                   <ul className="absolute top-5 left-0 bg-white shadow-lg rounded-md py-2 w-48 text-gray-700">
//                     {item.links.map((link, idx) => (
//                       <li
//                         key={idx}
//                         className="px-4 py-2 hover:bg-orange-50 hover:text-orange-600 text-[13px]"
//                       >
//                         <Link to={link.path}>{link.label}</Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Right Side */}
//         <div className="flex items-center space-x-4">
//           <div className="flex items-center border rounded-full overflow-hidden px-1 py-1 w-[300px]">
//             <input
//               type="text"
//               placeholder="18-35? Find and book your adventure"
//               className="flex-1 text-[12px] outline-none placeholder-black px-3"
//             />
//             <button className=" bg-[#d87028] text-white font-semibold rounded-full p-2">
//               <FiSearch size={24} />
//             </button>
//           </div>

//           <button className="border rounded-full p-2">
//             <FiMessageCircle size={18} />
//           </button>

//           <button className="bg-[#d87028] text-white px-[21px] py-3 border border-gray-200 rounded-full font-semibold hover:bg-orange-700">
//             VIEW TRIPS
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

// Responsive ------------------------------------------------------

// import React, { useState } from "react";
// import { FiChevronDown, FiSearch, FiMessageCircle, FiMenu, FiX } from "react-icons/fi";
// import imaralogo from "../assets/imaralogo.png";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [openMenu, setOpenMenu] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const menuItems = [
//     {
//       title: "DESTINATIONS",
//       path:"/destination-landing"
//     },
//     {
//       title: "DEALS",
//       links: ["Last Minute Offers", "Summer Deals", "Group Discounts"],
//     },
//     {
//       title: "TRAVEL STYLES",
//       links: [
//         "Luxury Safari",
//         "Budget Safari",
//         "Honeymoon Safari",
//         "Family Trips",
//       ],
//     },
//     {
//       title: "ABOUT IMARA",
//       links: [
//         { label: "About us", path: "/about-us" },
//         { label: "team", path: "/team" },
//         { label: "Safari fleet", path: "/safari-fleet" },
//         { label: "Rwanda", path: "/rwanda" },
//       ],
//     },
    
//   ];

//   return (
//     <header className="w-full bg-white shadow-sm sticky top-0 z-50">
//       {/* Top Bar */}
//       <div className="hidden md:flex justify-end items-center text-[12px] text-gray-600 py-2 pt-4 px-8 space-x-4 border-b-[0.5px] border-gray-100">
//         <a href="#" className="hover:underline">Contact us</a>
//         <a href="#" className="hover:underline">Subscribe to emails</a>
//         <a href="#" className="hover:underline">Tanzania Travel Guide</a>
//         <a href="#" className="hover:underline">Kilimanjaro Travel guide</a>
//       </div>

//       {/* Main Navbar */}
//       <nav className="flex items-center justify-between px-4 md:px-8 py-4">
//         {/* Logo */}
//         <div className="flex items-center space-x-4">
//           <img src={imaralogo} alt="Imara Kileleni Safaris" className="h-12 w-auto" />
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-4 font-semibold text-sm text-gray-800 relative">
//           {menuItems.map((item, index) => (
//             <li
//               key={index}
//               className="relative cursor-pointer hover:text-orange-600"
//               onMouseEnter={() => setOpenMenu(index)}
//               onMouseLeave={() => setOpenMenu(null)}
//             >
//               <div className="flex items-center">
//                 {item.title}
//                 <FiChevronDown className="ml-1" />
//               </div>

//               {openMenu === index && (
//                 <ul className="absolute top-5 left-0 bg-white shadow-lg rounded-md py-2 w-48 text-gray-700">
//                   {item.links.map((link, idx) => (
//                     <li key={idx} className="px-4 py-2 hover:bg-orange-50 hover:text-orange-600 text-[13px]">
//                       <Link to={link.path}>{link.label}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Desktop Right Section */}
//         <div className="hidden md:flex items-center space-x-4">
//           <div className="flex items-center border rounded-full overflow-hidden px-1 py-1 w-[300px]">
//             <input
//               type="text"
//               placeholder="18-35? Find and book your adventure"
//               className="flex-1 text-[12px] outline-none placeholder-black px-3"
//             />
//             <button className=" bg-[#d87028] text-white font-semibold rounded-full p-2">
//               <FiSearch size={24} />
//             </button>
//           </div>

//           <button className="border rounded-full p-2">
//             <FiMessageCircle size={18} />
//           </button>

//           <button className="bg-[#d87028] text-white px-[21px] py-3 border rounded-full font-semibold hover:bg-orange-700">
//             VIEW TRIPS
//           </button>
//         </div>

//         {/* Mobile Hamburger */}
//         <button className="md:hidden text-2xl" onClick={() => setMobileOpen(!mobileOpen)}>
//           {mobileOpen ? <FiX /> : <FiMenu />}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="md:hidden bg-white w-full px-4 py-4 shadow-lg">
//           {menuItems.map((item, index) => (
//             <div key={index}>
//               <button
//                 onClick={() => setOpenMenu(openMenu === index ? null : index)}
//                 className="w-full flex justify-between py-2 font-semibold text-gray-800"
//               >
//                 {item.title} <FiChevronDown />
//               </button>

//               {openMenu === index && (
//                 <ul className="pl-4 text-gray-600 pb-2 space-y-2">
//                   {item.links.map((link, idx) => (
//                     <li key={idx} className="hover:text-orange-600">
//                       <Link to={link.path} onClick={() => setMobileOpen(false)}>
//                         {link.label}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}

//           <button className="w-full bg-[#d87028] text-white py-3 rounded-full mt-4 font-semibold">
//             VIEW TRIPS
//           </button>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { FiChevronDown, FiMessageCircle, FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import imaralogo from "../assets/imaralogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    {
      title: "DESTINATIONS",
      path: "/tanzania-destinations",
    },
    {
      title: "Safari",
      path: "/tanzania-safaris",
    },
    {
      title: "kilimanjaro",
      path: "/mount-kilimanjaro",
    },
    {
      title: "Zanzibar",
      path: "/zanzibar-beach",
    },
    {
      title: "TRAVEL STYLES",
      links: [
        { label:"Tanzania Family Safari", path:"/travelgroup/tanzania-family-safari" },
        { label:"Tanzania Luxury Safari", path:"/travelgroup/tanzania-luxury-safari" },
        { label:"Tanzania Private Safari", path:"/travelgroup/tanzania-private-safari" },
        { label:"Tanzania Wildlife Safari", path:"/travelgroup/tanzania-wildlife-safari" },
        { label:"Tanzania Midrange Safari", path:"/travelgroup/tanzania-midrange-safari" },
        { label:"Tanzania Honeymoon Safari", path:"/travelgroup/tanzania-honeymoon-safari" }
      ],
    },
    {
      title: "ABOUT IMARA",
      links: [
        { label: "About us", path: "/about-us" },
        { label: "Team", path: "/team" },
        { label: "Safari Fleet", path: "/safari-fleet" },
        { label: "Sustanbility", path: "/sustanbility" },
      ],
    },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50 ">
      {/* Top Bar */}
      <div className="hidden md:flex justify-end items-center text-[12px] text-gray-600 py-2 pt-4 px-8 space-x-4 border-b-[0.5px] border-gray-100">
        <a href="#" className="hover:underline">Contact us</a>
        <Link className="hover:underline" to={"/tanzania-travel-guide"}>Tanzania Travel Guide</Link>
        <Link className="hover:underline" to={"/kilimanjaro-travel-guide"}>Kilimanjaro Guide</Link>
        
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-4">
          <img src={imaralogo} alt="Imara Kileleni Safaris" className="h-12 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-semibold text-sm text-gray-800 relative">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`relative cursor-pointer hover:text-orange-600 ${
                item.links ? "group" : ""
              }`}
              onMouseEnter={() => item.links && setOpenMenu(index)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <div className="flex items-center uppercase">
                {item.path ? <Link to={item.path} className=" uppercase">{item.title}</Link> : item.title}
                {item.links && <FiChevronDown className="ml-1" />}
              </div>

              {/* Desktop Dropdown */}
              {item.links && openMenu === index && (
                <ul className="absolute top-5 left-0 bg-white shadow-lg rounded-md py-2 w-56 text-gray-700 animate-fade-in">
                  {item.links.map((link, idx) => (
                    <li
                      key={idx}
                      className="px-4 py-2 hover:bg-orange-50 hover:text-orange-600 text-[13px]"
                    >
                      {typeof link === "string" ? link : <Link to={link.path} className=" uppercase">{link.label}</Link>}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center space-x-4">
          {/* <div className="flex items-center border rounded-full overflow-hidden px-1 py-1 w-[300px]">
            <input
              type="text"
              placeholder="18-35? Find and book your adventure"
              className="flex-1 text-[12px] outline-none placeholder-black px-3"
            />
            <button className="bg-[#d87028] text-white font-semibold rounded-full p-2">
              <FiSearch size={20} />
            </button>
          </div> */}

          <button className="border rounded-full p-2">
            <FaWhatsapp size={22} />
          </button>

          <button className="bg-[#d87028] text-white px-[21px] py-3 rounded-full font-semibold hover:bg-orange-700">
            VIEW TRIPS
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-2xl" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white w-full px-4 py-4 shadow-lg animate-slide-down">
          {menuItems.map((item, index) => (
            <div key={index} className="border-b py-2">
              <button
                onClick={() =>
                  item.links ? setOpenMenu(openMenu === index ? null : index) : setMobileOpen(false)
                }
                className="w-full flex justify-between font-semibold text-gray-800"
              >
                {item.path ? <Link to={item.path}>{item.title}</Link> : item.title}
                {item.links && <FiChevronDown />}
              </button>

              {item.links && openMenu === index && (
                <ul className="pl-4 text-gray-600 pb-2 space-y-2 mt-2">
                  {item.links.map((link, idx) => (
                    <li key={idx} className="hover:text-orange-600">
                      {typeof link === "string" ? (
                        link
                      ) : (
                        <Link to={link.path} onClick={() => setMobileOpen(false)}>
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <button className="w-full bg-[#d87028] text-white py-3 rounded-full mt-4 font-semibold">
            VIEW TRIPS
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
