import React from "react";
// 1. Import the new Header component
import Header from "./components/Header"; 

import Profile from "./components/Profile";

import Footer from "./components/Footer";

import Service from "./components/Service";

import Artist from "./components/Artist";


import Gallery from "./components/Gallery";
import Review from "./components/Review";
import Feedback from "./components/Feedback";



function App() {
  return (
    <div className="bg-[#050505] text-white min-h-screen overflow-x-hidden font-sans selection:bg-white/20">

      <Header />

      <main>

        <Profile />
        <Service />
        <Artist />
      
       
     <Review />
      
        <Gallery />
        
      </main>

        <Footer />

     
      <div className="pointer-events-none fixed inset-0 z-[999] opacity-[0.03] mix-blend-overlay [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}

export default App;