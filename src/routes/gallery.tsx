import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

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

const iwd2025Images = [2, 3, 4, 5, 6, 7].map((index) => ({
  src: `/PNG/${index}.jpeg`,
  cap: "IWD 2025",
  tag: "iwd2025",
}));

const iwd2026Images = [
  { src: "/iwd2026/1.jpeg", cap: "IWD 2026", tag: "iwd2026" },
  { src: "/iwd2026/1000991140.jpg", cap: "IWD 2026", tag: "iwd2026" },
  { src: "/iwd2026/1000991141.jpg", cap: "IWD 2026", tag: "iwd2026" },
  { src: "/iwd2026/1000991143.jpg", cap: "IWD 2026", tag: "iwd2026" },
  { src: "/iwd2026/1000991144.jpg", cap: "IWD 2026", tag: "iwd2026" },
  { src: "/iwd2026/3.jpeg", cap: "IWD 2026", tag: "iwd2026" },
  { src: "/iwd2026/4.jpeg", cap: "IWD 2026", tag: "iwd2026" },
  { src: "/iwd2026/5.jpeg", cap: "IWD 2026", tag: "iwd2026" },
  { src: "/iwd2026/6.jpeg", cap: "IWD 2026", tag: "iwd2026" },
];

const galleryImages = [
  ...iwd2025Images,
  ...iwd2026Images,
  { src: "/global/1.jpeg", cap: "Global NGO Summit 2026", tag: "globalngo2026" },
  { src: "/global/2.jpeg", cap: "Global NGO Summit 2026", tag: "globalngo2026" },
  { src: "/global/3.jpeg", cap: "Global NGO Summit 2026", tag: "globalngo2026" },
  { src: "/global/4.jpeg", cap: "Global NGO Summit 2026", tag: "globalngo2026" },
  { src: "/un/1.jpeg", cap: "UN Women", tag: "unwomen" },
  { src: "/un/2.jpeg", cap: "UN Women", tag: "unwomen" },
  { src: "/un/3.jpeg", cap: "UN Women", tag: "unwomen" },
  { src: "/un/4.jpeg", cap: "UN Women", tag: "unwomen" },
  { src: "/un/5.jpeg", cap: "UN Women", tag: "unwomen" },
];

const tabs = [
  { id: "all", label: "All" },
  { id: "iwd2025", label: "IWD 2025" },
  { id: "iwd2026", label: "IWD 2026" },
  { id: "globalngo2026", label: "Global NGO Summit 2026" },
  { id: "unwomen", label: "UN Women" },
];

function Gallery() {
  const [activeTag, setActiveTag] = useState("all");
  const activeImages = activeTag === "all" ? galleryImages : galleryImages.filter((image) => image.tag === activeTag);

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
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
            <div />
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTag(tab.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeTag === tab.id ? "bg-ink text-ivory" : "bg-muted text-muted-foreground hover:bg-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
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
