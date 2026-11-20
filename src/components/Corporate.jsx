import React from 'react';
import { Building2, Mail, Phone, Check, ShieldCheck, Globe, FileText } from 'lucide-react';

export default function Corporate() {
  const statutoryRows = [
    { label: 'Official Legal Name (English)', value: 'CO VIEN MI QUANG FOOD TRADING COMPANY LIMITED' },
    { label: 'Official Legal Name (Vietnamese)', value: 'CÔNG TY TNHH THƯƠNG MẠI THỰC PHẨM MÌ QUẢNG CÔ VIÊN' },
    { label: 'Enterprise Code / Tax ID', value: '0319275224', isHighlight: true },
    { label: 'Director & Legal Representative', value: 'VO THI VIEN' },
    { label: 'Founder', value: 'PRAN NATH SONI' },
    { label: 'Chief Executive Officer (CEO)', value: 'CHAYAN SONI' },
    { label: 'Registered Corporate Seat', value: '38 Đường 9A, Khu phố Phước Thiện, Phường Long Bình, Thành phố Thủ Đức, TP. Hồ Chí Minh, Vietnam' },
    { label: 'Official Registered Domain', value: 'miquangcovien.com', isHighlight: true },
  ];

  const charterPoints = [
    {
      title: 'Supply Chain Transparency',
      desc: 'All herbs, rice paper, and oils are sourced directly from verified regional agricultural cooperatives in Central Vietnam.'
    },
    {
      title: 'Food Safety Protocols',
      desc: 'Rigorous sanitation, daily inspection by culinary directors, and absolute zero tolerance for artificial chemical additives.'
    },
    {
      title: 'Heritage Preservation Guarantee',
      desc: 'No commercial acceleration. Every pot of broth adheres strictly to multi-hour ancestral reduction methods.'
    },
    {
      title: 'Community Empowerment',
      desc: 'Committed to fair grower remuneration, local hiring, and upholding Central Vietnamese culinary prestige.'
    }
  ];

  return (
    <div className="bg-brand-paper min-h-screen py-16 sm:py-24">
      {/* Editorial Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-xs font-bold tracking-[0.25em] uppercase text-turmeric-600 block mb-3">
          Enterprise Profile & Governance
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight mb-6">
          Corporate <br />
          <span className="italic font-normal text-turmeric-600">Disclosures</span>
        </h1>
        <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Statutory registrations, governance principles, executive leadership, and official commercial records of CO VIEN MI QUANG FOOD TRADING COMPANY LIMITED.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Statutory Enterprise Profile */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm hover:border-turmeric-500 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-turmeric-100 text-turmeric-700 flex items-center justify-center font-bold">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Statutory Enterprise Profile
              </h2>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-semibold">
                Registered Commercial Entity in Vietnam
              </span>
            </div>
          </div>

          <div className="divide-y divide-stone-100 text-sm">
            {statutoryRows.map((row, idx) => (
              <div key={idx} className="py-3.5 flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                <span className="text-stone-500 font-light">{row.label}:</span>
                <span className={`text-stone-900 text-right ${row.isHighlight ? 'font-mono font-bold text-turmeric-600 text-base' : 'font-bold'}`}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Inquiries & Quality Charter */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Executive Inquiries */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-turmeric-500/50 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-turmeric-600 block mb-2">
                Direct Contact
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4">
                Executive Inquiries
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed mb-6">
                For corporate partnerships, brand licensing, cultural collaborations, or institutional inquiries:
              </p>

              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href="mailto:miquang.cv@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-brand-paper border border-stone-200 text-stone-800 hover:border-turmeric-500 transition-colors"
                >
                  <Mail className="w-5 h-5 text-turmeric-600 flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-stone-400">Official Email</span>
                    <span className="font-bold">miquang.cv@gmail.com</span>
                  </div>
                </a>

                <a
                  href="tel:+84906404595"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-brand-paper border border-stone-200 text-stone-800 hover:border-turmeric-500 transition-colors"
                >
                  <Phone className="w-5 h-5 text-turmeric-600 flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-stone-400">Headquarters Hotline</span>
                    <span className="font-bold">+84 906 404 595</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-100 text-stone-500 text-xs font-light">
              Registered in the Socialist Republic of Vietnam. Enterprise Tax ID: <strong>0319275224</strong>.
            </div>
          </div>

          {/* Quality Charter */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-turmeric-600 block mb-2">
                Quality Charter
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4">
                Our Corporate Commitments
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                {charterPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-turmeric-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-stone-900 font-bold block">{pt.title}:</strong>
                      {pt.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-100 text-stone-500 text-xs font-light">
              Under strict oversight of Director Vo Thi Vien & CEO Chayan Soni.
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
