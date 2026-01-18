// import React from "react";

// const KilimanjaroRoute = () => {
//   return (
//     <section className="bg-[#f8d8c3] py-16 px-4 md:px-10 lg:px-18 2xl:px-28">
//       {/* HEADING */}
//       <div className="text-center max-w-4xl mx-auto mb-12">
//         <h2 className="text-[28px] md:text-3xl font-extrabold text-[#111]">
//           Mount Kilimanjaro Climbing
//         </h2>

//         <p className="text-[16px] text-gray-700 leading-relaxed mt-4">
//           Because for us, inclusivity isn’t a season or a slogan. It’s the engine that
//           keeps every journey moving forward: today, tomorrow and for generations to come.
//         </p>

//         <p className="text-[16px] text-gray-700 leading-relaxed mt-4">
//           Out, proud and wanna celebrate with us? Check out our Pride trips below.
//           Wanna learn more about our work to support the LGBTQIA+ community worldwide?
//           Just keep readin’.
//         </p>
//       </div>

//       {/* MAP IMAGE */}
//       <div className="flex justify-center">
//         <img
//           src="https://www.kilimanjarobrothers.com/wp-content/uploads/2023/12/Artboard-1.png"
//           alt="Mount Kilimanjaro Map"
//           className="w-full max-w-4xl h-auto md:h-[600px] object-cover rounded-md shadow-sm"
//         />
//       </div>
//     </section>
//   );
// };


// export default KilimanjaroRoute


import React from "react";

const KilimanjaroRoute = ({ overview }) => {
  if (!overview || !overview.length) return null;

  return (
    <section className="bg-[#f8d8c3] py-8 md:py-16 px-4 md:px-10 lg:px-18 2xl:px-28">
      {overview.map((item, index) => (
        <div key={item._id || index}>
          {/* HEADING */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-[28px] md:text-3xl font-extrabold text-[#111]">
              {item.title}
            </h2>

            {item.description?.map((block, i) => {
              if (block.type === "paragraph") {
                return (
                  <p
                    key={i}
                    className="text-[16px] text-gray-700 leading-relaxed mt-4"
                  >
                    {block.content}
                  </p>
                );
              }

              if (block.type === "header") {
                return (
                  <h3
                    key={i}
                    className="text-lg font-semibold text-gray-800 mt-6"
                  >
                    {block.content}
                  </h3>
                );
              }

              if (block.type === "list") {
                return (
                  <ul
                    key={i}
                    className="list-disc list-inside text-gray-700 mt-4 space-y-1"
                  >
                    {block.content.map((li, idx) => (
                      <li key={idx}>{li}</li>
                    ))}
                  </ul>
                );
              }

              return null;
            })}
          </div>

          {/* IMAGE */}
          {item.image && (
            <div className="flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full max-w-4xl h-auto md:h-[600px] object-cover rounded-md "
              />
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default KilimanjaroRoute;
