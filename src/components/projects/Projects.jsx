import "./Projects.css";
import RecentProjects from "./RecentProjects";

const Projects = () => {
  return (
    <section className="projects section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Recent Projects</span>

      <RecentProjects />
    </section>
  );
};

export default Projects;
