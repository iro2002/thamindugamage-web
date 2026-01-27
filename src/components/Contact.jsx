import React, { useState, useEffect } from "react";
import { ArrowUpRight, Check, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState("idle");

  // Ensure page starts at top (useful if Contact is a separate route)
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
      className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-20">
          <p className="text-orange-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-4">
            Availability: Open for 2026
          </p>
          <h1 className="text-6xl md:text-8xl font-serif italic tracking-tighter leading-none">
            Let&apos;s Start a <br />
            <span className="not-italic text-white/90 font-sans uppercase font-bold text-5xl md:text-7xl">
              Conversation
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <p className="text-white/50 text-lg font-light leading-relaxed max-w-sm">
                Every project begins with a story. Tell me yours, and let&apos;s
                create something timeless together.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:hello@tgamage.com"
                  className="group flex items-center gap-4 text-white/80 hover:text-orange-500 transition-colors"
                >
                  <div className="p-3 bg-white/5 rounded-full group-hover:bg-orange-500/10">
                    <Mail size={18} />
                  </div>
                  <span className="text-sm tracking-widest uppercase">
                    hello@tgamage.com
                  </span>
                </a>

                <a
                  href="tel:+94771234567"
                  className="group flex items-center gap-4 text-white/80 hover:text-orange-500 transition-colors"
                >
                  <div className="p-3 bg-white/5 rounded-full group-hover:bg-orange-500/10">
                    <Phone size={18} />
                  </div>
                  <span className="text-sm tracking-widest uppercase">
                    +94 77 123 4567
                  </span>
                </a>

                <div className="flex items-center gap-4 text-white/80">
                  <div className="p-3 bg-white/5 rounded-full">
                    <MapPin size={18} />
                  </div>
                  <span className="text-sm tracking-widest uppercase">
                    Colombo, Sri Lanka
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-12 border-t border-white/5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6">
                Social Portfolios
              </p>
              <div className="flex gap-6">
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs uppercase tracking-widest hover:text-orange-500 transition-all"
                >
                  Instagram
                </a>
                <a
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs uppercase tracking-widest hover:text-orange-500 transition-all"
                >
                  YouTube
                </a>
                <a
                  href="https://behance.net/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs uppercase tracking-widest hover:text-orange-500 transition-all"
                >
                  Behance
                </a>
              </div>
            </div>
          </div>

          {/* Right: The Form */}
          <div className="lg:col-span-7 bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-sm relative">
            <form onSubmit={onSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="group relative">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 group-focus-within:text-orange-500 transition-colors">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-orange-500 transition-all font-light"
                    placeholder="John Doe"
                  />
                </div>

                <div className="group relative">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 group-focus-within:text-orange-500 transition-colors">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-orange-500 transition-all font-light"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="group relative">
                <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 group-focus-within:text-orange-500 transition-colors">
                  Subject / Service
                </label>
                <select className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-orange-500 transition-all font-light text-white/60">
                  <option className="bg-[#050505]">Wedding Inquiry</option>
                  <option className="bg-[#050505]">Editorial Shoot</option>
                  <option className="bg-[#050505]">Personal Branding</option>
                  <option className="bg-[#050505]">Other</option>
                </select>
              </div>

              <div className="group relative">
                <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 group-focus-within:text-orange-500 transition-colors">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-orange-500 transition-all font-light resize-none"
                  placeholder="Tell me about your vision..."
                />
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className="w-full md:w-auto px-12 py-5 bg-white text-black text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-orange-500 hover:text-white transition-all duration-500 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "idle" && (
                  <>
                    Send Message <ArrowUpRight size={16} />
                  </>
                )}
                {status === "submitting" && "Sending..."}
                {status === "sent" && (
                  <>
                    Message Sent <Check size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
