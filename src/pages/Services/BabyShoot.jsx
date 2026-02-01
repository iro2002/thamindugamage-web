import React, { useEffect } from "react";
import { Camera, ImageIcon, Send, Heart } from "lucide-react";

export default function BabyShoot() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050505] text-white selection:bg-orange-500/30">
      <section className="relative h-[70vh] w-full">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071" 
            alt="Baby Shoot" 
            className="w-full h-full object-cover grayscale-[0.2]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-16 lg:p-24">
            <span className="text-orange-500 font-mono text-xs md:text-sm tracking-[0.5em] mb-4 block">
              04 / NEWBORN
            </span>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif italic tracking-tighter leading-none mb-4">
              Baby Shoot
            </h1>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <p className="text-lg md:text-2xl text-white/80 font-light leading-relaxed">
              Gentle, organic portraiture for your newest addition. We focus on the soft, fleeting moments of early life with a patient and calm approach.
            </p>
            <div className="mt-12 space-y-8">
              {[
                { icon: <Heart size={24} />, t: "Natural Comfort", d: "A safe, warm environment for your baby." },
                { icon: <ImageIcon size={24} />, t: "Fine Art Edits", d: "Soft, timeless processing for delicate skin." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="text-orange-500 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-1">{item.t}</h4>
                    <p className="text-white/40 text-sm italic">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/5 p-8 border border-white/10 rounded-sm h-fit">
            <h3 className="text-xl font-serif italic mb-6">Booking Details</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex justify-between text-sm border-b border-white/5 pb-2">
                <span className="text-white/40">Duration</span>
                <span>2-4 Hours</span>
              </li>
              <li className="flex justify-between text-sm border-b border-white/5 pb-2">
                <span className="text-white/40">Best Age</span>
                <span>5-14 Days</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-white/40">Setting</span>
                <span>Studio or Home</span>
              </li>
            </ul>
            <button className="w-full py-4 bg-orange-600 hover:bg-white hover:text-black transition-all duration-500 uppercase text-[10px] tracking-[0.3em] font-bold flex items-center justify-center gap-3">
              Book Session <Send size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}