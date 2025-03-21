import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';

const ToolCard = ({ title, description, icon, color, path, onNavigate }) => {
    return (
        <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            whileHover={{ y: -5 }}
            onClick={() => onNavigate(path)}
        >
            <div className={`p-6 cursor-pointer`}>
                <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-4`}>
                    <span className="text-white text-xl">{icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{description}</p>
            </div>
        </motion.div>
    );
};

const AdvancedTools = ({ onNavigate }) => {
    const tools = [
        {
            title: "风格比较工具",
            description: "比较不同设计风格之间的特点、区别和应用场景",
            icon: "⚖️",
            color: "bg-purple-600",
            path: "/tools/comparison"
        },
        {
            title: "CSS生成器",
            description: "根据设计风格生成相应的CSS代码片段",
            icon: "🎨",
            color: "bg-blue-500",
            path: "/tools/generator"
        },
        {
            title: "设计趋势分析",
            description: "分析当前和未来的前端设计发展趋势",
            icon: "📊",
            color: "bg-green-500",
            path: "/tools/trends"
        }
    ];

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">高级设计工具</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            使用这些交互式工具深入探索和应用各种设计风格
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tools.map((tool, index) => (
                            <motion.div
                                key={tool.path}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <ToolCard
                                    title={tool.title}
                                    description={tool.description}
                                    icon={tool.icon}
                                    color={tool.color}
                                    path={tool.path}
                                    onNavigate={onNavigate}
                                />
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">如何使用这些工具？</h2>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                            <ol className="text-left text-gray-700 dark:text-gray-300 space-y-4">
                                <li className="flex items-start">
                                    <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                                    <p><strong>风格比较工具</strong> - 选择任意两种设计风格进行并排比较，了解它们在视觉元素、布局结构和应用场景方面的差异。</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                                    <p><strong>CSS生成器</strong> - 选择特定设计风格和组件类型，自动生成符合该风格的CSS代码，可直接复制应用到你的项目中。</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                                    <p><strong>设计趋势分析</strong> - 查看前端设计发展历史和未来趋势预测，帮助你做出前瞻性的设计决策。</p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
};

export default AdvancedTools; 