import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, Globe, Zap, Menu, X, ArrowRight, Users, Shield, Sun, Moon, Play  } from 'lucide-react';
import { SpotlightSlider } from '../components/Spotlighter';
const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['home', 'features', 'testimonials'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "TechNova has transformed our digital infrastructure. The results have been phenomenal.",
      image: "https://mailmktg.makemytrip.com/mybusiness/images/CTM-2.jpg"
    },
    {
      name: "Mike Chen",
      role: "Founder, StartupX",
      content: "Implementing TechNova's solutions doubled our productivity within months.",
      image: "https://mailmktg.makemytrip.com/mybusiness/images/CTM-2.jpg"
    }
  ];

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Theme-based classes
  const themeClasses = {
    mainBg: isDarkTheme ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-gray-100 to-white',
    textPrimary: isDarkTheme ? 'text-white' : 'text-gray-900',
    textSecondary: isDarkTheme ? 'text-gray-300' : 'text-gray-600',
    cardBg: isDarkTheme ? 'bg-gray-900/50' : 'bg-white',
    sectionBg: isDarkTheme ? 'bg-gray-800/50' : 'bg-gray-100',
    borderColor: isDarkTheme ? 'border-gray-800' : 'border-gray-200',
  };

  return (
    <div className={`min-h-screen ${themeClasses.mainBg} transition-colors duration-300`}>

      <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        {/* Background Patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-blue-400/20 to-purple-500/20 rounded-full blur-3xl transform rotate-12" />
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-20">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                    Transforming Digital Future
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Innovation Meets{' '}
                  <span className="relative">
                    <span className="relative z-10 text-blue-600 dark:text-blue-400">Excellence</span>
                    <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-200 dark:bg-blue-900 -z-10 transform -rotate-2"></span>
                  </span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                  Transform your digital presence with cutting-edge solutions. We help businesses navigate the future of technology with confidence and innovation.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all">
                    Get Started
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button className="flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700">
                    <Play className="w-4 h-4" />
                    Watch Demo
                  </button>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-102 transition-transform">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 mix-blend-overlay" />
                  <img
                    src="https://mailmktg.makemytrip.com/mybusiness/images/CTM-2.jpg"
                    alt="Digital Innovation"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 blur-2xl" />
                <div className="absolute -z-10 -top-6 -left-6 w-48 h-48 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full opacity-20 blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add Spotlight Slider after Hero Section */}
      <SpotlightSlider />

      {/* Features Section */}
      <section id="features" className={`py-20 ${themeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold ${themeClasses.textPrimary} mb-4`}>
              Powerful Features
            </h2>
            <p className={`${themeClasses.textSecondary} max-w-2xl mx-auto`}>
              Discover the tools that will revolutionize your business
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-6 h-6 text-blue-400" />,
                title: "Global Reach",
                description: "Connect with customers worldwide through our scalable solutions."
              },
              {
                icon: <Code className="w-6 h-6 text-blue-400" />,
                title: "Advanced Tech",
                description: "Leverage cutting-edge technology to stay ahead of the competition."
              },
              {
                icon: <Zap className="w-6 h-6 text-blue-400" />,
                title: "Fast Performance",
                description: "Experience lightning-fast solutions optimized for performance."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`${themeClasses.cardBg} p-6 rounded-xl border ${themeClasses.borderColor} hover:border-blue-500/50 transition-colors group`}
              >
                <div className="mb-4 p-3 bg-blue-500/10 rounded-lg w-fit group-hover:bg-blue-500/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${themeClasses.textPrimary}`}>
                  {feature.title}
                </h3>
                <p className={themeClasses.textSecondary}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold ${themeClasses.textPrimary} mb-4`}>
              What Our Clients Say
            </h2>
            <p className={`${themeClasses.textSecondary} max-w-2xl mx-auto`}>
              Don't just take our word for it
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`${themeClasses.cardBg} p-6 rounded-xl border ${themeClasses.borderColor}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h4 className={`text-lg font-semibold ${themeClasses.textPrimary}`}>{testimonial.name}</h4>
                    <p className={themeClasses.textSecondary}>{testimonial.role}</p>
                  </div>
                </div>
                <p className={themeClasses.textSecondary}>{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-20 ${themeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "99%", label: "Customer Satisfaction" },
              { number: "24/7", label: "Support Available" },
              { number: "100+", label: "Enterprise Clients" },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className={themeClasses.textSecondary}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Add a Call-to-Action Section before the end */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`${themeClasses.cardBg} rounded-2xl p-12 text-center`}>
            <h2 className={`text-3xl md:text-4xl font-bold ${themeClasses.textPrimary} mb-6`}>
              Ready to Transform Your Business?
            </h2>
            <p className={`${themeClasses.textSecondary} max-w-2xl mx-auto mb-8`}>
              Join thousands of companies that trust us with their digital transformation journey.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-500 transition-colors flex items-center gap-2 mx-auto">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;