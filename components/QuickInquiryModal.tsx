'use client';

import React from 'react';
import { X } from 'lucide-react';
import InquiryForm from './InquiryForm';
import RvLogo from './RvLogo';

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

export default function QuickInquiryModal({ isOpen, onClose, selectedService }: QuickInquiryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-[#0d0d0d] border border-[#D4AF37]/50 rounded-2xl shadow-2xl p-6 sm:p-8 text-white">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6 space-y-2">
          <div className="flex justify-center">
            <RvLogo variant="icon" size={54} />
          </div>
          <h2 className="text-2xl font-serif font-bold text-white">
            Book Your Event with RV Events
          </h2>
          <p className="text-xs text-zinc-400">
            Tell us about your celebration in Farrukhabad or Fatehgarh. Vishal will connect with you promptly.
          </p>
        </div>

        <InquiryForm
          initialService={selectedService}
          compact
          onSuccess={() => {}}
        />
      </div>
    </div>
  );
}
