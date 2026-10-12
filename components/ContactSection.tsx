'use client';

import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Instagram, ExternalLink, Star } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';
import InquiryForm from './InquiryForm';

interface ContactSectionProps {
  initialServiceForForm?: string;
}

export default function ContactSection({ initialServiceForForm }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#050505] text-white border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Connect With RV Events
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white">
            Plan Your Event with Vishal
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Reach out by phone, WhatsApp, or submit your requirements below. We promptly answer all inquiries for Farrukhabad & Fatehgarh events.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Official Business Details & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#141414] to-[#0a0a0a] border border-[#D4AF37]/30 space-y-5 shadow-xl">
              <h3 className="text-xl font-serif font-bold text-white border-b border-zinc-800 pb-3">
                Official Business Information
              </h3>

              {/* Representative & Phone */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-[11px] uppercase tracking-wider">Representative & Calling</span>
                    <a href={BUSINESS_INFO.phoneTel} className="font-semibold text-white hover:text-[#F5D889] text-base">
                      Vishal · {BUSINESS_INFO.phone}
                    </a>
                    <span className="block text-[11px] text-zinc-500 mt-0.5">Click to call directly</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-[11px] uppercase tracking-wider">WhatsApp Direct</span>
                    <a
                      href={BUSINESS_INFO.whatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-emerald-400 hover:text-emerald-300 text-sm"
                    >
                      +91 8090123175 (Chat Instantly)
                    </a>
                    <span className="block text-[11px] text-zinc-500 mt-0.5">Share decor reference photos & dates</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-[11px] uppercase tracking-wider">Office & Studio Location</span>
                    <p className="text-zinc-200 leading-snug">
                      Bewar Road, Bholepur, Fatehgarh, Farrukhabad, Uttar Pradesh
                    </p>
                    <span className="text-[11px] text-[#F5D889] font-mono mt-0.5 block">
                      PIN: 209601 / 209602 (India)
                    </span>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-[11px] uppercase tracking-wider">Operating Hours</span>
                    <p className="text-zinc-200">
                      9:00 AM – 8:00 PM (Monday through Sunday)
                    </p>
                    <span className="text-[11px] text-emerald-400 mt-0.5 block">
                      Open · Operational
                    </span>
                  </div>
                </div>

                {/* Instagram Handle */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-pink-950/40 border border-pink-500/30 text-pink-400 shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-[11px] uppercase tracking-wider">Instagram Page</span>
                    <a
                      href={BUSINESS_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-pink-300 hover:text-pink-200 font-mono text-xs flex items-center gap-1"
                    >
                      <span>{BUSINESS_INFO.instagramHandle}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps Actions */}
              <div className="pt-2 border-t border-zinc-800 flex flex-col gap-2">
                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded text-xs font-semibold text-center text-black bg-[#D4AF37] hover:bg-[#F5D889] transition-colors flex items-center justify-center gap-2"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Embedded Location Map Preview */}
            <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-[#121212] p-2 space-y-2">
              <div className="px-3 pt-2 flex items-center justify-between text-xs text-zinc-400">
                <span className="font-semibold text-white">Google Maps Location</span>
                <span className="flex items-center gap-1 text-[#F5D889]">
                  <Star className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
                  <span>5.0 (2 reviews)</span>
                </span>
              </div>
              <div className="relative h-48 w-full rounded-xl overflow-hidden bg-zinc-950">
                <iframe
                  title="RV Events and Management Farrukhabad Location"
                  src="https://maps.google.com/maps?q=Bewar+Road+Bholepur+Fatehgarh+Farrukhabad&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1)' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Database-backed Inquiry Form */}
          <div className="lg:col-span-7 bg-gradient-to-b from-[#141414] to-[#0d0d0d] p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/35 shadow-2xl">
            <div className="mb-6 space-y-1">
              <span className="text-[11px] uppercase tracking-widest text-[#F5D889] font-bold">
                Online Event Request Form
              </span>
              <h3 className="text-2xl font-serif font-bold text-white">
                Request a Customized Event Quotation
              </h3>
              <p className="text-xs text-zinc-400">
                Fill in your expected date and decor preferences. All submissions are saved securely to our calendar.
              </p>
            </div>

            <InquiryForm initialService={initialServiceForForm} />
          </div>
        </div>
      </div>
    </section>
  );
}
