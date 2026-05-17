import { motion } from 'framer-motion';
import { Phone, Pill, Sparkles } from 'lucide-react';
import { heroData } from '../data/siteData';

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[3rem] border border-slate-200/75 bg-gradient-to-b from-white via-slate-100 to-slate-50 px-6 py-10 shadow-glow sm:px-10 sm:py-12">
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-primary-100/20 to-transparent" />
      <div className="absolute -left-10 top-24 h-36 w-36 rounded-full bg-secondary-100/35 blur-3xl animate-float-slow" />
      <div className="page-container grid gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <p className="mb-6 inline-flex items-center gap-3 rounded-full bg-primary-900/95 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white shadow-lg">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300" />
            Family-owned pharmacy since 2008
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            <span className="block">Harihar Medical Store</span>
            <span className="mt-3 block text-primary-700">Your trusted local pharmacy for genuine medicines and fast WhatsApp stock checks.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
            Our licensed pharmacist verifies prescriptions, confirms availability, and helps you collect medicines safely in Bilaspur.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href={`tel:${heroData.phone}`} className="btn-primary">
              <Phone size={18} className="mr-2" />
              {heroData.callLabel}
            </a>
            <a
              href={heroData.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <Sparkles size={18} className="mr-2 text-primary-500" />
              {heroData.whatsappLabel}
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {heroData.stats.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -4 }}
                className="glass-card rounded-[1.9rem] border-slate-200/80 p-5 text-center"
              >
                <p className="text-3xl font-semibold text-slate-950">{item.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="hero-illustration relative overflow-hidden rounded-[2.5rem] border border-slate-200/80 p-6 shadow-soft">
            <div className="absolute -top-8 -right-8 h-36 w-36 rounded-full bg-primary-100/40 blur-3xl animate-float-slow" />
            <div className="absolute bottom-[-24px] left-10 h-28 w-28 rounded-full bg-secondary-100/35 blur-3xl animate-float-slow" />
            <div className="relative">
              <div className="grid gap-5">
                <div className="rounded-[2rem] bg-white/95 p-6 shadow-xl border border-white/80">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-primary-700">Pharmacy snapshot</p>
                      <p className="mt-3 text-xl font-semibold text-slate-950">Quick stock decisions</p>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-primary-50 text-primary-700">
                      <Pill size={22} />
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-600">Verified brands, responsive WhatsApp support, and a licensed pharmacist on duty every day.</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[1.75rem] bg-slate-50 p-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Trusted stock</p>
                      <p className="mt-3 text-sm font-semibold text-slate-900">Verified medicines only</p>
                    </div>
                    <div className="rounded-[1.75rem] bg-slate-50 p-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Pharmacist review</p>
                      <p className="mt-3 text-sm font-semibold text-slate-900">Prescription safety checks</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[2rem] bg-primary-700/10 p-5 shadow-sm border border-primary-100/70">
                    <p className="text-sm uppercase tracking-[0.28em] text-primary-700">Emergency care</p>
                    <p className="mt-3 text-base font-semibold text-slate-950">Important medicines ready</p>
                  </div>
                  <div className="rounded-[2rem] bg-white/95 p-5 shadow-sm border border-slate-200">
                    <p className="text-sm uppercase tracking-[0.28em] text-primary-700">Local pickup</p>
                    <p className="mt-3 text-base font-semibold text-slate-950">Simple & reliable every day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
