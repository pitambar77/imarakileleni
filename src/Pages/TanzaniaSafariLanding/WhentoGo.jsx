import React, { useState } from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import { WiDaySunny, WiRain, WiCloudy, WiDayCloudy } from "react-icons/wi";
import { IoMdStar } from "react-icons/io";

const monthsData = [
  {
    month: "Jan",
    icon: <WiCloudy />,
    rating: 3,
    weatherIcon: <WiCloudy />,
    view: "Good: decent wildlife, some rains",
    description1:
      "January is warm and partly wet. The southern parks and coastal areas experience short rains, but wildlife viewing is still good.",
    description2:
      "Northern Tanzania offers clear skies and fewer crowds, making it a nice time for photography and birdwatching.",
    highlights: [
      "Short rains taper off early in the month.",
      "Good time for birdwatching.",
      "Northern circuit less crowded.",
      "Mild temperatures in the highlands.",
    ],
  },
  {
    month: "Feb",
    icon: <WiDaySunny />,
    rating: 5,
    weatherIcon: <WiDaySunny />,
    view: "Fantastic: ideal for wildlife calving season",
    description1:
      "February is one of the best months for safaris. The Serengeti sees the wildebeest calving season with plenty of predator action.",
    description2:
      "Expect dry, sunny days and good road conditions across most parks.",
    highlights: [
      "Best time for wildebeest calving in the Serengeti.",
      "Superb photography conditions.",
      "Little to no rainfall.",
      "Great for both safari and beach holidays.",
    ],
  },
  {
    month: "Mar",
    icon: <WiRain />,
    rating: 2,
    weatherIcon: <WiRain />,
    view: "Average: start of long rains",
    description1:
      "March marks the beginning of Tanzania’s long rains. Game drives can be muddy, and some remote camps may close.",
    description2:
      "Despite the rain, it’s a lush and green time with excellent bird activity.",
    highlights: [
      "Start of the long rains.",
      "Dramatic green landscapes.",
      "Excellent birdwatching.",
      "Fewer tourists, quieter parks.",
    ],
  },
  {
    month: "Apr",
    icon: <WiRain />,
    rating: 3,
    weatherIcon: <WiRain />,
    view: "Fair: heavy rains continue",
    description1:
      "April is one of the wettest months. Many lodges close, but the scenery is lush and beautiful.",
    description2:
      "Wildlife is more dispersed due to water availability, but photographic opportunities abound.",
    highlights: [
      "Heavy rains, fewer visitors.",
      "Lush green landscapes.",
      "Good value on accommodations.",
    ],
  },
  {
    month: "May",
    icon: <WiRain />,
    rating: 4,
    weatherIcon: <WiRain />,
    view: "Good: end of the rains",
    description1:
      "May is the tail end of the rainy season. The parks are beautifully green, and crowds are minimal.",
    description2:
      "It’s a good time for photography and quieter safaris, though some roads may still be muddy.",
    highlights: [
      "End of the rains.",
      "Fewer tourists.",
      "Lush scenery and great light.",
    ],
  },
  {
    month: "Jun",
    icon: <WiCloudy />,
    rating: 4,
    weatherIcon: <WiCloudy />,
    view: "Great: start of dry season",
    description1:
      "June marks the start of the dry season. Wildlife congregates near waterholes, making game viewing excellent.",
    description2:
      "Mild temperatures and clear skies make it a comfortable and scenic month to visit.",
    highlights: [
      "Dry, mild weather.",
      "Superb wildlife viewing begins.",
      "Few mosquitoes.",
      "Comfortable temperatures.",
    ],
  },
  {
    month: "Jul",
    icon: <WiDaySunny />,
    rating: 5,
    weatherIcon: <WiDaySunny />,
    view: "Excellent: peak safari season",
    description1:
      "July is one of the best months to visit Tanzania. The Great Migration is in full swing in the Serengeti.",
    description2:
      "Cool mornings and dry days make for great travel and wildlife viewing.",
    highlights: [
      "Great Migration river crossings start.",
      "Cool mornings, dry days.",
      "Best time for photography.",
      "Peak season, early booking recommended.",
    ],
  },
  {
    month: "Aug",
    icon: <WiDaySunny />,
    rating: 5,
    weatherIcon: <WiDaySunny />,
    view: "Fantastic: prime safari time",
    description1:
      "August continues the prime dry season with spectacular wildlife concentrations.",
    description2:
      "The northern parks are busiest, while southern parks offer peaceful alternatives.",
    highlights: [
      "Incredible wildlife sightings.",
      "Dry and sunny weather.",
      "Perfect for all safari circuits.",
      "Very popular, book early.",
    ],
  },
  {
    month: "Sep",
    icon: <WiDaySunny />,
    rating: 5,
    weatherIcon: <WiDaySunny />,
    view: "Fantastic: the very best time to visit",
    description1:
      "September can be an excellent time to visit Tanzania. The parks become dry, concentrating wildlife near rivers.",
    description2:
      "Early in the month can be busy, but conditions are ideal for game viewing and photography.",
    highlights: [
      "Wildlife viewing is fantastic.",
      "Parks are dry and open.",
      "Cool mornings, warm days.",
      "Perfect for safaris and beaches.",
    ],
  },
  {
    month: "Oct",
    icon: <WiCloudy />,
    rating: 4,
    weatherIcon: <WiCloudy />,
    view: "Good: end of dry season",
    description1:
      "October is still good for safaris as the dry season continues, though temperatures start rising.",
    description2: "Late month may bring short rains, refreshing the landscape.",
    highlights: [
      "End of dry season.",
      "Wildlife still concentrated near rivers.",
      "Occasional showers late month.",
    ],
  },
  {
    month: "Nov",
    icon: <WiRain />,
    rating: 3,
    weatherIcon: <WiRain />,
    view: "Fair: short rains begin",
    description1:
      "November marks the start of the short rains. While showers are frequent, they’re usually brief.",
    description2:
      "Parks are less crowded, making this a good time for value travelers.",
    highlights: [
      "Short rains return.",
      "Lush scenery begins again.",
      "Fewer tourists, better rates.",
    ],
  },
  {
    month: "Dec",
    icon: <WiRain />,
    rating: 3,
    weatherIcon: <WiRain />,
    view: "Good: festive and green",
    description1:
      "December offers a festive atmosphere, with green landscapes and moderate rains.",
    description2:
      "Wildlife remains visible, and coastal regions are ideal for beach stays.",
    highlights: [
      "Green season returns.",
      "Good mix of safari and beach weather.",
      "Busy around Christmas and New Year.",
    ],
  },
];
const WhentoGo = () => {
  const [activeMonth, setActiveMonth] = useState("Sep");
  const monthData = monthsData.find((m) => m.month === activeMonth);
  return (
    <div className=" bg-white py-16 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto">
      <div className=" text-center mb-16 px-24 mx-auto text-[#222]">
        <h3 className="text-[30px] md:text-[36px]  text-[#1a1a1a] mb-4">
          When to go Tanzania safari
        </h3>

        {/* Subheading */}
        <p className="text-[18px] text-[#555] mb-10">
          Tanzania’s safari and beach areas fall naturally into four broad
          groups.
        </p>

        {/* Content Paragraphs */}
        <div className=" px-16 text-[17px] leading-[1.9] space-y-6 text-[#333]">
          <p>
            <span className="font-semibold">Tanzania’s ‘Northern Circuit’</span>{" "}
            is the term which defines the areas of the sprawling{" "}
            <a
              href="#"
              className="text-[#1c3e94] underline font-medium hover:text-[#d87028] transition"
            >
              Serengeti
            </a>
            , the stunning landscape of the{" "}
            <a
              href="#"
              className="text-[#1c3e94] underline font-medium hover:text-[#d87028] transition"
            >
              Ngorongoro Crater
            </a>
            ,{" "}
            <a
              href="#"
              className="text-[#1c3e94] underline font-medium hover:text-[#d87028] transition"
            >
              Tarangire
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-[#1c3e94] underline font-medium hover:text-[#d87028] transition"
            >
              Lake Manyara
            </a>{" "}
            national parks – the most famous safaris areas in Tanzania.
          </p>

          <p>
            For a quieter experience,{" "}
            <span className="font-semibold">Tanzania’s southern parks</span>{" "}
            offer unspoiled wilderness areas dotted with a smaller number of
            safari camps. The lakes and waterways of{" "}
            <a
              href="#"
              className="text-[#1c3e94] underline font-medium hover:text-[#d87028] transition"
            >
              Nyerere National Park
            </a>{" "}
            (formerly Selous) offer magical boating safaris, while{" "}
            <a
              href="#"
              className="text-[#1c3e94] underline font-medium hover:text-[#d87028] transition"
            >
              Ruaha
            </a>
            ’s rugged terrain is excellent for walking safaris and is home to a
            very strong population of lions.
          </p>

          <p>
            Nearer to Africa’s heart,{" "}
            <span className="font-semibold">Western Tanzania</span> is harder to
            reach, so few visitors come, but two parks are amazing.{" "}
            <a
              href="#"
              className="text-[#1c3e94] underline font-medium hover:text-[#d87028] transition"
            >
              Katavi National Park
            </a>{" "}
            protects a vast plain: the battleground for buffalo and lion, whilst
            an hour’s flight away, the spectacular{" "}
            <a
              href="#"
              className="text-[#1c3e94] underline font-medium hover:text-[#d87028] transition"
            >
              Mahale Mountains
            </a>
            rise sheer from the shores of Lake Tanganyika – providing probably
            the best place to track wild chimpanzees in Africa.
          </p>

          <p>
            Lush and tropical,{" "}
            <span className="font-semibold">Tanzania’s coast & islands</span>{" "}
            are the venue for simple beach retreats to luxurious lodges – with
            the odd private island included.
          </p>
        </div>
      </div>

      <div className="border border-gray-200 rounded-md shadow-sm  bg-white">
        {/* --- Month Tabs --- */}
        <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 text-center border-b border-gray-200">
          {monthsData.map((m) => (
            <button
              key={m.month}
              onClick={() => setActiveMonth(m.month)}
              className={`flex flex-col items-center py-4 text-sm font-medium transition-all ${
                activeMonth === m.month
                  ? "text-[#d87028] border-b-[3px] border-[#d87028] bg-white"
                  : "text-gray-400 hover:text-[#d87028]"
              }`}
            >
              <div className="text-2xl">{m.icon}</div>
              <span className="text-[13px] font-semibold mt-1">{m.month}</span>
              <div className="flex justify-center mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    size={10}
                    className={`${
                      i < m.rating ? "text-[#d87028]" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </button>
          ))}
        </div>

        {/* --- Active Month Content --- */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Description */}
          <div>
            <h3 className="text-xl font-semibold text-[#222] mb-4">
              Tanzania in {monthData.month}
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {monthData.description1}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {monthData.description2}
            </p>
          </div>

          {/* Right Column - Highlights */}
          <div className="flex flex-col justify-center">
            {monthData.highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-2 mb-3">
                <FaCheckCircle className="text-[#d87028] mt-1" />
                <p className="text-gray-700 text-[15px]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Divider --- */}
        <div className="border-t border-dotted border-gray-300 mx-8 my-4"></div>

        {/* --- Footer Section --- */}
        <div className=" grid grid-cols-2 gap-8 items-center px-8 pb-8">
          {/* Our View */}
          <div className="flex flex-col">
            <p className="uppercase text-gray-500 text-sm font-semibold mb-4 ">
              Our View
            </p>
            <div className=" flex items-center">
              <div className="flex items-center space-x-1">
                {Array(monthData.rating)
                  .fill()
                  .map((_, i) => (
                    <div className="bg-[#d87028] p-1 rounded-sm"> <IoMdStar key={i} className=" text-white text-xl" /></div>
                   
                    
                  ))}
              </div>
              <p className="ml-3 text-[#222] font-medium text-[15px]">
                {monthData.view}
              </p>
            </div>
          </div>

          {/* Weather in Month */}
          <div className="">
            <p className="uppercase text-gray-500 text-sm mb-4 font-semibold">
              Weather in {monthData.month}
            </p>
            <div className="bg-[#fde4d0] p-1 w-10 text-[#d87028] text-3xl  rounded-md">
              {monthData.weatherIcon}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhentoGo;
