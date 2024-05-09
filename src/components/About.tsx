import Icons from "./ui/icons";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col-reverse items-center justify-center py-8 mx-auto border-b-2 sm:flex-row sm:items-start scroll-mt-10"
    >
      <div className="flex flex-col items-center justify-center px-6 mt-6 sm:mt-0 sm:w-1/2">
        <h2 className="my-2 mb-6 text-3xl font-bold"> Skills:</h2>
        <Icons />
      </div>
      <div className="flex flex-col px-6 sm:w-1/2">
        <h2 className="my-2 text-3xl font-bold text-center">About me</h2>
        <div className="flex flex-col items-center justify-center w-4/5 gap-4 mx-auto my-4 text-sm text-justify text-slate-800">
          <p>
            Hey, I'm Karol Rynkowski, a frontend developer who loves making cool
            stuff online. I'm always learning about new tech and ways to make
            things better, from the basics to the latest tools.
          </p>
          <p>
            When I'm not coding, I enjoy exploring new places, keeping up with
            tech news, and hitting the gym. It's all about having fun and
            staying healthy!
          </p>
          <p>
            I'm ready to take on challenges and bring fresh ideas to the table.
            Let's team up, make cool stuff, and have a blast!
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
