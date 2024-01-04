import ProjectCard from "./ProjectCard";

const ProjectsData = [
  {
    image: "./images/gearwheel-frontend.png",
    title: "Gearwheel",
    text: "Admin panel for cycling store.",
    badges: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
      "zustand",
      "React Query",
    ],
    linkCode:
      "https://github.com/KITHProject/gearwheel-frontend/tree/develop_v1",
    linkLive: "https://gearwheel-frontend.vercel.app/",
  },
  {
    image: "./images/rest-countries-api.png",
    title: "Rest Countries API",
    text: "This is my solution to Frontend Mentor Challenge.",
    badges: ["React", "TypeScript", "TailwindCSS"],
    linkCode: "https://github.com/rynkovski/rest-countries-api",
  },
  // {
  //   image: "./images/task-management.png",
  //   title: "Task Management App",
  //   text: "Trello clone project on which I'm currently working on.",
  //   badges: ["React", "TypeScript", "TailwindCSS"],
  // },
];

function Projects() {
  return (
    <div id="projects" className="flex flex-col items-center py-8 scroll-mt-10">
      <h2 className="my-2 text-3xl font-bold"> Projects</h2>
      <div className="flex flex-col flex-wrap items-center gap-8 justify-evenly md:flex-row">
        {ProjectsData.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              image={project.image}
              title={project.title}
              text={project.text}
              badges={project.badges}
              linkCode={project.linkCode}
              linkLive={project.linkLive}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Projects;
