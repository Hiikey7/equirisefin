import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, MapPin } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { events } from "@/lib/content";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Route = createFileRoute("/events/$id")({
  loader: ({ params }) => {
    const eventIndex = Number.parseInt(params.id ?? "", 10);
    const event = Number.isInteger(eventIndex) ? events[eventIndex] : undefined;

    if (!event) {
      throw notFound();
    }

    return { event };
  },
  component: EventDetail,
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="display-lg">Event not found</h1>
      <Link to="/events" className="mt-6 inline-flex items-center gap-2 text-green font-semibold">
        <ArrowLeft className="h-4 w-4" /> Back to events
      </Link>
    </div>
  ),
});

function EventDetail() {
  const { event } = Route.useLoaderData();
  const d = new Date(event.date);
  const eventDateText = event.endDate
    ? `${d.toLocaleDateString("en", { day: "numeric", month: "long" })} – ${new Date(event.endDate).toLocaleDateString("en", { day: "numeric", month: "long", year: "numeric" })}`
    : d.toLocaleDateString("en", { month: "long", day: "numeric", year: "numeric" });
  const statusLabel = new Date(event.date) > new Date() ? "Upcoming" : "Completed";

  const escapeRegExp = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const iwd2025Images = [
    "/PNG/2.jpeg",
    "/PNG/3.jpeg",
    "/PNG/4.jpeg",
    "/PNG/5.jpeg",
    "/PNG/6.jpeg",
    "/PNG/7.jpeg",
  ];

  const iwd2026Images = [
    "/iwd2026/1.jpeg",
    "/iwd2026/1000991140.jpg",
    "/iwd2026/1000991141.jpg",
    "/iwd2026/1000991143.jpg",
    "/iwd2026/1000991144.jpg",
    "/iwd2026/3.jpeg",
    "/iwd2026/4.jpeg",
    "/iwd2026/5.jpeg",
    "/iwd2026/6.jpeg",
  ];

  const carouselImages = (() => {
    if (event.title.includes("2025")) return iwd2025Images;
    if (event.title.includes("2026")) return iwd2026Images;
    // fallback: show event image plus a few PNGs
    return [event.image || "/PNG/1.jpeg", "/PNG/2.jpeg", "/PNG/3.jpeg"];
  })();

  const renderBody = (text: string) =>
    text
      .split("\n\n")
      .filter(Boolean)
      .map((paragraph, idx) => {
        let processedParagraph = paragraph;

        if (event.partners) {
          event.partners.forEach((partner) => {
            const name = partner.name.split(" (")[0];
            const re = new RegExp(escapeRegExp(name), "g");
            const link = `<a href="${partner.url}" target="_blank" rel="noopener noreferrer" class="text-green font-semibold hover:text-green-dark">${name}</a>`;
            processedParagraph = processedParagraph.replace(re, link);
          });
        }

        if (event.mediaCoverage) {
          event.mediaCoverage.forEach((media) => {
            const re = new RegExp(escapeRegExp(media.name), "g");
            const link = `<a href="${media.url}" target="_blank" rel="noopener noreferrer" class="text-green font-semibold hover:text-green-dark">${media.name}</a>`;
            processedParagraph = processedParagraph.replace(re, link);
          });
        }

        return (
          <p key={idx} className="text-lg text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: processedParagraph }} />
        );
      });

  return (
    <>
      <section className="pt-20 md:pt-28">
        <div className="container-x">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-soft)]">
            <div className="relative min-h-[22rem] w-full sm:min-h-[24rem] md:min-h-[28rem] lg:min-h-[30rem]">
              {event.image ? (
                <img src={event.image} alt={event.title} className="absolute inset-0 h-full w-full object-cover" />
              ) : (
                <div className="absolute inset-0 h-full w-full bg-stone/60" />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

              <div className="absolute inset-0 flex items-end">
                <div className="w-full p-6 sm:p-8 md:p-12 lg:p-16">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-green px-3 py-1 text-xs font-semibold text-white">{statusLabel}</span>
                      <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold text-ivory backdrop-blur-sm">
                        {event.tag}
                      </span>
                    </div>

                    <h1 className="mt-5 text-3xl font-semibold leading-tight text-ivory sm:text-4xl md:text-5xl lg:text-6xl break-words">
                      {event.title}
                    </h1>
                    <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-ivory/90 sm:gap-4">
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 shrink-0" />
                        {eventDateText}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4 shrink-0" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <p className="eyebrow">Event description</p>
            <div className="mt-6 space-y-6">{event.fullDescription && renderBody(event.fullDescription)}</div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl bg-green-dark p-8 text-ivory">
              <p className="eyebrow-light">Quick details</p>
              <h2 className="mt-4 font-display text-2xl font-semibold text-ivory">{event.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-ivory/80">{event.excerpt}</p>
              <div className="mt-6 space-y-4 text-sm text-ivory/80">
                <div className="flex gap-3">
                  <CalendarDays className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{eventDateText}</span>
                </div>
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>

            {event.partners?.length ? (
              <div className="rounded-3xl border border-border bg-stone/40 p-8">
                <h3 className="font-display text-xl font-semibold">Partners</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {event.partners.map((partner) => (
                    <a
                      key={partner.name}
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-border bg-card px-3 py-2 text-sm font-semibold text-foreground hover:border-green/60 hover:text-green"
                    >
                      {partner.name}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-x space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Event highlights</p>
              <h2 className="mt-4 display-lg">Moments from this programme.</h2>
              <p className="mt-4 text-lg text-muted-foreground">A glimpse into the community, energy, and impact captured during the event.</p>
            </div>
            <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full border border-primary bg-transparent px-5 py-3 text-sm font-semibold text-primary hover:bg-primary/5">
              View the gallery <ArrowRight className="h-4 w-4" />
            </Link>
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
        </div>
      </section>
    </>
  );
}
