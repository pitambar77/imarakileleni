import React, { useState } from "react";

const TabLink = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "packages", label: "Safaris" },
    { id: "details", label: "Things To Do" },
    { id: "highlight", label: "Beach" },
    { id: "besttime", label: "Best Time" },
    { id: "adventure", label: "Adventure" },
    { id: "faq", label: "FAQ" },
    { id: "more", label: "More Info" },
  ];



const handleTabClick = (id) => {
    setActiveTab(id);
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -150; // offset to match sticky header height
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className=" hidden md:block bg-white pt-12 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 sticky top-28 z-9 bg-white">
      <div className="flex flex-wrap items-center gap-8 border-b border-gray-200 pb-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`text-[16px] cursor-pointer uppercase font-semibold pb-2 transition relative ${
              activeTab === tab.id
                ? "text-[#d87028] border-b-2 border-[#d87028]"
                : "text-gray-700 hover:text-[#d87028]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabLink;
