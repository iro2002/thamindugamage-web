import React, { useEffect } from "react";
import { Camera, ImageIcon, Send, Sparkles } from "lucide-react";

export default function PreShoot() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const data = {
    id: "02",
    title: "Pre Shoot",
    category: "Concept",
    image: "https://stanburyphotography.co.uk/wp-content/uploads/2015/02/9aef2-peckforton-castle-cheshire-wedding-photographer-stanbury-photography2b009.jpg",
    description: "Stylized concepts tailored to your unique chemistry. We blend fashion-forward aesthetics with personal storytelling to create a visual prelude to your big day."
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
                { icon: <Sparkles size={24} />, t: "Concept Design", d: "Personalized moodboards and scouting." },
                { icon: <Camera size={24} />, t: "Editorial Finish", d: "Magazine-quality retouching." }
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
                <span>Full Day</span>
              </li>
              <li className="flex justify-between text-sm border-b border-white/5 pb-2">
                <span className="text-white/40">Outfits</span>
                <span>Unlimited</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-white/40">Travel</span>
                <span>Inclusive</span>
              </li>
            </ul>
            <button className="w-full py-4 bg-orange-600 hover:bg-white hover:text-black transition-all duration-500 uppercase text-[10px] tracking-[0.3em] font-bold flex items-center justify-center gap-3">
              Consult Now <Send size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}