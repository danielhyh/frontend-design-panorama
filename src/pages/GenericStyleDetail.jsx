// src/pages/GenericStyleDetail.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useStyleContext } from '../context/StyleContext';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import OtherStyles from '../components/style/OtherStyles';

const GenericStyleDetail = ({ styleId: propsStyleId, onNavigate }) => {
    const params = useParams();
    const styleId = propsStyleId || params.styleId;
    const [style, setStyle] = useState(null);
    const { changeStyle } = useStyleContext();

    useEffect(() => {
        // 根据styleId加载对应的额外风格
        const additionalStyles = {
            '3d-elements': {
                id: '3d-elements',
                name: '3D设计元素',
                subtitle: '立体的数字空间',
                description: '3D设计元素通过添加深度和维度，创造出具有空间感的数字界面，为用户带来更加沉浸式的体验。这种风格使用真实的3D渲染和阴影、立体元素和透视效果、可交互的三维物体等元素，为用户创造身临其境的感觉。',
                color: 'rgb(66, 135, 245)',
                features: [
                    { title: '真实的3D渲染和阴影', description: '使用真实的光影效果创造深度感', icon: '🔍' },
                    { title: '立体元素和透视效果', description: '元素具有清晰的透视关系和空间位置', icon: '📐' },
                    { title: '可交互的三维物体', description: '用户可以旋转、缩放和操作3D元素', icon: '🔄' },
                    { title: '空间层次和深度排列', description: '界面元素在Z轴上有明确的层次关系', icon: '📚' }
                ],
                implementationTips: [
                    '使用CSS transform属性创建3D变换',
                    '精心设计的阴影和高光增强立体感',
                    '运用透视(perspective)属性增强深度效果',
                    '以矢量图形模拟3D效果',
                    '合理的动画过渡增强空间感知'
                ],
                applicationScenarios: [
                    '产品展示网站',
                    '作品集和创意项目',
                    '游戏界面',
                    '需要突出特定内容的沉浸式体验'
                ]
            },
            'minimal-motion': {
                id: 'minimal-motion',
                name: '极简动效设计',
                subtitle: '微妙的动态体验',
                description: '极简动效设计专注于精心设计的微妙动画，这些动画不仅提供视觉趣味，更重要的是提供功能性反馈和引导用户注意力。通过目的性强的微交互、流畅自然的过渡效果和细微而有意义的动画，极简动效设计提升了用户体验的流畅度和直觉性。',
                color: 'rgb(255, 128, 64)',
                features: [
                    { title: '目的性强的微交互', description: '每个动画都有明确的功能目的', icon: '🎯' },
                    { title: '流畅自然的过渡效果', description: '平滑的状态转换增强用户理解', icon: '🌊' },
                    { title: '细微而有意义的动画', description: '微妙的动效提供即时反馈', icon: '✨' },
                    { title: '最小化干扰用户', description: '动效不会分散用户对内容的注意力', icon: '🧠' }
                ],
                implementationTips: [
                    '使用CSS transitions实现简单平滑过渡',
                    '采用CSS animations创建复杂动画序列',
                    '动画时长控制在200-500ms之间',
                    '遵循自然运动曲线(ease, ease-in-out)',
                    '为关键交互增加动态反馈'
                ],
                applicationScenarios: [
                    '现代网站和应用',
                    '注重用户体验的产品',
                    '需要引导用户完成任务流程的界面',
                    '任何需要提供即时反馈的交互界面'
                ]
            },
            'micro-interactions': {
                id: 'micro-interactions',
                name: '微交互设计',
                subtitle: '细节中的魔法',
                description: '微交互设计关注用户与界面元素互动时的细微反馈，通过这些小型、针对性强的交互增强用户体验，使界面更加生动和人性化。微交互设计强调即时视觉反馈、情感化的交互设计、引导式的操作提示和状态变化的明确指示。',
                color: 'rgb(102, 187, 106)',
                features: [
                    { title: '即时的视觉反馈', description: '用户操作后立即给予视觉响应', icon: '👁️' },
                    { title: '情感化的交互设计', description: '通过细节传达品牌个性和情感', icon: '❤️' },
                    { title: '引导式的操作提示', description: '微妙的视觉线索指导用户下一步操作', icon: '👆' },
                    { title: '状态变化的明确指示', description: '清晰传达系统和元素的当前状态', icon: '🔄' }
                ],
                implementationTips: [
                    '关注细节，每个交互都要有目的',
                    '动画应该简短而有意义',
                    '确保反馈是即时的',
                    '保持一致性，类似的操作应有类似的反馈',
                    '测试实际使用情境，确保微交互增强而非干扰体验'
                ],
                applicationScenarios: [
                    '表单输入和提交',
                    '点赞、收藏等社交互动',
                    '状态切换界面',
                    '导航和菜单交互',
                    '任何需要反馈的用户操作'
                ]
            },
            'asymmetric-layouts': {
                id: 'asymmetric-layouts',
                name: '非对称布局',
                subtitle: '打破对称的平衡美',
                description: '非对称布局挑战传统的网格系统，使用不规则的排列和分布创造动态平衡，为用户提供独特且富有个性的视觉体验。这种布局风格强调创意性的空间分配、意外性与惊喜感，同时保持精心计算的视觉平衡。',
                color: 'rgb(171, 71, 188)',
                features: [
                    { title: '不规则的元素排列', description: '打破传统网格，创造独特布局', icon: '🧩' },
                    { title: '动态的视觉流向', description: '引导视线以非线性方式流动', icon: '↪️' },
                    { title: '创意性的空间分配', description: '赋予不同元素独特的空间权重', icon: '📏' },
                    { title: '精心计算的视觉平衡', description: '在不对称中创造和谐', icon: '⚖️' }
                ],
                implementationTips: [
                    '利用CSS Grid和Flexbox创建不规则布局',
                    '控制元素大小、位置和比例',
                    '运用视觉权重原则平衡整体效果',
                    '通过色彩和空间引导视觉流向',
                    '确保关键内容仍然突出'
                ],
                applicationScenarios: [
                    '创意行业网站',
                    '作品集展示',
                    '摄影网站',
                    '时尚品牌',
                    '需要展现独特品牌个性的网站'
                ]
            },
            'typography-focused': {
                id: 'typography-focused',
                name: '字体为王',
                subtitle: '文字的艺术',
                description: '以排版为核心的设计将文字视为主要设计元素，通过精心选择和排列字体来创建视觉层次和传达信息，达到既有美感又易于阅读的目的。这种风格强调大胆的标题与精致的内文、字体组合与层次、以及精心计算的行高和字距。',
                color: 'rgb(38, 198, 218)',
                features: [
                    { title: '大胆的标题与精致的内文', description: '鲜明的对比创造层次感', icon: '📢' },
                    { title: '字体组合与层次', description: '精心组合不同字体传达信息结构', icon: '🔤' },
                    { title: '文字作为主要视觉元素', description: '文字本身成为设计的核心', icon: '🖌️' },
                    { title: '精心计算的行高和字距', description: '优化可读性和美感的细节调整', icon: '📏' }
                ],
                implementationTips: [
                    '选择富有个性的标题字体和高可读性的正文字体',
                    '建立清晰的类型比例尺(type scale)',
                    '精心调整行高、字距和段落间距',
                    '使用对比度原则增强可读性',
                    '确保在不同屏幕尺寸下保持良好排版'
                ],
                applicationScenarios: [
                    '博客和文章网站',
                    '杂志式网页',
                    '文学平台',
                    '内容丰富的网站',
                    '任何以内容为主的产品'
                ]
            }
        };

        if (additionalStyles[styleId]) {
            setStyle(additionalStyles[styleId]);
            // 应用特定风格样式
            changeStyle('harmonic-fusion'); // 对于这些额外风格，暂时使用协调之美的风格
        } else {
            // 如果找不到风格，重定向到首页
            onNavigate && onNavigate('/');
        }
    }, [styleId, onNavigate, changeStyle]);

    if (!style) {
        return (
            <div className="flex items-center justify-center min-h-screen">
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
            <div
                className="py-20 px-6 text-white text-center"
                style={{ backgroundColor: style.color }}
            >
                <Container>
                    <motion.h1
                        className="text-5xl font-bold mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {style.name}
                    </motion.h1>
                    <motion.h2
                        className="text-2xl font-light mb-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {style.subtitle}
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
                    {/* 风格描述 */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">风格概述</h2>
                        <div className="style-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                {style.description}
                            </p>
                        </div>
                    </section>

                    {/* 核心特征 */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">核心特征</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {style.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="style-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
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

                    {/* 实现技巧 */}
                    {style.implementationTips && (
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">实现技巧</h2>
                            <div className="style-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                                <ul className="space-y-4">
                                    {style.implementationTips.map((tip, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-start"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <div className="text-green-500 mr-2 text-xl">✓</div>
                                            <p className="text-gray-700 dark:text-gray-300">{tip}</p>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    )}

                    {/* 应用场景 */}
                    {style.applicationScenarios && (
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">应用场景</h2>
                            <div className="style-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                                <ul className="space-y-4">
                                    {style.applicationScenarios.map((scenario, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-start"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <div className="text-blue-500 mr-2 text-xl">•</div>
                                            <p className="text-gray-700 dark:text-gray-300">{scenario}</p>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    )}

                    {/* 其他风格 */}
                    <OtherStyles onNavigate={onNavigate} styles={[]} />

                    {/* 导航按钮 */}
                    <div className="mt-12">
                        <Button to="/" type="outline" onClick={() => onNavigate && onNavigate('/')}>
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

export default GenericStyleDetail;
