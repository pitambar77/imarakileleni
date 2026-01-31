import { useState } from 'react';

const ContactDetails = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: 'USA (+1)',
    phoneNumber: '',
    nationality: 'American',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section className="py-8 md:py-10 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto">
      <div className="">
        {/* Contact Form Section */}
        <div className="mb-10 sm:mb-14 text-center sm:text-left">
          <h2 className="text-2xl md:text-[32px] lg:text-[36px] font-bold text-[#1a1a1a] mb-4 capitalize">
            4. Your contact details
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#555] mb-6 md:mb-10">
            We’ll email your Kilimanjaro trek quote only. Your details stay private and are never shared or used elsewhere.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-7xl mx-auto">
          {/* First Row - Full Name and Email */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            {/* Full Name */}
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 sm:py-3.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-200 text-sm sm:text-base placeholder-gray-400"
                required
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 sm:py-3.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-200 text-sm sm:text-base placeholder-gray-400"
                required
              />
            </div>
          </div>

          {/* Second Row - Country Code, Phone Number, and Nationality */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
            {/* Country Code */}
            <div>
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="w-full px-4 py-3 sm:py-3.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-200 text-sm sm:text-base text-gray-700 bg-white appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.75rem center',
                  backgroundSize: '1.25rem'
                }}
              >
                <option value="USA (+1)">USA (+1)</option>
                <option value="UK (+44)">UK (+44)</option>
                <option value="Canada (+1)">Canada (+1)</option>
                <option value="Australia (+61)">Australia (+61)</option>
                <option value="India (+91)">India (+91)</option>
                <option value="Germany (+49)">Germany (+49)</option>
                <option value="France (+33)">France (+33)</option>
                <option value="China (+86)">China (+86)</option>
                <option value="Japan (+81)">Japan (+81)</option>
              </select>
            </div>

            {/* Phone Number */}
            <div>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 sm:py-3.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-200 text-sm sm:text-base placeholder-gray-400"
                required
              />
            </div>

            {/* Nationality */}
            <div className="sm:col-span-2 lg:col-span-1">
              <select
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="w-full px-4 py-3 sm:py-3.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-200 text-sm sm:text-base text-gray-700 bg-white appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.75rem center',
                  backgroundSize: '1.25rem'
                }}
              >
                <option value="American">American</option>
                <option value="British">British</option>
                <option value="Canadian">Canadian</option>
                <option value="Australian">Australian</option>
                <option value="Indian">Indian</option>
                <option value="German">German</option>
                <option value="French">French</option>
                <option value="Chinese">Chinese</option>
                <option value="Japanese">Japanese</option>
              </select>
            </div>
          </div>

          {/* Message Textarea */}
          <div className="mb-6 sm:mb-8">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type Your Message..."
              rows="4"
              className="w-full px-4 py-3 sm:py-3.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-200 text-sm sm:text-base placeholder-gray-400 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#d87028] text-white px-[21px] py-3 rounded-full font-semibold hover:bg-orange-700 cursor-pointer"
            >
              REQUEST FREE QUOTE
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactDetails;