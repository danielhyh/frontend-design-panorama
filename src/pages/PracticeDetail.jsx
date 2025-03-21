// src/pages/PracticeDetail.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import Container from '../components/common/Container';
import CodeDisplay from '../components/common/CodeDisplay';
import Button from '../components/common/Button';
import { getBestPractices } from '../data/dataService';

const PracticeDetail = () => {
    const { practiceId } = useParams();
    const [practice, setPractice] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 模拟从API获取数据的延迟
        const fetchData = () => {
            setLoading(true);

            // 获取最佳实践数据（这里简化为直接返回第一个）
            const practices = getBestPractices();
            const currentPractice = practices.find(p => p.id === practiceId) || practices[0];

            setPractice(currentPractice);
            setLoading(false);
        };

        fetchData();
        // 页面滚动到顶部
        window.scrollTo(0, 0);
    }, [practiceId]);

    if (loading || !practice) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-300">加载中...</p>
                </div>
            </div>
        );
    }

    // 示例代码
    const cssVariablesCode = `:root {
  /* 色彩系统 */
  --color-primary: #5b63fe;
  --color-primary-dark: #3042fc;
  --color-secondary: #f87171;
  --color-secondary-dark: #dc2626;
  --color-accent: #06b6d4;
  --color-accent-dark: #0e7490;
  
  /* 中性色调 */
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text-primary: #1e293b;
  --color-text-secondary: #64748b;
  --color-text-tertiary: #94a3b8;
  --color-border: #e2e8f0;
  
  /* 阴影系统 */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 15px rgba(0, 0, 0, 0.03);
  --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.05), 0 20px 40px rgba(0, 0, 0, 0.03);
  
  /* 圆角 */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #0f172a;
    --color-surface: #1e293b;
    --color-text-primary: #f1f5f9;
    --color-text-secondary: #cbd5e1;
    --color-text-tertiary: #94a3b8;
    --color-border: #334155;
  }
}`;

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            {/* 实践头部 */}
            <div
                className="py-20 px-6 text-white text-center"
                style={{ background: `linear-gradient(135deg, ${practice.color.includes('from-') ? '#5c6cff' : practice.color}, #4354eb)` }}
            >
                <Container>
                    <motion.h1
                        className="text-5xl font-bold mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {practice.name}
                    </motion.h1>
                    <motion.h2
                        className="text-2xl font-light mb-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {practice.subtitle || '融合设计的最佳实践'}
                    </motion.h2>
                </Container>
            </div>

            {/* 内容主体 */}
            <Container className="py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* 实践概述 */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">实践概述</h2>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                {practice.description}
                            </p>
                        </div>
                    </section>

                    {/* 核心原则 */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">核心原则</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {practice.coreFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="text-3xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* CSS变量实现 */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">CSS变量系统</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                            使用CSS变量创建灵活的主题系统，适应不同的设计需求和用户偏好
                        </p>
                        <CodeDisplay code={cssVariablesCode} language="css" title="主题变量系统" />
                    </section>

                    {/* 应用示例 */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">应用示例</h2>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">协调之美组件库</h3>

                            {/* 示例卡片 */}
                            <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                                    <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">融合设计卡片</h4>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                                        该卡片融合了多种设计风格的优点，在不同主题下保持一致的用户体验
                                    </p>
                                    <div className="flex justify-end">
                                        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md shadow-sm hover:shadow-md transition-all duration-300">
                                            了解更多
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* 按钮组 */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                <div className="flex flex-col items-center p-4">
                                    <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                                        主要按钮
                                    </button>
                                    <span className="mt-2 text-sm text-gray-500 dark:text-gray-400">Primary Button</span>
                                </div>
                                <div className="flex flex-col items-center p-4">
                                    <button className="w-full px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                                        次要按钮
                                    </button>
                                    <span className="mt-2 text-sm text-gray-500 dark:text-gray-400">Secondary Button</span>
                                </div>
                                <div className="flex flex-col items-center p-4">
                                    <button className="w-full px-6 py-3 bg-transparent text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-300">
                                        文本按钮
                                    </button>
                                    <span className="mt-2 text-sm text-gray-500 dark:text-gray-400">Text Button</span>
                                </div>
                            </div>

                            {/* 表单控件 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-4">
                                    <label className="block text-gray-700 dark:text-gray-300 mb-2">用户名</label>
                                    <input type="text" className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-300" placeholder="请输入用户名" />
                                </div>
                                <div className="p-4">
                                    <label className="block text-gray-700 dark:text-gray-300 mb-2">选择主题</label>
                                    <select className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-300">
                                        <option>自动（跟随系统）</option>
                                        <option>浅色主题</option>
                                        <option>深色主题</option>
                                        <option>高对比度</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 返回按钮 */}
                    <div className="mt-12">
                        <Button to="/" type="outline">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                            </svg>
                            返回首页
                        </Button>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
};

export default PracticeDetail;
