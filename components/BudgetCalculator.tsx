'use client';

import React, { useState } from 'react';
import { Calculator, MessageCircle, Sparkles, Check, IndianRupee } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

interface BudgetCalculatorProps {
  onQuickBook?: (summary: string) => void;
}

export default function BudgetCalculator({ onQuickBook }: BudgetCalculatorProps) {
  const [eventType, setEventType] = useState('Wedding Planning');
  const [guestCount, setGuestCount] = useState('200 - 400 Guests');
  const [decorTier, setDecorTier] = useState<'Standard' | 'Luxury' | 'Royal'>('Luxury');
  const [addOns, setAddOns] = useState<string[]>(['Cold Pyro Sparkulars', 'Fairy Light Illumination']);

  const eventTypes = [
    { label: 'Wedding Planning', baseMin: 120000, baseMax: 250000 },
    { label: 'Stage Decoration', baseMin: 35000, baseMax: 90000 },
    { label: 'Haldi & Mehndi', baseMin: 25000, baseMax: 65000 },
    { label: 'Engagement Planning', baseMin: 40000, baseMax: 85000 },
    { label: 'Birthday & Theme Party', baseMin: 15000, baseMax: 45000 },
    { label: 'Home Facade Lighting', baseMin: 20000, baseMax: 50000 },
  ];

  const availableAddons = [
    { id: 'Cold Pyro Sparkulars', price: 12000, label: 'Cold Pyro & Smoke Bridal Entry' },
    { id: 'Fairy Light Illumination', price: 18000, label: 'Full Home / Boundary Fairy Lights' },
    { id: 'DJ & Sound System', price: 15000, label: 'High-Fidelity Audio & Moving Heads' },
    { id: 'Floral Jhoola & Photobooth', price: 10000, label: 'Floral Swing & Custom Monogram Booth' },
  ];

  const toggleAddon = (id: string) => {
    if (addOns.includes(id)) {
      setAddOns(addOns.filter(a => a !== id));
    } else {
      setAddOns([...addOns, id]);
    }
  };

  const selectedEventConfig = eventTypes.find(e => e.label === eventType) || eventTypes[0];

  const tierMultiplier = decorTier === 'Standard' ? 0.85 : decorTier === 'Luxury' ? 1.15 : 1.5;
  const addonsTotal = addOns.reduce((sum, id) => {
    const item = availableAddons.find(a => a.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const estimatedMin = Math.round((selectedEventConfig.baseMin * tierMultiplier + addonsTotal) / 1000) * 1000;
  const estimatedMax = Math.round((selectedEventConfig.baseMax * tierMultiplier + addonsTotal * 1.2) / 1000) * 1000;

  const summaryText = `Event: ${eventType} | Guests: ${guestCount} | Style: ${decorTier} | Add-ons: ${addOns.join(', ') || 'None'} | Est. Range: ₹${estimatedMin.toLocaleString('en-IN')} - ₹${estimatedMax.toLocaleString('en-IN')}`;

  const whatsappEstimateMsg = `Hello Vishal, I used the Event Estimator on your website for:
• Event: ${eventType}
• Guests: ${guestCount}
• Theme Level: ${decorTier} Tier
• Selected Enhancements: ${addOns.length ? addOns.join(', ') : 'Basic setup'}
• Estimated Budget Range: ₹${estimatedMin.toLocaleString('en-IN')} - ₹${estimatedMax.toLocaleString('en-IN')}

Could we discuss availability and final quotation for Farrukhabad?`;

  return (
    <section id="estimator" className="py-20 bg-[#080808] text-white border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold flex items-center justify-center gap-1.5">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Planning Tool</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white">
            Instant Event Budget Estimator
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Get an initial realistic cost outline tailored to Farrukhabad & Fatehgarh event standards. No hidden commitments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-[#121212] p-6 sm:p-8 rounded-2xl border border-zinc-800 space-y-6">
            {/* Step 1: Event Type */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-3">
                1. Select Event Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {eventTypes.map((et) => (
                  <button
                    key={et.label}
                    onClick={() => setEventType(et.label)}
                    className={`p-3 text-xs rounded-lg text-left transition-all border ${
                      eventType === et.label
                        ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-white font-semibold'
                        : 'border-zinc-800 bg-[#171717] text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    {et.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Estimated Guests */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-3">
                2. Approximate Guest Count
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {['Under 100 Guests', '100 - 300 Guests', '300 - 600 Guests', '600+ Grand Gathering'].map((gc) => (
                  <button
                    key={gc}
                    onClick={() => setGuestCount(gc)}
                    className={`p-2.5 text-xs text-center rounded-lg transition-all border ${
                      guestCount === gc
                        ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-white font-semibold'
                        : 'border-zinc-800 bg-[#171717] text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    {gc}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Decor Finish Tier */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-3">
                3. Decoration Aesthetic & Finish Tier
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { tier: 'Standard' as const, title: 'Classic Elegance', desc: 'Refined draping & seasonal floral' },
                  { tier: 'Luxury' as const, title: 'Royal Gold', desc: 'Imported florals, chandeliers, carved arches' },
                  { tier: 'Royal' as const, title: 'Grand Palace', desc: 'Opulent multi-arch mandap, custom lighting' },
                ].map((item) => (
                  <button
                    key={item.tier}
                    onClick={() => setDecorTier(item.tier)}
                    className={`p-3 text-left rounded-lg transition-all border ${
                      decorTier === item.tier
                        ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-white'
                        : 'border-zinc-800 bg-[#171717] text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    <p className="text-xs font-bold text-white">{item.title}</p>
                    <p className="text-[10px] text-zinc-400 mt-1 leading-snug">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Add-on Enhancements */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-3">
                4. Select Optional Enhancements
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {availableAddons.map((addon) => {
                  const selected = addOns.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 text-xs text-left rounded-lg border transition-all flex items-center justify-between ${
                        selected
                          ? 'border-[#D4AF37]/80 bg-[#D4AF37]/10 text-white'
                          : 'border-zinc-800 bg-[#171717] text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${selected ? 'border-[#D4AF37] bg-[#D4AF37] text-black' : 'border-zinc-700'}`}>
                          {selected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span>{addon.label}</span>
                      </div>
                      <span className="text-[11px] text-[#F5D889] tabular-nums font-mono">+₹{addon.price.toLocaleString('en-IN')}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#181818] via-[#121212] to-[#0a0a0a] p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/40 shadow-xl space-y-6 lg:sticky lg:top-28">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <span className="text-xs uppercase tracking-widest text-zinc-400">Estimated Project Range</span>
              <span className="text-xs font-semibold text-[#D4AF37]">Farrukhabad (U.P.)</span>
            </div>

            <div className="text-center py-4 bg-[#050505]/60 rounded-xl border border-[#D4AF37]/20">
              <p className="text-xs text-zinc-400 uppercase tracking-wider">Estimated Budget</p>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#F5D889] tabular-nums mt-1">
                ₹{estimatedMin.toLocaleString('en-IN')} – ₹{estimatedMax.toLocaleString('en-IN')}
              </div>
              <p className="text-[11px] text-zinc-400 mt-2 px-4">
                *Approximate planning & decor estimate. Final quote verified upon venue inspection and exact floral choices.
              </p>
            </div>

            {/* Selected Breakdown */}
            <div className="space-y-2 text-xs text-zinc-300">
              <div className="flex justify-between py-1 border-b border-zinc-800/60">
                <span className="text-zinc-400">Event Focus:</span>
                <span className="font-medium text-white">{eventType}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-800/60">
                <span className="text-zinc-400">Scale:</span>
                <span className="font-medium text-white">{guestCount}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-800/60">
                <span className="text-zinc-400">Finish Level:</span>
                <span className="font-medium text-[#F5D889]">{decorTier} Tier Finish</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-zinc-400">Selected Add-ons:</span>
                <span className="font-medium text-white text-right">{addOns.length} Included</span>
              </div>
            </div>

            {/* WhatsApp & Inquiry CTA */}
            <div className="space-y-3 pt-2">
              <a
                href={BUSINESS_INFO.whatsappUrl(whatsappEstimateMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#F5D889] via-[#D4AF37] to-[#AA7C11] hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Estimate to Vishal on WhatsApp</span>
              </a>

              <button
                onClick={() => onQuickBook?.(summaryText)}
                className="w-full py-3 px-4 rounded text-xs font-semibold text-zinc-300 hover:text-white border border-zinc-700 hover:border-[#D4AF37] transition-colors"
              >
                Submit Form with this Estimate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
