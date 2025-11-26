import React from 'react'
import LandingBanner from '../../components/LandingBanner'
import zanzibarL from '../../assets/zanzibarL.webp'
import ThingsToDo from './ThingsToDo'
import Highlights from '../../components/Highlights';


const tripsData = [
  {
    id: 1,
    image:
      "https://www.zanzibar.com/media-assets/spice-farm-featured.jpg",
    title:"Abdalla Abeid Spice Farm",
    description:
      "The one that sees you swish through the scenic south island. The one that sees you swish through the scenic south island.....",
  },
  {
    id: 2,
    image:
      "https://www.zanzibar.com/media-assets/sunset-on-zanzibar-beach-featured.jpg",
title:"Sunset Dhow Cruise",
    description:
      "The one that takes you to west Thailand..The one that sees you swish through the scenic south island. you to west Thailand....",
  },
  {
    id: 3,
    image:
      "https://www.zanzibar.com/media-assets/deep-fishing-featured.jpg",
title:"Deep-Sea Fishing",
    description:
      "The one that sees you swish through the scenic south island.. The one that sees you swish through the scenic south island....",
  },
  {
    id: 4,
    image:
      "https://www.zanzibar.com/media-assets/mnarani-aquarium-hero-mobile-992-768x768.jpg.webp",
title:"Nungwi Mnarani Aquarium",
    description:
      "The one that takes you to west Thailand.. The one that sees you swish through the scenic south island... you to west Thailand..",
  },
  {
    id: 5,
    image:
      "https://www.zanzibar.com/media-assets/wedding-home-feature-visual-1400-1200x736.jpg.webp",
    title:"WEDDINGS IN ZANZIBAR",
    description:
      "The one that sees you swish through the scenic south island..The one that sees you swish through the scenic south island....",
  },
  {
    id: 6,
    image:
      "https://www.zanzibar.com/media-assets/forodhani-gardens-featured.jpg.webp",
    title:"Forodhani Gardens Market",
    description:
      "The one that takes you to west Thailand. The one that sees you swish through the scenic south island... you to west Thailand...",
  },
];

const ZanzibarLanding = () => {
  return (
    <div>
        <LandingBanner 
        bannerImg={zanzibarL}
        title={"VISIT ZANZIBAR"}
        />
        <ThingsToDo/>
         <Highlights title="Visit in Zanzibar" trips={tripsData} />
        
    </div>
  )
}

export default ZanzibarLanding