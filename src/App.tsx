import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="flex-col md:flex">
        <div className="shadow-lg ">
          <div className="max-w-7xl mx-auto p-4">
            <Navbar />
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
