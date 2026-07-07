import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — EquiRise Development Consulting Limited" },
      { name: "description", content: "Join EquiRise Development Consulting Limited — a Kenya-based consulting firm doing rigorous, people-first work on the challenges that matter most." },
      { name: "author", content: "EquiRise Development Consulting Limited" },
      { property: "og:title", content: "Careers — EquiRise Development Consulting Limited" },
      { property: "og:description", content: "Join the EquiRise Development Consulting Limited team." },
    ],
  }),
  component: Careers,
});

const roles = [
  { title: "Senior Consultant — Leadership & Culture", location: "Nairobi", type: "Full-time" },
  { title: "GESI & Safeguarding Specialist", location: "Nairobi / Remote", type: "Full-time" },
  { title: "Programme Design Associate", location: "Nairobi", type: "Full-time" },
  { title: "Enterprise Development Associate", location: "Kisumu", type: "Full-time" },
];

function Careers() {
  return (
    <>
      <section className="pt-20 md:pt-28 pb-14 bg-stone/40">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">Careers</p>
          <h1 className="mt-4 display-xl">Do the most meaningful work of your life.</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We're a small, senior team that hires slowly and invests deeply. If you care about people, systems, and the details in between — talk to us.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x">
          <h2 className="font-display text-2xl md:text-3xl font-semibold">Open roles</h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {roles.map((r) => (
              <a key={r.title} href="mailto:careers@equirise.co.ke" className="group flex flex-col md:flex-row md:items-center md:justify-between gap-3 py-6">
                <div>
                  <h3 className="font-display text-xl font-semibold group-hover:text-green transition-colors">{r.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{r.location} · {r.type}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-green">
                  Apply <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
          <div className="mt-14 rounded-2xl bg-green-dark text-ivory p-8 md:p-10 flex flex-wrap items-center gap-6 justify-between">
            <div>
              <p className="eyebrow-light"><Sparkles className="h-3.5 w-3.5" /> Don't see your role?</p>
              <p className="mt-3 font-display text-xl md:text-2xl">Send an open application. We keep good people close.</p>
            </div>
            <a href="mailto:careers@equirise.co.ke" className="inline-flex items-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold">
              careers@equirise.co.ke <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
