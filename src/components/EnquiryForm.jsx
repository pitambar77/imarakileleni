import { useState } from "react";
import TravelDatePicker from "./TravelDatePicker";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { isValidPhoneNumber } from "libphonenumber-js";
import { FaChevronDown } from "react-icons/fa";
import axios from "axios";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    countryCode: "",
    country: "",
    email: "",
    adults: 1,
    children: 0,
    destination: "",
    tourType: "",
    travelDate: "",
    departureDate: "",
    days: "",
    message: "",
  });

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //   const handlePhoneChange = (value) => {
  //     setPhone(value);

  //     const formattedPhone = "+" + value;

  //     setFormData((prev) => ({
  //       ...prev,
  //       phone: formattedPhone,
  //     }));

  //     if (!value) {
  //       setPhoneError("Phone number is required");
  //       return;
  //     }

  //     if (!isValidPhoneNumber(formattedPhone)) {
  //       setPhoneError("Invalid phone number");
  //     } else {
  //       setPhoneError("");
  //     }
  //   };

  const handlePhoneChange = (value, data) => {
    const formattedPhone = "+" + value;

    setPhone(value);

    setFormData((prev) => ({
      ...prev,
      phone: formattedPhone,
      countryCode: "+" + data.dialCode,
      country: data.countryCode.toUpperCase(), // tz, in, us
    }));

    if (!value) {
      setPhoneError("Phone number is required");
      return;
    }

    if (!isValidPhoneNumber(formattedPhone)) {
      setPhoneError("Invalid phone number");
    } else {
      setPhoneError("");
    }
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "https://imarabackend.imarakilelenisafaris.com/api/enquiry",
      formData
    );

    alert(res.data.message);

  } catch (error) {
    console.error(error);
    alert("Submission failed");
  }
};

  return (
    <div className="max-w-4xl mx-auto py-16">
      <div className=" mb-4">
        <h2 className="text-3xl font-semibold mb-2 text-center ">
          Planning a Trip to Tanzania?
        </h2>
        <p className="text-gray-600 mb-6 text-center">
         Our team is always here to help
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 ">
        {/* PERSONAL DETAILS */}
        <div className="bg-gray-100 p-6 rounded ">
          <h3 className="text-xl font-semibold mb-4">Travel Dates</h3>

          <div>
            <TravelDatePicker
              onChange={(data) =>
                setFormData({
                  ...formData,
                  travelDate: data.startDate,
                  departureDate: data.endDate,
                  days: data.days,
                })
              }
            />
          </div>
        </div>

        {/* PERSONAL DETAILS */}
        <div className="bg-gray-100 p-6 rounded">
          <h3 className="text-xl font-semibold mb-4">Personal Details</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className=" mb-1 ">Name *</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                className="w-full border border-[#e5e7eb] bg-white outline-0 p-3 rounded"
              />
            </div>

            <div>
              <label className=" mb-1 ">
                Phone Number (International Format)
              </label>

              <PhoneInput
                country={"tz"}
                value={phone}
                // onChange={(phone) => setPhone(phone)}
                onChange={handlePhoneChange}
                enableSearch={true}
                inputStyle={{
                  width: "100%",
                  height: "48px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                }}
                containerStyle={{
                  width: "100%",
                }}
              />
              {phoneError && (
                <p className="text-red-500 text-sm mt-1">{phoneError}</p>
              )}
              {/* <PhoneInputField value={phone} setValue={setPhone} /> */}
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 font-medium">Email *</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="w-full border border-[#e5e7eb] bg-white outline-0 p-3 rounded"
              />
            </div>
          </div>
        </div>

        {/* TRIP DETAILS */}
        <div className="bg-gray-100 p-6 rounded">
          <h3 className="text-xl font-semibold mb-4">Trip Details</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Adults</label>
              <div className="relative">
                <select
                  name="adults"
                  onChange={handleChange}
                  className="w-full border border-[#e5e7eb] bg-white outline-0 p-3 appearance-none rounded"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
                {/* Custom Icon */}
                <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Children</label>

              <div className="relative">
                <select
                  name="children"
                  onChange={handleChange}
                  className="w-full border border-[#e5e7eb] bg-white outline-0 p-3 rounded appearance-none pr-10"
                >
                  {[0, 1, 2, 3, 4].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>

                {/* Custom Icon */}
                <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Destinations</label>
              <div className="relative">
                <select
                  name="destination"
                  onChange={handleChange}
                  className="w-full border border-[#e5e7eb] bg-white outline-0 appearance-none p-3 rounded"
                >
                  <option value="">All Destinations</option>
                  <option>Tanzania</option>
                  <option>Kenya</option>
                  <option>Uganda</option>
                  <option>Rwanda</option>
                </select>
                {/* Custom Icon */}
                <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Tour Type</label>
              <div className="relative">
                <select
                  name="tourType"
                  onChange={handleChange}
                  className="w-full border border-[#e5e7eb] bg-white outline-0 p-3 appearance-none rounded"
                >
                  <option>Midrange</option>
                  <option>Luxury</option>
                  <option>Ultra Luxury</option>
                </select>
                {/* Custom Icon */}
                <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 font-medium">
                Message / Additional Details
              </label>
              <textarea
                name="message"
                rows="4"
                onChange={handleChange}
                className="w-full border border-[#e5e7eb] bg-white outline-0 p-3 rounded"
              />
            </div>
          </div>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="bg-[#d97129] rounded-full cursor-pointer text-white px-8 py-3 font-semibold hover:bg-[#e8853f]"
        >
          ENQUIRE
        </button>
      </form>
    </div>
  );
}
