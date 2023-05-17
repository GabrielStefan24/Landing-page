import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  nextjs,
  planet,
  pokemon,
  tictactoe,
  cartoon,
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
    name: "Cartoon Network",
    description:
      "Cartoon Network is an interactive web application designed for cartoon enthusiasts. It provides a library of cartoon movies that users can explore, watch, and even add to their favorites list. The application comes with an advanced filtering system that lets users sort movies by various categories",
    tags: [
      {
        name: "React",
        color: "white",
      },
      {
        name: "Next",
        color: "red",
      },
      {
        name: "Mongo",
        color: "green",
      },
      {
        name: "Prisma",
        color: "purple",
      },
    ],
    image: cartoon,
    source_code_link: "https://github.com/GabrielStefan24/cartoon-network",
    page_link: "https://cartoon-network-rust.vercel.app/auth",
  },
  {
    name: "Planet-facts",
    description:
      "Planet Facts is an interactive web application that provides detailed insights into our solar system's planets. Each planet has a dedicated page where users can explore its overview, internal structure, and surface geology, offering an engaging way to learn about celestial bodies.",
    tags: [
      {
        name: "React",
        color: "white",
      },
      {
        name: "SCSS",
        color: "red",
      },
      {
        name: "HTML",
        color: "green",
      },
    ],
    image: planet,
    source_code_link: "https://github.com/GabrielStefan24/planet-facts",
    page_link: "https://planet-facts-tau.vercel.app/",
  },
  {
    name: "Pokedex",
    description:
      " Pokedex is an interactive web application built using React.js that allows users to search and learn more about their favorite Pokemon. The application leverages the comprehensive PokeAPI to fetch and display detailed information about each Pokemon, including their types, abilities, stats, and more.",
    tags: [
      {
        name: "React",
        color: "white",
      },
      {
        name: "Tailwind",
        color: "red",
      },
      {
        name: "Framer-Motion",
        color: "green",
      },
    ],
    image: pokemon,
    source_code_link: "https://github.com/GabrielStefan24/PokeDex",
    page_link: "https://pokedex-beige-xi.vercel.app/",
  },
  {
    name: "Tic Tac Toe",
    description:
      "Tic Tac Toe is a dynamic web game that adapts to your device's screen size. It provides a seamless interaction with hover states for all elements and offers either a solo match against AI or a duel with another player on the same device, creating an engaging digital adaptation of the classic strategy game.",
    tags: [
      {
        name: "Javascript",
        color: "white",
      },
      {
        name: "HTML",
        color: "red",
      },
      {
        name: "CSS",
        color: "green",
      },
    ],
    image: tictactoe,
    source_code_link: "https://github.com/GabrielStefan24/Tic-Tac-Toe-Game",
    page_link: "https://tic-tac-toe-game-silk-tau.vercel.app/",
  },
];

export { technologies, projects };
