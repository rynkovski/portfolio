function Hero() {
  return (
    <div className="flex flex-col-reverse items-center gap-8 px-8 pt-24 pb-8 border-b-2 sm:flex-row sm:justify-around sm:gap-0">
      <div className="flex flex-col items-center justify-center text-center sm:w-1/2">
        <p className="text-2xl font-semibold sm:text-3xl md:text-4xl">
          Hello everyone! 👋🏻
        </p>
        <h2 className="text-xl sm:text-2xl text-slate-500">
          I'm Karol Rynkowski, a passionate self-taught frontend developer!
        </h2>
        <p className="text-slate-400">
          Scroll down to learn more about me and my projects!
        </p>
        <a
          href="#contact"
          className="px-6 py-3 mx-auto my-2 text-center bg-sky-600 text-stone-50 rounded-xl focus:bg-sky-800 hover:bg-sky-500"
        >
          Contact me
        </a>
      </div>
      <div className="relative flex items-center justify-center w-64">
        <img
          className="shadow-lg rounded-3xl"
          src="./images/photo.jpg"
          alt="Karol's photo"
        />
      </div>
    </div>
  );
}
export default Hero;
