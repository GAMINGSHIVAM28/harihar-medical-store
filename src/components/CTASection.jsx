import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';
import { contactInfo } from '../data/siteData';

function CTASection({ eyebrow, title, description, buttonLabel, buttonLink }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.25 }}
      className="rounded-[2.5rem] bg-gradient-to-r from-primary-600 via-slate-800 to-secondary-700 p-6 sm:p-8 text-white shadow-glow"
    >
      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-primary-200">{eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200">{description}</p>
        </div>
        <div className="flex items-center justify-start lg:justify-end">
          <a
            href={buttonLink || contactInfo.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary inline-flex w-full items-center justify-center gap-3 bg-white/95 text-slate-900 shadow-hover sm:w-auto"
          >
            <PhoneCall size={18} />
            {buttonLabel}
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default CTASection;
