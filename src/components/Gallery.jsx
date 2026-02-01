import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

// --- 1. IMAGE IMPORTS ---
import a1_1 from "../gallery/album-1/01.jpg";
import a1_2 from "../gallery/album-1/2.jpg";
import a1_3 from "../gallery/album-1/3.jpg";
import a1_4 from "../gallery/album-1/4.jpg";
import a1_5 from "../gallery/album-1/5.jpg";
import a2_1 from "../gallery/album-2/1.jpg";
import a2_2 from "../gallery/album-2/2.jpeg";
import a2_3 from "../gallery/album-2/3.jpeg";
import a2_4 from "../gallery/album-2/4.jpeg";
import a2_5 from "../gallery/album-2/5.jpeg";
import a3_1 from "../gallery/album-3/0.jpg";
import a3_2 from "../gallery/album-3/1.jpg";
import a3_3 from "../gallery/album-3/2.jpg";
import a3_4 from "../gallery/album-3/3.jpg";
import a3_5 from "../gallery/album-3/4.jpg";
import a3_6 from "../gallery/album-3/5.jpg";
import a4_1 from "../gallery/album-4/1.jpeg";
import a4_2 from "../gallery/album-4/2.jpeg";
import a4_3 from "../gallery/album-4/3.jpeg";
import a4_4 from "../gallery/album-4/4.jpeg";
import a4_5 from "../gallery/album-4/5.jpeg";
import a5_1 from "../gallery/album-5/1.jpg";
import a5_2 from "../gallery/album-5/2.jpg";
import a5_3 from "../gallery/album-5/3.jpg";
import a5_4 from "../gallery/album-5/4.jpg";
import a5_5 from "../gallery/album-5/5.jpg";

const ALBUMS = [
  { id: "01", title: "අපි අපිම 2025", year: "2025", images: [a1_1, a1_2, a1_3, a1_4, a1_5], fbLink: "#" },
  { id: "02", title: "EVERGREEN 2025", year: "2025", images: [a3_1, a3_2, a3_3, a3_4, a3_5, a3_6], fbLink: "#" },
  { id: "03", title: "වෙස්සන්ධාන 2026", year: "2026", images: [a2_1, a2_2, a2_3, a2_4, a2_5], fbLink: "#" },
  { id: "04", title: "Wedding PreShoot 2025", year: "2025", images: [a4_1, a4_2, a4_3, a4_4, a4_5], fbLink: "#" },
  { id: "05", title: "මන්දෝදරි 2025", year: "2025", images: [a5_1, a5_2, a5_3, a5_4, a5_5], fbLink: "#" }
];

// --- VARIANTS: NO GAP TRANSITION ---
const sliderVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 1, 
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0.5, // Subtle fade out as it slides away
  })
};

const AlbumSection = ({ album }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    const nextIndex = (page + newDirection + album.images.length) % album.images.length;
    setPage([nextIndex, newDirection]);
  };

  return (
    <section id ="gallery" className="w-full py-20 border-b border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-[10px] tracking-[0.8em] text-white/20 uppercase font-bold block mb-2">Collection {album.id}</span>
            <h2 className="text-4xl md:text-6xl font-serif italic tracking-tighter">{album.title}</h2>
          </div>
          <a href={album.fbLink} className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
            View Full <ExternalLink size={12} />
          </a>
        </div>

        {/* --- THE NO-GAP SLIDER --- */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-neutral-900 shadow-2xl">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.img 
              key={page} 
              src={album.images[page]} 
              custom={direction} 
              variants={sliderVariants} 
              initial="enter" 
              animate="center" 
              exit="exit" 
              transition={{ 
                x: { duration: 1.8, ease: [0.16, 1, 0.3, 1] }, // Ultra slow ease
                opacity: { duration: 1 } 
              }} 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute inset-0 flex justify-between items-center px-4 z-20">
            <button 
              onClick={() => paginate(-1)} 
              className="p-2 md:p-4 rounded-full bg-black/40 text-white hover:bg-white hover:text-black transition-all group"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 group-active:scale-90 transition-transform" />
            </button>
            
            <button 
              onClick={() => paginate(1)} 
              className="p-2 md:p-4 rounded-full bg-black/40 text-white hover:bg-white hover:text-black transition-all group"
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6 group-active:scale-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Pagination Line */}
        <div className="mt-10 flex gap-2">
          {album.images.map((_, i) => (
            <div 
              key={i} 
              className={`h-[1px] transition-all duration-1000 ease-in-out ${i === page ? "w-20 bg-white" : "w-6 bg-white/10"}`} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <div className="bg-[#050505] text-white overflow-hidden">
      <div className="h-[30vh] flex items-end px-6 max-w-7xl mx-auto pb-10">
        <h1 className="text-6xl md:text-8xl font-serif italic tracking-tighter">Collections.</h1>
      </div>
      <div className="flex flex-col">
        {ALBUMS.map((album) => (
          <AlbumSection key={album.id} album={album} />
        ))}
      </div>
      <footer className="py-20 opacity-10 text-center text-[10px] tracking-[1.5em] uppercase">
        Thamindu Gamage Photography
      </footer>
    </div>
  );
};

export default Gallery;