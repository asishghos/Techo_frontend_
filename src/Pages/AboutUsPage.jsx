import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Github, Linkedin, Twitter, Send } from 'lucide-react';

// About Us Page Component
const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaUqSojztqZnRXSFvvlm_sX78WOWk7w4ZNxQ&s",
      bio: "Former Google executive with 15 years of experience in tech leadership.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaUqSojztqZnRXSFvvlm_sX78WOWk7w4ZNxQ&s",
      bio: "Tech innovator with expertise in AI and cloud architecture.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaUqSojztqZnRXSFvvlm_sX78WOWk7w4ZNxQ&s",
      bio: "Award-winning designer passionate about creating intuitive user experiences.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaUqSojztqZnRXSFvvlm_sX78WOWk7w4ZNxQ&s",
      bio: "Full-stack developer with a focus on scalable enterprise solutions.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Main background with animated gradients */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900 to-gray-800">
        {/* Animated background patterns */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-0 -right-1/2 w-full h-full bg-gradient-to-bl from-blue-400 to-purple-500 rounded-full blur-3xl transform rotate-12 animate-pulse" />
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-3xl animate-pulse delay-700" />
        </div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
      {/* Hero Section */}
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              About <span className="text-blue-400">TechNova</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300">
                To empower businesses through innovative technology solutions that drive growth and 
                success in the digital age, while maintaining the highest standards of quality and 
                customer satisfaction.
              </p>
            </div>
            <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300">
                To be the global leader in digital transformation, recognized for our innovative 
                solutions, exceptional talent, and commitment to creating lasting positive impact 
                in the technology sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{member.name}</h3>
                <p className="text-blue-400 mb-3 text-center">{member.role}</p>
                <p className="text-gray-300 mb-4 text-center">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={member.social.github} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};


export default AboutPage ;