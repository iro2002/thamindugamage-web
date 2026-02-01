import React, { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowDown, Camera } from "lucide-react";

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
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3},
  { id: 4, src: img4},
  { id: 5, src: img5 },
  { id: 6, src: img6 },
  { id: 7, src: img7 },
  { id: 8, src: img8 },
  { id: 9, src: img9 },
  { id: 10, src: img10 },
  { id: 11, src: img11 },
  { id: 12, src: img12 },
  { id: 13, src: img13 },
  { id: 14, src: img14 },
  { id: 15, src: img15 },
  { id: 16, src: img16 },
  { id: 17, src: img17 },
  { id: 18, src: img18 },
];

const FinalGallery = () => {
  // Showing 6 initially for a balanced 18-image set
  const [visible, setVisible] = useState(6);

  const loadMore = () => {
    setVisible((prev) => Math.min(prev + 6, LOCAL_DATA.length));
  };

  return (
    <section className="min-h-screen bg-[#050505] text-white px-6 py-24 selection:bg-orange-500">
      
      {/* MINIMAL HEADER */}
      <div className="max-w-6xl mx-auto mb-24 flex flex-col md:flex-row justify-between items-start md:items-end border-l border-white/10 pl-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2">

          </div>
          <h2 className="text-5xl md:text-6xl font-serif italic tracking-tighter">
            Visual <span className="not-italic text-white/10">Journal</span>
          </h2>
        </div>
        
   
      </div>

      {/* 3D-FEEL GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
        <AnimatePresence mode="popLayout">
          {LOCAL_DATA.slice(0, visible).map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#0d0d0d] rounded-sm">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1 }}
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                />
                
                {/* Minimalist Hover Reveal */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <Plus size={20} className="text-white/40 font-light" strokeWidth={1} />
                </div>
              </div>

              {/* CLEAN CAPTION */}
              <div className="mt-5 space-y-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-[10px] tracking-[0.4em] font-bold text-white/40 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[8px] font-mono text-white/10 italic">#{String(item.id).padStart(2, '0')}</span>
                </div>
                <div className="h-[1px] w-0 group-hover:w-full bg-orange-500/50 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* LOAD MORE BUTTON */}
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

      {/* SUBTLE TEXTURE OVERLAY */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default memo(FinalGallery);