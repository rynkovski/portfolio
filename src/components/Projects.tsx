import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div id="projects" className="flex flex-col items-center py-8 scroll-mt-10">
      <h2 className="font-bold text-3xl my-2"> Projects</h2>
      <div className="flex flex-col justify-evenly items-center md:flex-row gap-8 flex-wrap">
        <ProjectCard
          image={"./images/portfolio-website.png"}
          title="Portfolio"
          text="This is my portfolio website. I have used React, TailwindCSS and Typescript."
          linkCode="https://github.com/rynkovski/portfolio"
          linkLive="https://karolrynkowski.vercel.app/"
        />
        <ProjectCard
          image={"./images/gearwheel-frontend.png"}
          title="Gearwheel"
          text="This is my cycling store website. I have used shadcn/ui library with React, TailwindCSS and Typescript."
          linkCode="https://github.com/KITHProject/gearwheel-frontend/tree/develop_v1"
          linkLive="https://gearwheel-frontend.vercel.app/"
        />
        <ProjectCard
          image={"./images/rest-countries-api.png"}
          title="Rest Countries API"
          text="This is my solution to Frontend Mentor Challenge. I have used React, TailwindCSS and Typescript."
          linkCode="https://github.com/rynkovski/rest-countries-api"
        />
        <ProjectCard
          image={"./images/task-management.png"}
          title="Task Management App"
          text="This is kanban board type project (Trello clone). I have used React, TailwindCSS and Typescript."
          linkCode="https://github.com/rynkovski/task-management"
        />
        <ProjectCard
          image={"./images/snake-game.png"}
          title="Snake Game"
          text="Simpe snake game made in vanilla javascript"
          linkCode="https://github.com/rynkovski/snake-game"
          linkLive="https://snake-game-rynkowskis-projects.vercel.app/"
        />
      </div>
    </div>
  );
}
export default Projects;
