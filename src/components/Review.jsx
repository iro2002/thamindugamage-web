import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  { name: "Sahan P.", role: "Wedding Client", quote: "The storytelling is unreal — every frame felt like cinema. Calm, professional, and the final delivery exceeded expectations.", rating: 5 },
  { name: "Nethmi R.", role: "Graduation", quote: "Loved the direction and the attention to detail. The retouching was clean, natural, and premium.", rating: 5 },
  { name: "Studio K.", role: "Brand Shoot", quote: "Fast turnaround, beautiful lighting, and consistent output. Perfect for campaigns and social content.", rating: 5 },
];

const Review = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="review" className="relative w-full bg-[#050505] text-white py-20 lg:py-32 px-6 overflow-hidden border-t border-white/[0.05]">
      <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="absolute top-0 right-1/3 w-px bg-white/[0.03] hidden lg:block" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
          
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter leading-none">Trusted by <br /><span className="italic font-serif text-white/40">the visionary.</span></h2>
          </div>
        </motion.div>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-l border-white/10">
          {reviews.map((r, idx) => (
            <motion.div key={idx} variants={itemVariants} className="group relative p-8 md:p-12 border-r border-b border-white/10 hover:bg-white/[0.01] transition-colors duration-500 overflow-hidden">
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} size={10} className="fill-white/10 text-transparent group-hover:fill-orange-200/40 transition-colors" />
                ))}
              </div>
              <blockquote className="relative z-10">
                <p className="text-lg md:text-xl font-light leading-relaxed text-white/60 group-hover:text-white transition-colors">“{r.quote}”</p>
              </blockquote>
              <div className="mt-8 flex items-center gap-4 relative z-10">
                <div className="h-px w-4 bg-white/10 group-hover:w-8 group-hover:bg-orange-200/40 transition-all duration-500" />
                <div>
                  <p className="text-sm font-medium tracking-tight">{r.name}</p>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 mt-1">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default Review;