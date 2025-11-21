import { ArrowRight, Code2, Palette, Smartphone, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { useEffect, useState } from "react";
const Hero = () => {
  const titles = ["Front-End Developer", "React Developer"];
  const [typewriterText, setTypewriterText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let currentTitle = titles[titleIndex];
    const timer = setInterval(() => {
      if (!isDeleting && index <= currentTitle.length) {
        setTypewriterText(currentTitle.slice(0, index));
        index++;
      } else if (!isDeleting && index > currentTitle.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      } else if (isDeleting && index > 0) {
        index--;
        setTypewriterText(currentTitle.slice(0, index));
      } else if (isDeleting && index === 0) {
        isDeleting = false;
        setTitleIndex((prev) => (prev + 1) % titles.length);
        currentTitle = titles[(titleIndex + 1) % titles.length];
      }
    }, isDeleting ? 50 : 100);
    return () => clearInterval(timer);
  }, [titleIndex]);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const technologies = [{
    name: "Bootstrap",
    icon: Palette
  }, {
    name: "JavaScript",
    icon: Layers
  },
  {
    name: "TypeScript",
    icon: Code2
  }, {
    name: "React",
    icon: Smartphone
  }];
  return <section id="home" className="min-h-screen flex items-center bg-gradient-hero pt-20 lg:pt-0">
    <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="animate-fade-in-up space-y-6 lg:space-y-8">
          <div className="space-y-4">
            {/* Available Badge */}
            <div className="flex items-center gap-2 mb-4 mt-4 bg-muted/50 px-4 py-2 rounded-full w-fit">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-muted-foreground">Available for work</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground/70 block mb-1">
                <span className="text-2xl md:text-2xl lg:text-3xl">Hi</span>
                <span className="text-xl md:text-xl lg:text-2xl ml-2">I'm</span>
              </span>
              <span className="text-foreground block mb-1 text-5xl">Dhashnamoorthi</span>
              <span className="text-primary text-xl md:text-2xl lg:text-3xl">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <p className="text-lg md:text-lg text-muted-foreground max-w-xl">
              I craft responsive, modern web experiences that blend creativity with clean code
              and intuitive design
            </p>
          </div>

          <div>
            <a
              href="https://drive.google.com/file/d/13QFsc62ephnS5A6UM_4naxS_A6Xgmty0/view?usp=drive_link"
              download
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 group"
              >
                Resume
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>


          {/* Technologies */}
          <div className="pt-5">
            <p className="text-sm text-muted-foreground mb-4 font-medium">
              WORK FOR ALL THESE BRANDS & CLIENTS
            </p>
            <div className="flex flex-wrap gap-6">
              {technologies.map(tech => {
                const Icon = tech.icon;
                return <div key={tech.name} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Icon size={20} />
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>;
              })}
            </div>
          </div>
        </div>

        {/* Right Image with Floating Elements */}
        <div className="relative animate-scale-in lg:block hidden">
          <div className="relative">
            <img src={heroImage} alt="Dhashnamoorthi P - Front-End Developer" className="rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg 2xl:max-w-xl mx-auto max-h-[60vh] object-cover" />

            {/* Floating UI Cards */}
            <div className="absolute -top-8 -right-8 bg-card p-4 rounded-2xl shadow-lg animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Code2 className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-bold text-foreground">Best Design</p>
                  <p className="text-xs text-muted-foreground">Award 2024</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-card p-4 rounded-2xl shadow-lg animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Palette className="text-secondary" size={24} />
                </div>
                <div>
                  <p className="font-bold text-foreground">10+ Projects</p>
                  <p className="text-xs text-muted-foreground">Completed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 -right-4 w-16 h-16 rounded-full bg-primary/10 animate-float" />
          <div className="absolute bottom-1/4 -left-4 w-12 h-12 rounded-full bg-secondary/10 animate-bounce-slow" />
        </div>
      </div>
    </div>
  </section>;
};
export default Hero;