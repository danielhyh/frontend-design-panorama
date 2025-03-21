// src/components/style/FeaturesList.jsx
import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ feature, index }) => {
    return (
        <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
        </motion.div>
    );
};

const FeaturesList = ({ features }) => {
    if (!features || features.length === 0) {
        return <div>没有可显示的特征数据</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
            ))}
        </div>
    );
};

export default FeaturesList;
