// src/pages/PracticesListPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { getBestPractices } from '../data/dataService';
import Container from '../components/common/Container';

const PracticeCard = ({ practice, onNavigate }) => {
    return (
        <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer"
            whileHover={{ y: -5 }}
            onClick={() => onNavigate(`/practices/${practice.id}`)}
        >
            <div className={`h-2 bg-gradient-to-r ${practice.color}`}></div>
            <div className="p-6">
                <div className="text-3xl mb-4">{practice.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{practice.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {practice.description.substring(0, 120)}...
                </p>
                <div
                    className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                >
                    查看详情 →
                </div>
            </div>
        </motion.div>
    );
};

const PracticesListPage = ({ onNavigate }) => {
    const practices = getBestPractices();

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">最佳实践</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            发现如何融合多种设计风格，创造出既美观又实用的用户界面
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {practices.map((practice, index) => (
                            <motion.div
                                key={practice.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <PracticeCard practice={practice} onNavigate={onNavigate} />
                            </motion.div>
                        ))}
                    </div>

                    {/* 如果实践太少，添加一些建议卡片 */}
                    {practices.length < 3 && (
                        <div className="mt-16">
                            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">推荐资源</h2>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="text-green-500 mr-2 text-xl">✓</div>
                                        <p className="text-gray-700 dark:text-gray-300">探索如何结合扁平化设计的简洁性和材料设计的层次感</p>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="text-green-500 mr-2 text-xl">✓</div>
                                        <p className="text-gray-700 dark:text-gray-300">学习在保持一致性的同时如何融合多种设计风格</p>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="text-green-500 mr-2 text-xl">✓</div>
                                        <p className="text-gray-700 dark:text-gray-300">了解如何根据不同的用户场景选择合适的设计风格</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </motion.div>
            </Container>
        </div>
    );
};

export default PracticesListPage;
