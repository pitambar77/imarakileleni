import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    updates: false,
    privacy: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.firstName.trim())
      tempErrors.firstName = "First Name is required.";
    if (!formData.lastName.trim())
      tempErrors.lastName = "Last Name is required.";

    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = "Enter a valid email address.";
      }
    }

    if (!formData.message.trim()) tempErrors.message = "Message is required.";

    if (!formData.privacy)
      tempErrors.privacy = "You must accept the privacy policy.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form Submitted:", formData);
      setSubmitted(true);

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        updates: false,
        privacy: false,
      });
      setErrors({});
    }
  };

  return (
    <section className="py-16 px-4 md:px-12 lg:px-18 2xl:px-28 max-w-4xl mx-auto">
      <h2 className="text-center text-3xl capitalize font-semibold mb-10">
        Get in touch
      </h2>

      {submitted && (
        <p className="text-green-600 text-center mb-4">
          ✅ Your message was sent successfully!
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 ">
        {/* First Name */}
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name *"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border rounded px-4 py-3"
          />
          {errors.firstName && (
            <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name *"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border rounded px-4 py-3"
          />
          {errors.lastName && (
            <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-4 py-3"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            name="message"
            placeholder="Write your message here *"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded px-4 py-3"
          ></textarea>
          {errors.message && (
            <p className="text-red-600 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Checkboxes */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            name="updates"
            checked={formData.updates}
            onChange={handleChange}
            className="mt-1"
          />
          <p className="text-gray-700 text-sm">
            Keep me updated on the latest Contiki news, deals and latest trips.
            You can unsubscribe at any time.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            name="privacy"
            checked={formData.privacy}
            onChange={handleChange}
            className="mt-1"
          />
          <p className="text-gray-700 text-sm">
            By checking this box, you accept our privacy policy *
          </p>
        </div>
        {errors.privacy && (
          <p className="text-red-600 text-sm -mt-4">{errors.privacy}</p>
        )}

        {/* Submit Button */}
        <div className=" flex justify-end mt-10 ">
          <button
            type="submit"
            className="bg-[#d87328] text-white px-10 py-3 rounded-full font-semibold hover:bg-orange-700 transition block mx-auto"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
