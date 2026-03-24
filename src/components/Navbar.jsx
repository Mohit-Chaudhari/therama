import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const serviceCategories = [
        {
            title: "Start New Business",
            path: "/services#start-business",
            items: [
                "LLP Registration",
                "Pvt Ltd Company Registration",
                "One Person Company",
                "Public Limited Company",
                "Partnership Firm",
                "Section 8 Company",
                "Nidhi Company",
                "Producer Company",
                "Other Business Registration"
            ]
        },
        {
            title: "Government Registration",
            path: "/services#gov-registration",
            items: [
                "Digital Signature (DSC)",
                "GST Registration",
                "Import Export Code",
                "FSSAI Registration",
                "ISO Registration",
                "PF & ESI Registration",
                "MSME / Udyam",
                "Professional Tax",
                "Shop & Establishment Act"
            ]
        },
        {
            title: "IPR Services",
            path: "/services#ipr",
            items: [
                "Trademark Registration",
                "Copyright Registration",
                "Patent Registration",
                "Trademark Objection",
                "Trademark Renewal",
                "Design Registration"
            ]
        },
        {
            title: "Tax & Compliance",
            path: "/services#compliance",
            items: [
                "GST Return Filing",
                "Income Tax Return",
                "TDS Return Filing",
                "Annual Compliance",
                "Director KYC",
                "Company Closure",
                "Accounting Services"
            ]
        },
        {
            title: "Loan",
            path: "/services#loan",
            items: [
                "Personal Loan",
                "Home Loan"
            ]
        }
    ];

    const getSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    return (
        <>
            <div className="bg-primary-900 text-white py-2 text-sm hidden md:block z-50 relative">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex space-x-6">
                        <span className="flex items-center gap-2">
                            <Phone size={14} className="text-accent-500" /> +91 99993 10415
                        </span>
                        <span className="flex items-center gap-2">
                            <Mail size={14} className="text-accent-500" /> taxmainder@gmail.com
                        </span>
                    </div>
                    <div className="flex space-x-4">
                        <span>Expert Tax Consultancy</span>
                    </div>
                </div>
            </div>
            <nav
                className={`sticky top-0 z-40 w-full transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 py-4'
                    }`}
                onMouseLeave={() => setActiveDropdown(null)}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold text-primary-900 flex items-center gap-2 shrink-0">
                        <img src="/gst-seva-logo.svg" alt="GST Seva Logo" className="w-10 h-10" />
                        <span>GST Seva<span className="text-accent-600">.</span></span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-2">
                        <Link
                            to="/"
                            className={`px-4 py-2 font-medium transition-colors hover:text-accent-600 ${location.pathname === '/' ? 'text-accent-600' : 'text-gray-700'
                                }`}
                        >
                            Home
                        </Link>

                        {/* Mega Menu Trigger */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setActiveDropdown('services')}
                        >
                            <button
                                className={`px-4 py-2 font-medium transition-colors hover:text-accent-600 flex items-center gap-1 ${location.pathname.includes('services') ? 'text-accent-600' : 'text-gray-700'
                                    }`}
                            >
                                Services <ChevronDown size={14} />
                            </button>

                            {/* Mega Menu Dropdown */}
                            <AnimatePresence>
                                {activeDropdown === 'services' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full -left-20 mt-2 w-[800px] bg-white rounded-xl shadow-2xl border border-gray-100 p-8 grid grid-cols-4 gap-6 z-50 cursor-default"
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        {serviceCategories.map((category, idx) => (
                                            <div key={idx} className="space-y-4">
                                                <Link
                                                    to={category.path}
                                                    className="block font-bold text-primary-900 border-b border-gray-100 pb-2 mb-2 hover:text-accent-600 transition-colors"
                                                    onClick={() => setActiveDropdown(null)}
                                                >
                                                    {category.title}
                                                </Link>
                                                <ul className="space-y-2">
                                                    {category.items.map((item, itemIdx) => (
                                                        <li key={itemIdx}>
                                                            <Link
                                                                to={`/services/${getSlug(item)}`}
                                                                className="text-sm text-gray-500 hover:text-accent-600 transition-colors flex items-center gap-1 group/item"
                                                                onClick={() => setActiveDropdown(null)}
                                                            >
                                                                <ChevronRight size={12} className="opacity-0 -ml-3 group-hover/item:opacity-100 group-hover/item:ml-0 transition-all text-accent-500" />
                                                                {item}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            to="/about"
                            className={`px-4 py-2 font-medium transition-colors hover:text-accent-600 ${location.pathname === '/about' ? 'text-accent-600' : 'text-gray-700'
                                }`}
                        >
                            About Us
                        </Link>

                        <Link
                            to="/contact"
                            className={`px-4 py-2 font-medium transition-colors hover:text-accent-600 ${location.pathname === '/contact' ? 'text-accent-600' : 'text-gray-700'
                                }`}
                        >
                            Contact
                        </Link>
                    </div>

                    <div className="hidden lg:block">
                        <Link
                            to="/contact"
                            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
                        >
                            Get Started <ChevronRight size={16} />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-gray-700 focus:outline-none p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden h-screen overflow-y-auto pb-20"
                        >
                            <div className="container mx-auto px-6 py-4 flex flex-col space-y-2">
                                <Link
                                    to="/"
                                    className="py-3 text-lg font-medium border-b border-gray-50"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </Link>

                                <div className="py-2">
                                    <span className="text-lg font-medium text-gray-400 mb-2 block">Services</span>
                                    {serviceCategories.map((category, idx) => (
                                        <div key={idx} className="mb-4 pl-4 border-l-2 border-gray-100">
                                            <h4 className="font-bold text-gray-800 mb-2">{category.title}</h4>
                                            <div className="grid grid-cols-1 gap-2">
                                                {category.items.map((item, i) => (
                                                    <Link
                                                        key={i}
                                                        to={`/services/${getSlug(item)}`}
                                                        className="text-gray-500 text-sm py-1"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {item}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    to="/about"
                                    className="py-3 text-lg font-medium border-b border-gray-50"
                                    onClick={() => setIsOpen(false)}
                                >
                                    About Us
                                </Link>
                                <Link
                                    to="/contact"
                                    className="py-3 text-lg font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contact
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;
