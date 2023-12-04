function Hero() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-around items-center border-b-2  py-4 px-8">
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
        <button className="text-zinc-100 bg-sky-700 rounded-xl py-3 px-6 text-center focus:bg-zinc-500 hover:bg-sky-500 my-2 mx-auto">
          Contact me
        </button>
      </div>
      <div className="w-64 relative flex items-center justify-center">
        <img
          className="rounded-3xl shadow-lg"
          src="./image.jpg"
          alt="Karol's photo"
        />
      </div>
    </div>
  );
}
export default Hero;
