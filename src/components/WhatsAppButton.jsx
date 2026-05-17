import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/siteData';

function WhatsAppButton() {
  return (
    <motion.a
      href={contactInfo.whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp quick inquiry"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2, scale: 1.01 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed z-50 inline-flex max-w-[calc(100%-2rem)] items-center gap-3 rounded-full border border-white/80 bg-white/95 px-4 py-3 text-sm font-semibold text-slate-900 shadow-soft backdrop-blur-xl transition-all duration-300 ease-out hover:shadow-hover floating-action whitespace-nowrap sm:px-5"
    >
      <MessageCircle size={20} />
      WhatsApp us
    </motion.a>
  );
}

export default WhatsAppButton;
