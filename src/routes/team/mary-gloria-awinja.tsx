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
              <p>Mary Gloria Awinja is the Founder and Principal Consultant of EquiRise Development Consulting Limited. She is a Procurement and Supply Chain Professional with expertise in organizational development, governance, leadership, gender equality, institutional strengthening, and social impact.</p>

              <p className="mt-4">She has worked across government, development, corporate, and community sectors, supporting organizations to strengthen systems, build leadership capacity, and deliver sustainable development initiatives. Her experience includes strategic partnerships, programme management, organizational development, stakeholder engagement, and capacity strengthening.</p>

              <p className="mt-4">Mary founded EquiRise with a vision to help organizations and communities address complex challenges through practical consulting and sustainable solutions. She is passionate about building inclusive leadership, strengthening institutions, and creating lasting impact through collaboration, innovation, and evidence-based practice.</p>
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
