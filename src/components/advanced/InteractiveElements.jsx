// src/components/advanced/InteractiveElements.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CodeDisplay from '../common/CodeDisplay';

const InteractiveElements = ({ style }) => {
    const [activeElement, setActiveElement] = useState(null);

    // 准备按钮样式
    const getButtonStyle = () => {
        switch(style.id) {
            case 'skeuomorphism':
                return {
                    background: 'linear-gradient(to bottom, #f7f7f7, #d7d7d7)',
                    borderRadius: '5px',
                    border: '1px solid #999',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.6)',
                    color: '#333',
                    fontWeight: 'bold',
                    textShadow: '0 1px 0 rgba(255,255,255,0.6)'
                };
            case 'flat-design':
                return {
                    backgroundColor: '#2196F3',
                    border: 'none',
                    color: 'white',
                    fontWeight: '500',
                    textTransform: 'uppercase'
                };
            case 'material-design':
                return {
                    position: 'relative',
                    backgroundColor: '#2196F3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '2px',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                    textTransform: 'uppercase',
                    fontWeight: '500'
                };
            case 'neumorphism':
                return {
                    width: '120px',
                    height: '40px',
                    borderRadius: '20px',
                    background: '#e0e5ec',
                    border: 'none',
                    color: '#666',
                    fontWeight: '600',
                    boxShadow: '6px 6px 12px rgba(166, 175, 195, 0.5), -6px -6px 12px rgba(255, 255, 255, 0.8)'
                };
            case 'glassmorphism':
                return {
                    padding: '10px 20px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontWeight: '500'
                };
            case 'dark-mode':
                return {
                    backgroundColor: '#bb86fc',
                    color: '#000000',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '4px',
                    fontWeight: '500'
                };
            default:
                return {
                    backgroundColor: style.color,
                    color: 'white',
                    borderRadius: '4px',
                    padding: '10px 20px',
                    border: 'none'
                };
        }
    };

    // 准备卡片样式
    const getCardStyle = () => {
        switch(style.id) {
            case 'skeuomorphism':
                return {
                    background: 'linear-gradient(to bottom, #ffffff, #f5f5f5)',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1), inset 0 1px 0 #fff'
                };
            case 'flat-design':
                return {
                    backgroundColor: '#ffffff',
                    border: '1px solid #e0e0e0',
                    padding: '16px'
                };
            case 'material-design':
                return {
                    backgroundColor: 'white',
                    borderRadius: '2px',
                    padding: '16px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)'
                };
            case 'neumorphism':
                return {
                    background: '#e0e5ec',
                    borderRadius: '15px',
                    padding: '20px',
                    boxShadow: '8px 8px 16px rgba(166, 175, 195, 0.5), -8px -8px 16px rgba(255, 255, 255, 0.8)'
                };
            case 'glassmorphism':
                return {
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    padding: '20px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                };
            case 'dark-mode':
                return {
                    backgroundColor: '#1e1e1e',
                    color: '#e1e1e1',
                    borderRadius: '4px',
                    padding: '16px'
                };
            default:
                return {
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    padding: '16px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                };
        }
    };

    // 准备输入框样式
    const getInputStyle = () => {
        switch(style.id) {
            case 'skeuomorphism':
                return {
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    borderRadius: '3px',
                    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)',
                    padding: '8px'
                };
            case 'flat-design':
                return {
                    width: '100%',
                    height: '40px',
                    padding: '0 8px',
                    border: '2px solid #e0e0e0',
                    backgroundColor: '#ffffff',
                    color: '#212121'
                };
            case 'material-design':
                return {
                    width: '100%',
                    padding: '8px 0',
                    borderTop: 'none',
                    borderLeft: 'none',
                    borderRight: 'none',
                    borderBottom: '1px solid #9e9e9e',
                    backgroundColor: 'transparent',
                    transition: 'borderColor 0.3s'
                };
            case 'neumorphism':
                return {
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: 'none',
                    background: '#e0e5ec',
                    color: '#333',
                    boxShadow: 'inset 2px 2px 5px rgba(166, 175, 195, 0.5), inset -2px -2px 5px rgba(255, 255, 255, 0.8)'
                };
            case 'glassmorphism':
                return {
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: 'white'
                };
            case 'dark-mode':
                return {
                    backgroundColor: '#252525',
                    color: '#e1e1e1',
                    border: '1px solid #333333',
                    borderRadius: '4px',
                    padding: '12px 16px'
                };
            default:
                return {
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    width: '100%'
                };
        }
    };

    // 根据风格获取不同元素的代码
    const getElementCode = (elementType) => {
        const element = style.elements.find(el => {
            const name = el.name.toLowerCase();
            if (elementType === 'button') {
                return name.includes('button');
            } else if (elementType === 'card') {
                return name.includes('card');
            } else if (elementType === 'input') {
                return name.includes('input') || name.includes('form');
            }
            return false;
        });

        return element ? element.cssCode : '/* 没有可用的代码示例 */';
    };

    return (
        <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">交互式元素展示</h2>

            <div className="p-8 rounded-lg mb-8" style={{
                background: style.id === 'glassmorphism' ? 'linear-gradient(135deg, #4158D0, #C850C0, #FFCC70)' :
                    style.id === 'neumorphism' ? '#e0e5ec' :
                        style.id === 'dark-mode' ? '#121212' : '#f5f5f5'
            }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* 按钮示例 */}
                    <div className="flex flex-col items-center">
                        <button
                            className="px-6 py-3 mb-4 transition-all duration-300"
                            style={getButtonStyle()}
                            onClick={() => setActiveElement('button')}
                        >
                            {style.name} 按钮
                        </button>
                        <span className="text-gray-700 dark:text-gray-300">点击查看代码</span>
                    </div>

                    {/* 卡片示例 */}
                    <div className="flex flex-col items-center">
                        <div
                            className="w-full p-4 mb-4 cursor-pointer"
                            style={getCardStyle()}
                            onClick={() => setActiveElement('card')}
                        >
                            <h3 className="text-lg font-semibold mb-2" style={{ color: style.id === 'dark-mode' ? '#e1e1e1' : '#333' }}>
                                {style.name} 卡片
                            </h3>
                            <p style={{ color: style.id === 'dark-mode' ? '#b0b0b0' : '#666' }}>
                                点击查看此卡片的CSS代码示例
                            </p>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">点击查看代码</span>
                    </div>

                    {/* 输入框示例 */}
                    <div className="flex flex-col items-center">
                        <div className="w-full mb-4">
                            <input
                                type="text"
                                placeholder={`${style.name} 输入框`}
                                className="transition-all duration-300"
                                style={getInputStyle()}
                                onClick={() => setActiveElement('input')}
                            />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">点击查看代码</span>
                    </div>
                </div>
            </div>

            {activeElement && (
                <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                        {style.name} {activeElement === 'button' ? '按钮' : activeElement === 'card' ? '卡片' : '输入框'} 代码
                    </h3>
                    <CodeDisplay
                        code={getElementCode(activeElement)}
                        language="css"
                    />
                </div>
            )}
        </motion.div>
    );
};

export default InteractiveElements;
