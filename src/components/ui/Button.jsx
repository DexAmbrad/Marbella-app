import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

function Button({
  children,
  to,
  variant = "primary",
  className,
}) {
  const styles = cn(
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all",
    variant === "primary" &&
      "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 hover:-translate-y-0.5",
    variant === "secondary" &&
      "border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10",
    className
  );

  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );
  }

  return <button className={styles}>{children}</button>;
}

export default Button;