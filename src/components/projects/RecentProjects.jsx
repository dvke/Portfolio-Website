import { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import Modal from "../modal/Modal";
import ProjectItems from "./ProjectItems";

const RecentProjects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  // const handleClick = (e, index) => {
  //   setItem({ name: e.target.textContent });
  //   setActive(index);
  // };

  return (
    <>
      {/* <div className="project__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              key={index}
              className={
                active === index
                  ? "active-project project__item"
                  : "project__item"
              }
            >
              {item.name}
            </span>
          );
        })}
      </div> */}
      <div className="project__container container grid">
        {projects.map((item) => {
          return <ProjectItems item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default RecentProjects;
