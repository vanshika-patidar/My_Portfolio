import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic journey and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="hover-lift border-2 border-primary/30 animate-slide-up">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">
                    Bachelor of Technology in Computer Science
                  </h3>
                  <p className="text-lg text-muted-foreground mb-2">
                    Specialization: Artificial Intelligence & Machine Learning
                  </p>
                  <p className="text-foreground/80 mb-1">
                    Indore Institute of  Science & Technology (IIST), Indore
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    2022 - 2026
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="px-4 py-2 bg-primary/10 text-primary font-bold rounded-lg">
                      CGPA: 7.82
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover-lift border-2 border-secondary/30 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 gradient-secondary rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Higher Secondary (12th)</h3>
                <p className="text-foreground/80 mb-3">Successfully completed</p>
                <div className="px-4 py-2 bg-secondary/10 text-secondary font-bold rounded-lg inline-block">
                  72%
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 border-accent/30 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Secondary (10th)</h3>
                <p className="text-foreground/80 mb-3">Successfully completed</p>
                <div className="px-4 py-2 bg-accent/10 text-accent font-bold rounded-lg inline-block">
                  88%
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
