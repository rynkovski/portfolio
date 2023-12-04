import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div id="projects" className="flex flex-col items-center py-24 ">
      <h2 className="font-bold texl-xl my-2"> Projects</h2>
      <div className="flex flex-col justify-evenly items-center md:flex-row gap-8 flex-wrap">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
export default Projects;
