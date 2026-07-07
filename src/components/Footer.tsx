import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { serviceAreas } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-ivory">
      <div className="container-x py-16 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="[&_span]:!text-ivory">
            <Logo tone="light" />
          </div>
          <p className="mt-6 text-sm/relaxed text-ivory/70 max-w-sm">
            People. Culture. Social Impact. EquiRise partners with institutions and communities across Africa to build workplaces and systems that let people thrive.
          </p>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="h-9 w-9 grid place-items-center rounded-full bg-ivory/10 hover:bg-green transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold tracking-wider uppercase text-ivory">Services</h4>
          <ul className="mt-5 space-y-3 text-sm text-ivory/70">
            {serviceAreas.map((s) => (
              <li key={s.slug}>
                <a href={`/services#${s.slug}`} className="hover:text-amber transition-colors">
                  {s.short}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-sm font-semibold tracking-wider uppercase text-ivory">Company</h4>
          <ul className="mt-5 space-y-3 text-sm text-ivory/70">
            {[
              ["/about", "About Us"],
              ["/events", "Events"],
              ["/blog", "Insights"],
              ["/gallery", "Gallery"],
              ["/careers", "Careers"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to as string} className="hover:text-amber transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold tracking-wider uppercase text-ivory">Get in touch</h4>
          <ul className="mt-5 space-y-3 text-sm text-ivory/70">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-amber" /> Nairobi, Kenya</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-amber shrink-0" /><span className="break-all">info@equirisedevelopmentconsultingltd.com</span></li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-amber" /> +254 701 183 032</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ivory/50">
          <p>© {new Date().getFullYear()} EquiRise Development Consulting Limited. All rights reserved.</p>
          <p>People. Culture. Social Impact.</p>
        </div>
      </div>
    </footer>
  );
}
