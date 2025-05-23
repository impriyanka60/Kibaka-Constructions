import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import Navbar from "./components/Navbar";
//<Route path="/" element={<OnePageView />} />import OnePageView from "./components/OnePageView";
//import {Link,BrowserRouter,router,Routes} from "react-router-dom";
//import CardSlider from "./components/CardSlider";
import Footer from "./components/Footer";
//import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
//import Documents from "./components/Documents";
import DocumentSection from "./components/DocumentSection";
//import DocumentViewer from "./components/DocumentViewer";
import Contact from "./components/Contact";
//import LandingPage from "./components/LandingPage";
import OnePageView from "./components/OnePageView";
//import CardSlider from "./components/CardSlider";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    
    <div>
     <BrowserRouter>
     <ScrollToTop />
     <Navbar />
    
       <Routes>
       <Route path="/" element={<OnePageView />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/documents" element={<DocumentSection />} />
        <Route path="/adminlogin"  element={<AdminLogin/>}  />
        <Route path="/admin-dashboard"  element={<AdminDashboard/>}  />
      
      
       </Routes>
       <Footer/>
       </BrowserRouter>
    </div>
    
  );
}

export default App;
