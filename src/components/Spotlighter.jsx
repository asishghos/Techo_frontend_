import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const SpotlightSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const spotlightItems = [
    {
      tag: "Newsroom",
      title: "Stay up-to-date with the latest tech news",
      description: "Discover the latest innovations and updates in the tech world",
      image: "https://plus.unsplash.com/premium_photo-1661488246595-7f21bf98b7cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaCUyMHRlYW18ZW58MHx8MHx8fDA%3D",
      link: "#"
    },
    {
      tag: "Press Release",
      title: "Strategic partnership announcement",
      description: "Major collaboration to revolutionize cloud solutions",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2glMjB0ZWFtfGVufDB8fDB8fHww",
      link: "#"
    },
    {
      tag: "Analyst Relations",
      title: "Industry recognition and achievements",
      description: "Leading analysts recognize our technological excellence",
      image: "https://media.istockphoto.com/id/1303809341/photo/silhouette-view-of-business-people-team-in-group-meeting.webp?a=1&b=1&s=612x612&w=0&k=20&c=Zx-VUxo6qD01mnCPZ7FAgLSHuAX1lQBjFVnCsf-Lt8U=",
      link: "#"
    },
    {
      tag: "Innovation",
      title: "Next-gen AI solutions launch",
      description: "Transforming businesses with cutting-edge AI technology",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWl8ZW58MHx8MHx8fDA%3D",
      link: "#"
    },
    {
      tag: "Events",
      title: "Global Tech Summit 2024",
      description: "Join us for the biggest tech conference of the year",
      image: "https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzc2luZXNzfGVufDB8fDB8fHww",
      link: "#"
    },
    {
      tag: "Customer Success",
      title: "Digital transformation success stories",
      description: "See how our clients achieved remarkable results",
      image: "https://plus.unsplash.com/premium_photo-1683133974170-762dc561d292?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzc2luZXNzfGVufDB8fDB8fHww",
      link: "#"
    }
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % spotlightItems.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + spotlightItems.length) % spotlightItems.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleSlides = () => {
    const visibleCount = 3;
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentSlide + i) % spotlightItems.length;
      items.push(spotlightItems[index]);
    }
    return items;
  };

  return (
    <section className="py-20 relative">
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-1/2 w-full h-full bg-gradient-to-bl from-blue-400/10 to-purple-500/10 rounded-full blur-3xl transform rotate-12 animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-500/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white flex items-center gap-2">
            Spotlight
            <span className="text-blue-400">News</span>
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {spotlightItems.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'w-6 bg-blue-400' : 'bg-gray-600'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
            <button 
              className="text-white p-2 hover:bg-white/10 rounded-full transition-colors backdrop-blur-sm"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              className="text-white p-2 hover:bg-white/10 rounded-full transition-colors backdrop-blur-sm"
              onClick={nextSlide}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            {getVisibleSlides().map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-500 hover:scale-105 bg-gray-800/30 backdrop-blur-sm border border-gray-700"
                style={{
                  opacity: isAnimating ? 0.7 : 1,
                  transform: `translateX(${isAnimating ? '-10px' : '0'})`,
                }}
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                    <span className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-400/20 rounded-full text-sm text-blue-400 mb-3 backdrop-blur-sm">
                      {item.tag}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                    <button className="flex items-center text-white group-hover:text-blue-400 transition-colors">
                      READ MORE
                      <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-400 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { SpotlightSlider };