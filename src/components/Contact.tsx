import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20">
      {/* <div className="container mx-auto px-4"> */}
      <div className="container mx-auto px-5 flex flex-col items-center">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>

        {/* <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8"> */}
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">

          <div className="space-y-6 animate-slide-up ">
            <Card className="border-2 border-primary/30">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <a
                    href="mailto:vanshipatidar0000@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    vanshipatidar0000@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/30">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 gradient-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground">Indore, India</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/30 gradient-accent/5">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Connect with me</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <span className="font-semibold">GitHub:</span>{" "}
                    <a
                      href="https://github.com/vanshika-patidar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      github.com/vanshika-patidar
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">LinkedIn:</span>{" "}
                    <a
                      href="https://linkedin.com/in/vanshika-patidar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      linkedin.com/in/vanshika-patidar
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* <Card className="border-2 border-primary/30 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-8">
              <h3 className="font-bold text-2xl mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-2"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-2"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-2"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-primary text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
