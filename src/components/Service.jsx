import React, { useState, useEffect } from "react";
import { Plus, X, ArrowUpRight } from "lucide-react";

const services = [
  { id: "01", title: "PORTRAITURE", category: "Fine Art", img: "https://scontent.fcmb8-1.fna.fbcdn.net/v/t39.30808-6/519531260_122168492030515035_5075346712141304913_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=itsqSITanNkQ7kNvwGIixa0&_nc_oc=AdnQrtKJMD56XmyVrRlxmtN4xToOZ3I0fA727MXOx2KhgDpJD6t6tD_8TmrSjQpkCZM&_nc_zt=23&_nc_ht=scontent.fcmb8-1.fna&_nc_gid=E4atwzHglHu_8M2qraD1HA&oh=00_AfqL9Mg7bM6YGtRcaZDFYYcbAYqkAq2dbhnA6XeSnVcmMA&oe=697B9B7D", desc: "Fine-art portraits with cinematic lighting." },
  { id: "02", title: "EDITORIAL", category: "Fashion", img: "https://scontent.fcmb8-1.fna.fbcdn.net/v/t39.30808-6/615577698_122193661538515035_3850189217630045217_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8F45JHaT3CwQ7kNvwFgP2l2&_nc_oc=AdmbNv-X3MUMPajFGzhnExwbUCmzTYZgj-9xolJbMK94J3JE3lsmYCIwr87uHwFu_Us&_nc_zt=23&_nc_ht=scontent.fcmb8-1.fna&_nc_gid=4OgT1R1LBTkR60C_gKK25w&oh=00_AfohJfxDuWLrFPGGocPugkiM6jdOYJm77WmmgQI0xfYI6A&oe=697BAF99", desc: "High-end imagery for global brands." },
  { id: "03", title: "WEDDINGS", category: "Luxury", img: "https://scontent.fcmb8-1.fna.fbcdn.net/v/t39.30808-6/547931072_122176868048515035_5031447137321582_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=br1vDZYNbIUQ7kNvwFdvvCx&_nc_oc=Adkt7DrpW-P6W7dAnxA30zYvEGSpe1kWKFxWpT82MjNxjkt6IhlOSUIuJWFJd-i73AY&_nc_zt=23&_nc_ht=scontent.fcmb8-1.fna&_nc_gid=AKzHLBg1n1-J5wWuTD1Cpw&oh=00_Afpx9l6XpJ-fkD64bJCG--AvAjDe-hofwTpMlq_QE-18DA&oe=697BADD7", desc: "Timeless narratives for luxury weddings." },
  { id: "04", title: "MOTION", category: "Cinema", img: "https://scontent.fcmb8-1.fna.fbcdn.net/v/t39.30808-6/597823060_122189331836515035_1185188514070317631_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=oVMSEWaWpgkQ7kNvwFc2Nvt&_nc_oc=AdmRZUSXvGgI_1DN6S2qNVYeWDGxBg4WUhbZw-Z6GjfAIrXLa41VfGaecd4TUgUFaXA&_nc_zt=23&_nc_ht=scontent.fcmb8-1.fna&_nc_gid=5FfmGn95NnCs4tKD5qhz-A&oh=00_Afrd1sl6YfKTLi02YIf67CJojcssamvu0Osg6z2MwYDw6Q&oe=697BB125", desc: "Video production with a narrative soul." },
  { id: "05", title: "COMMERCIAL", category: "Brand", img: "https://scontent.fcmb8-1.fna.fbcdn.net/v/t39.30808-6/586421963_122186863484515035_8859626009258351905_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_ohc=xnJtYRKBoNAQ7kNvwFPNhrL&_nc_oc=AdniodcwS7EyCAsl19n7RfEls_XinXGmpgM86fhjhzwzSrCFj17BWL95cJc6yWv2qWQ&_nc_zt=23&_nc_ht=scontent.fcmb8-1.fna&_nc_gid=xG3FAYceUtS4v0DKqpG--Q&oh=00_Afrc91t--RcS3ZhCRESjaaEW4HsXrXSdAQXgKdQdujERsQ&oe=697B8EE9", desc: "Clean, high-impact visuals for brands." }
];


const Service = () => {
  const [hovered, setHovered] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="services" className="bg-[#0a0a0a] text-white border-t border-orange-500/10 relative overflow-hidden">
      
      {/* Background Glow Accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/5 blur-[120px] pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="p-8 lg:p-24 border-b border-white/5">
        <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-orange-500/40" />
            <p className="text-[10px] uppercase tracking-[1em] text-orange-200/30 font-bold">Capabilities</p>
        </div>
        <h2 className="text-5xl lg:text-8xl font-serif italic tracking-tighter text-white/90 leading-none">
          Selected <span className="not-italic text-orange-50/80">Services</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row min-h-[60vh] lg:h-screen divide-y lg:divide-y-0 lg:divide-x divide-white/5 relative z-10">
        {services.map((s) => {
          const isActive = hovered === s.id || (isMobile && expandedId === s.id);

          return (
            <button
              key={s.id}
              onClick={() => isMobile && setExpandedId(expandedId === s.id ? null : s.id)}
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
              className={`relative flex-1 group text-left transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden min-h-[140px] lg:min-h-full
                ${hovered === s.id ? "lg:flex-[2.8]" : "lg:flex-1"} 
                ${isMobile && expandedId === s.id ? "min-h-[400px]" : ""}
              `}
            >
              {/* BACKGROUND IMAGE - Treated with Sepia/Warmth */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={s.img}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1.5s] ease-out
                    ${isActive ? "grayscale-0 scale-100 brightness-[0.5]" : "grayscale-[0.5] scale-110 brightness-[0.25]"}
                  `}
                  style={{ filter: isActive ? "sepia(0.15) contrast(1.1)" : "sepia(0.4) contrast(0.9)" }}
                  alt={s.title}
                />
                {/* Warm Overlay Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t from-orange-950/40 via-transparent to-black/20 transition-opacity duration-700 ${isActive ? "opacity-60" : "opacity-30"}`} />
              </div>

              {/* CONTENT OVERLAY */}
              <div className="relative h-full w-full p-8 lg:p-12 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className={`font-mono text-[10px] transition-colors duration-500 ${isActive ? "text-orange-400" : "text-white/20"}`}>
                    {s.id}
                  </span>

                  <div className={`transition-all duration-500 ${isActive ? "rotate-45 opacity-100 text-orange-400" : "opacity-0"}`}>
                    <ArrowUpRight size={22} strokeWidth={1} />
                  </div>
                </div>

                <div>
                  <h3 className={`text-2xl lg:text-5xl font-serif tracking-tight uppercase transition-all duration-700 leading-none
                    ${isActive ? "italic text-white" : "text-white/60"}
                  `}>
                    {s.title}
                  </h3>
                  
                  {/* Category with warm accent */}
                  <p className={`text-[9px] uppercase tracking-[0.4em] mt-3 transition-colors duration-500 ${isActive ? "text-orange-500/60" : "text-white/20"}`}>
                    {s.category}
                  </p>

                  {/* Description: Animated reveal */}
                  <div className={`overflow-hidden transition-all duration-700 ease-in-out
                    ${isActive ? "max-h-32 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"}
                  `}>
                    <p className="text-[11px] lg:text-xs text-white/50 leading-relaxed font-light max-w-[260px]">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Line Accent on Active */}
              <div className={`absolute bottom-0 left-0 h-[2px] bg-orange-500 transition-all duration-700 ${isActive ? "w-full" : "w-0"}`} />
            </button>
          );
        })}
      </div>

      {/* Grain Texture (Matching Artist Section) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-soft-light [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default Service;