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
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 80, suffix: "+", label: "Completed Projects" },
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
};
