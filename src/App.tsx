import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
import ServicesAndPricing from "./Pages/ServicesAndPricing";
import OurClients from "./Pages/OurClients";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 300)
    
  }, [location.pathname]);


  return (
    <div className="App">
      <ToastContainer />
      {location.pathname != "/" && <NavBar />}
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="/services-and-pricing"
            element={<ServicesAndPricing />}
          />
          <Route path="our-clients" element={<OurClients />} />
          <Route path="/" element={<Loader />} />
        </Routes>
      </AnimatePresence>
      {location.pathname != "/" && <Footer />}
    </div>
  );
}

export default App;
