import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// 🌍 Main site imports
import Layout from "./Layout";
import Home from "./Pages/Home/Home";
import SafariLandingPage from "./Pages/TanzaniaSafariLanding/SafariLandingPage";
import Itinenary from "./Pages/Itinenary/Itinenary";
import AboutUs from "./Pages/Aboutus/AboutUs";
import SafariDestiLanding from "./Pages/SafariDestination/SafariDestiLanding";
import SafariFleet from "./Pages/Aboutus/SafariFleet/SafariFleet";
import SerengetiNationalPark from "./Pages/SerengetiNationalPark/SerengetiNationalPark";
import TravelguidedetailsPage from "./Pages/TravelGuideDetails/TravelguidedetailsPage";
import TeamPage from "./Pages/Team/TeamPage";
import ThankYouPage from "./Pages/Thankyou/ThankYouPage";
import Sustanbility from "./Pages/Sustanbility/Sustanbility";
import KilimanjaroLanding from "./Pages/KilimanjaroLanding/KilimanjaroLanding";
import TravelGuideLanding from "./Pages/TravelGuideLanding/TravelGuideLanding";
import TanzaniaFamilySafari from "./Pages/TanzaniaFamilySafari/TanzaniaFamilySafari";
import ZanzibarLanding from "./Pages/ZanzibarLandingPage/ZanzibarLanding";
import BlogForm from "./components/BlogForm";
import CreatePackage from "./Pages/Itinenary/CreatePackage";
import CreateDestinationDetails from "./Pages/Destination/CreateDestinationDetails";
import CreateDestinationLanding from "./Pages/Destination/CreateDestinationLanding";
import CreateTravelgroup from "./Pages/Travelgroup/CreateTravelgroup";
import CreateSustanbility from "./Pages/Sustanbility/CreateSustanbility";
import CreateTeam from "./Pages/Team/CreateTeam";
import TeamList from "./Pages/Team/TeamList";
import EditTeam from "./Pages/Team/EditTeam";
import CreateAbout from "./Pages/Aboutus/CreateAbout";
import CreateFleet from "./Pages/Fleet/CreateFleet";
import CreateKilimanjaroLanding from "./Pages/KilimanjaroLanding/CreateKilimanjaroLanding";
import TravelgroupList from "./Pages/Travelgroup/TravelgroupList";
import TravelgroupDetails from "./Pages/Travelgroup/TravelgroupDetails";
import TravelgroupCategoryList from "./Pages/Travelgroup/TravelgroupCategoryList";
import BlogCategoryPage from "./Pages/Travelguide/BlogCategoryPage";
import BlogDetail from "./Pages/Travelguide/BlogDetail";
import DashboardLayout from "./components/DashboardLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* 🌍 Main Website Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="destination-landing" element={<SafariLandingPage />} />
        <Route path="itinenary" element={<Itinenary />} />
        <Route path="about-us" element={<AboutUs />} />

        <Route path="safari-landing" element={<SafariDestiLanding />} />
        <Route path="safari-fleet" element={<SafariFleet />} />
        <Route
          path="serengeti-national-park"
          element={<SerengetiNationalPark />}
        />
        <Route path="travel-guide-landing" element={<TravelGuideLanding />} />
        <Route
          path="travel-guide-details"
          element={<TravelguidedetailsPage />}
        />
        <Route path="team" element={<TeamPage />} />
        <Route path="thank-you" element={<ThankYouPage />} />
        <Route path="sustanbility" element={<Sustanbility />} />
        <Route path="kilimanjaro-landing" element={<KilimanjaroLanding />} />
        
        <Route
          path="tanzania-travel-safari"
          element={<TanzaniaFamilySafari />}
        />
        <Route path="zanzibar-landing" element={<ZanzibarLanding />} />

        <Route path="create-travelguide" element={<BlogForm />} />
        <Route path="create-package" element={<CreatePackage />} />
        <Route
          path="create-destination-details"
          element={<CreateDestinationDetails />}
        />
        <Route
          path="create-destination-landing"
          element={<CreateDestinationLanding />}
        />
        <Route path="create-travel-group" element={<CreateTravelgroup />} />
        <Route path="create-sustanbility" element={<CreateSustanbility />} />
        <Route path="create-team" element={<CreateTeam />} />
        <Route path="team-list" element={<TeamList />} />
        <Route path="edit/:id" element={<EditTeam />} />
        <Route path="create-about" element={<CreateAbout />} />
        <Route path="create-fleet" element={<CreateFleet />} />
        <Route
          path="create-kilimanjarolanding"
          element={<CreateKilimanjaroLanding />}
        />

        <Route path="/travelgroup" element={<TravelgroupList />} />
        <Route path="/travelgroup/:slug" element={<TravelgroupDetails />} />

        {/* Category filter page */}
        <Route
          path="/travelgroup/category/:category"
          element={<TravelgroupCategoryList />}
        />

<Route path="/kilimanjaro-travel-guide" element={<BlogCategoryPage category="Kilimanjaro Travel Guide" />} />
<Route path="/tanzania-travel-guide" element={<BlogCategoryPage category="Tanzania Travel Guide" />} />

{/* Blog Detail Page */}
<Route path="/travel-guide/:slug" element={<BlogDetail />} />

      </Route>
      {/* 🧭 Admin Dashboard Routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        {/* <Route index element={<Navigate to="/dashboard/create-travelguide" />} /> */}
        <Route path="create-travelguide" element={<BlogForm />} />
        <Route path="create-package" element={<CreatePackage />} />
        <Route
          path="create-destination-details"
          element={<CreateDestinationDetails />}
        />
        <Route
          path="create-destination-landing"
          element={<CreateDestinationLanding />}
        />
        <Route path="create-travel-group" element={<CreateTravelgroup />} />
        <Route path="create-sustanbility" element={<CreateSustanbility />} />
        <Route path="create-team" element={<CreateTeam />} />
        <Route path="team-list" element={<TeamList />} />
        <Route path="edit/:id" element={<EditTeam />} />
        <Route path="create-about" element={<CreateAbout />} />
        <Route path="create-fleet" element={<CreateFleet />} />
        <Route
          path="create-kilimanjarolanding"
          element={<CreateKilimanjaroLanding />}
        />
      </Route>
    </>
  )
);

const App = () => (
  <>
    <RouterProvider router={router} />
  </>
);

export default App;
