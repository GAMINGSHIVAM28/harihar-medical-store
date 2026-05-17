import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { aboutStats, missionValues } from '../data/siteData';

function About() {
  return (
    <div className="space-y-20">
      <section className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <SectionTitle
            eyebrow="About us"
            title="A trusted family pharmacy with modern care standards"
            description="A local medical store built on familiar service, responsible advice, and genuine product availability."
          />
          <p className="text-slate-600 leading-8">
            Harihar Medical Store is a neighbourhood pharmacy that blends familiar local service with professional medicine availability support. Our team helps customers find the right products, confirms stock before visits, and offers clear guidance without online checkout or digital prescription claims.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.25 }}
          className="glass-card rounded-[2.5rem] border border-slate-200/80 p-8 shadow-soft"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[2rem] bg-primary-600/10 p-6">
              <p className="text-sm uppercase tracking-[0.30em] text-primary-700">Our story</p>
              <p className="mt-4 text-slate-700 leading-7">
                Family-led service with an attentive pharmacist team and a warm local experience.
              </p>
            </div>
            <div className="rounded-[2rem] bg-slate-900 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.30em] text-slate-300">Our promise</p>
              <p className="mt-4 text-slate-100 leading-7">
                Clear availability updates, safe support, and a friendly walk-in environment.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {aboutStats.map((item) => (
          <motion.article
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true, amount: 0.3 }}
            className="glass-card rounded-[2rem] border border-slate-200/80 p-7 text-center shadow-soft"
          >
            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-primary-50 text-primary-700">
              <item.icon size={28} />
            </div>
            <p className="text-3xl font-semibold text-slate-900">{item.value}</p>
            <p className="mt-3 text-slate-600">{item.label}</p>
          </motion.article>
        ))}
      </section>

      <section className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <SectionTitle eyebrow="Our values" title="What makes our pharmacy feel premium" />
          <div className="space-y-6">
            {missionValues.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45 }}
                viewport={{ once: true, amount: 0.25 }}
                className="glass-card rounded-[2rem] border border-slate-200/80 p-7 shadow-soft"
              >
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-slate-600 leading-7">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.25 }}
          className="glass-card rounded-[2.5rem] border border-slate-200/80 p-8 shadow-soft"
        >
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-200">Meet our pharmacist</p>
            <p className="mt-5 text-2xl font-semibold">Guidance you can trust</p>
            <p className="mt-4 leading-8 text-slate-300">
              Our licensed pharmacist is available to answer questions, verify prescriptions, and advise on safe product use.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default About;
