import React from "react";
import Banner from "../../components/Banner";
import {
  FaCalendarAlt,
  FaHourglassHalf,
  FaShieldAlt,
  FaStar,
  FaWallet,
} from "react-icons/fa";
import AboutInfoSection from "./AboutInfoSection";
import BookWithConfidence from "../Home/BookWithConfidence";
import OnTheRoadSection from "./OnTheRoadSection";
import OffTheRoadSection from "./OffTheRoadSection";
import SafariFeatureSection from "./SafariFeatureSection";

const AboutUs = () => {
  return (
    <>
      <div
        className="relative w-full h-[64vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url('https://b-cdn.springnest.com/media/img/xz/ruaha_foxes_caseypratt_loveafrica-5126f577635.jpg?crop=6048%2C2419%2C0%2C1605&width=3000')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="w-full bg-[#d76e28]">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-white text-xs md:text-sm font-semibold">
          <span className="inline-flex items-center gap-2">
            RATED 4.7 / 5
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <span className="opacity-90">
              | BASED ON 25,000 VERIFIED REVIEWS
            </span>
          </span>
        </div>
      </div>
      <div className=" w-full bg-[#fedec7] py-16 ">
        <div className=" text-center max-w-3xl mx-auto  space-y-3 ">
          <h2 className=" text-xl md:text-3xl capitalize text-center">
            About Us
          </h2>
          <h3 className=" font-extrabold">
            From personsl passion to award-winning,bespoke tour operator
          </h3>
          <p>
            Grown from a deep love of the African contient and its people,
            Expert Africa is a dedicated team of travel specialists crafting
            high-quality, tailore-made trips to Sourthern and East Africa.
          </p>
        </div>
      </div>

      <AboutInfoSection />
      <div className="bg-[#fedec7]">
        {" "}
        {/* soft peach background */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
          {/* Heading centered */}
          <h2 className="text-center text-2xl md:text-3xl font-bold text-black mb-16 capitalize">
            Book with confidence
          </h2>

          {/* Features row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center ">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-14 h-14 rounded-full bg-black flex items-center justify-center">
                <FaWallet className="text-[#f3a85f] w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-black">
                  Lock in your spot with a{" "}
                  <span className="font-bold">$200 deposit</span>
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-14 h-14 rounded-full bg-black flex items-center justify-center">
                <FaHourglassHalf className="text-[#f3a85f] w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-black">
                  <u className="font-bold">Pay monthly</u> or bi-weekly
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-14 h-14 rounded-full bg-black flex items-center justify-center">
                <FaCalendarAlt className="text-[#f3a85f] w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-black">
                  Amend your booking up to{" "}
                  <span className="font-bold">60 days</span> pre-trip
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-14 h-14 rounded-full bg-black flex items-center justify-center">
                <FaShieldAlt className="text-[#f3a85f] w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-black">
                  Plans changed? Your payments are protected
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-16">
            <button
              className="px-8 py-3 rounded-full border-2 border-black text-black font-semibold bg-transparent hover:bg-black hover:text-white transition"
              aria-label="Find out more"
            >
              FIND OUT MORE
            </button>
          </div>
        </div>
      </div>

      <OnTheRoadSection/>
      <OffTheRoadSection/>
      <SafariFeatureSection/>
    </>
  );
};

export default AboutUs;
