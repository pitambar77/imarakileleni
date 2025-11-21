import React from 'react'
import SafariToursSection from '../SafariDestination/SafariToursSection'
import KilimanjaroRoute from './KilimanjaroRoute'
import AdventureTour from '../../components/AdventureTour'
import TanzaniaExpertCTA from './TanzaniaExpertCTA'
import WhyJoin from './WhyJoin'
import Highlights from '../../components/Highlights'

const data = [
          {
            image:
              "https://www.contiki.com/media/wcxfjs4s/south-america-peru.jpg",
            heading:
              "Whether it’s backpacking, camping or sailing, a Contiki adventure tour will totally redefine your idea of broadening your mind.",
            description:
              "You’ll traverse Norway in search of Arctic whales and the Northern Lights. You’ll kayak along Vietnam’s majestic Nho Que River. You’ll ride a horse on the jawdropping plains of Patagonia. Adventure travel is all about unleashing a new side of yourself and discovering what you’re capable of, and that’s exactly what you’ll do on these trips - whether you’re trekking Peru’s Inca Trail or swimming in the Great Barrier Reef.",
          },
          {
            image:
              "https://www.contiki.com/media/jqah4mlo/bungy-jumping-in-new-zealand.jpg",
            heading:
              "Adventure travel is all about the unbelievable people you meet, the new foods you try and the activities you embark on.",
            description:
              "What comes to mind when you hear the word ‘adventure’? Exploring cultural hotspots in historical cities, jumping out of planes over the gobsmacking landscapes of New Zealand or exploring the plains of Africa on a wildlife safari? Whatever you’re looking for on your adventure tour, it’s ready and waiting with Contiki.",
          },
          {
            image:
              "https://www.contiki.com/media/wcxfjs4s/south-america-peru.jpg",
            heading:
              "Whether it’s backpacking, camping or sailing, a Contiki adventure tour will totally redefine your idea of broadening your mind.",
            description:
              "You’ll traverse Norway in search of Arctic whales and the Northern Lights. You’ll kayak along Vietnam’s majestic Nho Que River. You’ll ride a horse on the jawdropping plains of Patagonia. Adventure travel is all about unleashing a new side of yourself and discovering what you’re capable of, and that’s exactly what you’ll do on these trips - whether you’re trekking Peru’s Inca Trail or swimming in the Great Barrier Reef.",
          },
          {
            image:
              "https://www.contiki.com/media/jqah4mlo/bungy-jumping-in-new-zealand.jpg",
            heading:
              "Adventure travel is all about the unbelievable people you meet, the new foods you try and the activities you embark on.",
            description:
              "What comes to mind when you hear the word ‘adventure’? Exploring cultural hotspots in historical cities, jumping out of planes over the gobsmacking landscapes of New Zealand or exploring the plains of Africa on a wildlife safari? Whatever you’re looking for on your adventure tour, it’s ready and waiting with Contiki.",
          },
        ]

const tripsData = [
  {
    id: 1,
    image: "https://www.contiki.com/media/5l1p24yg/contiki-lonely-planet-600x300.webp?&quality=80",
    title: "Tanzania Safari Adventure With Enjoy",
    description: "The one that sees you swish through the scenic south island..."
  },
  {
    id: 2,
    image: "https://www.contiki.com/media/dyjfzf1m/pedesrianlogo.webp?&quality=80",
    title: "Tanzania Family Safaris",
    description: "The one that takes you to west Thailand..."
  },
  {
    id: 3,
    image: "https://africanscenicsafaris.com/assests/images/tanzania-safari-tours-banner.webp",
    title: "Tanzania Safari Adventure With Enjoy",
    description: "The one that sees you swish through the scenic south island..."
  },
  {
    id: 4,
    image: "https://kilimanjarofairdeal.com/wp-content/uploads/2023/12/family-3.jpg",
    title: "Tanzania Family Safaris",
    description: "The one that takes you to west Thailand..."
  },
  {
    id: 5,
    image: "https://africanscenicsafaris.com/assests/images/tanzania-safari-tours-banner.webp",
    title: "Tanzania Safari Adventure With Enjoy",
    description: "The one that sees you swish through the scenic south island..."
  },
  {
    id: 6,
    image: "https://kilimanjarofairdeal.com/wp-content/uploads/2023/12/family-3.jpg",
    title: "Tanzania Family Safaris",
    description: "The one that takes you to west Thailand..."
  }
];

const KilimanjaroLanding = () => {
  return (
    <>
     <div
        className="relative w-full h-[64vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url('https://yellowzebrasafaris.com/media/47967/game-drive-march-in-tanzania-safari-africa.jpg?width=1900&height=920&format=jpg&v=1da5e0f615dab60')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        <h2 className=" text-xl md:text-5xl text-white uppercase z-10 ">
          All about tanzania safaris
        </h2>
      </div>
     <SafariToursSection/>
     <KilimanjaroRoute/>
     <AdventureTour
     sections={data}
     />
     <TanzaniaExpertCTA/>
     <WhyJoin/>
     <Highlights 
     title="As Seen In"
      trips={tripsData}
     />
    </>
  )
}

export default KilimanjaroLanding