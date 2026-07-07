import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/team/dr-mary-keah-otieno")({
  head: () => ({
    meta: [
      { title: "Dr. Mary Keah Otieno — EquiRise Development Consulting Limited" },
      { name: "description", content: "Profile of Dr. Mary Keah Otieno, consultant at EquiRise Development Consulting Limited." },
    ],
  }),
  component: Profile,
});

function Profile() {
  return (
    <div>
      <section className="pt-20 md:pt-28 pb-6">
        <div className="container-x">
          <Link to="/about" className="text-sm text-muted-foreground underline">← Back</Link>
          <h1 className="mt-4 display-xl">Dr. Mary Keah Otieno</h1>
          <p className="mt-2 text-muted-foreground">Medical Doctor & Holistic Weight Management Specialist</p>
        </div>
      </section>

      <section className="py-6">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="overflow-hidden rounded-2xl">
              <img src="/team/mary.png" alt="Dr. Mary Keah Otieno" className="w-full h-auto object-cover rounded-2xl" />
            </div>
          </div>
          <div className="lg:col-span-2 text-lg leading-relaxed">
            <h2 className="font-display text-2xl">Dr. Mary Keah Otieno</h2>
            <p className="mt-4 text-sm text-muted-foreground">Medical Doctor & Holistic Weight Management Specialist</p>

            <div className="mt-6 space-y-4">
              <p>Dr. Mary Keah Otieno is a medical doctor with a strong background in preventive healthcare, holistic wellness, and community health. She specializes in designing practical health and wellbeing programmes that promote healthy lifestyles, disease prevention, and behaviour change for individuals, organizations, and communities.</p>
              <p>She brings expertise in workplace wellbeing, health promotion, women's health, and community engagement, supporting EquiRise's mission of strengthening organizations and empowering communities through sustainable health and development solutions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
