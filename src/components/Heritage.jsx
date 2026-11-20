import React from 'react';
import { Sparkles, Shield, Heart, Users } from 'lucide-react';

export default function Heritage() {
  return (
    <div className="bg-brand-paper min-h-screen py-16 sm:py-24">
      {/* Editorial Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-xs font-bold tracking-[0.25em] uppercase text-turmeric-600 block mb-3">
          Chronicle & Philosophy
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight mb-6">
          The Living Heritage of <br />
          <span className="italic font-normal text-turmeric-600">Quảng Nam</span>
        </h1>
        <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          From the rural hearths of Central Vietnam to an international gastronomic house, discover the living heritage behind Mì Quảng Cô Viên.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Chapter 1: Sacred Soil */}
        <article className="bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm hover:border-turmeric-500 transition-colors">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-turmeric-600 block mb-2">
            Chapter One
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-snug mb-6">
            The Sacred Soil of Central Vietnam
          </h2>
          
          <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-md border border-stone-200 mb-6">
            <img 
              src="/assets/hoi-an-art.jpg" 
              alt="Street Scene Hoi An Heritage Art" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base font-light">
            <p>
              In the heart of Vietnam, nestled between the Truong Son mountains and the Eastern Sea, lies the historical province of Quảng Nam. It is a land characterized by sun-baked rice fields, tempestuous coastal weather, and resilient, deeply hospitable people.
            </p>
            <p>
              Unlike the clear, delicate broths of Hanoi’s Phở in the north or the sweet, bountiful noodle soups of the Mekong Delta in the south, <strong>Mì Quảng</strong> was born of rustic necessity and boundless culinary ingenuity. It was designed to nourish hard-working farmers and travelers along the historic trade ports of Hội An.
            </p>
            <p>
              Mì Quảng is fundamentally distinct: it is not a soup, nor is it a dry salad. It is an intricate architectural harmony anchored by a shallow, intensely concentrated braised reduction called <em>nước nhưn</em>, enveloping fresh, hand-cut turmeric rice noodles and topped with a lavish garden of crisp wild herbs.
            </p>
          </div>
        </article>

        {/* Chapter 2: The Matriarch */}
        <article className="bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm hover:border-turmeric-500 transition-colors">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-turmeric-600 block mb-2">
            Chapter Two
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-snug mb-6">
            The Matriarch: Vo Thi Vien (Cô Viên)
          </h2>
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base font-light">
            <p>
              For <strong>Director Vo Thi Vien</strong>, affectionately referred to as <em>Cô Viên</em>, this dish was never just food—it was the living heritage of her mother and grandmothers before her. Growing up immersed in the traditional morning markets and village stone grinders of Central Vietnam, she absorbed the intangible secrets of seasoning balance.
            </p>
            <blockquote className="italic text-stone-800 border-l-4 border-turmeric-500 pl-4 my-4 font-serif text-base sm:text-lg bg-turmeric-50/60 p-4 rounded-r-2xl">
              "In our village, no one ever used artificial seasonings or bouillon cubes. If you wanted richness, you spent hours caramelizing local shallots (<em>củ nén</em>) in cold-pressed peanut oil. If you wanted sweetness, you slow-braised fresh river prawns and free-range meats until their natural juices reduced into gold."
            </blockquote>
            <p>
              When establishing <strong>CO VIEN MI QUANG FOOD TRADING COMPANY LIMITED</strong>, her cardinal rule was clear: modern commercial expediency would never compromise the ancestral purity of her family recipe.
            </p>
          </div>
        </article>

        {/* Chapter 3: An International Synergy */}
        <article className="bg-white p-8 sm:p-12 rounded-3xl border-2 border-turmeric-500/50 shadow-lg">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-turmeric-600 block mb-2">
            Chapter Three
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-snug mb-6">
            An International Synergy of Leadership
          </h2>
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base font-light">
            <p>
              The formalization of the brand took shape through a unique cross-cultural encounter. <strong>Founder Pran Nath Soni</strong>, recognizing the singular brilliance and global sophistication of Central Vietnamese cuisine, saw an opportunity to bring corporate rigor and international vision to this time-honored craft.
            </p>
            <p>
              Joined by <strong>CEO Chayan Soni</strong>, the executive team united to build a modern corporate enterprise: establishing certified supply partnerships with sustainable herb growers, securing high-capacity culinary hubs in Thu Duc City, and implementing strict hygienic protocols while keeping every single bowl artisanal.
            </p>
          </div>
        </article>

        {/* Chapter 4: 4 Guiding Precepts */}
        <article className="space-y-6">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-turmeric-600 block">
            Chapter Four
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-snug">
            Our Unbending Guiding Precepts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm hover:border-turmeric-500 transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-turmeric-100 text-turmeric-800 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-stone-900 mb-2">Purity of Ingredients</h4>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Zero artificial enhancers. Only fresh local river prawns, countryside meats, pure peanut oil, and real turmeric.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm hover:border-turmeric-500 transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-turmeric-100 text-turmeric-800 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-stone-900 mb-2">Reverence for Time</h4>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Simmering the <em>nước nhưn</em> cannot be accelerated. Each batch undergoes multi-hour braising to unlock natural collagen and sweetness.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm hover:border-turmeric-500 transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-stone-900 mb-2">Agricultural Community</h4>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Direct farm partnerships supporting regional Vietnamese farmers for organic banana blossoms and traditional rice paper.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm hover:border-turmeric-500 transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-turmeric-100 text-turmeric-800 flex items-center justify-center mb-4">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-stone-900 mb-2">Hospitality with Dignity</h4>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Every diner is treated as a guest in our personal family home, greeted with warm tea, fragrant herbs, and generous bowls.
              </p>
            </div>
          </div>
        </article>

      </div>
    </div>
  );
}
