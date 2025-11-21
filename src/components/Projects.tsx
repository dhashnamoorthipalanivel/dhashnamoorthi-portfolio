import { ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import projectErp from "@/assets/project-erp.jpg";
import projectSvl from "@/assets/project-svl.png";
import projectA2c from "@/assets/project-a2c.jpg";
import projectRecipe from "@/assets/project-recipe.png";
import projectExpense from "@/assets/project-expense.png";
import projectEidik from "@/assets/project-eidik.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Expense Tracker Application",
      description:
        "A dynamic expense tracker built with React and Vite, featuring real-time data handling, CRUD operations, and insightful expense visualizations.",
      image: projectExpense,
      tags: ["React", "Vite", "JavaScript", "Tailwind CSS", "Axios", "JSON Server", "Recharts"],
      link: "https://github.com/dhashnamoorthipalanivel/expense-tracker.git",
    },

    {
      title: "Silver Retail Business Website",
      description:
        "Elegant business website with product showcases, inquiry forms, and dynamic content",
      image: projectSvl,
      tags: ["Bootstrap", "PHP"],
      link: "https://svlerode.com/index.php",
    },
    {
      title: "Recipe Finder Web App",
      description:
        "Interactive recipe finder built with React and Tailwind CSS, featuring smart search, filters, and a fully responsive UI.",
      image: projectRecipe,
      tags: ["React", "JavaScript", "Tailwind CSS"],
      link: "https://github.com/dhashnamoorthipalanivel/recipe-finder.git",
    },

    {
      title: "Fashion E-commerce Platform",
      description:
        "Modern e-commerce solution with product catalogs, shopping cart, and secure checkout process",
      image: projectEidik,
      tags: ["Shopify"],
      link: null,
    },
  ];

  return (
    <section id="projects" className="py-18 lg:py-20 bg-muted/30 scroll-fade-in">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            Recent <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Showcasing my latest work and development achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                  {project.link ? (
                    <Button
                      variant="default"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={() => window.open(project.link!, "_blank")}
                    >
                      View Live
                      <ExternalLink className="ml-2" size={16} />
                    </Button>
                  ) : (
                    <Button
                      variant="default"
                      className="bg-muted text-muted-foreground cursor-not-allowed"
                      disabled
                    >
                      View Details
                      <Code2 className="ml-2" size={16} />
                    </Button>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                      variant="secondary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
