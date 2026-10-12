'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Instagram, Clock, Heart } from 'lucide-react';
import RvLogo from './RvLogo';
import { BUSINESS_INFO, INITIAL_SERVICES } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030303] text-zinc-400 border-t border-[#D4AF37]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-zinc-900">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-block">
              <RvLogo variant="header" />
            </Link>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Premium event planning, wedding stage decoration, bridal entry pyrotechnics, and celebration coordination based in Farrukhabad & Fatehgarh, Uttar Pradesh.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="p-2.5 rounded-lg bg-[#141414] border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors"
                aria-label="Call RV Events"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-pink-950/40 border border-pink-500/30 text-pink-400 hover:bg-pink-600 hover:text-white transition-colors"
                aria-label="Instagram page"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Service Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#F5D889] font-bold">
              Popular Event Services
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {INITIAL_SERVICES.slice(0, 8).map((s) => (
                <a
                  key={s.id}
                  href="#services"
                  className="hover:text-[#FFF5C2] transition-colors truncate"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Summary */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="text-xs uppercase tracking-widest text-[#F5D889] font-bold">
              Direct Contact
            </h4>
            <div className="space-y-2 text-zinc-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Bewar Road, Bholepur, Fatehgarh, Farrukhabad (U.P.)-209601</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Vishal: <strong>8090123175</strong></span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>9:00 AM – 8:00 PM (Daily)</span>
              </p>
              <p className="flex items-center gap-2 font-mono text-[11px] text-[#F5D889]">
                <Instagram className="w-3.5 h-3.5" />
                <span>@rv_events_and_management_fbd</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>© {currentYear} RV Events and Management, Farrukhabad. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/admin" className="hover:text-zinc-300 transition-colors">
              Admin Portal
            </Link>
            <span>·</span>
            <span>Made for Farrukhabad & Fatehgarh Celebrations</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
