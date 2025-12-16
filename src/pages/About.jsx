import React from 'react';
import Section from '../components/Section';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-20">
            <div className="bg-gray-50 py-20 border-b border-gray-100">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">About Therama</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">
                        We are a team of Chartered Accountants, Company Secretaries, and Legal Professionals dedicated to simplifying business compliance in India.
                    </p>
                </div>
            </div>

            <Section>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-primary-900 mb-6">Our Mission</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            At Therama, our mission is to empower entrepreneurs and businesses by removing the hurdles of legal and financial compliance. We believe that starting and running a business should be seamless, allowing you to focus on what matters most—growth and innovation.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Since our inception, we have helped over 500 businesses navigate the complex landscape of Indian corporate laws, tax regulations, and government registrations.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-start gap-4">
                            <div className="bg-primary-50 p-3 rounded-lg text-primary-600">
                                <Target size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">Precision & Accuracy</h3>
                                <p className="text-sm text-gray-600">We ensure 100% accuracy in all filings and registrations to avoid future liabilities.</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-start gap-4">
                            <div className="bg-accent-50 p-3 rounded-lg text-accent-600">
                                <Users size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">Client-Centric Approach</h3>
                                <p className="text-sm text-gray-600">Every client gets personalized attention. We are not just service providers; we are your partners.</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-start gap-4">
                            <div className="bg-green-50 p-3 rounded-lg text-green-600">
                                <Award size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">Industry Expertise</h3>
                                <p className="text-sm text-gray-600">Our team comprises veterans in finance and law with over a decade of experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default About;
