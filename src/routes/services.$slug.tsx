import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react";
import { serviceAreas } from "@/lib/content";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = serviceAreas.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.short} — EquiRise Development Consulting Limited` },
          { name: "description", content: loaderData.service.description },
          { name: "author", content: "EquiRise Development Consulting Limited" },
          { property: "og:title", content: `${loaderData.service.title} — EquiRise Development Consulting Limited` },
          { property: "og:description", content: loaderData.service.description },
        ]
        : [{ title: "Service — EquiRise Development Consulting Limited" }, { name: "robots", content: "noindex" }],
  }),
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="display-lg">Service not found</h1>
      <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-green font-semibold">
        <ArrowLeft className="h-4 w-4" /> Back to services
      </Link>
    </div>
  ),
  errorComponent: () => <div className="container-x py-32 text-center">Something went wrong.</div>,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = serviceAreas.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="pt-20 md:pt-28 pb-16 bg-stone/40 border-b border-border">
        <div className="container-x max-w-4xl">
          <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-green">
            <ArrowLeft className="h-4 w-4" /> All services
          </Link>
          <p className="mt-8 font-display text-sm font-semibold text-green">{service.number}</p>
          <h1 className="mt-3 display-xl">{service.title}</h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">{service.tagline}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl md:text-3xl font-semibold">What we do here</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{service.description}</p>

            <h3 className="mt-14 font-display text-xl font-semibold">Signature offerings</h3>
            <ul className="mt-6 grid gap-3">
              {service.offerings.map((o: string) => (
                <li key={o} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                  <CheckCircle2 className="h-5 w-5 text-green-dark shrink-0 mt-0.5" />
                  <span className="text-foreground">{o}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-24 rounded-2xl bg-green-dark text-ivory p-8">
              <p className="eyebrow-light">Start here</p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-ivory">Ready to talk it through?</h3>
              <p className="mt-4 text-ivory/80 text-sm leading-relaxed">
                Every engagement begins with a discovery conversation. No slides, no pitch — just a working session to understand your context.
              </p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-green px-5 py-3 text-sm font-semibold">
                Request a consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-stone/40">
        <div className="container-x">
          <h2 className="font-display text-2xl md:text-3xl font-semibold">Explore other areas</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {others.map((s) => (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group rounded-2xl border border-border bg-card p-6 hover:border-green/60 transition-colors">
                <p className="font-display text-xs font-semibold text-green">{s.number}</p>
                <h3 className="mt-3 font-semibold leading-snug">{s.title}</h3>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-green">
                  Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
