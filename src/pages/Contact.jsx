import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { contactCards, contactInfo } from '../data/siteData';

function Contact() {
  return (
    <div className="space-y-20">
      <section className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-end">
        <div>
          <SectionTitle
            eyebrow="Contact"
            title="Reach our pharmacy team for medicine checks and local support"
            description="Visit us, call directly, or send a WhatsApp message for prompt availability updates and friendly guidance."
          />
          <p className="text-slate-600 leading-8">
            Our store is open every day with a pharmacist ready to answer your medicine questions. Please contact us for stock confirmations before you visit.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.3 }}
          className="glass-card rounded-[2.5rem] border border-slate-200/80 p-8 shadow-soft"
        >
          <div className="space-y-6">
            {contactCards.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-[1.75rem] bg-slate-50 p-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-primary-50 text-primary-700">
                  <item.icon size={22} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-slate-600 leading-7">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.3 }}
          className="glass-card rounded-[2.5rem] border border-slate-200/80 p-8 shadow-soft"
        >
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-primary-600">Map location</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">Visit our store in person</h3>
            </div>
            <div className="glass-card rounded-[2rem] border border-slate-200/80 p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <MapPin size={26} className="mt-1 text-primary-600" />
                <div>
                  <p className="font-semibold text-slate-900">Shop 8, Krishna Arcade</p>
                  <p className="mt-1 text-slate-600">Sector 7, Bilaspur</p>
                </div>
              </div>
              <p className="mt-5 text-slate-600 leading-7">
                Visit the store for local medicine pickup, or message us on WhatsApp for directions and the fastest route from your area.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <div className="glass-card rounded-[2rem] border border-slate-200/80 p-8 shadow-soft">
            <p className="uppercase tracking-[0.3em] text-primary-600">Emergency call</p>
            <p className="mt-4 text-3xl font-semibold text-slate-900">{contactInfo.phone}</p>
            <p className="mt-3 text-slate-600 leading-7">Call us for urgent medicine availability checks and local assistance.</p>
          </div>

          <ContactForm
            title="Send a contact request"
            note="Share your availability, preferred contact method, and medicine need. We will reply as soon as possible."
            formType="contact"
            submitLabel="Send message"
          />
        </motion.div>
      </section>
    </div>
  );
}

export default Contact;
