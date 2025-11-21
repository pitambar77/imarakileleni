import React from 'react'
import AboutAfricaSection from './AboutAfricaSection'
import SafariExpertsSection from './SafariExpertsSection'
import AdventureTour from './AdventureTour'
import BookWithConfidence from '../Home/BookWithConfidence'
import Featured from '../Home/Featured'

const TeamPage = () => {
  return (
    <div>
         <div
        className="relative w-full h-[64vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url('https://www.wildernessdestinations.com/media/3imn2iov/wilderness-experiences-guided-walks-landscape.jpg')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        <h2 className=" text-xl md:text-5xl text-white uppercase z-10 ">
           SAFARI Guides
        </h2>
      </div>
      <AboutAfricaSection/>
      <SafariExpertsSection/>
      <AdventureTour/>
      <BookWithConfidence/>
      <Featured/>
    </div>
  )
}

export default TeamPage