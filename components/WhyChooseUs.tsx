'use client';

import React from 'react';
import { HeartHandshake, Palette, Clock, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Palette,
      title: 'Customized Decor Visions',
      description: 'Every celebration is unique. Whether you desire royal gold mandaps, modern minimal pastels, or traditional marigold canopies, we tailor designs to your preferred aesthetic and venue dimensions.',
    },
    {
      icon: HeartHandshake,
      title: 'Dedicated Local Representative',
      description: 'Direct communication with Vishal from initial consultation to day-of event execution. You work with a responsible local team, not impersonal call centers.',
    },
    {
      icon: Clock,
      title: 'Punctual On-Ground Coordination',
      description: 'Stage setups, floral arrangements, lighting installations, and entry pyrotechnics completed well before guest arrival to guarantee zero stress for the host family.',
    },
    {
      icon: MapPin,
      title: 'Deep Farrukhabad & Fatehgarh Familiarity',
      description: 'Based directly on Bewar Road, Bholepur, we know local marriage lawns, banquets, community halls, and residential layouts inside out.',
    },
  ];

  return (
    <section className="py-20 bg-[#070707] text-white border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Our Commitment
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white">
            Why Choose RV Events?
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Thoughtful planning, genuine craftsmanship, and unwavering dedication to making your family&apos;s biggest day extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-xl bg-gradient-to-b from-[#121212] to-[#0a0a0a] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#F5D889]">
                  <Icon className="w-6 h-6 text-[#D4AF37]" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-serif font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Local Trust Bar */}
        <div className="mt-12 p-6 rounded-xl bg-[#0e0e0e] border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Honest, transparent consultations · Direct contact with Vishal at <strong>8090123175</strong></span>
          </div>
          <div className="flex items-center gap-2 text-[#F5D889]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Serving Farrukhabad, Fatehgarh, Kamalganj, Kaimganj & nearby U.P. regions</span>
          </div>
        </div>
      </div>
    </section>
  );
}
