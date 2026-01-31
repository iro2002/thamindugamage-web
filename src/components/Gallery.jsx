import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Facebook, ExternalLink } from "lucide-react";

// --- 1. IMAGE IMPORTS (Ensure these paths are exactly correct) ---
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

// --- 2. DATA STRUCTURE (Add your Facebook Album URLs here) ---
const ALBUMS = [
  { 
    id: "01", 
    title: "අපි අපිම 2025", 
    year: "2025", 
    images: [a1_1, a1_2, a1_3, a1_4, a1_5],
    fbLink: "https://www.facebook.com/your-album-link-1" 
  },
  { 
    id: "02", 
    title: "EVERGREEN 2025", 
    year: "2025", 
    images: [a3_1, a3_2, a3_3, a3_4, a3_5, a3_6],
    fbLink: "https://www.facebook.com/your-album-link-2"
  },
  { 
    id: "03", 
    title: "වෙස්සන්ධාන 2026", 
    year: "2026", 
    images: [a2_1, a2_2, a2_3, a2_4, a2_5],
    fbLink: "https://www.facebook.com/your-album-link-3"
  },
  { 
    id: "04", 
    title: "Wedding PreShoot 2025", 
    year: "2025", 
    images: [a4_1, a4_2, a4_3, a4_4, a4_5],
    fbLink: "https://www.facebook.com/your-album-link-4"
  },
  { 
    id: "05", 
    title: "මන්දෝදරි 2025", 
    year: "2025", 
    images: [a5_1, a5_2, a5_3, a5_4, a5_5],
    fbLink: "https://www.facebook.com/your-album-link-5"
  }
];

const AlbumSection = ({ album }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    const nextIndex = (page + newDirection + album.images.length) % album.images.length;
    setPage([nextIndex, newDirection]);
  };

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 1.05 }),
    center: { zIndex: 1, x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ zIndex: 0, x: dir < 0 ? 300 : -300, opacity: 0, scale: 0.95 })
  };

  return (
    <section className="w-full py-24 border-b border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-[10px] uppercase tracking-[0.8em] text-orange-500/60 font-bold block">
              Vol. {album.id} — {album.year}
            </span>
            <h2 className="text-5xl md:text-7xl font-serif italic font-light tracking-tighter">
              {album.title}
            </h2>
          </motion.div>

          {/* Facebook Link Button */}
          <motion.a 
            href={album.fbLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-white/[0.03] border border-white/10 rounded-full hover:bg-[#1877F2]/20 hover:border-[#1877F2]/50 transition-all group"
          >
           
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Full  Album</span>
            <ExternalLink size={12} className="opacity-30 group-hover:opacity-100" />
          </motion.a>
        </div>

        {/* Cinematic Slider */}
        <div className="relative group aspect-[16/10] md:aspect-[21/9] overflow-hidden bg-neutral-900 rounded-sm">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.img
              key={page}
              src={album.images[page]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 260, damping: 26 },
                opacity: { duration: 0.4 }
              }}
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
            />
          </AnimatePresence>

          {/* Nav Arrows */}
          <div className="absolute inset-0 flex justify-between items-center px-4 md:px-8 z-10">
            <button 
              onClick={() => paginate(-1)}
              className="p-5 rounded-full bg-black/40 backdrop-blur-xl border border-white/5 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-black"
            >
              <ChevronLeft size={24} strokeWidth={1} />
            </button>
            <button 
              onClick={() => paginate(1)}
              className="p-5 rounded-full bg-black/40 backdrop-blur-xl border border-white/5 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-black"
            >
              <ChevronRight size={24} strokeWidth={1} />
            </button>
          </div>
        </div>

        {/* Minimal Timeline Progress */}
        <div className="mt-12 flex justify-between items-center">
          <div className="flex gap-4">
            {album.images.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setPage([i, i > page ? 1 : -1])}
                className={`h-[2px] transition-all duration-700 ${i === page ? "w-16 bg-white" : "w-4 bg-white/10 hover:bg-white/40"}`} 
              />
            ))}
          </div>
          <span className="text-[10px] font-mono text-white/20 tracking-widest">
            {String(page + 1).padStart(2, '0')} — {String(album.images.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <div className="bg-[#050505] text-white selection:bg-orange-500/30 font-sans antialiased">
      
      {/* Intro Reveal */}
      <div className="h-[70vh] flex flex-col justify-end px-6 max-w-7xl mx-auto pb-24 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[11px] uppercase tracking-[1.2em] text-white/20 mb-6 block">Archive Collections</span>
          <h1 className="text-7xl lg:text-[11rem] font-serif italic tracking-tighter text-white/95 leading-[0.8]">
            Gallery <br />
            <span className="not-italic text-white/5 uppercase text-6xl lg:text-9xl">Archive</span>
          </h1>
        </motion.div>
      </div>

      {/* Album List */}
      <div className="flex flex-col">
        {ALBUMS.map((album) => (
          <AlbumSection key={album.id} album={album} />
        ))}
      </div>

      <footer className="py-32 text-center">
        <p className="opacity-20 text-[10px] tracking-[1.5em] uppercase">Thamindu Gamage Photography</p>
      </footer>
    </div>
  );
};

export default Gallery;