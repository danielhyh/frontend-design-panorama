// src/components/style/OtherStyles.jsx
import React from 'react';
import { motion } from 'framer-motion';

const OtherStyles = ({ styles, onNavigate }) => {
    const additionalStyles = [
        {
            id: '3d-elements',
            name: '3D设计元素',
            description: '通过添加深度和维度，创造出具有空间感的数字界面，为用户带来更加沉浸式的体验。',
            color: 'rgb(66, 135, 245)'
        },
        {
            id: 'minimal-motion',
            name: '极简动效设计',
            description: '专注于精心设计的微妙动画，提供功能性反馈和引导用户注意力。',
            color: 'rgb(255, 128, 64)'
        },
        {
            id: 'micro-interactions',
            name: '微交互设计',
            description: '关注用户与界面元素互动时的细微反馈，通过小型、针对性强的交互增强用户体验。',
            color: 'rgb(102, 187, 106)'
        },
        {
            id: 'asymmetric-layouts',
            name: '非对称布局',
            description: '挑战传统的网格系统，使用不规则的排列和分布创造动态平衡，为用户提供独特体验。',
            color: 'rgb(171, 71, 188)'
        },
        {
            id: 'typography-focused',
            name: '字体为王',
            description: '以排版为核心的设计将文字视为主要设计元素，通过精心选择和排列字体来创建视觉层次。',
            color: 'rgb(38, 198, 218)'
        }
    ];

    // 组合传入的风格和额外风格，并限制总数为6个
    const allStyles = [...(styles || []), ...additionalStyles].slice(0, 6);

    return (
        <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">探索更多设计风格</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allStyles.map(style => (
                    <motion.div
                        key={style.id}
                        className="style-card bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => onNavigate(`/styles/${style.id}`)}
                    >
                        <div className="h-3" style={{ backgroundColor: style.color }}></div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{style.name}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                {typeof style.description === 'string' ? style.description.substring(0, 100) + '...' : '探索这种独特的设计风格...'}
                            </p>
                            <p className="style-button text-blue-600 dark:text-blue-400 hover:underline cursor-pointer inline-block px-0">
                                查看详情 →
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default OtherStyles;
