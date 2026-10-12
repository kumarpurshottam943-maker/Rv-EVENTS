export interface ServiceItem {
  id: string;
  name: string;
  slug: string;
  category: 'Weddings' | 'Stage & Decor' | 'Family & Celebrations' | 'Institutional & Corporate';
  shortDescription: string;
  fullDescription: string;
  featuredImage: string;
  galleryImages: string[];
  features: string[];
  active: boolean;
}

export interface GalleryMedia {
  id: string;
  title: string;
  category: 'Wedding Stages' | 'Bride & Groom Entry' | 'Haldi & Mehndi' | 'Home Decoration' | 'Birthdays & Themes' | 'Corporate & Receptions';
  imageUrl: string;
  description: string;
  isDemonstration: boolean;
}

export interface CustomerInquiry {
  id: string;
  customerName: string;
  phone: string;
  email?: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  estimatedBudget?: string;
  guestCount?: string;
  message: string;
  consent: boolean;
  status: 'New' | 'Contacted' | 'Quoted' | 'Confirmed' | 'Closed';
  createdAt: string;
}

export const BUSINESS_INFO = {
  name: 'RV Events and Management',
  brandInitials: 'RV',
  representativeName: 'Vishal',
  phone: '8090123175',
  phoneDisplay: '+91 8090123175',
  phoneTel: 'tel:+918090123175',
  whatsappNumber: '918090123175',
  whatsappUrl: (message?: string) => {
    const text = message ? encodeURIComponent(message) : encodeURIComponent('Hello Vishal, I would like to enquire about event planning and decoration with RV Events and Management, Farrukhabad.');
    return `https://wa.me/918090123175?text=${text}`;
  },
  location: 'Bewar Road, Bholepur, Fatehgarh, Farrukhabad, Uttar Pradesh, India',
  postalCode: '209601',
  postalCodeAlt: '209602',
  googleMapsQuery: 'RV Events and Management Bewar Road Bholepur Fatehgarh Farrukhabad',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=RV+Events+and+Management+Bewar+Road+Bholepur+Fatehgarh+Farrukhabad+Uttar+Pradesh',
  googleRating: 5.0,
  googleReviewCount: 2,
  instagramHandle: '@rv_events_and_management_fbd',
  instagramUrl: 'https://instagram.com/rv_events_and_management_fbd',
  businessHours: 'Monday – Sunday: 9:00 AM – 8:00 PM',
  operatingStatus: 'Open · Operational',
  category: 'Event Planner & Decoration Service',
};

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    name: 'Wedding Planning',
    slug: 'wedding-planning',
    category: 'Weddings',
    shortDescription: 'Complete royal wedding management, from conceptualization and venue styling to precision on-ground coordination.',
    fullDescription: 'Experience seamless luxury on your special day. RV Events and Management handles complete wedding coordination in Farrukhabad, Fatehgarh, and nearby regions. We manage mandap design, guest flow, vendor scheduling, bridal hospitality, and thematic decorations so your family can celebrate without stress.',
    featuredImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['Venue & Mandap Conceptualization', 'Floral Styling & Amber Lighting', 'Vendor Scheduling & Hospitality', 'Day-of Event Floor Coordination'],
    active: true,
  },
  {
    id: 'srv-2',
    name: 'Bride & Groom Entry',
    slug: 'bride-groom-entry',
    category: 'Weddings',
    shortDescription: 'Spectacular grand entries featuring cold pyrotechnics, royal phoolon ki chaadar, smoke clouds, and light tunnels.',
    fullDescription: 'Make your grand entrance breathtaking. We design bespoke bridal and groom entry pathways tailored to your ceremony. Choose from royal floral canopies (phoolon ki chaadar), safe indoor cold pyro sparkulars, low-lying dry ice fog, LED fairy light tunnels, and live musical accompaniment.',
    featuredImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['Safe Cold Pyrotechnic Sparkulars', 'Low Fog / Dry Ice Clouds', 'Royal Phoolon Ki Chaadar', 'Fairy Light & Floral Aisle Runway'],
    active: true,
  },
  {
    id: 'srv-3',
    name: 'Engagement Planning',
    slug: 'engagement-planning',
    category: 'Weddings',
    shortDescription: 'Chic, romantic ring ceremony setups with designer stage backdrops, personalized initials, and acoustic elegance.',
    fullDescription: 'Celebrate your union with an intimate or grand engagement party. RV Events crafts romantic focal points, custom monogram rings, neon lettering, pastel flower arches, and ambient mood lighting designed for memorable photo moments.',
    featuredImage: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['Custom Ring Ceremony Stage', 'Monogram Neon & Floral Backdrop', 'Couple Seating & Throne Chairs', 'Audio & Photography Coordination'],
    active: true,
  },
  {
    id: 'srv-4',
    name: 'Stage Decoration',
    slug: 'stage-decoration',
    category: 'Stage & Decor',
    shortDescription: 'Opulent wedding and reception stages featuring fresh floral walls, golden arches, carved pillars, and chandeliers.',
    fullDescription: 'The stage is the heart of your celebration. From traditional royal gold themes to modern geometric floral designs, RV Events specializes in creating stunning stage decor in Farrukhabad. We use premium drapery, crystal chandeliers, fresh imported flowers, and spotlighting to make the couple shine.',
    featuredImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['Fresh & Artificial Floral Installations', 'Crystal Chandeliers & Warm Halogens', 'Regal Throne Sofa Arrangements', 'Customized Backdrop Framing'],
    active: true,
  },
  {
    id: 'srv-5',
    name: 'Home Decoration',
    slug: 'home-decoration',
    category: 'Stage & Decor',
    shortDescription: 'Magical residential lighting, facade illumination, entrance arches, and traditional floral decor for family festivities.',
    fullDescription: 'Transform your ancestral home or bungalow for wedding festivities. We provide complete home exterior LED fairy light cascades, boundary lighting, roof line outlines, entrance gates, marigold torans, and traditional brass urli arrangements for pre-wedding rituals.',
    featuredImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['Full Villa / Home Exterior Fairy Lighting', 'Traditional Genda Phool Toran & Rangoli', 'Courtyard & Rooftop Ritual Setup', 'Entrance Welcome Arches'],
    active: true,
  },
  {
    id: 'srv-6',
    name: 'Haldi & Mehandi Decoration',
    slug: 'haldi-mehandi-decoration',
    category: 'Weddings',
    shortDescription: 'Vibrant yellow, marigold, and bohemian setups with traditional brass urlis, dreamcatchers, and lively seating.',
    fullDescription: 'Bring joy and color to your Haldi and Mehndi ceremonies. We craft sunny yellow setups, traditional marigold backdrops, colorful tassel draping, comfortable diwan seating with bolsters, floral swings (jhoola), and brass urlis for the auspicious turmeric ritual.',
    featuredImage: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['Marigold Floral Curtains & Backdrops', 'Traditional Haldi Urli & Floral Trays', 'Decorated Jhoola (Swing) for Bride', 'Mehndi Lounge & Low Diwan Seating'],
    active: true,
  },
  {
    id: 'srv-7',
    name: 'Birthday & Theme Parties',
    slug: 'birthday-theme-parties',
    category: 'Family & Celebrations',
    shortDescription: 'Customized birthday setups for kids, milestones, and adults with premium balloon styling, custom cakes, and props.',
    fullDescription: 'From 1st birthday fairytale themes to elegant milestone celebrations (25th, 50th), RV Events provides complete party planning. We construct organic balloon garlands, LED numbers, cartoon or Hollywood cutouts, personalized dessert backdrops, and entertainment.',
    featuredImage: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['Organic Balloon Arches & Garlands', 'Light-Up LED Numbers & Name Boards', 'Theme Cutouts & Custom Cake Tables', 'Party Host & Activity Coordination'],
    active: true,
  },
  {
    id: 'srv-8',
    name: 'School & College Functions',
    slug: 'school-college-functions',
    category: 'Institutional & Corporate',
    shortDescription: 'Professional auditoriums, annual day stages, sound systems, dais setups, and dignitary seating.',
    fullDescription: 'We provide end-to-end event infrastructure for schools, colleges, and institutes across Farrukhabad and Fatehgarh. Services include sturdy stage extensions, heavy-duty podiums, crisp PA audio systems, dynamic stage lights, LED screens, and student seating arrangements.',
    featuredImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['High-Output Sound & Microphone Setup', 'Dignitary Dais & Floral Bouquets', 'Annual Day Lighting & Trussing', 'Prizegiving Area & Seating Logistics'],
    active: true,
  },
  {
    id: 'srv-9',
    name: 'Corporate Events',
    slug: 'corporate-events',
    category: 'Institutional & Corporate',
    shortDescription: 'Polished seminars, product launches, corporate galas, and business award ceremonies.',
    fullDescription: 'Deliver an impactful corporate impression. We support local businesses, banks, dealers, and corporate branches in Farrukhabad with conference backdrops, projector/LED screens, registration counters, corporate gift packing, and executive dinner arrangements.',
    featuredImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['Branded Stage Backdrops & Podiums', 'AV & Presentation Technology', 'Executive Banquet Table Layouts', 'Guest Registration & Badge Tables'],
    active: true,
  },
  {
    id: 'srv-10',
    name: 'Catering Services',
    slug: 'catering-services',
    category: 'Family & Celebrations',
    shortDescription: 'Delectable multi-cuisine food arrangements, live counter stalls, royal chaat corners, and hygienic banquet service.',
    fullDescription: 'Food is the memorable centerpiece of any Indian gathering. RV Events coordinates premium vegetarian and celebratory banquet catering. We offer customized menus featuring North Indian delicacies, Awadhi sweets, live chaat stalls, mocktail bars, and experienced waitstaff.',
    featuredImage: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['Live Chaat, Dosa & Mocktail Counters', 'Royal Buffet Setup & Chafing Dishes', 'Uniformed Catering & Service Staff', 'Custom Multi-Cuisine Menu Planning'],
    active: true,
  },
  {
    id: 'srv-11',
    name: 'Anniversary Party Planning',
    slug: 'anniversary-party-planning',
    category: 'Family & Celebrations',
    shortDescription: 'Heartwarming 25th Silver and 50th Golden Jubilee milestone celebrations with elegant family seating.',
    fullDescription: 'Honor years of love with a curated anniversary celebration. From nostalgic photo galleries and candlelight banquet dinners to ring re-exchanges and family entertainment, we create warm, respectful memories.',
    featuredImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['Silver & Golden Milestone Themes', 'Memory Lane Photo Wall Display', 'Candlelit Banquet Decor & Cake Table', 'Family Reunion Seating & Music'],
    active: true,
  },
  {
    id: 'srv-12',
    name: 'Baby Shower Planning',
    slug: 'baby-shower-planning',
    category: 'Family & Celebrations',
    shortDescription: 'Sweet Godh Bharai and modern pastel baby showers with balloon clouds, floral cradles, and games.',
    fullDescription: 'Bless the mother-to-be with an enchanting Godh Bharai or baby shower celebration. We create soft pastel balloon styling, floral cradle installations, custom welcoming arches, and comfortable seating.',
    featuredImage: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['Pastel Blue/Pink/Neutral Balloon Garlands', 'Floral Decorated Cradle / Jhoola', 'Godh Bharai Ritual Stage Setup', 'Photo Booth with Props'],
    active: true,
  },
  {
    id: 'srv-13',
    name: 'Outdoor Event Planning',
    slug: 'outdoor-event-planning',
    category: 'Stage & Decor',
    shortDescription: 'Lush lawn parties, open-air receptions, weatherproof marquees, and enchanting fairy-lit tree decor.',
    fullDescription: 'Take your celebration under the open sky. We transform farmhouses, resort lawns, and open grounds in Farrukhabad with decorative shamiyana tents, fairy-lit tree trunks, lantern walkways, and weatherproof flooring.',
    featuredImage: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['Lawn Marquee & Canopy Installation', 'Tree Fairy Lighting & Hanging Lanterns', 'Pathway Torches & Candle Pathways', 'Weatherproof Generator & Sound Setup'],
    active: true,
  },
  {
    id: 'srv-14',
    name: 'Reception Party Planning',
    slug: 'reception-party-planning',
    category: 'Weddings',
    shortDescription: 'Glamorous post-wedding receptions featuring grand red carpet pathways, crystal stages, and orchestral lighting.',
    fullDescription: 'Welcome your extended family and guests to an unforgettable reception. RV Events creates sophisticated evening ambiences with sleek mirrored walkways, grand LED backdrops, photo lounges, and VIP guest hosting.',
    featuredImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['Mirrored & Red Carpet Runways', 'Grand Couple Reception Stage', 'Photo Booths with Instant Printing Options', 'Ambient Moving Head Lighting'],
    active: true,
  },
  {
    id: 'srv-15',
    name: 'Event Decor Design',
    slug: 'event-decor-design',
    category: 'Stage & Decor',
    shortDescription: 'Custom 3D thematic decor styling, color palette moodboards, bespoke floral arches, and personalized fabrications.',
    fullDescription: 'Have a specific vision from Instagram or Pinterest? Our team translates your ideas into reality. We customize fabric drapes, metallic geometry, floral mixes, entrance tunnels, and bespoke lighting schemes tailored to your exact budget and venue.',
    featuredImage: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    ],
    features: ['Moodboard & Theme Consultation', 'Bespoke Floral & Fabric Combinations', 'Custom Neon Signs & Cutouts', 'Color Harmonized Venue Transformation'],
    active: true,
  },
];

export const GALLERY_ITEMS: GalleryMedia[] = [
  {
    id: 'gal-1',
    title: 'Royal Gold Wedding Mandap & Stage',
    category: 'Wedding Stages',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    description: 'Carved golden pillars, crystal chandeliers, and cascading white floral mandap decor in Farrukhabad banquet hall.',
    isDemonstration: true,
  },
  {
    id: 'gal-2',
    title: 'Grand Bridal Entry Sparkulars',
    category: 'Bride & Groom Entry',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    description: 'Cold firework sparkulars along the royal red carpet with delicate low-lying fog clouds.',
    isDemonstration: true,
  },
  {
    id: 'gal-3',
    title: 'Sunny Haldi Urli & Marigold Setup',
    category: 'Haldi & Mehndi',
    imageUrl: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=1200&q=80',
    description: 'Traditional brass urli with yellow marigold cascades and bohemian seating.',
    isDemonstration: true,
  },
  {
    id: 'gal-4',
    title: 'Residential Villa Fairy Light Illumination',
    category: 'Home Decoration',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
    description: 'Warm golden fairy string light cascades over home facade for wedding festivities in Fatehgarh.',
    isDemonstration: true,
  },
  {
    id: 'gal-5',
    title: 'Luxury Black & Gold Birthday Setup',
    category: 'Birthdays & Themes',
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
    description: 'Metallic champagne balloons, LED neon signage, and styled cake pedestal table.',
    isDemonstration: true,
  },
  {
    id: 'gal-6',
    title: 'Grand Reception Stage with White Orchids',
    category: 'Corporate & Receptions',
    imageUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
    description: 'Architectural floral arches, amber spotlights, and royal plush seating for evening reception.',
    isDemonstration: true,
  },
  {
    id: 'gal-7',
    title: 'Mehndi Lounge & Jhoola Decor',
    category: 'Haldi & Mehndi',
    imageUrl: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
    description: 'Floral-dressed wooden swing with vibrant green and orange drapery for bridal mehndi ceremony.',
    isDemonstration: true,
  },
  {
    id: 'gal-8',
    title: 'Open Lawn Night Reception & Shamiyana',
    category: 'Wedding Stages',
    imageUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    description: 'Warm tree canopy illumination, fairy light ceiling, and velvet seating in open-air garden.',
    isDemonstration: true,
  },
];

export const FAQS = [
  {
    question: 'How do I request an event quotation or check date availability?',
    answer: 'You can submit the inquiry form directly on this website, call Vishal directly at +91 8090123175, or tap the WhatsApp button with your date and event requirements. We promptly check our event calendar and share a customized estimate.',
  },
  {
    question: 'Which areas do you provide event planning and decoration in?',
    answer: 'Our main office is located on Bewar Road, Bholepur, Fatehgarh, Farrukhabad (Uttar Pradesh). We actively serve all neighborhoods of Farrukhabad, Fatehgarh, Kamalganj, Kaimganj, and neighboring districts across Uttar Pradesh.',
  },
  {
    question: 'Can I share reference decoration photos from Instagram or Pinterest?',
    answer: 'Yes! We encourage clients to share their favorite photos and concepts. Send them to us directly on WhatsApp (+91 8090123175). Our team evaluates your venue dimensions and crafts a tailored setup that matches your aesthetic and budget.',
  },
  {
    question: 'What types of celebrations and ceremonies does RV Events handle?',
    answer: 'We provide complete planning and decor for Weddings, Bride & Groom Grand Entries, Stage & Mandap Decor, Engagements, Haldi & Mehndi ceremonies, Home Lighting, Birthday & Theme Parties, School & College Functions, Corporate Events, and Catering Services.',
  },
  {
    question: 'How far in advance should we book for weddings or high-demand dates?',
    answer: 'For wedding peak dates (Sawa dates) and grand receptions, we advise booking 4 to 8 weeks in advance to secure preferred decor materials and team availability. However, we also cater to short-notice home decorations and family gatherings subject to schedule availability.',
  },
  {
    question: 'Can we visit your office or meet in Farrukhabad to discuss decor?',
    answer: 'Certainly! You can schedule an in-person meeting with Vishal at our location on Bewar Road, Bholepur, Fatehgarh (near Farrukhabad). Please call in advance to ensure our team is available between 9:00 AM and 8:00 PM.',
  },
];

export const INITIAL_INQUIRIES: CustomerInquiry[] = [
  {
    id: 'inq-101',
    customerName: 'Ankit Sharma',
    phone: '9839123456',
    email: 'ankit.s@gmail.com',
    eventType: 'Wedding Planning',
    eventDate: '2026-11-20',
    eventLocation: 'Royal Palace Banquet, Farrukhabad',
    estimatedBudget: '₹1,50,000 - ₹2,50,000',
    guestCount: '400',
    message: 'Looking for full wedding mandap decor, royal couple stage, and bride entry with cold pyro.',
    consent: true,
    status: 'New',
    createdAt: '2026-10-11T14:30:00Z',
  },
  {
    id: 'inq-102',
    customerName: 'Pooja Verma',
    phone: '9123456780',
    email: 'pooja.verma@outlook.com',
    eventType: 'Haldi & Mehandi Decoration',
    eventDate: '2026-11-15',
    eventLocation: 'Home Courtyard, Bholepur, Fatehgarh',
    estimatedBudget: '₹40,000 - ₹60,000',
    guestCount: '120',
    message: 'Need vibrant marigold decor with traditional urli setup and fairy lighting for home entrance.',
    consent: true,
    status: 'Contacted',
    createdAt: '2026-10-10T10:15:00Z',
  },
];
