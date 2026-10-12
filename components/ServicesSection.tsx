'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, MessageCircle, Eye, Sparkles } from 'lucide-react';
import { ServiceItem, BUSINESS_INFO } from '@/lib/data';
import ServiceDetailModal from './ServiceDetailModal';

interface ServicesSectionProps {
  services: ServiceItem[];
  onSelectServiceForInquiry: (serviceName: string) => void;
}

export default function ServicesSection({ services, onSelectServiceForInquiry }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const categories = ['All', 'Weddings', 'Stage & Decor', 'Family & Celebrations', 'Institutional & Corporate'];

  const filteredServices = activeCategory === 'All'
    ? services.filter(s => s.active)
    : services.filter(s => s.active && s.category === activeCategory);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#050505] text-white border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Our Professional Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white">
            Exceptional Event Planning & Decor
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            From royal wedding mandaps and grand couple entries to home lighting and corporate setups in Farrukhabad and Fatehgarh.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-[#D4AF37] text-black font-semibold shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                  : 'bg-[#121212] text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid (15 services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const whatsappMsg = `Hello Vishal, I am interested in ${service.name} from RV Events and Management, Farrukhabad. Could you share more details?`;

            return (
              <div
                key={service.id}
                className="group relative flex flex-col rounded-xl overflow-hidden bg-gradient-to-b from-[#141414] to-[#0a0a0a] border border-[#D4AF37]/20 hover:border-[#D4AF37]/70 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)]"
              >
                {/* Image Container with Fallback Mesh */}
                <div className="relative h-56 w-full bg-zinc-900 overflow-hidden">
                  <Image
                    src={service.featuredImage}
                    alt={service.name}
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/20" />
                  
                  {/* Category unboxed text */}
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] text-[#F5D889] font-medium border border-[#D4AF37]/30">
                    {service.category}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#F5D889] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-2 border-t border-zinc-800/80">
                    {service.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="text-[11px] text-zinc-300 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="pt-2 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-semibold text-[#F5D889] hover:text-[#FFF5C2] flex items-center gap-1 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Details</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={BUSINESS_INFO.whatsappUrl(whatsappMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded bg-emerald-950/50 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-400 transition-colors"
                        title="Enquire on WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                      </a>

                      <button
                        onClick={() => onSelectServiceForInquiry(service.name)}
                        className="px-3.5 py-1.5 rounded text-xs font-semibold text-black bg-[#D4AF37] hover:bg-[#F5D889] transition-colors flex items-center gap-1"
                      >
                        <span>Enquire</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#171717] via-[#0d0d0d] to-[#171717] border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-serif font-bold text-white">
              Need a Custom Event Package or Combined Services?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Speak directly with Vishal to design a personalized stage, lighting, and hospitality package for your celebration.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="px-5 py-2.5 rounded text-xs font-semibold text-white border border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 transition-colors"
            >
              Call 8090123175
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded text-xs font-semibold text-black bg-gradient-to-r from-[#F5D889] to-[#D4AF37] hover:brightness-110 transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookNow={(name) => onSelectServiceForInquiry(name)}
      />
    </section>
  );
}
