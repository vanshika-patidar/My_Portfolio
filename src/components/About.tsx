import { Card, CardContent } from "@/components/ui/card";
import { Award, Brain, Code2 } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
       className="py-16 md:py-24 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions at the intersection of
            technology and design
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="hover-lift border-2 border-primary/20 animate-slide-up">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 gradient-primary rounded-full flex items-center justify-center">
                <Code2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Full Stack Developer</h3>
              <p className="text-muted-foreground">
                Experienced in building web applications with HTML, CSS, React, Node.js, and
                MongoDB. Creating seamless user experiences from frontend to backend.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-2 border-secondary/20 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 gradient-secondary rounded-full flex items-center justify-center">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">AIML Enthusiast</h3>
              <p className="text-muted-foreground">
                B.Tech student specializing in Artificial Intelligence & Machine
                Learning at IIST Indore. CGPA: 7.82
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-2 border-accent/20 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 gradient-accent rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Creative Designer</h3>
              <p className="text-muted-foreground">
                Proficient in Canva and Figma. Creating visually
                stunning designs that enhance user engagement.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="border-2 border-primary/30 gradient-primary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Highlights</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">2nd Prize Winner</p>
                    <p className="text-sm text-muted-foreground">
                      ML Project Competition
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 bg-secondary rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">AWS Certified</p>
                    <p className="text-sm text-muted-foreground">
                      Cloud Foundation Certificate
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 bg-accent rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">Active Participant</p>
                    <p className="text-sm text-muted-foreground">
                      College hackathons and competitions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 bg-pink rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">Multiple Certifications</p>
                    <p className="text-sm text-muted-foreground">
                      IBM, NVIDIA, and AWS credentials
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
