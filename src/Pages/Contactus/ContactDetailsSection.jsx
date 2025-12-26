import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactDetailsSection = () => {
  return (
    <section className="w-full bg-white py-16">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl mb-12 ">
        Don't Hesitate to Contact Us
      </h2>

      {/* Card */}
      <div className="px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 ">
        <div className="bg-gradient-to-r from-[#d87028] to-[#d87028] rounded-md py-12 px-6 md:px-12">
          <h3 className="text-center text-2xl text-white mb-12">
            Contact Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-white">
            
            {/* Office Location */}
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-[#3c2313] flex items-center justify-center">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <div>
                <h4 className="text-lg font-bold uppercase tracking-wide">
                  Office Location
                </h4>
                <p className="text-sm opacity-90">
                  CCM Mkoa Moshi Kilimanjaro
                </p>
              </div>
            </div>

            {/* Call / WhatsApp */}
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-[#3c2313] flex items-center justify-center">
                <FaPhoneAlt className="text-white text-xl" />
              </div>
              <div>
                <h4 className="text-lg font-bold uppercase tracking-wide">
                  Call / WhatsApp
                </h4>
                <p className="text-sm opacity-90">
                  +255 748 002 696
                </p>
              </div>
            </div>

            {/* Email Address */}
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-[#3c2313] flex items-center justify-center">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <div>
                <h4 className="text-lg font-bold uppercase tracking-wide">
                  Email Address
                </h4>
                <p className="text-sm opacity-90">
                  info@imarakilelenisafaris.com
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetailsSection;
