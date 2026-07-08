import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { serviceAreas } from "@/lib/content";

type NavItem = { to: string; label: string; mega?: boolean };
const nav: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Our Services", mega: true },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About Us" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-[var(--shadow-soft)]" : "bg-background/80 backdrop-blur-sm"
      }`}
      role="banner"
    >
      <div className="container-x flex items-center justify-between h-18 py-3">
        <Link to="/" className="shrink-0" aria-label="EquiRise home">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <div
              key={item.to}
              className="relative"
              onMouseEnter={() => item.mega && setMegaOpen(true)}
              onMouseLeave={() => item.mega && setMegaOpen(false)}
            >
              <Link
                to={item.to}
                className="px-3.5 py-2 text-[0.9rem] font-medium text-foreground/80 hover:text-green transition-colors inline-flex items-center gap-1"
                activeProps={{ className: "px-3.5 py-2 text-[0.9rem] font-medium text-green inline-flex items-center gap-1" }}
              >
                {item.label}
                {item.mega && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {item.mega && megaOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[min(90vw,780px)]">
                  <div className="bg-card border border-border rounded-2xl shadow-[var(--shadow-warm)] p-6 grid grid-cols-2 gap-1">
                    {serviceAreas.map((s) => (
                      <a
                        key={s.slug}
                        href={`/services#${s.slug}`}
                        className="group flex gap-3 rounded-xl p-3 hover:bg-stone transition-colors"
                      >
                        <span className="mt-1 h-8 w-8 shrink-0 rounded-lg bg-green/10 text-green grid place-items-center text-sm font-semibold">
                          {s.number}
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-foreground group-hover:text-green transition-colors">
                            {s.title}
                          </span>
                          <span className="mt-0.5 block text-xs text-muted-foreground line-clamp-2">
                            {s.tagline}
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:brightness-105 transition"
          >
            Contact EquiRise
          </Link>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-x py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-base font-medium text-foreground/90 border-b border-border/60 last:border-none"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
