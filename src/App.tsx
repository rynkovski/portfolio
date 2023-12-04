import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="flex-col md:flex">
        <Navbar />
        <div className="max-w-7xl mx-auto">
          <Hero />
          <About />
          <Projects />
        </div>
        <Contact />
      </div>
    </>
  );
}

export default App;
