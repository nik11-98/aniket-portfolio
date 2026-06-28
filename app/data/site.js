// -----------------------------------------------------------------------------
// Single content source. Swap copy / projects here — every component reads
// from this object so the site never drifts out of sync.
// -----------------------------------------------------------------------------

export const site = {
  name: "Aniket Rao",
  handle: "@aniketrao",
  initials: "AR",
  role: "Senior Product Designer",
  location: "Mumbai, India",
  email: "hello@aniketrao.studio",
  openToWork: true,

  // short hero line
  tagline:
    "Designing and scaling multi-sided platforms across consumer and B2B products.",

  // serif statement hero (mirrors the reference). `headline` parts let us
  // italicise one word; `subtext` segments mark which words render bold.
  hero: {
    greeting: "Hello",
    firstName: "Aniket",
    headline: { before: "I design products that", em: "feel", after: "simple, even when they’re not." },
    subtext: [
      { t: "Currently designing " },
      { t: "complex B2B workflows", bold: true },
      { t: " and a multi-brand " },
      { t: "design system", bold: true },
    ],
  },

  // longer about paragraph(s)
  about: [
    "Senior Product Designer with 8+ years of experience designing and scaling multi-sided platforms across both consumer and B2B products. My work has reached over 5.7 million users.",
    "Lately I’ve been focused on AI-driven tools and building scalable design systems that keep teams fast without losing craft.",
  ],

  socials: [
    { label: "Email", href: "mailto:hello@aniketrao.studio" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter / X", href: "https://x.com" },
    { label: "Read.cv", href: "https://read.cv" },
  ],

  resume: "#",
};

// "Mementos" photos for the fan deck (from /mementos, stored in /public/mementos).
export const mementos = Array.from({ length: 11 }, (_, i) => ({
  type: "image",
  src: `/mementos/m${i + 1}.jpg`,
}));

// Full gallery for the /mementos page — every photo plus the video clips,
// interleaved so the videos are spread through the masonry.
const _img = (n) => ({ type: "image", src: `/mementos/m${n}.jpg` });
const _vid = (n) => ({ type: "video", src: `/mementos/v${n}.mp4` });
export const gallery = [
  _img(1), _img(2), _vid(1), _img(3), _img(4),
  _img(5), _vid(2), _img(6), _img(7), _img(8),
  _vid(3), _img(9), _img(10), _img(11),
];

// Colourful "skill" pills — colours sampled from the reference screenshot.
export const skills = [
  { label: "Moving Rectangles", color: "#a3d0f2", icon: "move" },
  { label: "Improving UX", color: "#f6c63e", icon: "smile" },
  { label: "Thinking Systems", color: "#f3c7df", icon: "globe" },
  { label: "Rounding Corners", color: "#cdee7d", icon: "corners" },
  { label: "Reframing Problems", color: "#5fd398", icon: "frame" },
  { label: "Prototyping", color: "#ffffff", icon: "shuffle" },
  { label: "Making It Pop", color: "#ef8a5a", icon: "brush" },
  { label: "Testing", color: "#c7b4ef", icon: "pen" },
];

export const stats = [
  { value: "8+", label: "Years experience" },
  { value: "5.7M", label: "Users reached" },
  { value: "60+", label: "Projects shipped" },
];

export const experience = [
  {
    company: "Pathao",
    role: "Senior Product Designer",
    period: "2022 — Present",
    summary: "Leading design for the rider & merchant platforms across 4 markets.",
  },
  {
    company: "Klikit",
    role: "Product Designer",
    period: "2020 — 2022",
    summary: "Built the order-management suite and the first shared design system.",
  },
  {
    company: "Freelance",
    role: "Designer & Art Director",
    period: "2017 — 2020",
    summary: "Identity and product work for early-stage founders and studios.",
  },
];

// Selected work — image cards (mockup, title, one-line description).
export const projectsRange = "2023–26";

export const projects = [
  {
    id: "01",
    title: "Smart Eats",
    slug: "smart-eats",
    description:
      "A wellness food app that makes eating well feel effortless.",
    image: "/work/w5.png",
    href: "/work/smart-eats",
    caseStudy: {
      accent: "#6fb1f1",
      role: "Product Designer (team of 5)",
      timeline: "6 weeks",
      platform: "iOS",
      screens: "44+ screens",
      tagline:
        "A one-stop meal-planning app that makes eating healthy, delicious food easy for busy lives — built end to end through a design-thinking process.",
      hero: "/work/cs/01-cover.jpg",
      sections: [
        {
          type: "stats",
          title: "Project overview",
          body:
            "Smart Eats is a one-stop meal-planning solution that makes it easy for people to eat healthy, delicious food while fitting it into their busy lives. We focused on a wide range of nutritious recipes that can be tailored to different dietary needs and tastes — so users not only get tasty meals, but feel good about their choices for their health and the environment.",
          stats: [
            { v: "5", l: "Team members" },
            { v: "6", l: "Weeks" },
            { v: "44+", l: "Screens" },
          ],
        },
        {
          type: "chips",
          title: "Tools",
          body:
            "Throughout the project we relied on a range of tools to enhance our creative capabilities — Figma for collaborative design, Photoshop for image editing, and PowerPoint to present the work.",
          chips: ["Figma", "Photoshop", "PowerPoint"],
        },
        {
          type: "steps",
          title: "Design process",
          body:
            "We followed a design-thinking process with a user-centred approach — a non-linear, iterative loop across five phases.",
          steps: ["Empathize", "Define", "Ideate", "Prototype", "Test"],
        },
        {
          type: "text",
          title: "Research & insights",
          body:
            "We combined quantitative and qualitative research to reach our findings. Surveys captured demographics and eating habits, and each of us ran a personalised interview — gathering insights from five interviews in total.",
          note: "2 methods · Surveys + 5 interviews",
        },
        {
          type: "quote",
          title: "Problem statement",
          body:
            "A parent who manages their children’s routine needs an efficient, convenient way to balance a busy schedule with nutrition-rich meal preparation — because cooking efficiently with limited ingredients, while still prioritising nutrition for their kids, is hard to do on a tight schedule.",
        },
        {
          type: "image",
          title: "User flow",
          body:
            "After defining the problem, we mapped a detailed user flow — outlining the sequence of steps a user takes to accomplish each goal in the app.",
          src: "/work/cs/08-userflow.jpg",
          alt: "Smart Eats user flow diagram",
          bare: true,
        },
        {
          type: "image",
          title: "Information architecture",
          body:
            "We structured the information architecture so that content and features are logically organised and easy to reach from the home screen.",
          src: "/work/cs/09-ia.jpg",
          alt: "Smart Eats information architecture",
          bare: true,
        },
        {
          type: "image",
          title: "Low-fidelity wireframes",
          body:
            "We explored layout and flow with low-fidelity wireframes before committing to any visual design.",
          src: "/work/cs/10-lowfi.jpg",
          alt: "Smart Eats low-fidelity wireframes",
          bare: true,
        },
        {
          type: "gallery",
          title: "High-fidelity design",
          body:
            "The final UI is warm and food-first — big, appetising imagery, a clear navigation bar, and onboarding that personalises recipes around diet, allergies and goals.",
          images: ["/work/cs/11-hifi-a.jpg", "/work/cs/12-hifi-b.jpg"],
        },
      ],
      prototype:
        "https://www.figma.com/proto/ii5oR8nIVhABi64NCKCwzg/Nutrition-App--final----design-3--?node-id=779-11628&viewport=1224%2C3614%2C0.16&t=mVIK88iU85QkIC1a-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=779%3A11628&show-proto-sidebar=1&page-id=762%3A2030",
    },
  },
  {
    id: "02",
    title: "Renteeez",
    description:
      "Find and rent your ideal home remotely — a calmer rental marketplace.",
    image: "/work/w1.png",
    href: "#contact",
  },
  {
    id: "03",
    title: "Game of Thrones",
    description:
      "A cinematic streaming concept for the world of Westeros.",
    image: "/work/w3.png",
    href: "#contact",
  },
  {
    id: "04",
    title: "Borrel",
    description:
      "Brand and site for a Dutch–Indonesian comfort-food kitchen.",
    image: "/work/w2.png",
    href: "#contact",
    locked: true,
  },
];
