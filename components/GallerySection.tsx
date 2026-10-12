'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Eye, X, ChevronLeft, ChevronRight, Info, Sparkles } from 'lucide-react';
import { GalleryMedia } from '@/lib/data';

interface GallerySectionProps {
  galleryItems: GalleryMedia[];
}

export default function GallerySection({ galleryItems }: GallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isPlayingVideoModal, setIsPlayingVideoModal] = useState<boolean>(false);

  const categories = [
    'All',
    'Wedding Stages',
    'Bride & Groom Entry',
    'Haldi & Mehndi',
    'Home Decoration',
    'Birthdays & Themes',
    'Corporate & Receptions',
  ];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const nextItem = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevItem = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#050505] text-white border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Visual Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white">
            Curated Event Decor & Setups
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Glimpse into royal stage settings, intimate family festivities, and vibrant wedding setups.
          </p>

          {/* Compliance & Transparency Banner as requested */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-[11px] text-zinc-400 text-left">
            <Info className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span>Demonstration setups shown for design inspiration. Custom on-site designs created for every venue.</span>
          </div>
        </div>

        {/* Video Showcase Teaser Banner */}
        <div className="mb-12 relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-gradient-to-r from-[#141414] via-[#0d0d0d] to-[#141414] p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-3">
              <span className="text-[11px] uppercase tracking-widest text-[#F5D889] font-bold">
                Cinematic Event Experience
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Grand Bride & Groom Cold Pyro Entry Showreel
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Watch how safe cold pyrotechnics, dry ice fog, and dynamic spotlighting transform wedding entries into regal, unforgettable moments.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setIsPlayingVideoModal(true)}
                  className="px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#F5D889] transition-colors flex items-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-black" />
                  <span>Watch Entry Demonstration</span>
                </button>
              </div>
            </div>

            <div className="md:col-span-5 relative h-48 sm:h-56 rounded-xl overflow-hidden border border-zinc-800 group cursor-pointer" onClick={() => setIsPlayingVideoModal(true)}>
              <Image
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80"
                alt="Cold pyro wedding entry video preview"
                fill
                referrerPolicy="no-referrer"
                className="object-cover group-hover:scale-105 transition-transform duration-300 brightness-75"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/90 text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-black ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2 right-2 text-center text-[10px] text-zinc-300 bg-black/60 py-1 rounded backdrop-blur-sm">
                Click to preview live entrance atmosphere
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${
                activeCategory === cat
                  ? 'bg-[#D4AF37] text-black font-semibold shadow-[0_0_12px_rgba(212,175,55,0.25)]'
                  : 'bg-[#121212] text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative h-72 rounded-xl overflow-hidden cursor-pointer border border-[#D4AF37]/20 hover:border-[#D4AF37]/80 bg-zinc-900 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                referrerPolicy="no-referrer"
                className="object-cover group-hover:scale-108 transition-transform duration-500 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Tag for Demonstration Notice */}
              {item.isDemonstration && (
                <div className="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-zinc-300 border border-zinc-700">
                  Concept
                </div>
              )}

              {/* Content Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 space-y-1 transform group-hover:translate-y-0 transition-transform">
                <span className="text-[10px] uppercase tracking-wider text-[#F5D889] font-medium">
                  {item.category}
                </span>
                <h4 className="text-sm font-serif font-bold text-white line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-zinc-400 line-clamp-2">
                  {item.description}
                </p>
                <div className="pt-1 flex items-center gap-1 text-[11px] text-[#D4AF37] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Enlarge Setup</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in">
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-zinc-900/80 text-white hover:bg-zinc-800 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={prevItem}
            className="absolute left-4 z-20 p-3 rounded-full bg-zinc-900/80 text-white hover:bg-zinc-800 transition-colors hidden sm:block"
            aria-label="Previous item"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextItem}
            className="absolute right-4 z-20 p-3 rounded-full bg-zinc-900/80 text-white hover:bg-zinc-800 transition-colors hidden sm:block"
            aria-label="Next item"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Card */}
          <div className="relative max-w-4xl w-full max-h-[85vh] flex flex-col bg-[#0e0e0e] border border-[#D4AF37]/40 rounded-2xl overflow-hidden">
            <div className="relative h-[55vh] sm:h-[65vh] w-full bg-black">
              <Image
                src={currentItem.imageUrl}
                alt={currentItem.title}
                fill
                referrerPolicy="no-referrer"
                className="object-contain"
              />
            </div>

            <div className="p-4 sm:p-6 bg-[#0e0e0e] border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#D4AF37]">
                  {currentItem.category} · Demonstration Inspiration
                </span>
                <h3 className="text-lg font-serif font-bold text-white mt-0.5">
                  {currentItem.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  {currentItem.description}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`https://wa.me/918090123175?text=${encodeURIComponent(`Hello Vishal, I saw the setup "${currentItem.title}" in the RV Events gallery. Can we do something similar in Farrukhabad?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded text-xs font-semibold text-black bg-[#D4AF37] hover:bg-[#F5D889] transition-colors whitespace-nowrap"
                >
                  Enquire for This Look
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Simulation Modal */}
      {isPlayingVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in">
          <div className="relative max-w-3xl w-full bg-[#121212] border border-[#D4AF37]/40 rounded-2xl overflow-hidden p-6 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
              <h3 className="text-base font-serif font-bold text-[#F5D889]">
                Bride & Groom Entry — Atmospheric Showcase
              </h3>
              <button
                onClick={() => setIsPlayingVideoModal(false)}
                className="p-1.5 rounded-full text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated High-Res Video Frame */}
            <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden bg-black flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80"
                alt="Cold pyro grand entry simulation"
                fill
                referrerPolicy="no-referrer"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/90 text-black flex items-center justify-center animate-pulse">
                  <Play className="w-7 h-7 fill-black ml-1" />
                </div>
                <p className="text-sm font-semibold text-white">
                  Safe Cold Spark Pyro System & Dry Ice Clouds
                </p>
                <p className="text-xs text-zinc-300 max-w-md">
                  Indoor & outdoor safe cold-spark technology (certified smokeless, low heat) paired with floral canopies for royal couple arrivals.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <span className="text-xs text-zinc-400">
                Book early for peak auspicious wedding dates in Farrukhabad.
              </span>
              <a
                href="https://wa.me/918090123175?text=Hello%20Vishal%2C%20I%20would%20like%20to%20book%20the%20Bride%20%26%20Groom%20Cold%20Pyro%20Entry%20setup%20in%20Farrukhabad."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded text-xs font-semibold text-black bg-[#D4AF37] hover:bg-[#F5D889] transition-colors"
              >
                Book This Entry Setup
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
