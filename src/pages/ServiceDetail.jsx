import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, FileText, Phone } from 'lucide-react';
import Section from '../components/Section';
import { servicesData, getDefaultService } from '../data/services';
import { motion } from 'framer-motion';

const ServiceDetail = () => {
    const { slug } = useParams();

    // Scroll to top on mount/change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    // Get data or default
    const service = servicesData[slug] || getDefaultService(slug);
    const Icon = service.icon;

    return (
        <div className="pt-20">
            {/* Hero Header */}
            <div className="bg-primary-900 text-white py-16 md:py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <Link to="/services" className="inline-flex items-center text-primary-200 hover:text-white mb-6 transition-colors">
                        <ArrowLeft size={16} className="mr-2" /> Back to Services
                    </Link>
                    <div className="flex items-start gap-6">
                        <div className="hidden md:flex w-20 h-20 bg-white/10 rounded-2xl items-center justify-center text-accent-400 shrink-0 border border-white/20">
                            <Icon size={40} />
                        </div>
                        <div>
                            <span className="text-accent-400 font-medium tracking-wide text-sm uppercase mb-2 block">{service.category}</span>
                            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{service.title}</h1>
                            <p className="text-xl text-primary-100 max-w-2xl">{service.shortDescription}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    {/* Overview */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                        <p className="text-gray-700 leading-relaxed text-lg">{service.overview}</p>
                    </section>

                    {/* Process */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Process flow</h2>
                        <div className="relative border-l-2 border-primary-100 pl-8 ml-4 space-y-8">
                            {service.process.map((step, index) => (
                                <div key={index} className="relative">
                                    <span className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-primary-600 border-4 border-white shadow-sm"></span>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Documents Required */}
                    <section className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <FileText className="text-accent-600" /> Documents Required
                        </h2>
                        <ul className="grid md:grid-cols-2 gap-4">
                            {service.documents.map((doc, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle size={18} className="text-green-500 mt-1 shrink-0" />
                                    <span className="text-gray-700 font-medium">{doc}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Why Choose Us */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose GST Seva?</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {service.whyChooseUs.map((reason, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                    <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-3">
                                        <CheckCircle size={20} />
                                    </div>
                                    <p className="font-semibold text-gray-800">{reason}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sticky top-32">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Get Expert Assistance</h3>
                        <p className="text-gray-600 mb-6">Ready to get started with {service.title}? Contact us today for a free consultation.</p>

                        <a href="tel:+919999310415" className="flex items-center gap-3 text-gray-800 font-bold mb-4 hover:text-primary-600 transition-colors p-3 bg-gray-50 rounded-lg">
                            <Phone className="text-accent-500" /> +91 99993 10415
                        </a>

                        <form className="space-y-4 mt-6">
                            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none" />
                            <input type="text" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none" />
                            <button className="w-full bg-primary-600 text-white font-bold py-3 rounded-lg hover:bg-primary-700 transition-colors shadow-md">
                                Request Callback
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
