import { GraduationCap, Briefcase, Calendar,Book,Notebook } from "lucide-react";

const Education = () => {
  const timeline = [
    {
      type: "education",
      title: "Bachelor of Electronics and Communication Engineering",
      institution: "Nandha Engineering College, Erode, Tamil Nadu",
      period: "2022 - Present",
      details: "CGPA: 7.51 (Up to 6th Semester)",
      icon: GraduationCap,
    },
    {
      type: "internship",
      title: "Software Developer Intern",
      institution: "Ahattrickz Info Tech Private Limited, Namakkal",
      period: "2024 - Present",
      details: "Front-end development internship focused on building responsive websites using HTML, CSS, JavaScript, and Bootstrap. Working with WordPress, Wix, and Shopify for CMS and e-commerce development. Contributing to UI/UX improvements, feature enhancements, and SEO optimization.",
      icon: Briefcase,
    },
    {
      type: "education",
      title: "Intermediate Education, Class XII",
      institution: "Government Boys Hr.Sec.School, Komarapalayam, Namakkal",
      period: "May 2022",
      details: "Percentage: 77.5%",
      icon: Notebook,
    },
    {
      type: "education",
      title: "SSLC, Class X",
      institution: "Government Boys Hr.Sec.School, Komarapalayam, Namakkal",
      period: "May 2020",
      details: "Percentage: 90.6%",
      icon: Book,
    },
  ];

  return (
    <section id="education" className="py-18 lg:py-20 bg-muted/30 scroll-fade-in">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            Education & <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            My academic journey and professional experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 lg:-ml-px" />

            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative mb-12 lg:mb-16 animate-fade-in-up ${
                    isEven ? "lg:pr-1/2 lg:pl-0" : "lg:pl-1/2 lg:pr-0"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`flex gap-6 lg:gap-8 ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                    {/* Timeline Dot */}
                    <div className="relative flex-shrink-0">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center z-10 shadow-lg ${
                          item.type === "education"
                            ? "bg-primary/10 border-2 border-primary"
                            : "bg-secondary/10 border-2 border-secondary"
                        }`}
                      >
                        <Icon
                          className={item.type === "education" ? "text-primary" : "text-secondary"}
                          size={28}
                        />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div
                      className={`flex-1 bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${
                        !isEven ? "lg:text-right" : ""
                      }`}
                    >
                      <div className="flex items-start gap-2 mb-3">
                        <Calendar
                          className={`text-primary flex-shrink-0 ${!isEven ? "lg:order-2" : ""}`}
                          size={18}
                        />
                        <span className="text-sm font-semibold text-primary">{item.period}</span>
                      </div>

                      <h3 className="text-xl lg:text-2xl font-bold mb-2 text-foreground">
                        {item.title}
                      </h3>

                      <p className="text-muted-foreground font-medium mb-3">{item.institution}</p>

                      <p className="text-foreground/80 leading-relaxed">{item.details}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
