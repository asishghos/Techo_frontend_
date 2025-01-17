import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { MapComponent } from '../components/Map';
// Contact Page Component
const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        setFormData({
            name: '',
            email: '',
            message: ''
        });

        alert('Message sent successfully!');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    // Office location coordinates
    const officeLocation = {
        lat: 37.7749,
        lng: -122.4194
    };
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
                                Contact <span className="text-blue-400">Us</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-center">
                                Get in touch with our team. We're here to help and answer any questions you might have.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 pb-20">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700">
                                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>

                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 bg-blue-500/10 rounded-lg">
                                            <Mail className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400">Email</p>
                                            <p className="text-white">contact@technova.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 bg-blue-500/10 rounded-lg">
                                            <Phone className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400">Phone</p>
                                            <p className="text-white">+1 (555) 123-4567</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 bg-blue-500/10 rounded-lg">
                                            <MapPin className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400">Address</p>
                                            <p className="text-white">Sat Bari, New Delhi, Delhi 110074</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 bg-blue-500/10 rounded-lg">
                                            <Clock className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400">Business Hours</p>
                                            <p className="text-white">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                        </div>
                                    </div>
                                </div>

                                {/* OpenStreetMap Integration */}
                                <MapComponent />
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <form onSubmit={handleSubmit} className="bg-gray-800/30 rounded-xl p-8 border border-gray-700">
                                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>

                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="6"
                                            className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                                            placeholder="Your message"
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors flex items-center justify-center gap-2"
                                    >
                                        Send Message
                                        <Send className="w-4 h-4" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;