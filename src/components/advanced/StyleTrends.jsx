// src/components/advanced/StyleTrends.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getAllStyles } from '../../data/dataService';

// 模拟趋势数据
const generateTrendData = (styles) => {
    // 年份范围
    const years = [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

    // 为每个风格生成趋势线
    const data = years.map(year => {
        const yearData = { year };

        styles.forEach(style => {
            // 提取时期年份
            const periodYears = style.period.split('-').map(p => {
                if (p === '至今') return new Date().getFullYear();
                return parseInt(p);
            });

            const startYear = periodYears[0];
            const endYear = periodYears[1] || new Date().getFullYear();

            // 计算流行度分数
            if (year < startYear) {
                // 风格出现前
                yearData[style.id] = 0;
            } else if (year >= startYear && year <= endYear) {
                // 风格流行期间
                // 计算流行曲线 - 开始增长，达到顶峰，然后开始下降
                const duration = endYear - startYear;
                const position = year - startYear;
                const normalizedPosition = position / duration;

                // 钟形曲线
                if (normalizedPosition < 0.5) {
                    // 上升期
                    yearData[style.id] = normalizedPosition * 2 * 100; // 从0上升到100
                } else {
                    // 下降期
                    yearData[style.id] = (1 - (normalizedPosition - 0.5) * 2) * 100; // 从100下降到0
                }

                // 如果是"至今"，则保持在高位
                if (style.period.includes('至今') && year >= startYear) {
                    const yearsActive = year - startYear;
                    // 较新的风格保持较高水平
                    yearData[style.id] = Math.min(100, 70 + yearsActive * 5);
                }
            } else {
                // 风格结束后
                yearData[style.id] = Math.max(0, 100 - (year - endYear) * 20); // 迅速下降
            }

            // 确保值是有效的数字
            yearData[style.id] = Math.max(0, Math.min(100, Math.round(yearData[style.id])));
        });

        return yearData;
    });

    return data;
};

const StyleTrends = () => {
    const styles = getAllStyles();
    const trendData = generateTrendData(styles);

    // 为每个风格生成随机颜色
    const styleColors = {
        'skeuomorphism': '#ff7043',
        'flat-design': '#42a5f5',
        'material-design': '#66bb6a',
        'neumorphism': '#ab47bc',
        'glassmorphism': '#26c6da',
        'dark-mode': '#5c6bc0',
        'harmonic-fusion': '#5b63fe'
    };

    return (
        <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">设计风格流行趋势</h2>

            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm mb-6">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                    此图表展示了各种设计风格从2007年到现在的流行趋势变化。从拟物化设计的兴起到各种现代风格的演变，我们可以看到前端设计风格的多样化发展。
                </p>

                <div className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={trendData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis label={{ value: '流行度', angle: -90, position: 'insideLeft' }} />
                            <Tooltip formatter={(value) => [`${value}%`, '']} />
                            <Legend />

                            {styles.map(style => (
                                <Line
                                    key={style.id}
                                    type="monotone"
                                    dataKey={style.id}
                                    name={style.name}
                                    stroke={styleColors[style.id] || '#8884d8'}
                                    strokeWidth={2}
                                    dot={{ r: 4 }}
                                    activeDot={{ r: 6 }}
                                />
                            ))}
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">趋势分析</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li>• <strong>拟物化设计</strong> 在早期智能手机时代流行，帮助用户理解触摸界面</li>
                        <li>• <strong>扁平化设计</strong> 带来了极简主义革命，强调内容而非装饰</li>
                        <li>• <strong>材料设计</strong> 结合了物理规则与扁平化，成为长期主导风格</li>
                        <li>• <strong>近年来</strong> 我们看到多种风格并存，设计师根据需求混合使用不同风格元素</li>
                    </ul>
                </div>

                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">未来趋势预测</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li>• 混合设计风格将继续流行，强调情境适应性</li>
                        <li>• 深色模式将成为标准功能而非选项</li>
                        <li>• 3D和沉浸式元素将随着设备性能提升而增加</li>
                        <li>• 以AI为中心的自适应界面将成为下一个设计前沿</li>
                        <li>• 可访问性将从附加功能变为核心设计原则</li>
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default StyleTrends;
