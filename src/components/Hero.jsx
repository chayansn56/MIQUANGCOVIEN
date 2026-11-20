import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero({ onExploreHeritage, onExploreLocations }) {
  return (
    <section className="relative min-h-[90vh] text-white flex items-center overflow-hidden">
      {/* Background Image (Clear, Bright, Crisp Food Photography) */}
      <div 
        className="absolute inset-0 bg-cover bg-center scale-100" 
        style={{ backgroundImage: `url('/assets/hero-mi-quang.jpg')` }}
      />
      {/* Light Transparent Scrim for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
        <div className="max-w-2xl bg-black/50 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-white/15 shadow-2xl">
          {/* Slogan Pill */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-turmeric-400/60 bg-black/60 backdrop-blur-md mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-turmeric-400 animate-pulse" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-turmeric-300">
              Golden Turmeric &middot; Generational Heritage
            </span>
          </div>

          {/* Grand Title */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white tracking-tight mb-6">
            The Vibrant Soul of <br />
            <span className="italic font-normal text-turmeric-400">Authentic Mì Quảng</span>.
          </h1>

          {/* Manifesto Paragraph */}
          <p className="text-stone-200 font-normal text-sm sm:text-base leading-relaxed mb-8">
            Under the visionary leadership of <strong>Founder Pran Nath Soni</strong>, culinary matriarch <strong>Director Vo Thi Vien (Cô Viên)</strong>, and <strong>CEO Chayan Soni</strong>, our culinary house elevates Vietnam's golden turmeric noodle into a world-class gastronomic experience.
          </p>

          {/* Dual Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreHeritage}
              className="px-7 py-3.5 rounded-full bg-turmeric-500 text-brand-black font-bold text-xs tracking-[0.2em] uppercase hover:bg-turmeric-400 transition-all duration-300 shadow-xl shadow-amber-950/40 flex items-center gap-2"
            >
              <span>Explore Our Heritage</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onExploreLocations}
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs tracking-[0.2em] uppercase transition-all duration-300 backdrop-blur-sm"
            >
              View 3 Establishments
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
