// src/components/home/StyleCloud.jsx
import React from 'react';
import { motion } from 'framer-motion';

// 词云数据（实际应用中可从props传入）
const defaultWords = [
    { text: 'CSS', value: 100 },
    { text: '响应式', value: 85 },
    { text: '排版', value: 70 },
    { text: '动画', value: 65 },
    { text: '渐变', value: 60 },
    { text: 'Flexbox', value: 75 },
    { text: 'Grid', value: 72 },
    { text: '阴影', value: 55 },
    { text: '色彩理论', value: 60 },
    { text: '可访问性', value: 80 },
    { text: '微交互', value: 65 },
    { text: '暗色模式', value: 75 },
    { text: '3D变换', value: 50 },
    { text: '滤镜', value: 45 },
    { text: '留白', value: 70 },
    { text: '网格系统', value: 65 },
    { text: '卡片设计', value: 60 },
    { text: 'UI组件', value: 75 },
    { text: '交互设计', value: 70 }
];

const StyleCloud = ({ words = defaultWords, onWordClick }) => {
    // 随机位置因子（保持一致布局）
    const getPosition = (index, total) => {
        // 基于圆形布局计算位置
        const angle = (index / total) * Math.PI * 2;
        // 添加一些随机性使布局更自然
        const radius = 30 + Math.random() * 25;
        return {
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius
        };
    };

    // 计算基于value的字体大小
    const getFontSize = (value) => {
        const min = 14; // 最小字号
        const max = 38; // 最大字号
        return min + ((value / 100) * (max - min));
    };

    // 随机颜色列表
    const colors = [
        'text-blue-500', 'text-purple-500', 'text-indigo-500',
        'text-pink-500', 'text-red-500', 'text-orange-500',
        'text-green-500', 'text-teal-500', 'text-cyan-500'
    ];

    return (
        <div className="bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg relative min-h-[300px]">
            <div className="flex flex-wrap justify-center items-center">
                {words.map((word, index) => {
                    // 获取位置和大小
                    const position = getPosition(index, words.length);
                    const fontSize = getFontSize(word.value);
                    const color = colors[index % colors.length];

                    return (
                        <motion.span
                            key={index}
                            className={`inline-block m-2 ${color} font-medium hover:underline cursor-pointer`}
                            style={{
                                fontSize: `${fontSize}px`,
                                position: 'relative'
                            }}
                            initial={{ opacity: 0, x: position.x, y: position.y }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                y: 0,
                                transition: { delay: index * 0.05, type: 'spring', stiffness: 100 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            onClick={() => onWordClick && onWordClick(word)}
                        >
                            {word.text}
                        </motion.span>
                    );
                })}
            </div>
        </div>
    );
};

export default StyleCloud;
