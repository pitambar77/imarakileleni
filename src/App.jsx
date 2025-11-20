


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


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* 🌍 Main Website Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
       <Route path="safari-landing" element={<SafariLandingPage/>}/>
       <Route path="itinenary" element={<Itinenary/>}/>
       <Route path="about-us" element={<AboutUs/>}/>

       <Route path="safari-destination" element={<SafariDestiLanding/>}/>
       <Route path="safari-fleet" element={<SafariFleet/>}/>

       
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
