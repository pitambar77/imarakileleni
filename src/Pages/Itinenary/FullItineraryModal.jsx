import React from 'react'

const FullItineraryModal = ({ days, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center">
      <div className="bg-[#f2f2f2] w-[95%] max-w-6xl h-[90vh] overflow-y-auto rounded-lg relative p-8">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl"
        >
          ✕
        </button>

        {/* Toggle (UI Only) */}
        <div className="flex justify-center mb-10">
          <div className="flex border rounded-full overflow-hidden">
            <button className="px-6 py-2 bg-white text-gray-600">
              Map View
            </button>
            <button className="px-6 py-2 bg-[#d87028] text-white">
              View Full Itinerary
            </button>
          </div>
        </div>

        {/* DAYS */}
        <div className="space-y-10 ">
          {days.map((day, index) => (
            <div
              key={day._id}
              className="bg-white rounded-lg shadow-sm flex"
            >
              {/* DAY STRIP */}
              <div className="bg-[#d87028] text-white w-24 flex flex-col items-center rounded-l-lg">
                <span className="uppercase mt-8 text-lg">Day</span>
                <span className="text-3xl font-bold">{index + 1}</span>
              </div>

              {/* CONTENT */}
              <div className="p-8 flex-1">
                <h2 className="text-2xl font-semibold mb-4">
                  {day.title}
                </h2>

                {day.description?.map((d, i) => (
                  <p
                    key={i}
                    className="text-gray-700 leading-relaxed mb-4"
                  >
                    {d.content}
                  </p>
                ))}

                <div className="mt-4 text-gray-600">
                  🍽 {day.startpoint || ""}
                </div>

                <p className="mt-2 text-[#d87028] font-semibold">
                  🛏 {day.accommodationName} →
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default FullItineraryModal