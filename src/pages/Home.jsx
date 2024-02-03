import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Works from "../components/Works";
import Courses from "../components/Courses";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Works />
            <Courses />
            <FAQs />
            <Footer />
        </>
    )
}

export default Home;