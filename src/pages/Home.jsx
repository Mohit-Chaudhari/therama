import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, TrendingUp, Shield, Users, Building, FileText, Globe } from 'lucide-react';
import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <div className="relative bg-primary-900 min-h-[90vh] flex items-center overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-800/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-accent-500/10 text-accent-400 font-medium text-sm mb-6 border border-accent-500/20">
                            Trusted by 500+ Businesses
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                            Expert Financial <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                                Solutions
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                            We simplify business registration, compliance, and tax planning so you can focus on growth. Your partner in financial success.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2"
                            >
                                Get Started Now <ArrowRight size={20} />
                            </Link>
                            <Link
                                to="/services"
                                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold transition-all backdrop-blur-sm flex items-center justify-center"
                            >
                                View Services
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden md:block"
                    >
                        <div className="relative z-10 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                    <TrendingUp size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">Growth Analysis</h3>
                                    <p className="text-gray-400 text-sm">Year over Year</p>
                                </div>
                                <div className="ml-auto text-green-400 font-bold text-xl">+127%</div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-3/4 bg-accent-500 rounded-full"></div>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-1/2 bg-blue-500 rounded-full"></div>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-5/6 bg-green-500 rounded-full"></div>
                                </div>
                            </div>
                            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-3xl font-bold text-white mb-1">500+</div>
                                    <div className="text-gray-400 text-sm">Clients Served</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white mb-1">99%</div>
                                    <div className="text-gray-400 text-sm">Satisfaction Rate</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Services Section */}
            <Section background="gray" id="services">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Comprehensive Business Solutions</h2>
                    <p className="text-lg text-gray-600">From company registration to annual compliance, we handle the complexities of business finance.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <ServiceCard
                        title="Start New Business"
                        description="Expert guidance for LLP, Private Limited, and One Person Company registration. Get your business compliant from day one."
                        icon={Building}
                        link="/services"
                    />
                    <ServiceCard
                        title="Tax & Compliance"
                        description="Seamless GST Returns, Income Tax filing, and annual compliance management to keep your business penalty-free."
                        icon={FileText}
                        link="/services"
                    />
                    <ServiceCard
                        title="Intellectual Property"
                        description="Protect your brand with Trademark, Copyright, and Patent registration services. Secure your business identity."
                        icon={Shield}
                        link="/services"
                    />
                    <ServiceCard
                        title="Government Registration"
                        description="Hassle-free ISO, FSSAI, Import Export Code (IEC), and other government certifications."
                        icon={Globe}
                        link="/services"
                    />
                    <ServiceCard
                        title="Digital Signatures"
                        description="Get Class 3 Digital Signature Certificates (DSC) for e-filing and secure document signing."
                        icon={FileText}
                        link="/services"
                    />
                    <ServiceCard
                        title="Audit & Assurance"
                        description="Internal audits, statutory audits, and financial reporting to ensure transparency and trust."
                        icon={TrendingUp}
                        link="/services"
                    />
                </div>
            </Section>

            {/* Why Choose Us */}
            <Section background="white">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Why Choose GST Seva?</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            We combine years of expertise with modern technology to provide fast, reliable, and transparent services.
                        </p>
                        <div className="space-y-6">
                            {[
                                "10+ Years of Experience in Financial Law",
                                "Dedicated Support Team for Every Client",
                                "100% Online Process - No Paperwork Hassle",
                                "Transparent Pricing - No Hidden Costs"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                        <CheckCircle size={16} />
                                    </div>
                                    <span className="text-lg text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                        <Link to="/about" className="mt-8 inline-block text-primary-600 font-bold hover:text-primary-700">
                            Read More About Us &rarr;
                        </Link>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-white p-8 border border-primary-100">
                            <div className="grid grid-cols-2 gap-4 h-full">
                                <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-center items-center text-center">
                                    <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                                    <div className="text-gray-500 text-sm">Happy Clients</div>
                                </div>
                                <div className="bg-primary-900 p-6 rounded-xl shadow-sm flex flex-col justify-center items-center text-center text-white mt-8">
                                    <div className="text-4xl font-bold text-accent-500 mb-2">99%</div>
                                    <div className="text-primary-200 text-sm">Success Rate</div>
                                </div>
                                <div className="bg-accent-50 p-6 rounded-xl shadow-sm flex flex-col justify-center items-center text-center -mt-8">
                                    <div className="text-4xl font-bold text-accent-600 mb-2">24/7</div>
                                    <div className="text-gray-600 text-sm">Support</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-center items-center text-center">
                                    <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
                                    <div className="text-gray-500 text-sm">Years Exp.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section background="primary" className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
                <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
                    Contact us today for a free consultation. Let's discuss how we can help you achieve your financial goals.
                </p>
                <Link
                    to="/contact"
                    className="px-8 py-4 bg-white text-primary-900 rounded-full font-bold transition-all hover:bg-gray-100 hover:shadow-lg inline-flex items-center gap-2"
                >
                    Get Free Consultation <ArrowRight size={20} />
                </Link>
            </Section>
        </div>
    );
};

export default Home;
