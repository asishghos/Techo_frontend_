import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, Facebook, Twitter, Youtube, Instagram, Linkedin, ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Industries',
      links: ['Banking', 'Healthcare', 'Manufacturing', 'Retail', 'Technology', 'Insurance']
    },
    {
      title: 'Services',
      links: ['Cloud Solutions', 'AI & Analytics', 'Consulting', 'Digital Transformation', 'Cybersecurity']
    },
    {
      title: 'Products & Platforms',
      links: ['Enterprise Suite', 'Cloud Platform', 'Analytics Tools', 'Security Solutions']
    },
    {
      title: 'Insights',
      links: ['Research', 'Case Studies', 'Blog', 'Events', 'Newsroom']
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600" />
      
      {/* Newsletter Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10 backdrop-blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="relative bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay ahead of the curve</h2>
                <p className="text-gray-300">Get the latest insights and updates delivered to your inbox.</p>
              </div>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-900/50 rounded-lg border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {footerSections.map((section, index) => (
            <div 
              key={section.title}
              className="group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3 className="text-white font-semibold text-lg mb-6 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                {section.title}
                <div className={`h-px flex-1 bg-gradient-to-r from-blue-600/50 to-transparent transition-opacity ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`} />
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link 
                      to="#" 
                      className="text-gray-400 hover:text-blue-400 transition-all duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                      <span>{link}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Social Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-white text-xl font-semibold">Contact Us</h4>
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>hello@technova.com</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                  <MapPin className="w-5 h-5" />
                  <span>123 Innovation Drive, Tech City</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h4 className="text-white text-xl font-semibold">Connect With Us</h4>
              <div className="flex gap-4">
                {[Facebook, Twitter, Youtube, Instagram, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Careers Card */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-white mb-3">Join our team</h3>
                <p className="text-gray-400 mb-6">Be part of something extraordinary</p>
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-all duration-200 flex items-center justify-center gap-2 group">
                  Explore Careers
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0 flex items-center gap-2">
              <span className="text-blue-400">TechNova</span>
              <span className="text-gray-600">|</span>
              <span>© 2024 All rights reserved.</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {['Privacy Notice', 'Cookie Policy', 'Terms of Use', 'Security Policy', 'Accessibility'].map((item) => (
                <Link
                  key={item}
                  to="#"
                  className="hover:text-blue-400 transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 transition-all duration-200 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };