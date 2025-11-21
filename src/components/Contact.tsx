import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dhashnamoorthipalanivel@gmail.com",
      href: "mailto:dhashnamoorthipalanivel@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 87784 38733",
      href: "tel:+918778438733",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Erode, Tamil Nadu, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-18 lg:py-20 bg-gradient-section scroll-fade-in">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's work together to create something amazing!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Feel free to reach out for collaborations, project inquiries, or just a friendly
                hello. I'm always excited to discuss new opportunities!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="text-foreground font-medium">{info.value}</p>
                    </div>
                  </div>
                );

                return info.href ? (
                  <a
                    key={index}
                    href={info.href}
                    className="block p-4 rounded-2xl hover:bg-card transition-colors duration-300"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={index}
                    className="p-4 rounded-2xl"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-3xl shadow-lg space-y-6">
              <div className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    required
                    rows={6}
                    className="rounded-xl resize-none"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12"
              >
                Send Message
                <Send className="ml-2" size={18} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
