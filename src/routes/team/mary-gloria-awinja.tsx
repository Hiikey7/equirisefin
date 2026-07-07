import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/team/mary-gloria-awinja")({
  head: () => ({
    meta: [
      { title: "Mary Gloria Awinja — EquiRise Development Consulting Limited" },
      { name: "description", content: "Profile of Mary Gloria Awinja, Founder & Principal Consultant at EquiRise Development Consulting Limited." },
    ],
  }),
  component: Profile,
});

function Profile() {
  return (
    <div>
      <section className="pt-20 md:pt-28 pb-6">
        <div className="container-x">
          <Link to="/team" className="text-sm text-muted-foreground underline">← Back to team</Link>
          <h1 className="mt-4 display-xl">Mary Gloria Awinja, MCIPS</h1>
          <p className="mt-2 text-muted-foreground">Founder & Principal Consultant | EquiRise Consulting</p>
        </div>
      </section>

      <section className="py-6">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="overflow-hidden rounded-2xl">
              <img src="https://www.equirisedevelopmentconsultingltd.com/assets/img/team/gloria.png" alt="Mary Gloria Awinja" className="w-full h-auto object-cover rounded-2xl" />
            </div>
          </div>
          <div className="lg:col-span-2 text-lg leading-relaxed">
            <h2 className="font-display text-2xl">Team profile</h2>
            <h3 className="mt-4 text-xl font-semibold">Mary Gloria Awinja, MCIPS</h3>
            <p className="mt-2 text-muted-foreground">Founder & Principal Consultant | EquiRise Consulting</p>

            <div className="mt-6">
              <p>Mary Gloria Awinja is the Founder and Principal Consultant of EquiRise Consulting. She is a procurement and supply chain professional with expertise in organizational development, governance, leadership, and social impact. Throughout her career, she has worked with organizations to strengthen institutional systems, improve operational effectiveness, and support initiatives that create meaningful change.</p>

              <p className="mt-4">Mary is passionate about inclusive leadership and believes that organizations achieve their greatest impact when they invest in people, build strong systems, and foster partnerships with the communities they serve. Her professional interests include leadership development, governance, gender equality, institutional strengthening, community engagement, and sustainable development.</p>

              <p className="mt-4">She founded EquiRise Consulting to create a firm that combines strategic advisory with practical implementation, helping organizations navigate complex challenges while delivering measurable and lasting results.</p>

              <p className="mt-4">Under her leadership, EquiRise is committed to becoming a trusted partner for organizations across Africa, supporting leaders and institutions in building resilience, driving innovation, and creating sustainable impact.</p>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold">Address</h4>
              <p className="text-muted-foreground">Africa-focused consulting services</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
