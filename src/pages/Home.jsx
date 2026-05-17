import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';
import { serviceItems, whyItems, howItWorks, testimonials, faqItems } from '../data/siteData';

function Home() {
  return (
    <div className="space-y-20">
      <HeroSection />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <SectionTitle
          eyebrow="Why choose us"
          title="Premium medical store service designed for your family"
          description="Genuine products, friendly pharmacist guidance, and quick availability support for local customers."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {whyItems.map((item) => (
            <motion.article
              key={item.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="glass-card rounded-[2rem] border border-slate-200/80 p-7 shadow-soft"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-primary-50 text-primary-700 shadow-sm">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-4 text-slate-600 leading-7">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
      >
        <SectionTitle
          eyebrow="Our services"
          title="Designed for medicine availability, wellness, and easy local care"
          description="Choose the right pharmacy support for prescriptions, daily healthcare essentials, and fast refill planning."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {serviceItems.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
      >
        <SectionTitle
          eyebrow="How it works"
          title="Simple steps for a reliable pharmacy visit"
          description="From quick WhatsApp checks to local pickup, our process is clear and easy for every customer."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {howItWorks.map((item) => (
            <motion.div
              key={item.step}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="glass-card rounded-[2rem] border border-slate-200/80 p-7 shadow-soft"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-primary-600 text-white">
                <span className="text-lg font-semibold">{item.step}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-slate-600 leading-7">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
      >
        <SectionTitle
          eyebrow="What customers say"
          title="Trusted local reviews from families in your neighbourhood"
          description="Real feedback about our pharmacy service, prompt responses, and reliable medicine availability checks."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.author} {...item} />
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      >
        <SectionTitle
          eyebrow="FAQ"
          title="Common questions about our service"
          description="Answers to the most frequent pharmacy inquiries so you can contact us with confidence."
        />
        <FAQAccordion items={faqItems} />
      </motion.section>

      <CTASection
        eyebrow="Ready to inquire"
        title="Get fast medicine availability confirmation on WhatsApp"
        description="Share your medicine details and our pharmacy team will respond with stock status and next steps."
        buttonLabel="Start WhatsApp Chat"
      />
    </div>
  );
}

export default Home;
