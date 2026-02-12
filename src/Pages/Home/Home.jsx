import React from 'react'
import Featured from './Featured'
import HeroSlider from '../../components/HeroSlider'
import BookedTrips from '../../components/BookedTrips'
import PopularDestinations from './PopularDestinations'
import BookWithConfidence from './BookWithConfidence'
import KilimanjaroTrekking from './KilimanjaroTrekking'
import PopularWay from './PopularWay'
// import SEO from '../../components/SEO'



const Home = () => {

  
  return (
    <div>
      {/* <SEO
      title="Imaraki Leleni Safaris - Local Tanzania Safari & Kilimanjaro Specialists"
      description="Local experts creating personalised Tanzania safaris and Kilimanjaro climbs with honest guidance."
      keywords="Tanzania safari, Kilimanjaro climb, local safari experts"
      image="https://imarakilelenisafaris.com/assets/tanzania-banner-5.webp"
      url="https://imarakilelenisafaris.com/"
    /> */}
<HeroSlider/>
<BookedTrips/>
<PopularDestinations/>
<BookWithConfidence/>
<KilimanjaroTrekking/>
<PopularWay/>
    <Featured/>
    </div>
  )
}

export default Home