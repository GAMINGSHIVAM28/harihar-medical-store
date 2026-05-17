function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow && <p className="mb-3 text-sm uppercase tracking-[0.30em] text-primary-600">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">{description}</p>}
    </div>
  );
}

export default SectionTitle;
