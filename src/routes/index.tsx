import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  Users,
  HeartHandshake,
  ShieldCheck,
  Building2,
  Rocket,
  Compass,
  CheckCircle2,
  Quote,
  CalendarDays,
  MapPin,
  ChevronRight,
  Minus,
  Plus,
} from "lucide-react";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import heroImg from "@/assets/hero.jpg";
import impactImg from "@/assets/impact.jpg";
import communityImg from "@/assets/community.jpg";
import { serviceAreas, testimonials, events, faqs } from "@/lib/content";
import { ConsultationForm } from "@/components/ConsultationForm";
import { BookTrainingForm } from "@/components/BookTrainingForm";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EquiRise Development Consulting Limited — People. Culture. Social Impact." },
      { name: "description", content: "EquiRise Development Consulting Limited empowers people, strengthens organizations, and transforms communities across Africa through consulting in leadership, culture, wellbeing, GESI, governance, and enterprise development." },
      { name: "author", content: "EquiRise Development Consulting Limited" },
    ],
  }),
  component: Home,
});

const serviceIcons = [Compass, HeartHandshake, ShieldCheck, Building2, Users, Rocket];

const serviceImages: Record<string, string> = {
  "leadership-organizational-development": "/1.jpg",
  "governance-institutional-strengthening": "/2.jpg",
  "gender-equality-social-inclusion": "/g.jpg",
  "social-impact-community-climate": "/4.jpeg",
};

function Home() {
  return (
    <>
      <Hero />
      
      <Partners />
      <Services />
      <Impact />
      <WhyUs />
      <HowWeWork />
      <EventsSection />
      <Testimonials />
      <CTA />
      <TeamSection />
      <FAQ />
    </>
  );
}

function Hero() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [trainingOpen, setTrainingOpen] = useState(false);

  return (
    <>
      <section className="relative isolate overflow-hidden min-h-screen flex flex-col justify-center">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" className="h-full w-full object-cover" width={1600} height={1200} />
          <div className="absolute inset-0 gradient-hero-overlay" />
        </div>
        <div className="container-x py-12 md:py-16 max-w-4xl mr-auto md:pl-[35px]">
          <p className="text-[0.65rem] md:text-xs font-semibold uppercase tracking-[0.22em] text-orange-500">
            Leadership|Organizational development|Governance |Gender Equality|Social Impact
          </p>
          <h1 className="mt-6 display-lg text-ivory">
            Building Inclusive Leadership. Strengthening Institutions.
            <span className="text-orange-500">Creating Lasting Impact.</span>
          </h1>
          <p className="mt-6 text-xs md:text-sm text-ivory/85 max-w-2xl leading-relaxed">
            EquiRise Development Consulting Limited partners with organizations, governments, development agencies, and communities to strengthen leadership, build institutional capacity, and deliver sustainable social impact.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <button
              onClick={() => setConsultationOpen(true)}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-warm)] hover:brightness-110 transition cursor-pointer"
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => setTrainingOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-ivory/40 bg-ivory/10 backdrop-blur px-6 py-3.5 text-sm font-semibold text-ivory hover:bg-ivory/20 transition cursor-pointer"
            >
              Book a Training
            </button>
          </div>
        </div>
      </section>

      <ConsultationForm open={consultationOpen} onOpenChange={setConsultationOpen} />
      <BookTrainingForm open={trainingOpen} onOpenChange={setTrainingOpen} />
    </>
  );
}


function Partners() {
  const topRowLogos = [
    "/partner/brand-logo-1.png",
    "/partner/brand-logo-2.png",
    "/partner/brand-logo-3.png",
    "/partner/brand-logo-4.png",
    "/partner/brand-logo-5.png",
    "/partner/Bidii Logo.png",
  ];

  const secondRowLogos = [
    "/partner/g1.png",
    "/partner/g2.png",
  ];

  return (
    <section className="pb-8 pt-12 bg-background">
      <div className="container-x">
        <p className="text-center text-xs uppercase tracking-[0.22em] font-semibold text-muted-foreground mb-8">
          Our Trusted partners & clients
        </p>
      </div>

      <div className="container-x grid gap-2">
        <div className="md:hidden overflow-hidden">
          <div
            className="flex flex-nowrap"
            style={{ animation: "marquee 13s linear infinite" }}
          >
            {[...topRowLogos, ...topRowLogos].map((logo, i) => (
              <div key={i} className="w-1/4 flex-shrink-0 flex items-center justify-center">
                <div className="h-20 flex items-center justify-center rounded-2xl bg-card px-3 py-2">
                  <img
                    src={logo}
                    alt="Partner logo"
                    className="h-full w-auto max-w-[100px] object-contain opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-0 grid grid-cols-2 gap-0 justify-items-center">
            {secondRowLogos.map((logo, i) => (
              <div key={i} className="h-32 flex items-center justify-center">
                <img
                  src={logo}
                  alt="Partner logo"
                  className="h-full w-auto max-w-[140px] object-contain opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-6 items-center justify-items-center">
          {topRowLogos.map((logo, i) => (
            <div key={i} className="h-16 sm:h-20 flex items-center justify-center">
              <img
                src={logo}
                alt="Partner logo"
                className="h-full w-auto max-w-[160px] object-contain opacity-100"
              />
            </div>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-2 gap-1 justify-items-center">
          {secondRowLogos.map((logo, i) => (
            <div key={i} className="h-36 sm:h-40 flex items-center justify-center">
              <img
                src={logo}
                alt="Partner logo"
                className="h-full w-auto max-w-[300px] object-contain opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="pt-6 md:pt-8 pb-20 md:pb-24 bg-background">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 className="display-lg max-w-3xl">What we do</h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed font-semibold max-w-3xl">
              We deliver integrated consulting and capacity-building solutions that strengthen organizations, empower communities, and create measurable impact.
            </p>
          </div>
          <div className="lg:col-span-5">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              We strengthen institutions, empower communities, and create lasting impact through practical consulting, capacity building, and development solutions.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {serviceAreas.map((s) => (
            <a
              key={s.slug}
              href={`/services#${s.slug}`}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1"
            >
              <div className="h-44 overflow-hidden bg-slate-100">
                <img
                  src={serviceImages[s.slug] ?? "/PNG/5.jpeg"}
                  alt={s.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-green">{s.number}</p>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.tagline}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  const commitments = [
    {
      title: "Building Strong Leaders",
      description: "Supporting leaders who inspire innovation, accountability, collaboration, and ethical decision-making.",
    },
    {
      title: "Strengthening Institutions",
      description: "Helping organizations improve governance, systems, processes, and organizational effectiveness.",
    },
    {
      title: "Advancing Gender Equality",
      description: "Promoting inclusive leadership, equal opportunities, and workplaces where everyone can contribute and thrive.",
    },
    {
      title: "Supporting Organizational Transformation",
      description: "Helping organizations adapt, innovate, and successfully navigate change.",
    },
    {
      title: "Empowering Communities",
      description: "Designing programmes that strengthen livelihoods, promote participation, and improve community resilience.",
    },
    {
      title: "Promoting Sustainable Development",
      description: "Supporting organizations in creating economic, social, and environmental value that benefits present and future generations.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-stone/50">
      {/* Row 1: Image and text */}
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start mb-16">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[3/4] lg:aspect-[4/3] overflow-hidden rounded-3xl shadow-[var(--shadow-warm)]">
              <img src={communityImg} alt="Community enterprise cooperative" className="h-full w-full object-cover" loading="lazy" width={1408} height={1008} />
            </div>
            <div className="absolute -bottom-8 -right-4 lg:-right-8 w-56 rounded-2xl bg-card border border-border p-5 shadow-[var(--shadow-soft)]">
              <p className="font-display text-3xl font-bold text-green">94%</p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                of partner organizations report measurable culture change within 12 months.
              </p>
            </div>
          </div>
          
          {/* Text content */}
          <div>
            <p className="eyebrow">Our Impact</p>
            <h2 className="mt-4 display-lg">Creating Stronger Organizations. Empowering Communities.</h2>

            <div className="mt-8 space-y-4 text-muted-foreground">
              <p className="text-base leading-relaxed">
                We help organizations strengthen leadership, improve governance, build institutional capacity, and create inclusive workplaces. We also partner with communities to advance health, gender equality, economic empowerment, and sustainable livelihoods.
              </p>
              <p className="text-base leading-relaxed">
                Our impact is reflected in stronger institutions, empowered people, and more resilient communities.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2: Commitments in two columns */}
        <div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-10">How We Create Impact</h3>
          <div className="grid gap-10 md:grid-cols-2">
            {commitments.map((item) => (
              <div key={item.title} className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-green shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-base">{item.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    {
      t: "We Listen Before We Advise",
      d: "Every organization is unique. We take time to understand your goals, challenges, and context before developing solutions.",
    },
    {
      t: "We Deliver Practical Solutions",
      d: "Our recommendations are realistic, actionable, and designed for implementation—not reports that sit on shelves.",
    },
    {
      t: "We Build Capacity",
      d: "Our work equips your people with the skills, systems, and confidence needed to sustain improvements long after our engagement.",
    },
    {
      t: "Cross-Sector Expertise",
      d: "Our experience across government, development, corporate, financial, education, and community sectors enables us to provide integrated solutions.",
    },
    {
      t: "We Value Partnerships",
      d: "We see every client relationship as a partnership built on trust, respect, transparency, and shared success.",
    },
    {
      t: "We Focus on Sustainable Impact",
      d: "Everything we do is designed to strengthen organizations, empower communities, and create lasting social and economic impact.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="mt-4 display-lg">Why choose EquiRise</h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div key={it.t} className="relative pt-8">
              <span className="absolute top-0 left-0 font-display text-sm font-semibold text-green">0{i + 1}</span>
              <div className="h-px w-10 bg-green mb-6" />
              <h3 className="text-base font-semibold">{it.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowWeWork() {
  const steps = [
    { n: "01", t: "Listen", d: "We start with a discovery conversation — context, constraints, and the change you're trying to make." },
    { n: "02", t: "Diagnose", d: "Assessments, interviews, and data that tell you the truth of where you are — kindly and clearly." },
    { n: "03", t: "Design", d: "The lightest intervention that will move the needle. No bloated decks, no vanity workshops." },
    { n: "04", t: "Deliver", d: "Facilitated together with your team so capability lives with you when we leave." },
    { n: "05", t: "Sustain", d: "Coaching, review, and light-touch accompaniment so change compounds." },
  ];
  return (
    <section className="py-24 md:py-32 bg-green-dark text-ivory">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow-light">How we work</p>
            <h2 className="mt-4 display-lg text-ivory">Partnering with clients every step of the way</h2>
          </div>
          <ol className="lg:col-span-8 grid gap-4">
            {steps.map((s) => (
              <li key={s.n} className="grid grid-cols-[auto_1fr] gap-6 rounded-2xl bg-ivory/5 border border-ivory/10 p-6 md:p-7 hover:bg-ivory/10 transition-colors">
                <span className="font-display text-3xl font-bold text-amber">{s.n}</span>
                <div>
                  <h3 className="text-xl font-semibold text-ivory">{s.t}</h3>
                  <p className="mt-2 text-sm md:text-base text-ivory/75 leading-relaxed max-w-2xl">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function EventsSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Upcoming events</p>
            <h2 className="mt-4 display-lg">Learn with peers who lead.</h2>
          </div>
          <Link to="/events" className="inline-flex items-center gap-1.5 text-sm font-semibold text-green">
            View all events <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12">
          {/* Mobile: carousel */}
          <div className="block md:hidden relative">
            <Carousel
              className="w-full"
              opts={{
                align: "start",
                loop: false,
                containScroll: "trimSnaps",
              }}
              plugins={[
                Autoplay({
                  delay: 6000,
                }),
              ]}
            >
              <CarouselContent className="space-x-6">
                {events.map((e, idx) => {
                  const d = new Date(e.date);
                  const statusLabel = d > new Date() ? "Upcoming" : "Completed";
                  const dateText = e.endDate
                    ? `${d.toLocaleDateString("en", { day: "numeric", month: "long" })} – ${new Date(e.endDate).toLocaleDateString("en", { day: "numeric", month: "long", year: "numeric" })}`
                    : d.toLocaleDateString("en", { day: "numeric", month: "long", year: "numeric" });

                  return (
                    <CarouselItem key={e.title} className="w-[85%] sm:w-[60%]">
                      <article className="rounded-2xl border border-border bg-card overflow-hidden hover:shadow-[var(--shadow-warm)] transition-all flex flex-col h-full">
                        <div className="aspect-[16/9] bg-gradient-to-br from-green/80 via-amber to-orange-light relative overflow-hidden">
                          {e.image ? (
                            <img src={e.image} alt={e.title} className="h-full w-full object-cover" />
                          ) : (
                            <div className="h-full w-full" />
                          )}
                          <div className="absolute top-4 left-4 rounded-lg bg-card px-3 py-2 text-center shadow-[var(--shadow-soft)]">
                            <p className="font-display text-xl font-bold leading-none text-green">{d.getDate()}</p>
                            <p className="text-[0.65rem] uppercase tracking-widest text-muted-foreground mt-1">
                              {d.toLocaleString("en", { month: "short" })}
                            </p>
                          </div>
                          <span className="absolute top-4 right-4 rounded-full bg-ivory/95 px-3 py-1 text-xs font-semibold text-green-dark">
                            {statusLabel}
                          </span>
                        </div>
                        <div className="flex flex-col flex-1 p-6 md:p-8 space-y-4">
                          <div>
                            <h2 className="font-display text-lg md:text-xl font-semibold">{e.title}</h2>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{e.excerpt}</p>
                          </div>
                          <div className="space-y-3">
                            <div className="flex flex-col gap-2 text-xs text-muted-foreground">
                              <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3 w-3" /> {dateText}</span>
                              <span className="inline-flex items-center gap-1.5"><MapPin className="h-3 w-3" /> {e.location}</span>
                            </div>
                            <div className="flex gap-2">
                              <span className="flex-1 inline-flex justify-center items-center gap-1.5 rounded-full bg-gray-300 px-4 py-2 text-xs font-semibold text-gray-500 opacity-60">
                                Register
                              </span>
                              <Link to={`/events/${idx.toString()}`} className="flex-1 inline-flex justify-center items-center gap-1.5 rounded-full border border-primary bg-transparent px-4 py-2 text-xs font-semibold text-primary hover:bg-primary/5">
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </article>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="flex md:hidden" />
              <CarouselNext className="flex md:hidden" />
            </Carousel>
          </div>

          {/* Desktop: grid */}
          <div className="hidden md:block mt-8">
            <div className="grid gap-6 md:grid-cols-3">
              {events.map((e, idx) => {
                const d = new Date(e.date);
                const statusLabel = d > new Date() ? "Upcoming" : "Completed";
                const dateText = e.endDate
                  ? `${d.toLocaleDateString("en", { day: "numeric", month: "long" })} – ${new Date(e.endDate).toLocaleDateString("en", { day: "numeric", month: "long", year: "numeric" })}`
                  : d.toLocaleDateString("en", { day: "numeric", month: "long", year: "numeric" });
                return (
                  <article key={e.title} className="rounded-2xl border border-border bg-card overflow-hidden hover:shadow-[var(--shadow-soft)] transition flex flex-col">
                    {e.image && (
                      <div className="aspect-[16/9] w-full overflow-hidden relative">
                        <img src={e.image} alt={e.title} className="h-full w-full object-cover" />
                        <div className="absolute top-3 right-3 inline-flex rounded-full bg-green px-3 py-1 text-xs font-semibold text-white">
                          {statusLabel}
                        </div>
                      </div>
                    )}
                    <div className="flex flex-col flex-1 p-6 md:p-8 space-y-4">
                      <div>
                        <h2 className="font-display text-lg md:text-xl font-semibold">{e.title}</h2>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{e.excerpt}</p>
                      </div>
                      <div className="space-y-3">
                        <div className="flex flex-col gap-2 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3 w-3" /> {dateText}</span>
                          <span className="inline-flex items-center gap-1.5"><MapPin className="h-3 w-3" /> {e.location}</span>
                        </div>
                        <div className="flex gap-2">
                          <a className="flex-1 inline-flex justify-center items-center gap-1.5 rounded-full bg-gray-300 px-4 py-2 text-xs font-semibold text-gray-500 cursor-not-allowed opacity-60">
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
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const scrollerRef = useState<HTMLDivElement | null>(null);
  const ref = (el: HTMLDivElement | null) => scrollerRef[1](el);
  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef[0];
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };
  return (
    <section className="py-24 md:py-32 bg-stone/50">
      <div className="container-x">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">In their words</p>
            <h2 className="mt-4 display-lg">The people we've walked with.</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => scrollBy(-1)}
              className="h-11 w-11 grid place-items-center rounded-full border border-border bg-card hover:bg-green hover:text-ivory hover:border-green transition-colors"
            >
              <ChevronRight className="h-4 w-4 rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => scrollBy(1)}
              className="h-11 w-11 grid place-items-center rounded-full border border-border bg-card hover:bg-green hover:text-ivory hover:border-green transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div
          ref={ref}
          className="mt-14 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-4 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[calc((100%-3rem)/3)] rounded-2xl bg-card border border-border p-8 flex flex-col"
            >
              <Quote className="h-8 w-8 text-green/50" />
              <blockquote className="mt-5 flex-1 font-display text-lg leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


function CTA() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-green shadow-[var(--shadow-warm)]">
          <div className="absolute inset-0 opacity-25">
            <img src={impactImg} alt="" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="relative grid gap-8 p-10 md:p-16 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <p className="eyebrow-light">Start the conversation</p>
              <h2 className="mt-4 display-lg text-ivory">
                Let's build the workplace, institution, or enterprise{" "}
                <span className="italic font-normal">your mission deserves.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-ivory px-6 py-4 text-sm font-semibold text-ink hover:brightness-95 transition">
                Request a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/events" className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/70 px-6 py-4 text-sm font-semibold text-ivory hover:bg-ivory/10 transition">
                Book a Training
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const team = [
    {
      name: "Mary Gloria Awinja, MCIPS",
      role: "Founder & Principal Consultant",
      image: "/team/gloria.png",
      href: "/team/mary-gloria-awinja",
    },
    {
      name: "Dr. Mary Keah Otieno",
      role: "Medical Doctor & Holistic Weight Management Specialist",
      image: "/team/mary.png",
      href: "/team/dr-mary-keah-otieno",
    },
    {
      name: "Dr. Betty Ogange",
      role: "Educational & Capacity Development Consultant",
      image: "/team/betty.png",
      href: "/team/dr-betty-ogange",
    },
    {
      name: "Dr. Samson Ndonye",
      role: "Governance, Organizational Development & Capacity Building Consultant",
      image: "/team/role1.png",
      href: "/team/member-4",
    },
    {
      name: "Dr. Margaret Kagwe Njuguna",
      role: "Mental Health & Psychosocial Wellbeing Consultant",
      image: "/team/role2.png",
      href: "/team/member-5",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-x">
        <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Meet the team</p>
            <h2 className="mt-3 display-lg">The consultants shaping EquiRise.</h2>
          </div>
          <Link to="/about#team" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-green hover:underline">
            View full team
          </Link>
        </div>

        <div className="mt-10 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth -mx-4 px-4 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {team.map((member) => (
            <Link
              key={member.name}
              to={member.href}
              className="snap-start shrink-0 w-[80%] sm:w-[45%] md:w-[calc(20%-0.75rem)] rounded-3xl border border-border bg-card overflow-hidden shadow-sm transition"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold leading-snug">{member.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{member.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">Frequently asked</p>
          <h2 className="mt-4 display-lg">Questions we hear often.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Can't find what you're looking for? <Link to="/contact" className="text-green font-semibold hover:underline">Send us a note</Link> — we usually respond within a working day.
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg font-semibold text-foreground">{f.q}</span>
                  {open === i ? <Minus className="h-5 w-5 text-green shrink-0" /> : <Plus className="h-5 w-5 text-green shrink-0" />}
                </button>
                {open === i && (
                  <div className="pb-6 -mt-2 text-muted-foreground leading-relaxed max-w-2xl">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// prevent unused imports
void ChevronRight;
