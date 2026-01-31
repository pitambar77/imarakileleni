import ContactDetails from "./ContactDetails"
import HeroSection from "./HeroSection"
import PeopleClimbing from "./PeopleClimbing"
import ClimbingDate from "./ClimbingDate"
import Reviews from "./Reviews"
import RouteForKilimanjaro from "./RouteForKilimanjaro"
import TravellersBenefit from "./TravellersBenefit"
import Footer from "../../components/LandingPage/Footer"

const KilimanjaroPage = () => {
    return (
        <>
            <HeroSection />
            <RouteForKilimanjaro />
            <PeopleClimbing />
            <ClimbingDate />
            <ContactDetails />
            <Reviews />
            <TravellersBenefit />
            <Footer/>
        </>
    )
}

export default KilimanjaroPage