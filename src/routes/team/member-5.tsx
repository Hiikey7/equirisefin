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
          <h1 className="mt-4 display-xl">Member Five</h1>
          <p className="mt-2 text-muted-foreground">Role / Title</p>
        </div>
      </section>

      <section className="py-6">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="overflow-hidden rounded-2xl">
              <img src="/PNG/6.jpeg" alt="Member Five" className="w-full h-auto object-cover rounded-2xl" />
            </div>
          </div>
          <div className="lg:col-span-2 text-lg leading-relaxed">
            <h2 className="font-display text-2xl">Team profile</h2>
            <h3 className="mt-4 text-xl font-semibold">Member Five</h3>
            <p className="mt-2 text-muted-foreground">Role / Title</p>

            <div className="mt-6">
              <p>Placeholder biography. Replace with real content.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
