// src/pages/StyleDetail.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import StyleHeader from '../components/style/StyleHeader';
import FeaturesList from '../components/style/FeaturesList';
import TipsSection from '../components/style/TipsSection';
import ScenariosList from '../components/style/ScenariosList';
import ElementShowcase from '../components/style/ElementShowcase';
import NavigationButtons from '../components/style/NavigationButtons';
import Container from '../components/common/Container';
import { getStyleById, getPreviousStyle, getNextStyle } from '../data/dataService';

const StyleDetail = () => {
    const { styleId } = useParams();
    const [style, setStyle] = useState(null);
    const [prevStyle, setPrevStyle] = useState(null);
    const [nextStyle, setNextStyle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 模拟从API获取数据的延迟
        const fetchData = () => {
            setLoading(true);

            // 假设styleId来自URL参数
            const currentId = styleId || 'material-design'; // 默认显示Material Design

            const currentStyle = getStyleById(currentId);
            const previousStyle = getPreviousStyle(currentId);
            const nextStyle = getNextStyle(currentId);

            setStyle(currentStyle);
            setPrevStyle(previousStyle);
            setNextStyle(nextStyle);
            setLoading(false);
        };

        fetchData();
        // 页面滚动到顶部
        window.scrollTo(0, 0);
    }, [styleId]);

    if (loading || !style) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-300">加载中...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            {/* 风格头部 */}
            <StyleHeader style={style} />

            {/* 内容主体 */}
            <Container className="py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* 风格描述 */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">风格概述</h2>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                {style.description}
                            </p>
                        </div>
                    </section>

                    {/* 核心特征 */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">核心特征</h2>
                        <FeaturesList features={style.coreFeatures} />
                    </section>

                    {/* 实现技巧 */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">实现技巧</h2>
                        <TipsSection tips={style.implementationTips} />
                    </section>

                    {/* 应用场景 */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">应用场景</h2>
                        <ScenariosList scenarios={style.applicationScenarios} />
                    </section>

                    {/* 元素展示 */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">风格元素示例</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                            悬停或点击查看实现代码，轻松掌握{style.name}的关键元素
                        </p>
                        <ElementShowcase elements={style.elements} />
                    </section>

                    {/* 导航按钮 */}
                    <NavigationButtons prevStyle={prevStyle} nextStyle={nextStyle} />
                </motion.div>
            </Container>
        </div>
    );
};

export default StyleDetail;
