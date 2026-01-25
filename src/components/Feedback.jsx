import React, { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

const Feedback = () => {
  const [status, setStatus] = useState("idle");

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate API Call
    setTimeout(() => {
      setStatus("sent");
      e.target.reset();
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  return (
    <section className="relative w-full bg-[#050505] text-white py-24 lg:py-40 px-6 overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-white/[0.03] hidden lg:block" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-white/[0.03] hidden lg:block" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Branding & Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-white/40 mb-8">
                Availability: Open for 2026
              </span>
              <h2 className="text-6xl md:text-8xl font-light tracking-tighter leading-[0.9] mb-8">
                Let's build <br />
                <span className="text-white/30 italic font-serif">the vision.</span>
              </h2>
              <p className="text-lg text-white/50 font-light leading-relaxed max-w-sm">
                From editorial concepts to commercial films, I help brands articulate their story through precise visual language.
              </p>
            </div>

            <div className="mt-16 lg:mt-0 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2">Direct</p>
                <p className="text-sm hover:text-white/60 transition-colors cursor-pointer">studio@example.com</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2">Social</p>
                <p className="text-sm hover:text-white/60 transition-colors cursor-pointer">Instagram</p>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Name Input */}
                <div className="group relative">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 group-focus-within:text-white transition-colors">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-white transition-all placeholder:text-white/10"
                  />
                </div>

                {/* Email Input */}
                <div className="group relative">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 group-focus-within:text-white transition-colors">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="email@provider.com"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-white transition-all placeholder:text-white/10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="group relative">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 group-focus-within:text-white transition-colors">
                    Interested In
                  </label>
                  <select className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-white transition-all appearance-none cursor-pointer">
                    <option className="bg-[#0a0a0a]">Commercial Film</option>
                    <option className="bg-[#0a0a0a]">Editorial Photography</option>
                    <option className="bg-[#0a0a0a]">Brand Identity</option>
                  </select>
                </div>
                <div className="group relative">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 group-focus-within:text-white transition-colors">
                    Timeline
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Q3 2026"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-white transition-all placeholder:text-white/10"
                  />
                </div>
              </div>

              <div className="group relative">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 group-focus-within:text-white transition-colors">
                  Project Details
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your project goals..."
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-white transition-all resize-none placeholder:text-white/10"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === "submitting" || status === "sent"}
                  className="relative group overflow-hidden border border-white/20 px-12 py-5 transition-all duration-500 hover:border-white disabled:opacity-50"
                >
                  <div className="relative z-10 flex items-center gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-[0.4em]">
                      {status === "idle" && "Send Inquiry"}
                      {status === "submitting" && "Sending..."}
                      {status === "sent" && "Inquiry Received"}
                    </span>
                    {status === "sent" ? <Check size={16} /> : <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </div>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <style jsx>{`
                    button:hover span { color: black; transition: color 0.5s; }
                    button:hover svg { color: black; transition: color 0.5s; }
                  `}</style>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Subtle Noise Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default Feedback;