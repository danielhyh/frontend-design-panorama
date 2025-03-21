// src/components/style/ElementShowcase.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CodeDisplay from '../common/CodeDisplay';

const ElementCard = ({ element }) => {
    const [showCode, setShowCode] = useState(false);

    return (
        <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
        >
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{element.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{element.description}</p>
                <button
                    className="text-blue-600 dark:text-blue-400 hover:underline focus:outline-none"
                    onClick={() => setShowCode(!showCode)}
                >
                    {showCode ? '隐藏代码' : '查看代码'} →
                </button>

                {showCode && (
                    <div className="mt-4">
                        <CodeDisplay code={element.cssCode} language="css" />
                    </div>
                )}
            </div>
        </motion.div>
    );
};

const ElementShowcase = ({ elements }) => {
    if (!elements || elements.length === 0) {
        return <div>没有可显示的元素数据</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {elements.map((element, index) => (
                <ElementCard key={index} element={element} />
            ))}
        </div>
    );
};

export default ElementShowcase;
