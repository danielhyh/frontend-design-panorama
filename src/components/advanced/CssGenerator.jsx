// src/components/advanced/CssGenerator.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getAllStyles } from '../../data/dataService';
import CodeDisplay from '../common/CodeDisplay';

const CssGenerator = () => {
    const styles = getAllStyles();
    const [selectedStyle, setSelectedStyle] = useState(styles[0]);
    const [config, setConfig] = useState({
        colors: {
            primary: '#ff7043',
            secondary: '#5c6bc0',
            text: '#333333',
            background: '#ffffff'
        },
        radius: 5,
        shadow: 'medium',
        animation: true
    });
    const [generatedCSS, setGeneratedCSS] = useState('');

    // 根据选择的风格和配置生成CSS
    useEffect(() => {
        generateCSS();
    }, [selectedStyle, config]);

    const handleStyleChange = (e) => {
        const style = styles.find(s => s.id === e.target.value);
        setSelectedStyle(style);

        // 更新配置以匹配风格
        switch(style.id) {
            case 'skeuomorphism':
                setConfig({
                    colors: {
                        primary: '#ff7043',
                        secondary: '#5c6bc0',
                        text: '#333333',
                        background: '#ffffff'
                    },
                    radius: 5,
                    shadow: 'strong',
                    animation: true
                });
                break;
            case 'flat-design':
                setConfig({
                    colors: {
                        primary: '#2196F3',
                        secondary: '#FFC107',
                        text: '#212121',
                        background: '#ffffff'
                    },
                    radius: 0,
                    shadow: 'none',
                    animation: false
                });
                break;
            case 'material-design':
                setConfig({
                    colors: {
                        primary: '#3F51B5',
                        secondary: '#FF4081',
                        text: '#212121',
                        background: '#ffffff'
                    },
                    radius: 4,
                    shadow: 'medium',
                    animation: true
                });
                break;
            case 'neumorphism':
                setConfig({
                    colors: {
                        primary: '#5c6cff',
                        secondary: '#ff9a9e',
                        text: '#333333',
                        background: '#e0e5ec'
                    },
                    radius: 10,
                    shadow: 'special-neomorphism',
                    animation: true
                });
                break;
            case 'glassmorphism':
                setConfig({
                    colors: {
                        primary: '#4158D0',
                        secondary: '#FFCC70',
                        text: '#ffffff',
                        background: 'rgba(255, 255, 255, 0.2)'
                    },
                    radius: 10,
                    shadow: 'minimal',
                    animation: true
                });
                break;
            case 'dark-mode':
                setConfig({
                    colors: {
                        primary: '#bb86fc',
                        secondary: '#03dac5',
                        text: '#e1e1e1',
                        background: '#121212'
                    },
                    radius: 4,
                    shadow: 'dark',
                    animation: true
                });
                break;
            default:
                setConfig({
                    colors: {
                        primary: '#5c6cff',
                        secondary: '#f87171',
                        text: '#1e293b',
                        background: '#ffffff'
                    },
                    radius: 8,
                    shadow: 'medium',
                    animation: true
                });
        }
    };

    const handleColorChange = (colorKey, value) => {
        setConfig({
            ...config,
            colors: {
                ...config.colors,
                [colorKey]: value
            }
        });
    };

    const handleRadiusChange = (e) => {
        setConfig({
            ...config,
            radius: parseInt(e.target.value)
        });
    };

    const handleShadowChange = (e) => {
        setConfig({
            ...config,
            shadow: e.target.value
        });
    };

    const handleAnimationChange = (e) => {
        setConfig({
            ...config,
            animation: e.target.checked
        });
    };

    const generateCSS = () => {
        // 根据当前风格和配置生成CSS
        let css = '';

        // 添加变量定义
        css += `:root {\n`;
        css += `  --primary-color: ${config.colors.primary};\n`;
        css += `  --secondary-color: ${config.colors.secondary};\n`;
        css += `  --text-color: ${config.colors.text};\n`;
        css += `  --background-color: ${config.colors.background};\n`;
        css += `  --border-radius: ${config.radius}px;\n`;
        css += `}\n\n`;

        // 添加按钮样式
        css += `.${selectedStyle.id}-button {\n`;
        css += `  background-color: var(--primary-color);\n`;
        css += `  color: ${getContrastYIQ(config.colors.primary)};\n`;
        css += `  border-radius: var(--border-radius);\n`;
        css += `  padding: 12px 24px;\n`;
        css += `  font-weight: 500;\n`;
        css += `  border: none;\n`;

        // 添加阴影
        if (config.shadow === 'none') {
            css += `  box-shadow: none;\n`;
        } else if (config.shadow === 'minimal') {
            css += `  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n`;
        } else if (config.shadow === 'medium') {
            css += `  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);\n`;
        } else if (config.shadow === 'strong') {
            css += `  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);\n`;
        } else if (config.shadow === 'special-neomorphism') {
            css += `  box-shadow: \n`;
            css += `    6px 6px 12px rgba(0, 0, 0, 0.15),\n`;
            css += `    -6px -6px 12px rgba(255, 255, 255, 0.8);\n`;
        } else if (config.shadow === 'dark') {
            css += `  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n`;
        }

        // 添加动画
        if (config.animation) {
            css += `  transition: all 0.3s ease;\n`;
            css += `}\n\n`;
            css += `.${selectedStyle.id}-button:hover {\n`;
            css += `  transform: translateY(-2px);\n`;

            // 悬停时的阴影
            if (config.shadow === 'none') {
                css += `  box-shadow: none;\n`;
            } else if (config.shadow === 'minimal') {
                css += `  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);\n`;
            } else if (config.shadow === 'medium') {
                css += `  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);\n`;
            } else if (config.shadow === 'strong') {
                css += `  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);\n`;
            } else if (config.shadow === 'special-neomorphism') {
                css += `  box-shadow: \n`;
                css += `    8px 8px 16px rgba(0, 0, 0, 0.15),\n`;
                css += `    -8px -8px 16px rgba(255, 255, 255, 0.8);\n`;
            } else if (config.shadow === 'dark') {
                css += `  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6);\n`;
            }
        } else {
            css += `}\n\n`;
            css += `.${selectedStyle.id}-button:hover {\n`;
            css += `  /* No hover animation */\n`;
        }

        css += `}\n\n`;

        // 添加卡片样式
        css += `.${selectedStyle.id}-card {\n`;
        css += `  background-color: var(--background-color);\n`;
        css += `  color: var(--text-color);\n`;
        css += `  border-radius: var(--border-radius);\n`;
        css += `  padding: 20px;\n`;

        // 添加阴影
        if (config.shadow === 'none') {
            css += `  box-shadow: none;\n`;
        } else if (config.shadow === 'minimal') {
            css += `  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n`;
        } else if (config.shadow === 'medium') {
            css += `  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);\n`;
        } else if (config.shadow === 'strong') {
            css += `  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);\n`;
        } else if (config.shadow === 'special-neomorphism') {
            css += `  box-shadow: \n`;
            css += `    8px 8px 16px rgba(0, 0, 0, 0.15),\n`;
            css += `    -8px -8px 16px rgba(255, 255, 255, 0.8);\n`;
        } else if (config.shadow === 'dark') {
            css += `  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n`;
        }

        // 添加动画
        if (config.animation) {
            css += `  transition: all 0.3s ease;\n`;
        }

        css += `}\n\n`;

        // 添加特殊风格的额外CSS
        if (selectedStyle.id === 'glassmorphism') {
            css += `/* 玻璃态效果需要背景图片或渐变 */\n`;
            css += `body {\n`;
            css += `  background: linear-gradient(135deg, #4158D0, #C850C0, #FFCC70);\n`;
            css += `  min-height: 100vh;\n`;
            css += `}\n\n`;

            css += `.${selectedStyle.id}-card {\n`;
            css += `  background: rgba(255, 255, 255, 0.2);\n`;
            css += `  backdrop-filter: blur(10px);\n`;
            css += `  -webkit-backdrop-filter: blur(10px);\n`;
            css += `  border: 1px solid rgba(255, 255, 255, 0.3);\n`;
            css += `}\n\n`;
        }

        if (selectedStyle.id === 'neumorphism') {
            css += `/* 新拟物主义需要特定的背景色 */\n`;
            css += `body {\n`;
            css += `  background-color: #e0e5ec;\n`;
            css += `}\n\n`;
        }

        setGeneratedCSS(css);
    };

    // 计算文本颜色（黑或白）以确保在背景上有足够对比度
    const getContrastYIQ = (hexcolor) => {
        hexcolor = hexcolor.replace('#', '');
        const r = parseInt(hexcolor.substr(0, 2), 16);
        const g = parseInt(hexcolor.substr(2, 2), 16);
        const b = parseInt(hexcolor.substr(4, 2), 16);
        const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        return (yiq >= 128) ? '#000000' : '#ffffff';
    };

    return (
        <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">CSS生成器</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 左侧配置面板 */}
                <div>
                    <div className="mb-6">
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">选择设计风格</label>
                        <select
                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md"
                            value={selectedStyle.id}
                            onChange={handleStyleChange}
                        >
                            {styles.map(style => (
                                <option key={style.id} value={style.id}>{style.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">颜色设置</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 dark:text-gray-300 mb-1">主色调</label>
                                <div className="flex items-center">
                                    <input
                                        type="color"
                                        value={config.colors.primary}
                                        onChange={(e) => handleColorChange('primary', e.target.value)}
                                        className="w-8 h-8 mr-2 rounded border-0"
                                    />
                                    <input
                                        type="text"
                                        value={config.colors.primary}
                                        onChange={(e) => handleColorChange('primary', e.target.value)}
                                        className="w-full px-2 py-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 dark:text-gray-300 mb-1">次色调</label>
                                <div className="flex items-center">
                                    <input
                                        type="color"
                                        value={config.colors.secondary}
                                        onChange={(e) => handleColorChange('secondary', e.target.value)}
                                        className="w-8 h-8 mr-2 rounded border-0"
                                    />
                                    <input
                                        type="text"
                                        value={config.colors.secondary}
                                        onChange={(e) => handleColorChange('secondary', e.target.value)}
                                        className="w-full px-2 py-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 dark:text-gray-300 mb-1">文本颜色</label>
                                <div className="flex items-center">
                                    <input
                                        type="color"
                                        value={config.colors.text}
                                        onChange={(e) => handleColorChange('text', e.target.value)}
                                        className="w-8 h-8 mr-2 rounded border-0"
                                    />
                                    <input
                                        type="text"
                                        value={config.colors.text}
                                        onChange={(e) => handleColorChange('text', e.target.value)}
                                        className="w-full px-2 py-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 dark:text-gray-300 mb-1">背景颜色</label>
                                <div className="flex items-center">
                                    <input
                                        type="color"
                                        value={config.colors.background}
                                        onChange={(e) => handleColorChange('background', e.target.value)}
                                        className="w-8 h-8 mr-2 rounded border-0"
                                    />
                                    <input
                                        type="text"
                                        value={config.colors.background}
                                        onChange={(e) => handleColorChange('background', e.target.value)}
                                        className="w-full px-2 py-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">圆角大小: {config.radius}px</label>
                        <input
                            type="range"
                            min="0"
                            max="20"
                            value={config.radius}
                            onChange={handleRadiusChange}
                            className="w-full"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">阴影强度</label>
                        <select
                            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md"
                            value={config.shadow}
                            onChange={handleShadowChange}
                        >
                            <option value="none">无阴影</option>
                            <option value="minimal">轻微阴影</option>
                            <option value="medium">中等阴影</option>
                            <option value="strong">强烈阴影</option>
                            <option value="special-neomorphism">新拟物阴影</option>
                            <option value="dark">暗色模式阴影</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="animation"
                                checked={config.animation}
                                onChange={handleAnimationChange}
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label htmlFor="animation" className="ml-2 block text-gray-700 dark:text-gray-300">
                                启用悬停动画
                            </label>
                        </div>
                    </div>
                </div>

                {/* 右侧预览和代码面板 */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">预览</h3>

                    <div
                        className="p-6 rounded-lg mb-6"
                        style={{
                            backgroundColor: selectedStyle.id === 'glassmorphism' ? 'rgba(65, 88, 208, 0.5)' :
                                selectedStyle.id === 'neumorphism' ? '#e0e5ec' : '#f5f5f5'
                        }}
                    >
                        {/* 按钮预览 */}
                        <div className="mb-6">
                            <button
                                className="px-6 py-3 font-medium"
                                style={{
                                    backgroundColor: config.colors.primary,
                                    color: getContrastYIQ(config.colors.primary),
                                    borderRadius: `${config.radius}px`,
                                    boxShadow: config.shadow === 'none' ? 'none' :
                                        config.shadow === 'minimal' ? '0 2px 5px rgba(0, 0, 0, 0.1)' :
                                            config.shadow === 'medium' ? '0 4px 10px rgba(0, 0, 0, 0.15)' :
                                                config.shadow === 'strong' ? '0 8px 20px rgba(0, 0, 0, 0.2)' :
                                                    config.shadow === 'special-neomorphism' ? '6px 6px 12px rgba(0, 0, 0, 0.15), -6px -6px 12px rgba(255, 255, 255, 0.8)' :
                                                        '0 5px 15px rgba(0, 0, 0, 0.5)',
                                    transition: config.animation ? 'all 0.3s ease' : 'none',
                                    border: 'none',
                                    backdropFilter: selectedStyle.id === 'glassmorphism' ? 'blur(10px)' : 'none',
                                    background: selectedStyle.id === 'glassmorphism' ? 'rgba(255, 255, 255, 0.2)' : config.colors.primary,
                                    borderColor: selectedStyle.id === 'glassmorphism' ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
                                    borderWidth: selectedStyle.id === 'glassmorphism' ? '1px' : '0',
                                    borderStyle: selectedStyle.id === 'glassmorphism' ? 'solid' : 'none'
                                }}
                            >
                                按钮示例
                            </button>
                        </div>

                        {/* 卡片预览 */}
                        <div
                            className="p-4 rounded"
                            style={{
                                backgroundColor: config.colors.background,
                                color: config.colors.text,
                                borderRadius: `${config.radius}px`,
                                boxShadow: config.shadow === 'none' ? 'none' :
                                    config.shadow === 'minimal' ? '0 2px 5px rgba(0, 0, 0, 0.1)' :
                                        config.shadow === 'medium' ? '0 4px 10px rgba(0, 0, 0, 0.15)' :
                                            config.shadow === 'strong' ? '0 8px 20px rgba(0, 0, 0, 0.2)' :
                                                config.shadow === 'special-neomorphism' ? '8px 8px 16px rgba(0, 0, 0, 0.15), -8px -8px 16px rgba(255, 255, 255, 0.8)' :
                                                    '0 5px 15px rgba(0, 0, 0, 0.5)',
                                backdropFilter: selectedStyle.id === 'glassmorphism' ? 'blur(10px)' : 'none',
                                background: selectedStyle.id === 'glassmorphism' ? 'rgba(255, 255, 255, 0.2)' : config.colors.background,
                                borderColor: selectedStyle.id === 'glassmorphism' ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
                                borderWidth: selectedStyle.id === 'glassmorphism' ? '1px' : '0',
                                borderStyle: selectedStyle.id === 'glassmorphism' ? 'solid' : 'none'
                            }}
                        >
                            <h4 className="text-lg font-semibold mb-2" style={{ color: config.colors.text }}>卡片标题</h4>
                            <p style={{ color: config.colors.text }}>这是一个卡片示例，展示当前的设计风格效果。</p>
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">生成的CSS</h3>
                    <CodeDisplay code={generatedCSS} language="css" />
                </div>
            </div>
        </motion.div>
    );
};

export default CssGenerator;
