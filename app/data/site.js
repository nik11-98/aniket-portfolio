// -----------------------------------------------------------------------------
// Single content source. Swap copy / projects here — every component reads
// from this object so the site never drifts out of sync.
// -----------------------------------------------------------------------------

export const site = {
  name: "Aniket Jadhav",
  handle: "@aniketjadhav",
  initials: "AJ",
  role: "Product & UX Designer",
  location: "Toronto, Canada",
  email: "aniket.jadhav.75054@gmail.com",
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
    "Product & UX designer with 4+ years of experience designing scalable, responsive digital experiences across SaaS, enterprise, and content-driven platforms. I work end-to-end — user research, interaction design, wireframing, prototyping, and high-fidelity UI.",
    "I build and evolve design systems, collaborate within agile cross-functional teams, and turn complex business requirements into intuitive, user-centered experiences — with a strong focus on accessibility (WCAG & AODA) and mobile-first responsive design.",
    "Based in Toronto and open to relocating, with a Graduate Certificate in User Experience Design from Humber College. I’m also comfortable creating marketing materials — pitch decks, brochures, and branded visual content.",
  ],

  socials: [
    { label: "Email", href: "mailto:aniket.jadhav.75054@gmail.com" },
    { label: "Behance", href: "https://www.behance.net/aniketjadhav6" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aniket-jadhav-9b9a05191/" },
  ],

  resume: "/Aniket-Jadhav-Resume.pdf",
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

// Colourful "skill" pills — real skills mixed with a few playful ones.
// Every pill has a unique icon; colours sampled from the reference.
export const skills = [
  { label: "UX & UI Design", color: "#a3d0f2", icon: "layout" },
  { label: "User Research", color: "#f6c63e", icon: "search" },
  { label: "Design Systems", color: "#f3c7df", icon: "layers" },
  { label: "Prototyping", color: "#cdee7d", icon: "shuffle" },
  { label: "Wireframing", color: "#5fd398", icon: "frame" },
  { label: "Interaction Design", color: "#ffffff", icon: "cursor" },
  { label: "Accessibility · WCAG", color: "#ef8a5a", icon: "eye" },
  { label: "Responsive Design", color: "#c7b4ef", icon: "devices" },
  { label: "Thinking Systems", color: "#a3d0f2", icon: "globe" },
  { label: "Improving UX", color: "#f6c63e", icon: "smile" },
  { label: "Making It Pop", color: "#ef8a5a", icon: "brush" },
  { label: "Reframing Problems", color: "#cdee7d", icon: "target" },
];

export const stats = [
  { value: "4+", label: "Years of experience" },
  { value: "5", label: "Companies & studios" },
  { value: "2", label: "UX grad certificates" },
];

export const experience = [
  {
    company: "Futura Sound",
    role: "UI/UX Designer (Co-op · Humber College)",
    period: "Sep 2025 — Feb 2026",
    summary:
      "Led UI improvements and experience optimization for a live production website, maintaining CMS-driven (WordPress) content with accessible, responsive layouts and smooth developer handoff.",
  },
  {
    company: "Holeshot1 Media",
    role: "UI/UX Designer (Co-op · Conestoga College)",
    period: "Aug 2024 — Sep 2024",
    summary:
      "Delivered UX/UI for the OHANA product — established brand guidelines and a brand book, and built responsive landing pages from wireframes to high-fidelity designs in Wix.",
  },
  {
    company: "Platerate",
    role: "Product / UI/UX Designer",
    period: "Dec 2020 — Dec 2023",
    summary:
      "Owned end-to-end UI/UX across responsive web — research, information architecture, prototyping, and design systems — within agile cross-functional teams, with WCAG/AODA-compliant delivery.",
  },
  {
    company: "Della Leaders Club",
    role: "Graphic / UI/UX Designer",
    period: "May 2021 — Dec 2021",
    summary:
      "Designed low- to high-fidelity wireframes and UI for new features, iterated with user feedback and analytics, and mentored junior designers on process and standards.",
  },
  {
    company: "Anixel Studio",
    role: "Graphic / UI Design Intern",
    period: "Nov 2020 — Feb 2021",
    summary:
      "Designed web and mobile UI in Figma, created marketing and social assets aligned with brand systems, and supported clean design-to-development handoff.",
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
    slug: "renteez",
    description:
      "Find and rent your ideal home remotely — a calmer rental marketplace.",
    image: "/work/w1.png",
    href: "/work/renteez",
    caseStudy: {
      accent: "#7c4dff",
      role: "Product Designer (team of 5)",
      timeline: "3 weeks",
      platform: "iOS",
      screens: "65+ screens",
      tagline:
        "A smarter way for newcomers to Canada to find safe, reliable accommodation — with in-person property checks through a mediator to keep the rental process scam-free.",
      hero: "/work/cs-rz/01-cover.jpg",
      sections: [
        {
          type: "stats",
          title: "Project overview",
          body:
            "Renteeez helps newcomers to Canada find safe, reliable accommodation while avoiding rental scams. It offers in-person property checks through a mediator and supports real needs like language translation and alternative verification methods. This case study focuses on the UX process and the key design decisions that led to the final solution.",
          stats: [
            { v: "5", l: "Team members" },
            { v: "3", l: "Weeks" },
            { v: "65+", l: "Screens" },
          ],
        },
        {
          type: "chips",
          title: "Tools",
          body:
            "We relied on a range of tools through the project — Figma for collaborative design, Photoshop for image editing, and PowerPoint to present the work.",
          chips: ["Figma", "Photoshop", "PowerPoint"],
        },
        {
          type: "steps",
          title: "Our process",
          body:
            "We followed a design-thinking process with a user-centred approach — a non-linear, iterative loop across five phases.",
          steps: ["Empathize", "Define", "Ideate", "Prototype", "Test"],
        },
        {
          type: "text",
          title: "Research & insights",
          body:
            "We combined quantitative and qualitative research to reach our findings. Surveys captured demographics and habits, and each of us ran a personalised interview — gathering insights from five interviews in total.",
          note: "2 methods · Surveys + 5 interviews",
        },
        {
          type: "image",
          title: "Empathy map",
          body:
            "Mapping what newcomers say, think, do and feel surfaced the core anxiety: the fear of being scammed, paired with cultural shock and the need for someone to physically check a property.",
          src: "/work/cs-rz/empathy.jpg",
          alt: "Renteeez empathy map",
        },
        {
          type: "image",
          title: "Persona",
          body:
            "Ryan, 25 — a computer operator who researches everything before spending. His pains: sharing space, language barriers, judging listing reliability, time-zone delays, no local credit history, and a constant worry about scams.",
          src: "/work/cs-rz/persona.jpg",
          alt: "Renteeez persona — Ryan, the tenant",
        },
        {
          type: "quote",
          title: "Problem statement",
          body:
            "A newcomer planning to move to Canada needs a reliable way to secure accommodation ahead of time, before they arrive — because the current process leaves them vulnerable to scams and other fraudulent activity.",
        },
        {
          type: "text",
          title: "Hypothesis",
          body:
            "We believe that introducing a mediator to newcomers will help them secure trustworthy accommodation. We’ll know this is true when we see 8 in 10 newcomers get accommodation through a mediator.",
          note: "Target · 8 / 10 newcomers",
        },
        {
          type: "text",
          title: "Potential solution",
          body:
            "An accommodation search app tailored for newcomers that lets them add a third person for an in-person property check — helping them secure scam-free accommodation in Canada.",
        },
        {
          type: "image",
          title: "Assumption mapping",
          body:
            "We plotted our assumptions by risk and certainty — from “a third-person check builds trust” to language barriers in an English-only app — to decide what to test first.",
          src: "/work/cs-rz/assumption.jpg",
          alt: "Renteeez assumption mapping",
        },
        {
          type: "image",
          title: "Content inventory & card sorting",
          body:
            "A group card-sorting activity gave us diverse perspectives and helped prioritise features across our three main audiences: Tenants, Mediators, and Owners.",
          src: "/work/cs-rz/cardsort.jpg",
          alt: "Renteeez card sorting",
        },
        {
          type: "image",
          title: "Information architecture",
          body:
            "We structured the IA so that search, shortlist, mediator, categories and accommodation management are all reachable and logically organised from the home screen.",
          src: "/work/cs-rz/ia.jpg",
          alt: "Renteeez information architecture",
        },
        {
          type: "gallery",
          title: "UX storyboard",
          body:
            "A storyboard followed John from stressed and scam-wary to relaxed and prepared — discovering the app, connecting with a mediator over video, verifying the property, and paying securely.",
          images: [],
          frames: [
            { t: "Stress & tension", d: "John sits in a dimly lit room surrounded by packed suitcases, holding his phone — stressed and frustrated.", img: "/work/cs-rz/frames/f1.jpg" },
            { t: "Desperate search", d: "He scrolls through listing after listing, none of which seem trustworthy, and rubs his forehead.", img: "/work/cs-rz/frames/f2.jpg" },
            { t: "Discovering the app", d: "He stumbles on a trustworthy app in the store; his expression shifts from stressed to curious.", img: "/work/cs-rz/frames/f3.jpg" },
            { t: "Understanding the features", d: "The app shows live video-call verification, a mediator introduction, and detailed accommodation info.", img: "/work/cs-rz/frames/f4.jpg" },
            { t: "Contacting the mediator", d: "John taps “Contact Mediator” and starts a chat. Sarah introduces herself and asks about his needs.", img: "/work/cs-rz/frames/f5.jpg" },
            { t: "Mediator in action", d: "Sarah verifies the property over a live video call, sharing photos, videos, and the exact location.", img: "/work/cs-rz/frames/f6.jpg" },
            { t: "Approval & payment", d: "John reviews the verified info, feels satisfied, approves the place, and pays securely in the app.", img: "/work/cs-rz/frames/f7.jpg" },
            { t: "Stress-free & prepared", d: "Relaxed and smiling, John packs with confidence, checking off a list for his new home.", img: "/work/cs-rz/frames/f8.jpg" },
          ],
        },
        {
          type: "image",
          title: "Low-fidelity wireframes",
          body:
            "We explored layout and flow with low-fidelity wireframes before committing to any visual design.",
          src: "/work/cs-rz/wireframes.jpg",
          alt: "Renteeez wireframes",
        },
        {
          type: "image",
          title: "Logo & colours",
          body:
            "A confident purple identity built from the brand’s “r”, a roofline for a safe home, and a clap marking the moment a customer finds the right place.",
          src: "/work/cs-rz/logo.jpg",
          alt: "Renteeez logo and colours",
        },
        {
          type: "image",
          title: "Components",
          body:
            "A reusable component library — navigation states, buttons, listing cards, toggles and tabs — kept the interface consistent across 65+ screens.",
          src: "/work/cs-rz/components.jpg",
          alt: "Renteeez Figma components",
        },
        {
          type: "gallery",
          title: "High-fidelity design",
          body:
            "The final UI is clean and trust-first — clear listings, a mediator chat and video flow, shortlists, earnings for mediators, and accommodation management for tenants.",
          images: [
            "/work/cs-rz/hifi-c.jpg",
            "/work/cs-rz/hifi-a.jpg",
            "/work/cs-rz/hifi-b.jpg",
          ],
        },
      ],
    },
  },
];
