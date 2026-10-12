'use client';

import React from 'react';
import Image from 'next/image';
import { X, CheckCircle2, MessageCircle, Phone, Calendar } from 'lucide-react';
import { ServiceItem, BUSINESS_INFO } from '@/lib/data';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookNow: (serviceName: string) => void;
}

export default function ServiceDetailModal({ service, onClose, onBookNow }: ServiceDetailModalProps) {
  if (!service) return null;

  const whatsappMsg = `Hello Vishal, I would like to enquire about "${service.name}" with RV Events and Management, Farrukhabad.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-[#D4AF37]/40 rounded-2xl shadow-2xl text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-zinc-300 hover:text-white hover:bg-black transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Banner Image */}
        <div className="relative h-60 sm:h-72 w-full bg-zinc-900 overflow-hidden">
          <Image
            src={service.featuredImage}
            alt={service.name}
            fill
            referrerPolicy="no-referrer"
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/30" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs uppercase tracking-widest text-[#F5D889] font-semibold">
              {service.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
              {service.name}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
              Overview & Scope
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Key Deliverables */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-3">
              Included Planning & Decor Elements
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Example Gallery */}
          {service.galleryImages.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-3">
                Inspiration & Sample Setups
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {service.galleryImages.map((img, i) => (
                  <div key={i} className="relative h-32 sm:h-40 rounded-lg overflow-hidden border border-[#D4AF37]/20">
                    <Image
                      src={img}
                      alt={`${service.name} sample ${i + 1}`}
                      fill
                      referrerPolicy="no-referrer"
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTAs */}
          <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onBookNow(service.name);
              }}
              className="flex-1 py-3 px-4 rounded text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#F5D889] to-[#D4AF37] hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book / Enquire for {service.name}</span>
            </button>

            <a
              href={BUSINESS_INFO.whatsappUrl(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 rounded text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-500/40 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Direct WhatsApp</span>
            </a>

            <a
              href={BUSINESS_INFO.phoneTel}
              className="py-3 px-4 rounded text-xs font-semibold text-zinc-300 hover:text-white border border-zinc-700 hover:border-[#D4AF37] transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call Vishal</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
