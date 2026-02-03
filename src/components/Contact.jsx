import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <section
      id="contact"
      className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-8 lg:px-20 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-3">
            <motion.div 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-8 h-px bg-orange-500" 
            />
            <span className="text-[10px] uppercase tracking-[0.5em] text-orange-500 font-bold">
              Availability: Open for 2026
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif italic tracking-tighter leading-[0.9]">
            Let&apos;s Start a <br />
            <span className="not-italic text-white/10 uppercase font-sans font-bold text-4xl md:text-7xl">
              Conversation
            </span>
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left: Thamindu's Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-white/80 text-xl font-medium mb-2">Thamindu Lakshan Gamage</h2>
                <p className="text-white/40 text-lg font-light leading-relaxed max-w-sm">
                  Every project begins with a story. Tell me yours, and let&apos;s
                  create something cinematic together.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:Gamagel751@gmail.com"
                  className="group flex items-center gap-4 text-white/60 hover:text-orange-500 transition-colors"
                >
                  <div className="p-3 bg-white/5 rounded-full group-hover:bg-orange-500/10 transition-colors">
                    <Mail size={18} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs tracking-[0.2em] uppercase font-medium">
                    Gamagel751@gmail.com
                  </span>
                </a>

                <a
                  href="tel:+94717441271"
                  className="group flex items-center gap-4 text-white/60 hover:text-orange-500 transition-colors"
                >
                  <div className="p-3 bg-white/5 rounded-full group-hover:bg-orange-500/10 transition-colors">
                    <Phone size={18} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs tracking-[0.2em] uppercase font-medium">
                    +94 71 744 1271
                  </span>
                </a>

                <div className="flex items-start gap-4 text-white/60">
                  <div className="p-3 bg-white/5 rounded-full">
                    <MapPin size={18} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs tracking-[0.2em] uppercase font-medium leading-relaxed pt-3">
                    Udamththala, <br /> Tissamaharama, Sri Lanka
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links Updated with LinkedIn & GitHub */}
            <div className="pt-12 border-t border-white/5">
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 mb-6 font-bold">
                Professional Profiles
              </p>
              <div className="flex gap-8">
                <a
                  href="https://www.linkedin.com/in/thamindu-gamage-634799335/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-orange-500 transition-all font-bold"
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
              
              </div>
            </div>
          </div>

          {/* Right: The Form */}
          <div className="lg:col-span-7 bg-white/[0.01] border border-white/5 p-8 md:p-12 rounded-sm relative backdrop-blur-sm">
            <form onSubmit={onSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="group relative">
                  <label className="text-[9px] uppercase tracking-[0.3em] text-white/30 group-focus-within:text-orange-500 transition-colors font-bold">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-orange-500 transition-all font-light text-white/90 placeholder:text-white/5"
                    placeholder="Thamindu Gamage"
                  />
                </div>

                <div className="group relative">
                  <label className="text-[9px] uppercase tracking-[0.3em] text-white/30 group-focus-within:text-orange-500 transition-colors font-bold">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-orange-500 transition-all font-light text-white/90 placeholder:text-white/5"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="group relative">
                <label className="text-[9px] uppercase tracking-[0.3em] text-white/30 group-focus-within:text-orange-500 transition-colors font-bold">
                  Service Interest
                </label>
                <select className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-orange-500 transition-all font-light text-white/40 appearance-none cursor-pointer">
                  <option className="bg-[#0b0b0b]">Event Coverage</option>
                  <option className="bg-[#0b0b0b]">Cinematic Portraits</option>
                  <option className="bg-[#0b0b0b]">Editorial / Brand</option>
                  <option className="bg-[#0b0b0b]">Other Inquiry</option>
                </select>
              </div>

              <div className="group relative">
                <label className="text-[9px] uppercase tracking-[0.3em] text-white/30 group-focus-within:text-orange-500 transition-colors font-bold">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-orange-500 transition-all font-light resize-none text-white/90 placeholder:text-white/5"
                  placeholder="Tell me about your vision..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status !== "idle"}
                className="w-full md:w-auto px-12 py-5 bg-white text-black text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-orange-500 hover:text-white transition-all duration-500 flex items-center justify-center gap-3 disabled:opacity-60"
              >
                {status === "idle" && (
                  <>
                    Send Message <ArrowUpRight size={14} />
                  </>
                )}
                {status === "submitting" && "Sending..."}
                {status === "sent" && (
                  <>
                    Message Sent <Check size={14} />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Grainy Texture */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default Contact;