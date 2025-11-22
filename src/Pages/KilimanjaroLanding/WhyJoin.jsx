import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const WhyJoinSection = () => {
  return (
    <section className="w-full bg-[#ffffff] py-16 px-4 md:px-10 lg:px-18 2xl:px-28">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl capitalize text-[#111]">Why join?</h2>
        <p className="text-[#333] text-[16px] mt-2">Program benefits</p>
      </div>

      {/* BOX */}
      <div className="bg-[#f7f7f7] rounded-md shadow-sm p-10 md:p-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">

          {/* LEFT COLUMN */}
          <div className="space-y-6">
            <Benefit text="It’s free!" />

            <Benefit text="Easy and simple to get started" />

            <Benefit text="We’re the worldwide leader in tours for 18–35s…experts, some might say" />

            <Benefit text="We offer over 350 trips across 6 continents… impressive huh?" />

            <Benefit text="Our dedicated affiliate management team is available to help you maximise your potential as an affiliate partner and troubleshoot any problems along the way" />
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            <Benefit text="Earn 5% minimum commission for each confirmed online booking completed. We will reward our most lucrative publishers with higher commission rates" />

            <Benefit text="Access to Contiki’s amazing creatives including banners, skyscrapers and text links" />

            <Benefit text="90-day referral cookie period" />

            <Benefit text="Real-time tracking & reporting" />
          </div>

        </div>
      </div>
    </section>
  );
};

// Reusable Item Component
const Benefit = ({ text }) => (
  <div className="flex items-start gap-4">
    <FaCheckCircle className="text-[#d87328] text-xl flex-shrink-0" />
    <p className="text-[16px] text-[#111]  leading-relaxed">
      {text}
    </p>
  </div>
);

export default WhyJoinSection;
