import Icons from "./ui/icons";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col-reverse sm:flex-row justify-center items-center sm:items-start scroll-mt-10 py-8 border-b-2 mx-auto"
    >
      <div className="flex flex-col justify-center items-center px-6 mt-6 sm:mt-0 sm:w-1/2">
        <h2 className="font-bold text-3xl my-2 mb-6"> Tech stack:</h2>
        <Icons />
      </div>
      <div className="flex flex-col px-6 sm:w-1/2">
        <h2 className="font-bold text-3xl my-2 text-center">About me</h2>
        <div className="text-zinc-400 text-sm text-justify">
          <p>
            Hello, I'm Karol Rynkowski, a frontend developer fueled by a passion
            for crafting delightful digital experiences. In my coding
            adventures, I am constantly exploring new technologies and
            methodologies. From the basics to cutting-edge frameworks, I thrive
            on the excitement of staying ahead of the curve.
          </p>
          <p>
            Away from the keyboard, you'll find me at the gym, embracing the
            challenges of a healthy lifestyle. When not lifting weights, I'm a
            travel enthusiast, exploring new places and taking inspiration from
            diverse cultures.
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
