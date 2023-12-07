import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div id="projects" className="flex flex-col items-center py-12">
      <h2 className="font-bold text-3xl my-8"> Projects</h2>
      <div className="flex flex-col justify-evenly items-center md:flex-row gap-8 flex-wrap">
        <ProjectCard image={"./portfolio_project.png"} />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
export default Projects;
