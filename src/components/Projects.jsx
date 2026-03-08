import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section className="projects">
      {projects.map((project) => (
        <article className="project-container" key={project.id}>
          <figure className="img-container">
            <img src={project.previewImg} alt="" className="project-img" />
          </figure>
          <h1 className="project-name-date">
            <span className="project-name">{project.title}</span>
            <span className="project-date">{project.year}</span>
          </h1>
        </article>
      ))}
    </section>
  );
};

export default Projects;
