// src/components/style/ScenariosList.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ScenariosList = ({ scenarios }) => {
    if (!scenarios || scenarios.length === 0) {
        return <div>没有可显示的应用场景</div>;
    }

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <ul className="space-y-4">
                {scenarios.map((scenario, index) => (
                    <motion.li
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="text-blue-500 mr-2 text-xl">•</div>
                        <p className="text-gray-700 dark:text-gray-300">{scenario}</p>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
};

export default ScenariosList;
