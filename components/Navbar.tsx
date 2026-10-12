'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Menu, X, Calendar, MapPin } from 'lucide-react';
import RvLogo from './RvLogo';
import { BUSINESS_INFO } from '@/lib/data';

interface NavbarProps {
  onOpenInquiryModal?: () => void;
}

export default function Navbar({ onOpenInquiryModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Estimator', href: '#estimator' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#050505]/95 border-b border-[#D4AF37]/20 transition-all">
      {/* Top micro bar for quick calling & location */}
      <div className="hidden sm:block border-b border-[#D4AF37]/15 bg-[#0a0a0a] text-xs py-1.5 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[#e5d3a1]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Bewar Road, Bholepur, Fatehgarh, Farrukhabad (U.P.)</span>
            </span>
            <span className="text-[#D4AF37]/40">|</span>
            <span className="text-zinc-400">Open 9:00 AM – 8:00 PM (Mon–Sun)</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="flex items-center gap-1.5 hover:text-[#FFF2B2] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Call Vishal: <strong>8090123175</strong></span>
            </a>
            <span className="text-[#D4AF37]/40">·</span>
            <a
              href={BUSINESS_INFO.whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: 3 zones separated by gap-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark / Emblem */}
        <Link href="/" className="whitespace-nowrap shrink-0 group flex items-center">
          <RvLogo variant="header" />
        </Link>

        {/* Zone 2: 4-5 single-line clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap shrink-0 hover:text-[#F5D889] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4AF37] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/admin"
            className="whitespace-nowrap shrink-0 text-zinc-500 hover:text-zinc-300 transition-colors text-xs"
          >
            Admin
          </Link>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenInquiryModal}
            className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-black bg-gradient-to-r from-[#F5D889] via-[#D4AF37] to-[#AA7C11] rounded hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Your Event</span>
          </button>
        </div>

        {/* Mobile menu toggle & quick call buttons */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={BUSINESS_INFO.phoneTel}
            className="p-2 rounded border border-[#D4AF37]/30 text-[#F5D889] hover:bg-[#D4AF37]/10"
            aria-label="Call RV Events"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href={BUSINESS_INFO.whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded bg-emerald-600/20 text-emerald-400 border border-emerald-500/30"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-[#F5D889]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#D4AF37]/20 bg-[#080808] px-4 pt-3 pb-6 animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-200 hover:text-[#F5D889] font-medium py-2 border-b border-zinc-900"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-500 hover:text-zinc-300 text-xs py-1"
            >
              Owner Admin Dashboard
            </Link>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiryModal?.();
                }}
                className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#F5D889] to-[#D4AF37] rounded"
              >
                Book Your Event Now
              </button>
              <div className="text-center text-xs text-zinc-400 mt-1">
                Vishal · <a href={BUSINESS_INFO.phoneTel} className="text-[#D4AF37] font-semibold">8090123175</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
