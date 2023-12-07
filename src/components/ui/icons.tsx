import Tooltip from "./tooltip";
const icons = [
  { message: "HTML", name: "devicon-html5-plain-wordmark colored" },
  { message: "CSS", name: "devicon-css3-plain-wordmark colored" },
  { message: "JavaScript", name: "devicon-javascript-plain colored" },
  { message: "React", name: "devicon-react-original colored" },
  {
    message: "TailwindCSS",
    name: "devicon-tailwindcss-original-wordmark colored",
  },
  { message: "TypeScript", name: "devicon-typescript-plain colored" },
  { message: "Photoshop", name: "devicon-photoshop-line colored" },
  { message: "GIT", name: "devicon-git-plain colored" },
];
function Icons() {
  return (
    <div className="text-7xl flex flex-wrap items-center justify-center gap-6">
      {icons.map((icon) => {
        return (
          <Tooltip key={icon.message} message={icon.message}>
            <i className={icon.name}></i>
          </Tooltip>
        );
      })}
    </div>
  );
}
export default Icons;
