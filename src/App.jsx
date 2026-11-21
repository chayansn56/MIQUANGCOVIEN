import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Dishes from './components/Dishes';
import Heritage from './components/Heritage';
import Craft from './components/Craft';
import Leadership from './components/Leadership';
import Locations from './components/Locations';
import Corporate from './components/Corporate';
import Footer from './components/Footer';
import ZaloWidget from './components/ZaloWidget';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');

  const navigateTo = (tab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-paper font-sans text-stone-900 flex flex-col selection:bg-turmeric-400 selection:text-brand-black">
      {/* Sticky Header with Navigation */}
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* Main Content Area based on currentTab */}
      <main className="flex-grow">
        {currentTab === 'home' && (
          <>
            <Hero
              onExploreHeritage={() => navigateTo('heritage')}
              onExploreLocations={() => navigateTo('locations')}
            />
            {/* Curated Dishes Portfolio on Home */}
            <Dishes onExploreLocations={() => navigateTo('locations')} />
            {/* Establishments Teaser on Home */}
            <Locations />
          </>
        )}

        {currentTab === 'heritage' && <Heritage />}
        {currentTab === 'craft' && <Craft />}
        {currentTab === 'dishes' && <Dishes onExploreLocations={() => navigateTo('locations')} />}
        {currentTab === 'leadership' && <Leadership />}
        {currentTab === 'locations' && <Locations />}
        {currentTab === 'corporate' && <Corporate />}
      </main>

      {/* Persistent Footer */}
      <Footer currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* Quick Zalo Connect Floating Button */}
      <ZaloWidget />
    </div>
  );
}
