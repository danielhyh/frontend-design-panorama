// src/pages/StylesListPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { getAllStyles, getExtraStyles } from '../data/dataService';
import Container from '../components/common/Container';

const StyleCard = ({ style, onNavigate }) => {
    // 根据风格获取对应样式
    const getStyleSpecificClasses = () => {
        switch(style.id) {
            case 'skeuomorphism':
                return 'bg-gradient-to-b from-gray-100 to-gray-300 border border-gray-400 shadow-md';
            case 'flat-design':
                return 'bg-white border-l-4 border-blue-500';
            case 'material-design':
                return 'bg-white shadow-md hover:shadow-lg transition-shadow duration-300';
            case 'neumorphism':
                return 'bg-gray-200 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]';
            case 'glassmorphism':
                return 'bg-white/20 backdrop-blur-md border border-white/30';
            case 'dark-mode':
                return 'bg-gray-800 text-white';
            case '3d-elements':
                return 'bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-200';
            case 'minimal-motion':
                return 'bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-200';
            case 'micro-interactions':
                return 'bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-200';
            case 'asymmetric-layouts':
                return 'bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 border border-purple-200';
            case 'typography-focused':
                return 'bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-200';
            default:
                return 'bg-white dark:bg-gray-800';
        }
    };

    return (
        <motion.div
            className={`rounded-lg overflow-hidden cursor-pointer ${getStyleSpecificClasses()}`}
            whileHover={{ y: -5 }}
            onClick={() => onNavigate(`/styles/${style.id}`)}
        >
            <div className="h-2" style={{ backgroundColor: style.color }}></div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{style.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {style.description.substring(0, 120)}...
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">{style.period}</div>
                <div
                    className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                >
                    查看详情 →
                </div>
            </div>
        </motion.div>
    );
};

const StylesListPage = ({ onNavigate }) => {
    const mainStyles = getAllStyles();
    const extraStyles = getExtraStyles();
    const allStyles = [...mainStyles, ...extraStyles];

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">所有设计风格</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            探索各种前端设计风格，了解它们的特点、应用场景和实现技巧
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allStyles.map((style, index) => (
                            <motion.div
                                key={style.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <StyleCard style={style} onNavigate={onNavigate} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </div>
    );
};

export default StylesListPage;
