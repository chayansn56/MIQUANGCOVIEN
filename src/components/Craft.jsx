import React from 'react';
import { Sparkles, Flame, Leaf, Volume2, ShieldCheck } from 'lucide-react';

export default function Craft() {
  const pillars = [
    {
      id: 'pillar-1',
      num: 'Pillar I',
      title: 'The Fresh Turmeric Rice Ribbon',
      tagline: 'Zero Preservatives · 100% Native Paddy Rice · Hand-steamed Daily',
      desc: 'Unlike industrially dried noodles, authentic Mì Quảng noodles must be made fresh each dawn. At Cô Viên, we use non-sticky local paddy rice steeped in fresh water, ground finely into a satin batter, and seasoned with cold-pressed peanut oil and ground yellow turmeric. Poured onto taut muslin cloth over boiling cauldrons, each sheet is sliced by hand into wide, golden ribbons with a springy, tender elasticity.',
      image: '/assets/quang-noodles-recipe.jpg',
      icon: Sparkles
    },
    {
      id: 'pillar-2',
      num: 'Pillar II',
      title: 'The Concentrated "Nhưn" Reduction',
      tagline: '10+ Hour Reduction · Caramelized Củ Nén · Shallow Ladle Harmony',
      desc: 'The most common misconception is treating Mì Quảng like Phở or Bún Bò Huế. Mì Quảng is never flooded with soup. The broth—nước nhưn—is an intensely reduced savory essence simmered for over 10 hours from bone reductions, caramelized native white shallots (củ nén), and the braising juices of fresh meats. Only a shallow ladle (just enough to moisten the bottom third) is poured, allowing noodles to absorb the deep umami without becoming soggy.',
      image: '/assets/mi-quang-hoi-an.jpg',
      icon: Flame
    },
    {
      id: 'pillar-3',
      num: 'Pillar III',
      title: 'The Nine-Herb Botanical Garden',
      tagline: 'Trà Quế Lineage · Fresh Shaved Banana Blossom · Raw Vitality',
      desc: 'A bowl of Mì Quảng without its mountain of fresh greens is incomplete. The herb basket provides the crisp, bitter, and fragrant counterbalance to rich braised meats. Our garden combines nine botanicals: shaved young banana blossoms (bắp chuối), peppery Vietnamese mint (rau răm), sweet Thai basil, pungent fish mint (diếp cá), coriander, saw-tooth herb, perilla, crisp water dropwort, and tender young mustard greens.',
      image: '/assets/hero-mi-quang.jpg',
      icon: Leaf
    },
    {
      id: 'pillar-4',
      num: 'Pillar IV',
      title: 'Charcoal-Toasted Sesame Crackers',
      tagline: 'Artisanal Đại Lộc Rice Paper · Black Sesame · Coconut Shell Embers',
      desc: 'Mì Quảng engages all five human senses—especially sound. The unmistakable crisp crackle of Bánh tráng mè nướng broken over the bowl introduces a textural bridge between noodle softness and toasted nuttiness. Sourced from the craft villages of Đại Lộc, these thick sheets are packed with black sesame seeds and slowly roasted by hand over coconut-shell charcoal embers.',
      image: '/assets/mi-quang-ga-tom.jpg',
      icon: Volume2
    }
  ];

  return (
    <div className="bg-brand-paper min-h-screen py-16 sm:py-24">
      {/* Editorial Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-xs font-bold tracking-[0.25em] uppercase text-turmeric-600 block mb-3">
          Gastronomic Architecture
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight mb-6">
          The Five Pillars of <br />
          <span className="italic font-normal text-turmeric-600">Our Craft</span>
        </h1>
        <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Central Vietnamese gastronomy is an exact architectural equilibrium: toothsome rice elasticity, concentrated meat reductions, botanical freshness, and acoustic crunch.
        </p>
      </div>

      {/* Pillars List */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {pillars.map((p, idx) => {
          const IconComp = p.icon;
          const isEven = idx % 2 === 1;

          return (
            <section
              key={p.id}
              className="bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm hover:border-turmeric-500 transition-colors"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`lg:col-span-5 aspect-[4/3] sm:aspect-[4/5] rounded-2xl overflow-hidden shadow-md border border-stone-200 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                
                <div className={`lg:col-span-7 space-y-4 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold tracking-[0.25em] uppercase text-turmeric-600">
                      {p.num}
                    </span>
                    <IconComp className="w-4 h-4 text-turmeric-500" />
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
                    {p.title}
                  </h2>
                  <p className="text-stone-700 leading-relaxed text-sm sm:text-base font-light">
                    {p.desc}
                  </p>
                  <div className="pt-4 border-t border-stone-100 text-xs font-bold uppercase tracking-wider text-turmeric-700">
                    {p.tagline}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Quality Commitment Box */}
        <div className="bg-brand-black text-white p-8 sm:p-12 rounded-3xl border border-brand-charcoal flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-turmeric-400">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Craft Guarantee</span>
            </div>
            <h3 className="font-serif text-2xl font-bold">Never Compromised by Speed</h3>
            <p className="text-stone-400 text-xs sm:text-sm font-light max-w-xl">
              Each component of your bowl is freshly prepared every morning across our three certified hubs in Thu Duc City.
            </p>
          </div>
          <div className="px-6 py-3 rounded-full bg-turmeric-500 text-brand-black font-bold text-xs uppercase tracking-wider flex-shrink-0">
            Handcrafted Daily
          </div>
        </div>

      </div>
    </div>
  );
}
