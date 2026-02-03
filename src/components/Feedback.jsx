import React, { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";

const Feedback = () => {
  const [status, setStatus] = useState("idle");

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("sent");
      e.target.reset();
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  return (
    <section className="relative w-full bg-[#050505] text-white py-24 lg:py-40 px-6 overflow-hidden border-t border-white/5">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <motion.div initial={{ width: 0 }} whileInView={{ width: 32 }} transition={{ duration: 0.8 }} className="h-px bg-orange-500" />
                <span className="text-[10px] uppercase tracking-[0.5em] text-orange-500 font-bold">Inquiry</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-light tracking-tighter leading-[0.9] mb-8">
                Let's build <br />
                <span className="text-white/30 italic font-serif">the vision.</span>
              </h2>
              <p className="text-lg text-white/50 font-light leading-relaxed max-w-sm">
                From editorial concepts to commercial films, I help brands articulate their story.
              </p>
              <div className="mt-8">
                 <span className="inline-block px-3 py-1 border border-white/10 rounded-full text-[9px] uppercase tracking-widest text-white/40">
                   Availability: Open for 2026
                 </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="group relative">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Full Name</label>
                  <input required type="text" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-orange-500/50 transition-all" />
                </div>
                <div className="group relative">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Email Address</label>
                  <input required type="email" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-orange-500/50 transition-all" />
                </div>
              </div>
              <textarea placeholder="Describe your project..." className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-orange-500/50 resize-none h-32" />
              <button type="submit" className="relative group overflow-hidden border border-white/20 px-12 py-5 transition-all hover:border-white">
                <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.4em] group-hover:text-black transition-colors">
                  {status === "idle" ? "Send Inquiry" : "Processing..."}
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Feedback;