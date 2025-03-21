// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import Timeline from '../components/home/Timeline';
import BestPracticeCards from '../components/home/BestPracticeCards';
import StyleCloud from '../components/home/StyleCloud';
import Container from '../components/common/Container';
import { getAllStyles, getBestPractices } from '../data/dataService';

const Home = ({ onNavigate }) => {
    const allStyles = getAllStyles();
    const bestPractices = getBestPractices();

    // 词云点击处理
    const handleWordClick = (word) => {
        console.log(`词云标签点击: ${word.text}`);
        // 根据标签名称导航到相应页面
        if (word && word.text) {
            const style = allStyles.find(s => s.name.toLowerCase().includes(word.text.toLowerCase()));
            if (style) {
                onNavigate(`/styles/${style.id}`);
            }
        }
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            {/* Hero区域 */}
            <HeroSection onNavigate={onNavigate} />

            {/* 设计风格演化时间线 */}
            <section className="py-20 px-6">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">设计风格演化时间线</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                                从拟物化设计到暗黑模式，探索前端设计风格的演变历程
                            </p>
                        </div>

                        <Timeline styles={allStyles} onNavigate={onNavigate} />
                    </motion.div>
                </Container>
            </section>

            {/* 最佳实践区域 */}
            <section className="py-20 px-6 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">混合设计最佳实践</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                                融合多种设计风格的优点，创造既美观又实用的用户界面
                            </p>
                        </div>

                        <BestPracticeCards practices={bestPractices} onNavigate={onNavigate} />
                    </motion.div>
                </Container>
            </section>

            {/* 样式词云区域 */}
            <section className="py-20 px-6">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">前端样式词云</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                                发现前端设计中的关键概念和流行趋势
                            </p>
                        </div>

                        <StyleCloud onWordClick={handleWordClick} />
                    </motion.div>
                </Container>
            </section>

            {/* 号召性行动区域 */}
            <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">开始你的设计探索之旅</h2>
                        <p className="text-xl mb-10 max-w-3xl mx-auto">
                            深入了解每种设计风格的特点、应用场景和实现技巧，提升你的设计与开发技能
                        </p>
                        <button
                            className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            onClick={() => onNavigate('/styles/material-design')}
                        >
                            探索材料设计 →
                        </button>
                    </motion.div>
                </Container>
            </section>
        </div>
    );
};

export default Home;
