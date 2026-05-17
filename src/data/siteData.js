import {
  Pill,
  ShieldCheck,
  HeartPulse,
  Tablet,
  Search,
  Truck,
  Sparkles,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Users,
  ShieldOff
} from 'lucide-react';

// Site content is stored in a single data module for easy editing.
// Update text, links, and service details here to change page content quickly.

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Inquiry', path: '/inquiry' },
  { label: 'Contact', path: '/contact' }
];

export const heroData = {
  eyebrow: "Bilaspur's trusted family pharmacy",
  title: 'Harihar Medical Store helps your family find genuine medicines with fast WhatsApp inquiry and pharmacist-led support.',
  description:
    'Family-owned pharmacy in Bilaspur since 2008, offering verified prescriptions, quick stock checks, and personalized local care.',
  callLabel: 'Call Harihar Store',
  whatsappLabel: 'WhatsApp Stock Check',
  phone: '+919981220777',
  whatsappLink: 'https://wa.me/919981220777?text=Hello%2C%20I%20need%20medicine%20availability%20information.',
  highlights: ['licensed pharmacist', 'verified brands', 'same-day stock updates'],
  badgeText: 'Emergency medicine availability 8 AM – 10 PM',
  stats: [
    { value: '18+', label: 'Years serving Bilaspur' },
    { value: '18K+', label: 'Local customers helped' },
    { value: '20 min', label: 'Typical WhatsApp response' }
  ]
};

export const serviceItems = [
  {
    title: 'Prescription Verification',
    description: 'Confirm genuine prescription medicines and receive clear guidance from our licensed pharmacist.',
    icon: ShieldCheck,
    accent: 'from-primary-700 to-primary-500'
  },
  {
    title: 'Daily Health Essentials',
    description: 'OTC medicines, vitamins, baby care, and hygiene products for everyday family wellbeing.',
    icon: Pill,
    accent: 'from-secondary-500 to-secondary-700'
  },
  {
    title: 'Senior Care Support',
    description: 'Special attention for seniors, chronic medication refills, and safe product recommendations.',
    icon: HeartPulse,
    accent: 'from-primary-500 to-secondary-500'
  },
  {
    title: 'Refill Reminders',
    description: 'Helpful refill alerts and availability updates to keep your regular medicines on hand.',
    icon: Truck,
    accent: 'from-primary-400 to-primary-600'
  }
];

export const whyItems = [
  {
    title: 'Family pharmacy with pharmacist care',
    description: 'Harihar Medical Store is a locally trusted pharmacy with a registered chemist on site every day.',
    icon: ShieldCheck
  },
  {
    title: 'Real stock answers fast',
    description: 'Send WhatsApp details and get prompt confirmation on medicine availability before you visit.',
    icon: MessageCircle
  },
  {
    title: 'No online selling, just local support',
    description: 'Focused on in-store service, safe medicine guidance, and better neighbourhood trust.',
    icon: Users
  }
];

export const howItWorks = [
  {
    step: '1',
    title: 'Share the medicine details',
    description: 'Send the name, dose, and prescription notes via WhatsApp or phone.'
  },
  {
    step: '2',
    title: 'We confirm stock',
    description: 'Our pharmacist checks availability, substitutes, and pickup timing.'
  },
  {
    step: '3',
    title: 'Visit or collect locally',
    description: 'Collect your order from the store with confidence, or ask about nearby delivery support.'
  }
];

export const testimonials = [
  {
    quote: 'Harihar Medical Store helped me find the exact medicine I needed and even suggested a safe alternative when my first choice was out of stock.',
    author: 'Anita Banerjee, Bilaspur'
  },
  {
    quote: 'Their WhatsApp response was fast, and the pharmacist explained the dosage clearly. I trust them with our family’s medicines.',
    author: 'Rohit Mehta, Bilaspur'
  },
  {
    quote: 'I rely on them for senior care supplies and prescription refills. The local team is professional and friendly.',
    author: 'Sunita Patil, Bilaspur'
  }
];

export const faqItems = [
  {
    question: 'Can I check stock before I visit?',
    answer: 'Yes. Message us on WhatsApp with the medicine name or prescription details, and we will confirm availability before you come.'
  },
  {
    question: 'Do you accept prescription details for prescribed medicines?',
    answer: 'Please share prescription information so our pharmacist can verify the medicine and recommend the right product safely.'
  },
  {
    question: 'Can I get local delivery?',
    answer: 'Local delivery support is available for nearby addresses. Ask us when you contact the store for availability and timing.'
  }
];

export const aboutStats = [
  { value: '18+', label: 'Years in service', icon: ShieldCheck },
  { value: '18K+', label: 'Customers served', icon: Pill },
  { value: '4.9/5', label: 'Customer trust rating', icon: Users }
];

export const contactCards = [
  {
    title: 'Visit our store',
    description: 'Shop 8, Krishna Arcade, Sector 7, Bilaspur',
    icon: MapPin
  },
  {
    title: 'Store hours',
    description: 'Mon – Sun, 8:00 AM – 10:00 PM',
    icon: Clock
  },
  {
    title: 'WhatsApp support',
    description: '+91 99812 20777',
    icon: Phone
  },
  {
    title: 'Email',
    description: 'contact@hariharmedical.in',
    icon: MessageCircle
  }
];

export const contactInfo = {
  phone: '+919981220777',
  email: 'contact@hariharmedical.in',
  whatsappLink: 'https://wa.me/919981220777?text=Hello%2C%20I%20need%20medicine%20availability%20information.'
};

// Mission and values sections can be updated for brand positioning and tone.
export const missionValues = [
  {
    title: 'Neighbourhood care',
    description: 'We serve local families with dependable pharmacy support and fast availability checks.'
  },
  {
    title: 'Clear pharmacy advice',
    description: 'Professional guidance without promises of online sales or medical claims.'
  },
  {
    title: 'Responsive support',
    description: 'Quick WhatsApp updates and safe prescription handling for every visit.'
  }
];
