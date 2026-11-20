import React from 'react';
import { MapPin, Clock, Phone, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';

export default function Locations() {
  const hubs = [
    {
      id: 'hub-01',
      badge: 'Hub 01 · Registered Seat',
      type: 'Corporate HQ & Lounge',
      name: 'Long Bình Corporate Headquarters',
      address: '38 Đường 9A, Khu phố Phước Thiện, Phường Long Bình, Thành phố Thủ Đức, TP. Hồ Chí Minh, Vietnam',
      hours: '06:00 AM – 09:30 PM (Seven Days a Week)',
      mapsUrl: 'https://maps.google.com/?q=38+Đường+9A+Long+Bình+Thủ+Đức',
      notes: 'Serving as the legal and administrative corporate seat of Co Vien Mi Quang Food Trading Company Limited, this location pairs corporate management with a refined dining lounge serving the Long Bình community.',
      isFlagship: false
    },
    {
      id: 'hub-02',
      badge: 'Hub 02 · High Capacity',
      type: 'Flagship Culinary Experience',
      name: 'Nguyễn Xiển Flagship Culinary Hub',
      address: '532 – 542 Nguyễn Xiển, Phường Long Thạnh Mỹ / Long Bình, TP. Thủ Đức, TP. Hồ Chí Minh, Vietnam',
      hours: '06:00 AM – 10:00 PM (Daily Extended Service)',
      hotlines: ['+84 906 404 595', '+84 909 622 967'],
      mapsUrl: 'https://maps.google.com/?q=532+Nguyễn+Xiển+Thủ+Đức',
      image: '/assets/mi-quang-cn3.jpeg',
      notes: 'Our flagship and primary production kitchen. Features spacious traditional wooden seating, open artisan prep line, and high-capacity welcoming dining.',
      isFlagship: true
    },
    {
      id: 'hub-03',
      badge: 'Hub 03 · Urban Center',
      type: 'Urban Gastronomic Presence',
      name: 'Nguyễn Quý Đức Hub',
      address: '45 Nguyễn Quý Đức, Phường An Phú, TP. Thủ Đức, TP. Hồ Chí Minh, Vietnam',
      hours: '06:30 AM – 09:30 PM (Daily)',
      mapsUrl: 'https://maps.google.com/?q=45+Nguyễn+Quý+Đức+An+Phú+Thủ+Đức',
      notes: 'Situated in the cosmopolitan hub of An Phú, this location delivers the warmth of rural Quảng Nam to urban professionals, expatriates, and traditional food connoisseurs alike.',
      isFlagship: false
    }
  ];

  return (
    <div className="bg-brand-paper min-h-screen py-16 sm:py-24">
      {/* Editorial Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-xs font-bold tracking-[0.25em] uppercase text-turmeric-600 block mb-3">
          Culinary Establishments
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight mb-6">
          Our Three Official <br />
          <span className="italic font-normal text-turmeric-600">Establishments</span>
        </h1>
        <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Strategically located across Thu Duc City, Ho Chi Minh City to preserve authenticity and ensure prompt service across all metropolitan hubs.
        </p>
      </div>

      {/* Hubs Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {hubs.map((hub) => (
          <section
            key={hub.id}
            className={`bg-white rounded-3xl p-8 sm:p-12 transition-all ${
              hub.isFlagship
                ? 'border-2 border-turmeric-500 shadow-2xl relative'
                : 'border border-stone-200 shadow-sm hover:border-turmeric-500'
            }`}
          >
            {hub.isFlagship && (
              <span className="absolute -top-3 right-8 bg-turmeric-500 text-brand-black text-[10px] uppercase tracking-widest font-black px-4 py-1.5 rounded-full shadow-md">
                Flagship Culinary Center
              </span>
            )}

            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-stone-100 gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="px-3 py-1 rounded-full bg-turmeric-100 text-turmeric-800 font-bold text-[10px] uppercase tracking-wider">
                    {hub.badge}
                  </span>
                  <span className="text-xs text-stone-500 font-semibold">{hub.type}</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                  {hub.name}
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {hub.hotlines && (
                  <a
                    href="tel:+84906404595"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-300 text-stone-800 text-xs font-bold uppercase tracking-wider hover:border-turmeric-500 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-turmeric-600" />
                    <span>Call Hotline</span>
                  </a>
                )}
                <a
                  href={hub.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-black text-turmeric-400 text-xs font-bold uppercase tracking-wider hover:bg-turmeric-500 hover:text-brand-black transition-colors shadow-md"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-stone-700 leading-relaxed font-light">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-turmeric-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold text-stone-900 block">Hub Address:</strong>
                    <span>{hub.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-turmeric-600 flex-shrink-0" />
                  <div>
                    <strong className="font-bold text-stone-900 block">Operating Hours:</strong>
                    <span>{hub.hours}</span>
                  </div>
                </div>

                {hub.hotlines && (
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-turmeric-600 flex-shrink-0" />
                    <div>
                      <strong className="font-bold text-stone-900 block">Dedicated Hotlines:</strong>
                      <span>{hub.hotlines.join(' · ')}</span>
                    </div>
                  </div>
                )}
              </div>

              {hub.image ? (
                <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-stone-200 shadow-md">
                  <img src={hub.image} alt={hub.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ) : (
                <div className="bg-brand-paper p-6 rounded-2xl border border-stone-200">
                  <h4 className="font-serif font-bold text-base text-stone-900 mb-2">Hub Significance</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {hub.notes}
                  </p>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
