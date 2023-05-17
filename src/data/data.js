import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  nextjs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "Project1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    tags: [
      {
        name: "tec1",
        color: "white",
      },
      {
        name: "tec2",
        color: "red",
      },
      {
        name: "tec3",
        color: "green",
      },
    ],
    image: git,
    source_code_link: "https://github.com/",
    page_link: "https://facebook.com/",
  },
  {
    name: "Project2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    tags: [
      {
        name: "tec1",
        color: "white",
      },
      {
        name: "tec2",
        color: "red",
      },
      {
        name: "tec3",
        color: "green",
      },
    ],
    image: git,
    source_code_link: "https://github.com/",
    page_link: "https://facebook.com/",
  },
  {
    name: "Project3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    tags: [
      {
        name: "tec1",
        color: "white",
      },
      {
        name: "tec2",
        color: "red",
      },
      {
        name: "tec3",
        color: "green",
      },
    ],
    image: git,
    source_code_link: "https://github.com/",
    page_link: "https://facebook.com/",
  },
];

export { technologies, projects };
