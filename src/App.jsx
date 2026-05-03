import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import CV from "./sections/CV.jsx";
import Projects from "./sections/Projects.jsx";
import Clients from "./sections/Clients.jsx";
import Contact from "./sections/Contact.jsx";
import {Footer} from "./sections/Footer.jsx";
import Experience from "./sections/Experience.jsx";

const App = () => {
  return (
    <main className="relative min-h-screen overflow-hidden theme-bg">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Clients />
        <Experience />
        <CV />
        <Contact />
        <Footer />
    </main>
  );
};

export default App;
