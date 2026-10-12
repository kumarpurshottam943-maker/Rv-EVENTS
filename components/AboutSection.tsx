'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, Check, Sparkles } from 'lucide-react';
import RvLogo from './RvLogo';
import { BUSINESS_INFO } from '@/lib/data';

interface AboutSectionProps {
  onOpenInquiryModal?: () => void;
}

export default function AboutSection({ onOpenInquiryModal }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#050505] text-white border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Brand Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 bg-[#121212] p-8 text-center space-y-6 shadow-2xl">
              <div className="flex justify-center">
                <RvLogo variant="full" size={140} />
              </div>

              <div className="space-y-2 border-t border-[#D4AF37]/20 pt-6">
                <p className="text-xs uppercase tracking-widest text-[#F5D889] font-bold">
                  Event Planning & Management
                </p>
                <h3 className="text-xl font-serif font-bold text-white">
                  RV Events and Management
                </h3>
                <p className="text-xs text-zinc-400">
                  Bewar Road, Bholepur, Fatehgarh, Farrukhabad (U.P.) - 209601
                </p>
              </div>

              <div className="bg-[#050505]/70 p-4 rounded-xl border border-zinc-800 space-y-1.5 text-xs text-zinc-300">
                <p className="flex items-center justify-between">
                  <span className="text-zinc-500">Representative:</span>
                  <span className="font-semibold text-white">Vishal</span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="text-zinc-500">Contact:</span>
                  <span className="font-semibold text-[#F5D889]">8090123175</span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="text-zinc-500">Instagram:</span>
                  <span className="font-mono text-zinc-300">@rv_events_and_management_fbd</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                About The Business
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white">
                Crafting Grand Celebrations in Farrukhabad
              </h2>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              <strong>RV Events and Management</strong> is a professional event planning and decoration service located in the Bholepur neighborhood of Fatehgarh, Farrukhabad. We specialize in transforming family and institutional gatherings into polished, memorable occasions.
            </p>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Led by representative <strong>Vishal</strong>, our team manages every practical detail of event styling — from elaborate royal wedding stages, bridal cold-firework entries, and traditional Haldi/Mehndi decor, to residential fairy lighting and catering coordination.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Personalized theme consultation & layout planning',
                'End-to-end on-ground floral & stage execution',
                'Cold pyro & atmospheric bridal entrance setups',
                'Transparent local pricing with zero hidden costs',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <span className="w-5 h-5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenInquiryModal}
                className="px-6 py-3 rounded text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#F5D889] via-[#D4AF37] to-[#AA7C11] hover:brightness-110 active:scale-[0.98] transition-all"
              >
                Plan Your Celebration With Vishal
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded text-xs font-semibold tracking-wider text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900 border border-emerald-500/40 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
