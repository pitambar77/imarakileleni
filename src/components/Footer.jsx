import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
} from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { FaFlagUsa } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  const [open, setOpen] = useState({
    help: false,
    plan1: false,
    plan2: false,
  });

  const toggle = (section) => {
    setOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <footer className="w-full">
      <div className=" py-3 bg-[#fff8f2]" />
      {/* Top section */}
      <div className="bg-white pt-8 md:pt-16  px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2">
          {/* <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           
            <div>
              <h3 className="font-bold text-lg mb-4">Help & Info</h3>
              <ul className="space-y-2 text-gray-700 ">
                <li>Who We Are</li>
                <li>WE MAKE TRAVEL MATTER®</li>
                <li>Become an Affiliate</li>
                <li>Frequently Asked Questions</li>
                <li>Travel Updates</li>
                <li>Contact Us</li>
              </ul>
            </div>

            
            <div>
              <h3 className="font-bold text-lg mb-4">Travel Planning</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Get Your Free Brochure</li>
                <li>Travel Insurance</li>
                <li>Booking Conditions</li>
                <li>Trip Deposit Level</li>
                <li>Recommendations</li>
              </ul>
            </div>

            
            <div>
              <h3 className="font-bold text-lg mb-4">Travel Planning</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Get Your Free Brochure</li>
                <li>Travel Insurance</li>
                <li>Booking Conditions</li>
                <li>Trip Deposit Level</li>
                <li>Recommendations</li>
              </ul>
            </div>
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 ">
            {/* Column 1 */}
            <div>
              {/* Mobile Dropdown Header */}
              <button
                className="flex md:hidden justify-between items-center w-full font-bold text-lg mb-2"
                onClick={() => toggle("help")}
              >
                Help & Info
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    open.help ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Desktop Header */}
              <h3 className="hidden md:block font-bold text-lg mb-4">
                Help & Info
              </h3>

              {/* List */}
              <ul
                className={`space-y-2 text-gray-700 ${
                  open.help ? "block" : "hidden md:block"
                }`}
              >
                <li>Who We Are</li>
                <li>WE MAKE TRAVEL MATTER®</li>
                <li>Become an Affiliate</li>
                <li>Frequently Asked Questions</li>
                <li>Travel Updates</li>
                <li>Contact Us</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <button
                className="flex md:hidden justify-between items-center w-full font-bold text-lg mb-2"
                onClick={() => toggle("plan1")}
              >
                Travel Planning
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    open.plan1 ? "rotate-180" : ""
                  }`}
                />
              </button>

              <h3 className="hidden md:block font-bold text-lg mb-4">
                Travel Planning
              </h3>

              <ul
                className={`space-y-2 text-gray-700 ${
                  open.plan1 ? "block" : "hidden md:block"
                }`}
              >
                <li>Get Your Free Brochure</li>
                <li>Travel Insurance</li>
                <li>Booking Conditions</li>
                <li>Trip Deposit Level</li>
                <li>Recommendations</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <button
                className="flex md:hidden justify-between items-center w-full font-bold text-lg mb-2"
                onClick={() => toggle("plan2")}
              >
                Travel Planning
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    open.plan2 ? "rotate-180" : ""
                  }`}
                />
              </button>

              <h3 className="hidden md:block font-bold text-lg mb-4">
                Travel Planning
              </h3>

              <ul
                className={`space-y-2 text-gray-700 ${
                  open.plan2 ? "block" : "hidden md:block"
                }`}
              >
                <li>Get Your Free Brochure</li>
                <li>Travel Insurance</li>
                <li>Booking Conditions</li>
                <li>Trip Deposit Level</li>
                <li>Recommendations</li>
              </ul>
            </div>
          </div>
          <div className=" flex md:justify-end justify-center mt-4 md:mt-0">
            {/* Column 4 - Newsletter */}
            <div className=" w-full md:w-2/3 ">
              <h3 className="font-bold text-lg mb-2">Save up to $2,034*!</h3>
              <p className="text-gray-700  mb-2">
                Plus receive latest offers, travel inspiration, and discover how
                your travels will make a positive impact. Together, WE MAKE
                TRAVEL MATTER®.
              </p>
              <a
                href="#"
                className="text-sm text-[#d87028] font-semibold underline block mb-4"
              >
                Offer Terms
              </a>

              {/* Form */}
              <form className="space-y-4">
                <div className="flex gap-2">
             
                  <input
                    type="text"
                    placeholder="First Name *"
                    className="w-1/2 border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-[#d87028]"
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    className="w-1/2 border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-[#d87028]"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-[#d87028]"
                />

                <div className="flex items-start gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    className="mt-1 border-gray-400 rounded"
                  />
                  <p>
                    *By checking this box, you accept the Trafalgar{" "}
                    <a href="#" className="text-[#d87028] underline">
                      privacy policy
                    </a>
                  </p>
                </div>
                <div className=" flex justify-center md:justify-start">
                  <button
                    type="submit"
                    className="bg-[#d87028] hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-full transition text-sm mt-4"
                  >
                    VIEW ALL TRIPS
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className=" my-8 text-sm text-gray-700">
          <p>
            Imara Kileleni Safaris is a proud member of{" "}
            <a href="#" className="underline text-[#d87028]">
              The Travel Corporation
            </a>{" "}
            portfolio of brands.
            <br /># Imara Kileleni Safaris
            <br />
            Travel House, Rue du Manoir St Peter Port, Guernsey, GY1 2JH
          </p>
        </div>
      </div>

      {/* Region Selector */}
      {/* <div className="bg-[#f9e1d7] py-4">
        <div className="px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto grid grid-cols-3 gap-6">
          <div className="flex items-center gap-3 ">
            <FaFlagUsa className="text-3xl" />
            <div>
              <p className="text-xs text-gray-600">Selected Region</p>
              <p className="font-semibold text-black">United States</p>
            </div>
          </div>

          
          <div className=" text-center text-[10px] font-semibold">
            <div className="flex items-center justify-center gap-4 text-3xl text-gray-600 mb-6">
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcAmex />
              <FaCcDiscover />
              <FaCcMastercard />
            </div>
            <p>
              Copyright 2025 Imara Kileleni Safaris. All rights reserved.
              <br />
              SAFARI MARKETING PRO® is a trademark of The TreadRight Foundation,
              registered in the U.S. and other countries and regions, and is
              being used under license.
            </p>
          </div>

        
          <div className=" text-sm text-gray-700 space-y-3">
            <div className="flex justify-end gap-4  text-gray-800 text-xl">
              <div className=" p-2 rounded-full bg-[#d87028] cursor-pointer ">
                <FaFacebookF className=" text-white" />
              </div>

              <div className=" p-2 rounded-full bg-[#d87028] cursor-pointer ">
                <FaInstagram className=" text-white" />
              </div>
              <div className=" p-2 rounded-full bg-[#d87028] cursor-pointer ">
                <FaPinterestP className=" text-white" />
              </div>
              <div className=" p-2 rounded-full bg-[#d87028] cursor-pointer ">
                <FaYoutube className=" text-white" />
              </div>
            </div>

            <div className="flex flex-wrap justify-end gap-2 text-sm mt-4 font-semibold">
              <a href="#">Accessibility</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Sitemap</a>
            </div>
            <div className="flex flex-wrap justify-end gap-2 text-sm mt-4 font-semibold">
              <a href="#">Terms and Conditions</a>
              <a href="#">Booking Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>

       
          </div>
        </div>
      </div> */}

      <div className="bg-[#f9e1d7] py-4">
  <div className="px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

    {/* Region Selector */}
    <div className="flex items-center gap-3 justify-center md:justify-start">
      <FaFlagUsa className="text-3xl" />
      <div className="text-center md:text-left">
        <p className="text-xs text-gray-600">Selected Region</p>
        <p className="font-semibold text-black">United States</p>
      </div>
    </div>

    {/* Payment Icons */}
    <div className="text-center text-[10px] font-semibold flex flex-col items-center">
      <div className="flex items-center justify-center gap-4 text-3xl text-gray-600 mb-6">
        <FaCcVisa />
        <FaCcMastercard />
        <FaCcAmex />
        <FaCcDiscover />
        <FaCcMastercard />
      </div>
      <p className="text-[11px] leading-5 px-2">
        Copyright 2025 Imara Kileleni Safaris. All rights reserved.
        <br />
        SAFARI MARKETING PRO® is a trademark of The TreadRight Foundation,
        registered in the U.S. and other countries and regions, and is
        being used under license.
      </p>
    </div>

    {/* Social & Links */}
    <div className="text-sm text-gray-700 space-y-3 text-center md:text-right">
      <div className="flex justify-center md:justify-end gap-4 text-gray-800 text-xl">
        <div className="p-2 rounded-full bg-[#d87028] cursor-pointer"><FaFacebookF className="text-white" /></div>
        <div className="p-2 rounded-full bg-[#d87028] cursor-pointer"><FaInstagram className="text-white" /></div>
        <div className="p-2 rounded-full bg-[#d87028] cursor-pointer"><FaPinterestP className="text-white" /></div>
        <div className="p-2 rounded-full bg-[#d87028] cursor-pointer"><FaYoutube className="text-white" /></div>
      </div>

      <div className="flex flex-wrap justify-center md:justify-end gap-2 text-sm mt-4 font-semibold">
        <a href="#">Accessibility</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Sitemap</a>
      </div>

      <div className="flex flex-wrap justify-center md:justify-end gap-2 text-sm mt-4 font-semibold">
        <a href="#">Terms and Conditions</a>
        <a href="#">Booking Conditions</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>

  </div>
</div>


      {/* Bottom orange strip */}
      <div className="bg-[#d87028] py-3 w-full ">
        <div className=" flex items-center gap-4 justify-center">
          <img
            src="https://www.contiki.com/media/xcal1m5i/iata.svg?center=0.5%2C0.5&format=webp&mode=crop&width=600&height=200&quality=80"
            alt=""
            className=" h-8"
          />
          <img
            src="https://www.contiki.com/media/fjzpw34c/treadright-1.svg?center=0.5%2C0.5&format=webp&mode=crop&width=600&height=200&quality=80"
            alt=""
            className=" h-10"
          />
          <img
            src="https://www.contiki.com/media/bj1odtrx/logo_cato_white_export_01-1.svg?center=0.5%2C0.5&format=webp&mode=crop&width=600&height=200&quality=80"
            alt=""
            className="h-6"
          />
          <img
            src="https://www.contiki.com/media/xcal1m5i/iata.svg?center=0.5%2C0.5&format=webp&mode=crop&width=600&height=200&quality=80"
            alt=""
            className=" h-8"
          />
          <img
            src="https://www.contiki.com/media/bj1odtrx/logo_cato_white_export_01-1.svg?center=0.5%2C0.5&format=webp&mode=crop&width=600&height=200&quality=80"
            alt=""
            className="h-6"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React, { useState } from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaPinterestP,
//   FaYoutube,
//   FaCcVisa,
//   FaCcMastercard,
//   FaCcAmex,
//   FaCcDiscover,
// } from "react-icons/fa";
// import { FaFlagUsa } from "react-icons/fa6";
// import { FiChevronDown } from "react-icons/fi";

// const Footer = () => {
//   const [open, setOpen] = useState({
//     help: false,
//     plan1: false,
//     plan2: false,
//   });

//   const toggle = (section) => {
//     setOpen((prev) => ({ ...prev, [section]: !prev[section] }));
//   };

//   return (
//     <footer className="w-full">
//       <div className="py-3 bg-[#fff8f2]" />

//       {/* Top section */}
//       <div className="bg-white pt-16 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

//           {/* Column 1 */}
//           <div>
//             {/* Mobile Header */}
//             <button
//               className="flex md:hidden justify-between w-full font-bold text-lg mb-2"
//               onClick={() => toggle("help")}
//             >
//               Help & Info
//               <FiChevronDown className={`transition ${open.help ? "rotate-180" : ""}`} />
//             </button>

//             {/* Desktop Title */}
//             <h3 className="hidden md:block font-bold text-lg mb-4">Help & Info</h3>

//             <ul
//               className={`space-y-2 text-gray-700 ${
//                 open.help ? "block" : "hidden md:block"
//               }`}
//             >
//               <li>Who We Are</li>
//               <li>WE MAKE TRAVEL MATTER®</li>
//               <li>Become an Affiliate</li>
//               <li>Frequently Asked Questions</li>
//               <li>Travel Updates</li>
//               <li>Contact Us</li>
//             </ul>
//           </div>

//           {/* Column 2 */}
//           <div>
//             <button
//               className="flex md:hidden justify-between w-full font-bold text-lg mb-2"
//               onClick={() => toggle("plan1")}
//             >
//               Travel Planning
//               <FiChevronDown className={`transition ${open.plan1 ? "rotate-180" : ""}`} />
//             </button>

//             <h3 className="hidden md:block font-bold text-lg mb-4">Travel Planning</h3>

//             <ul
//               className={`space-y-2 text-gray-700 ${
//                 open.plan1 ? "block" : "hidden md:block"
//               }`}
//             >
//               <li>Get Your Free Brochure</li>
//               <li>Travel Insurance</li>
//               <li>Booking Conditions</li>
//               <li>Trip Deposit Level</li>
//               <li>Recommendations</li>
//             </ul>
//           </div>

//           {/* Column 3 */}
//           <div>
//             <button
//               className="flex md:hidden justify-between w-full font-bold text-lg mb-2"
//               onClick={() => toggle("plan2")}
//             >
//               Travel Planning
//               <FiChevronDown className={`transition ${open.plan2 ? "rotate-180" : ""}`} />
//             </button>

//             <h3 className="hidden md:block font-bold text-lg mb-4">Travel Planning</h3>

//             <ul
//               className={`space-y-2 text-gray-700 ${
//                 open.plan2 ? "block" : "hidden md:block"
//               }`}
//             >
//               <li>Get Your Free Brochure</li>
//               <li>Travel Insurance</li>
//               <li>Booking Conditions</li>
//               <li>Trip Deposit Level</li>
//               <li>Recommendations</li>
//             </ul>
//           </div>

//           {/* Newsletter desktop right stays same */}
//           <div className="hidden md:block w-2/3 md:w-full">
//             <h3 className="font-bold text-lg mb-2">Save up to $2,034*!</h3>
//             <p className="text-gray-700 mb-2">
//               Plus receive latest offers, travel inspiration, and discover how
//               your travels will make a positive impact. Together, WE MAKE TRAVEL MATTER®.
//             </p>
//             <a className="text-sm text-[#d87028] font-semibold underline block mb-4">
//               Offer Terms
//             </a>

//             <form className="space-y-4">
//               <input className="w-full border p-2 rounded-md" placeholder="Email *" />
//               <button className="bg-[#d87028] text-white px-8 py-3 rounded-full text-sm">
//                 VIEW ALL TRIPS
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Disclaimer */}
//         <div className="my-8 text-sm text-gray-700 text-center md:text-left">
//           Imara Kileleni Safaris is a proud member of The Travel Corporation.
//         </div>
//       </div>

//       {/* Region Selector and bottom sections remain unchanged */}
//     </footer>
//   );
// };

// export default Footer;
