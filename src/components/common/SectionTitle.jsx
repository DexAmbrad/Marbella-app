function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 leading-7 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;