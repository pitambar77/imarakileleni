import React from "react";

const TanzaniaExpertCTA = () => {
  return (
    <section className=" py-16 px-4 md:px-10 lg:px-18 2xl:px-28">
      <div className=" bg-[#f6d8c2] py-10 rounded-md ">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">
          {/* LEFT TEXT AREA */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#0b1a2b]">
              Speak to a Tanzania expert today
            </h3>
            <p className="text-[18px] text-gray-700 mt-2">
              and start planning your tailor-made holiday
            </p>

            {/* CALL & BUTTON */}
            <div className="flex items-center justify-center gap-4 mt-5">
              <p className="text-[22px] font-semibold text-[#0b1a2b]">
                Call{" "}
                <span className="text-[#0b4fff] hover:underline cursor-pointer">
                  0203 111 1315
                </span>
              </p>
              <span className="text-gray-600 font-medium">OR</span>

              <button className="bg-[#d87028] hover:bg-[#e5b230] text-white font-semibold px-6 py-2 rounded-full shadow">
                Enquire Now
              </button>
            </div>
          </div>

          {/* EXPERTS SECTION */}
          <div className="text-center">
            <p className="font-semibold text-gray-700 mb-3">
              Our Tanzania Experts
            </p>

            <div className="flex items-center justify-center gap-4">
              {/* Expert 1 */}
              <div>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/027/815/166/small/woman-african-safari-generate-ai-photo.jpg"
                  alt="Alistair"
                  className="w-20 h-20 rounded-full object-cover mx-auto"
                />
                <p className="mt-2 font-semibold text-[#0b1a2b]">Alistair</p>
              </div>

              {/* Expert 2 */}
              <div>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/027/815/166/small/woman-african-safari-generate-ai-photo.jpg"
                  alt="Ottilie"
                  className="w-20 h-20 rounded-full object-cover mx-auto"
                />
                <p className="mt-2 font-semibold text-[#0b1a2b]">Ottilie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TanzaniaExpertCTA;
