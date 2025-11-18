import React from 'react'
import Featured from './Featured'
import HeroSlider from '../../components/HeroSlider'
import BookedTrips from '../../components/BookedTrips'
import PopularDestinations from './PopularDestinations'
import BookWithConfidence from './BookWithConfidence'
import KilimanjaroTrekking from './KilimanjaroTrekking'
import PopularWay from './PopularWay'

const Home = () => {
  return (
    <div>
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