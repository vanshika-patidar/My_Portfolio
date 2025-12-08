import { Github, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-24 md:pt-28 pb-10 md:pb-20"
      style={{
        // Background image + soft white overlay in ONE layer
        backgroundImage: `linear-gradient(
          rgba(250, 248, 255, 0.92),
          rgba(250, 248, 255, 0.92)
        ), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Floating shapes (decorative only) */}
      <div className="pointer-events-none absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
      <div className="pointer-events-none absolute bottom-32 right-20 w-32 h-32 bg-secondary/20 rounded-full animate-float-delay" />
      <div className="pointer-events-none absolute top-1/2 right-10 w-16 h-16 bg-accent/20 rounded-full animate-float" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
            Hi, I'm <span className="text-gradient">Vanshika Patidar</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-muted-foreground">
            Full Stack Developer | AIML Enthusiast | Creative Designer
          </h2>

          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            A passionate full-stack developer and AIML student who loves
            blending technology with creativity. Skilled in both development
            and design, I build visually appealing, user-focused digital
            experiences using tools like Canva and Figma along with modern web
            technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <Button
              size="lg"
              className="gradient-primary text-white font-semibold hover:opacity-90 transition-opacity"
              onClick={() => scrollToSection("#projects")}
            >
              View Projects
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
              asChild
            >
              <a
                href="/Vanshika_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </a>
            </Button>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <a
              href="https://github.com/vanshika-patidar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Github className="h-7 w-7 sm:h-8 sm:w-8" />
            </a>
            <a
              href="https://linkedin.com/in/vanshika-patidar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-7 w-7 sm:h-8 sm:w-8" />
            </a>
          </div>

          {/* Scroll arrow */}
          <div className="mt-4 sm:mt-6 animate-bounce">
            <button
              onClick={() => scrollToSection("#about")}
              className="text-primary hover:text-primary/80 transition-colors"
              aria-label="Scroll to About section"
            >
              <ArrowDown className="h-7 w-7 sm:h-8 sm:w-8 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
