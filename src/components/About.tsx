import Icons from "./ui/icons";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col-reverse items-center justify-center py-8 mx-auto border-b-2 sm:flex-row sm:items-start scroll-mt-10"
    >
      <div className="flex flex-col items-center justify-center px-6 mt-6 sm:mt-0 sm:w-1/2">
        <h2 className="my-2 mb-6 text-3xl font-bold"> Tech stack:</h2>
        <Icons />
      </div>
      <div className="flex flex-col px-6 sm:w-1/2">
        <h2 className="my-2 text-3xl font-bold text-center">About me</h2>
        <div className="text-sm text-justify text-zinc-400">
          <p>
            Hello, I'm Karol Rynkowski, a frontend developer fueled by a passion
            for crafting delightful digital experiences. In my coding
            adventures, I am constantly exploring new technologies and
            methodologies. From the basics to cutting-edge frameworks, I thrive
            on the excitement of staying ahead of the curve.
          </p>
          <p>
            I love traveling to new places, reading about the latest tech news,
            and occasionally hitting the gym for a workout. It is the mix of
            adventure, staying up-to-date and keeping fit that keeps me excited!
          </p>
          <p>
            Eager to contribute and make a mark, I am ready to tackle real-world
            challenges and bring creative solutions to the table. Join me on
            this exciting journey of innovation and growth. I'm enthusiastic
            about connecting with like-minded individuals, collaborating on
            projects, and making a meaningful impact in the world of frontend
            development.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
