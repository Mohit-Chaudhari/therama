import React from 'react';
import Section from '../components/Section';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceCategory = ({ title, services, color }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
    >
        <div className={`p-6 ${color} text-white`}>
            <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <div className="p-8">
            <ul className="space-y-4">
                {services.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <Check size={20} className="text-green-500 mt-1 shrink-0" />
                        <span className="text-gray-700 font-medium">{service}</span>
                    </li>
                ))}
            </ul>
            <button className="mt-8 w-full py-3 border-2 border-primary-100 text-primary-600 font-bold rounded-xl hover:bg-primary-50 transition-colors flex items-center justify-center gap-2">
                Learn More <ArrowRight size={18} />
            </button>
        </div>
    </motion.div>
);

const Services = () => {
    const categories = [
        {
            title: "Start New Business",
            color: "bg-blue-600",
            services: [
                "Limited Liability Partnership (LLP) Registration",
                "Private Limited Company Registration",
                "One Person Company (OPC) Registration",
                "Public Limited Company Registration",
                "Partnership Firm Registration"
            ]
        },
        {
            title: "Government Registration",
            color: "bg-indigo-600",
            services: [
                "Goods & Services Tax (GST) Registration",
                "Import Export Code (IEC)",
                "FSSAI (Food License) Registration",
                "MSME / Udyam Registration",
                "Digital Signature Certificate (DSC)",
                "ISO Certification"
            ]
        },
        {
            title: "Intellectual Property Rights",
            color: "bg-purple-600",
            services: [
                "Trademark Registration",
                "Copyright Registration",
                "Patent Filing",
                "Trademark Objection Reply",
                "Trademark Renewal"
            ]
        },
        {
            title: "Tax & Compliance",
            color: "bg-emerald-600",
            services: [
                "GST Return Filing",
                "Income Tax Return (ITR) Filing",
                "TDS Return Filing",
                "Annual Company Compliance",
                "Diretor KYC",
                "Company Closure / Winding Up"
            ]
        }
    ];

    return (
        <div className="pt-20">
            <div className="bg-primary-900 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-primary-100 max-w-2xl mx-auto">
                        Comprehensive financial and legal solutions designed to support your business at every stage of its lifecycle.
                    </p>
                </div>
            </div>

            <Section>
                <div className="grid md:grid-cols-2 gap-8">
                    {categories.map((cat, index) => (
                        <ServiceCategory
                            key={index}
                            title={cat.title}
                            services={cat.services}
                            color={cat.color}
                        />
                    ))}
                </div>
            </Section>

            <Section background="gray" className="text-center">
                <h2 className="text-3xl font-bold text-primary-900 mb-8">Need custom advice?</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Not sure which service you need? Our experts are here to help you navigate the complexities of business compliance.
                </p>
                <a href="/contact" className="inline-block px-8 py-4 bg-accent-600 text-white font-bold rounded-full hover:bg-accent-700 transition-colors shadow-lg">
                    Talk to an Expert
                </a>
            </Section>
        </div>
    );
};

export default Services;
