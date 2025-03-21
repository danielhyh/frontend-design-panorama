// src/components/style/TipsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const TipsSection = ({ tips }) => {
    if (!tips || tips.length === 0) {
        return <div>没有可显示的实现技巧</div>;
    }

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <ul className="space-y-4">
                {tips.map((tip, index) => (
                    <motion.li
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="text-green-500 mr-2 text-xl">✓</div>
                        <p className="text-gray-700 dark:text-gray-300">{tip}</p>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
};

export default TipsSection;
