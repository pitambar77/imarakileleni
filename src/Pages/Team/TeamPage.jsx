import React from 'react'

const TeamPage = () => {
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
           SAFARI Guides
        </h2>
      </div>
    </div>
  )
}

export default TeamPage