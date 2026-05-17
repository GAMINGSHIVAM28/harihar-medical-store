import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/siteData';

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-950 text-slate-300 footer-ambient">
      <div className="page-container grid gap-8 py-12 md:grid-cols-3 md:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-primary-400">Trusted Pharmacy</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Harihar Medical Store</h2>
          <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
            Family-owned pharmacy in Bilaspur offering trusted medicine availability, prescription verification, and responsive WhatsApp support.
          </p>
        </div>

        <div className="space-y-4 text-sm text-slate-300">
          <div className="flex items-center gap-3">
            <MapPin size={20} className="text-primary-500" />
            <span>Shop 8, Krishna Arcade, Sector 7, Bilaspur</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={20} className="text-primary-500" />
            <span>{contactInfo.phone}</span>
          </div>
          <div className="flex items-center gap-3">
            <MessageCircle size={20} className="text-primary-500" />
            <span>{contactInfo.email}</span>
          </div>
        </div>

        <div className="rounded-[1.75rem] bg-slate-900/90 p-6 shadow-soft">
          <p className="text-sm uppercase tracking-[0.24em] text-primary-400">Hours</p>
          <p className="mt-4 text-lg font-semibold text-white">Mon – Sun</p>
          <p className="mt-1 text-slate-400">8:00 AM – 10:00 PM</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
