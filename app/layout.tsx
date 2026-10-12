import type { Metadata } from 'next';
import './globals.css';
import { BUSINESS_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: 'RV Events and Management Farrukhabad | Luxury Wedding & Event Decor',
  description: 'Premier event planning and decoration service in Farrukhabad & Fatehgarh, UP. Royal wedding stages, bridal entry cold pyro, haldi/mehndi, and corporate events by Vishal.',
  keywords: [
    'RV Events and Management',
    'Event Planner in Farrukhabad',
    'Wedding Planner in Farrukhabad',
    'Wedding Decoration in Fatehgarh',
    'Stage Decoration in Farrukhabad',
    'Birthday Party Planner Farrukhabad',
    'Haldi Decoration Farrukhabad',
    'Bride Groom Entry Farrukhabad',
  ],
  authors: [{ name: 'RV Events and Management' }],
  openGraph: {
    title: 'RV Events and Management Farrukhabad | Making Every Celebration Unforgettable',
    description: 'Thoughtfully planned events, beautiful decorations, and memorable experiences with RV Events and Management, Farrukhabad.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'RV Events and Management Farrukhabad',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Royal Wedding Stage Decoration in Farrukhabad by RV Events',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RV Events and Management Farrukhabad',
    description: 'Luxury wedding planning, stage decor, and celebration management in Farrukhabad & Fatehgarh.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EventPlanner',
    name: 'RV Events and Management',
    alternateName: 'RV Events Farrukhabad',
    description: 'Premier wedding planner, stage decoration, and event management service located on Bewar Road, Bholepur, Fatehgarh, Farrukhabad, Uttar Pradesh.',
    telephone: '+918090123175',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bewar Road, Bholepur',
      addressLocality: 'Fatehgarh, Farrukhabad',
      addressRegion: 'Uttar Pradesh',
      postalCode: '209601',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '27.3697',
      longitude: '79.6277',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '2',
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: '₹₹',
    sameAs: [
      'https://instagram.com/rv_events_and_management_fbd',
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#050505] antialiased text-zinc-100 min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
