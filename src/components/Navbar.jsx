import React from "react";
import { FiChevronDown, FiSearch, FiMessageCircle } from "react-icons/fi";
import imaralogo from '../assets/imaralogo.png'

const Navbar = () => {
  return (
    <header className="w-full bg-white">
      {/* Top Bar */}
      <div className="flex justify-end items-center text-[12px] text-gray-600 py-2 pt-4 px-8 space-x-4 border-b-[0.5px] border-gray-100">
        <a href="#" className="hover:underline">Contact us</a>
        <a href="#" className="hover:underline">Subscribe to emails</a>
        <a href="#" className="hover:underline">Tanzania Travel Guide</a>
        <a href="#" className="hover:underline">Kilimanjaro Travel guide</a>
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-8 py-4">
        {/* Left - Logo */}
        <div className="flex items-center space-x-8">
          <img
            src={imaralogo}
            alt="Imara Kileleni Safaris"
            className="h-12 w-auto"
          />
       

        {/* Center - Navigation Links */}
        <ul className="hidden md:flex space-x-4 font-semibold text-sm text-gray-800">
          <li className="flex items-center cursor-pointer hover:text-orange-600">
            DESTINATIONS <FiChevronDown className="ml-1" />
          </li>
          <li className="flex items-center cursor-pointer hover:text-orange-600">
            DEALS <FiChevronDown className="ml-1" />
          </li>
          <li className="flex items-center cursor-pointer hover:text-orange-600">
            TRAVEL STYLES <FiChevronDown className="ml-1" />
          </li>
          <li className="flex items-center cursor-pointer hover:text-orange-600">
            ABOUT IMARA <FiChevronDown className="ml-1" />
          </li>
          <li className="flex items-center cursor-pointer hover:text-orange-600">
            GET INSPIRED <FiChevronDown className="ml-1" />
          </li>
        </ul>

         </div>

        {/* Right - Search + View Trips */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="flex items-center border rounded-full overflow-hidden px-1 py-1 w-[300px]">
            <input
              type="text"
              placeholder="18-35? Find and book your adventure"
              className="flex-1 text-[12px] outline-none placeholder-black px-3"
            />
            <button className=" bg-[#d87028] text-white font-semibold rounded-full p-2">
              <FiSearch size={24} />
            </button>
          </div>

          {/* Chat Icon */}
          <button className="border rounded-full p-2">
            <FiMessageCircle size={18} />
          </button>

          {/* View Trips Button */}
          <button className="bg-[#d87028] text-white px-[21px] py-3 border border-gray-200 rounded-[200px] font-semibold hover:bg-orange-700">
            VIEW TRIPS
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
