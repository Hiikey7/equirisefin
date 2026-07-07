import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/team/member-5")({
  head: () => ({
    meta: [
      { title: "Team member — EquiRise Development Consulting Limited" },
      { name: "description", content: "Profile placeholder." },
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
          <h1 className="mt-4 display-xl">Dr. Margaret Kagwe Njuguna</h1>
          <p className="mt-2 text-muted-foreground">Mental Health & Psychosocial Wellbeing Consultant</p>
        </div>
      </section>

      <section className="py-6">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="overflow-hidden rounded-2xl">
              <img src="/team/role2.png" alt="Dr. Margaret Kagwe Njuguna" className="w-full h-auto object-cover rounded-2xl" />
            </div>
          </div>
          <div className="lg:col-span-2 text-lg leading-relaxed">
            <h2 className="font-display text-2xl">Team profile</h2>
            <h3 className="mt-4 text-xl font-semibold">Dr. Margaret Kagwe Njuguna</h3>
            <p className="mt-2 text-muted-foreground">Mental Health & Psychosocial Wellbeing Consultant</p>

            <div className="mt-6 space-y-4">
              <p>Dr. Margaret Kagwe Njuguna is a mental health specialist, author, award-winning mental health advocate, and trainer with extensive experience in mental health promotion, psychosocial wellbeing, and behavioural change. She is passionate about helping individuals, organizations, and communities build resilience, promote mental wellness, and foster healthy, productive environments.</p>
              <p>At EquiRise, she provides expertise in workplace mental health, psychosocial support, leadership wellbeing, stress management, and community mental health programmes. She works with organizations and communities to design and deliver practical solutions that strengthen wellbeing, enhance resilience, and support sustainable development.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
