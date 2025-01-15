import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, Facebook, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react';

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

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {footerSections.map((section) => (
            <div key={section.title} className="group">
              <h3 className="text-white font-semibold text-lg mb-6 group-hover:text-blue-400 transition-colors">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link 
                      to="#" 
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-200">
                        {link}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h4 className="text-white text-xl mb-6">Follow us for the latest updates</h4>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-200">
                  <Facebook className="w-8 h-8" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-200">
                  <Twitter className="w-8 h-8" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-200">
                  <Youtube className="w-8 h-8" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-200">
                  <Instagram className="w-8 h-8" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-200">
                  <Linkedin className="w-8 h-8" />
                </a>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <Link to="/" className="inline-block group">
                <div className="text-center bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-all duration-200 transform hover:-translate-y-1">
                  <h3 className="text-2xl font-semibold text-white mb-3">Join our team.</h3>
                  <p className="text-gray-400 mb-6">Realize your potential.</p>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Explore Careers
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              © 2024 TechNova. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="#" className="hover:text-blue-400 transition-colors duration-200">Privacy Notice</Link>
              <Link to="#" className="hover:text-blue-400 transition-colors duration-200">Cookie Policy</Link>
              <Link to="#" className="hover:text-blue-400 transition-colors duration-200">Terms of Use</Link>
              <Link to="#" className="hover:text-blue-400 transition-colors duration-200">Security Policy</Link>
              <Link to="#" className="hover:text-blue-400 transition-colors duration-200">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };