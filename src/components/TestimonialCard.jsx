function TestimonialCard({ quote, author }) {
  return (
    <article className="glass-card rounded-[2rem] border border-slate-200/80 p-7 shadow-soft">
      <p className="text-lg leading-8 text-slate-700">“{quote}”</p>
      <p className="mt-6 text-sm font-semibold text-slate-900">{author}</p>
    </article>
  );
}

export default TestimonialCard;
