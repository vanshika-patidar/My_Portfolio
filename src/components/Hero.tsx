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
      className="relative bg-muted/30 pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-secondary/20 rounded-full animate-float-delay" />
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-accent/20 rounded-full animate-float" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6">
            Hi, I&apos;m <span className="text-gradient">Vanshika Patidar</span>
          </h1>

          <h2 className="text-xl md:text-3xl font-semibold mb-4 md:mb-6 text-muted-foreground">
            Full Stack Developer | AIML Enthusiast | Creative Designer
          </h2>

          <p className="text-base md:text-xl mb-6 md:mb-8 text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            A passionate full-stack developer and AIML student who loves
            blending technology with creativity. Skilled in both development
            and design, I build visually appealing, user-focused digital
            experiences using tools like Canva and Figma along with modern web
            technologies.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 md:mb-12">
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
              <a href="/Vanshika_Resume.pdf" target="_blank" rel="noreferrer">
                View Resume
              </a>
            </Button>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/vanshika-patidar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://linkedin.com/in/vanshika-patidar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll arrow pinned to bottom */}
      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 text-primary hover:text-primary/80 transition-colors z-10 animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;
