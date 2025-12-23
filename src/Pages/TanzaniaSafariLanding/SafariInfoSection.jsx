// import React from "react";

// const SafariInfoSection = () => {
//   return (
//     <section className="bg-[#fcfcfc] py-16 ">
//       <div className=" grid grid-cols-1 lg:grid-cols-[62%_38%] justify-between px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto">
//         {/* LEFT COLUMN */}
//         <div className="text-[#222] leading-relaxed">
//           {/* Small Label */}
//           <p className="uppercase text-sm font-semibold tracking-wider text-[#7a7a7a] mb-4">
//             Tanzania Safaris
//           </p>

//           {/* Main Heading */}
//           <h3 className="font-serif text-[30px] md:text-[36px] leading-snug font-bold text-[#111] mb-8">
//             In Kilimanjaro's footprint, Tanzania mesmerizes with the great
//             wildebeest migration and vast wildlife parks
//           </h3>

//           {/* Paragraphs with Auto Column Flow */}
//           <div className="text-[16px] text-[#333] space-y-4 leading-[1.8] [column-count:2] [column-gap:3rem]">
//             <p className="italic text-[#444]">
//               “We are seasoned off-the-beaten-track travellers and I marvel
//               that everything worked exactly as it was supposed to,” wrote a
//               recent traveller of his Expert Africa safari. “Here we were, in
//               the middle of central Tanzania, waiting for a 10:05 flight.
//               Guess what? At 10:03, there was the plane, buzzing animals off
//               the grass runway, then touching down to pick us up. It happened
//               every time. Dazzling!”
//             </p>

//             <p>
//               The same traveller went on to describe visceral wildlife
//               encounters: “Having a leopard on your tent porch is not
//               something I will soon forget. This is not Disneyland.”
//             </p>

//             <p>
//               Not Disneyland could be Tanzania’s national motto. “We had to
//               keep pinching ourselves,” wrote a first-time visitor, “that we
//               were actually there, in the places we had only read about or
//               seen on TV.”
//             </p>

//             <p>
//               Tanzania makes a sensational impact. Over one-third of this
//               expansive land is dedicated to safeguarding its diverse array
//               of wildlife: an irresistible draw for the adventurous.
//             </p>

//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="flex justify-end">
//           <img
//             src="https://serengetiwildlifesafaris.com/wp-content/uploads/2025/04/serengeti-wildlife-safaris-14-1024x1024.jpg"
//             alt="Tanzania Safari Giraffe"
//             className="rounded-md w-full max-w-[420px] object-cover shadow-sm"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SafariInfoSection;

// responsive

// import React from "react";

// const SafariInfoSection = ({ overview }) => {
//   if (!overview) return null;
//   console.log(overview)
  
//   return (
//     <section className="bg-[#fcfcfc] py-16">
//       <div className="grid grid-cols-1 lg:grid-cols-[62%_38%] gap-10 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto">
//         {/* LEFT COLUMN */}
//         <div className="text-[#222] leading-relaxed">
//           <p className="uppercase text-sm font-semibold tracking-wider text-[#7a7a7a] mb-4">
//             {overview.subtitle}
//           </p>

//           <h3 className="font-serif text-[26px] md:text-[32px] lg:text-[36px] leading-snug font-bold text-[#111] mb-8">
//             {overview.title}
//           </h3>

//           {/* Responsive Columns */}
//           {/* <div className="text-[16px] text-[#333] space-y-4 leading-[1.8] 
//                           [column-count:1] md:[column-count:1] lg:[column-count:2] 
//                           [column-gap:2rem] lg:[column-gap:3rem]">
//             <p className="italic text-[#444]">
//               “We are seasoned off-the-beaten-track travellers and I marvel
//               that everything worked exactly as it was supposed to,” wrote a
//               recent traveller of his Expert Africa safari. “Here we were, in
//               the middle of central Tanzania, waiting for a 10:05 flight.
//               Guess what? At 10:03, there was the plane, buzzing animals off
//               the grass runway, then touching down to pick us up. It happened
//               every time. Dazzling!”
//             </p>

//             <p>
//               The same traveller went on to describe visceral wildlife
//               encounters: “Having a leopard on your tent porch is not something
//               I will soon forget. This is not Disneyland.”
//             </p>

//             <p>
//               Not Disneyland could be Tanzania’s national motto. “We had to keep
//               pinching ourselves,” wrote a first-time visitor, “that we were
//               actually there, in the places we had only read about or seen on
//               TV.”
//             </p>

//             <p>
//               Tanzania makes a sensational impact. Over one-third of this
//               expansive land is dedicated to safeguarding its diverse array of
//               wildlife: an irresistible draw for the adventurous.
//             </p>
//           </div> */}
//           <div
//             className="text-[16px] text-[#333] space-y-4 leading-[1.8]
//               [column-count:1] lg:[column-count:2]
//               [column-gap:2rem] lg:[column-gap:3rem]"
//           >
//             {overview.description.map((block, i) => {
//               if (block.type === "header") {
//                 return (
//                   <h4 key={i} className="font-semibold text-lg">
//                     {block.content}
//                   </h4>
//                 );
//               }

//               if (block.type === "list") {
//                 return (
//                   <ul key={i} className="list-disc pl-5 space-y-1">
//                     {Array.isArray(block.content) ? (
//                       block.content.map((li, idx) => <li key={idx}>{li}</li>)
//                     ) : (
//                       <li>{block.content}</li>
//                     )}
//                   </ul>
//                 );
//               }

//               return (
//                 <p key={i} className="text-[#444]">
//                   {block.content}
//                 </p>
//               );
//             })}
//           </div>
//         </div>

//         <div className="flex justify-center lg:justify-end">
//           {overview.image && (
//             <img
//               src={overview.image}
//               alt={overview.title}
//               className=" rounded-md w-full max-w-[420px]
//               h-auto md:h-[420px] lg:h-[560px]
//               object-cover shadow-sm"
//             />
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SafariInfoSection;


import React from "react";

const SafariInfoSection = ({
  overview,
  imagePosition = "right",
  bg = "#fcfcfc",
}) => {
  if (!overview) return null;

  return (
    <section id="overview" style={{ backgroundColor: bg }} className="py-16">
      <div
        className={`
          grid grid-cols-1 lg:grid-cols-[62%_38%] 
          ${imagePosition === "left" ? "lg:grid-cols-[38%_62%]" : ""}
          gap-10 lg:gap-0
          px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28
          mx-auto
        `}
      >
        {/* TEXT COLUMN */}
        <div
          className={`
            text-[#222] leading-relaxed
            ${imagePosition === "left" ? "order-2 lg:order-1" : ""}
          `}
        >
          {/* Subtitle */}
          {overview.subtitle && (
            <p className="uppercase text-sm font-semibold tracking-wider text-[#7a7a7a] mb-4">
              {overview.subtitle}
            </p>
          )}

          {/* Title */}
          <h3 className="text-[26px] md:text-[30px] lg:text-[36px] leading-snug font-bold text-[#111] mb-6 md:mb-8">
            {overview.title}
          </h3>

          {/* Description blocks */}
          <div
            className="
              text-[15px] md:text-[16px] text-[#333] space-y-4 leading-[1.8]
              md:[column-count:2] md:[column-gap:3rem]
            "
          >
            {overview.description?.map((block, index) => {
              if (block.type === "list") {
                return (
                  <ul key={index} className="list-disc pl-5 space-y-2">
                    <li>{block.content}</li>
                  </ul>
                );
              }

              // default paragraph
              return (
                <p key={index} className="text-[#444]">
                  {block.content}
                </p>
              );
            })}
          </div>
        </div>

        {/* IMAGE COLUMN */}
        <div
          className={`flex justify-center lg:justify-end ${
            imagePosition === "left" ? "order-1 lg:order-2" : ""
          }`}
        >
          {overview.image && (
            <img
              src={overview.image}
              alt={overview.title}
              className="
                rounded-md w-full max-w-[420px]
                h-auto md:h-[420px] lg:h-[560px]
                object-cover shadow-sm
              "
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default SafariInfoSection;
