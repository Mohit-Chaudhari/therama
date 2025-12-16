import React from 'react';
import Section from '../components/Section';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-20">
            <Section background="white">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">Get in Touch</h1>
                    <p className="text-xl text-gray-600">We'd love to hear from you. Our team is always here to chat.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Contact Info Cards */}
                    <div className="bg-gray-50 p-8 rounded-2xl text-center">
                        <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Phone</h3>
                        <p className="text-gray-600 mb-2">Mon-Fri from 9am to 6pm</p>
                        <a href="tel:+919876543210" className="text-primary-600 font-bold hover:underline">+91 98765 43210</a>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl text-center">
                        <div className="w-12 h-12 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Email</h3>
                        <p className="text-gray-600 mb-2">Our team will get back to you within 24 hours.</p>
                        <a href="mailto:contact@therama.in" className="text-primary-600 font-bold hover:underline">contact@therama.in</a>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl text-center">
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Office</h3>
                        <p className="text-gray-600 mb-2">Visit us at our HQ.</p>
                        <address className="text-primary-600 font-bold not-italic">123 Business Park, New Delhi</address>
                    </div>
                </div>
            </Section>

            <Section background="gray">
                <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-lg">
                    <h2 className="text-2xl font-bold text-primary-900 mb-6">Send us a message</h2>
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="Doe" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="button" className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg">
                            Send Message
                        </button>
                    </form>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
