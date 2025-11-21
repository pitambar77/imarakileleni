import React from "react";

const AllyshipCommitment = () => {
  return (
    <section className="bg-[#f8d8c3] py-16 px-6 md:px-12 lg:px-18 2xl:px-28">
      {/* TITLE */}
      <h2 className="text-center text-xl md:text-3xl capitalize font-extrabold text-[#111] mb-10">
        Effective allyship: our ongoing commitment 🤝🏳️‍🌈
      </h2>

      {/* 3 CARD GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* CARD 1 */}
        <div className="bg-white rounded-md overflow-hidden shadow-md">
          <img
            src="https://www.ugandabudgetsafaris.com/wp-content/uploads/2022/05/04.-AZURA-SELOUS-DRIVING-SAFARI-WITH-GUIDE.jpg"
            alt=""
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-[#111] mb-3">
              Life long learning & growth
            </h3>
            <p className="text-[15px] text-gray-700 leading-relaxed mb-4">
              By helping LGBTQIA+ people escape persecution & violence in
              countries where homosexuality is still illegal, these guys literally
              save lives every day.
            </p>
            <a
              href="#"
              className="text-[#111] font-semibold underline hover:text-black"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-md overflow-hidden shadow-md">
          <img
            src="https://www.tailormadeafrica.com/wp-content/uploads/Bangweulu-Wetlands-Zambia-3.jpeg"
            alt=""
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-[#111] mb-3">
              Health & wellbeing
            </h3>
            <p className="text-[15px] text-gray-700 leading-relaxed mb-4">
              Working with queer writers, entrepreneurs and activists, we continue
              making the Contiki experience as inclusive as possible.
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="bg-white rounded-md overflow-hidden shadow-md">
          <img
            src="https://connectingtravel.com/AfcTemp/api/image/7000-7999/7755/7755.jpg"
            alt=""
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-[#111] mb-3">
              Conservation & environment
            </h3>
            <p className="text-[15px] text-gray-700 leading-relaxed mb-4">
              You’ll travel with a highly trained (and very friendly) Trip Manager
              & Driver, who support you in any way they can — plus our welfare
              team is available 24/7.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AllyshipCommitment;
