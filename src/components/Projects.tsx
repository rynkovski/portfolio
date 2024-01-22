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
      "Tanstack Query",
      "React Router",
      "REST API",
    ],
    linkCode:
      "https://github.com/KITHProject/gearwheel-frontend/tree/develop_v1",
    linkLive: "https://gearwheel-frontend.vercel.app/",
  },
  {
    image: "./images/rest-countries-api.png",
    title: "Rest Countries API",
    text: "This is my solution to Frontend Mentor Challenge.",
    badges: ["React", "TypeScript", "TailwindCSS", "REST API", "React Router"],
    linkCode: "https://github.com/rynkovski/rest-countries-api",
  },
  {
    image: "./images/Media Shop.jpeg",
    title: "Media shop",
    text: "This is a simple store website.",
    badges: ["HTML", "CSS", "Javascript"],
    linkCode: "https://github.com/rynkovski/media-shop",
    linkLive: "https://media-shop.vercel.app/",
  },
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
