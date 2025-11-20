import React from 'react'
import VechileInfo from './VechileInfo'
import VehicleAndCabinSection from './VehicleAndCabinSection'
import SafariExtrasSection from './SafariExtrasSection'
import FaqSection from './FaqSection'
import BookWithConfidence from '../../Home/BookWithConfidence'
import Featured from '../../Home/Featured'

const SafariFleet = () => {
  return (
    <div>
         <div
        className="relative w-full h-[64vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url('https://www.tanzania-experience.com/wp-content/uploads/2025/05/tanzania-in-seven-days.jpg')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        <h2 className=" text-xl md:text-5xl text-white uppercase z-10 ">
          OUR SAFARI VEHICLES
        </h2>
      </div>
      <VechileInfo/>
      <VehicleAndCabinSection/>
      <SafariExtrasSection/>
      <FaqSection/>
      <BookWithConfidence/>
      <Featured/>
    </div>
  )
}

export default SafariFleet