import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import Snow from "@/components/Snow";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
      <ScrollToTop />
      <Snow />
    </>
  );
};

export default Home;
