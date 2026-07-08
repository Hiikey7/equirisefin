export type ServiceArea = {
  slug: string;
  number: string;
  title: string;
  short: string;
  tagline: string;
  description: string;
  offerings: string[];
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "leadership-organizational-development",
    number: "01",
    title: "Leadership & Organizational Development",
    short: "Leadership & OD",
    tagline: "Developing leaders. Building high-performing organizations.",
    description:
      "Leadership is the foundation of every successful organization. We build leadership capacity at every level — cultivating a culture of accountability, collaboration, and continuous improvement that helps organizations strengthen people, culture, and overall performance.",
    offerings: [
      "Executive Leadership Development",
      "Leadership Coaching & Mentoring",
      "Emerging Leaders Programmes",
      "Organizational Culture Transformation",
      "Team Development & Team Building",
      "Change Management",
      "Strategic Planning Facilitation",
      "Employee Engagement",
      "Performance Improvement",
      "Succession Planning",
      "Executive Retreat Facilitation",
      "Leadership Assessments & Organizational Reviews",
    ],
  },
  {
    slug: "governance-institutional-strengthening",
    number: "02",
    title: "Governance & Institutional Strengthening",
    short: "Governance & Institutions",
    tagline: "Building strong institutions through effective governance.",
    description:
      "Strong governance is the foundation of credibility, accountability, and long-term sustainability. We work with boards, leadership teams, and management to build systems that support transparency, accountability, and sustainable growth.",
    offerings: [
      "Governance Advisory",
      "Board Development",
      "Institutional Capacity Assessments",
      "Organizational Development",
      "Policy Development",
      "Strategy Development",
      "Procurement Advisory",
      "Compliance Reviews",
      "Risk Management",
      "Process Improvement",
      "Institutional Strengthening",
      "Governance Training",
    ],
  },
  {
    slug: "gender-equality-social-inclusion",
    number: "03",
    title: "Gender Equality & Social Inclusion",
    short: "Gender Equality & Inclusion",
    tagline: "Advancing inclusive organizations that create greater impact.",
    description:
      "Organizations perform better when everyone can contribute, participate, and lead. We help organizations integrate gender-responsive approaches into leadership, governance, workplace culture, policies, programmes, and service delivery — creating environments where women, youth, persons with disabilities, and marginalized communities can thrive.",
    offerings: [
      "Gender Mainstreaming",
      "Gender Audits",
      "Gender Policy Development",
      "Women's Leadership Programmes",
      "Diversity, Equity & Inclusion Strategies",
      "Safeguarding Frameworks",
      "Gender-Responsive Budgeting",
      "Workplace Inclusion",
      "Gender Capacity Building",
      "Community Gender Programmes",
      "Social Inclusion Assessments",
      "Institutional Gender Integration",
    ],
  },
  {
    slug: "social-impact-community-climate",
    number: "04",
    title: "Social Impact, Community Engagement & Climate Resilience",
    short: "Social Impact & Climate",
    tagline: "Creating shared value between organizations and communities.",
    description:
      "Organizations are increasingly expected to create value beyond financial performance. We help design and deliver programmes that strengthen relationships with communities, empower women and youth, build sustainable livelihoods, and promote climate resilience.",
    offerings: [
      "Community Engagement Strategies",
      "Stakeholder Engagement",
      "Corporate Social Investment",
      "Social Impact Assessments",
      "Women's Economic Empowerment",
      "Youth Empowerment",
      "Livelihood Development",
      "Enterprise Development",
      "Climate Change Adaptation",
      "Climate Resilience Programmes",
      "Community Capacity Building",
      "Sustainable Development Planning",
    ],
  },
];

export const industries = [
  {
    name: "Government Ministries & State Corporations",
    d: "Strengthening governance, institutional performance, leadership, policy, procurement capacity, gender mainstreaming, and service delivery.",
  },
  {
    name: "County Governments",
    d: "Institutional systems, strategic planning, public participation, leadership capacity, and community development initiatives.",
  },
  {
    name: "Development Partners",
    d: "Bilateral and multilateral agencies, INGOs, and donor programmes — capacity building, OD, research, and sustainable programme design.",
  },
  {
    name: "NGOs & Civil Society",
    d: "Leadership, governance, institutional capacity, strategy, community programmes, GESI integration, and organizational effectiveness.",
  },
  {
    name: "Corporate Organizations",
    d: "Leadership development, transformation, employee engagement, workplace inclusion, ESG, CSI, and sustainable business practice.",
  },
  {
    name: "Financial Institutions",
    d: "Banks, SACCOs, and insurers — leadership, culture, DEI, community investment, and institutional performance.",
  },
  {
    name: "Educational Institutions",
    d: "Universities, colleges and schools — leadership, governance, strategy, gender inclusion, and organizational capacity.",
  },
  {
    name: "Community Organizations",
    d: "CBOs, women's groups, youth organizations, and grassroots initiatives — leadership, delivery, and sustainable development.",
  },
];

export const methodology = [
  { step: "01", t: "Understand", d: "We listen to understand your needs, priorities, and context." },
  { step: "02", t: "Assess", d: "We identify strengths, challenges, and opportunities through collaborative assessments." },
  { step: "03", t: "Co-Create", d: "We design practical solutions tailored to your organization or community." },
  { step: "04", t: "Deliver", d: "We implement solutions through consulting, training, facilitation, and technical support." },
  { step: "05", t: "Support", d: "We provide follow-up, coaching, and learning to sustain results over time." },
];

export const events = [
  {
    date: "2026-07-31",
    endDate: "2026-08-01",
    title: "Baringo Women Empowerment Programme",
    location: "Baringo County, Kenya",
    tag: "Upcoming Event",
    excerpt: "Upcoming: Baringo Women Empowerment Programme – 31 July 2026. This programme strengthens women's resilience through economic empowerment, financial literacy, entrepreneurship, mental health, reproductive health, gender equality, and climate-smart livelihoods.",
    image: "/1.webp",
    fullDescription: `Upcoming: Baringo Women Empowerment Programme – 31 July 2026.

On 31 July 2026, a community-based Women Empowerment Programme will be held in Baringo County, bringing together women, community leaders, development partners, and local stakeholders to strengthen women’s social and economic resilience. The programme will focus on economic empowerment, financial literacy, entrepreneurship, mental health and psychosocial well-being, reproductive health, gender equality, and climate-smart livelihoods. Through practical training, expert-led sessions, and community dialogue, participants will gain the knowledge, skills, and networks needed to improve their livelihoods, build sustainable businesses, and enhance the well-being of their families and communities.

This upcoming initiative reflects our continued commitment to empowering women with practical solutions that foster inclusive development, strengthen community resilience, and create lasting social and economic impact.`,
  },
  {
    date: "2026-03-07",
    title: "International Women’s Day 2026 – Give to Gain",
    location: "Nairobi, Kenya",
    tag: "Event",
    excerpt: "In celebration of International Women’s Day 2026, we brought together government leaders, development partners, the private sector, and civil society to champion women’s empowerment, environmental sustainability, and inclusive socio-economic development under the theme “Give to Gain.”",
    image: "/i.jpg",
    fullDescription: `International Women’s Day 2026

Theme: Give to Gain

In celebration of International Women’s Day 2026, we brought together government leaders, development partners, the private sector, and civil society to champion women’s empowerment, environmental sustainability, and inclusive socio-economic development under the global theme “Give to Gain.”

Partners

* Safaricom PLC
* Stima Sacco
* Federation of Women Lawyers in Kenya (FIDA Kenya)
* Bidii Girls Programme
* Ministry of Environment, Climate Change and Forestry
* Ministry of Gender, Culture and Children’s Services
* State Department for Children Services
* Kenya Utalii College
* Kenya Tourism Board
* UWEPA - United Women Empowerment Programme Africa

Distinguished Guest Speakers

* Deborah Mlongo Barasa – Cabinet Secretary, Ministry of Environment, Climate Change and Forestry.
* CPA Carren Achieng Ageng'o – Principal Secretary, State Department for Children Services, Ministry of Gender, Culture and Children’s Services.
* Fauzia Ali Kimathi – Chief Consumer Business Officer, Safaricom PLC.

The event highlighted the importance of collaboration between government, the private sector, and civil society in advancing women’s leadership, economic empowerment, environmental stewardship, and sustainable development. Through insightful keynote addresses and strategic partnerships, participants explored practical pathways for creating lasting opportunities for women and girls across Kenya.`,
    partners: [
      { name: "Safaricom PLC", url: "https://www.safaricom.co.ke/", role: "Lead Partner" },
      { name: "Stima Sacco", url: "https://www.stima-sacco.com/", role: "Partner" },
      { name: "Federation of Women Lawyers in Kenya (FIDA Kenya)", url: "https://fidakenya.org/", role: "Partner" },
      { name: "Bidii Girls Programme", url: "https://www.bidii-girls-programme.org/", role: "Partner" },
      { name: "Kenya Utalii College", url: "https://www.utalii.ac.ke/", role: "Partner" },
      { name: "Kenya Tourism Board", url: "https://www.ktb.go.ke/", role: "Partner" },
      { name: "UWEPA - United Women Empowerment Programme Africa", url: "https://www.uwepa.org/", role: "Partner" },
    ],
    mediaCoverage: [
      { name: "Capital FM", url: "https://www.capitalfm.co.ke/business/2026/03/embrace-saving-and-investment-for-financial-freedom-women-told/" },
      { name: "The Standard Newspaper", url: "https://www.standardmedia.co.ke/national/article/2001542640/women-told-to-save-invest-for-independence" },
    ],
  },
  {
    date: "2025-03-07",
    title: "International Women’s Day 2025 – Accelerate Action",
    location: "Nairobi, Kenya",
    tag: "Completed Event",
    excerpt: "On 8 March 2025, we convened women leaders, professionals, entrepreneurs, and community champions to celebrate International Women’s Day under the theme “Accelerate Action.”",
    image: "/PNG/7.jpeg",
    fullDescription: `International Women’s Day 2025

Theme: Accelerate Action

On 8 March 2025, we convened women leaders, professionals, entrepreneurs, and community champions to celebrate International Women’s Day under the global theme “Accelerate Action.” The event focused on advancing women’s leadership, economic empowerment, and meaningful action towards gender equality.

Partners

* Stima Sacco
* LeaderShift Group Kenya
* United Women Empowerment Program Africa (UWEPA)

Guest Speaker
* Gladys Boss Shollei (Deputy Speaker of the National Assembly)
* Gloria Orwoba (Senator)

The event provided a platform for dialogue on women’s leadership, economic inclusion, and collaborative action, bringing together government leaders, development partners, civil society organizations, and women leaders committed to accelerating progress toward gender equality.`,
  }
];

export const testimonials = [
  {
    quote:
      "EquiRise didn't hand us a report — they walked with us. Our leadership team is more honest, our culture is calmer, and our people know they matter.",
    name: "Njeri Wanjiru",
    role: "Executive Director, Regional Health Alliance",
  },
  {
    quote:
      "Their governance and safeguarding work reshaped how we design programmes. It's now impossible to imagine doing this work without that lens.",
    name: "Samuel Otieno",
    role: "Country Director, INGO Kenya",
  },
  {
    quote:
      "Rigorous, warm, and unafraid to name what needs naming. That combination is rare in this sector.",
    name: "Aisha Mohamed",
    role: "Board Chair, Youth Livelihoods Trust",
  },
];

export const posts = [
  {
    slug: "culture-is-a-system",
    title: "Culture is a system, not a slogan",
    excerpt: "Why the values on your wall matter less than the incentives in your calendar.",
    date: "2026-06-18",
    read: "6 min read",
    category: "Organizational Culture",
  },
  {
    slug: "governance-that-holds",
    title: "Governance that actually holds",
    excerpt: "What it takes to move from board papers to real institutional accountability.",
    date: "2026-05-30",
    read: "8 min read",
    category: "Governance",
  },
  {
    slug: "inclusion-by-design",
    title: "Inclusion by design, not decoration",
    excerpt: "How gender-responsive and inclusive systems reshape programme outcomes.",
    date: "2026-05-04",
    read: "5 min read",
    category: "Gender & Inclusion",
  },
];

export const partners = [
  "USAID", "FCDO", "UN Women", "GIZ", "Ford Foundation", "Mastercard Foundation", "World Bank", "Oxfam",
];

export const faqs = [
  {
    q: "Who do you typically work with?",
    a: "Governments, county governments, development partners, INGOs, corporates, financial institutions, educational institutions, and community-based organizations across Kenya and the wider African region.",
  },
  {
    q: "How do engagements typically start?",
    a: "Every engagement begins with a Listen phase — a discovery conversation to understand your goals, context, and challenges before we propose anything. From there we assess, design, deliver, measure, and sustain.",
  },
  {
    q: "Do you offer gender audits and safeguarding support?",
    a: "Yes. We conduct gender audits, safeguarding framework design, DEI strategy, and institutional gender integration for organizations that require independent, credible expertise.",
  },
  {
    q: "Can you support work outside Kenya?",
    a: "Yes. We regularly deliver across Africa and remotely with partners in other regions. Location should not be a barrier to good work.",
  },
  {
    q: "Are your solutions off-the-shelf?",
    a: "No. Every solution is tailored to your context, culture, and strategic priorities. We do not believe in one-size-fits-all consulting.",
  },
];

export const contactInfo = {
  location: "Nairobi, Kenya",
  phone: "+254 701 183 032",
  emailGeneral: "info@equirisedevelopmentconsultingltd.com",
  emailPartnerships: "partnerships@equirisedevelopmentconsultingltd.com",
  hours: "Mon–Fri · 8:30am – 5:30pm EAT",
};
