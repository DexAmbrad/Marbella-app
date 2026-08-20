import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-xl font-black tracking-tight"
          onClick={() => setOpen(false)}
        >
          Mark<span className="text-blue-500">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition",
                  isActive
                    ? "text-blue-400"
                    : "text-slate-400 hover:text-white"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/10 p-2 text-slate-300 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-3 py-2 text-sm",
                    isActive
                      ? "bg-blue-500/10 text-blue-400"
                      : "text-slate-400"
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;