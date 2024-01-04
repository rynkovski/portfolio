import Badge from "./ui/badge";

type ProjectCard = {
  image?: string;
  title?: string;
  text?: string;
  badges: string[];
  linkCode?: string;
  linkLive?: string;
};

function ProjectCard({
  image,
  title,
  text,
  badges,
  linkCode,
  linkLive,
}: ProjectCard) {
  return (
    <div className="border w-80 h-[400px] my-2 p-4 flex justify-between flex-col">
      <a href={linkLive}>
        <img className="border w-full aspect-[4:3]" src={image} alt="" />
      </a>
      <h2 className="my-2 text-xl">{title}</h2>
      <p className="text-sm text-justify text-zinc-400">{text}</p>
      <div className="flex flex-wrap gap-1">
        {badges.map((badge) => {
          return <Badge key={badge}>{badge}</Badge>;
        })}
      </div>

      <div className="flex items-center justify-around mt-2">
        <a
          href={linkCode}
          className={`border shadow-md  border-sky-700 rounded-xl py-3 px-6 text-center focus:bg-sky-800  my-2 mx-auto      ${
            linkCode
              ? "cursor-pointer text-sky-700  hover:text-zinc-100 hover:bg-sky-500"
              : "cursor-not-allowed text-black bg-zinc-100  border-black"
          }`}
        >
          Code
        </a>
        <a
          href={linkLive}
          className={` shadow-md border border-sky-700 bg-sky-700 rounded-xl py-3 px-6 text-center focus:bg-sky-800  my-2 mx-auto  ${
            linkLive
              ? "cursor-pointer text-zinc-100 hover:bg-sky-500"
              : "cursor-not-allowed text-black bg-zinc-100  border-black"
          }`}
        >
          Live
        </a>
      </div>
    </div>
  );
}
export default ProjectCard;
