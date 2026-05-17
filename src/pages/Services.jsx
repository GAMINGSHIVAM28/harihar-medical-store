import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import { serviceItems } from '../data/siteData';

function Services() {
  return (
    <div className="space-y-20">
      <section>
        <SectionTitle
          eyebrow="Services"
          title="Professional pharmacy support for every medicine need"
          description="Clear service options for prescription checks, health essentials, and safe local collection."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {serviceItems.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="glass-card rounded-[2rem] border border-slate-200/80 p-8 shadow-soft">
          <h2 className="text-3xl font-semibold text-slate-900">How our pharmacy service works</h2>
          <p className="mt-5 text-slate-600 leading-8">
            We keep the process simple: confirm availability, send stock updates, and help you plan a safe in-store visit or local pickup.
          </p>
          <ul className="mt-8 space-y-4 text-slate-600">
            <li>• Prescription inquiry support with pharmacist review.</li>
            <li>• Genuine health products, Medicare essentials, and wellness supplements.</li>
            <li>• Emergency availability checks for urgent medicines.</li>
            <li>• Helpful local delivery and pickup guidance for your neighbourhood.</li>
          </ul>
        </div>

        <div className="rounded-[2.5rem] bg-gradient-to-br from-primary-600 to-secondary-700 p-10 text-white shadow-glow">
          <p className="text-sm uppercase tracking-[0.32em] text-primary-100">Local pharmacy confidence</p>
          <h3 className="mt-4 text-3xl font-semibold">Fast answers. No checkout. No claims.</h3>
          <p className="mt-5 text-slate-100 leading-8">
            Our focus is on medicine availability inquiry, customer trust, and clear guidance. We do not provide online medicine checkout or digital prescriptions.
          </p>
        </div>
      </section>

      <CTASection
        eyebrow="Need help now"
        title="Contact our pharmacy team for a quick stock check"
        description="Send your medicine details on WhatsApp to receive a fast availability response from our local pharmacy."
        buttonLabel="Ask on WhatsApp"
      />
    </div>
  );
}

export default Services;
