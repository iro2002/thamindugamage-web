import React from "react";
import { Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0a] text-white border-t border-white/5">
      {/* Subtle texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay
        [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12 py-20">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
          
          {/* Brand */}
          <div>
            <h2 className="font-serif text-2xl tracking-tight">
              Thamindu <span className="italic font-light">Gamage</span>
            </h2>
            <p className="mt-3 text-[11px] uppercase tracking-[0.4em] text-white/50">
              Photography
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/50">
              Cinematic photography for weddings, portraits, and brands —
              crafted with emotion, light, and intention.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">
              Navigate
            </p>
            <ul className="space-y-4">
              {[
                { name: "Portfolio", href: "#portfolio" },
                { name: "The Artist", href: "#about" },
                { name: "Journal", href: "#journal" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">
              Contact
            </p>

            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-center gap-3">
                <Mail size={14} />
                <a
                  href="mailto:hello@thamindugamage.com"
                  className="hover:text-white transition"
                >
                  hello@thamindugamage.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Instagram size={14} />
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  Instagram
                </a>
              </li>

              <li className="flex items-center gap-3">
                <MapPin size={14} />
                <span>Colombo · Sri Lanka / Global</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[11px] text-white/40 tracking-wide">
            © {new Date().getFullYear()} Thamindu Gamage Photography. All rights reserved.
          </p>

          <p className="text-[10px] uppercase tracking-[0.4em] text-white/30">
            Cinematic · Timeless · Intentional
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
