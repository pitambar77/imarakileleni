


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


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* 🌍 Main Website Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
       <Route path="safari-landing" element={<SafariLandingPage/>}/>
       
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
