import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Sparkles, Users, Handshake, Award, Leaf, Minus, Plus } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import aboutImg from "@/assets/about.jpg";
import communityImg from "@/assets/community.jpg";
import { ConsultationForm } from "@/components/ConsultationForm";
import { faqs } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — EquiRise Development Consulting Limited" },
      { name: "description", content: "EquiRise Consulting is a leadership, organizational development and social impact consulting firm helping organizations strengthen leadership, improve institutional performance, and create sustainable impact across Africa." },
      { property: "og:title", content: "About — EquiRise Development Consulting Limited" },
      { property: "og:description", content: "Building Stronger Organizations. Empowering People. Creating Lasting Impact." },
    ],
  }),
  component: About,
});

const values = [
  { icon: ShieldCheck, t: "Integrity", d: "We conduct our work with honesty, transparency, professionalism, and accountability. Trust is the foundation of every successful partnership." },
  { icon: Award, t: "Excellence", d: "We pursue the highest standards of quality in everything we do, continually seeking innovative approaches that deliver exceptional value to our clients." },
  { icon: Handshake, t: "Collaboration", d: "We believe the best solutions are created through partnership. We listen carefully, work closely with our clients, and value diverse perspectives." },
  { icon: Users, t: "Inclusion", d: "We promote equality, diversity, and meaningful participation, recognizing that organizations perform better when everyone has the opportunity to contribute and lead." },
  { icon: Sparkles, t: "Innovation", d: "We embrace creativity, continuous learning, and forward-thinking solutions that help organizations respond to emerging challenges and opportunities." },
  { icon: Leaf, t: "Sustainability", d: "We design solutions that strengthen organizations today while building the capacity and resilience needed for tomorrow." },
];

const whyChoose = [
  {
    t: "Tailored Solutions",
    d: "Every solution is customised to your organisation's goals, operating context, and long-term objectives to deliver measurable results.",
  },
  {
    t: "Multidisciplinary Expertise",
    d: "Our experienced consultants combine diverse technical expertise with practical implementation experience to deliver high-quality, evidence-informed advisory and training.",
  },
  {
    t: "Practical & Results-Focused",
    d: "We apply participatory, evidence-based approaches that strengthen organisational performance, improve leadership, and create measurable, lasting impact.",
  },
  {
    t: "Sustainable Partnerships",
    d: "We build trusted, long-term relationships, working alongside clients to strengthen systems and catalyse continuous organisational growth.",
  },
];

function About() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <>
      <section className="pt-20 md:pt-28 pb-16 bg-stone/40">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow">About EquiRise</p>
            <h1 className="mt-4 display-xl">Building Stronger Organizations. Empowering People. Creating Lasting Impact.</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              EquiRise Consulting is a leadership, organizational development, and social impact consulting firm dedicated to helping organizations strengthen leadership, improve institutional performance, and create sustainable impact across Africa.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-warm)]">
              <img src={aboutImg} alt="EquiRise consultant" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-4 display-lg">A strategic partner for organizations seeking to lead with purpose.</h2>
            <a href="/equirise company profile.pdf" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 text-sm font-medium">
              View company profile
            </a>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>We work with governments, development partners, corporate organizations, financial institutions, educational institutions, NGOs, and community-based organizations to address complex organizational and development challenges through practical, evidence-based solutions.</p>
            <p>Our expertise spans leadership development, governance and institutional strengthening, gender equality and social inclusion, organizational transformation, stakeholder engagement, and community development. We combine strategic thinking with practical implementation to help clients build organizations that are resilient, inclusive, and future-ready.</p>
            <p>At EquiRise, we believe that lasting change begins with people. Strong leaders build strong institutions, and strong institutions create stronger communities.</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-stone/40">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-card border border-border p-10">
            <p className="eyebrow">Our vision</p>
            <p className="mt-5 font-display text-2xl md:text-3xl leading-snug">
              To become Africa's trusted partner in inclusive leadership, institutional excellence, and sustainable development.
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              We envision an Africa where organizations are led with integrity, institutions operate effectively, and communities benefit from inclusive and sustainable growth. We aspire to be the consulting firm organizations turn to when they seek innovative ideas, practical solutions, and long-term partnerships that create measurable impact.
            </p>
          </div>
          <div className="rounded-3xl bg-green-dark text-ivory p-10">
            <p className="eyebrow-light">Our mission</p>
            <p className="mt-5 font-display text-2xl md:text-3xl leading-snug text-ivory">
              To strengthen organizations and communities through leadership development, institutional strengthening, gender-responsive solutions, and social impact consulting that delivers measurable and lasting results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-4 display-lg">EquiRise Consulting began as a response to a simple but powerful idea</h2>
          <div className="mt-6 text-lg text-muted-foreground leading-relaxed w-full">
            <p>EquiRise Consulting began as a response to a simple but powerful idea: African organizations can achieve deeper impact when leadership, governance, and institutional systems work together.</p>
            <p className="mt-4">We started by supporting public institutions, non-profits, and private enterprises to improve decision-making, strengthen internal systems, and make development more inclusive. From those early partnerships, our work grew to include leadership development, gender-responsive programming, procurement reform, and climate resilience.</p>
            <p className="mt-4">Today, EquiRise is guided by the belief that progress should be equitable. Our name reflects that belief: we help organizations rise together by creating practical solutions that centre people, strengthen institutions, and deliver sustainable outcomes.</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-stone/40">
        <div className="container-x">
          <h2 className="text-center display-lg">Our Core Values</h2>
          <p className="mt-4 text-muted-foreground text-center max-w-3xl mx-auto">Our values define who we are, how we work, and the standards we uphold in every engagement.</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div>
              <Accordion type="single" collapsible>
                { [0,2,4].map((i) => {
                  const v = values[i];
                  const Icon = v.icon;
                  const num = String(i+1).padStart(2,'0');
                  return (
                    <AccordionItem key={v.t} value={v.t} className="rounded-lg border border-border bg-card mb-4">
                      <AccordionTrigger className="px-6">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-muted-foreground">{num}.</span>
                            <span className="font-medium">{v.t}</span>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6">
                        <p className="text-sm text-muted-foreground">{v.d}</p>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>

            <div>
              <Accordion type="single" collapsible>
                { [1,3,5].map((i) => {
                  const v = values[i];
                  const Icon = v.icon;
                  const num = String(i+1).padStart(2,'0');
                  return (
                    <AccordionItem key={v.t} value={v.t} className="rounded-lg border border-border bg-card mb-4">
                      <AccordionTrigger className="px-6">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-muted-foreground">{num}.</span>
                            <span className="font-medium">{v.t}</span>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6">
                        <p className="text-sm text-muted-foreground">{v.d}</p>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-warm)]">
              <img src={communityImg} alt="Team meeting" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="eyebrow">// Why choose us</p>
            <h2 className="mt-4 display-xl">Why Clients Choose EquiRise</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {whyChoose.map((f) => (
                <div key={f.t} className="rounded-2xl p-6 bg-card border border-border">
                  <h3 className="font-semibold">{f.t}</h3>
                  <p className="mt-2 text-muted-foreground text-sm">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div>
            <p className="eyebrow">Meet the consultants behind</p>
            <h2 className="mt-2 display-lg">EquiRise</h2>
          </div>
        </div>

        <div className="container-x mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 items-start">
          <div>
            <div className="overflow-hidden rounded-2xl">
              <Link to="/team/mary-gloria-awinja">
                <img src="/team/gloria.png" alt="Mary Gloria Awinja" className="w-full h-[360px] object-cover rounded-2xl shadow-sm" />
              </Link>
            </div>
            <h3 className="mt-6 text-2xl font-semibold"><Link to="/team/mary-gloria-awinja">Mary Gloria Awinja, MCIPS</Link></h3>
            <p className="mt-2 text-sm text-muted-foreground">Founder & Principal Consultant | EquiRise Consulting</p>
          </div>

          <div>
            <div className="overflow-hidden rounded-2xl">
              <Link to="/team/dr-mary-keah-otieno">
                <img src="/team/mary.png" alt="Dr. Mary Keah Otieno" className="w-full h-[360px] object-cover rounded-2xl shadow-sm" />
              </Link>
            </div>
            <h3 className="mt-6 text-2xl font-semibold"><Link to="/team/dr-mary-keah-otieno">Dr. Mary Keah Otieno</Link></h3>
            <p className="mt-2 text-sm text-muted-foreground">Medical Doctor & Holistic Weight Management Specialist</p>
          </div>

          <div>
            <div className="overflow-hidden rounded-2xl">
              <Link to="/team/dr-betty-ogange">
                <img src="/team/betty.png" alt="Dr. Betty Ogange" className="w-full h-[360px] object-cover rounded-2xl shadow-sm" />
              </Link>
            </div>
            <h3 className="mt-6 text-2xl font-semibold"><Link to="/team/dr-betty-ogange">Dr. Betty Ogange</Link></h3>
            <p className="mt-2 text-sm text-muted-foreground">Educational & Capacity Development Consultant</p>
          </div>

          <div>
            <div className="overflow-hidden rounded-2xl">
              <Link to="/team/member-4">
                <img src="/team/role1.png" alt="Dr. Samson Ndonye" className="w-full h-[360px] object-cover rounded-2xl shadow-sm" />
              </Link>
            </div>
            <h3 className="mt-6 text-2xl font-semibold"><Link to="/team/member-4">Dr. Samson Ndonye</Link></h3>
            <p className="mt-2 text-sm text-muted-foreground">Governance, Organizational Development & Capacity Building Consultant</p>
          </div>

          <div>
            <div className="overflow-hidden rounded-2xl">
              <Link to="/team/member-5">
                <img src="/team/role2.png" alt="Dr. Margaret Kagwe Njuguna" className="w-full h-[360px] object-cover rounded-2xl shadow-sm" />
              </Link>
            </div>
            <h3 className="mt-6 text-2xl font-semibold"><Link to="/team/member-5">Dr. Margaret Kagwe Njuguna</Link></h3>
            <p className="mt-2 text-sm text-muted-foreground">Mental Health & Psychosocial Wellbeing Consultant</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-green-dark text-ivory">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow-light">Work with us</p>
            <h2 className="mt-4 display-lg text-ivory">Have a challenge worth walking through together?</h2>
          </div>
          <div className="lg:col-span-5 lg:justify-self-end">
            <button
              type="button"
              onClick={() => setConsultationOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-green px-7 py-4 font-semibold"
            >
              Start a conversation <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Frequently asked</p>
            <h2 className="mt-4 display-lg">Questions we hear often.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Still curious? <Link to="/contact" className="text-green font-semibold hover:underline">Send us a note</Link> and we’ll reply within one working day.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="divide-y divide-border border-y border-border">
              {faqs.map((faq, index) => (
                <div key={faq.q}>
                  <button
                    type="button"
                    onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-lg font-semibold text-foreground">{faq.q}</span>
                    {faqOpen === index ? <Minus className="h-5 w-5 text-green shrink-0" /> : <Plus className="h-5 w-5 text-green shrink-0" />}
                  </button>
                  {faqOpen === index && (
                    <div className="pb-6 -mt-2 text-muted-foreground leading-relaxed max-w-2xl">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-hidden className="relative h-64 overflow-hidden">
        <img src={communityImg} alt="" className="h-full w-full object-cover" loading="lazy" />
      </section>
      <ConsultationForm open={consultationOpen} onOpenChange={setConsultationOpen} />
    </>
  );
}
