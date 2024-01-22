import Tooltip from "./tooltip";
const icons = [
  { message: "JavaScript", name: "devicon-javascript-plain colored" },
  { message: "TypeScript", name: "devicon-typescript-plain colored" },
  { message: "React", name: "devicon-react-original colored" },
  { message: "Next.js", name: "devicon-nextjs-original-wordmark colored" },
  { message: "Firebase", name: " devicon-firebase-plain colored" },
  { message: "GIT", name: "devicon-git-plain colored" },

  {
    message: "TailwindCSS",
    name: "devicon-tailwindcss-original-wordmark colored",
  },
  { message: "MaterialUI", name: "devicon-materialui-plain colored" },
  { message: "Photoshop", name: "devicon-photoshop-line colored" },
];
function Icons() {
  return (
    <div className="grid grid-cols-3 gap-8 text-7xl md:grid-rows-2">
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
