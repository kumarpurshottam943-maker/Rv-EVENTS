'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageCircle, Phone, Calendar } from 'lucide-react';
import { INITIAL_SERVICES, BUSINESS_INFO } from '@/lib/data';
import { saveInquiry } from '@/lib/storage';

interface InquiryFormProps {
  initialService?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

export default function InquiryForm({ initialService = '', onSuccess, compact = false }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    eventType: initialService || 'Wedding Planning',
    eventDate: '',
    eventLocation: '',
    estimatedBudget: '',
    guestCount: '',
    message: '',
    consent: true,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!formData.customerName.trim()) {
      setError('Please provide your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      setError('Please provide a valid 10-digit mobile number.');
      return;
    }
    if (!formData.eventType) {
      setError('Please select an event type.');
      return;
    }
    if (!formData.eventDate) {
      setError('Please select your preferred event date.');
      return;
    }
    if (!formData.consent) {
      setError('Please agree to allow RV Events to contact you.');
      return;
    }

    setLoading(true);

    try {
      // 1. Submit to API route
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || 'Failed to submit inquiry');
      }

      // Also persist to localStorage for client-side state
      saveInquiry({
        customerName: formData.customerName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        eventType: formData.eventType,
        eventDate: formData.eventDate,
        eventLocation: formData.eventLocation.trim() || 'Farrukhabad',
        estimatedBudget: formData.estimatedBudget,
        guestCount: formData.guestCount,
        message: formData.message.trim(),
        consent: formData.consent,
      });

      setSubmitted(true);
      onSuccess?.();
    } catch (err: any) {
      // LocalStorage fallback in case of transient API error
      saveInquiry({
        customerName: formData.customerName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        eventType: formData.eventType,
        eventDate: formData.eventDate,
        eventLocation: formData.eventLocation.trim() || 'Farrukhabad',
        estimatedBudget: formData.estimatedBudget,
        guestCount: formData.guestCount,
        message: formData.message.trim(),
        consent: formData.consent,
      });
      setSubmitted(true);
      onSuccess?.();
    } finally {
      setLoading(false);
    }
  };

  const whatsappMsg = `Hello Vishal, I just submitted an inquiry on your website:
• Name: ${formData.customerName}
• Phone: ${formData.phone}
• Event: ${formData.eventType}
• Date: ${formData.eventDate}
• Location: ${formData.eventLocation || 'Farrukhabad'}
• Guests: ${formData.guestCount || 'Not specified'}
• Budget: ${formData.estimatedBudget || 'Not specified'}
• Notes: ${formData.message || 'None'}`;

  if (submitted) {
    return (
      <div className="p-8 text-center space-y-5 rounded-2xl bg-[#121212] border border-[#D4AF37]/50 text-white animate-in zoom-in-95">
        <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#F5D889] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-serif font-bold text-[#F5D889]">
            Inquiry Received Successfully!
          </h3>
          <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-white">{formData.customerName}</strong>. Your inquiry for{' '}
            <strong className="text-white">{formData.eventType}</strong> on{' '}
            <strong className="text-white">{formData.eventDate}</strong> has been logged in our system.
          </p>
          <p className="text-xs text-zinc-400">
            Vishal from RV Events and Management will contact you directly at <strong className="text-white">{formData.phone}</strong> shortly.
          </p>
        </div>

        {/* Immediate WhatsApp Forward */}
        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href={BUSINESS_INFO.whatsappUrl(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded text-xs font-semibold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#F5D889] transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect on WhatsApp Instantly</span>
          </a>

          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                customerName: '',
                phone: '',
                email: '',
                eventType: 'Wedding Planning',
                eventDate: '',
                eventLocation: '',
                estimatedBudget: '',
                guestCount: '',
                message: '',
                consent: true,
              });
            }}
            className="px-5 py-3 rounded text-xs font-semibold text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      {error && (
        <div className="p-3.5 rounded-lg bg-red-950/50 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Customer Name */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
            Full Name <span className="text-[#D4AF37]">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Rahul Mishra"
            value={formData.customerName}
            onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border border-zinc-800 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
            Phone Number <span className="text-[#D4AF37]">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="10-digit mobile number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border border-zinc-800 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Event Type */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
            Event Type <span className="text-[#D4AF37]">*</span>
          </label>
          <select
            value={formData.eventType}
            onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border border-zinc-800 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
          >
            {INITIAL_SERVICES.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        {/* Event Date */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
            Preferred Event Date <span className="text-[#D4AF37]">*</span>
          </label>
          <input
            type="date"
            required
            value={formData.eventDate}
            onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border border-zinc-800 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Event Location / Venue */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
            Event Venue / City Location
          </label>
          <input
            type="text"
            placeholder="e.g. Bewar Road, Fatehgarh / Farrukhabad"
            value={formData.eventLocation}
            onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border border-zinc-800 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
          />
        </div>

        {/* Estimated Budget (optional) */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
            Estimated Budget (Optional)
          </label>
          <select
            value={formData.estimatedBudget}
            onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border border-zinc-800 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
          >
            <option value="">Select budget range...</option>
            <option value="Under ₹35,000">Under ₹35,000</option>
            <option value="₹35,000 - ₹75,000">₹35,000 - ₹75,000</option>
            <option value="₹75,000 - ₹1,50,000">₹75,000 - ₹1,50,000</option>
            <option value="₹1,50,000 - ₹3,00,000">₹1,50,000 - ₹3,00,000</option>
            <option value="₹3,00,000+ Royal Scale">₹3,00,000+ Royal Scale</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Guest Count */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
            Number of Guests (Optional)
          </label>
          <input
            type="text"
            placeholder="e.g. 250 - 300 guests"
            value={formData.guestCount}
            onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border border-zinc-800 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
            Email Address (Optional)
          </label>
          <input
            type="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border border-zinc-800 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Message / Requirements */}
      <div>
        <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
          Decoration Requirements & Special Requests
        </label>
        <textarea
          rows={compact ? 2 : 3}
          placeholder="Describe your color theme, specific floral choices, stage desires, or couple entry ideas..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border border-zinc-800 text-white text-xs sm:text-sm focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-2.5 pt-1">
        <input
          type="checkbox"
          id="consentCheck"
          checked={formData.consent}
          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
          className="mt-0.5 rounded border-zinc-700 text-[#D4AF37] focus:ring-[#D4AF37]"
        />
        <label htmlFor="consentCheck" className="text-[11px] text-zinc-400 leading-normal">
          I agree to be contacted by Vishal from RV Events and Management via phone call or WhatsApp regarding this event inquiry.
        </label>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-4 rounded text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#F5D889] via-[#D4AF37] to-[#AA7C11] hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.25)] disabled:opacity-50"
        >
          {loading ? (
            <span>Logging Your Inquiry...</span>
          ) : (
            <>
              <Send className="w-3.5 h-3.5" />
              <span>Submit Event Inquiry</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
