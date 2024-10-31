import { useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Works from "../components/Works";
import Courses from "../components/Courses";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";

function Home() {
  const aboutRef = useRef(null);
  const courseRef = useRef(null);
  const contactUsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToCourse={() => scrollToSection(courseRef)}
        scrollToContactUs={() => scrollToSection(contactUsRef)}
      />
      <Hero />
      <div ref={aboutRef}>
        <About />
      </div>
      <Works />
      <div ref={courseRef}>
        <Courses />
      </div>
      <FAQs />
      <div ref={contactUsRef}>
        <Footer />
      </div>
    </>
  );
}

export default Home;
