'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, MessageCircle, ArrowRight, Star, ShieldCheck, MapPin } from 'lucide-react';
import RvLogo from './RvLogo';
import { BUSINESS_INFO } from '@/lib/data';

interface HeroProps {
  onOpenInquiryModal?: () => void;
}

export default function Hero({ onOpenInquiryModal }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#050505] text-white pt-6 pb-16 lg:py-24">
      {/* Background Image with Measured Luxury Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80"
          alt="Royal Indian wedding stage and floral mandap decor by RV Events"
          fill
          priority
          referrerPolicy="no-referrer"
          className="object-cover object-center scale-105 filter brightness-[0.32] contrast-[1.1]"
        />
        {/* Radial Gold & Obsidian Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/60 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12)_0%,transparent_75%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Brand Copy & CTAs */}
          <div className="lg:col-span-8 text-center lg:text-left space-y-6">
            {/* Unboxed Metadata Trust Tag */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#F5D889] tracking-wide">
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                <span className="font-bold">5.0 Star Google Rating</span>
              </span>
              <span className="text-[#D4AF37]/50" aria-hidden="true">·</span>
              <span>Farrukhabad & Fatehgarh</span>
              <span className="text-[#D4AF37]/50" aria-hidden="true">·</span>
              <span className="text-zinc-300">Bewar Road, Bholepur</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-bold text-white tracking-tight leading-[1.12]">
              Making Every Celebration{' '}
              <span className="bg-gradient-to-r from-[#FFF5C2] via-[#F5D889] to-[#D4AF37] bg-clip-text text-transparent">
                Unforgettable.
              </span>
            </h1>

            {/* Supporting Prose */}
            <p className="text-base sm:text-lg lg:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed">
              Thoughtfully planned events, beautiful decorations, and memorable experiences with{' '}
              <strong className="font-medium text-[#F5D889]">RV Events and Management, Farrukhabad</strong>.
            </p>

            {/* CTAs: 2 Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#services"
                className="w-full sm:w-auto px-7 py-3.5 rounded text-sm font-semibold tracking-wider uppercase text-black bg-gradient-to-r from-[#F5D889] via-[#D4AF37] to-[#AA7C11] hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)] text-center flex items-center justify-center gap-2.5"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded text-sm font-semibold tracking-wider text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/40 transition-all text-center flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>

            {/* Proof Points & Adjacency */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-[#D4AF37]/20 text-left">
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#F5D889] tabular-nums">15+</p>
                <p className="text-xs text-zinc-400">Event Specialties & Decor Types</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#F5D889] tabular-nums">5.0 ★</p>
                <p className="text-xs text-zinc-400">Google Rating (2 Verified Reviews)</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#F5D889]">Vishal</p>
                <p className="text-xs text-zinc-400">Lead Representative (8090123175)</p>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic RV Brand Crest & Quick Card */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#171717]/90 via-[#0d0d0d]/90 to-[#050505]/95 border border-[#D4AF37]/35 shadow-[0_15px_40px_rgba(0,0,0,0.8)] text-center w-full max-w-sm backdrop-blur-md">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-widest rounded-full">
                Official Business Crest
              </div>

              {/* Logo Emblem */}
              <div className="flex justify-center my-2">
                <RvLogo variant="full" size={130} />
              </div>

              <div className="mt-4 pt-4 border-t border-[#D4AF37]/20 space-y-2">
                <p className="text-xs text-zinc-300 font-sans">
                  <strong>Bewar Road, Bholepur</strong>, Fatehgarh, Farrukhabad
                </p>
                <p className="text-[11px] text-[#F5D889] font-mono">
                  PIN: 209601 / 209602 (U.P.)
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={onOpenInquiryModal}
                    className="w-full py-2.5 px-3 rounded text-xs font-semibold text-black bg-[#D4AF37] hover:bg-[#F5D889] transition-colors"
                  >
                    Request Custom Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
