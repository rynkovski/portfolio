import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <nav className="flex w-full justify-between items-center gap-1 px-4">
      <a href="/" className="text-2xl font-bold">
        rynkowski<span className="text-sky-600">.dev</span>
      </a>
      {/* menu */}

      <ul className="text-xl font-semibold hidden md:flex gap-10">
        <li className=" border-sky-600 hover:text-sky-600">
          <a href="#about">About</a>
        </li>
        <li className=" border-sky-600 hover:text-sky-600">
          <a href="#projects">Projects</a>
        </li>
        <li className=" border-sky-600 hover:text-sky-600">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden cursor-pointer z-10">
        {!nav ? (
          <div className="space-y-2  group">
            <span className="block rounded-lg h-1 w-8  bg-black group-hover:bg-sky-600"></span>
            <span className="block rounded-lg h-1 w-8  bg-black group-hover:bg-sky-600"></span>
            <span className="block rounded-lg h-1 w-8  bg-black group-hover:bg-sky-600"></span>
          </div>
        ) : (
          <div className="group">
            <span className="block translate-y-1 rotate-45 rounded-lg h-1 w-8  bg-black group-hover:bg-sky-600"></span>
            <span className="block  -rotate-45 rounded-lg h-1 w-8  bg-black group-hover:bg-sky-600"></span>
          </div>
        )}
      </div>
      {/* mobile menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "fixed top-0 left-0 w-full h-screen bg-zinc-50 flex flex-col justify-center items-center"
        }
      >
        <ul className="flex flex-col text-center gap-8">
          <li className="text-4xl py-6 border-sky-600 hover:text-sky-600">
            <a href="#about">About</a>
          </li>
          <li className="text-4xl py-6 border-sky-600 hover:text-sky-600">
            <a href="#projects">Projects</a>
          </li>
          <li className="text-4xl py-6 border-sky-600 hover:text-sky-600">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
