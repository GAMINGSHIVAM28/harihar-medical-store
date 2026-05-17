import { motion } from 'framer-motion';

function ServiceCard({ icon: Icon, title, description, accent }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="glass-card group min-h-[280px] overflow-hidden rounded-[2rem] border border-slate-200/80 p-6 sm:p-8 transition duration-300 hover:-translate-y-1 hover:shadow-hover"
    >
      <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-[1.85rem] bg-gradient-to-br ${accent} text-white shadow-glow transition-transform duration-300 group-hover:scale-105`}>
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold text-slate-900 transition group-hover:text-primary-700 sm:text-2xl">{title}</h3>
      <p className="mt-4 text-slate-600 leading-8">{description}</p>
    </motion.article>
  );
}

export default ServiceCard;
