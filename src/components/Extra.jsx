import React, { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowDown, X } from "lucide-react";

// --- 18 LOCAL ASSET IMPORTS ---
import img1 from "../assets/img1.jpg"; 
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";
import img9 from "../assets/img9.jpeg"; 
import img10 from "../assets/img10.jpeg";
import img11 from "../assets/img11.jpeg";
import img12 from "../assets/img12.jpeg";
import img13 from "../assets/img13.jpeg";
import img14 from "../assets/img14.jpeg";
import img15 from "../assets/img15.jpeg";
import img16 from "../assets/img16.jpeg";
import img17 from "../assets/img17.jpeg";
import img18 from "../assets/img18.jpeg";

const LOCAL_DATA = [
  { id: 1, src: img1, title: "MOMENT 01" },
  { id: 2, src: img2, title: "MOMENT 02" },
  { id: 3, src: img3, title: "MOMENT 03" },
  { id: 4, src: img4, title: "MOMENT 04" },
  { id: 5, src: img5, title: "MOMENT 05" },
  { id: 6, src: img6, title: "MOMENT 06" },
  { id: 7, src: img7, title: "MOMENT 07" },
  { id: 8, src: img8, title: "MOMENT 08" },
  { id: 9, src: img9, title: "MOMENT 09" },
  { id: 10, src: img10, title: "MOMENT 10" },
  { id: 11, src: img11, title: "MOMENT 11" },
  { id: 12, src: img12, title: "MOMENT 12" },
  { id: 13, src: img13, title: "MOMENT 13" },
  { id: 14, src: img14, title: "MOMENT 14" },
  { id: 15, src: img15, title: "MOMENT 15" },
  { id: 16, src: img16, title: "MOMENT 16" },
  { id: 17, src: img17, title: "MOMENT 17" },
  { id: 18, src: img18, title: "MOMENT 18" },
];

const FinalGallery = () => {
  const [visible, setVisible] = useState(6);
  const [selectedImage, setSelectedImage] = useState(null);

  const loadMore = () => {
    setVisible((prev) => Math.min(prev + 6, LOCAL_DATA.length));
  };

  return (
    <section className="min-h-screen bg-[#050505] text-white py-24 selection:bg-orange-500 relative overflow-hidden">
      
      {/* UPDATED HEADER - Matching "Event Coverage" style */}
      <header className="max-w-7xl mx-auto mb-24 px-8 lg:px-20">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-8 h-px bg-orange-500" />
          <span className="text-[10px] uppercase tracking-[0.5em] text-orange-500 font-bold">
            Archive
          </span>
        </div>
        <h2 className="text-5xl lg:text-7xl font-serif italic tracking-tighter leading-none">
          Visual <span className="not-italic text-white/10">Journal</span>
        </h2>
      </header>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-8 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
        <AnimatePresence mode="popLayout">
          {LOCAL_DATA.slice(0, visible).map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#0d0d0d] rounded-sm">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1 }}
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <Plus size={20} className="text-white/40 font-light" strokeWidth={1} />
                </div>
              </div>

              <div className="mt-5 space-y-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-[10px] tracking-[0.4em] font-bold text-white/40 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                </div>
                <div className="h-[1px] w-0 group-hover:w-full bg-orange-500/50 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* LOAD MORE */}
      {visible < LOCAL_DATA.length && (
        <div className="mt-32 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={loadMore}
            className="flex flex-col items-center gap-6 group"
          >
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-orange-500 transition-colors duration-500">
              <ArrowDown size={18} className="text-white/20 group-hover:text-white group-hover:translate-y-1 transition-all" />
            </div>
            <span className="text-[9px] tracking-[0.6em] uppercase text-white/30 group-hover:text-white font-medium">Expand Archive</span>
          </motion.button>
        </div>
      )}

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-10 right-10 text-white/50 hover:text-white z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={32} strokeWidth={1} />
            </motion.button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl max-h-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain"
              />
              
              <div className="mt-8 text-center space-y-2">
                <p className="text-[10px] tracking-[0.8em] text-white/40 uppercase">{selectedImage.title}</p>
                <div className="h-[1px] w-12 bg-orange-500 mx-auto" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NOISE OVERLAY */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default memo(FinalGallery);