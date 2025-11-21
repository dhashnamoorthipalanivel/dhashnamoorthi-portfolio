import { Code2, Palette, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Building responsive, modern websites using HTML, CSS, JavaScript, React, and Bootstrap with clean, maintainable code",
      gradient: "from-primary/10 to-primary/5",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating intuitive user interfaces focused on usability, consistency, and enhanced user experience across all modules",
      gradient: "from-secondary/10 to-secondary/5",
    },
    {
      icon: ShoppingBag,
      title: "CMS & E-commerce",
      description:
        "Developing dynamic websites using WordPress, Wix, and Shopify with seamless content management and e-commerce functionality",
      gradient: "from-primary/10 to-secondary/10",
    },
  ];

  return (
    <section id="services" className="py-18 lg:py-20 bg-gradient-section scroll-fade-in">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            My Awesome <span className="text-primary">Services</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Delivering exceptional web solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-card p-7 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="text-primary" size={30} />
                </div>

                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-5">{service.description}</p>

                <Button
                  variant="ghost"
                  className="text-primary px-1.5 group/btn"
                >
                  Learn More
                  <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
