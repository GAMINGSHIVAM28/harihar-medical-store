import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { contactInfo } from '../data/siteData';

function Inquiry() {
  return (
    <div className="space-y-20">
      <section className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div>
          <SectionTitle
            eyebrow="Inquiry"
            title="Share your medicine request and we’ll confirm availability quickly"
            description="A premium inquiry form for local customers with safe prescription support and rapid WhatsApp follow-up."
          />
          <p className="text-slate-600 leading-8">
            Please provide medicine details or prescription notes. Our pharmacy team will review stock and share the next available pickup option.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.3 }}
          className="glass-card rounded-[2.5rem] border border-slate-200/80 p-8 shadow-soft"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-primary-600">Quick inquiry</p>
          <h3 className="mt-4 text-3xl font-semibold text-slate-900">WhatsApp or form support</h3>
          <p className="mt-5 text-slate-600 leading-8">
            If you need immediate confirmation, send a message via WhatsApp. For detailed inquiries, complete the form and we will reply as soon as possible.
          </p>
          <div className="mt-8 rounded-[2rem] bg-primary-50 p-6 text-slate-800">
            <p className="font-semibold">WhatsApp support</p>
            <p className="mt-3 leading-7">Message us at {contactInfo.phone} and include medicine or prescription details.</p>
          </div>
        </motion.div>
      </section>

      <ContactForm
        title="Medicine availability inquiry"
        note="Please share prescription details for prescribed medicines. We do not sell prescription medicines online."
        formType="inquiry"
        submitLabel="Send inquiry"
      />
    </div>
  );
}

export default Inquiry;
