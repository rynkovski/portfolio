function ProjectCard() {
  return (
    <div className="border w-80 h-auto my-2 p-4 flex flex-col">
      <div className="border w-full h-64">
        <img src="" alt="" />
      </div>
      <h2 className="my-2 text-xl">Title</h2>
      <p className="text-zinc-400 text-sm ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, esse.
        Ex sapiente beatae consequuntur molestiae? Earum doloribus esse laborum
        beatae eum ad ipsam omnis a, ea dolorem libero dignissimos natus.
      </p>
      <div className="flex justify-around items-center mt-2">
        <button className="text-sky-700 border border-sky-700 rounded-xl py-3 px-6 text-center focus:bg-slate-500 hover:text-zinc-100 hover:bg-sky-500 my-2 mx-auto">
          Code
        </button>
        <button className="text-zinc-100 bg-sky-700 rounded-xl py-3 px-6 text-center focus:bg-slate-500 hover:bg-sky-500 my-2 mx-auto">
          Live
        </button>
      </div>
    </div>
  );
}
export default ProjectCard;
