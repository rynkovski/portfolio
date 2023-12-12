function Hero() {
  return (
    <div className="flex flex-col-reverse sm:flex-row sm:justify-around items-center border-b-2 pt-24 pb-8 px-8 gap-8 sm:gap-0">
      <div className="flex flex-col items-center justify-center text-center sm:w-1/2">
        <p className="text-2xl font-semibold sm:text-3xl md:text-4xl">
          Hello everyone! 👋🏻
        </p>
        <h2 className="text-xl sm:text-2xl text-zinc-500">
          I'm Karol Rynkowski, a passionate self-taught frontend developer!
        </h2>
        <p className="text-zinc-400">
          Scroll down to learn more about me and my projects!
        </p>
        <a
          href="#contact"
          className="text-zinc-100 bg-sky-700 rounded-xl py-3 px-6 text-center focus:bg-zinc-500 hover:bg-sky-500 my-2 mx-auto"
        >
          Contact me
        </a>
      </div>
      <div className="w-64 relative flex items-center justify-center">
        <img
          className="rounded-3xl shadow-lg"
          src="./images/photo.jpg"
          alt="Karol's photo"
        />
      </div>
    </div>
  );
}
export default Hero;
