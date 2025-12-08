import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground/5 border-t border-border py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-2">
              Vanshika Patidar
            </h3>
            <p className="text-muted-foreground">
              Full Stack Developer | AIML Enthusiast | Creative Designer
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/vanshika-patidar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/vanshika-patidar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:vanshipatidar0000@gmail.com"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Vanshika Patidar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
