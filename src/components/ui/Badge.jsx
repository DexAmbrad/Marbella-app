function Badge({ children }) {
  return (
    <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
      {children}
    </span>
  );
}

export default Badge;