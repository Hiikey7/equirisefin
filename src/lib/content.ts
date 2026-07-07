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
    date: "2026-09-30",
    title: "Empowering Women In baringo County MOSEWO.",
    location: "Baringo County, Kenya",
    tag: "Upcoming Event",
    excerpt: "A new upcoming event focused on resilient women's health, financial inclusion, economic empowerment, and climate-smart agriculture in Baringo County.",
    image: "/PNG/4.jpeg",
    fullDescription: `Building Resilient Women through Health, Financial Inclusion, Economic Empowerment, and Climate-Smart Agriculture is an upcoming event in Baringo County, Kenya. The programme will bring together women leaders, community changemakers, and agricultural practitioners to explore practical pathways that strengthen wellbeing, livelihoods, and climate resilience.

Participants will learn how integrated health services, inclusive finance, enterprise development, and climate-smart farming practices can work together to build stronger, more resilient communities. EquiRise will support local stakeholders with sessions on leadership, financial inclusion, sustainable agriculture, and women-centered economic empowerment.

The event is designed to accelerate action, deepen collaboration, and equip women with tools to thrive in changing climatic and economic conditions. Location and date are forthcoming, with further details to be shared as the event approaches.`,
  },
  {
    date: "2026-03-07",
    title: "International Women's Day 2026: Give to Gain",
    location: "Nairobi, Kenya",
    tag: "Event",
    excerpt: "This Women's Day 2026, the spirit of Give to Gain shines through powerful partnerships supporting women and girls. Join us as organizations and brands come together to create opportunities that empower the next generation of women leaders.",
    image: "/iwd2026/3.jpeg",
    fullDescription: `This year's International Women's Day 2026 served as a powerful moment to celebrate the achievements, resilience, and impact of women across communities. Under the theme "Give to Gain," the celebration emphasized the importance of investing in women and girls as a pathway to building stronger and more inclusive societies.

Throughout the day, the message was clear: when women are given opportunities, knowledge, and support, they are empowered to lead, innovate, and create lasting change. The theme encouraged individuals, organizations, and communities to play an active role in uplifting women by opening doors to mentorship, education, leadership, and economic opportunities.

The event brought together voices and partners committed to advancing women's empowerment and recognizing the contributions women continue to make in shaping the future. It was a moment of reflection on the progress made toward gender equality while also reaffirming the need for continued collaboration and action.`,
    partners: [
      { name: "Safaricom", url: "https://www.safaricom.co.ke/", role: "Lead Partner" },
      { name: "Stima SACCO", url: "https://www.stima-sacco.com/", role: "Partner" },
      { name: "Kenya Utalii College", url: "https://www.utalii.ac.ke/", role: "Partner" },
      { name: "Big3 Africa", url: "https://big3africa.com/", role: "Partner" },
      { name: "Holistic Weight", url: "https://holisticweight.com/", role: "Partner" },
      { name: "World Union of Female Organisations (WUFOF)", url: "https://wuof.org/", role: "Partner" },
      { name: "Federation of Women Lawyers Kenya (FIDA Kenya)", url: "https://fidakenya.org/", role: "Partner" },
    ],
    mediaCoverage: [
      { name: "Capital FM", url: "https://www.capitalfm.co.ke/business/2026/03/embrace-saving-and-investment-for-financial-freedom-women-told/" },
      { name: "The Standard Newspaper", url: "https://www.standardmedia.co.ke/national/article/2001542640/women-told-to-save-invest-for-independence" },
    ],
  },
  {
    date: "2025-03-07",
    title: "International Women's Day 2025: Accelerate Action",
    location: "Nairobi, Kenya",
    tag: "Completed Event",
    excerpt: "International Women's Day 2025 celebrated acceleration, action, and partnership in Nairobi, bringing leaders together to strengthen gender equality and community impact.",
    image: "/PNG/4.jpeg",
    fullDescription: "International Women's Day 2025 energized women leaders, changemakers, and organizations around the theme of Accelerate Action. The event highlighted practical pathways to deepen gender inclusion, economic opportunity, and civic participation across Kenya and the region.\n\nParticipants engaged in strategic conversations, advocacy, and experiential learning designed to move commitments into measurable progress. EquiRise supported stakeholders with sessions on women's leadership, workforce inclusion, community resilience, and collaborative action planning.\n\nThe day reaffirmed the urgent need to accelerate policies and programmes that advance women's rights, economic independence, and social empowerment. It was a celebration of progress alongside a call to sustain momentum through partnership, investment, and inclusive systems.",
  },
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
