import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const Certificates = () => {
  const certificates = [
    { name: "AI for Everyone", issuer: "IBM" },
    { name: "Python Basics for Data Science", issuer: "IBM" },
    { name: "Introduction to Cloud Computing", issuer: "IBM" },
    { name: "AWS Cloud Foundation", issuer: "AWS" },
    { name: "Application of AI for Anomaly Detection", issuer: "NVIDIA" },
    { name: "Getting Started with AI on Jetson Nano", issuer: "NVIDIA" },
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Certificates & Training
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <Card
              key={cert.name}
              className="hover-lift border-2 border-primary/20 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 mb-4 gradient-primary rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="border-2 border-accent/30 gradient-accent/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Achievements
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-lg">
                      2nd Prize - ML Project Competition
                    </p>
                    <p className="text-muted-foreground">
                      Secured second position in competitive ML project showcase
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-secondary rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-lg">
                      Internal Hackathon - Rural Development
                    </p>
                    <p className="text-muted-foreground">
                      Active participation in developing solutions for rural communities
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

export default Certificates;
