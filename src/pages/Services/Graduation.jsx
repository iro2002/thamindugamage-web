import React, { useEffect } from "react";
import { Camera, ImageIcon, Send, GraduationCap } from "lucide-react";

export default function Graduation() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const data = {
    id: "03",
    title: "Graduation",
    category: "Legacy",
    image: "https://www.graduate.sjp.ac.lk/wp-content/uploads/2025/09/50th-Convocation.jpg",
    description: "Honoring academic excellence and the start of a new legacy. We create powerful portraits that celebrate your hard-earned achievements."
  };

  return (
    <div className="bg-[#050505] text-white selection:bg-orange-500/30">
      <section className="relative h-[70vh] w-full">
        <div className="absolute inset-0 z-0">
          <img src={data.image} alt={data.title} className="w-full h-full object-cover grayscale-[0.2]" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-16 lg:p-24">
            <span className="text-orange-500 font-mono text-xs md:text-sm tracking-[0.5em] mb-4 block">
              {data.id} / {data.category}
            </span>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif italic tracking-tighter leading-none mb-4">
              {data.title}
            </h1>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <p className="text-lg md:text-2xl text-white/80 font-light leading-relaxed">{data.description}</p>
            <div className="mt-12 space-y-8">
              {[
                { icon: <GraduationCap size={24} />, t: "Formal & Lifestyle", d: "A mix of traditional cap-and-gown and modern lifestyle shots." },
                { icon: <Camera size={24} />, t: "Professional Directing", d: "We help you pose naturally and confidently." }
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
            <h3 className="text-xl font-serif italic mb-6">Package Details</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex justify-between text-sm border-b border-white/5 pb-2">
                <span className="text-white/40">Time</span>
                <span>2 Hours</span>
              </li>
              <li className="flex justify-between text-sm border-b border-white/5 pb-2">
                <span className="text-white/40">Delivery</span>
                <span>1 Week</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-white/40">Prints</span>
                <span>Available</span>
              </li>
            </ul>
            <button className="w-full py-4 bg-orange-600 hover:bg-white hover:text-black transition-all duration-500 uppercase text-[10px] tracking-[0.3em] font-bold flex items-center justify-center gap-3">
              Check Dates <Send size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}