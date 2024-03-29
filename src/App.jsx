import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Skills from "./components/skills/Skills";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Skills"><Parallax type ="skills"/></section>
    <section><Skills/></section>
    <section id="Projects"><Parallax type="projects"/></section>
    <Project/>
    <section><Contact/></section>
  </div>
};

export default App;
