


import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";

const MonthGuide = ({ title, tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeContent = tabs.find((t) => t.id === activeTab);

  // 👉 Normalize description to always be an array
  const descriptionArray = Array.isArray(activeContent.description)
    ? activeContent.description
    : [activeContent.description];

  return (
    <section className="py-16 px-4 md:px-12 lg:px-18 2xl:px-28">
      {/* Title */}
      <h2 className="text-center text-2xl md:text-3xl capitalize font-semibold mb-6">
        {title}
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-3 rounded-md cursor-pointer
               text-sm uppercase transition ${
                activeTab === tab.id
                  ? ""
                  :"bg-[#d87028] text-white "
              }`}
          >
           <h3 className="">
            {tab.label}
            </h3> 
          </button>
        ))}
      </div>

      {/* CONTENT SECTION */}
      <div className="bg-[#f7d8c1] p-8 rounded-md flex flex-wrap justify-between">
        
        {/* LEFT TEXT */}
        <div className="w-[60%]">
          <h3 className="font-bold mb-4 text-2xl">
            {activeContent.contentTitle}
          </h3>

          {/* Dynamic Paragraphs */}
          <div className="space-y-3 mb-4">
            {descriptionArray.map((para, index) => (
              <p
                key={index}
                className="text-[#444] text-[16px] leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Bullet List */}
          <div className="mt-4">
            <h3 className="font-semibold text-xl mb-4">Events & Festivals</h3>
            <ul className="space-y-2">
              {activeContent.events.map((item, index) => (
                <li key={index} className="flex items-start gap-2 ml-4">
                  <span className="text-[#d87028] text-lg mt-0.5"><GoDotFill /></span>
                  <p className="text-[#444] text-[16px] leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-[35%]">
          <img
            src={activeContent.image}
            alt="Section Visual"
            className="w-full h-[300px] object-cover rounded"
          />
        </div>
      </div>



    </section>
  );
};

export default MonthGuide;
