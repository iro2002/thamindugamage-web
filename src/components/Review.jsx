import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sahan P.",
    role: "Wedding Client",
    quote: "The storytelling is unreal — every frame felt like cinema. Calm, professional, and the final delivery exceeded expectations.",
    rating: 5,
  },
  {
    name: "Nethmi R.",
    role: "Graduation",
    quote: "Loved the direction and the attention to detail. The retouching was clean, natural, and premium.",
    rating: 5,
  },
  {
    name: "Studio K.",
    role: "Brand Shoot",
    quote: "Fast turnaround, beautiful lighting, and consistent output. Perfect for campaigns and social content.",
    rating: 5,
  },
];

const Review = () => {
  return (
    <section className="relative w-full bg-[#050505] text-white py-24 lg:py-48 px-6 overflow-hidden border-t border-white/[0.05]">
      {/* Structural Accents */}
      <div className="absolute top-0 right-1/3 w-px h-full bg-white/[0.02] hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.8em] text-white/30 block mb-6">
              Testimonials
            </span>
            <h2 className="text-6xl md:text-8xl font-light tracking-tighter leading-none">
              Trusted by <br />
              <span className="italic font-serif text-white/40">the visionary.</span>
            </h2>
          </div>
          <div className="hidden md:block">
             <div className="h-px w-32 bg-white/20 mb-4" />
             <p className="text-[10px] uppercase tracking-widest text-white/40">Established Quality</p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-l border-white/10">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="group relative p-10 md:p-14 border-r border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-700"
            >
              {/* Star Rating - Subtle */}
              <div className="flex gap-1 mb-8">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} size={10} className="fill-white/20 text-transparent group-hover:fill-white/40 transition-colors" />
                ))}
              </div>

              <blockquote className="relative">
                <p className="text-xl md:text-2xl font-light leading-relaxed text-white/80 group-hover:text-white transition-colors duration-500">
                  “{r.quote}”
                </p>
              </blockquote>

              <div className="mt-12 flex items-center gap-4">
                <div className="h-px w-6 bg-white/20 group-hover:w-12 transition-all duration-500" />
                <div>
                  <p className="text-sm font-medium tracking-tight">{r.name}</p>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 mt-1">
                    {r.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA or Note */}
        <div className="mt-20 flex justify-center">
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/20 hover:text-white/50 transition-colors cursor-default">
            Proven Results • Cinematic Excellence • Global Standard
          </p>
        </div>
      </div>

      {/* Background Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default Review;