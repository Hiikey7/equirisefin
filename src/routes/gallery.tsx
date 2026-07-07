import { createFileRoute } from "@tanstack/react-router";
import { } from "react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — EquiRise Development Consulting Limited" },
      { name: "description", content: "Moments from EquiRise Development Consulting Limited trainings, retreats, and community engagements across East Africa." },
      { name: "author", content: "EquiRise Development Consulting Limited" },
      { property: "og:title", content: "Gallery — EquiRise Development Consulting Limited" },
      { property: "og:description", content: "Moments from our work across East Africa." },
    ],
  }),
  component: Gallery,
});

// Images from public/PNG for IWD 2026 gallery
const iwdImages = [
  "/PNG/1.jpeg",
  "/PNG/2.jpeg",
  "/PNG/3.jpeg",
  "/PNG/4.jpeg",
  "/PNG/5.jpeg",
  "/PNG/6.jpeg",
  "/PNG/7.jpeg",
  "/PNG/8.jpeg",
  "/PNG/9.jpeg",
  "/PNG/10.jpeg",
  "/PNG/11.jpeg",
  "/PNG/12.jpeg",
  "/PNG/13.jpeg",
];

function Gallery() {
  const activeImages = iwdImages.map((src) => ({ src, cap: "IWD 2026" }));

  return (
    <>
      <section className="pt-20 md:pt-28 pb-14 bg-stone/40">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">Gallery</p>
          <h1 className="mt-4 display-xl">Moments from the work.</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A glimpse into the rooms, retreats, and communities where our work actually happens.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-3xl font-bold">IWD 2026 Gallery</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {activeImages.map((im, i) => (
              <figure
                key={i}
                className={`group relative overflow-hidden rounded-2xl ${i % 5 === 0 ? "lg:row-span-2 aspect-[3/4] lg:aspect-auto" : "aspect-[4/3]"}`}
              >
                <img src={im.src} alt={im.cap} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <figcaption className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 flex items-end p-5">
                  <span className="text-ivory text-sm font-semibold">{im.cap}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
