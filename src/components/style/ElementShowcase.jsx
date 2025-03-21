// src/components/style/ElementShowcase.jsx 修改
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CodeDisplay from '../common/CodeDisplay';

const ElementCard = ({ element, styleId }) => {
    const [showCode, setShowCode] = useState(false);

    // 根据风格获取对应样式
    const getStyleCardClasses = () => {
        switch(styleId) {
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
            default:
                return 'bg-white dark:bg-gray-800';
        }
    };

    // 根据风格获取按钮样式
    const getStyleButtonClasses = () => {
        switch(styleId) {
            case 'skeuomorphism':
                return 'bg-gradient-to-b from-gray-100 to-gray-300 border border-gray-400 shadow-md px-4 py-2 rounded';
            case 'flat-design':
                return 'bg-blue-500 text-white px-4 py-2';
            case 'material-design':
                return 'bg-indigo-500 text-white px-4 py-2 rounded shadow-md hover:shadow-lg transition-shadow duration-300';
            case 'neumorphism':
                return 'bg-gray-200 shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] px-4 py-2 rounded-full';
            case 'glassmorphism':
                return 'bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-lg';
            case 'dark-mode':
                return 'bg-purple-600 text-white px-4 py-2 rounded';
            default:
                return 'bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors';
        }
    };

    // 生成元素预览
    const renderElementPreview = () => {
        // 根据元素类型渲染不同的预览
        if (element.name.toLowerCase().includes('button')) {
            return (
                <div className="mb-4 flex justify-center">
                    <button className={getStyleButtonClasses()}>
                        {element.name}
                    </button>
                </div>
            );
        } else if (element.name.toLowerCase().includes('card')) {
            return (
                <div className="mb-4">
                    <div className={`${getStyleCardClasses()} p-4 rounded max-w-xs mx-auto`}>
                        <h4 className="font-bold mb-2">{element.name}</h4>
                        <p className="text-sm">这是一个{element.name}示例，展示当前的设计风格效果。</p>
                    </div>
                </div>
            );
        } else if (element.name.toLowerCase().includes('input') || element.name.toLowerCase().includes('表单')) {
            return (
                <div className="mb-4 flex justify-center">
                    <input
                        type="text"
                        placeholder={`${element.name} 示例`}
                        className={`${styleId === 'flat-design' ? 'border-b-2 border-blue-500 outline-none px-2 py-1' :
                            styleId === 'material-design' ? 'border-b border-gray-300 focus:border-indigo-500 outline-none px-2 py-1 transition-colors' :
                                styleId === 'neumorphism' ? 'bg-gray-200 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff] rounded-lg px-4 py-2 outline-none' :
                                    styleId === 'glassmorphism' ? 'bg-white/20 backdrop-blur-md border border-white/30 rounded px-4 py-2 outline-none text-white' :
                                        styleId === 'dark-mode' ? 'bg-gray-700 border border-gray-600 text-white rounded px-4 py-2 outline-none focus:border-purple-500' :
                                            'border border-gray-300 rounded px-4 py-2 outline-none focus:border-indigo-500'}`}
                    />
                </div>
            );
        } else {
            // 其他类型元素的通用预览
            return (
                <div className="mb-4 flex justify-center">
                    <div className={`${getStyleCardClasses()} p-4 rounded w-full max-w-xs`}>
                        <div className="text-center">{element.name} 预览</div>
                    </div>
                </div>
            );
        }
    };

    return (
        <motion.div
            className={`rounded-lg overflow-hidden ${getStyleCardClasses()}`}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
        >
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{element.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{element.description}</p>

                {/* 元素预览 */}
                {renderElementPreview()}

                <button
                    className={`text-blue-600 dark:text-blue-400 hover:underline focus:outline-none ${styleId === 'dark-mode' ? 'text-purple-400' : ''}`}
                    onClick={() => setShowCode(!showCode)}
                >
                    {showCode ? '隐藏代码' : '查看代码'} →
                </button>

                {showCode && (
                    <div className="mt-4">
                        <CodeDisplay code={element.cssCode} language="css" />
                    </div>
                )}
            </div>
        </motion.div>
    );
};

const ElementShowcase = ({ elements, styleId }) => {
    if (!elements || elements.length === 0) {
        return <div>没有可显示的元素数据</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {elements.map((element, index) => (
                <ElementCard key={index} element={element} styleId={styleId} />
            ))}
        </div>
    );
};

export default ElementShowcase;
