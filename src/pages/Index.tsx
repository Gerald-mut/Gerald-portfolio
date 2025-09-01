import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Layers,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "./projects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-foreground animate-float leading-tight">
            Gerald Muteru
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Frontend + Backend Developer | Building sleek web apps with React &
            Django
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow transition-all duration-300 hover:scale-105"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
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
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" id="about">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            About Me
          </h2>
          <Card className="shadow-soft border-border/50">
            <CardContent className="p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-primary">
                    Hey there! I'm Gerald
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                    I'm a Computer Science student and passionate frontend
                    developer intern with a love for creating beautiful,
                    functional web applications. My journey in tech has been
                    driven by curiosity and a desire to solve real-world
                    problems through code.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    With experience in hackathons and collaborative projects, I
                    thrive in fast-paced environments where creativity meets
                    technical excellence. I'm always eager to learn new
                    technologies and contribute to innovative solutions that
                    make a difference.
                  </p>
                </div>
                <div className="flex justify-center order-first md:order-last">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                    <Code2
                      size={60}
                      className="sm:w-20 sm:h-20 text-primary-foreground"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30"
        id="projects"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            My Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-border/50"
              >
                <CardHeader className="p-4 sm:p-6">
                  <div className="mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {typeof project.image === "string" &&
                    project.image.startsWith("/assets") ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-lg w-full h-28 sm:h-32 object-cover"
                      />
                    ) : (
                      project.image
                    )}
                  </div>
                  <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.tech.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs px-2 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full text-xs sm:text-sm"
                  >
                    <Link to={`/projects/${project.slug}`}>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      View Project
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" id="skills">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Frontend",
                icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
                skills: [
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "Ant Design",
                  "HTML5",
                  "CSS3",
                  "JavaScript",
                ],
              },
              {
                title: "Backend",
                icon: (
                  <Database className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                ),
                skills: ["Django", "Python", "Authentication"],
              },
              {
                title: "Other",
                icon: <Layers className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
                skills: [
                  "Git",
                  "GitHub",
                  "SQL",
                  "Blockchain Basics",
                  "Agile",
                  "Problem Solving",
                  "Team Collaboration",
                ],
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="shadow-soft hover:shadow-glow transition-all duration-300 border-border/50"
              >
                <CardHeader className="text-center p-4 sm:p-6">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200 text-xs sm:text-sm px-2 py-1"
                      >
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
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30"
        id="contact"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-1 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Connect with me</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Github className="w-6 h-6" />,
                      label: "GitHub",
                      href: "https://github.com/Gerald-mut",
                    },
                    {
                      icon: <Linkedin className="w-6 h-6" />,
                      label: "LinkedIn",
                      href: "https://www.linkedin.com/in/gerald-muteru-32ba70273/",
                    },
                    {
                      icon: <Mail className="w-6 h-6" />,
                      label: "Email",
                      href: "mailto:muterugerald@gmail.com",
                    },
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
                  Ready to turn your ideas into reality? I'm just a message
                  away.
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
            © 2025 Gerald Muteru. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
