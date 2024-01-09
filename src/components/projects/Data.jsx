import Work1 from "../../assets/work1.jpg";
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

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Web design",
    category: "web",
    description:
      "This is a project I created for my portfolio. It will help showcase my dev skills while applying for jobs.",
    stack: [react, tailwind, css, firebase, strapi],
  },
  {
    id: 2,
    image: Work2,
    title: "App movil",
    category: "app",
    description:
      "This is a project I created for my portfolio. It will help showcase my dev skills while applying for jobs.",
    stack: [react, tailwind, css, firebase, strapi],
  },
  {
    id: 3,
    image: Work3,
    title: "Brand design",
    category: "design",
    description:
      "This is a project I created for my portfolio. It will help showcase my dev skills while applying for jobs.",
    stack: [react, tailwind, css, firebase, strapi],
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
