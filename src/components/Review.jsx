import React, { useRef } from "react";
import { Star } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const reviews = [
  { name: "Sahan P.", role: "Wedding Client", quote: "The storytelling is unreal — every frame felt like cinema. Calm, professional, and the final delivery exceeded expectations.", rating: 5 },
  { name: "Nethmi R.", role: "Graduation", quote: "Loved the direction and the attention to detail. The retouching was clean, natural, and premium.", rating: 5 },
  { name: "Studio K.", role: "Brand Shoot", quote: "Fast turnaround, beautiful lighting, and consistent output. Perfect for campaigns and social content.", rating: 5 },
];

const ReviewCard = ({ r, idx }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: idx * 0.1 }}
      className="group relative p-8 md:p-12 border-r border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500 overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 40%)`
          ),
        }}
      />

      <div className="flex gap-1 mb-6 relative z-10">
        {[...Array(r.rating)].map((_, i) => (
          <motion.div key={i} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5 + (i * 0.1) }}>
            <Star size={10} className="fill-orange-500/20 text-orange-500/50 group-hover:fill-orange-400 group-hover:text-orange-400 transition-all duration-500" />
          </motion.div>
        ))}
      </div>

      <blockquote className="relative z-10">
        <p className="text-lg md:text-xl font-light leading-relaxed text-white/50 group-hover:text-white/90 transition-colors duration-500">
          “{r.quote}”
        </p>
      </blockquote>

      <div className="mt-8 flex items-center gap-4 relative z-10">
        <div className="h-px w-4 bg-white/10 group-hover:w-12 group-hover:bg-orange-500 transition-all duration-700" />
        <div>
          <p className="text-sm font-medium tracking-tight text-white/80 group-hover:text-white">{r.name}</p>
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 mt-1">{r.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Review = () => {
  return (
    <section id="review" className="relative w-full bg-[#050505] text-white py-20 lg:py-32 overflow-hidden border-t border-white/[0.05]">
      
      {/* HEADER SECTION - Updated to match the requested design */}
      <header className="flex-none pb-16 px-8 lg:px-20 z-20">
        <div className="flex items-center gap-4 mb-3">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            viewport={{ once: true }}
            className="h-px bg-orange-500" 
          />
          <span className="text-[10px] uppercase tracking-[0.5em] text-orange-500 font-bold">
            Testimonials
          </span>
        </div>
        
        <h2 className="text-5xl lg:text-7xl font-serif italic tracking-tighter leading-none">
          Trusted <span className="not-italic text-white/10">by the visionary</span>
        </h2>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-l border-white/10">
          {reviews.map((r, idx) => (
            <ReviewCard key={idx} r={r} idx={idx} />
          ))}
        </div>
      </div>

      {/* Grain Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default Review;