export type ActiveTab = 'home' | 'solutions' | 'about' | 'contact';

export interface ServiceItem {
  id: string;
  name: string;
  title: string;
  badge: string;
  description: string;
  longDescription: string;
  logoUrl: string;
  features: string[];
  caseStudy: {
    title: string;
    metrics: string;
    summary: string;
  };
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  linkedin?: string;
}

export interface GlobalLocation {
  id: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  alternativePhone?: string;
  email: string;
  timezone: string; // e.g. "Asia/Kolkata", "America/New_York", "Asia/Manila", "Europe/London"
  coordinates: { x: number; y: number };
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  serviceInterest: string;
  message: string;
  date: string;
  status: 'Received' | 'Assigned' | 'Reviewing' | 'Processed';
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string; // Full-time, Contract, etc.
  description: string;
  requirements: string[];
}

export interface QuoteRequest {
  services: string[];
  monthlyVolume: number;
  urgency: 'standard' | 'expedited';
  coverage: 'business-hours' | '24-7';
  estimatedCost: number;
}
