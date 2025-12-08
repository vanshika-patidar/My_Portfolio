import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

import Designs from "@/components/Designs";

import Certificates from "@/components/Certificates";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />

      <Designs />

      <Certificates />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
