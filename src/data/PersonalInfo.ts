// export const personalInfo = {
//   name: "Rahul Kumar",
//   title: "Front-End Engineer",
//   description:
//     "I build accessible, pixel-perfect digital experiences for the web.",
// };

// export const socialLinks = [
//   {
//     href: "https://github.com/RaHuL342319",
//     src: "/icons8-github.svg",
//     alt: "GitHub Icon",
//   },
//   {
//     href: "https://linkedin.com/in/rahul-kumar-5aa834171",
//     src: "/icons8-linkedin-64.png",
//     alt: "LinkedIn Icon",
//   },
//   {
//     href: "https://medium.com/@rahul319sinha",
//     src: "/icons8-medium-64.png",
//     alt: "Medium Icon",
//   },
//   {
//     href: "https://x.com/@_rahul_Kumar19",
//     src: "/icons8-x.svg",
//     alt: "X Icon",
//   },
// ];

// export const projects = [
//   {
//     title: "Build a Spotify Connected App",
//     description:
//       "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
//     image: "/api/placeholder/300/200",
//     technologies: ["React", "Node.js", "Express", "Spotify API"],
//     github: "#",
//     live: "#",
//     featured: true,
//   },
//   {
//     title: "Spotify Profile",
//     description:
//       "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
//     image: "/api/placeholder/300/200",
//     technologies: ["React", "Express", "Spotify API", "Heroku"],
//     github: "#",
//     live: "#",
//     stars: 684,
//     featured: true,
//   },
// ];

// export const experience = [
//   {
//     period: "2024 — PRESENT",
//     title: "Senior Frontend Engineer, Accessibility",
//     company: "Klaviyo",
//     description:
//       "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
//     technologies: ["JavaScript", "TypeScript", "React", "Storybook"],
//   },
//   {
//     period: "2018 — 2024",
//     title: "Lead Engineer • Upstatement",
//     subtitle: "Senior Engineer",
//     description:
//       "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Vanderbilt University, The 19th News, and more.",
//     technologies: ["JavaScript", "TypeScript", "React", "WordPress"],
//   },
// ];

import type {
  Experience,
  Language,
  PersonalInfo,
  Project,
  Skill,
  SocialLink,
} from "../types/types";
export const personalInfo: PersonalInfo = {
  name: "Rahul Kumar",
  title: "Frontend Engineer",
  description:
    "I craft scalable, user-friendly web applications with clean and modern code.",
};

export const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/RaHuL342319",
    src: "/icons8-github.svg",
    alt: "GitHub Icon",
  },
  {
    href: "https://linkedin.com/in/rahul-kumar-5aa834171",
    src: "/icons8-linkedin-64.png",
    alt: "LinkedIn Icon",
  },
  {
    href: "https://medium.com/@rahul319sinha",
    src: "/icons8-medium-64.png",
    alt: "Medium Icon",
  },
  {
    href: "https://x.com/@_rahul_Kumar19",
    src: "/icons8-x.svg",
    alt: "X Icon",
  },
];

export const projects: Project[] = [
  {
    title: "Task WebApp",
    description:
      "Developed task management features (CRUD operations, categorization) to enhance productivity. Used Redux for state management, ensuring consistent data synchronization across components. Built responsive UI components with Tailwind CSS for a clean, mobile-friendly interface.",
    image: "/api/placeholder/300/200",
    technologies: ["React.js", "Redux", "Tailwind CSS", "Git", "GitHub"],
    github: "https://github.com/RaHuL342319/Task-App",
    live: "#",
    featured: true,
  },
  {
    title: "Shopping App",
    description:
      "Built a dynamic shopping cart application using React.js, Redux, and Context API with real-time product filtering and sorting. Integrated frontend with dummy product API; handled data fetching, loading states, and error boundaries. Applied responsive design principles to ensure mobile-friendly experience across all devices.",
    image: "/api/placeholder/300/200",
    technologies: [
      "React.js",
      "Redux",
      "Bootstrap 5",
      "Node.js",
      "Express",
      "Git",
    ],
    github: "https://github.com/RaHuL342319/React_Shopping",
    live: "#",
    featured: true,
  },
];

export const experience: Experience[] = [
  {
    period: "01/2024 – Present",
    title: "Senior Systems Engineer",
    company: "Infosys Ltd.",
    location: "Pune, India",
    description:
      "Design and deliver scalable frontend solutions, integrate RESTful APIs, and optimize state management using React.js, Redux, and TypeScript. Lead unit testing and collaborate with cross-functional Agile teams to ship high-quality features.",
    technologies: [
      "React.js",
      "Redux",
      "TypeScript",
      "REST APIs",
      "Jest",
      "React Testing Library",
      "Agile/Scrum",
    ],
    subtitle: "Pune,India",
  },
  {
    period: "11/2021 – 12/2023",
    title: "System Engineer",
    company: "Infosys Ltd.",
    location: "Pune, India",
    description:
      "Developed and maintained frontend features using React.js and JavaScript (ES6+). Improved data flow with Redux Toolkit and Context API, enhanced mobile compatibility, and ensured CI/CD compliance in Agile teams.",
    technologies: [
      "React.js",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "Context API",
      "HTML5",
      "CSS3",
      "Git",
      "GitHub",
      "Agile/Scrum",
    ],
  },
];

export const skills: Skill[] = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Redux",
  "Node.js",
  "HTML5",
  "CSS3",
  "Context API",
  "Jest",
  "React Testing Library",
  "Webpack",
  "Babel",
  "npm",
  "Git",
  "GitHub",
  "Responsive Web Design",
  "REST APIs",
  "Debugging",
  "Clean Code Practices",
  "Agile/Scrum",
];

export const languages: Language[] = [
  { name: "English", proficiency: "Proficient" },
  { name: "Hindi", proficiency: "Native/Bilingual" },
];
