import { ArrowLeft, Mail, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  const contactMethods = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:hello@glore.app",
      label: "hello@glore.app",
      description:
        "Send us a direct email and we'll get back to you within 24 hours",
      color: "bg-glore-primary",
      hoverColor: "hover:bg-glore-primary/80",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/company/glore-app",
      label: "@glore-app",
      description:
        "Connect with us professionally and stay updated with company news",
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
    },
    {
      name: "X (Twitter)",
      icon: Twitter,
      href: "https://x.com/glore_app",
      label: "@glore_app",
      description:
        "Follow us for the latest updates, gaming tips, and community highlights",
      color: "bg-gray-900",
      hoverColor: "hover:bg-gray-800",
    },
  ];

  return (
    <div className="min-h-screen bg-glore-dark text-white">
      {/* Navigation */}
      <nav className="relative z-20 w-full h-[79px] backdrop-blur-md bg-glore-dark/80 border-b border-glore-primary/20">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link
            to="/"
            className="text-white text-[96px] font-[700] leading-[100px] cursor-pointer hover:scale-110 transition-transform duration-300"
          >
            G
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 text-white hover:text-glore-primary transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </nav>

      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        {/* Glowing orb */}
        <div className="absolute left-[20%] top-[30%] w-[400px] h-[300px] rounded-full bg-glore-secondary opacity-30 blur-[100px]" />
        <div className="absolute right-[20%] top-[60%] w-[300px] h-[300px] rounded-full bg-glore-primary opacity-20 blur-[100px]" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-[64px] lg:text-[64px] md:text-[48px] sm:text-[40px] font-bold mb-6">
              <span className="glore-gradient-text">Get in Touch</span>
            </h1>
            <p className="text-white text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] opacity-90 max-w-2xl mx-auto leading-relaxed">
              Ready to join the GLORE community? Have questions about our
              platform? We'd love to hear from you. Choose your preferred way to
              connect with us.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={method.name}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    method.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group block bg-glore-tertiary/50 backdrop-blur-md rounded-2xl p-8 border border-glore-primary/20 hover:border-glore-primary/50 transition-all duration-300 hover:scale-105"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="flex items-start gap-6">
                    <div
                      className={`w-16 h-16 ${method.color} ${method.hoverColor} rounded-xl flex items-center justify-center transition-all duration-300 group-hover:rotate-12`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-white text-[24px] font-bold">
                          {method.name}
                        </h3>
                        <span className="text-glore-primary text-[16px] font-medium">
                          {method.label}
                        </span>
                      </div>
                      <p className="text-white opacity-80 leading-relaxed mb-4">
                        {method.description}
                      </p>
                      <div className="inline-flex items-center text-glore-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                        Connect now
                        <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-glore-dark/50 rounded-2xl p-8 border border-glore-primary/20 max-w-2xl mx-auto">
              <h3 className="text-glore-primary text-[24px] font-bold mb-4">
                Response Time
              </h3>
              <p className="text-white opacity-80 leading-relaxed">
                We typically respond to all inquiries within 24 hours during
                business days. For urgent matters, email is usually the fastest
                way to reach us.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-glore-primary text-[32px] font-bold">
                    &lt; 24h
                  </div>
                  <div className="text-white text-[14px] opacity-80">
                    Email Response
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-glore-primary text-[32px] font-bold">
                    24/7
                  </div>
                  <div className="text-white text-[14px] opacity-80">
                    Social Media
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h3 className="text-white text-[32px] font-bold mb-4">
              Ready to Game Together?
            </h3>
            <p className="text-white opacity-80 mb-8">
              Join thousands of gamers already connecting on GLORE
            </p>
            <Link
              to="/"
              className="group glore-button text-[20px] px-8 py-3 inline-block"
            >
              <span className="relative z-10">Join the Waitlist</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-glore-dark border-t border-glore-primary/20 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white opacity-60">
            © 2024 GLORE. All rights reserved. Built for gamers, by gamers.
          </p>
        </div>
      </footer>
    </div>
  );
}
