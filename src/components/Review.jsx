import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Sahan P.",
    role: "Wedding Client",
    quote: "The storytelling is unreal — every frame felt like cinema. Calm, professional, and the final delivery exceeded expectations.",
    rating: 5,
  },
  {
    name: "Nethmi R.",
    role: "Graduation",
    quote: "Loved the direction and the attention to detail. The retouching was clean, natural, and premium.",
    rating: 5,
  },
  {
    name: "Studio K.",
    role: "Brand Shoot",
    quote: "Fast turnaround, beautiful lighting, and consistent output. Perfect for campaigns and social content.",
    rating: 5,
  },
];

const Review = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  return (
    <section id="review" className="relative w-full bg-[#050505] text-white py-24 lg:py-48 px-6 overflow-hidden border-t border-white/[0.05]">
      
      {/* Structural Accent Line */}
      <motion.div 
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 right-1/3 w-px bg-white/[0.03] hidden lg:block" 
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8"
        >
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-4 block">Testimonials</span>
            <h2 className="text-6xl md:text-8xl font-light tracking-tighter leading-none">
              Trusted by <br />
              <span className="italic font-serif text-white/40">the visionary.</span>
            </h2>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-l border-white/10"
        >
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative p-10 md:p-14 border-r border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-700 overflow-hidden"
            >
              {/* Subtle Background Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Star Rating */}
              <div className="flex gap-1 mb-8 relative z-10">
                {[...Array(r.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                  >
                    <Star size={10} className="fill-white/20 text-transparent group-hover:fill-orange-200/50 transition-colors duration-500" />
                  </motion.div>
                ))}
              </div>

              <blockquote className="relative z-10">
                <p className="text-xl md:text-2xl font-light leading-relaxed text-white/70 group-hover:text-white transition-colors duration-500">
                  “{r.quote}”
                </p>
              </blockquote>

              <div className="mt-12 flex items-center gap-4 relative z-10">
                {/* Animated Line */}
                <div className="h-px w-6 bg-white/20 group-hover:w-12 group-hover:bg-orange-200/50 transition-all duration-700 ease-in-out" />
                
                <div>
                  <p className="text-sm font-medium tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                    {r.name}
                  </p>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 mt-1">
                    {r.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Noise Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default Review;