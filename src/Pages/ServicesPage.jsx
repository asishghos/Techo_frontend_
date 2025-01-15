import React, { useState, useEffect } from 'react';
import { Code, Cloud, Brain, Database, Globe, Lock, ArrowRight, Search } from 'lucide-react';

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies",
      features: ["Responsive Design", "Progressive Web Apps", "E-commerce Solutions", "CMS Development"],
      details: "Our web development team creates scalable, high-performance applications tailored to your business needs."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Secure and scalable cloud infrastructure services",
      features: ["Cloud Migration", "AWS/Azure Services", "DevOps", "Serverless Architecture"],
      details: "Transform your business with our enterprise-grade cloud solutions and expert implementation."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI/ML Services",
      description: "Intelligent solutions powered by machine learning",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Deep Learning"],
      details: "Leverage the power of artificial intelligence to gain valuable insights and automate processes."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Transform data into actionable insights",
      features: ["Big Data Processing", "Business Intelligence", "Data Visualization", "Real-time Analytics"],
      details: "Make data-driven decisions with our comprehensive analytics solutions."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services",
      features: ["Strategy Consulting", "Process Automation", "Legacy Modernization", "Digital Integration"],
      details: "Navigate your digital transformation journey with our expert guidance and implementation."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions for your business",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Security Training"],
      details: "Protect your digital assets with our advanced cybersecurity services and solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              Our <span className="text-blue-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-center">
              Empowering businesses with cutting-edge technology solutions to drive growth and innovation.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search our services..."
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                  selectedService === index ? 'border-blue-500' : ''
                }`}
                onClick={() => setSelectedService(selectedService === index ? null : index)}
              >
                <div className="p-3 bg-blue-500/10 rounded-lg w-fit mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                {/* Features List */}
                <div className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center text-gray-400">
                      <ArrowRight className="w-4 h-4 mr-2 text-blue-400" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Expanded Content */}
                <div className={`mt-4 overflow-hidden transition-all duration-300 ${
                  selectedService === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-gray-300 pt-4 border-t border-gray-700">
                    {service.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-800/50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-8">
            Let's discuss how our services can help you achieve your goals.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-500 transition-colors inline-flex items-center gap-2">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export  default ServicesPage;