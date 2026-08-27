export interface MenuItem {
  id: string;
  name: string;
  frenchTitle?: string;
  description: string;
  price: number;
  category: 'tasting' | 'starters' | 'mains' | 'desserts' | 'caviar' | 'cocktails' | 'cellar';
  dietary?: ('GF' | 'VG' | 'V' | 'DF' | 'NF')[];
  pairing?: string;
  vintageYear?: string;
  image: string;
  isSignature?: boolean;
  calories?: string;
  origin?: string;
}

export interface TastingCourse {
  courseNumber: number;
  act: string;
  dishName: string;
  frenchTitle: string;
  description: string;
  ingredients: string[];
  winePairing: string;
  wineRegion: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'culinary' | 'ambiance' | 'cellar' | 'kitchen' | 'mixology';
  imageUrl: string;
  aspect: 'portrait' | 'landscape' | 'square';
  description: string;
  details?: string;
  chefQuote?: string;
  depth: number; // for parallax layering
}

export interface ReservationData {
  id: string;
  experience: 'tasting-odyssey' | 'chefs-counter' | 'private-vault' | 'classic-dining';
  partySize: number;
  date: string;
  timeSlot: string;
  seatingZone: 'main-salon' | 'velvet-booth' | 'cellar-vault' | 'chefs-counter' | 'terrace';
  guestName: string;
  email: string;
  phone: string;
  specialOccasion?: string;
  dietaryNotes?: string;
  valetRequired: boolean;
  sommelierConsultation: boolean;
  createdAt: string;
}

export interface Review {
  id: string;
  critic: string;
  publication: string;
  badge: string;
  rating: number; // 1-5
  quote: string;
  date: string;
}
