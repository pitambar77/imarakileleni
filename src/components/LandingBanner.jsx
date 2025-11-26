import React from 'react'

const LandingBanner = ({bannerImg,title}) => {
  return (
    <div
        className="relative w-full h-[64vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        <h2 className=" text-xl md:text-5xl text-white uppercase z-10 ">
          {title}
        </h2>
      </div>
  )
}

export default LandingBanner