// src/components/home/BestPracticeCards.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '../common/Card';

const BestPracticeCard = ({ practice, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="h-full"
        >
            <Card className="h-full">
                <div className={`h-2 bg-gradient-to-r ${practice.color}`}></div>
                <div className="p-6 flex flex-col h-full">
                    <div className="text-3xl mb-4">{practice.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{practice.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{practice.description}</p>
                    <Link
                        to={`/practices/${practice.id}`}
                        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                    >
                        探索实践
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </Link>
                </div>
            </Card>
        </motion.div>
    );
};

const BestPracticeCards = ({ practices }) => {
    if (!practices || practices.length === 0) {
        return <div>没有可显示的最佳实践数据</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practices.map((practice, index) => (
                <BestPracticeCard key={practice.id} practice={practice} index={index} />
            ))}
        </div>
    );
};

export default BestPracticeCards;
