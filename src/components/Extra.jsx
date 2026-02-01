import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

// Sample Data
const DATA = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  url: `https://picsum.photos/seed/${i + 50}/600/800`,
  title: `COLLECTION_0${i + 1}`
}));

const FinalGallery = () => {
  const [visible, setVisible] = useState(4);

  return (
    <div className="min-h-screen bg-[#050505] text-white px-6 py-20">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-16 flex justify-between items-end border-b border-white/10 pb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <p className="text-[10px] tracking-[0.5em] text-white/40 uppercase">Archive</p>
          <h1 className="text-3xl font-serif italic">Thamindu.G</h1>
        </motion.div>
        <p className="text-[10px] font-mono opacity-30">{visible} / {DATA.length}</p>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        <AnimatePresence mode="popLayout">
          {DATA.slice(0, visible).map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#111] rounded-sm">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-[9px] tracking-widest text-white/40 group-hover:text-white transition-colors">
                  {item.title}
                </span>
                <span className="text-[9px] text-white/10 italic">#{item.id}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination */}
      {visible < DATA.length && (
        <div className="mt-20 flex flex-col items-center">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setVisible(prev => prev + 4)}
            className="flex flex-col items-center gap-4 group"
          >
            <div className="p-4 border border-white/10 rounded-full group-hover:border-white/40 transition-colors">
              <Plus size={18} className="text-white/40 group-hover:text-white" />
            </div>
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 group-hover:text-white">
              Load More
            </span>
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default FinalGallery;