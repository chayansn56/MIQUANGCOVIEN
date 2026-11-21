import React, { useState } from 'react';
import { Disc, Leaf, Flame, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Dishes({ onExploreLocations }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Creations' },
    { id: 'special', label: 'Mì Quảng Đặc Biệt (69K)' },
    { id: 'traditional', label: 'Mì Quảng Truyền Thống' },
    { id: 'bunchaca', label: 'Bún Chả Cá' },
    { id: 'comga', label: 'Cơm Gà Hội An' },
    { id: 'extras', label: 'Accompaniments' },
  ];

  const dishes = [
    // --- MÌ QUẢNG ĐẶC BIỆT (SPECIAL SELECTION - 69K) ---
    {
      id: 'mi-quang-ga-ta-trung-non',
      category: 'special',
      titleVn: 'Mì Quảng Gà Ta Trứng Non',
      titleEn: 'Mi Quang with Chicken & Young Egg',
      price: '69,000 VND',
      priceShort: '69K',
      badge: 'Chef Signature',
      protein: 'Free-Range Chicken & Creamy Young Egg',
      desc: 'Mì Quảng gà ta với trứng non béo ngậy, nước dùng đậm đà và hương vị đặc trưng miền Trung. A luxurious culinary hallmark pairing tender chicken with rich, velvety young eggs.',
      image: '/assets/dishes/mi-quang-ga-ta-trung-non.png',
      isStar: true
    },
    {
      id: 'mi-quang-tom-thit',
      category: 'special',
      titleVn: 'Mì Quảng Tôm Thịt',
      titleEn: 'Mi Quang with Shrimp & Pork',
      price: '69,000 VND',
      priceShort: '69K',
      badge: 'Central Heritage',
      protein: 'Fresh River Prawns & Caramelized Pork',
      desc: 'Mì Quảng với tôm tươi và thịt heo, kết hợp hài hòa cùng nước dùng đặc trưng. Sweet local prawns braised alongside savory pork belly over golden turmeric rice ribbons.',
      image: '/assets/dishes/mi-quang-tom-thit.png',
      isStar: true
    },
    {
      id: 'mi-quang-suon-non',
      category: 'special',
      titleVn: 'Mì Quảng Sườn Non',
      titleEn: 'Mi Quang with Tender Pork Ribs',
      price: '69,000 VND',
      priceShort: '69K',
      badge: 'Slow Braised',
      protein: 'Succulent Young Pork Riblets',
      desc: 'Mì Quảng sườn non với thịt mềm tan, nước dùng đậm vị và rau sống tươi. Prime tender riblets simmered until marrow juices infuse the concentrated broth.',
      image: '/assets/dishes/mi-quang-suon-non.png',
      isStar: false
    },
    {
      id: 'mi-quang-ga-ta',
      category: 'special',
      titleVn: 'Mì Quảng Gà Ta',
      titleEn: 'Mi Quang with Countryside Chicken',
      price: '69,000 VND',
      priceShort: '69K',
      badge: 'Countryside Favorite',
      protein: 'Firm Countryside Chicken',
      desc: 'Mì Quảng gà ta truyền thống với thịt gà mềm ngọt thơm và rau sống tươi ngon. Naturally reared free-range chicken celebrated for its golden skin and aromatic sweetness.',
      image: '/assets/dishes/mi-quang-ga-ta.png',
      isStar: false
    },
    {
      id: 'mi-quang-tom-trung',
      category: 'special',
      titleVn: 'Mì Quảng Tôm Trứng',
      titleEn: 'Mi Quang with Shrimp & Egg',
      price: '69,000 VND',
      priceShort: '69K',
      badge: 'Popular Choice',
      protein: 'Plump River Shrimp & Quail Egg',
      desc: 'Mì Quảng với tôm tươi, trứng bùi béo và rau sống đặc trưng. Fresh sweet shrimp paired with seasoned boiled eggs in a deeply savory shallot reduction.',
      image: '/assets/dishes/mi-quang-tom-trung.png',
      isStar: false
    },
    {
      id: 'mi-quang-tom-thit-trung',
      category: 'special',
      titleVn: 'Mì Quảng Tôm Thịt Trứng',
      titleEn: 'Mi Quang with Shrimp, Pork & Egg',
      price: '69,000 VND',
      priceShort: '69K',
      badge: 'Complete Trio',
      protein: 'Shrimp, Caramelized Pork & Egg',
      desc: 'Mì Quảng đầy đủ với tôm, thịt heo và trứng hòa quyện hương vị miền Trung. The beloved classic trio offering layers of savory sweetness and silky texture.',
      image: '/assets/dishes/mi-quang-tom-thit-trung.png',
      isStar: false
    },
    {
      id: 'mi-quang-suon-ga',
      category: 'special',
      titleVn: 'Mì Quảng Sườn Non + Gà Ta',
      titleEn: 'Mi Quang with Pork Ribs & Chicken',
      price: '69,000 VND',
      priceShort: '69K',
      badge: 'Hearty Dual-Protein',
      protein: 'Tender Pork Ribs & Free-Range Chicken',
      desc: 'Sự kết hợp giữa sườn non mềm và gà ta trong tô Mì Quảng đậm đà. A robust pairing of braised young ribs and flavorful countryside chicken.',
      image: '/assets/dishes/mi-quang-suon-ga.png',
      isStar: false
    },
    {
      id: 'mi-quang-tom-ga',
      category: 'special',
      titleVn: 'Mì Quảng Tôm Gà',
      titleEn: 'Mi Quang with Shrimp & Chicken',
      price: '69,000 VND',
      priceShort: '69K',
      badge: 'Surf & Turf',
      protein: 'Fresh Shrimp & Countryside Chicken',
      desc: 'Tôm tươi kết hợp cùng thịt gà ta mềm trong nước dùng đậm vị. Fresh local river shrimp and tender chicken simmered together in an artisanal turmeric broth.',
      image: '/assets/dishes/mi-quang-tom-ga.png',
      isStar: false
    },
    {
      id: 'mi-quang-thap-cam',
      category: 'special',
      titleVn: 'Mì Quảng Thập Cẩm',
      titleEn: 'Special Mixed Mi Quang (Grand Bowl)',
      price: '69,000 VND',
      priceShort: '69K',
      badge: 'Grand Feast',
      protein: 'All Signature Proteins Combined',
      desc: 'Tô Mì Quảng thập cẩm với nhiều loại topping đặc trưng: tôm, thịt, gà, sườn và trứng. A hearty, generous bowl uniting all house specialties into one masterpiece.',
      image: '/assets/dishes/mi-quang-thap-cam.png',
      isStar: true
    },
    {
      id: 'mi-quang-tron',
      category: 'special',
      titleVn: 'Mì Quảng Trộn Truyền Thống',
      titleEn: 'Traditional Dry Mi Quang',
      price: '69,000 VND',
      priceShort: '69K',
      badge: 'Artisanal Tossed',
      protein: 'Savory Shallot Sauce & Fresh Botanicals',
      desc: 'Mì Quảng trộn với rau sống và nước sốt đậm đà truyền thống. Dry-style hand-tossed turmeric noodles infused with caramelized shallot oils and crisp regional greens.',
      image: '/assets/dishes/mi-quang-tron.png',
      isStar: false
    },

    // --- MÌ QUẢNG TRUYỀN THỐNG (FROM 50K - 59K) ---
    {
      id: 'mi-quang-thit-heo',
      category: 'traditional',
      titleVn: 'Mì Quảng Thịt Heo',
      titleEn: 'Mi Quang with Tender Pork',
      price: '50,000 VND',
      priceShort: '50K',
      badge: 'Everyday Classic',
      protein: 'Sliced Tender Braised Pork',
      desc: 'Mì Quảng thịt heo truyền thống với thịt mềm, rau sống tươi và nước dùng đậm đà đặc trưng miền Trung. The foundational everyday recipe celebrated across generations.',
      image: '/assets/dishes/mi-quang-thit-heo.png',
      isStar: false
    },
    {
      id: 'mi-quang-ca-loc',
      category: 'traditional',
      titleVn: 'Mì Quảng Cá Lóc',
      titleEn: 'Mi Quang with Snakehead Fish',
      price: '59,000 VND',
      priceShort: '59K',
      badge: 'Coastal Countryside',
      protein: 'Pan-Seared Turmeric Snakehead Fish',
      desc: 'Mì Quảng cá lóc với cá tươi, rau sống và nước dùng thơm ngon đậm vị. Firm freshwater snakehead fish steaks, marinated with crushed golden turmeric and pan-seared to perfection.',
      image: '/assets/dishes/mi-quang-ca-loc.png',
      isStar: true
    },
    {
      id: 'mi-quang-thit-heo-trung',
      category: 'traditional',
      titleVn: 'Mì Quảng Thịt Heo + Trứng',
      titleEn: 'Mi Quang with Pork & Egg',
      price: '59,000 VND',
      priceShort: '59K',
      badge: 'Comfort Classic',
      protein: 'Tender Pork & Seasoned Egg',
      desc: 'Mì Quảng thịt heo kết hợp cùng trứng, rau sống và nước dùng đậm đà. Wholesome combination of tender pork slices, egg, and fragrant herbal garnish.',
      image: '/assets/dishes/mi-quang-thit-heo-trung.png',
      isStar: false
    },

    // --- BÚN CHẢ CÁ (FISH CAKE NOODLE SOUP) ---
    {
      id: 'bun-cha-ca-dac-biet',
      category: 'bunchaca',
      titleVn: 'Bún Chả Cá Đặc Biệt Nhiều Chả Cá',
      titleEn: 'Special Fish Cake Noodle Soup',
      price: '69,000 VND',
      priceShort: '69K',
      badge: 'Seafood Masterpiece',
      protein: 'Assorted Steamed & Fried Fish Cakes',
      desc: 'Bún chả cá đặc biệt với nhiều loại chả cá đặc trưng. A generous coastal broth packed with artisanal steamed fish cakes, crispy fried cakes, and fish meatballs.',
      image: '/assets/dishes/bun-cha-ca-dac-biet.png',
      isStar: true
    },
    {
      id: 'bun-cha-ca-thap-cam',
      category: 'bunchaca',
      titleVn: 'Bún Chả Cá Thập Cẩm',
      titleEn: 'Mixed Fish Cake Noodle Soup',
      price: '59,000 VND',
      priceShort: '59K',
      badge: 'Mixed Coastal',
      protein: 'Variety Fish Cakes & Sweet Broth',
      desc: 'Bún chả cá thập cẩm với nhiều loại topping đặc biệt. Hearty noodle soup featuring an array of handmade fish cakes in a sweet, clear tomato-pineapple broth.',
      image: '/assets/dishes/bun-cha-ca-thap-cam.png',
      isStar: false
    },
    {
      id: 'bun-cha-ca-rieu',
      category: 'bunchaca',
      titleVn: 'Bún Chả Cá + Riêu',
      titleEn: 'Fish Cake Noodle Soup with Riêu',
      price: '50,000 VND',
      priceShort: '50K',
      badge: 'Rich Umami',
      protein: 'Fish Cake & Savory Crab Paste',
      desc: 'Bún chả cá kết hợp cùng riêu đậm đà hương vị. Fish cake noodle soup served with rich, savory crab paste that infuses the broth with deep coastal sweetness.',
      image: '/assets/dishes/bun-cha-ca-rieu.png',
      isStar: false
    },
    {
      id: 'bun-ca-ngu',
      category: 'bunchaca',
      titleVn: 'Bún Cá Ngừ',
      titleEn: 'Fresh Tuna Noodle Soup',
      price: '50,000 VND',
      priceShort: '50K',
      badge: 'Ocean Fresh',
      protein: 'Fresh Ocean Tuna Steaks',
      desc: 'Bún cá ngừ với cá tươi và nước dùng thanh ngọt. Thick, tender cutlets of fresh ocean tuna gently simmered with pineapple, ripe tomatoes, and fragrant herbs.',
      image: '/assets/dishes/bun-ca-ngu.png',
      isStar: false
    },
    {
      id: 'bun-cha-ca-truyen-thong',
      category: 'bunchaca',
      titleVn: 'Bún Chả Cá Truyền Thống',
      titleEn: 'Traditional Fish Cake Noodle Soup',
      price: '50,000 VND',
      priceShort: '50K',
      badge: 'Authentic Da Nang',
      protein: 'Artisanal Fish Cakes',
      desc: 'Bún chả cá truyền thống với nước dùng đậm đà đặc trưng. Classic Central Vietnam recipe featuring springy steamed and fried fish cakes in a fragrant clear broth.',
      image: '/assets/dishes/bun-cha-ca-truyen-thong.png',
      isStar: false
    },

    // --- CƠM GÀ HỘI AN (CHICKEN RICE) ---
    {
      id: 'com-ga-hoi-an',
      category: 'comga',
      titleVn: 'Cơm Gà Hội An',
      titleEn: 'Hoi An Heritage Chicken Rice',
      price: '69,000 VND',
      priceShort: '69K',
      badge: 'Hoi An Icon',
      protein: 'Shredded Free-Range Chicken',
      desc: 'Cơm gà Hội An truyền thống với thịt gà mềm, cơm vàng thơm và rau ăn kèm tươi ngon. Aromatic turmeric rice cooked in chicken broth, topped with shredded free-range chicken and Vietnamese coriander.',
      image: '/assets/dishes/com-ga-hoi-an.png',
      isStar: true
    },
    {
      id: 'com-ga-chat',
      category: 'comga',
      titleVn: 'Cơm Gà Chặt',
      titleEn: 'Chopped Countryside Chicken Rice',
      price: '69,000 VND',
      priceShort: '69K',
      badge: 'Juicy Cuts',
      protein: 'Bone-In Chopped Chicken',
      desc: 'Cơm gà với thịt gà chặt miếng, ăn kèm rau sống và nước chấm đặc trưng. Golden seasoned rice served with generous bone-in cuts of tender chicken and signature dipping sauce.',
      image: '/assets/dishes/com-ga-chat.png',
      isStar: false
    },
    {
      id: 'com-ga-kho',
      category: 'comga',
      titleVn: 'Cơm Gà Kho',
      titleEn: 'Caramelized Braised Chicken Rice',
      price: '69,000 VND',
      priceShort: '69K',
      badge: 'Rich Caramelized',
      protein: 'Claypot Braised Chicken Cuts',
      desc: 'Cơm gà đậm đà với thịt gà kho thơm ngon và hương vị truyền thống. Tender chicken braised in a savory caramelized shallot and chili sauce alongside steaming turmeric rice.',
      image: '/assets/dishes/com-ga-kho.png',
      isStar: false
    }
  ];

  const filteredDishes = activeCategory === 'all'
    ? dishes
    : dishes.filter(d => d.category === activeCategory);

  return (
    <div className="bg-brand-paper min-h-screen">
      {/* Editorial Header */}
      <section className="bg-brand-black text-white py-16 sm:py-24 border-b border-brand-charcoal relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-turmeric-400 block mb-3">
            Official Culinary Catalogue
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Our Authentic <br />
            <span className="italic font-normal text-turmeric-400">Culinary Repertoire</span>
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Every dish is prepared under the strict supervision of <strong>Director Vo Thi Vien (Cô Viên)</strong>, honoring centuries-old Central Vietnamese culinary integrity with zero artificial additives.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1" aria-label="Dishes Category Filter">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none ${
                  activeCategory === cat.id
                    ? 'bg-turmeric-500 text-brand-black shadow-md scale-105'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Dishes Grid */}
      <main className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Render Dish Cards */}
        {activeCategory !== 'extras' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map((dish) => (
              <article
                key={dish.id}
                className={`bg-white rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                  dish.isStar
                    ? 'border-2 border-turmeric-500 shadow-xl hover:shadow-2xl'
                    : 'border border-stone-200 shadow-sm hover:border-turmeric-400 hover:shadow-md'
                }`}
              >
                {/* Authentic Dish Image Header */}
                <div className="relative bg-brand-black aspect-[16/11] flex items-center justify-center p-3 overflow-hidden group">
                  <img
                    src={dish.image}
                    alt={dish.titleVn}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-brand-black/90 backdrop-blur-md text-turmeric-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-turmeric-500/50">
                    {dish.badge}
                  </span>
                  {/* Price Tag */}
                  <span className="absolute top-4 right-4 bg-turmeric-500 text-brand-black text-xs font-black px-3.5 py-1.5 rounded-full shadow-lg font-mono">
                    {dish.priceShort}
                  </span>
                </div>

                {/* Dish Information */}
                <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-turmeric-600 block mb-1">
                      {dish.protein}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-stone-900 leading-snug mb-1">
                      {dish.titleVn}
                    </h3>
                    <p className="text-xs font-semibold text-stone-500 italic mb-4">
                      {dish.titleEn}
                    </p>
                    <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed mb-6">
                      {dish.desc}
                    </p>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-stone-500 font-mono font-semibold">
                      {dish.price}
                    </span>
                    <span className="inline-flex items-center gap-1 text-emerald-700 font-bold text-[11px] uppercase tracking-wider">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Fresh Daily</span>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Accompaniments & Ritual Section */}
        {(activeCategory === 'all' || activeCategory === 'extras') && (
          <section className="bg-white rounded-3xl p-8 sm:p-14 border border-stone-200 shadow-sm space-y-10">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-turmeric-600 block mb-2">
                Ritual of the Table
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-snug">
                Indispensable Side Accompaniments (Món Thêm)
              </h2>
              <p className="text-stone-600 text-sm mt-3 font-light leading-relaxed">
                True Mì Quảng is assembled at the table with traditional regional accompaniments that complete the sensory harmony of elasticity, crunch, herb freshness, and warmth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-brand-paper border border-stone-200 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-turmeric-100 text-turmeric-700 flex items-center justify-center font-bold mb-4">
                    <Disc className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-stone-900 mb-1">Bánh Tráng Đại Lộc</h4>
                  <span className="text-xs font-bold text-turmeric-700 block mb-2">5,000 VND (5K)</span>
                  <p className="text-stone-600 text-xs leading-relaxed font-light">
                    Thick artisanal rice paper packed with toasted black sesame seeds, charcoal roasted. Broken directly over the noodles for sound and crunch.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-brand-paper border border-stone-200 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-4">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-stone-900 mb-1">Dĩa Rau Sống 9 Vị</h4>
                  <span className="text-xs font-bold text-emerald-700 block mb-2">5,000 VND (5K)</span>
                  <p className="text-stone-600 text-xs leading-relaxed font-light">
                    Shaved fresh mountain banana blossom (bắp chuối), Vietnamese mint (rau răm), fish mint, and fresh Trà Quế herbs.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-brand-paper border border-stone-200 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-stone-900 mb-1">Trứng Non Béo Ngậy</h4>
                  <span className="text-xs font-bold text-amber-800 block mb-2">15,000 VND (15K)</span>
                  <p className="text-stone-600 text-xs leading-relaxed font-light">
                    Creamy, tender unlaid young chicken eggs simmered gently in the savory turmeric shallot reduction.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-brand-paper border border-stone-200 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-turmeric-100 text-turmeric-700 flex items-center justify-center font-bold mb-4">
                    <Flame className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-stone-900 mb-1">Tô Mì Thêm</h4>
                  <span className="text-xs font-bold text-turmeric-700 block mb-2">15,000 VND (15K)</span>
                  <p className="text-stone-600 text-xs leading-relaxed font-light">
                    Freshly steamed golden turmeric rice noodles sliced by hand each dawn, served with extra reduction sauce.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

      </main>

      {/* CTA Section */}
      <section className="py-20 bg-brand-black text-white border-t border-brand-charcoal text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-turmeric-400 block mb-3">
            Handcrafted Every Morning
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
            Experience Authentic Cô Viên at Our Three Hubs
          </h3>
          <p className="text-stone-300 text-sm sm:text-base font-light mb-8 max-w-xl mx-auto">
            Available daily across Long Bình Corporate Seat, Nguyễn Xiển Flagship Center, and Nguyễn Quý Đức Urban Hub in Thu Duc City.
          </p>
          <button
            onClick={onExploreLocations}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-turmeric-500 text-brand-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-turmeric-400 transition-all shadow-xl shadow-amber-950/40"
          >
            <span>View Hub Locations & Directions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
