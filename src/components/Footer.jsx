import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary-950 text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div>
                        <div className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white font-serif">T</div>
                            <span>GST Seva<span className="text-accent-500">.</span></span>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Providing professional tax consultancy, company registration, and financial compliance services. Your partner in business growth.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-600 transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-600 transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-600 transition-colors">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 border-l-4 border-accent-500 pl-3">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 border-l-4 border-accent-500 pl-3">Our Services</h3>
                        <ul className="space-y-3">
                            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Company Registration</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">GST Services</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Income Tax Returns</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Trademark & IPR</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Annual Compliance</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 border-l-4 border-accent-500 pl-3">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="text-accent-500 mt-1 shrink-0" size={18} />
                                <span>New Delhi, India</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="text-accent-500 shrink-0" size={18} />
                                <span>+91 99993 10415</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="text-accent-500 shrink-0" size={18} />
                                <span>taxmainder@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} GST Seva. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
