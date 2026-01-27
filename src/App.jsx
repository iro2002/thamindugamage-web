import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactPage from "./components/Contact";

// Home sections
import Profile from "./components/Profile";
import Service from "./components/Service";
import Artist from "./components/Artist";
import Gallery from "./components/Gallery";
import Review from "./components/Review";

// Service pages
import ServiceDetails from "./pages/Services/ServiceDetails";

function Home() {
  return (
    <main>
      <Profile />
      <Service />
      <Artist />
      <Review />
      <Gallery />
      <ContactPage />
    </main>
  );
}

function App() {
  return (
    <div className="bg-[#050505] text-white min-h-screen overflow-x-hidden font-sans selection:bg-white/20">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
      </Routes>

      <Footer />

      <div className="pointer-events-none fixed inset-0 z-[999] opacity-[0.03] mix-blend-overlay [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}

export default App;
