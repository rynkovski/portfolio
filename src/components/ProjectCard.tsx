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
    <div className="border w-80 min-h-[500px]  p-4 flex justify-between flex-col rounded-lg">
      <div className="flex justify-center items-center min-h-[206px]">
        <a href={linkLive}>
          <img className="border w-full  aspect-[4:3]" src={image} alt="" />
        </a>
      </div>
      <div>
        <h2 className="my-2 text-xl">{title}</h2>
        <p className="text-sm text-justify text-slate-500">{text}</p>
      </div>
      <div className="flex flex-wrap gap-1">
        {badges.map((badge) => {
          return <Badge key={badge}>{badge}</Badge>;
        })}
      </div>

      <div className="flex items-center justify-around mt-2">
        <a
          href={linkCode}
          className={`border shadow-md  border-sky-600 rounded-xl py-3 px-6 text-center focus:bg-sky-800  my-2 mx-auto      ${
            linkCode
              ? "cursor-pointer text-sky-700  hover:text-stone-50 hover:bg-sky-500"
              : "cursor-not-allowed text-slate-700 bg-stone-50  border-slate-700"
          }`}
        >
          Code
        </a>
        <a
          href={linkLive}
          className={` shadow-md border  bg-sky-600 rounded-xl  py-3 px-6 text-center focus:bg-sky-800  my-2 mx-auto  ${
            linkLive
              ? "cursor-pointer text-stone-50 hover:bg-sky-500"
              : "cursor-not-allowed text-slate-700 bg-stone-50  border-slate-700"
          }`}
        >
          Live
        </a>
      </div>
    </div>
  );
}
export default ProjectCard;
