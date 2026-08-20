import { cn } from "@/lib/utils";

function Card({ children, className }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.05]",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;