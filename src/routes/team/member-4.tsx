import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/team/member-4")({
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
          <h1 className="mt-4 display-xl">Dr. Samson Ndonye</h1>
          <p className="mt-2 text-muted-foreground">Governance, Organizational Development & Capacity Building Consultant</p>
        </div>
      </section>

      <section className="py-6">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="overflow-hidden rounded-2xl">
              <img src="/team/role1.png" alt="Dr. Samson Ndonye" className="w-full h-auto object-cover rounded-2xl" />
            </div>
          </div>
          <div className="lg:col-span-2 text-lg leading-relaxed">
            <h2 className="font-display text-2xl">Team profile</h2>
            <h3 className="mt-4 text-xl font-semibold">Dr. Samson Ndonye</h3>
            <p className="mt-2 text-muted-foreground">Governance, Organizational Development & Capacity Building Consultant</p>

            <div className="mt-6 space-y-4">
              <p>Dr. Samson Ndonye is a Lecturer in Purchasing and Supply Chain Management at Africa Nazarene University and an experienced consultant specializing in organizational development, governance, institutional strengthening, and capacity building. He has extensive experience supporting public institutions, private sector organizations, and development partners through training, professional development, and advisory services that strengthen organizational performance.</p>
              <p>At EquiRise, Dr. Ndonye provides expertise in governance, organizational capacity development, leadership training, and institutional strengthening. He also advises organizations on procurement and supply chain management, helping them strengthen systems, improve operational efficiency, enhance accountability, and achieve sustainable organizational performance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
