// src/components/advanced/StyleComparison.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getAllStyles } from '../../data/dataService';
import CodeDisplay from '../common/CodeDisplay';

const ComparisonItem = ({ title, style1Content, style2Content }) => {
    return (
        <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    {style1Content}
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    {style2Content}
                </div>
            </div>
        </div>
    );
};

const StyleComparison = () => {
    const styles = getAllStyles();
    const [style1, setStyle1] = useState(styles[2]); // 默认为Material Design
    const [style2, setStyle2] = useState(styles[3]); // 默认为新拟物主义

    const handleStyle1Change = (e) => {
        const selectedStyle = styles.find(s => s.id === e.target.value);
        setStyle1(selectedStyle);
    };

    const handleStyle2Change = (e) => {
        const selectedStyle = styles.find(s => s.id === e.target.value);
        setStyle2(selectedStyle);
    };

    return (
        <motion.div
            className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">风格比较工具</h2>

            {/* 选择器 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">选择第一种风格</label>
                    <select
                        className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md"
                        value={style1.id}
                        onChange={handleStyle1Change}
                    >
                        {styles.map(style => (
                            <option key={style.id} value={style.id}>{style.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">选择第二种风格</label>
                    <select
                        className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md"
                        value={style2.id}
                        onChange={handleStyle2Change}
                    >
                        {styles.map(style => (
                            <option key={style.id} value={style.id}>{style.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* 标题栏 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                    <h3
                        className="text-xl font-bold p-4 rounded-lg text-white text-center"
                        style={{ backgroundColor: style1.color }}
                    >
                        {style1.name}
                    </h3>
                </div>
                <div>
                    <h3
                        className="text-xl font-bold p-4 rounded-lg text-white text-center"
                        style={{ backgroundColor: style2.color }}
                    >
                        {style2.name}
                    </h3>
                </div>
            </div>

            {/* 时期比较 */}
            <ComparisonItem
                title="流行时期"
                style1Content={<p className="text-gray-700 dark:text-gray-300">{style1.period}</p>}
                style2Content={<p className="text-gray-700 dark:text-gray-300">{style2.period}</p>}
            />

            {/* 描述比较 */}
            <ComparisonItem
                title="风格描述"
                style1Content={<p className="text-gray-700 dark:text-gray-300">{style1.description.slice(0, 150)}...</p>}
                style2Content={<p className="text-gray-700 dark:text-gray-300">{style2.description.slice(0, 150)}...</p>}
            />

            {/* 特点比较 */}
            <ComparisonItem
                title="主要特点"
                style1Content={
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                        {style1.coreFeatures.slice(0, 3).map((feature, index) => (
                            <li key={index} className="mb-1">{feature.title}</li>
                        ))}
                    </ul>
                }
                style2Content={
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                        {style2.coreFeatures.slice(0, 3).map((feature, index) => (
                            <li key={index} className="mb-1">{feature.title}</li>
                        ))}
                    </ul>
                }
            />

            {/* 按钮示例 */}
            <ComparisonItem
                title="按钮样式对比"
                style1Content={
                    <div>
                        <button
                            className="w-full mb-4 p-4 rounded"
                            style={{
                                backgroundColor: style1.id === 'flat-design' ? '#2196F3' : 'white',
                                color: style1.id === 'flat-design' ? 'white' : '#333',
                                boxShadow: style1.id === 'skeuomorphism' ? '0 1px 2px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.6)' :
                                    style1.id === 'material-design' ? '0 2px 5px rgba(0,0,0,0.2)' :
                                        style1.id === 'neumorphism' ? '6px 6px 12px rgba(166, 175, 195, 0.5), -6px -6px 12px rgba(255, 255, 255, 0.8)' :
                                            style1.id === 'glassmorphism' ? '0 8px 32px rgba(0, 0, 0, 0.1)' : 'none',
                                background: style1.id === 'skeuomorphism' ? 'linear-gradient(to bottom, #f7f7f7, #d7d7d7)' :
                                    style1.id === 'glassmorphism' ? 'rgba(255, 255, 255, 0.2)' :
                                        style1.id === 'dark-mode' ? '#bb86fc' :
                                            style1.id === 'flat-design' ? '#2196F3' : 'white',
                                border: style1.id === 'skeuomorphism' ? '1px solid #999' :
                                    style1.id === 'flat-design' ? 'none' :
                                        style1.id === 'glassmorphism' ? '1px solid rgba(255, 255, 255, 0.3)' :
                                            style1.id === 'dark-mode' ? 'none' : '1px solid #e0e0e0',
                                backdropFilter: style1.id === 'glassmorphism' ? 'blur(10px)' : 'none',
                            }}
                        >
                            {style1.name} 按钮
                        </button>
                        <div className="mt-4">
                            <CodeDisplay
                                code={style1.elements.find(el => el.name.toLowerCase().includes('button'))?.cssCode.slice(0, 200) + '...'}
                                language="css"
                            />
                        </div>
                    </div>
                }
                style2Content={
                    <div>
                        <button
                            className="w-full mb-4 p-4 rounded"
                            style={{
                                backgroundColor: style2.id === 'flat-design' ? '#2196F3' : 'white',
                                color: style2.id === 'flat-design' ? 'white' : '#333',
                                boxShadow: style2.id === 'skeuomorphism' ? '0 1px 2px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.6)' :
                                    style2.id === 'material-design' ? '0 2px 5px rgba(0,0,0,0.2)' :
                                        style2.id === 'neumorphism' ? '6px 6px 12px rgba(166, 175, 195, 0.5), -6px -6px 12px rgba(255, 255, 255, 0.8)' :
                                            style2.id === 'glassmorphism' ? '0 8px 32px rgba(0, 0, 0, 0.1)' : 'none',
                                background: style2.id === 'skeuomorphism' ? 'linear-gradient(to bottom, #f7f7f7, #d7d7d7)' :
                                    style2.id === 'glassmorphism' ? 'rgba(255, 255, 255, 0.2)' :
                                        style2.id === 'dark-mode' ? '#bb86fc' :
                                            style2.id === 'flat-design' ? '#2196F3' : 'white',
                                border: style2.id === 'skeuomorphism' ? '1px solid #999' :
                                    style2.id === 'flat-design' ? 'none' :
                                        style2.id === 'glassmorphism' ? '1px solid rgba(255, 255, 255, 0.3)' :
                                            style2.id === 'dark-mode' ? 'none' : '1px solid #e0e0e0',
                                backdropFilter: style2.id === 'glassmorphism' ? 'blur(10px)' : 'none',
                            }}
                        >
                            {style2.name} 按钮
                        </button>
                        <div className="mt-4">
                            <CodeDisplay
                                code={style2.elements.find(el => el.name.toLowerCase().includes('button'))?.cssCode.slice(0, 200) + '...'}
                                language="css"
                            />
                        </div>
                    </div>
                }
            />

            {/* 应用场景比较 */}
            <ComparisonItem
                title="适用场景"
                style1Content={
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                        {style1.applicationScenarios.slice(0, 2).map((scenario, index) => (
                            <li key={index} className="mb-1">{scenario}</li>
                        ))}
                    </ul>
                }
                style2Content={
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                        {style2.applicationScenarios.slice(0, 2).map((scenario, index) => (
                            <li key={index} className="mb-1">{scenario}</li>
                        ))}
                    </ul>
                }
            />

        </motion.div>
    );
};

export default StyleComparison;
