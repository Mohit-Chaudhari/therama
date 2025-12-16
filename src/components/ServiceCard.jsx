import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon: Icon, link }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
        >
            <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <Icon size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
            <Link
                to={link}
                className="inline-flex items-center text-primary-600 font-semibold group-hover:text-primary-700 hover:gap-2 transition-all"
            >
                Learn More <ArrowRight size={18} className="ml-1" />
            </Link>
        </motion.div>
    );
};

export default ServiceCard;
