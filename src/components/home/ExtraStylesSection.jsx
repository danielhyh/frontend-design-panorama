// src/components/home/ExtraStylesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const StyleCard = ({ style, index, onNavigate }) => {
    // 根据风格获取对应样式
    const getStyleSpecificClasses = () => {
        switch(style.id) {
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
            className="h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            onClick={() => onNavigate && onNavigate(`/styles/${style.id}`)}
        >
            <div className={`h-full rounded-lg shadow-md overflow-hidden cursor-pointer ${getStyleSpecificClasses()}`}>
                <div className={`h-2`} style={{ backgroundColor: style.color }}></div>
                <div className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{style.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{style.description.substring(0, 120)}...</p>
                    <div
                        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                    >
                        探索风格
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const ExtraStylesSection = ({ styles, onNavigate }) => {
    if (!styles || styles.length === 0) {
        return <div>没有可显示的额外风格数据</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {styles.map((style, index) => (
                <StyleCard
                    key={style.id}
                    style={style}
                    index={index}
                    onNavigate={onNavigate}
                />
            ))}
        </div>
    );
};

export default ExtraStylesSection;
