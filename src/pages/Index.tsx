import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Layers, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground animate-float">
            Gerald Muteru
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Frontend + Backend Developer | Building sleek web apps with React & Django
          </p>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="about">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <Card className="shadow-soft border-border/50">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Hey there! I'm Gerald</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I'm a Computer Science student and passionate frontend developer intern with a love for creating beautiful, 
                    functional web applications. My journey in tech has been driven by curiosity and a desire to solve real-world problems through code.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    With experience in hackathons and collaborative projects, I thrive in fast-paced environments where 
                    creativity meets technical excellence. I'm always eager to learn new technologies and contribute to innovative solutions 
                    that make a difference.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-64 h-64 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                    <Code2 size={80} className="text-primary-foreground" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30" id="projects">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "ChainAfric",
                description: "Multi-asset tracking system showcasing various interfaces for cryptocurrency tracking, including wallet management, news reading, and blockchain data exploration across multiple chains.",
                tech: ["React", "Blockchain", "Web3", "Multi-Chain", "Crypto APIs"],
                image: "⛓️"
              },
              {
                title: "Entertainment Event Management",
                description: "Event management website for a client with features for event and talent management, including performers, event promotion, and service categories for unforgettable experiences.",
                tech: ["React", "Django", "Event Management", "Talent Booking", "Client Portal"],
                image: "🎪"
              },
              {
                title: "Document Management System",
                description: "Comprehensive DMS showcasing interfaces for document management, including secure login, user dashboard, document organization, and file tracking with recycle bin functionality.",
                tech: ["React", "Django", "File Management", "Authentication", "Dashboard"],
                image: "📄"
              }
            ].map((project, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-border/50">
                <CardHeader>
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="skills">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend",
                icon: <Globe className="w-8 h-8 text-primary" />,
                skills: ["React", "TypeScript", "Tailwind CSS", "Ant Design", "HTML5", "CSS3", "JavaScript"]
              },
              {
                title: "Backend",
                icon: <Database className="w-8 h-8 text-primary" />,
                skills: ["Django", "Python", "REST APIs", "PostgreSQL", "SQLite", "Authentication", "WebSockets"]
              },
              {
                title: "Other",
                icon: <Layers className="w-8 h-8 text-primary" />,
                skills: ["Git", "GitHub", "SQL", "Blockchain Basics", "Agile", "Problem Solving", "Team Collaboration"]
              }
            ].map((category, index) => (
              <Card key={index} className="shadow-soft hover:shadow-glow transition-all duration-300 border-border/50">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {category.icon}
                  </div>
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30" id="contact">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-soft border-border/50">
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>
                  Have a project in mind or just want to chat? I'd love to hear from you!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input placeholder="Your name" className="bg-background" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="your.email@example.com" className="bg-background" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea placeholder="Tell me about your project..." className="min-h-[120px] bg-background" />
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
                  Send Message
                </Button>
              </CardContent>
            </Card>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Connect with me</h3>
                <div className="space-y-4">
                  {[
                    { icon: <Github className="w-6 h-6" />, label: "GitHub", href: "#" },
                    { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", href: "#" },
                    { icon: <Mail className="w-6 h-6" />, label: "Email", href: "mailto:gerald@example.com" }
                  ].map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-card hover:bg-primary/10 transition-all duration-300 group shadow-soft hover:shadow-glow"
                    >
                      <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </div>
                      <span className="font-medium group-hover:text-primary transition-colors duration-300">
                        {link.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="text-center p-8 bg-gradient-primary rounded-lg shadow-glow">
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                  Let's build something amazing together!
                </h3>
                <p className="text-primary-foreground/80">
                  Ready to turn your ideas into reality? I'm just a message away.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-background border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Gerald Muteru. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
