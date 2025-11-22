


// import React, { useState } from "react";
// import { FaPlus, FaMinus } from "react-icons/fa";

// const FAQSection = ({ title, faqs }) => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="bg-white py-16 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28">

//       {/* Title */}
//       {title && (
//         <h2 className="text-[28px] md:text-3xl text-center capitalize font-extrabold text-[#111] mb-12">
//           {title}
//         </h2>
//       )}

//       <div className="border-t border-[#111]/30">
//         {faqs?.map((faq, index) => (
//           <div
//             key={index}
//             className="border-b border-[#111]/30 overflow-hidden"
//           >
//             {/* Question */}
//             <button
//               onClick={() => toggleFAQ(index)}
//               className={`w-full flex justify-between items-center text-left text-[18px] font-semibold py-5 px-4 transition-all duration-300 ${
//                 openIndex === index
//                   ? "bg-[#fde6d5] text-[#111]"
//                   : "hover:bg-[#f7f7f7] text-[#111]"
//               }`}
//             >
//               {faq.question}

//               <span className="text-[14px] text-[#111]">
//                 {openIndex === index ? <FaMinus /> : <FaPlus />}
//               </span>
//             </button>

//             {/* Multi-Block Answer */}
//             <div
//               className={`transition-all duration-500 ease-in-out overflow-hidden ${
//                 openIndex === index
//                   ? "max-h-[1000px] opacity-100"
//                   : "max-h-0 opacity-0"
//               }`}
//             >
//               <div className="px-6 pb-5 text-[#333] text-[16px] leading-relaxed bg-white space-y-4">
//                 {faq.answerBlocks?.map((block, i) => {
//                   if (block.type === "paragraph") {
//                     return <p key={i}>{block.text}</p>;
//                   }

//                   if (block.type === "heading") {
//                     return (
//                       <h3 key={i} className="text-xl font-bold text-[#222]">
//                         {block.text}
//                       </h3>
//                     );
//                   }

//                   if (block.type === "list") {
//                     return (
//                       <ul key={i} className="list-disc ml-6 space-y-2">
//                         {block.items.map((item, idx) => (
//                           <li key={idx}>{item}</li>
//                         ))}
//                       </ul>
//                     );
//                   }

//                   return null;
//                 })}
//               </div>
//             </div>

//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FAQSection;


import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQSection = ({ title, faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28">

      {/* Title */}
      {title && (
        <h2 className="text-[28px] md:text-3xl text-center capitalize font-extrabold text-[#111] mb-12">
          {title}
        </h2>
      )}

      <div className="border-t border-[#111]/30">
        {faqs?.map((faq, index) => (
          <div
            key={index}
            className="border-b border-[#111]/30 overflow-hidden"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex justify-between items-center text-left text-[18px] font-semibold py-5 px-4 transition-all duration-300 ${
                openIndex === index
                  ? "bg-[#fde6d5] text-[#111]"
                  : "hover:bg-[#f7f7f7] text-[#111]"
              }`}
            >
              {faq.question}

              <span className="text-[14px] text-[#111]">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </button>

            {/* ANSWER */}
            <div
              className={`transition-all  duration-500 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "max-h-[2000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-5 pt-4 text-[#333] text-[16px] leading-relaxed bg-gray-50 space-y-4">

                {faq.answerBlocks?.map((block, i) => {

                  // Support MULTIPLE PARAGRAPHS inside 1 block
                  if (block.type === "paragraph") {
                    return (
                      <div key={i} className="space-y-3">
                        {Array.isArray(block.text)
                          ? block.text.map((para, idx) => (
                              <p key={idx}>{para}</p>
                            ))
                          : <p>{block.text}</p>}
                      </div>
                    );
                  }

                  if (block.type === "heading") {
                    return (
                      <h3 key={i} className="text-lg font-bold text-[#222]">
                        {block.text}
                      </h3>
                    );
                  }

                  if (block.type === "list") {
                    return (
                      <ul key={i} className="list-disc ml-6 space-y-2">
                        {block.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    );
                  }

                  return null;
                })}
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
