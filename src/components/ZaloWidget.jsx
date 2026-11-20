import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function ZaloWidget() {
  return (
    <aside aria-label="Quick Connect via Zalo" className="fixed bottom-6 right-6 z-50">
      <a
        href="https://zalo.me/0906404595"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect with Mì Quảng Cô Viên on Zalo (+84 906 404 595)"
        className="group flex items-center gap-2.5 bg-[#0068FF] hover:bg-[#0052cc] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <MessageCircle className="w-5 h-5" />
        <span className="text-xs font-bold tracking-wider uppercase font-sans">
          Zalo Connect
        </span>
      </a>
    </aside>
  );
}
