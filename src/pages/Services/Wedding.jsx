import React, { useEffect } from "react";
import { Camera, Clock, Image as ImageIcon, Send } from "lucide-react";

const ServiceDetailTemplate = ({ title, category, description, image, id }) => {
  // Ensure the page starts at the top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050505] text-white selection:bg-orange-500/30">
      
      {/* FULL SCREEN HERO - Mobile First */}
      <section className="relative h-[70vh] w-full">
        <div className="absolute inset-0 z-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover grayscale-[0.2]"
            loading="eager"
          />
          {/* Deep gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-16 lg:p-24">
            <span className="text-orange-500 font-mono text-xs md:text-sm tracking-[0.5em] mb-4 block">
              {id} / {category}
            </span>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif italic tracking-tighter leading-none mb-4">
              {title}
            </h1>
        </div>
      </section>

      {/* CONTENT BLOCK - No Side Margins on Mobile */}
      <section className="px-6 md:px-16 lg:px-24 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Description */}
          <div className="lg:col-span-7">
            <p className="text-lg md:text-2xl text-white/80 font-light leading-relaxed">
              {description}
            </p>
            
            {/* Mobile-Only Feature List */}
            <div className="mt-12 space-y-8">
              {[
                { icon: <Camera size={24} />, t: "Editorial Style", d: "High-end composition and lighting." },
                { icon: <ImageIcon size={24} />, t: "Artistic Editing", d: "Custom color grading for every frame." }
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

          {/* Side Info / Call to Action */}
          <div className="lg:col-span-5 bg-white/5 p-8 border border-white/10 rounded-sm h-fit">
            <h3 className="text-xl font-serif italic mb-6">Booking Details</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex justify-between text-sm border-b border-white/5 pb-2">
                <span className="text-white/40">Duration</span>
                <span>Custom tailored</span>
              </li>
              <li className="flex justify-between text-sm border-b border-white/5 pb-2">
                <span className="text-white/40">Delivery</span>
                <span>2-4 Weeks</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-white/40">Location</span>
                <span>Colombo</span>
              </li>
            </ul>
            <button className="w-full py-4 bg-orange-600 hover:bg-white hover:text-black transition-all duration-500 uppercase text-[10px] tracking-[0.3em] font-bold flex items-center justify-center gap-3">
              Check Availability <Send size={14} />
            </button>
          </div>

        </div>
      </section>

      {/* MOBILE RESPONSIVE IMAGE GRID */}
      <section className="py-12 px-2">
         <div className="columns-1 md:columns-2 lg:columns-3 gap-2 space-y-2">
            <img src={image} className="w-full grayscale hover:grayscale-0 transition-all duration-700" alt="Work 1" />
            <div className="aspect-square bg-orange-500/10 flex items-center justify-center p-10 text-center">
               <p className="font-serif italic text-2xl">"Capturing the essence of the moment."</p>
            </div>
            <img src={image} className="w-full brightness-50" alt="Work 2" />
         </div>
      </section>
    </div>
  );
};

// Wedding.jsx
export default function Wedding() {
  return (
    <ServiceDetailTemplate 
      id="01"
      title="Weddings"
      category="Luxury"
      image="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070"
      description="Timeless narratives for your most significant union. We focus on the atmospheric details and raw emotions that make your day unique."
    />
  );
}