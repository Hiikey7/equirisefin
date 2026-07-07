import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { events } from "@/lib/content";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Trainings — EquiRise Development Consulting Limited" },
      { name: "description", content: "Upcoming EquiRise Development Consulting Limited trainings, roundtables, and labs on leadership, culture, safeguarding, and enterprise development." },
      { name: "author", content: "EquiRise Development Consulting Limited" },
      { property: "og:title", content: "Events — EquiRise Development Consulting Limited" },
      { property: "og:description", content: "Trainings, roundtables, and labs for mission-driven leaders." },
    ],
  }),
  component: Events,
});

function Events() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const carouselImages = [
    "/PNG/1.jpeg",
    "/PNG/2.jpeg",
    "/PNG/3.jpeg",
    "/PNG/4.jpeg",
    "/PNG/5.jpeg",
    "/PNG/7.jpeg",
    "/PNG/8.jpeg",
    "/PNG/9.jpeg",
    "/PNG/10.jpeg",
    "/PNG/11.jpeg",
    "/PNG/12.jpeg",
    "/PNG/13.jpeg",
  ];

  return (
    <>
      <section className="pt-20 md:pt-28 pb-14 bg-stone/40">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">Events & Trainings</p>
          <h1 className="mt-4 display-xl">Learn with peers who lead.</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Cohort trainings, executive roundtables, and enterprise labs — designed to leave you with practical capability, not just certificates.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {events.map((e, idx) => {
              const d = new Date(e.date);
              return (
                <article key={e.title} className="rounded-2xl border border-border bg-card overflow-hidden hover:shadow-[var(--shadow-soft)] transition flex flex-col">
                  {e.image && (
                    <div className="aspect-[16/9] w-full overflow-hidden relative">
                      <img src={e.image} alt={e.title} className="h-full w-full object-cover" />
                      <div className="absolute top-3 right-3 inline-flex rounded-full bg-green px-3 py-1 text-xs font-semibold text-white">
                        Completed
                      </div>
                    </div>
                  )}
                  <div className="flex flex-col flex-1 p-6 md:p-8 space-y-4">
                    <div>
                      <h2 className="font-display text-lg md:text-xl font-semibold">{e.title}</h2>
                    </div>
                    <div className="flex-1"></div>
                    <div className="space-y-3">
                      <div className="flex flex-col gap-2 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3 w-3" /> {d.toLocaleDateString("en", { day: "numeric", month: "long", year: "numeric" })}</span>
                        <span className="inline-flex items-center gap-1.5"><MapPin className="h-3 w-3" /> {e.location}</span>
                      </div>
                      <div className="flex gap-2">
                        <a href="#" className="flex-1 inline-flex justify-center items-center gap-1.5 rounded-full bg-gray-300 px-4 py-2 text-xs font-semibold text-gray-500 cursor-not-allowed opacity-60">
                          Register
                        </a>
                        <Link to={`/events/${idx.toString()}`} className="flex-1 inline-flex justify-center items-center gap-1.5 rounded-full border border-primary bg-transparent px-4 py-2 text-xs font-semibold text-primary hover:bg-primary/5">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-stone/40">
        <div className="container-x space-y-8">
          <div className="max-w-2xl">
            <p className="eyebrow">Gallery Highlights</p>
            <h2 className="mt-4 display-lg">Moments from our community.</h2>
            <p className="mt-4 text-lg text-muted-foreground">Explore the impact and community that defines EquiRise.</p>
          </div>

          <div className="relative">
            <Carousel 
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 5000,
                }),
              ]}
            >
              <CarouselContent>
                {carouselImages.map((image, idx) => (
                  <CarouselItem key={idx} className="basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="aspect-square w-full overflow-hidden rounded-2xl">
                      <img src={image} alt={`Gallery ${idx + 1}`} className="h-full w-full object-cover" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:flex" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:flex" />
            </Carousel>
          </div>

          <div className="flex justify-center">
            <Link to="/gallery">
              <Button size="lg" variant="outline">
                View All Images <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
