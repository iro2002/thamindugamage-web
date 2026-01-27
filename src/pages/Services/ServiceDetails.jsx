import React, { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

import Wedding from "./Wedding";
import Engagement from "./Engagement";
import PreShoot from "./PreShoot";
import Graduation from "./Graduation";
import BabyShoot from "./BabyShoot";
import BDShoot from "./BDShoot";

const pageMap = {
  weddings: Wedding,
  engagement: Engagement,
  "pre-shoot": PreShoot,
  graduation: Graduation,
  "baby-shoot": BabyShoot,
  "bd-shoot": BDShoot,
};

export default function ServiceDetails() {
  const { slug } = useParams();
  const { pathname } = useLocation();
  const Page = pageMap[slug];

  // Scroll to top whenever the slug changes (important for mobile UX)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!Page) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-serif mb-4">Service Not Found</h2>
        <p className="text-white/50 mb-8">The event coverage you are looking for doesn't exist.</p>
        <Link 
          className="px-8 py-3 bg-orange-500/10 border border-orange-500/50 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300" 
          to="/"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#050505] min-h-screen">
      {/* Responsive Wrapper: 
        Ensures content doesn't hit the screen edges on small devices 
      */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-20 lg:py-32">
        <Page />
      </div>
    </div>
  );
}