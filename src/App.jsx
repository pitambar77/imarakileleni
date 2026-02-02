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
import BlogList from "./Pages/Travelguide/BlogList";
import EditTravelgroup from "./Pages/Travelgroup/EditTravelgroup";
import DestinationDetailsList from "./Pages/Destination/DestinationDetailsList";
import DestinationDetailsForm from "./components/Destination/DestinationDetailsForm";
import EditDestinationDetails from "./Pages/Destination/EditDestinationDetails";
import DestinationDetailsPage from "./Pages/Destination/DestinationDetailsPage";
import KilimanjaroLandingList from "./Pages/KilimanjaroLanding/KilimanjaroLandingList";
import KilimanjarolandingForm from "./components/KilimanjarolandingForm/KilimanjarolandingForm";
import KilimanjaroLandingDetails from "./Pages/KilimanjaroLanding/KilimanjaroLandingDetails";
import KilimanjaroLandingEdit from "./Pages/KilimanjaroLanding/KilimanjaroLandingEdit";
import ItinaryDetails from "./Pages/Itinenary/ItinaryDetails";
import PackageList from "./Pages/Itinenary/PackageList";
import EditPackage from "./Pages/Itinenary/EditPackage";
import ZanzibarDetailsList from "./Pages/ZanzibarLandingPage/ZanzibarDetailsList";
import CreateZanzibar from "./Pages/ZanzibarLandingPage/CreateZanzibar";
import EditZanzibar from "./Pages/ZanzibarLandingPage/EditZanzibar";
import ZanzibarDetailsPage from "./Pages/ZanzibarLandingPage/ZanzibarDetailsPage";
import EditDestinationLanding from "./Pages/Destination/EditDestinationLanding";
import DestinationLandingDetails from "./Pages/Destination/DestinationLandingDetails";
import DestinationLandingList from "./Pages/Destination/DestinationLandingList";
import FleetList from "./Pages/Aboutus/SafariFleet/FleetList";
import AboutList from "./Pages/Aboutus/AboutList";
import AboutEdit from "./Pages/Aboutus/AboutEdit";
import ContactUs from "./Pages/Contactus/ContactUs";
import ContactusPage from "./Pages/Contactus/ContactusPage";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import PlanSafari from "./Pages/LandingPage/PlanSafari";
import KilimanjaroPage from "./Pages/LandingPage/KilimanjaroPage";

// import ItinenayDetails from "./Pages/Itinenary/itinenayDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* 🌍 Main Website Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tanzania-destinations" element={<SafariLandingPage />} />
        <Route path="itinenary" element={<Itinenary />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactusPage/>} />
        <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="plansafari" element={<PlanSafari/>}/>
        {/* <Route path="kilimanjaro-landing" element={<KilimanjaroPage/>}/> */}

        <Route path="tanzania-safaris" element={<SafariDestiLanding />} />
        <Route path="safari-fleet" element={<SafariFleet />} />
        <Route path="fleet" element={<FleetList />} />

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
        <Route path="mount-kilimanjaro" element={<KilimanjaroLanding />} />

        <Route
          path="tanzania-travel-safari"
          element={<TanzaniaFamilySafari />}
        />
        <Route path="zanzibar-beach" element={<ZanzibarLanding />} />

        <Route path="create-travelguide" element={<BlogForm />} />

        <Route path="blog" element={<BlogList />} />
        <Route path="/blog/create" element={<BlogForm />} />
        <Route path="/blog/edit/:id" element={<BlogForm />} />

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

        {/* <Route path="/travelgroup" element={<TravelgroupList />} /> */}
        <Route path="/travelgroup/:slug" element={<TravelgroupDetails />} />

        {/* Category filter page */}
        <Route
          path="/travelgroup/category/:category"
          element={<TravelgroupCategoryList />}
        />

        <Route path="/travelgroup/edit/:id" element={<EditTravelgroup />} />

        <Route
          path="/kilimanjaro-travel-guide"
          element={<BlogCategoryPage category="Kilimanjaro Travel Guide" />}
        />
        <Route
          path="/tanzania-travel-guide"
          element={<BlogCategoryPage category="Tanzania Travel Guide" />}
        />

        {/* <Route path="/itinenary-details" element={<ItinaryDetails/>}/> */}

        <Route path="/admin/packages" element={<PackageList />} />
        <Route path="/admin/packages/create" element={<CreatePackage />} />
        <Route path="/admin/packages/edit/:id" element={<EditPackage />} />

        <Route path="/package/:slug" element={<ItinaryDetails />} />

        <Route
          path="/dashboard/destination-details"
          element={<DestinationDetailsList />}
        />
        <Route
          path="/dashboard/create-destination-details"
          element={<DestinationDetailsForm />}
        />
        <Route
          path="/dashboard/edit-destination-details/:id"
          element={<EditDestinationDetails />}
        />
        <Route
          path="/tanzania-destinations/:slug"
          element={<SerengetiNationalPark />}
        />

        {/* CREATE */}
        <Route
          path="/dashboard/destination-landing/create"
          element={<CreateDestinationLanding />}
        />

        <Route
          path="/dashboard/destination-landing"
          element={<DestinationLandingList />}
        />

        {/* EDIT */}
        <Route
          path="/dashboard/destination-landing/edit/:id"
          element={<EditDestinationLanding />}
        />

        {/* ================= FRONTEND ROUTES ================= */}

        {/* DETAILS / VIEW */}
        <Route
          path="/destination-landing/:id"
          element={<DestinationLandingDetails />}
        />

        <Route
          path="/dashboard/zanibar-details"
          element={<ZanzibarDetailsList />}
        />
        <Route path="/dashboard/create-zanzibar" element={<CreateZanzibar />} />
        <Route path="/dashboard/edit-zanzibar-details/:id" element={<EditZanzibar />} />
        <Route path="/zanzibar-details/:id" element={<ZanzibarDetailsPage />} />

        <Route
          path="/dashboard/kilimanjaro"
          element={<KilimanjaroLandingList />}
        />
        <Route
          path="/dashboard/kilimanjaro/create"
          element={<KilimanjarolandingForm />}
        />
        <Route
          path="/dashboard/kilimanjaro/:id"
          element={<KilimanjaroLandingDetails />}
        />
        <Route
          path="/dashboard/kilimanjaro/edit/:id"
          element={<KilimanjaroLandingEdit />}
        />

        <Route path="/admin/aboutlist" element={<AboutList />} />

        <Route path="/admin/about/edit/:id" element={<AboutEdit />} />

        {/* <Route path="itinenay-details" element={<ItinenayDetails />} /> */}

        <Route path="contact" element={<ContactUs/>}/>

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
      <Route path="kilimanjaro-landing" element={<KilimanjaroPage/>}/>
      <Route path="tanzania-special-offers"/>
      
    </>
  )
);

const App = () => (
  <>
    <RouterProvider router={router} />
  </>
);

export default App;
