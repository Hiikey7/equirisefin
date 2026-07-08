import { useState, type ChangeEvent, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { serviceAreas } from "@/lib/content";
import { ConsultationForm } from "@/components/ConsultationForm";
import heroImg from "@/assets/hero.jpg";

const serviceImages: Record<string, string> = {
  "leadership-organizational-development": "/1.jpg",
  "governance-institutional-strengthening": "/2.jpg",
  "gender-equality-social-inclusion": "/g.jpg",
  "social-impact-community-climate": "/4.jpeg",
};

const serviceCopies = {
  "leadership-organizational-development": {
    subtitle: "Developing Leaders. Building High-Performing Organizations.",
    intro: [
      "Leadership is the foundation of every successful organization. Strong leaders inspire confidence, create a shared vision, foster innovation, and guide organizations through periods of growth and change.",
      "At EquiRise Consulting, we help organizations build leadership capacity at every level. We believe leadership is not limited to senior executives—it should be cultivated throughout the organization to create a culture of accountability, collaboration, and continuous improvement.",
      "Our leadership and organizational development solutions help organizations strengthen their people, improve organizational culture, and enhance overall performance.",
    ],
    highlights: [
      {
        title: "Executive Leadership Development",
        description: "Strengthening senior leaders to guide strategy, culture, and performance across the organization.",
      },
      {
        title: "Emerging Leaders Programmes",
        description: "Equipping future leaders with practical skills, confidence, and the ability to lead change.",
      },
      {
        title: "Organizational Culture Transformation",
        description: "Aligning values, behaviors, and systems so teams can perform consistently and collaboratively.",
      },
      {
        title: "Change Management",
        description: "Supporting organizations through transitions with clear communication, ownership, and capacity building.",
      },
      {
        title: "Strategic Planning Facilitation",
        description: "Helping leadership teams define direction, priorities, and actionable plans that stick.",
      },
      {
        title: "Team Development & Engagement",
        description: "Improving collaboration, accountability, and employee experience across teams.",
      },
    ],
    outcomes:
      "Our programmes help organizations develop confident leaders, improve employee engagement, strengthen teamwork, enhance organizational culture, and build resilient institutions capable of adapting to change.",
  },
  "governance-institutional-strengthening": {
    subtitle: "Building Strong Institutions Through Effective Governance",
    intro: [
      "Strong governance is the foundation of organizational credibility, accountability, and long-term sustainability.",
      "Organizations with effective governance structures make better decisions, manage risks more effectively, comply with regulatory requirements, and build greater trust among stakeholders.",
      "EquiRise Consulting supports organizations in strengthening governance systems, improving institutional effectiveness, and enhancing operational excellence.",
      "We work closely with leadership teams, boards, and management to build systems that support transparency, accountability, and sustainable growth.",
    ],
    highlights: [
      {
        title: "Governance Advisory",
        description: "Building structures and processes that support sound decision-making and accountability.",
      },
      {
        title: "Board Development",
        description: "Strengthening board leadership, oversight, and strategic alignment for better institutional performance.",
      },
      {
        title: "Policy & Compliance Support",
        description: "Designing practical policies and risk systems that keep organizations resilient and trustworthy.",
      },
      {
        title: "Institutional Capacity Assessments",
        description: "Identifying strengths, gaps, and priority improvements across governance and operations.",
      },
      {
        title: "Process Improvement",
        description: "Streamlining workflows to improve efficiency, accountability, and service delivery.",
      },
      {
        title: "Risk & Performance Management",
        description: "Helping organizations manage risk, compliance, and performance with confidence.",
      },
    ],
    outcomes:
      "Our governance solutions help organizations strengthen decision-making, improve accountability, increase efficiency, and build institutions that are trusted, resilient, and prepared for future challenges.",
  },
  "gender-equality-social-inclusion": {
    subtitle: "Advancing Inclusive Organizations That Create Greater Impact",
    intro: [
      "Organizations perform better when everyone has the opportunity to contribute, participate, and lead.",
      "Gender equality and social inclusion are no longer optional—they are essential for organizational excellence, innovation, and sustainable development.",
      "EquiRise Consulting partners with organizations to integrate gender-responsive approaches into leadership, governance, workplace culture, policies, programmes, and service delivery.",
      "Our work promotes environments where women, young people, persons with disabilities, and marginalized communities are empowered to participate fully in organizational and community development.",
    ],
    highlights: [
      {
        title: "Gender Mainstreaming",
        description: "Embedding gender-responsive practices across strategies, projects, and organizational systems.",
      },
      {
        title: "Gender Policy Development",
        description: "Creating clear, practical frameworks that advance equality and inclusion.",
      },
      {
        title: "Women's Leadership Programmes",
        description: "Empowering women leaders to take on greater influence and decision-making roles.",
      },
      {
        title: "Diversity, Equity & Inclusion Strategies",
        description: "Building cultures where all voices are heard, valued, and supported.",
      },
      {
        title: "Safeguarding & Protection",
        description: "Designing safe, respectful environments for staff, stakeholders, and communities.",
      },
      {
        title: "Social Inclusion Capacity Building",
        description: "Strengthening organizations to better include marginalized groups in their work.",
      },
    ],
    outcomes:
      "Our work enables organizations to create inclusive workplaces, strengthen women’s leadership, improve organizational culture, comply with gender policies, and contribute to more equitable and sustainable development outcomes.",
  },
  "social-impact-community-climate": {
    subtitle: "Creating Shared Value Between Organizations and Communities",
    intro: [
      "Organizations are increasingly expected to create value beyond financial performance. They are called upon to contribute to stronger communities, environmental sustainability, and inclusive economic growth.",
      "EquiRise Consulting helps organizations design and implement programmes that strengthen relationships with communities while creating measurable social impact.",
      "We support organizations in developing sustainable partnerships, empowering women and youth, strengthening local livelihoods, and promoting climate resilience.",
    ],
    highlights: [
      {
        title: "Community Engagement Strategies",
        description: "Designing partnerships that build trust, ownership, and meaningful community outcomes.",
      },
      {
        title: "Stakeholder Engagement",
        description: "Strengthening dialogue and collaboration with communities and partners.",
      },
      {
        title: "Corporate Social Investment",
        description: "Aligning social investment with measurable, locally relevant impact.",
      },
      {
        title: "Climate Resilience Programmes",
        description: "Helping organizations adapt to climate-related risk and boost resilience.",
      },
      {
        title: "Livelihood & Enterprise Support",
        description: "Promoting sustainable income and opportunity for women, youth, and communities.",
      },
      {
        title: "Social Impact Assessments",
        description: "Measuring outcomes so programmes improve and deliver real value.",
      },
    ],
    outcomes:
      "Our programmes strengthen organizational reputation, improve stakeholder relationships, enhance community resilience, promote sustainable livelihoods, and create lasting social and environmental impact.",
  },
} as const;

type ServiceSlug = keyof typeof serviceCopies;

function ServiceImpact({
  service,
  copy,
}: {
  service: typeof serviceAreas[number];
  copy: (typeof serviceCopies)[ServiceSlug];
}) {
  return (
    <section id={service.slug} className="py-12">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] mb-16">
          <div className="relative">
            <div className="relative aspect-[3/4] lg:aspect-[4/3] overflow-hidden rounded-3xl">
              <img
                src={serviceImages[service.slug] ?? "/PNG/5.jpeg"}
                alt={service.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="eyebrow">{parseInt(service.number, 10)}.</p>
            <h2 className="mt-4 display-lg">{service.title}</h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">{service.description}</p>
          </div>

          <div className="lg:col-span-2 space-y-4 text-muted-foreground">
            {copy.intro.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-10">
            We are committed to this work:
          </h3>
          <div className="grid gap-10 md:grid-cols-2">
            {copy.highlights.map((item) => (
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

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Solutions — EquiRise Development Consulting Limited" },
      { name: "description", content: "EquiRise Development Consulting Limited transforms organizations through practical, inclusive, and sustainable solutions across leadership, governance, gender equality and social impact." },
      { name: "author", content: "EquiRise Development Consulting Limited" },
      { property: "og:title", content: "Our Solutions — EquiRise Development Consulting Limited" },
      { property: "og:description", content: "Practical, tailored solutions that help organizations build stronger leaders, institutions, and communities." },
    ],
  }),
  component: Services,
});

function Services() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    organization: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof typeof formState) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <section className="relative pt-20 md:pt-28">
        <div className="absolute inset-0 overflow-hidden">
          <img src={heroImg} alt="Our solutions" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/75" />
        </div>
        <div className="container-x relative z-10 py-28 text-center text-white">
          <p className="eyebrow text-white/80">Our Solutions</p>
          <h1 className="mt-4 display-xl text-white">
            Transforming Organizations Through Practical, Inclusive, and Sustainable Solutions
          </h1>
        </div>
      </section>

      <div className="container-x space-y-16 py-16">
        {serviceAreas.map((service) => {
          const copy = serviceCopies[service.slug as ServiceSlug];
          return <ServiceImpact key={service.slug} service={service} copy={copy} />;
        })}
      </div>

      <section className="bg-green-dark py-20">
        <div className="container-x">
          <div className="rounded-[2rem] border border-green/20 bg-green p-10 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="eyebrow text-white/80">Talk to us</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Ready to turn strategy into sustained change?</h2>
              </div>
              <button
                type="button"
                onClick={() => setConsultationOpen(true)}
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-green transition hover:bg-slate-100"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="rounded-[2rem] border border-border bg-card p-10 shadow-sm">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <p className="eyebrow">Contact form</p>
              <h2 className="mt-4 text-3xl font-semibold text-foreground">Send us a message</h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Tell us about your needs, challenges, or the change you want to make. We usually respond within one working day.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full name"
                  value={formState.fullName}
                  onChange={handleChange("fullName")}
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green/30"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formState.email}
                  onChange={handleChange("email")}
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green/30"
                  required
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Organization"
                  value={formState.organization}
                  onChange={handleChange("organization")}
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green/30"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={formState.phone}
                  onChange={handleChange("phone")}
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green/30"
                />
              </div>
              <textarea
                placeholder="Tell us more"
                rows={5}
                value={formState.message}
                onChange={handleChange("message")}
                className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green/30"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-green px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 transition"
              >
                {submitted ? "Message sent" : "Send message"}
              </button>
              {submitted && <p className="text-sm text-green">Thanks! Your message is on its way.</p>}
            </form>
          </div>
        </div>
      </section>
      <ConsultationForm open={consultationOpen} onOpenChange={setConsultationOpen} />
    </>
  );
}
