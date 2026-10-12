'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Lock,
  LogOut,
  Search,
  Filter,
  CheckCircle,
  Phone,
  MessageCircle,
  Calendar,
  Clock,
  Trash2,
  Download,
  ArrowLeft,
  Eye,
  RefreshCw,
  AlertCircle
} from 'lucide-react';
import RvLogo from '@/components/RvLogo';
import { CustomerInquiry, INITIAL_SERVICES, ServiceItem, BUSINESS_INFO } from '@/lib/data';
import { getStoredInquiries, updateInquiryStatus, deleteInquiry, getStoredServices, toggleServiceStatus } from '@/lib/storage';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem('rv_admin_auth') === 'true';
  });
  const [pin, setPin] = useState('');
  const [loginError, setLoginError] = useState(false);

  const [inquiries, setInquiries] = useState<CustomerInquiry[]>(() => {
    if (typeof window === 'undefined') return [];
    return getStoredInquiries();
  });
  const [services, setServices] = useState<ServiceItem[]>(() => {
    if (typeof window === 'undefined') return INITIAL_SERVICES;
    return getStoredServices();
  });
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'inquiries' | 'services' | 'settings'>('inquiries');
  const [selectedInquiry, setSelectedInquiry] = useState<CustomerInquiry | null>(null);

  const loadData = () => {
    setInquiries(getStoredInquiries());
    setServices(getStoredServices());
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default PIN: rv2026 or 8090
    if (pin.trim().toLowerCase() === 'rv2026' || pin.trim() === '8090') {
      setIsAuthenticated(true);
      sessionStorage.setItem('rv_admin_auth', 'true');
      setLoginError(false);
      loadData();
    } else {
      setLoginError(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('rv_admin_auth');
  };

  const handleStatusChange = (id: string, newStatus: CustomerInquiry['status']) => {
    updateInquiryStatus(id, newStatus);
    loadData();
    if (selectedInquiry?.id === id) {
      setSelectedInquiry({ ...selectedInquiry, status: newStatus });
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this customer inquiry?')) {
      deleteInquiry(id);
      loadData();
      if (selectedInquiry?.id === id) {
        setSelectedInquiry(null);
      }
    }
  };

  const handleToggleService = (id: string) => {
    toggleServiceStatus(id);
    loadData();
  };

  const exportToCSV = () => {
    const headers = ['ID', 'Customer Name', 'Phone', 'Email', 'Event Type', 'Event Date', 'Venue Location', 'Budget', 'Guests', 'Status', 'Date Received', 'Message'];
    const rows = inquiries.map(i => [
      i.id,
      `"${i.customerName}"`,
      `"${i.phone}"`,
      `"${i.email || ''}"`,
      `"${i.eventType}"`,
      `"${i.eventDate}"`,
      `"${i.eventLocation}"`,
      `"${i.estimatedBudget || ''}"`,
      `"${i.guestCount || ''}"`,
      i.status,
      `"${new Date(i.createdAt).toLocaleString()}"`,
      `"${(i.message || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `rv_events_inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredInquiries = inquiries.filter(i => {
    const matchesStatus = statusFilter === 'All' || i.status === statusFilter;
    const matchesSearch =
      i.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      i.phone.includes(searchQuery) ||
      i.eventType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      i.eventLocation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const counts = {
    total: inquiries.length,
    new: inquiries.filter(i => i.status === 'New').length,
    contacted: inquiries.filter(i => i.status === 'Contacted').length,
    quoted: inquiries.filter(i => i.status === 'Quoted').length,
    confirmed: inquiries.filter(i => i.status === 'Confirmed').length,
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 text-white">
        <div className="w-full max-w-md p-8 rounded-2xl bg-[#0e0e0e] border border-[#D4AF37]/40 shadow-2xl space-y-6 text-center">
          <div className="flex justify-center">
            <RvLogo variant="full" size={100} />
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl font-serif font-bold text-white">
              Owner Administration
            </h1>
            <p className="text-xs text-zinc-400">
              RV Events and Management · Farrukhabad
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-2">
                Enter Security PIN
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter PIN (Default: rv2026)"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-zinc-700 text-white text-center text-sm focus:border-[#D4AF37] focus:outline-none tracking-widest"
                  autoFocus
                />
                <Lock className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
              </div>
              <p className="text-[11px] text-zinc-500 mt-2">
                Authorized access for Vishal & RV Events management team.
              </p>
            </div>

            {loginError && (
              <div className="p-2.5 rounded bg-red-950/50 border border-red-500/40 text-red-300 text-xs flex items-center justify-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Incorrect PIN. Please try again.</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#F5D889] via-[#D4AF37] to-[#AA7C11] hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_15px_rgba(212,175,55,0.25)]"
            >
              Unlock Dashboard
            </button>
          </form>

          <div className="pt-2 border-t border-zinc-900">
            <Link
              href="/"
              className="text-xs text-zinc-400 hover:text-white flex items-center justify-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Public Website</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated Admin Dashboard
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Admin Header */}
      <header className="border-b border-zinc-800 bg-[#0a0a0a] sticky top-0 z-40 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <RvLogo variant="header" />
            </Link>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] uppercase tracking-wider bg-[#D4AF37]/20 text-[#F5D889] border border-[#D4AF37]/40">
              Admin Portal
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-3 py-1.5 rounded text-xs font-medium text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700"
            >
              View Site
            </Link>
            <button
              onClick={handleLogout}
              className="px-3 py-1.5 rounded text-xs font-medium text-red-400 hover:text-red-300 border border-red-950 hover:bg-red-950/30 flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* KPI Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#101010] border border-zinc-800">
            <span className="text-xs text-zinc-400 uppercase tracking-wider">Total Inquiries</span>
            <p className="text-2xl font-serif font-bold text-white tabular-nums mt-1">{counts.total}</p>
          </div>
          <div className="p-4 rounded-xl bg-[#101010] border border-emerald-900/50">
            <span className="text-xs text-emerald-400 uppercase tracking-wider">New Inquiries</span>
            <p className="text-2xl font-serif font-bold text-emerald-300 tabular-nums mt-1">{counts.new}</p>
          </div>
          <div className="p-4 rounded-xl bg-[#101010] border border-sky-900/50">
            <span className="text-xs text-sky-400 uppercase tracking-wider">Contacted / Quoted</span>
            <p className="text-2xl font-serif font-bold text-sky-300 tabular-nums mt-1">{counts.contacted + counts.quoted}</p>
          </div>
          <div className="p-4 rounded-xl bg-[#101010] border border-[#D4AF37]/40">
            <span className="text-xs text-[#F5D889] uppercase tracking-wider">Confirmed Bookings</span>
            <p className="text-2xl font-serif font-bold text-[#F5D889] tabular-nums mt-1">{counts.confirmed}</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-zinc-800 gap-6">
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`pb-3 text-sm font-semibold transition-all relative ${
              activeTab === 'inquiries' ? 'text-[#F5D889] border-b-2 border-[#D4AF37]' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Customer Inquiries ({inquiries.length})
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`pb-3 text-sm font-semibold transition-all relative ${
              activeTab === 'services' ? 'text-[#F5D889] border-b-2 border-[#D4AF37]' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Manage Services ({services.length})
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`pb-3 text-sm font-semibold transition-all relative ${
              activeTab === 'settings' ? 'text-[#F5D889] border-b-2 border-[#D4AF37]' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Business Info & Verified Hours
          </button>
        </div>

        {/* Tab 1: Inquiries Management */}
        {activeTab === 'inquiries' && (
          <div className="space-y-6">
            {/* Filter and Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#101010] p-4 rounded-xl border border-zinc-800">
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                {['All', 'New', 'Contacted', 'Quoted', 'Confirmed', 'Closed'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${
                      statusFilter === status
                        ? 'bg-[#D4AF37] text-black font-semibold'
                        : 'bg-[#181818] text-zinc-400 hover:text-white'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-grow sm:w-64">
                  <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search name, phone, or venue..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-[#181818] border border-zinc-700 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <button
                  onClick={exportToCSV}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-200 flex items-center gap-1.5 whitespace-nowrap shrink-0"
                  title="Export to CSV Spreadsheet"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>

                <button
                  onClick={loadData}
                  className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
                  title="Refresh Inquiries"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Inquiries List & Detail Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Inquiries Table / Cards */}
              <div className="lg:col-span-7 space-y-3">
                {filteredInquiries.length === 0 ? (
                  <div className="p-12 text-center rounded-xl bg-[#101010] border border-zinc-800 text-zinc-500 text-sm">
                    No inquiries found matching this filter.
                  </div>
                ) : (
                  filteredInquiries.map((inq) => {
                    const isSelected = selectedInquiry?.id === inq.id;
                    return (
                      <div
                        key={inq.id}
                        onClick={() => setSelectedInquiry(inq)}
                        className={`p-4 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#D4AF37] bg-[#141414]'
                            : 'border-zinc-800 bg-[#0d0d0d] hover:border-zinc-700'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold text-white text-sm">
                                {inq.customerName}
                              </h4>
                              <span
                                className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                                  inq.status === 'New'
                                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                    : inq.status === 'Confirmed'
                                    ? 'bg-[#D4AF37]/20 text-[#F5D889] border border-[#D4AF37]/40'
                                    : inq.status === 'Quoted'
                                    ? 'bg-sky-500/20 text-sky-400'
                                    : 'bg-zinc-800 text-zinc-400'
                                }`}
                              >
                                {inq.status}
                              </span>
                            </div>

                            <p className="text-xs text-zinc-400 flex items-center gap-2">
                              <span className="text-[#D4AF37] font-medium">{inq.eventType}</span>
                              <span>·</span>
                              <span>{inq.eventDate}</span>
                            </p>
                          </div>

                          <div className="text-right text-[11px] text-zinc-500">
                            {new Date(inq.createdAt).toLocaleDateString()}
                          </div>
                        </div>

                        <div className="mt-3 pt-3 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-400">
                          <span className="font-mono text-zinc-300">{inq.phone}</span>
                          <span className="truncate max-w-[200px] text-zinc-500">{inq.eventLocation}</span>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Inquiry Detail Panel */}
              <div className="lg:col-span-5 bg-[#101010] rounded-2xl border border-zinc-800 p-6 space-y-6 lg:sticky lg:top-24">
                {selectedInquiry ? (
                  <>
                    <div className="flex items-start justify-between border-b border-zinc-800 pb-4">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-zinc-500">Inquiry ID: {selectedInquiry.id}</span>
                        <h3 className="text-xl font-serif font-bold text-white mt-0.5">
                          {selectedInquiry.customerName}
                        </h3>
                        <p className="text-xs text-[#D4AF37] font-medium">{selectedInquiry.eventType}</p>
                      </div>

                      <button
                        onClick={() => handleDelete(selectedInquiry.id)}
                        className="p-2 text-zinc-500 hover:text-red-400 transition-colors"
                        title="Delete Inquiry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Status Changer */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                        Update Status
                      </label>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        {(['New', 'Contacted', 'Quoted', 'Confirmed', 'Closed'] as const).map((st) => (
                          <button
                            key={st}
                            onClick={() => handleStatusChange(selectedInquiry.id, st)}
                            className={`p-2 rounded-lg font-medium transition-colors border ${
                              selectedInquiry.status === st
                                ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-bold'
                                : 'bg-[#181818] border-zinc-800 text-zinc-400 hover:border-zinc-700'
                            }`}
                          >
                            {st}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Key Details */}
                    <div className="space-y-3 text-xs bg-[#090909] p-4 rounded-xl border border-zinc-800/80">
                      <div className="flex justify-between py-1 border-b border-zinc-900">
                        <span className="text-zinc-500">Phone:</span>
                        <span className="font-mono text-white font-semibold">{selectedInquiry.phone}</span>
                      </div>
                      {selectedInquiry.email && (
                        <div className="flex justify-between py-1 border-b border-zinc-900">
                          <span className="text-zinc-500">Email:</span>
                          <span className="text-zinc-300">{selectedInquiry.email}</span>
                        </div>
                      )}
                      <div className="flex justify-between py-1 border-b border-zinc-900">
                        <span className="text-zinc-500">Event Date:</span>
                        <span className="font-semibold text-[#F5D889]">{selectedInquiry.eventDate}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-zinc-900">
                        <span className="text-zinc-500">Venue / Location:</span>
                        <span className="text-white text-right">{selectedInquiry.eventLocation}</span>
                      </div>
                      {selectedInquiry.estimatedBudget && (
                        <div className="flex justify-between py-1 border-b border-zinc-900">
                          <span className="text-zinc-500">Budget:</span>
                          <span className="text-[#F5D889]">{selectedInquiry.estimatedBudget}</span>
                        </div>
                      )}
                      {selectedInquiry.guestCount && (
                        <div className="flex justify-between py-1 border-b border-zinc-900">
                          <span className="text-zinc-500">Guest Count:</span>
                          <span className="text-zinc-300">{selectedInquiry.guestCount}</span>
                        </div>
                      )}
                      <div className="pt-2">
                        <span className="text-zinc-500 block mb-1">Customer Requirements:</span>
                        <p className="text-zinc-300 bg-[#121212] p-3 rounded-lg border border-zinc-800 leading-relaxed">
                          {selectedInquiry.message || 'No specific notes provided.'}
                        </p>
                      </div>
                    </div>

                    {/* Instant Direct Actions for Vishal */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <a
                        href={`tel:${selectedInquiry.phone}`}
                        className="py-2.5 px-3 rounded-lg text-xs font-semibold text-center text-white bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Call Customer</span>
                      </a>

                      <a
                        href={`https://wa.me/91${selectedInquiry.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${selectedInquiry.customerName}, this is Vishal from RV Events and Management, Farrukhabad. Thank you for your inquiry regarding ${selectedInquiry.eventType} on ${selectedInquiry.eventDate}. I would love to share our catalog and discuss details.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 rounded-lg text-xs font-semibold text-center text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-1.5"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp Reply</span>
                      </a>
                    </div>
                  </>
                ) : (
                  <div className="py-16 text-center text-zinc-500 text-xs">
                    Select an inquiry from the left to view full requirements and take action.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Manage Services */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-serif font-bold text-white">Active Service Catalog</h3>
                <p className="text-xs text-zinc-400">Toggle service visibility on the public website.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((srv) => (
                <div key={srv.id} className="p-4 rounded-xl bg-[#101010] border border-zinc-800 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase text-[#D4AF37]">{srv.category}</span>
                    <h4 className="font-semibold text-white text-sm">{srv.name}</h4>
                    <p className="text-xs text-zinc-400 line-clamp-2">{srv.shortDescription}</p>
                  </div>

                  <button
                    onClick={() => handleToggleService(srv.id)}
                    className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
                      srv.active ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-zinc-800 text-zinc-500'
                    }`}
                  >
                    {srv.active ? 'Active' : 'Hidden'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Settings */}
        {activeTab === 'settings' && (
          <div className="max-w-2xl bg-[#101010] p-6 sm:p-8 rounded-2xl border border-zinc-800 space-y-6 text-xs sm:text-sm">
            <h3 className="text-xl font-serif font-bold text-white border-b border-zinc-800 pb-3">
              Official Business Parameters
            </h3>

            <div className="space-y-4 text-zinc-300">
              <div className="flex justify-between py-2 border-b border-zinc-900">
                <span className="text-zinc-500">Business Name:</span>
                <span className="font-semibold text-white">{BUSINESS_INFO.name}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-zinc-900">
                <span className="text-zinc-500">Owner / Representative:</span>
                <span className="font-semibold text-white">{BUSINESS_INFO.representativeName}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-zinc-900">
                <span className="text-zinc-500">Primary Phone:</span>
                <span className="font-mono text-[#F5D889] font-semibold">{BUSINESS_INFO.phone}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-zinc-900">
                <span className="text-zinc-500">Instagram Handle:</span>
                <span className="font-mono text-zinc-300">{BUSINESS_INFO.instagramHandle}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-zinc-900">
                <span className="text-zinc-500">Operating Hours:</span>
                <span>{BUSINESS_INFO.businessHours}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-zinc-900">
                <span className="text-zinc-500">Verified Address:</span>
                <span className="text-right max-w-xs">{BUSINESS_INFO.location}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#181818] border border-[#D4AF37]/20 text-xs text-zinc-400">
              Need to modify permanent business addresses or numbers? Update in the configuration file or contact developer support.
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
