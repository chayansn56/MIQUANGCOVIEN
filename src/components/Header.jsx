import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ currentTab, setCurrentTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'heritage', label: 'Heritage' },
    { id: 'craft', label: 'The Craft' },
    { id: 'dishes', label: 'Dishes' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'locations', label: 'Locations' },
    { id: 'corporate', label: 'Corporate' },
  ];

  const handleNavClick = (id) => {
    setCurrentTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-black/95 backdrop-blur-md border-b border-brand-charcoal text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Insignia */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-3 flex-shrink-0 text-left group focus:outline-none"
        >
          <div className="w-11 h-11 rounded-full border border-turmeric-500 overflow-hidden p-0.5 bg-white shadow-md flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <img src="/assets/logo.png" alt="Mì Quảng Cô Viên Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white leading-tight">
              MÌ QUẢNG CÔ VIÊN
            </span>
            <span className="text-[8px] uppercase tracking-[0.25em] text-turmeric-400 font-bold hidden sm:block">
              Central Vietnam Heritage
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 text-xs font-semibold tracking-[0.12em] uppercase" aria-label="Primary Navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              aria-current={currentTab === item.id ? 'page' : undefined}
              className={`transition-colors py-1 focus:outline-none ${
                currentTab === item.id
                  ? 'text-turmeric-400 border-b-2 border-turmeric-500 font-bold'
                  : 'text-stone-300 hover:text-turmeric-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
          <button
            onClick={() => handleNavClick('locations')}
            className="px-5 py-2 rounded-full bg-turmeric-500 text-brand-black text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-turmeric-400 transition-all duration-300 shadow-md"
          >
            Find Hubs
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-menu"
          aria-label="Toggle Navigation"
          className="xl:hidden p-2 text-stone-300 hover:text-turmeric-400 flex-shrink-0 focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-nav-menu" className="xl:hidden bg-brand-black border-b border-brand-charcoal px-6 py-6 space-y-3 text-xs uppercase tracking-[0.18em]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left py-2 focus:outline-none ${
                currentTab === item.id
                  ? 'text-turmeric-400 font-bold'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
