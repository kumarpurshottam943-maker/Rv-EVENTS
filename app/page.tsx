'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import BudgetCalculator from '@/components/BudgetCalculator';
import GallerySection from '@/components/GallerySection';
import WhyChooseUs from '@/components/WhyChooseUs';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import QuickInquiryModal from '@/components/QuickInquiryModal';
import { getStoredServices, getStoredGallery } from '@/lib/storage';
import { ServiceItem, GalleryMedia, BUSINESS_INFO, INITIAL_SERVICES, GALLERY_ITEMS } from '@/lib/data';
import { Phone, MessageCircle } from 'lucide-react';

export default function HomePage() {
  const [services, setServices] = useState<ServiceItem[]>(INITIAL_SERVICES);
  const [galleryItems, setGalleryItems] = useState<GalleryMedia[]>(GALLERY_ITEMS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string>('');

  useEffect(() => {
    const handleSync = () => {
      setServices(getStoredServices());
      setGalleryItems(getStoredGallery());
    };
    window.addEventListener('rv_data_updated', handleSync);
    return () => window.removeEventListener('rv_data_updated', handleSync);
  }, []);

  const handleOpenModal = (serviceName?: string) => {
    setSelectedServiceForModal(serviceName || '');
    setIsModalOpen(true);
  };

  const handleScrollToInquiryWithEstimate = (summary: string) => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-[#D4AF37] selection:text-black">
      {/* Navigation */}
      <Navbar onOpenInquiryModal={() => handleOpenModal()} />

      {/* Hero Section */}
      <Hero onOpenInquiryModal={() => handleOpenModal()} />

      {/* Services Section with 15 Services */}
      <ServicesSection
        services={services}
        onSelectServiceForInquiry={(name) => handleOpenModal(name)}
      />

      {/* Interactive Budget Estimator Tool */}
      <BudgetCalculator onQuickBook={handleScrollToInquiryWithEstimate} />

      {/* Curated Gallery & Video Showcase */}
      <GallerySection galleryItems={galleryItems} />

      {/* Why Choose RV Events */}
      <WhyChooseUs />

      {/* About Us & Local Identity */}
      <AboutSection onOpenInquiryModal={() => handleOpenModal()} />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Contact & Database Inquiry Form */}
      <ContactSection initialServiceForForm={selectedServiceForModal} />

      {/* Footer */}
      <Footer />

      {/* Quick Booking Modal */}
      <QuickInquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedService={selectedServiceForModal}
      />

      {/* Floating Action Buttons for Mobile Screen */}
      <aside aria-label="Quick contact actions" className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 sm:hidden">
        <a
          href={BUSINESS_INFO.whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 text-white shadow-lg flex items-center justify-center hover:bg-emerald-500 active:scale-95 transition-all"
          aria-label="Chat on WhatsApp with Vishal"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href={BUSINESS_INFO.phoneTel}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F5D889] to-[#D4AF37] text-black shadow-lg flex items-center justify-center hover:brightness-110 active:scale-95 transition-all"
          aria-label="Call RV Events"
        >
          <Phone className="w-5 h-5" />
        </a>
      </aside>
    </div>
  );
}
