import favflix from "../../assets/favflix.png";
import issuetracker from "../../assets/issuetracker.png";
import app4r3l from "../../assets/app4r3l.png";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
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
const strapi = (
  <img style={{ width: "30px" }} src="src\assets\strapi.jpg" alt="strapi" />
);
const tailwind = (
  <img
    style={{ width: "30px" }}
    src="src\assets\tailwind.jpeg"
    alt="tailwind"
  />
);
const nextJs = (
  <img style={{ width: "30px" }} src="src\assets\nextjs.svg" alt="nextJs" />
);
const postgreSQL = <i class="bx bxl-postgresql"></i>;

export const projectsData = [
  {
    id: 1,
    image: favflix,
    title: "Favflix",
    category: "web",
    description:
      "Favflix lets you watch movie trailers and add your favorite movies to your watchlist. ",
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
    description: "APP4R3L is a fashion e-commerce web application.",
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
