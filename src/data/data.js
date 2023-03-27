import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  threejs,
  camera,
  joystick,
  book,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
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
  {
    id: "resume",
    title: "Resume",
  },
];

const hobbies = [
  {
    title: "Photography ",
    icon: camera,
    description:
      "I'm driven by my passion for capturing the world's beauty through my lens. With a keen eye for detail and composition, I'm always seeking new ways to improve my skills and immortalize moments. My love for photography inspires me to explore various genres, connect with fellow enthusiasts, and share my unique perspective with others.",
  },
  {
    title: "Reading",
    icon: book,
    description:
      "Reading is one of my most cherished hobbies. It provides me with the opportunity to immerse myself in various worlds and ideas, allowing my imagination to explore uncharted territories. I particularly enjoy delving into philosophical works that provoke deep thought and introspection, as well as captivating sci-fi novels that transport me to futuristic realms filled with adventure.",
  },
  {
    title: "Gamer",
    icon: joystick,
    description:
      "I'm a huge fan of MOBA and RPG games, always diving into the rich worlds and strategies they bring. I love to team up with others, sharing laughs and good times while we tackle challenges together. As a gamer, I'm all about exploring the stories these games tell and making awesome connections with my fellow players along the way.",
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
    name: "Three JS",
    icon: threejs,
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

export { technologies, hobbies, projects };
