const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
  {
    name: "Pricing",
    link: "#pricing",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "", label: "Years Coding" },
  { value: 15, suffix: "", label: "Satisfied Clients" },
  { value: 15, suffix: "", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "Next.js & React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "TypeScript Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Node.js & Express Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "PostgreSQL & MongoDB",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "AWS & Systems Architecture",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Next.js & React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "TypeScript Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js & Express Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "PostgreSQL & MongoDB",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "AWS & Systems Architecture",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Spearheading the end-to-end development of LigiOpen to revolutionize local sports management. Architecting a scalable frontend interface using React.js and Next.js.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo_jay4t.png",
    title: "Lead Full Stack Developer — JAY4T",
    date: "October 2025 - March 2026",
    responsibilities: [
      "Spearheading the end-to-end development of LigiOpen to revolutionize local sports management.",
      "Architecting a scalable frontend interface using React.js and Next.js for real-time match statistics.",
      "Engineering robust backend solutions using Node.js, Express.js, and PostgreSQL to handle high-traffic user data and league scheduling.",
    ],
  },
  {
    review: "Led the full technical delivery of WOW Reloaded, a digital streaming platform. Architected and deployed the backend using Node.js, Express.js, and MongoDB, hosting on AWS.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo_wow.png",
    title: "Lead Developer (Technical Unit) — Wow Radio",
    date: "June 2025 - September 2025",
    responsibilities: [
      "Led the full technical delivery of WOW Reloaded, a digital streaming platform.",
      "Architected and deployed the backend using Node.js, Express.js, and MongoDB, hosting the infrastructure on AWS.",
      "Designed and managed detailed project workplans, including Gantt charts and task breakdowns.",
      "Built and implemented quality assurance frameworks, including test plans and documented results.",
      "Oversaw the MVP launch and delivered UX/UI improvements based on user testing.",
    ],
  },
  {
    review: "Supported core technology infrastructure, ensuring seamless operations across devices and networks. Assisted in network configuration and monitored performance.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo_mpesa.png",
    title: "Information Technology Specialist — MPESA Foundation Academy",
    date: "April 2025 - August 2025",
    responsibilities: [
      "Supported core technology infrastructure, ensuring seamless operations across devices and networks.",
      "Assisted in network configuration (switches, routers) and monitored performance for optimization.",
      "Managed Sophos firewall to monitor traffic and enforce security policies.",
      "Performed hardware/software maintenance for PCs and MacBooks and supported Google Workspace administration.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Nathan Hammond",
    mentions: "Holygoats",
    review:
      "I can’t say enough good things about James. He was able to take our complex project requirements and turn them into a seamless, functional website for Holygoats. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Ken",
    mentions: "Richworld Safaris",
    review:
      "Working with James was a fantastic experience. He transformed our booking system into a modern, user-friendly platform for Richworld Safaris. His attention to detail and commitment to quality are unmatched.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Mary Kala",
    mentions: "Maka Grace Travel and Tours",
    review:
      "Collaborating with James was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. If you're seeking to elevate your travel platform, James is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "James Kariuki",
    mentions: "Weezdom Utilities",
    review:
      "James was a pleasure to work with. He turned our requirements into a fresh, intuitive utilities platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Prince",
    mentions: "Borderless Afro Legal Hub",
    review:
      "James’s expertise in web development is truly impressive. He delivered a robust and scalable blog solution for our legal hub, and our online engagement has significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
];

const whatsappNumber = "254791433046";

const pricingTabs = [
  { id: "websites", label: "Websites" },
  { id: "qa", label: "QA Testing" },
  { id: "support", label: "Support & Add-ons" },
];

const pricingWebsitePackages = [
  {
    name: "Starter Website",
    tagline:
      "Small businesses and organisations that need a clean online presence",
    price: "50,000",
    period: "",
    hasFrom: true,
    included: [
      "Up to 5 pages, mobile-responsive",
      "Contact form and WhatsApp link",
      "Basic SEO and Google Analytics",
    ],
    delivery: "1–2 weeks",
    liveNames: [{ name: "Holygoats", href: "https://holygoats.org/" }],
    buttonText: "Get a quote",
    buttonStyle: "secondary",
    popular: false,
  },
  {
    name: "Business Website",
    tagline: "Firms that want a premium site they can update themselves",
    price: "90,000",
    period: "",
    hasFrom: true,
    included: [
      "Up to 10 pages, custom design",
      "Admin dashboard for content and blog",
      "SEO, analytics and business email setup",
      "2 revision rounds",
      "30 days of support",
    ],
    delivery: "3–4 weeks",
    liveNames: [{ name: "Borderless Afro Legal Hub", href: "https://www.borderlessafrolegalhub.com/" }, { name: "Washlab Consult", href: "https://washlab.org/" }],
    buttonText: "Get a quote",
    buttonStyle: "primary",
    popular: true,
  },
  {
    name: "Booking & E-commerce",
    tagline: "Businesses that sell or take bookings online",
    price: "180,000",
    period: "",
    hasFrom: true,
    included: [
      "Everything in Business",
      "Booking engine or online store",
      "M-Pesa and card payments",
      "Dashboard with invoicing and analytics",
      "60 days of support",
    ],
    delivery: "5–8 weeks",
    liveNames: [{ name: "Richworld Safaris", href: "https://www.richworldsafaris.com/" }, { name: "Maka Grace Travel", href: "https://www.makagracetravel.co.ke/" }, { name: "Weezdom Utilities", href: "#work" }],
    buttonText: "Get a quote",
    buttonStyle: "secondary",
    popular: false,
  },
];

const pricingCustomPlatformBar = {
  title: "Custom Platforms",
  text: "Web apps, portals and platforms like LigiOpen and WOW Reloaded. Quoted after a discovery call.",
  price: "Let's talk",
  buttonText: "Book a discovery call",
};

const pricingQAIntro =
  "I test websites and apps before they reach your customers, and I can fix what I find.";

const pricingQAPackages = [
  {
    name: "Website QA Audit",
    tagline: "Existing sites that feel buggy, slow or broken on mobile",
    price: "20,000",
    period: "",
    hasFrom: true,
    included: [
      "Functionality, forms and links checked",
      "Mobile and cross-browser testing",
      "Speed and basic accessibility review",
      "Prioritised bug report with screenshots",
    ],
    delivery: "3–5 days",
    liveText: null,
    buttonText: "Request an audit",
    buttonStyle: "secondary",
    popular: false,
  },
  {
    name: "Pre-launch QA",
    tagline: "Apps and sites about to go live",
    price: "45,000",
    period: "",
    hasFrom: true,
    included: [
      "Written test plan",
      "Test execution and bug tracking",
      "Retesting after fixes",
      "Sign-off report before launch",
    ],
    delivery: "Scoped per project",
    liveText: "WOW Reloaded (test plans and documented results)",
    buttonText: "Get a quote",
    buttonStyle: "primary",
    popular: true,
  },
  {
    name: "QA by the Day",
    tagline: "Teams that need a tester during a sprint or release",
    price: "10,000",
    period: "/ day",
    hasFrom: false,
    included: [
      "Test plans and execution",
      "Bug reports in your tracker",
      "Daily progress updates",
    ],
    delivery: "Booked by the day",
    liveText: null,
    buttonText: "Book days",
    buttonStyle: "secondary",
    popular: false,
  },
];

const pricingAuditFixBar = {
  title: "Audit + Fix",
  text: "Don't just get a list of bugs. I find them and fix them, quoted as one package.",
  price: "Quoted together",
  buttonText: "Get a quote",
};

const pricingCarePlan = {
  name: "Care Plan",
  tagline: "Keep your site fast, secure and up to date after launch.",
  price: "7,500",
  period: "/ month",
  hasFrom: true,
  included: [
    "Software and plugin updates",
    "Regular backups",
    "Uptime and security monitoring",
    "Small edits, up to 2 hours per month",
  ],
  buttonText: "Start a care plan",
  buttonStyle: "primary",
};

const pricingAddOns = [
  { name: "Extra page", price: "KES 5,000" },
  { name: "Second language", price: "from KES 15,000" },
  { name: "Website migration", price: "from KES 20,000" },
  { name: "Extra revision round", price: "KES 5,000" },
  { name: "Content writing", price: "Quoted separately" },
];

const pricingFooterNote =
  "50% deposit to start · 30% at preview · 20% on launch · Domain and hosting billed at cost.";

const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/james-nyangada-218399272/",
  },
  {
    name: "github",
    imgPath: "/images/github.svg",
    link: "https://github.com/James-Nyangada",
  },
  {
    name: "dribbble",
    imgPath: "/images/dribbble.svg",
    link: "#",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  whatsappNumber,
  pricingTabs,
  pricingWebsitePackages,
  pricingCustomPlatformBar,
  pricingQAIntro,
  pricingQAPackages,
  pricingAuditFixBar,
  pricingCarePlan,
  pricingAddOns,
  pricingFooterNote,
};
