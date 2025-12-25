import React, { useState } from "react";

const ContactUs = () => {
  const [selectedDate, setSelectedDate] = useState(11);

  return (
    <div className="bg-[#fafafa] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="space-y-6">
          
          {/* Select travel date */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Select travel date</h3>

            <div className="flex gap-3 mb-4">
              <select className="border rounded-full px-4 py-2">
                <option>2027</option>
              </select>
              <select className="border rounded-full px-4 py-2">
                <option>AUGUST</option>
              </select>
            </div>

            <h4 className="font-semibold mb-2">Select trip type</h4>
            <div className="flex gap-2 mb-4">
              <button className="border rounded-full px-4 py-1">CLASSIC</button>
              <button className="bg-[#f2c59b] rounded-full px-4 py-1 font-medium">
                AGE 27–35
              </button>
            </div>

            {/* Calendar */}
            <div className="border rounded-xl p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">August 2027</span>
              </div>

              <div className="grid grid-cols-7 text-sm text-center text-gray-500 mb-2">
                {["SUN","MON","TUE","WED","THU","FRI","SAT"].map(d => (
                  <div key={d}>{d}</div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 31 }).map((_, i) => {
                  const day = i + 1;
                  const isActive = day === selectedDate;
                  return (
                    <button
                      key={day}
                      onClick={() => setSelectedDate(day)}
                      className={`h-12 rounded-lg text-sm ${
                        isActive
                          ? "bg-[#f6d6b8] font-semibold"
                          : "bg-[#fde6d5]"
                      }`}
                    >
                      {day}
                      {day === 11 && (
                        <div className="text-xs font-bold">$5,215</div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Passenger Details */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">PASSENGER DETAILS</h2>

            <h4 className="font-semibold mb-2">
              Passenger 1 (Lead/Adult)
            </h4>
            <p className="text-xs text-gray-500 mb-4">
              Person responsible for booking
            </p>

            {/* Personal details */}
            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input className="border rounded-md p-2" placeholder="Title*" />
                <input className="border rounded-md p-2" placeholder="First/Given name*" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input className="border rounded-md p-2" placeholder="Middle name/Initials" />
                <input className="border rounded-md p-2" placeholder="Surname*" />
              </div>

              <input className="border rounded-md p-2" placeholder="Date of birth (DD/MM/YYYY)" />
            </div>

            {/* Contact details */}
            <h4 className="font-semibold mt-6 mb-2">Contact Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input className="border rounded-md p-2" placeholder="+61 Phone number*" />
              <input className="border rounded-md p-2" placeholder="Email address*" />
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="space-y-6">
          
          {/* Summary */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">
                  11 August 2027, Wed
                </h3>
                <p className="text-sm text-gray-500">
                  28 August 2027, Sat
                </p>
                <span className="inline-block bg-[#f2c59b] px-3 py-1 rounded-full text-sm mt-2">
                  Age 27–35
                </span>
              </div>
              <div className="text-xl font-bold">$5,215</div>
            </div>

            <div className="text-sm space-y-2">
              <div>
                <strong>11 August, 2027</strong>
                <p>Wednesday, 07:00 (Local Time)</p>
                <p>London, United Kingdom</p>
              </div>

              <div>
                <strong>28 August, 2027</strong>
                <p>Saturday, 20:00 (Local Time)</p>
                <p>London, United Kingdom</p>
              </div>
            </div>
          </div>

          {/* Total price */}
          <div className="bg-[#fde6d5] rounded-xl p-6 shadow-sm">
            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-bold">Total Price</h3>
              <h3 className="text-2xl font-bold">$5,215</h3>
            </div>

            <p className="text-sm mb-4">
              Based on twinshare room
            </p>

            <div className="flex gap-3">
              <button className="border border-black rounded-full px-6 py-2">
                FIND OUT MORE
              </button>
              <button className="bg-[#d87028] text-white rounded-full px-6 py-2 font-semibold">
                CONTINUE
              </button>
            </div>

            <p className="text-xs text-gray-600 mt-3">
              Secure today with AUD$200 deposit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ContactUs