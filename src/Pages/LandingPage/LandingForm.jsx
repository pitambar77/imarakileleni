

import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import HeroSection from "./HeroSection";
import RouteForKilimanjaro from "./RouteForKilimanjaro";
import PeopleClimbing from "./PeopleClimbing";
import ClimbingDate from "./ClimbingDate";
import ContactDetails from "./ContactDetails";

const LandingForm = () => {
  const routeRef = useRef(null);
  const peopleRef = useRef(null);
  const dateRef = useRef(null);
  const contactRef = useRef(null);

  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState("");

  const [formData, setFormData] = useState({
    route: "",
    people: "",
    travelDate: "",
    contact: {},
  });

  const updateFormData = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

//   const validateForm = () => {
//   if (!formData.route) {
//     routeRef.current?.scrollIntoView({ behavior: "smooth" });
//     return "Please select a Kilimanjaro route.";
//   }

//   if (!formData.people) {
//     peopleRef.current?.scrollIntoView({ behavior: "smooth" });
//     return "Please select how many people are climbing.";
//   }

//   if (!formData.travelDate) {
//     dateRef.current?.scrollIntoView({ behavior: "smooth" });
//     return "Please select your climbing date.";
//   }

//   if (!contactData.countryCode) {
//   contactRef.current?.scrollIntoView({ behavior: "smooth" });
//   return "Please select your country code.";
// }


//   return null;
// };

 
//   const handleFinalSubmit = async (contactData) => {
//   try {
//     const finalPayload = {
//       ...formData,
//       contact: contactData,
//     };

//     // const res = await fetch("https://imarabackend.imarakilelenisafaris.com/api/kiliform", {
//     const res = await fetch("http://localhost:8000/api/kiliform", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(finalPayload),
//     });

//     const data = await res.json();

//     if (!res.ok) throw new Error(data.message);

//     toast.success("Your request has been sent successfully!");
//     setTimeout(() => navigate("/thank-you"), 2500);
//   } catch (err) {
//     toast.error(err.message || "Something went wrong");
//   }
// };

const validateForm = (contactData) => {
  if (!formData.route) {
    routeRef.current?.scrollIntoView({ behavior: "smooth" });
    return "Please select a Kilimanjaro route.";
  }

  if (!formData.people) {
    peopleRef.current?.scrollIntoView({ behavior: "smooth" });
    return "Please select how many people are climbing.";
  }

  if (!formData.travelDate) {
    dateRef.current?.scrollIntoView({ behavior: "smooth" });
    return "Please select your climbing date.";
  }

  if (!contactData.countryCode) {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
    return "Please select your country code.";
  }

  if (!contactData.phoneNumber) {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
    return "Please enter your phone number.";
  }

  if (!contactData.nationality) {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
    return "Please select your nationality.";
  }

  return null;
};

// const handleFinalSubmit = async (contactData) => {
//   const validationError = validateForm();

//   if (validationError) {
//     setSubmitError(validationError);
//     return;
//   }

//   setSubmitError("");

//   try {
//     const finalPayload = {
//       ...formData,
//       contact: contactData,
//     };

//     const res = await fetch("http://localhost:8000/api/kiliform", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(finalPayload),
//     });

//     const data = await res.json();

//     if (!res.ok) throw new Error(data.message);

//     toast.success("Your request has been sent successfully!");
//     setTimeout(() => navigate("/thank-you"), 2500);
//   } catch (err) {
//     toast.error(err.message || "Something went wrong");
//   }
// };

const handleFinalSubmit = async (contactData) => {
  const validationError = validateForm(contactData); // ✅ FIX

  if (validationError) {
    setSubmitError(validationError);
    return;
  }

  setSubmitError("");

  try {
    const finalPayload = {
      ...formData,
      contact: contactData,
    };

    const res = await fetch("https://imarabackend.imarakilelenisafaris.com/api/kiliform", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalPayload),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    toast.success("Your request has been sent successfully!");
    setTimeout(() => navigate("/thank-you"), 2500);
  } catch (err) {
    toast.error(err.message || "Something went wrong");
  }
};


  return (
    <>
      <HeroSection
        scrollToForm={() =>
          routeRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />

      <RouteForKilimanjaro
        ref={routeRef}
        onChange={(route) => updateFormData("route", route)}
        scrollToPlanningDays={() =>
          peopleRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />

      <PeopleClimbing
        ref={peopleRef}
        onChange={(people) => updateFormData("people", people)}
        scrollToPlanningDays={() =>
          dateRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />

      <ClimbingDate
        ref={dateRef}
        onChange={(date) => updateFormData("travelDate", date)}
        scrollToContactInformation={() =>
          contactRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />

      <ContactDetails
        ref={contactRef}
        onSubmit={handleFinalSubmit}
        submitError={submitError}
      />
    </>
  );
};

export default LandingForm;
