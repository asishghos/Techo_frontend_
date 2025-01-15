import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, Facebook, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react';

const NavBar = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const menuItems = [
        {
            title: 'Services',
            path: '/services',
            submenu: [
                { 
                    title: 'Services', 
                    items: [
                        { name: 'AI & Analytics', path: '/services/ai-analytics' },
                        { name: 'Cloud Solutions', path: '/services/cloud' },
                        { name: 'Consulting', path: '/services/consulting' },
                        { name: 'Digital Transformation', path: '/services/digital' }
                    ] 
                },
            ]
        },
        {
            title: 'About Us',
            path: '/about',
            submenu: [
                { 
                    title: 'About Us', 
                    items: [
                        { name: 'About Us', path: '/about' },
                        { name: 'Leadership', path: '/about/leadership' },
                        { name: 'Innovation', path: '/about/innovation' },
                        { name: 'Sustainability', path: '/about/sustainability' }
                    ] 
                },
            ]
        },
        {
            title: 'Contact Us',
            path: '/contact',
            submenu: [
                { 
                    title: 'Contact Us', 
                    items: [
                        { name: 'Research', path: '/resources/research' },
                        { name: 'Case Studies', path: '/resources/case-studies' },
                        { name: 'White Papers', path: '/resources/white-papers' },
                        { name: 'Blog', path: '/resources/blog' }
                    ] 
                }
            ]
        }
    ];

    return (
        <>
            <div className="h-16"></div>

            <nav className="fixed top-0 left-0 right-0 bg-gray-950 border-b border-gray-800 shadow-lg z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between h-16 items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-white hover:text-blue-400 transition duration-200">TechNova</span>
                        </Link>

                        <div className="hidden lg:flex items-center space-x-8">
                            {menuItems.map((item) => (
                                <div
                                    key={item.title}
                                    className="relative group"
                                    onMouseEnter={() => setActiveMenu(item.title)}
                                    onMouseLeave={() => setActiveMenu(null)}
                                >
                                    <Link 
                                        to={item.path}
                                        className="flex items-center space-x-1 text-gray-300 hover:text-blue-400 px-3 py-2 transition duration-200"
                                    >
                                        <span>{item.title}</span>
                                        <ChevronDown className="w-4 h-4" />
                                    </Link>

                                    {activeMenu === item.title && (
                                        <div className="absolute top-full left-0 w-60 bg-blue-500 border-t border-gray-800 shadow-xl">
                                            <div className="p-8">
                                                {item.submenu.map((section) => (
                                                    <div key={section.title}>
                                                        <h3 className="text-white font-semibold mb-4">{section.title}</h3>
                                                        <ul className="space-y-2">
                                                            {section.items.map((subitem) => (
                                                                <li key={subitem.name}>
                                                                    <Link
                                                                        to={subitem.path}
                                                                        className="text-gray-400 hover:text-blue-400 block transition duration-200"
                                                                    >
                                                                        {subitem.name}
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

                        <div className="flex items-center space-x-4">
                            <button className="text-gray-300 hover:text-blue-400 transition duration-200">
                                <Search className="w-5 h-5" />
                            </button>
                            <Link
                                to="/contact"
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-200 shadow-lg hover:shadow-blue-500/50"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export { NavBar };