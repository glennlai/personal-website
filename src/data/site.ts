export const site = {
  name: "Chun Weng LAI (Glenn)",
  title: "Chun Weng LAI (Glenn) | Portfolio",
  description:
    "Professional portfolio website showcasing work experience and side projects.",
  role: "Software Engineer",
  hero: {
    headline: "Building reliable products with thoughtful engineering.",
    lead: "I design and ship scalable software that solves real business problems. This site highlights my experience, selected projects, and the impact of my work.",
    profile: [
      "Based in Sydney, Australia",
      "Open to new opportunities",
      "7+ years in software development",
      "Focused on product and quality",
    ],
  },
  experience: [
    {
      title: "Software Engineer · Service NSW | Department of Customer Service",
      period: "February 2023 - Present",
      highlights: [
        "Led development of internal platform used by 50+ teams.",
        "Reduced page load time by 35% through performance work.",
        "Mentored engineers and improved code review standards.",
      ],
    },
    {
      title: "Senior Software Engineer · HCL Technologies Malaysia",
      period: "October 2021 - August 2022",
      highlights: [
        "Built core APIs and frontend features for customer dashboard.",
        "Improved release reliability with automated testing.",
        "Partnered with design and product to deliver key initiatives.",
      ],
    },
    {
      title: "Business & Integration Arch Senior Analyst · HCL Technologies Malaysia",
      period: "October 2021 - August 2022",
      highlights: [
        "Built core APIs and frontend features for customer dashboard.",
        "Improved release reliability with automated testing.",
        "Partnered with design and product to deliver key initiatives.",
      ],
    },
    {
      title: "Business & Integration Arch Analyst · HCL Technologies Malaysia",
      period: "October 2021 - August 2022",
      highlights: [
        "Built core APIs and frontend features for customer dashboard.",
        "Improved release reliability with automated testing.",
        "Partnered with design and product to deliver key initiatives.",
      ],
    },
  ],
  projects: [
    {
      name: "Project One",
      description:
        "A full-stack app that helps users track habits with analytics and reminders.",
      stack: "React · Node.js · PostgreSQL",
      href: "#",
    },
    {
      name: "Project Two",
      description:
        "An AI-assisted writing tool that improves tone and clarity for technical docs.",
      stack: "TypeScript · Next.js · OpenAI API",
      href: "#",
    },
    {
      name: "Project Three",
      description:
        "A mobile-first event planner with RSVP workflows and team collaboration.",
      stack: "Vue · Firebase · Cloud Functions",
      href: "#",
    },
  ],
  skills: [
    "JavaScript / TypeScript",
    "React / Next.js",
    "Node.js / REST APIs",
    "SQL / PostgreSQL",
    "AWS / Cloud Infrastructure",
    "Testing / CI-CD",
  ],
  contact: {
    intro:
      "I am currently open to software engineering opportunities. Feel free to reach out.",
    links: [
      { label: "Email", value: "glcw1996@gmail.com", href: "mailto:glcw1996@gmail.com" },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/yourname",
        href: "https://linkedin.com/in/yourname",
      },
      {
        label: "GitHub",
        value: "github.com/glennlai",
        href: "https://github.com/glennlai",
      },
    ],
  },
  nav: [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
