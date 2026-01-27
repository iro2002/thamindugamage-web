// src/pages/Services/PreShoot.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function PreShoot() {
  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white p-8 lg:p-20">
      <Link to="/services" className="text-orange-400 text-xs uppercase tracking-[0.3em]">
        ← Back to Services
      </Link>
      <h1 className="mt-6 text-5xl lg:text-7xl font-serif italic tracking-tight">Pre Shoot</h1>
      <p className="mt-4 max-w-2xl text-white/60 text-sm leading-relaxed">
        Stylized concepts tailored to your unique chemistry.
      </p>
    </section>
  );
}
