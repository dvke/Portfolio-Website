import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Projects from "./components/projects/Projects";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import { ModalProvider } from "../src/context/ModalContext";
import "./App.css";
import Modal from "./components/modal/Modal";

function App() {
  return (
    <ModalProvider>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Qualification />
        <Skills />
        {/* <Services /> */}
        <Projects />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
        <ScrollUp />
      </main>
      <Modal />
    </ModalProvider>
  );
}

export default App;
