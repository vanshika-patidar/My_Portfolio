import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", color: "bg-orange/20 text-orange border-orange/30" },
    { name: "CSS", color: "bg-teal/20 text-teal border-teal/30" },
    { name: "TailwindCSS", color: "bg-secondary/20 text-secondary border-secondary/30" },
    { name: "JavaScript", color: "bg-accent/20 text-accent border-accent/30" },
    { name: "React.js", color: "bg-primary/20 text-primary border-primary/30" },
    { name: "Node.js", color: "bg-teal/20 text-teal border-teal/30" },
    { name: "Next.js", color: "bg-foreground/20 text-foreground border-foreground/30" },
    { name: "Express.js", color: "bg-secondary/20 text-secondary border-secondary/30" },
    { name: "MongoDB", color: "bg-pink/20 text-pink border-pink/30" },
    { name: "Canva", color: "bg-accent/20 text-accent border-accent/30" },
    { name: "Figma", color: "bg-primary/20 text-primary border-primary/30" },
    { name: "C", color: "bg-teal/20 text-teal border-teal/30" },
  ];

  const softSkills = [
    { name: "Multitasking", color: "bg-primary/20 text-primary border-primary/30" },
    { name: "Teamwork", color: "bg-secondary/20 text-secondary border-secondary/30" },
    { name: "Resilience", color: "bg-accent/20 text-accent border-accent/30" },
    { name: "Collaboration", color: "bg-teal/20 text-teal border-teal/30" },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse skill set combining technical prowess with creative design
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Technical Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technicalSkills.map((skill, index) => (
                <Badge
                  key={skill.name}
                  variant="outline"
                  className={`${skill.color} px-6 py-3 text-base font-semibold border-2 hover:scale-110 transition-transform cursor-default animate-scale-in`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-6 text-center">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill, index) => (
                <Badge
                  key={skill.name}
                  variant="outline"
                  className={`${skill.color} px-6 py-3 text-base font-semibold border-2 hover:scale-110 transition-transform cursor-default animate-scale-in`}
                  style={{ animationDelay: `${(index + 16) * 0.05}s` }}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
