import Tooltip from "./tooltip";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col sm:flex-row justify-center items-center  py-24 border-b-2 mx-auto"
    >
      <div className="flex flex-col text-center my-4 px-6 sm:w-1/2">
        <h2 className="font-bold texl-xl my-2"> Tech stack:</h2>
        <div className="text-7xl flex flex-wrap items-center justify-center gap-6">
          <Tooltip message={"HTML"}>
            <i className="devicon-html5-plain-wordmark colored"></i>
          </Tooltip>
          <i className="devicon-css3-plain-wordmark colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-react-original colored"></i>
          <i className="devicon-tailwindcss-original-wordmark colored"></i>
          <i className="devicon-typescript-plain colored"></i>
          <i className="devicon-photoshop-line colored"></i>
          <i className="devicon-git-plain colored"></i>
        </div>
      </div>
      <div className="flex flex-col px-6 sm:w-1/2">
        <h2 className="font-bold texl-xl my-2 text-center">About me</h2>
        <p className="text-zinc-400 text-sm">
          <p>
            👋 Hello, I'm [Your Name], a passionate frontend developer with a
            keen eye for clean and intuitive design. As a relentless
            problem-solver, I thrive on transforming complex ideas into seamless
            user experiences. My journey in web development is fueled by a
            commitment to creating visually stunning, yet functional, digital
            spaces.
          </p>
          <p>
            🚀 With a background in [Your Educational Background], I bring a
            unique blend of technical expertise and creative flair to every
            project. My hands-on experience spans a range of modern
            technologies, including [Key Technologies], enabling me to build
            responsive and dynamic web applications.{" "}
          </p>
          <p>
            🌐 In the ever-evolving landscape of web development, I find joy in
            staying on the cutting edge of emerging trends and technologies.
            Whether it's crafting elegant user interfaces, optimizing
            performance, or collaborating with cross-functional teams, I am
            dedicated to delivering solutions that not only meet but exceed
            expectations.
          </p>
          <p>
            🛠️ Explore my portfolio to witness the fusion of code and
            creativity. Each project reflects my commitment to crafting
            memorable digital experiences that leave a lasting impact. Let's
            connect and embark on a journey to elevate your online presence.
          </p>
        </p>
      </div>
    </div>
  );
}
export default About;
