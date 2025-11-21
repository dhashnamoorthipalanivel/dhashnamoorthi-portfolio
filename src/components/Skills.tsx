import javaIcon from "@/assets/icons/java.svg";
import jsIcon from "@/assets/icons/javascript.svg";
import tsIcon from "@/assets/icons/typescript.svg";
import reactIcon from "@/assets/icons/react.svg";
import html5Icon from "@/assets/icons/html5.svg";
import css3Icon from "@/assets/icons/css3.svg";
import bootstrapIcon from "@/assets/icons/bootstrap.svg";
import tailwindIcon from "@/assets/icons/tailwind.svg";
import reduxIcon from "@/assets/icons/redux.svg";
import wordpressIcon from "@/assets/icons/wordpress.svg";
import wixIcon from "@/assets/icons/wix.svg";
import shopifyIcon from "@/assets/icons/shopify.svg";
import githubIcon from "@/assets/icons/github.svg";
import vscodeIcon from "@/assets/icons/vscode.svg";
import sqlIcon from "@/assets/icons/sql.svg";
import dockerIcon from "@/assets/icons/docker.svg";
import googleWorkspaceIcon from "@/assets/icons/google-workspace.svg";
import microsoftIcon from "@/assets/icons/microsoft.svg";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming & Frameworks",
      skills: [
        { name: "Java", icon: javaIcon },
        { name: "JavaScript", icon: jsIcon },
         { name: "TypeScript", icon: tsIcon },
        { name: "React", icon: reactIcon },
      ],
    },
    {
      category: "Web Technologies",
      skills: [
        { name: "HTML5", icon: html5Icon },
        { name: "CSS3", icon: css3Icon },
        { name: "Bootstrap", icon: bootstrapIcon },
        { name: "Tailwind CSS", icon: tailwindIcon },
        { name: "Redux", icon: reduxIcon },
      ],
    },
    {
      category: "CMS & E-commerce",
      skills: [
        { name: "WordPress", icon: wordpressIcon },
        { name: "Wix", icon: wixIcon },
        { name: "Shopify", icon: shopifyIcon },
      ],
    },
    {
      category: "Tools & Database",
      skills: [
        { name: "GitHub", icon: githubIcon },
        { name: "VS Code", icon: vscodeIcon },
        { name: "SQL", icon: sqlIcon },
        { name: "Docker", icon: dockerIcon },
        // { name: "Google Workspace", icon: googleWorkspaceIcon },
        { name: "MS Office", icon: microsoftIcon },
      ],
    },
  ];

  return (
    <section id="skills" className="py-18 lg:py-20 scroll-fade-in">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            Technical <span className="text-primary">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Proficient in modern web technologies and development tools
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-card/40 border border-white/20 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-bold mb-6 text-foreground text-center">{category.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => {
                  return (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-2 p-3 rounded-xl bg-background/50 hover:bg-primary/10 transition-all duration-300 group"
                    >
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="w-8 h-8 group-hover:scale-110 transition-transform"
                      />
                      <span className="text-xs font-medium text-foreground/80 text-center">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
