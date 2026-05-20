import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const overDark = onHome && !scrolled;
  const text = overDark ? "text-ivory" : "text-noir";
  const bg = scrolled
    ? "bg-ivory/90 backdrop-blur-md border-b border-[color:var(--border)]"
    : onHome
      ? "bg-transparent"
      : "bg-ivory border-b border-[color:var(--border)]";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bg}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className={`flex items-center gap-2 ${text}`}>
          <span className="font-display text-xl tracking-wide">Feast<span className="text-gold"> &amp; </span>Fest</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-[11px] tracking-[0.25em] uppercase font-medium transition-colors hover:text-gold ${text} [&.active]:text-gold`}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 border border-gold text-[11px] tracking-[0.25em] uppercase text-gold hover:bg-gold hover:text-noir transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        <button
          aria-label="Menu"
          className={`lg:hidden ${text}`}
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 bg-noir text-ivory ${
          open ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 py-8 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-display text-3xl text-ivory hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 inline-flex justify-center items-center px-5 py-3 border border-gold text-[11px] tracking-[0.25em] uppercase text-gold"
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}