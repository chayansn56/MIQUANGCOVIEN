import React from 'react';
import { Award, Compass, ShieldCheck } from 'lucide-react';

export default function Leadership() {
  const leaders = [
    {
      id: 'founder',
      badge: 'Founding Visionary',
      name: 'PRAN NATH SONI',
      title: 'Founder',
      initials: 'PS',
      focus: 'Vision of Cross-Border Gastronomic Prestige',
      bio: [
        'As Founder, Pran Nath Soni provided the foundational impetus that established the commercial and philosophical framework of the company. With an international appreciation for culinary heritage and enterprise scaling, he recognized that Central Vietnam’s indigenous culinary gems possessed the depth and refinement to command respect far beyond national borders.',
        'His stewardship emphasizes long-term institutional stability, brand prestige, ethical farmer partnerships, and unwavering support for culinary purism without compromise.'
      ],
      quote: 'A culinary tradition that has survived centuries deserves to be treated with the highest dignity, corporate integrity, and artistic care.',
      highlight: false
    },
    {
      id: 'director',
      badge: 'Director & Legal Representative',
      name: 'VO THI VIEN',
      title: 'Director ("Cô Viên")',
      initials: 'VV',
      focus: 'The Culinary Soul and Living Recipe Keeper',
      bio: [
        'Vo Thi Vien (Cô Viên) is the creative nucleus, legal representative, and master craftswoman whose name honors the brand. Every nuance of our signature nước nhưn reduction, fresh noodle consistency, aromatic shallot oil roasting, and herb selection originates from her personal direction.',
        'Under her strict kitchen governance, all three hubs operate with absolute consistency. She maintains daily oversight of ingredients, personally audits suppliers, and ensures every cook adheres to traditional Central Vietnamese culinary doctrine.'
      ],
      quote: "When a customer sits at our table, they are tasting my family's heritage. There is no room for shortcuts in Cô Viên's kitchen.",
      highlight: true
    },
    {
      id: 'ceo',
      badge: 'Executive Officer',
      name: 'CHAYAN SONI',
      title: 'Chief Executive Officer (CEO)',
      initials: 'CS',
      focus: 'Modernization, Governance & Strategic Growth',
      bio: [
        'Serving as Chief Executive Officer, Chayan Soni spearheads the overarching strategy, corporate compliance, brand architecture, and multi-hub operational scaling across Ho Chi Minh City.',
        'His leadership bridges authentic craftsmanship with contemporary management: establishing transparent corporate records, streamlining supply chain logistics, elevating guest touchpoints, and driving the digital brand infrastructure of miquangcovien.com.'
      ],
      quote: 'Our goal is to build an enduring culinary house that pairs deep generational authenticity with world-class operational governance.',
      highlight: false
    }
  ];

  return (
    <div className="bg-brand-paper min-h-screen py-16 sm:py-24">
      {/* Editorial Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-xs font-bold tracking-[0.25em] uppercase text-turmeric-600 block mb-3">
          Governance & Vision
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight mb-6">
          The Executive <br />
          <span className="italic font-normal text-turmeric-600">Council</span>
        </h1>
        <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          The leadership team behind CO VIEN MI QUANG FOOD TRADING COMPANY LIMITED bridges authentic Vietnamese culinary soul with rigorous international enterprise governance.
        </p>
      </div>

      {/* Leaders List */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {leaders.map((leader) => (
          <section
            key={leader.id}
            className={`bg-white rounded-3xl p-8 sm:p-12 transition-all ${
              leader.highlight
                ? 'border-2 border-turmeric-500 shadow-xl relative'
                : 'border border-stone-200 shadow-sm hover:border-turmeric-500'
            }`}
          >
            {leader.highlight && (
              <span className="absolute -top-3 right-8 bg-turmeric-500 text-brand-black text-[10px] uppercase tracking-widest font-black px-4 py-1.5 rounded-full shadow-md">
                Legal Representative
              </span>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
              {/* Leader Avatar & Identity */}
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-turmeric-500 to-amber-200 text-brand-black flex items-center justify-center font-serif text-3xl font-black mb-4 shadow-xl shadow-turmeric-500/20">
                  {leader.initials}
                </div>
                <span className="text-xs uppercase font-bold tracking-[0.25em] text-turmeric-600">
                  {leader.badge}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                  {leader.name}
                </h2>
                <span className="text-xs text-stone-500 mt-1 font-semibold">
                  {leader.title}
                </span>
              </div>

              {/* Leader Bio & Quote */}
              <div className="lg:col-span-8 space-y-4 text-stone-700 font-light leading-relaxed text-sm sm:text-base border-t lg:border-t-0 lg:border-l border-stone-100 pt-6 lg:pt-0 lg:pl-10">
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  {leader.focus}
                </h3>
                {leader.bio.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
                <blockquote className="italic text-stone-800 border-l-4 border-turmeric-500 pl-4 my-4 font-serif text-base sm:text-lg bg-turmeric-50/60 p-4 rounded-r-2xl">
                  "{leader.quote}"
                </blockquote>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
