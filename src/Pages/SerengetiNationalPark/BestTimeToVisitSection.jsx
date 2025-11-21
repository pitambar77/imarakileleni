import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import MonthCircle from "./MonthCircle";

const BestTimeToVisitSection = ({
  title = "When to go on a Cape Town Trip",
  subtitle = "Best time to visit",
  apiUrl = null,
  staticMonths = [],
}) => {
  const [monthData, setMonthData] = useState(staticMonths);
  const [hoveredMonth, setHoveredMonth] = useState(null);

  // Fetch month data from backend (optional)
  useEffect(() => {
    if (!apiUrl) return;
    const fetchData = async () => {
      try {
        const res = await axios.get(apiUrl);
        if (res.data?.months?.length > 0) {
          setMonthData(res.data.months);
          setHoveredMonth(res.data.months[0]);
        }
      } catch (error) {
        console.error("Error fetching month data:", error);
      }
    };
    fetchData();
  }, [apiUrl]);

  // Set default hovered month if static data
  useEffect(() => {
    if (staticMonths.length > 0) setHoveredMonth(staticMonths[4]);
  }, [staticMonths]);

  return (
    <section className="px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 py-16 text-[#2e2c2d] ">
      {/* Header */}
    
       
        <h2 className=" text-xl md:text-3xl mb-10  capitalize text-center font-bold">
          {title}
        </h2>
     

      {/* Legend */}
      <div className="flex justify-center gap-6  mb-8">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-[#A5D6A7]"></span> Peek Season
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-[#F1F8C0]"></span> Low Season
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-[#E1D7F8]"></span> Shoulder Season
        </div>
      </div>

      {/* Month Selector */}
      <div className="flex flex-wrap justify-between gap-4  ">
        {monthData.map((month) => (
          <MonthCircle
            key={month.name}
            month={month}
            isActive={hoveredMonth?.name === month.name}
            onHover={setHoveredMonth}
          />
        ))}
      </div>

      {/* Month Details */}
      <div className="mt-10 relative  ">
        <AnimatePresence mode="wait">
          {hoveredMonth && (
            <motion.div
              key={hoveredMonth.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* <h2 className="text-4xl font-cormorant mb-2">
                {hoveredMonth.name}
              </h2>
              <h4 className="font-semibold mb-6">{hoveredMonth.season}</h4> */}

              <div className="space-y-4 text-center pt-4">
                {hoveredMonth.description?.map((para, i) => (
                  <p key={i} className="">
                    {para}
                  </p>
                ))}
              </div>

              {/* <div className="text-center mt-10">
                <button className="px-6 py-3 border border-[#a89f82] text-[#a89f82] rounded-full uppercase text-sm tracking-[2px] hover:bg-[#f25922] hover:text-white transition">
                  Learn More
                </button>
              </div> */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BestTimeToVisitSection;
