import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, ArrowRight, Facebook, Instagram } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — EquiRise Development Consulting Limited" },
      { name: "description", content: "Request a consultation, book a training, or start a conversation with EquiRise Development Consulting Limited in Nairobi, Kenya." },
      { name: "author", content: "EquiRise Development Consulting Limited" },
      { property: "og:title", content: "Contact — EquiRise Development Consulting Limited" },
      { property: "og:description", content: "Request a consultation or book a training." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="pt-20 md:pt-28 pb-16 bg-stone/40">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 display-xl">Let's start with a conversation.</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Tell us what you're working on. We typically respond within one working day.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-8">
            {[
              { Icon: MapPin, t: "Visit", d: "Freedom Heights Mall & Residence · Langata · Nairobi\nP. O box -17863 - 0100 Nairobi" },
              { Icon: Mail, t: "Email", d: "info@equirisedevelopmentconsultingltd.com\npartnerships@equirisedevelopmentconsultingltd.com" },
              { Icon: Phone, t: "Call", d: "+254 701 183 032" },
              { Icon: Clock, t: "Hours", d: "Mon–Fri · 8:30am – 5:30pm EAT" },
            ].map((c) => (
              <div key={c.t} className="flex gap-4">
                <span className="h-11 w-11 shrink-0 grid place-items-center rounded-xl bg-green/10 text-green">
                  <c.Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">{c.t}</p>
                  <p className="mt-1 font-semibold whitespace-pre-line">{c.d}</p>
                </div>
              </div>
            ))}
            <div className="mt-4 flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=61591722233889" aria-label="Facebook" className="h-9 w-9 grid place-items-center rounded-full bg-green/10 hover:bg-green transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/equiriseconsultants?igsh=NDY1cWN6MWppdG5j" aria-label="Instagram" className="h-9 w-9 grid place-items-center rounded-full bg-green/10 hover:bg-green transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.tiktok.com/@equiriseconsultants?is_from_webapp=1&sender_device=pc" aria-label="TikTok" className="h-9 w-9 grid place-items-center rounded-full bg-green/10 hover:bg-green transition-colors">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M9.5 2v8.5a4.5 4.5 0 1 0 4.5-4.5V2a6.5 6.5 0 1 1-6.5 6.5V2z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-5"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Organization" name="org" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">How can we help?</label>
                <select className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm">
                  <option>Request a consultation</option>
                  <option>Book a training</option>
                  <option>Speaking / partnership</option>
                  <option>Media / press</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Tell us more</label>
                <textarea rows={5} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm resize-none" placeholder="A few sentences about your context and what you're hoping to change." />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:brightness-110 transition">
                Send message <ArrowRight className="h-4 w-4" />
              </button>
              {sent && (
                <p className="text-sm text-green-dark font-semibold">Thanks — your message is on its way. We'll be in touch shortly.</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold mb-2">{label}{required && <span className="text-green"> *</span>}</label>
      <input id={name} name={name} type={type} required={required} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}
