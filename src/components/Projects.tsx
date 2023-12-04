import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col md:flex-row justify-evenly items-center gap-2 flex-wrap"
    >
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}
export default Projects;
