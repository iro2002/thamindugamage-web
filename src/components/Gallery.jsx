import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// 1. IMPORT YOUR IMAGES HERE
import a1_1 from "../gallery/01.jpg";
import a1_2 from "../gallery/02.jpg";
import a2_1 from "../gallery/03.jpg";
import a2_2 from "../gallery/04.jpg";
import a3_1 from "../gallery/05.jpg";
// import a3_2 from "../gallery/06.jpg"; <— Add more like this

// 2. ADD IMAGES TO THE LISTS BELOW
const ALBUMS = [
  {
    id: "01",
    title: "Noir Et Blanc",
    year: "2024",
    images: [a1_1, a1_2, a2_1], // Add imported variables here
  },
  {
    id: "02",
    title: "Urban Silence",
    year: "2025",
    images: [a2_1, a2_2], 
  },
  {
    id: "03",
    title: "Studio Series",
    year: "2026",
    images: [a3_1, a1_1],
  }
];

const AlbumSection = ({ album }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => setActiveIdx((prev) => (prev + 1) % album.images.length);
  const prev = () => setActiveIdx((prev) => (prev - 1 + album.images.length) % album.images.length);

  return (
    <section className="w-full min-h-screen border-b border-white/[0.03] flex flex-col justify-center py-20 lg:py-32">
      <div className="max-w-7xl mx-auto w-full px-6">
        
        {/* Album Header */}
        <div className="flex justify-between items-end mb-6 lg:mb-10">
          <div className="space-y-1">
            <span className="text-[9px] uppercase tracking-[0.6em] text-white/20 block">
              Archive Vol. {album.id} — {album.year}
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase italic font-serif">
              {album.title}
            </h2>
          </div>
          
          {/* Frame Counter */}
          <div className="text-[10px] font-mono text-white/20 tracking-[0.3em]">
            {String(activeIdx + 1).padStart(2, '0')} / {String(album.images.length).padStart(2, '0')}
          </div>
        </div>

        {/* Cinematic Display Case */}
        <div className="relative group">
          <div className="relative aspect-[4/5] md:aspect-[16/9] overflow-hidden bg-[#080808]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIdx}
                src={album.images[activeIdx]}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Clear Navigation Buttons (Overlay) */}
            <div className="absolute inset-0 flex justify-between items-center px-4 lg:px-8">
              <button 
                onClick={prev}
                className="p-4 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-black"
              >
                <ChevronLeft size={20} strokeWidth={1} />
              </button>
              <button 
                onClick={next}
                className="p-4 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-black"
              >
                <ChevronRight size={20} strokeWidth={1} />
              </button>
            </div>
          </div>

          {/* Minimal Progress Bar (Bottom) */}
          <div className="mt-8 flex justify-center gap-2">
            {album.images.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActiveIdx(i)}
                className={`h-[2px] transition-all duration-500 ${i === activeIdx ? "w-12 bg-white" : "w-4 bg-white/10 hover:bg-white/30"}`} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <div className="bg-[#050505] text-white selection:bg-white selection:text-black font-sans scroll-smooth">
      
      {/* Intro Header */}
      <div className="h-[50vh] flex flex-col justify-end px-6 max-w-7xl mx-auto pb-16 w-full">
        <h1 className="text-8xl md:text-[11rem] font-light tracking-tighter uppercase leading-[0.75] opacity-90">
          Gallery<span className="text-white/10">.</span>
        </h1>
      </div>

      {/* Vertical Album List */}
      <div className="flex flex-col">
        {ALBUMS.map((album) => (
          <AlbumSection key={album.id} album={album} />
        ))}
      </div>

      {/* Clean Footer */}
      <footer className="py-32 flex flex-col items-center">
        <div className="h-px w-8 bg-white/20 mb-6" />
        <p className="text-[9px] uppercase tracking-[0.8em] text-white/20 italic">Curated Portfolio</p>
      </footer>
    </div>
  );
};

export default Gallery;