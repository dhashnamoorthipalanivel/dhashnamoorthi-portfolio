import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/dhashnamoorthipalanivel", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/dhashnamoorthi-palanivel", label: "LinkedIn" },
    { icon: Mail, href: "mailto:dhashnamoorthipalanivel@gmail.com", label: "Email" }
  ];

  return (
    <footer className="bg-foreground/5 py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center space-y-5">
          {/* Logo */}
          <div className="text-3xl font-bold">
            <span className="text-foreground">DP</span>
            <span className="text-primary">.</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full bg-card hover:bg-primary/10 flex items-center justify-center transition-colors duration-300 shadow-md hover:shadow-lg group"
                >
                  <Icon className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-muted-foreground">
            <p className="flex items-center gap-1 text-sm">
              © {currentYear} Dhashnamoorthi P. Made with
              <Heart className="text-primary" size={14} fill="currentColor" />
              and passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
