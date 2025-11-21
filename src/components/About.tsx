import { Award, Briefcase, Code2 } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const stats = [
    {
      icon: Briefcase,
      value: "1+ Years",
      label: "Development Experience",
    },
    {
      icon: Code2,
      value: "10+ Projects",
      label: "Completed",
    },
    {
      icon: Award,
      value: "Multiple Platforms",
      label: "CMS Expertise",
    },
  ];

  return (
    <section id="about" className="py-18 lg:py-20 bg-muted/30 scroll-fade-in">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="animate-scale-in">
            <div className="relative max-w-sm mx-auto">
              {/* Colored Circle Background */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
              </div>

              <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img
                  src={profilePhoto}
                  alt="Dhashnamoorthi P"
                  className="w-full h-auto"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-up space-y-5">
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">
                Electronics and Communication Engineering student
              </span>{" "}
              at Nandha Engineering College with a passion for front-end development.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently working as a{" "}
              <span className="text-primary font-semibold">
                Software Developer Intern at Ahattrickz Info Tech
              </span>
              , where I build responsive websites and e-commerce solutions.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in creating user-friendly interfaces using modern web technologies and
              CMS platforms, ensuring every project delivers an exceptional user experience.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-5">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <p className="text-xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
