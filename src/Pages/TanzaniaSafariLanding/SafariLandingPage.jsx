import React from 'react'
import Banner from '../../components/Banner'
import SafariInfoSection from './SafariInfoSection'
import TanzaniaTabsSection from './TanzaniaTabsSection'
import GuestReviewSection from './GuestReviewSection'
import SafariTour from './SafariTour'
import TourGroupSection from './TourGroupSection'
import WhentoGo from './WhentoGo'
import TripHighlights from './TripHighlights'
import Featured from '../Home/Featured'

const SafariLandingPage = () => {
  return (
    <div>
        <Banner
        image="https://easguides.travel/wp-content/uploads/2024/02/Tanzania-Tour.webp"
        title="EXPLORE TANZANIA"
        buttonText="VIEW TRIPS"
        onButtonClick={() => alert("Redirecting to Tanzania Trips...")}
      />
      <SafariInfoSection/>
      <TanzaniaTabsSection/>
      <GuestReviewSection/>
      <SafariTour/>
      <TourGroupSection/>
      <WhentoGo/>
      <TripHighlights/>
       <Featured/>
    </div>
  )
}

export default SafariLandingPage