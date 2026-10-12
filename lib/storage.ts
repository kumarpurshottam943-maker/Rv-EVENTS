import { CustomerInquiry, INITIAL_INQUIRIES, INITIAL_SERVICES, ServiceItem, GalleryMedia, GALLERY_ITEMS } from './data';

const INQUIRIES_STORAGE_KEY = 'rv_events_inquiries_v1';
const SERVICES_STORAGE_KEY = 'rv_events_services_v1';
const GALLERY_STORAGE_KEY = 'rv_events_gallery_v1';

// Server-side in-memory store fallback
let serverInquiries: CustomerInquiry[] = [...INITIAL_INQUIRIES];
let serverServices: ServiceItem[] = [...INITIAL_SERVICES];
let serverGallery: GalleryMedia[] = [...GALLERY_ITEMS];

export function getStoredInquiries(): CustomerInquiry[] {
  if (typeof window === 'undefined') {
    return serverInquiries;
  }
  try {
    const raw = localStorage.getItem(INQUIRIES_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(INITIAL_INQUIRIES));
      return INITIAL_INQUIRIES;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading inquiries from localStorage', err);
    return INITIAL_INQUIRIES;
  }
}

export function saveInquiry(inquiry: Omit<CustomerInquiry, 'id' | 'createdAt' | 'status'>): CustomerInquiry {
  const newInquiry: CustomerInquiry = {
    ...inquiry,
    id: `inq-${Date.now()}`,
    createdAt: new Date().toISOString(),
    status: 'New',
  };

  if (typeof window === 'undefined') {
    serverInquiries.unshift(newInquiry);
    return newInquiry;
  }

  try {
    const current = getStoredInquiries();
    const updated = [newInquiry, ...current];
    localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Error saving inquiry to localStorage', err);
  }

  return newInquiry;
}

export function updateInquiryStatus(id: string, status: CustomerInquiry['status']): boolean {
  if (typeof window === 'undefined') {
    const item = serverInquiries.find(i => i.id === id);
    if (item) {
      item.status = status;
      return true;
    }
    return false;
  }

  try {
    const current = getStoredInquiries();
    const updated = current.map(item => item.id === id ? { ...item, status } : item);
    localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(updated));
    return true;
  } catch (err) {
    console.error('Error updating inquiry status', err);
    return false;
  }
}

export function deleteInquiry(id: string): boolean {
  if (typeof window === 'undefined') {
    serverInquiries = serverInquiries.filter(i => i.id !== id);
    return true;
  }

  try {
    const current = getStoredInquiries();
    const updated = current.filter(item => item.id !== id);
    localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(updated));
    return true;
  } catch (err) {
    console.error('Error deleting inquiry', err);
    return false;
  }
}

export function getStoredServices(): ServiceItem[] {
  if (typeof window === 'undefined') {
    return serverServices;
  }
  try {
    const raw = localStorage.getItem(SERVICES_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(SERVICES_STORAGE_KEY, JSON.stringify(INITIAL_SERVICES));
      return INITIAL_SERVICES;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading services from localStorage', err);
    return INITIAL_SERVICES;
  }
}

export function toggleServiceStatus(id: string): boolean {
  if (typeof window === 'undefined') {
    const s = serverServices.find(item => item.id === id);
    if (s) {
      s.active = !s.active;
      return true;
    }
    return false;
  }

  try {
    const current = getStoredServices();
    const updated = current.map(s => s.id === id ? { ...s, active: !s.active } : s);
    localStorage.setItem(SERVICES_STORAGE_KEY, JSON.stringify(updated));
    return true;
  } catch (err) {
    console.error('Error toggling service status', err);
    return false;
  }
}

export function getStoredGallery(): GalleryMedia[] {
  if (typeof window === 'undefined') {
    return serverGallery;
  }
  try {
    const raw = localStorage.getItem(GALLERY_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(GALLERY_ITEMS));
      return GALLERY_ITEMS;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading gallery from localStorage', err);
    return GALLERY_ITEMS;
  }
}
