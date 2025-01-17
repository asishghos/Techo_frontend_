import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Search, Home, Menu, X, ExternalLink } from 'lucide-react';

const NavBar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const menuItems = [
        {
            title: 'Services',
            path: '/services',
            submenu: [
                { 
                    title: 'Our Services',
                    description: 'Innovative solutions for your business',
                    items: [
                        { name: 'AI & Analytics', path: '/services/ai-analytics', description: 'Data-driven insights and AI solutions' },
                        { name: 'Cloud Solutions', path: '/services/cloud', description: 'Scalable cloud infrastructure' },
                        { name: 'Consulting', path: '/services/consulting', description: 'Expert business consulting' },
                        { name: 'Digital Transformation', path: '/services/digital', description: 'Complete digital solutions' }
                    ] 
                },
            ]
        },
        {
            title: 'About Us',
            path: '/about',
            submenu: [
                { 
                    title: 'Company',
                    description: 'Learn about our mission and values',
                    items: [
                        { name: 'About Us', path: '/about', description: 'Our story and mission' },
                        { name: 'Leadership', path: '/about/leadership', description: 'Meet our team' },
                        { name: 'Innovation', path: '/about/innovation', description: 'Our approach to innovation' },
                        { name: 'Sustainability', path: '/about/sustainability', description: 'Environmental commitment' }
                    ] 
                },
            ]
        },
        {
            title: 'Contact',
            path: '/contact',
            submenu: [
                { 
                    title: 'Knowledge Hub',
                    description: 'Insights and expertise',
                    items: [
                        { name: 'Research', path: '/resources/research', description: 'Latest industry research' },
                        { name: 'Case Studies', path: '/resources/case-studies', description: 'Client success stories' },
                        { name: 'White Papers', path: '/resources/white-papers', description: 'In-depth analysis' },
                        { name: 'Blog', path: '/resources/blog', description: 'Industry insights' }
                    ] 
                }
            ]
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <>
            <div className="h-20"></div>
            
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-gray-900'
            }`}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between h-20 items-center">
                        {/* Logo */}
                        <Link to="/" className="flex items-center space-x-3 group">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                                <span className="text-2xl font-bold text-white">T</span>
                            </div>
                            <span className="text-2xl font-bold text-white group-hover:text-blue-400 transition duration-200">TechNova</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1">
                            <Link
                                to="/"
                                className={`px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition duration-200 flex items-center space-x-2 ${
                                    isActive('/') ? 'bg-gray-800 text-white' : ''
                                }`}
                            >
                                <Home className="w-4 h-4" />
                                <span>Home</span>
                            </Link>

                            {menuItems.map((item) => (
                                <div
                                    key={item.title}
                                    className="relative"
                                    onMouseEnter={() => setActiveMenu(item.title)}
                                    onMouseLeave={() => setActiveMenu(null)}
                                >
                                    <Link 
                                        to={item.path}
                                        className={`flex items-center space-x-1 text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-200 ${
                                            activeMenu === item.title ? 'bg-gray-800 text-white' : ''
                                        }`}
                                    >
                                        <span>{item.title}</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                                            activeMenu === item.title ? 'rotate-180' : ''
                                        }`} />
                                    </Link>

                                    {activeMenu === item.title && (
                                        <div className="absolute top-full left-0 pt-2">
                                            <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 w-72 overflow-hidden">
                                                {item.submenu.map((section) => (
                                                    <div key={section.title} className="p-6">
                                                        <h3 className="text-white font-semibold mb-2">{section.title}</h3>
                                                        <p className="text-gray-400 text-sm mb-4">{section.description}</p>
                                                        <ul className="space-y-2">
                                                            {section.items.map((subitem) => (
                                                                <li key={subitem.name}>
                                                                    <Link
                                                                        to={subitem.path}
                                                                        className="group flex items-center p-2 -mx-2 rounded-lg hover:bg-gray-700 transition duration-200"
                                                                    >
                                                                        <div>
                                                                            <div className="text-gray-300 group-hover:text-white font-medium">
                                                                                {subitem.name}
                                                                            </div>
                                                                            <div className="text-gray-500 text-sm">
                                                                                {subitem.description}
                                                                            </div>
                                                                        </div>
                                                                        <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" />
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right Side Actions */}
                        <div className="flex items-center space-x-4">
                            <button className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition duration-200">
                                <Search className="w-5 h-5" />
                            </button>
                            <Link
                                to="/contact"
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition duration-200 shadow-lg hover:shadow-blue-500/20 flex items-center space-x-2"
                            >
                                <span>Contact Us</span>
                                <ChevronDown className="w-4 h-4" />
                            </Link>
                            
                            {/* Mobile Menu Button */}
                            <button 
                                className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition duration-200"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-gray-800 border-t border-gray-700">
                        <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
                            <Link
                                to="/"
                                className="flex items-center space-x-2 text-gray-300 hover:text-white"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <Home className="w-5 h-5" />
                                <span>Home</span>
                            </Link>
                            
                            {menuItems.map((item) => (
                                <div key={item.title} className="space-y-4">
                                    <div className="text-white font-semibold">{item.title}</div>
                                    {item.submenu.map((section) => (
                                        <ul key={section.title} className="pl-4 space-y-2">
                                            {section.items.map((subitem) => (
                                                <li key={subitem.name}>
                                                    <Link
                                                        to={subitem.path}
                                                        className="text-gray-400 hover:text-white block transition duration-200"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {subitem.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export { NavBar };