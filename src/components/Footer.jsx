import React from 'react';

export default function Footer({ currentTab, setCurrentTab }) {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'heritage', label: 'Heritage' },
    { id: 'craft', label: 'Craft' },
    { id: 'dishes', label: 'Dishes' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'locations', label: 'Locations' },
    { id: 'corporate', label: 'Corporate' },
  ];

  const handleNav = (id) => {
    setCurrentTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-black text-stone-400 py-16 border-t border-brand-charcoal text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Identity */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full border border-turmeric-500 overflow-hidden p-0.5 bg-white shadow-md flex items-center justify-center flex-shrink-0">
              <img src="/assets/logo.png" alt="Mì Quảng Cô Viên Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="font-serif text-lg font-bold text-white block">
                MÌ QUẢNG CÔ VIÊN
              </span>
              <span className="text-stone-500 text-[11px]">
                CO VIEN MI QUANG FOOD TRADING CO., LTD. &middot; Tax ID: 0319275224
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center items-center gap-6 uppercase tracking-[0.15em] text-[11px]" aria-label="Footer Navigation">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`transition-colors py-1 focus:outline-none ${
                  currentTab === link.id
                    ? 'text-turmeric-400 font-bold'
                    : 'text-stone-400 hover:text-turmeric-400'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom Disclaimers */}
        <div className="pt-8 border-t border-brand-charcoal/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} CO VIEN MI QUANG FOOD TRADING COMPANY LIMITED. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Thu Duc City, Ho Chi Minh City, Vietnam</span>
            <span className="text-turmeric-500 font-mono">miquangcovien.com</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
