import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/team/dr-betty-ogange")({
  head: () => ({
    meta: [
      { title: "Dr. Betty Ogange — EquiRise Development Consulting Limited" },
      { name: "description", content: "Profile of Dr. Betty Ogange, consultant at EquiRise Development Consulting Limited." },
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
          <h1 className="mt-4 display-xl">Dr. Betty Ogange</h1>
          <p className="mt-2 text-muted-foreground">Educational & Capacity Development Consultant</p>
        </div>
      </section>

      <section className="py-6">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="overflow-hidden rounded-2xl">
              <img src="/team/betty.png" alt="Dr. Betty Ogange" className="w-full h-auto object-cover rounded-2xl" />
            </div>
          </div>
          <div className="lg:col-span-2 text-lg leading-relaxed">
            <h2 className="font-display text-2xl">Dr. Betty Ogange</h2>
            <p className="mt-4 text-sm text-muted-foreground">Educational & Capacity Development Consultant</p>

            <div className="mt-6 space-y-4">
              <p>Dr. Betty Ogange is a globally recognized leader and advisor in international development, education systems strengthening, and digital transformation. With nearly three decades of experience spanning Africa, Asia, the Caribbean, and the Pacific, she specializes in integrating technology, open learning, and policy innovation to improve outcomes for teachers, learners, and communities worldwide.</p>
              <p>She currently serves as Education Specialist: Teacher Education at the Commonwealth of Learning (COL), where she advises government ministries and national agencies on teacher education and digital transformation. Her work includes leading the Teacher-in-the-Loop AI initiative and co-leading the Beyond Numbers project focused on scaling quality teacher development in Sub-Saharan Africa.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
