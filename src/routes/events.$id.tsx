import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { CalendarDays, MapPin } from "lucide-react";
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

export const Route = createFileRoute("/events/$id")({
  component: EventDetail,
});

function EventDetail() {
  const { id } = useParams({ from: "/events/$id" });
  const eventIndex = parseInt(id);
  const event = events[eventIndex];

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Event not found</h1>
          <Link to="/events">
            <Button variant="outline">Back to Events</Button>
          </Link>
        </div>
      </div>
    );
  }

  const d = new Date(event.date);

  // escape regex helper for safe replacements
  const escapeRegExp = (str: string) => str.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&");

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
      {/* Hero Image Section */}
      {event.image && (
        <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
          <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
        </div>
      )}

      {/* Blog Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-x">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">{event.title}</h1>

            {/* Excerpt */}
            <p className="text-lg text-gray-600 leading-relaxed mb-8">{event.excerpt}</p>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-4 pb-8 border-b border-gray-200 text-sm font-semibold mb-8">
              <span className="text-gray-600">👤 admin</span>
              <span className="text-pink-500">Event</span>
              <span className="text-gray-600 flex items-center gap-1">
                📅 {d.toLocaleDateString("en", { month: "long", day: "numeric", year: "numeric" })}
              </span>
            </div>

            {/* Main Content */}
            <article className="prose prose-lg max-w-none space-y-6 text-gray-700">
              {event.fullDescription && (
                <div className="space-y-6">
                  {event.fullDescription.split("\n\n").map((paragraph, idx) => {
                    let processedParagraph = paragraph;
                    
                    // Replace partner links
                      if (event.partners) {
                        event.partners.forEach((partner) => {
                          const name = partner.name.split(" (")[0];
                          const re = new RegExp(escapeRegExp(name), "g");
                          const link = `<a href="${partner.url}" target="_blank" rel="noopener noreferrer" class="text-pink-500 hover:text-pink-600 font-semibold">${name}</a>`;
                          processedParagraph = processedParagraph.replace(re, link);
                        });
                      }

                    // Replace media links
                      if (event.mediaCoverage) {
                        event.mediaCoverage.forEach((media) => {
                          const re = new RegExp(escapeRegExp(media.name), "g");
                          const link = `<a href="${media.url}" target="_blank" rel="noopener noreferrer" class="text-pink-500 hover:text-pink-600 font-semibold">${media.name}</a>`;
                          processedParagraph = processedParagraph.replace(re, link);
                        });
                      }

                    return (
                      <p key={idx} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: processedParagraph }} />
                    );
                  })}
                </div>
              )}
            </article>

            {/* Event Highlights Section */}
            <div className="mt-16 pt-16 border-t border-gray-200">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-display text-3xl md:text-4xl font-bold">Event Highlights</h2>
              </div>

              <div className="relative">
                <div className="absolute right-0 -top-6">
                  <Link to="/gallery">
                    <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full">
                      View Full Gallery
                    </Button>
                  </Link>
                </div>
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

            {/* Back Button */}
            <div className="mt-16 pt-12 border-t border-gray-200">
              <Link to="/events">
                <Button variant="outline">← Back to All Events</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
