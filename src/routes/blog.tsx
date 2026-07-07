import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { posts } from "@/lib/content";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights & Blog — EquiRise Development Consulting Limited" },
      { name: "description", content: "Ideas, essays, and field notes on leadership, culture, safeguarding, and social impact from EquiRise Development Consulting Limited." },
      { name: "author", content: "EquiRise Development Consulting Limited" },
      { property: "og:title", content: "Insights — EquiRise Development Consulting Limited" },
      { property: "og:description", content: "Field notes on leadership, culture, and social impact." },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <>
      <section className="pt-20 md:pt-28 pb-14 bg-stone/40">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">Insights</p>
          <h1 className="mt-4 display-xl">Field notes from the work.</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Ideas and essays we've earned from working alongside leaders, teams, and communities.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.slug} className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:shadow-[var(--shadow-warm)] transition">
              <div className="aspect-[16/10] bg-gradient-to-br from-amber via-green to-green-dark relative">
                <span className="absolute top-4 left-4 rounded-full bg-ivory/95 px-3 py-1 text-xs font-semibold text-green-dark">
                  {p.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {new Date(p.date).toLocaleDateString("en", { day: "numeric", month: "long", year: "numeric" })} · {p.read}
                </p>
                <h2 className="mt-3 font-display text-xl font-semibold leading-snug group-hover:text-green transition-colors">
                  {p.title}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-green">
                  Read essay <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
