import { useState, useEffect } from "react";
import {
  X,
  Check,
  Menu,
  Gamepad2,
  MessageCircle,
  TrendingUp,
  Mail,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const closeWaitlist = () => {
    setShowWaitlist(false);
    setSubmitted(false);
    setEmail("");
  };

  return (
    <div className="min-h-screen w-full bg-glore-dark font-['Inter'] overflow-x-hidden relative">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        {/* Animated SVG */}
        {/* <svg
          className="absolute right-0 top-0 w-[822px] h-[1078px] opacity-80"
          style={{
            transform: `translateX(${scrollY * 0.1}px) translateY(${scrollY * -0.05}px)`,
          }}
          viewBox="0 0 830 998"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.1502 978.088C49.8633 971.614 62.1379 962.906 72.4028 956.184C72.5496 956.088 72.6966 955.991 72.8439 955.895C77.0939 953.11 80.8625 950.696 86.0245 947.358C86.6742 946.938 87.3435 946.506 88.0302 946.062C94.4329 941.908 101.179 937.558 111.433 930.814C144.959 908.787 170.854 890.134 178.639 884.52C194.936 872.778 212.157 860.737 235.427 844.316C237.578 842.798 239.791 841.236 242.069 839.625C243.914 838.32 245.601 837.449 245.832 837.686C246.062 837.923 244.747 839.178 242.9 840.484C240.669 842.061 238.503 843.592 236.401 845.076C236.391 845.083 236.382 845.09 236.372 845.096C212.952 861.625 196.138 873.38 180.184 884.876C172.19 890.641 145.717 909.715 111.322 932.309C101.036 939.071 94.0533 943.581 87.6908 947.705C87.0215 948.138 86.3721 948.557 85.7439 948.963C85.7291 948.972 85.7143 948.981 85.6995 948.991C80.5051 952.349 77.037 954.564 72.809 957.337C72.7222 957.394 72.6354 957.451 72.5488 957.509C62.2247 964.267 50.1565 972.838 40.7366 979.117C38.7305 980.456 37.057 981.252 36.893 980.97C36.7329 980.684 38.1436 979.428 40.1502 978.088Z"
            stroke="#EB9EC0"
            strokeWidth="20"
            fill="none"
          />
        </svg> */}

        {/* Glowing orb */}
        <div
          className="absolute left-[395px] top-[703px] w-[682px] h-[450px] rounded-full bg-glore-secondary opacity-60 blur-[100px]"
          style={{
            transform: `scale(${1 + scrollY * 0.0002})`,
          }}
        />
      </div>

      {/* Navigation */}
      <nav
        className="relative z-20 w-full h-[79px] backdrop-blur-md bg-glore-dark/80 border-b border-glore-primary/20"
        style={{
          transform: `translateY(${isLoaded ? "0" : "-100%"})`,
          transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="text-white text-[46px] font-[700] leading-[100px] cursor-pointer hover:scale-110 transition-transform duration-300">
            G
          </div>

          {/* Mobile menu button */}
          <div
            className="lg:hidden flex flex-col gap-2 cursor-pointer"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <div
              className="w-6 h-0.5 bg-glore-primary transition-all duration-300"
              style={{
                transform: showMobileMenu
                  ? "rotate(45deg) translateY(6px)"
                  : "rotate(0)",
              }}
            />
            <div
              className="w-6 h-0.5 bg-glore-primary transition-all duration-300"
              style={{
                opacity: showMobileMenu ? "0" : "1",
              }}
            />
            <div
              className="w-6 h-0.5 bg-glore-primary transition-all duration-300"
              style={{
                transform: showMobileMenu
                  ? "rotate(-45deg) translateY(-6px)"
                  : "rotate(0)",
              }}
            />
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#features"
              className="text-white text-lg hover:text-glore-primary transition-colors duration-300 relative group"
            >
              <span>Features</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-glore-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#about"
              className="text-white text-lg hover:text-glore-primary transition-colors duration-300 relative group"
            >
              <span>About</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-glore-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="/contact"
              className="text-white text-lg hover:text-glore-primary transition-colors duration-300 relative group"
            >
              <span>Contact</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-glore-primary group-hover:w-full transition-all duration-300" />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="lg:hidden absolute left-0 top-[79px] w-full bg-glore-dark/95 backdrop-blur-md border-b border-glore-primary/20 z-20 overflow-hidden transition-all duration-500"
        style={{
          height: showMobileMenu ? "200px" : "0px",
          opacity: showMobileMenu ? "1" : "0",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col gap-6">
            <a
              href="#features"
              className="text-white text-xl hover:text-glore-primary transition-colors duration-300"
              onClick={() => setShowMobileMenu(false)}
            >
              Features
            </a>
            <a
              href="#about"
              className="text-white text-xl hover:text-glore-primary transition-colors duration-300"
              onClick={() => setShowMobileMenu(false)}
            >
              About
            </a>
            <a
              href="/contact"
              className="text-white text-xl hover:text-glore-primary transition-colors duration-300"
              onClick={() => setShowMobileMenu(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-20 pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 relative">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Phone Mockup */}
            <div className="lg:order-2 flex justify-center relative">
              <div
                className="relative"
                style={{
                  transform: `perspective(1000px) rotateY(${(mouseX - (typeof window !== "undefined" ? window.innerWidth / 2 : 0)) * 0.01}deg) rotateX(${(mouseY - (typeof window !== "undefined" ? window.innerHeight / 2 : 0)) * -0.01}deg)`,
                }}
              >
                <div
                  className="w-[375px] h-[812px] bg-gradient-to-br from-[#f5f5f7] to-[#e5e5e7] rounded-[60px] p-2 shadow-[0_20px_60px_rgba(235,158,192,0.3)] relative overflow-hidden"
                  style={{
                    transform: `rotate(-10deg) ${isLoaded ? "scale(1)" : "scale(0.8)"}`,
                    transition: "transform 1s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <div className="w-full h-full bg-black rounded-[52px] overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-glore-secondary via-glore-tertiary to-glore-dark opacity-90" />
                    <div className="relative z-10 p-6 h-full flex flex-col">
                      {/* Phone header */}
                      <div className="flex items-center justify-between mb-8">
                        <div className="w-3 h-3 bg-glore-primary rounded-full" />
                        <div className="text-white text-sm font-bold">
                          GLORE
                        </div>
                        <div className="w-6 h-6 border-2 border-glore-primary rounded-md" />
                      </div>

                      {/* Phone content */}
                      <div className="flex-1 flex flex-col justify-center items-center text-center">
                        <div className="text-glore-primary text-4xl font-bold mb-4">
                          Connect
                        </div>
                        <div className="text-white text-lg mb-8">
                          Find your perfect gaming partner
                        </div>

                        <div className="space-y-4 w-full">
                          <div className="bg-glore-tertiary rounded-xl p-4 border border-glore-primary/30">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-glore-primary rounded-full" />
                              <div className="text-left">
                                <div className="text-white font-semibold">
                                  Alex_Pro
                                </div>
                                <div className="text-glore-primary text-sm">
                                  Rank: Diamond
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-glore-tertiary rounded-xl p-4 border border-glore-primary/30">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-glore-secondary rounded-full" />
                              <div className="text-left">
                                <div className="text-white font-semibold">
                                  Sarah_Gaming
                                </div>
                                <div className="text-glore-primary text-sm">
                                  Rank: Master
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Phone bottom indicators */}
                      <div className="flex gap-2 justify-center">
                        <div className="w-2 h-2 bg-glore-primary rounded-full" />
                        <div className="w-2 h-2 bg-glore-primary/50 rounded-full" />
                        <div className="w-2 h-2 bg-glore-primary/50 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-glore-primary rounded-full animate-pulse" />
                  <div
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-glore-secondary rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                </div>

                {/* Side SVG */}
                {/* <svg
                  className="absolute -left-8 top-1/2 w-[316px] h-[391px] opacity-60"
                  style={{
                    transform: `translateY(-50%) rotate(${scrollY * 0.1}deg)`,
                  }}
                  viewBox="0 0 302 373"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-2.61404 361.532C-1.04967 357.969 0.647451 353.171 2.41417 349.642C2.43859 349.593 2.46304 349.544 2.48753 349.495C3.19239 348.092 4.01553 346.518 4.94267 344.782C5.0595 344.564 5.18014 344.34 5.30349 344.109C6.39306 342.075 7.82027 339.375 9.62384 335.932C15.8159 324.067 19.7948 314.44 21.0708 311.362C23.5606 305.348 26.5884 299.011 30.7997 290.468C31.1835 289.69 31.5803 288.891 31.9882 288.068C32.3187 287.401 32.8302 286.965 33.1297 287.095C33.4293 287.226 33.4028 287.874 33.0725 288.54C32.6733 289.345 32.2866 290.127 31.9117 290.887C31.91 290.891 31.9083 290.894 31.9066 290.897C27.6745 299.481 24.7102 305.688 22.2864 311.541C20.978 314.694 16.9039 324.542 10.5667 336.69C8.7561 340.144 7.29994 342.91 6.2153 344.932C6.09514 345.156 5.97816 345.374 5.86527 345.585C5.86256 345.59 5.85985 345.595 5.85715 345.6C4.90063 347.401 4.13509 348.857 3.4594 350.203C3.44519 350.232 3.43101 350.261 3.41682 350.29C1.62281 353.877 -0.01999 358.562 -1.5378 362.019C-1.85331 362.738 -2.33685 363.183 -2.63463 363.05C-2.93159 362.915 -2.92976 362.253 -2.61404 361.532Z"
                    stroke="#EB9EC0"
                    strokeWidth="20"
                    fill="none"
                  />
                </svg> */}
              </div>
            </div>

            {/* Hero Text */}
            <div
              className="lg:order-1 space-y-8"
              style={{
                transform: `translateX(${isLoaded ? "0" : "-50px"})`,
                opacity: isLoaded ? "1" : "0",
                transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s",
              }}
            >
              <div className="space-y-4">
                <h1 className="text-white text-[64px] lg:text-[64px] md:text-[48px] sm:text-[40px] font-[700] leading-[80px] lg:leading-[80px] md:leading-[60px] sm:leading-[50px] text-center lg:text-left">
                  <span className="glore-gradient-text">GLORE</span>
                  <span> </span>
                  <span className="text-white">App</span>
                </h1>
                <p className="text-white text-[24px] lg:text-[24px] md:text-[20px] sm:text-[18px] leading-[32px] text-center lg:text-left opacity-90">
                  Connect with best players and elevate your gaming experience
                </p>
              </div>

              <div className="flex justify-center lg:justify-start">
                <button
                  className="group glore-button text-[24px] lg:text-[24px] md:text-[20px] sm:text-[18px] px-12 py-4"
                  onClick={() => setShowWaitlist(true)}
                >
                  <span className="relative z-10">Join the waitlist</span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 lg:gap-6 md:gap-4 pt-8">
                <div className="text-center space-y-2">
                  <div className="text-glore-primary text-[32px] lg:text-[32px] md:text-[24px] sm:text-[20px] font-bold">
                    10K+
                  </div>
                  <div className="text-white text-[14px] lg:text-[14px] md:text-[12px] sm:text-[10px] opacity-80">
                    Active Players
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-glore-primary text-[32px] lg:text-[32px] md:text-[24px] sm:text-[20px] font-bold">
                    500+
                  </div>
                  <div className="text-white text-[14px] lg:text-[14px] md:text-[12px] sm:text-[10px] opacity-80">
                    Daily Matches
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-glore-primary text-[32px] lg:text-[32px] md:text-[24px] sm:text-[20px] font-bold">
                    95%
                  </div>
                  <div className="text-white text-[14px] lg:text-[14px] md:text-[12px] sm:text-[10px] opacity-80">
                    Success Rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-white text-[48px] lg:text-[48px] md:text-[36px] sm:text-[32px] font-bold text-center mb-16">
              Why Choose GLORE?
            </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
              <div className="group glore-card p-8">
                <div className="w-16 h-16 bg-glore-primary rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <Gamepad2 className="w-8 h-8 text-glore-dark" />
                </div>
                <h3 className="text-white text-[24px] font-bold mb-4">
                  Smart Matching
                </h3>
                <p className="text-white opacity-80 leading-relaxed">
                  Our AI-powered algorithm matches you with players of similar
                  skill levels and gaming preferences for the perfect gaming
                  experience.
                </p>
              </div>

              <div className="group glore-card p-8">
                <div className="w-16 h-16 bg-glore-secondary rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 text-glore-primary" />
                </div>
                <h3 className="text-white text-[24px] font-bold mb-4">
                  Real-time Chat
                </h3>
                <p className="text-white opacity-80 leading-relaxed">
                  Communicate instantly with your teammates using our built-in
                  voice and text chat system designed for seamless coordination.
                </p>
              </div>

              <div className="group glore-card p-8">
                <div className="w-16 h-16 bg-glore-primary rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-glore-dark" />
                </div>
                <h3 className="text-white text-[24px] font-bold mb-4">
                  Skill Tracking
                </h3>
                <p className="text-white opacity-80 leading-relaxed">
                  Track your progress, analyze your performance, and climb the
                  ranks with detailed statistics and personalized insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-glore-tertiary/20">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-white text-[48px] lg:text-[48px] md:text-[36px] sm:text-[32px] font-bold mb-8">
              Built for Gamers, by Gamers
            </h2>
            <p className="text-white text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] opacity-90 max-w-3xl mx-auto leading-relaxed mb-12">
              GLORE was created by passionate gamers who understand the
              frustration of playing with random teammates. We built the
              platform we always wanted - one that connects you with like-minded
              players who share your dedication to winning.
            </p>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-glore-dark/50 rounded-2xl p-6 border border-glore-primary/20">
                  <h3 className="text-glore-primary text-[24px] font-bold mb-3">
                    Our Mission
                  </h3>
                  <p className="text-white opacity-80">
                    To create the ultimate gaming community where every player
                    can find their perfect teammate and achieve their gaming
                    goals together.
                  </p>
                </div>
                <div className="bg-glore-dark/50 rounded-2xl p-6 border border-glore-primary/20">
                  <h3 className="text-glore-primary text-[24px] font-bold mb-3">
                    Our Vision
                  </h3>
                  <p className="text-white opacity-80">
                    A world where no gamer plays alone, and every match is an
                    opportunity to build lasting friendships and achieve
                    victory.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-glore-secondary to-glore-tertiary rounded-2xl flex items-center justify-center border border-glore-primary/30">
                  <div className="text-center space-y-4">
                    <div className="text-glore-primary text-[64px] font-bold">
                      ∞
                    </div>
                    <div className="text-white text-[24px] font-semibold">
                      Endless Possibilities
                    </div>
                    <div className="text-white opacity-80">
                      Connect, Play, Win, Repeat
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Waitlist Modal */}
      {showWaitlist && (
        <div className="fixed inset-0 bg-glore-dark/90 backdrop-blur-md z-50 flex items-center justify-center p-6 transition-all duration-300">
          <div
            className="bg-glore-tertiary rounded-2xl p-8 max-w-md w-full border border-glore-primary/30 relative"
            style={{
              transform: showWaitlist ? "scale(1)" : "scale(0.9)",
              transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <button
              className="absolute top-4 right-4 text-glore-primary hover:text-white transition-colors duration-200"
              onClick={closeWaitlist}
            >
              <X className="w-6 h-6" />
            </button>

            {!submitted ? (
              <div>
                <h3 className="text-white text-[28px] font-bold mb-2">
                  Join the Waitlist
                </h3>
                <p className="text-white opacity-80 mb-6">
                  Be among the first to experience the future of gaming
                  connections.
                </p>
                <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full bg-glore-dark border border-glore-primary/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-glore-primary focus:outline-none transition-colors duration-200"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-glore-primary hover:bg-glore-secondary text-glore-dark font-bold py-3 rounded-lg transition-all duration-200 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin w-5 h-5 border-2 border-glore-dark border-t-transparent rounded-full" />
                        <span>Joining...</span>
                      </div>
                    ) : (
                      "Join Waitlist"
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-glore-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-glore-dark" />
                </div>
                <h3 className="text-white text-[24px] font-bold">
                  Welcome to GLORE!
                </h3>
                <p className="text-white opacity-80">
                  You're on the waitlist! We'll notify you when GLORE launches.
                </p>
                <button
                  className="mt-4 text-glore-primary hover:text-white transition-colors duration-200"
                  onClick={closeWaitlist}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer
        id="contact"
        className="bg-glore-dark border-t border-glore-primary/20 py-12 px-6"
      >
        <div className="max-w-7xl mx-auto">
          {/* Contact Section */}
          <div className="text-center mb-12">
            <h3 className="text-white text-[32px] font-bold mb-4">
              Get in Touch
            </h3>
            <p className="text-white opacity-80 mb-8 max-w-2xl mx-auto">
              Ready to join the GLORE community? Connect with us through your
              preferred platform.
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="mailto:hello@glore.app"
                className="group flex items-center gap-3 bg-glore-tertiary/50 hover:bg-glore-primary/20 border border-glore-primary/30 hover:border-glore-primary/50 rounded-full px-6 py-3 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5 text-glore-primary" />
                <span className="text-white font-medium">hello@glore.app</span>
              </a>

              <a
                href="https://linkedin.com/company/glore-app"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-glore-tertiary/50 hover:bg-blue-600/20 border border-glore-primary/30 hover:border-blue-400/50 rounded-full px-6 py-3 transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">@glore-app</span>
              </a>

              <a
                href="https://x.com/glore_app"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-glore-tertiary/50 hover:bg-gray-600/20 border border-glore-primary/30 hover:border-gray-400/50 rounded-full px-6 py-3 transition-all duration-300 hover:scale-105"
              >
                <Twitter className="w-5 h-5 text-gray-400" />
                <span className="text-white font-medium">@glore_app</span>
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mb-8">
            <div className="space-y-4">
              <h4 className="text-white text-[24px] font-bold">GLORE</h4>
              <p className="text-white opacity-80">
                Connecting gamers worldwide for the ultimate gaming experience.
              </p>
            </div>
            <div className="space-y-4">
              <h5 className="text-glore-primary text-[18px] font-semibold">
                Product
              </h5>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-white opacity-80 hover:opacity-100 transition-opacity duration-200"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white opacity-80 hover:opacity-100 transition-opacity duration-200"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white opacity-80 hover:opacity-100 transition-opacity duration-200"
                  >
                    Download
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-glore-primary text-[18px] font-semibold">
                Company
              </h5>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-white opacity-80 hover:opacity-100 transition-opacity duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white opacity-80 hover:opacity-100 transition-opacity duration-200"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-white opacity-80 hover:opacity-100 transition-opacity duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-glore-primary text-[18px] font-semibold">
                Support
              </h5>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-white opacity-80 hover:opacity-100 transition-opacity duration-200"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white opacity-80 hover:opacity-100 transition-opacity duration-200"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white opacity-80 hover:opacity-100 transition-opacity duration-200"
                  >
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-glore-primary/20 pt-8 text-center">
            <p className="text-white opacity-60">
              © 2024 GLORE. All rights reserved. Built for gamers, by gamers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
