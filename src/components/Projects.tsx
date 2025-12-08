import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Agent",
      subtitle: "Smart Portfolio Management System",
      date: "Ongoing",
      description:
        "A system to auto-sync professional details across Resume, LinkedIn, GitHub, and Portfolio.",
      tech: ["React", "Next.js", "TailwindCSS", "Framer Motion", "Node.js", "MongoDB"],
      gradient: "gradient-accent",
    },
    {
      title: "PassOP",
      subtitle: "Password Manager",
      date: "05/2025",
      description:
        "A secure password manager saving login details in local storage and database.",
      tech: ["React", "TailwindCSS", "Express.js", "MongoDB"],
      gradient: "gradient-secondary",
    },
    {
      title: "KrishiLink",
      subtitle: "Farmers Community",
      date: "03/2025",
      description:
        "A platform empowering farmers with education, networking, and machinery access.",
      tech: ["HTML", "CSS", "JavaScript", "Express.js"],
      gradient: "gradient-primary",
    },
    {
      title: "NutriGuide",
      subtitle: "Personalized Diet Recommendation System",
      date: "01/2025",
      description:
        "A web platform addressing vitamin deficiencies through personalized diet plans.",
      tech: ["HTML", "CSS", "JavaScript"],
      gradient: "gradient-primary",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work showcasing innovative solutions and creative implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="hover-lift border-2 border-primary/20 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-3 ${project.gradient}`}></div>
              <CardHeader>
                <CardTitle className="text-2xl">
                  {project.title}
                  <span className="block text-sm font-normal text-muted-foreground mt-1">
                    {project.subtitle}
                  </span>
                </CardTitle>
                <p className="text-xs text-muted-foreground">{project.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a
                    href="https://github.com/vanshika-patidar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
