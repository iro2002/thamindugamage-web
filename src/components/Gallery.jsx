import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";

// --- IMAGE IMPORTS (Keep your existing imports) ---
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
  { id: "01", title: "අපි අපිම 2025", year: "2025", images: [a1_1, a1_2, a1_3, a1_4, a1_5], fbLink: "https://www.facebook.com/share/p/18DiqmTmWQ/" },
  { id: "02", title: "EVERGREEN 2025", year: "2025", images: [a3_1, a3_2, a3_3, a3_4, a3_5, a3_6], fbLink: "https://www.facebook.com/share/p/17fEcQayyS/" },
  { id: "03", title: "වෙස්සන්ධාන 2026", year: "2026", images: [a2_1, a2_2, a2_3, a2_4, a2_5], fbLink: "https://www.facebook.com/share/p/16otBYfGVV/" },
  { id: "04", title: "Wedding PreShoot 2025", year: "2025", images: [a4_1, a4_2, a4_3, a4_4, a4_5], fbLink: "https://www.facebook.com/share/p/1AHN3i9SWB/" },
  { id: "05", title: "මන්දෝදරි 2025", year: "2025", images: [a5_1, a5_2, a5_3, a5_4, a5_5], fbLink: "https://www.facebook.com/share/p/1CFbs2BqX3/" }
];

const sliderVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.1,
    opacity: 0,
  }),
  center: { zIndex: 1, x: 0, scale: 1, opacity: 1 },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? "50%" : "-50%",
    scale: 1.05,
    opacity: 0,
  })
};

const AlbumSection = ({ album, onImageClick }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([((page + newDirection + album.images.length) % album.images.length), newDirection]);
  };

  return (
    <section id="gallery" className="w-full py-20 border-b border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-8 lg:px-20">
        
        {/* HEADER */}
        <header className="mb-10">
          <div className="flex justify-between items-end">
            <h2 className="text-4xl md:text-6xl font-serif italic tracking-tighter leading-none">
              {album.title.split(' ')[0]} <span className="not-italic text-white/10">{album.title.split(' ').slice(1).join(' ')}</span>
            </h2>
            <motion.a 
              href={album.fbLink} 
              whileHover={{ opacity: 1, x: 5 }}
              className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] opacity-40 transition-all font-bold"
            >
              Full Album <ExternalLink size={12} />
            </motion.a>
          </div>
        </header>

        {/* MAIN SLIDER */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-neutral-900 group shadow-2xl">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={sliderVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.8 }
              }}
              className="absolute inset-0 w-full h-full"
            >
              <motion.img 
                src={album.images[page]} 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                onClick={() => onImageClick(album.images[page])}
                className="w-full h-full object-cover cursor-zoom-in" 
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 flex justify-between items-center px-4 z-20 pointer-events-none">
            <button onClick={() => paginate(-1)} className="p-3 rounded-full bg-black/20 hover:bg-white text-white hover:text-black transition-all duration-300 backdrop-blur-md pointer-events-auto">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => paginate(1)} className="p-3 rounded-full bg-black/20 hover:bg-white text-white hover:text-black transition-all duration-300 backdrop-blur-md pointer-events-auto">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PAGINATION BARS */}
        <div className="mt-8 flex gap-3">
          {album.images.map((_, i) => (
            <motion.div 
              key={i} 
              onClick={() => setPage([i, i > page ? 1 : -1])}
              className="h-[2px] cursor-pointer"
              animate={{
                width: i === page ? 60 : 20,
                backgroundColor: i === page ? "#f97316" : "rgba(255,255,255,0.1)"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-[#050505] text-white overflow-hidden">
      
      {/* FULL SCREEN LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
          >
            <motion.button 
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-10 right-10 z-[110] p-4 text-white hover:text-orange-500 transition-colors"
            >
              <X size={40} strokeWidth={1} />
            </motion.button>
            
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              src={selectedImage}
              className="max-w-full max-h-full object-contain shadow-2xl"
              onClick={() => setSelectedImage(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <header className="pt-32 pb-16 px-8 lg:px-20 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-px bg-orange-500" />
          <span className="text-[10px] uppercase tracking-[0.8em] text-orange-500 font-bold">Gallery</span>
        </div>
        <motion.h1 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-7xl font-serif italic tracking-tighter"
        >
          Selected <span className="not-italic text-white/10">Works.</span>
        </motion.h1>
      </header>
      
      <div className="flex flex-col">
        {ALBUMS.map((album) => (
          <AlbumSection 
            key={album.id} 
            album={album} 
            onImageClick={(img) => setSelectedImage(img)} 
          />
        ))}
      </div>

      <footer className="py-20 text-center text-[10px] tracking-[1.5em] uppercase opacity-20">
        Thamindu Gamage Photography
      </footer>
    </div>
  );
};

export default Gallery;