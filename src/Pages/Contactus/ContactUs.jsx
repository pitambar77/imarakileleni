import React, { useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

/* ================= HELPERS ================= */
const today = new Date();
today.setHours(0, 0, 0, 0);

const years = Array.from({ length: 6 }, (_, i) => today.getFullYear() + i);
const months = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

const getFirstDay = (year, month) => new Date(year, month, 1).getDay();

const formatFullDate = (year, month, day) =>
  new Date(year, month, day).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const getWeekday = (year, month, day) =>
  new Date(year, month, day).toLocaleDateString("en-GB", {
    weekday: "long",
  });

/* ================= COMPONENT ================= */
const ContactUs = () => {
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [step, setStep] = useState(0);

  const [travelType, setTravelType] = useState("safari");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    adults: "",
    children: "",
    message: "",
  });

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDay(year, month);

  const isPastDate = (day) => {
    const d = new Date(year, month, day);
    d.setHours(0, 0, 0, 0);
    return d < today;
  };

  const handleDateClick = (day) => {
    if (isPastDate(day)) return;

    if (step === 0) {
      setArrivalDate(day);
      setDepartureDate(null);
      setStep(1);
    } else if (day > arrivalDate) {
      setDepartureDate(day);
      setStep(0);
    }
  };

  const isSelected = (day) => day === arrivalDate || day === departureDate;

  const inRange = (day) =>
    arrivalDate && departureDate && day > arrivalDate && day < departureDate;

  const changeMonth = (dir) => {
    if (dir === "prev") {
      if (month === 0) {
        setMonth(11);
        setYear((y) => y - 1);
      } else setMonth((m) => m - 1);
    } else {
      if (month === 11) {
        setMonth(0);
        setYear((y) => y + 1);
      } else setMonth((m) => m + 1);
    }
  };

  const totalDays =
    arrivalDate && departureDate ? departureDate - arrivalDate + 1 : 0;

  /* ================= SUBMIT ================= */
  const handleSubmit = async () => {
    if (!arrivalDate || !departureDate || !formData.email) {
      alert("Please fill required fields");
      return;
    }

    const payload = {
      ...formData,
      travelType,
      arrivalDate: formatFullDate(year, month, arrivalDate),
      departureDate: formatFullDate(year, month, departureDate),
      totalDays,
    };

    const res = await fetch("https://imarabackend.safarimarketingpro.com/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (data.success) {
      alert("Thank you! We will contact you shortly.");
    }
  };

  return (
    <div className="bg-[#fafafa] min-h-screen py-10">
      <div className="px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ================= LEFT ================= */}
        <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
          <h3 className="text-lg font-semibold">Select Travel Date</h3>

          {/* YEAR & MONTH */}
          <div className="flex gap-3">
            <select
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="border rounded-full px-4 py-2"
            >
              {years.map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>

            <select
              value={month}
              onChange={(e) => setMonth(Number(e.target.value))}
              className="border rounded-full px-4 py-2 uppercase"
            >
              {months.map((m, i) => (
                <option key={m} value={i}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* CALENDAR */}
          <div className="border rounded-xl p-4">
            {/* <div className=" space-x-2 mb-3">
              <button className="" onClick={() => changeMonth("prev")}><IoIosArrowBack className="text-2xl" />
</button>
              <span className="font-semibold">
                {months[month]} {year}
              </span>
              <button onClick={() => changeMonth("next")}>
                <IoChevronForward/>
              </button>
            </div> */}

            <div className="flex items-center  gap-2 mb-3">
              <button
                type="button"
                onClick={() => changeMonth("prev")}
                className="p-1 rounded-full hover:bg-gray-100 transition"
                aria-label="Previous month"
              >
                <IoIosArrowBack className="text-2xl text-gray-700" />
              </button>

              <span className="font-semibold text-sm md:text-base">
                {months[month]} {year}
              </span>

              <button
                type="button"
                onClick={() => changeMonth("next")}
                className="p-1 rounded-full hover:bg-gray-100 transition"
                aria-label="Next month"
              >
                <IoChevronForward className="text-2xl text-gray-700" />
              </button>
            </div>

            <div className="grid grid-cols-7 text-center text-gray-500 text-sm mb-2">
              {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={i} />
              ))}

              {Array.from({ length: daysInMonth }, (_, i) => {
                const day = i + 1;
                return (
                  <button
                    key={day}
                    onClick={() => handleDateClick(day)}
                    disabled={isPastDate(day)}
                    className={`h-12 rounded-lg
                      ${
                        isPastDate(day)
                          ? "bg-gray-200 text-gray-400"
                          : isSelected(day)
                          ? "bg-[#f6d6b8]"
                          : inRange(day)
                          ? "bg-[#fde6d5]"
                          : "bg-[#fde6d5]"
                      }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          {/* TOUR TYPE */}

          <h2> Select Tour Type</h2>

          <select
            value={travelType}
            onChange={(e) => setTravelType(e.target.value)}
            className="border rounded-full px-4 py-2"
          >
            <option value="safari">Wildlife Safari</option>
            <option value="trekking">Trekking</option>
            <option value="daytrip">Day Trip</option>
            <option value="beach">Zanzibar Beach Holiday</option>
          </select>

          {/* PASSENGER FORM */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              placeholder="Full Name"
              className="border p-2"
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
            <input
              placeholder="Email"
              className="border p-2"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              placeholder="Country"
              className="border p-2"
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
            />
            <input
              placeholder="Phone"
              className="border p-2"
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <input
              placeholder="Adults"
              className="border p-2"
              onChange={(e) =>
                setFormData({ ...formData, adults: e.target.value })
              }
            />
            <input
              placeholder="Children"
              className="border p-2"
              onChange={(e) =>
                setFormData({ ...formData, children: e.target.value })
              }
            />
            <textarea
              placeholder="Message"
              className="border p-2 md:col-span-2"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
          <h3 className="text-xl font-semibold">
            {arrivalDate ? formatFullDate(year, month, arrivalDate) : "--"}
          </h3>
          <p>
            {departureDate ? formatFullDate(year, month, departureDate) : "--"}
          </p>

          <span className="inline-block bg-[#f2c59b] px-3 py-1 rounded-full text-sm mb-4">
            {travelType.toUpperCase()}
          </span>

          <div className="flex gap-4 mt-6">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-black rounded-full"></div>
              <div className="flex-1 w-px bg-gray-400 my-2"></div>
              <div className="w-3 h-3 border-2 border-black"></div>
            </div>

            {/* <div className="space-y-6">
              <div>
                <strong>{arrivalDate && getWeekday(year, month, arrivalDate)}</strong>
              </div>
              <div>
                <strong>{departureDate && getWeekday(year, month, departureDate)}</strong>
              </div>
            </div> */}
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold">
                  {arrivalDate
                    ? formatFullDate(year, month, arrivalDate)
                    : "--"}
                </h3>
                <p>
                  {arrivalDate
                    ? `${getWeekday(year, month, arrivalDate)}`
                    : "--"}
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  {departureDate
                    ? formatFullDate(year, month, departureDate)
                    : "--"}
                </h3>
                <p>
                  {departureDate
                    ? `${getWeekday(year, month, departureDate)}`
                    : "--"}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#fde6d5] rounded-xl p-4 flex justify-between">
            <span>Total Days</span>
            <span>{totalDays}</span>
          </div>

          <button
            onClick={handleSubmit}
            className="bg-[#d87028] text-white rounded-full px-6 py-2 uppercase font-semibold"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
