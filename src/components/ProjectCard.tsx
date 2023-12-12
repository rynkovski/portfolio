type Image = {
  image?: string;
  title?: string;
  text?: string;
  linkCode?: string;
  linkLive?: string;
};

function ProjectCard({ image, title, text, linkCode, linkLive }: Image) {
  return (
    <div className="border w-80 h-[400px] my-2 p-4 flex justify-between flex-col">
      <img className="border w-full aspect-[4:3]" src={image} alt="" />
      <h2 className="my-2 text-xl">{title}</h2>
      <p className=" text-zinc-400 text-sm text-justify">{text}</p>
      <div className="flex justify-around items-center mt-2">
        <a
          href={linkCode}
          className={`text-sky-700 border border-sky-700 rounded-xl py-3 px-6 text-center focus:bg-slate-500 hover:text-zinc-100 hover:bg-sky-500 my-2 mx-auto      ${
            linkCode ? "cursor-pointer" : "cursor-not-allowed"
          }`}
        >
          Code
        </a>
        <a
          href={linkLive}
          className={`text-zinc-100 bg-sky-700 rounded-xl py-3 px-6 text-center focus:bg-slate-500 hover:bg-sky-500 my-2 mx-auto  ${
            linkLive ? "cursor-pointer" : "cursor-not-allowed"
          }`}
        >
          Live
        </a>
      </div>
    </div>
  );
}
export default ProjectCard;
