'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '@/lib/data';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#070707] text-white border-t border-[#D4AF37]/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold flex items-center justify-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-zinc-400">
            Everything you need to know about booking, decor planning, and coordination with RV Events.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl overflow-hidden border border-zinc-800 bg-[#101010] transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-white hover:text-[#F5D889] transition-colors"
                >
                  <span className="text-sm sm:text-base font-serif font-semibold">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 bg-[#0c0c0c] animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 rounded-xl bg-gradient-to-r from-[#141414] to-[#0a0a0a] border border-[#D4AF37]/20 text-center space-y-3">
          <p className="text-xs sm:text-sm text-zinc-300">
            Have a specific requirement or uncommon venue location?
          </p>
          <a
            href={BUSINESS_INFO.phoneTel}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#F5D889] px-4 py-2 rounded transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Vishal at 8090123175</span>
          </a>
        </div>
      </div>
    </section>
  );
}
