import app4r3l from "../../assets/app4r3l.png";
import favflix from "../../assets/favflix.png";
import issuetracker from "../../assets/issuetracker.png";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiStrapi } from "react-icons/si";
// import Work4 from "../../assets/work4.jpg";
// import Work5 from "../../assets/work5.jpg";

const react = (
  <i className="bx bxl-react" style={{ color: "rgb(102,219,251)" }}></i>
);
const css = (
  <i className="bx bxl-css3" style={{ color: "rgb(35,141,197)" }}></i>
);
const firebase = (
  <i className="bx bxl-firebase" style={{ color: "rgb(255,204,47)" }}></i>
);
const strapi = <SiStrapi style={{ fontSize: "1.5rem", color: "purple" }} />;
const tailwind = (
  <SiTailwindcss style={{ fontSize: "1.5rem", color: "skyblue" }} />
);
const nextJs = <TbBrandNextjs style={{ fontSize: "1.5rem", color: "gray" }} />;
const postgreSQL = <i class="bx bxl-postgresql"></i>;

export const projectsData = [
  {
    id: 1,
    image: favflix,
    title: "Favflix",
    category: "web",
    description:
      "Favflix is integrated with The movie database(TMDB) to get you the latest movie trailers and lets you save your fav movies to a personalized watchlist. Built with React, Tailwind CSS and Firebase",
    stack: [react, css, tailwind, firebase],
    link: "https://fav-flix.netlify.app/",
  },
  {
    id: 2,
    image: issuetracker,
    title: "Issue Tracker",
    category: "web",
    description:
      "Modern Issue Tracking app built with NextJS, Tailwind CSS, RadixUI, Postgres and Prisma. Provides CRUD functionality coupled with Authentication and Authorization",
    stack: [postgreSQL, tailwind, css, nextJs],
    link: "https://dvke-issue-tracker.netlify.app/",
  },
  {
    id: 3,
    image: app4r3l,
    title: "APP4R3L",
    category: "design",
    description: "APP4R3L is a full-stack fashion e-commerce web application.",
    stack: [react, tailwind, css, strapi],
  },
];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "web",
  },
  {
    name: "app",
  },
  {
    name: "design",
  },
];
