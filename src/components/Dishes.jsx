import React from 'react';
import { Disc, Leaf, Flame, ArrowRight } from 'lucide-react';

export default function Dishes({ onExploreLocations }) {
  const benchmarks = [
    {
      title: 'Mì Quảng Tôm Thịt',
      badge: 'The Benchmark',
      tag: 'Central Heritage',
      subtitle: 'Sweet River Prawns & Caramelized Pork Belly',
      desc: 'Fresh river prawns and tender pork belly braised in shallot-infused turmeric sauce. Served over freshly steamed turmeric noodles, crowned with roasted peanuts and quail eggs.',
      image: '/assets/mi-quang-ga-tom.jpg',
      footerLeft: 'Traditional Recipe',
      footerRight: 'Signature Masterpiece',
      isChefChoice: false
    },
    {
      title: 'Mì Quảng Gà Ta',
      badge: 'Countryside Heritage',
      tag: 'Free-Range Poultry',
      subtitle: 'Firm Countryside Free-Range Chicken',
      desc: 'Selected free-range chicken renowned for sweet, firm meat and golden skin. Braised gently with turmeric and native aromatics to preserve tenderness and rich savory broth.',
      image: '/assets/quang-noodles-recipe.jpg',
      footerLeft: 'Central Free-Range',
      footerRight: 'Most Beloved',
      isChefChoice: true
    },
    {
      title: 'Mì Quảng Đặc Biệt Cô Viên',
      badge: 'The Grand Feast',
      tag: 'House Signature',
      subtitle: 'The Grand Combination of All Proteins',
      desc: 'The ultimate realization of Cô Viên’s art: uniting braised prawns, caramelized pork, free-range chicken, and tender riblets with double accompaniments of toasted sesame crackers.',
      image: '/assets/hero-mi-quang.jpg',
      footerLeft: 'All-Star Combination',
      footerRight: 'House Grand Bowl',
      isChefChoice: false
    }
  ];

  const specialties = [
    {
      title: 'Mì Quảng Sườn Non',
      badge: 'Slow Braised',
      tag: 'Prime Cut',
      subtitle: 'Succulent Young Pork Riblets',
      desc: 'Young, tender riblets simmered until marrow juices dissolve into the reduction. The meat yields effortlessly, rich in natural gelatin and smoky turmeric notes.',
      image: '/assets/mi-quang-hoi-an.jpg',
      footerLeft: 'Slow-cooked 6 hours',
      footerRight: 'Marrow Richness'
    },
    {
      title: 'Mì Quảng Cá Lóc',
      badge: 'Coastal Delicacy',
      tag: 'Freshwater Fish',
      subtitle: 'Turmeric Pan-Seared Snakehead Fish',
      desc: 'Firm fillets of fresh snakehead fish filleted with care, marinated in fresh crushed turmeric and fish sauce, then pan-seared until fragrant with no fishiness.',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
      footerLeft: 'Traditional Countryside',
      footerRight: 'Pure Flavor'
    },
    {
      title: 'Mì Quảng Bò',
      badge: 'Tender Beef',
      tag: 'Select Beef Cuts',
      subtitle: 'Simmered Beef Flank & Native Aromatics',
      desc: 'Tender slices of premium beef slow-cooked in a robust reduction laced with star anise and shallot oils, yielding a deeply aromatic culinary depth.',
      image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
      footerLeft: 'Savory Depth',
      footerRight: 'Fragrant Essence'
    }
  ];

  return (
    <div className="bg-brand-paper">
      {/* Hero Header */}
      <section className="text-white py-20 sm:py-28 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-100" 
          style={{ backgroundImage: `url('/assets/hero-mi-quang.jpg')` }}
        />
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-black/40 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-white/20 shadow-2xl">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-turmeric-400 block mb-3">
            Culinary Repertoire
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white mb-4 leading-tight">
            Our Signature Creations
          </h1>
          <p className="text-stone-200 font-normal text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Every bowl of Mì Quảng Cô Viên is an artisanal symphony: golden turmeric ribbon noodles, 10-hour concentrated umami reduction, crisp mountain herbs, and premium local meats.
          </p>
        </div>
      </section>

      {/* Dishes Showcase */}
      <main className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Category 1 */}
        <section>
          <div className="mb-12 border-b-2 border-stone-200 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-turmeric-600 block">Classics & Flagships</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-1">The Traditional Benchmarks</h2>
            </div>
            <span className="text-xs text-stone-500 font-semibold">Slow-braised with native shallots & pure peanut oil</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benchmarks.map((dish, idx) => (
              <div 
                key={idx}
                className={`bg-white rounded-3xl overflow-hidden border-2 ${
                  dish.isChefChoice ? 'border-turmeric-500 shadow-xl' : 'border-stone-200 shadow-sm'
                } hover:border-turmeric-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative`}
              >
                {dish.isChefChoice && (
                  <span className="absolute -top-3 right-6 bg-turmeric-500 text-brand-black text-[9px] uppercase tracking-widest font-black px-3.5 py-1 rounded-full shadow-md z-10">
                    Chef's Choice
                  </span>
                )}
                <div>
                  <div className="aspect-[16/11] overflow-hidden relative">
                    <img src={dish.image} alt={dish.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-4 left-4 bg-brand-black/90 backdrop-blur-md text-turmeric-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-turmeric-500/50">
                      {dish.badge}
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-turmeric-600 block mb-1">{dish.tag}</span>
                    <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">{dish.title}</h3>
                    <p className="text-xs text-stone-500 font-semibold mb-4">{dish.subtitle}</p>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">{dish.desc}</p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span>{dish.footerLeft}</span>
                  <span className="text-turmeric-700 font-bold">{dish.footerRight}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category 2 */}
        <section>
          <div className="mb-12 border-b-2 border-stone-200 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-turmeric-600 block">Regional Delicacies</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-1">Specialty & Cut Variations</h2>
            </div>
            <span className="text-xs text-stone-500 font-semibold">Artisanal preparations for discerning palates</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialties.map((dish, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border-2 border-stone-200 shadow-sm hover:border-turmeric-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/11] overflow-hidden relative">
                    <img src={dish.image} alt={dish.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-4 left-4 bg-brand-black/90 backdrop-blur-md text-turmeric-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-turmeric-500/50">
                      {dish.badge}
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-turmeric-600 block mb-1">{dish.tag}</span>
                    <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">{dish.title}</h3>
                    <p className="text-xs text-stone-500 font-semibold mb-4">{dish.subtitle}</p>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">{dish.desc}</p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span>{dish.footerLeft}</span>
                  <span className="text-turmeric-700 font-bold">{dish.footerRight}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Accompaniments */}
        <section className="bg-white rounded-3xl p-8 sm:p-14 border-2 border-stone-200 shadow-sm">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-turmeric-600 block mb-1">Ritual of the Table</span>
            <h2 className="font-serif text-3xl font-bold text-stone-900">Indispensable Culinary Accompaniments</h2>
            <p className="text-stone-600 text-sm mt-2 font-light">
              True Mì Quảng is not enjoyed from a single bowl alone—it is assembled at the table with vital regional accompaniments that complete the sensory experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-brand-paper border border-stone-200">
              <div className="w-10 h-10 rounded-xl bg-turmeric-100 text-turmeric-700 flex items-center justify-center font-bold mb-4">
                <Disc className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-lg text-stone-900 mb-2">Bánh Tráng Đại Lộc</h4>
              <p className="text-stone-600 text-xs leading-relaxed">
                Thick, crunchy rice paper laden with black sesame seeds, toasted by hand over coconut charcoal. Shattered directly into the bowl for texture.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-paper border border-stone-200">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-4">
                <Leaf className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-lg text-stone-900 mb-2">Dĩa Rau Sống 9 Vị</h4>
              <p className="text-stone-600 text-xs leading-relaxed">
                Shaved banana blossoms, Vietnamese mint (rau răm), fish mint, and fresh Trà Quế herbs that cleanse the palate with cool botanical crispness.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-paper border border-stone-200">
              <div className="w-10 h-10 rounded-xl bg-turmeric-100 text-turmeric-700 flex items-center justify-center font-bold mb-4">
                <Flame className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-lg text-stone-900 mb-2">Ớt Xanh & Nước Mắm Nhĩ</h4>
              <p className="text-stone-600 text-xs leading-relaxed">
                Fresh green Central bird's-eye chilies bitten raw between mouthfuls, alongside pure artisanal fish sauce seasoned with crushed native garlic.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* CTA */}
      <section className="py-20 bg-brand-black text-white border-t border-brand-charcoal text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-turmeric-400 block mb-3">Experience It Fresh Daily</span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
            Taste Authentic Cô Viên at Our Three Hubs
          </h3>
          <button
            onClick={onExploreLocations}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-turmeric-500 text-brand-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-turmeric-400 transition-all shadow-lg shadow-turmeric-500/20"
          >
            <span>View Locations & Directions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
