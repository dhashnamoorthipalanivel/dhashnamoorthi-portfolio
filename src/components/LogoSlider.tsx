import bootstrapIcon from "@/assets/icons/bootstrap.svg";
import css3Icon from "@/assets/icons/css3.svg";
import githubIcon from "@/assets/icons/github.svg";
import html5Icon from "@/assets/icons/html5.svg";
import javaIcon from "@/assets/icons/java.svg";
import javascriptIcon from "@/assets/icons/javascript.svg";
import typescriptIcon from "@/assets/icons/typescript.svg";
import reactIcon from "@/assets/icons/react.svg";
import reduxIcon from "@/assets/icons/redux.svg";
import sqlIcon from "@/assets/icons/sql.svg";
import tailwindIcon from "@/assets/icons/tailwind.svg";
import vscodeIcon from "@/assets/icons/vscode.svg";
import dockerIcon from "@/assets/icons/docker.svg";
import wordpressIcon from "@/assets/icons/wordpress.svg";
import shopifyIcon from "@/assets/icons/shopify.svg";
import wixIcon from "@/assets/icons/wix.svg";
import googleWorkspaceIcon from "@/assets/icons/google-workspace.svg";
import microsoftIcon from "@/assets/icons/microsoft.svg";

const LogoSlider = () => {
  const logos = [
    { src: html5Icon, alt: "HTML5" },
    { src: css3Icon, alt: "CSS3" },
    { src: javascriptIcon, alt: "JavaScript" },
    { src: typescriptIcon, alt: "TypeScript" },
    { src: reactIcon, alt: "React" },
    { src: reduxIcon, alt: "Redux" },
    { src: tailwindIcon, alt: "Tailwind CSS" },
    { src: bootstrapIcon, alt: "Bootstrap" },
    { src: javaIcon, alt: "Java" },
    { src: sqlIcon, alt: "SQL" },
    { src: githubIcon, alt: "GitHub" },
    { src: vscodeIcon, alt: "VS Code" },
    { src: dockerIcon, alt: "Docker" },
    { src: wordpressIcon, alt: "WordPress" },
    { src: shopifyIcon, alt: "Shopify" },
    { src: wixIcon, alt: "Wix" },
    // { src: googleWorkspaceIcon, alt: "Google Workspace" },
    { src: microsoftIcon, alt: "Microsoft Office" },
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden">
          <div className="flex animate-[slide_30s_linear_infinite] hover:[animation-play-state:paused]">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-12  object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-12 object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
