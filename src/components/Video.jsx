import React from 'react';
import { motion } from 'framer-motion';
import { Play, Instagram, ArrowRight } from 'lucide-react';

export default function EditorialSocialReel() {
  return (
    <div className="relative w-full bg-[#050505] py-24 md:py-40 px-6 overflow-hidden selection:bg-orange-500/30">
      
      {/* Background Text Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[20vw] font-serif italic leading-none">Cinematic</h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT SIDE: Typography & Branding */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 flex flex-col items-start space-y-8"
        >
          <div className="flex items-center gap-4">
            <span className="h-[1px] w-12 bg-orange-500" />
            <span className="text-[10px] font-mono tracking-[0.6em] text-orange-500 uppercase">Featured Reel</span>
          </div>

          <h2 className="text-6xl md:text-8xl font-serif italic leading-[0.8] text-white">
            Moments <br /> 
            <span className="pl-12 md:pl-20">In Motion.</span>
          </h2>

          <p className="text-white/40 font-light text-sm md:text-base leading-relaxed max-w-sm">
            Beyond the still image. Experience the atmosphere, the sound, and the raw emotion of our latest sessions captured in real-time.
          </p>

 
        </motion.div>

        {/* RIGHT SIDE: The Video (Minimalist Presentation) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="lg:col-span-7 relative flex justify-center lg:justify-end"
        >
          {/* Decorative Corner Accents */}
          <div className="absolute top-[-20px] right-[-20px] w-40 h-40 border-t border-r border-white/10 hidden md:block" />
          <div className="absolute bottom-[-20px] left-[-20px] w-40 h-40 border-b border-l border-white/10 hidden md:block" />

          {/* Video Container */}
          <div className="relative z-10 w-full max-w-[340px] aspect-[9/16] bg-[#111] shadow-[0_0_100px_rgba(0,0,0,1)] border border-white/5 overflow-hidden group">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1085285443661356%2F&show_text=false&width=267&t=0"
              width="100%"
              height="100%"
              className="grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 scale-[1.02]"
              scrolling="no"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              title="Facebook Reel"
            />
            
            {/* Elegant Overlay Label */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none">
              <div className="px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-3">
                <Play size={10} className="fill-white text-white" />
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/80">Play Story</span>
              </div>
            </div>
          </div>

          {/* Side Vertical Text */}
          <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 rotate-90 hidden xl:block">
            <span className="text-[10px] font-mono tracking-[1em] text-white/20 uppercase whitespace-nowrap">
              Social Evidence © 2026
            </span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}