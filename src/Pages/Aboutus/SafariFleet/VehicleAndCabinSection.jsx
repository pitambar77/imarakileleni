import React from "react";
import { BiSolidUser } from "react-icons/bi";

const VehicleAndCabinSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28">
      {/* Top Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <img
          src="https://altezzatravel.com/upload/medialibrary/1b0/pi56rsk6w3lpo3akbfty965bpdf06qd2.webp"
          alt="Safari Vehicle 1"
          className="w-full h-[420px] object-cover rounded-lg shadow-sm"
        />
        <img
          src="https://wildfrontiersuganda.com/wp-content/uploads/2022/02/vehicle-fleet.jpg"
          alt="Safari Vehicle 2"
          className="w-full h-[420px] object-cover rounded-lg shadow-sm"
        />
      </div>

      {/* Title */}
      <div className="text-left  mb-16">
        <h3 className="text-[28px] md:text-[32px] font-semibold text-[#1a1a1a] mb-3">
          Classic Antarctica Air-Cruise
        </h3>
        <p className="text-gray-600 text-[16px] max-w-2xl ">
          The cabin availability below will refresh every 30 minutes. Note that
          selecting a cabin is for informational purposes only and does not
          reserve or block the space.
        </p>
      </div>

      {/* Vehicle + Cabin Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Side - Vehicle Image */}
        <div className="flex ">
          <img
            src="https://bantuporijourneys.com/images/Vehicle_Layout_Bantu_Pori.jpg"
            alt="Vehicle Diagram"
            className="w-full max-w-[680px] object-contain"
          />
        </div>

        {/* Right Side - Cabin Categories */}
        <div className="flex flex-col gap-5">
          <h3 className="text-[20px] font-semibold capitalize text-[#111] pb-2">
            Cabin Categories
          </h3>

          <ul className="grid grid-cols-2 gap-x-16 gap-y-3 text-[15px] text-gray-800">
            <li className="flex items-center justify-between  pb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                Suite
              </div>
              <div className=" flex gap-1 items-center bg-gray-200 py-1 px-2 rounded-md">
                <BiSolidUser className="" />
                <span className="text-sm  mt-[2px]"> 2</span>
              </div>
            </li>
            <li className="flex items-center justify-between  pb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                Porthole Cabin
              </div>
              <div className=" flex gap-1 items-center bg-gray-200 py-1 px-2 rounded-md">
                <BiSolidUser className="" />
                <span className="text-sm  mt-[2px]"> 2</span>
              </div>
            </li>
            <li className="flex items-center justify-between  pb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                Penthouse Suite
              </div>
              <div className=" flex gap-1 items-center bg-gray-200 py-1 px-2 rounded-md">
                <BiSolidUser className="" />
                <span className="text-sm  mt-[2px]"> 2</span>
              </div>
            </li>
            <li className="flex items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                Single Veranda Cabin
              </div>
              <div className=" flex gap-1 items-center bg-gray-200 py-1 px-2 rounded-md">
                <BiSolidUser className="" />
                <span className="text-sm  mt-[2px]"> 1</span>
              </div>
            </li>
            <li className="flex items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                Deluxe Veranda Cabin
              </div>
              <div className=" flex gap-1 items-center bg-gray-200 py-1 px-2 rounded-md">
                <BiSolidUser className="" />
                <span className="text-sm  mt-[2px]"> 2</span>
              </div>
            </li>
            <li className="flex items-center justify-between  pb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-emerald-400 rounded-full"></span>
                Triple Suite
              </div>
              <div className=" flex gap-1 items-center bg-gray-200 py-1 px-2 rounded-md">
                <BiSolidUser className="" />
                <span className="text-sm  mt-[2px]"> 3</span>
              </div>
            </li>
            <li className="flex items-center justify-between  pb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
                Veranda Cabin
              </div>
              <div className=" flex gap-1 items-center bg-gray-200 py-1 px-2 rounded-md">
                <BiSolidUser className="" />
                <span className="text-sm  mt-[2px]"> 2</span>
              </div>
            </li>
            <li className="flex items-center justify-between  pb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                *Only available with queen-sized bed
              </div>
            </li>
          </ul>

          {/* Info Note */}
          <div className=" bg-[#fedec7] p-8 rounded-md">
            <p className=" mb-8">
              Is your cabin unavailable? Try another date.
            </p>

            {/* Button */}
            <button className="bg-[#d76e28] hover:bg-[#fcd1b6] text-white border border-[#d87028] rounded-md px-5 py-3 w-fit text-sm font-semibold transition">
              ← Back to Expedition Selection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleAndCabinSection;
