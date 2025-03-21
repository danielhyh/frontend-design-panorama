// src/data/dataService.js 修改
// src/data/dataService.js
import { designStyles } from './designStyles';

// 获取所有设计风格
export const getAllStyles = () => {
    return designStyles;
};

// 获取扩展风格
export const getExtraStyles = () => {
    return [
        {
            id: '3d-elements',
            name: '3D设计元素',
            description: '通过添加深度和维度，创造出具有空间感的数字界面，为用户带来更加沉浸式的体验。',
            color: 'rgb(66, 135, 245)'
        },
        {
            id: 'minimal-motion',
            name: '极简动效设计',
            description: '专注于精心设计的微妙动画，提供功能性反馈和引导用户注意力。',
            color: 'rgb(255, 128, 64)'
        },
        {
            id: 'micro-interactions',
            name: '微交互设计',
            description: '关注用户与界面元素互动时的细微反馈，通过小型、针对性强的交互增强用户体验。',
            color: 'rgb(102, 187, 106)'
        },
        {
            id: 'asymmetric-layouts',
            name: '非对称布局',
            description: '挑战传统的网格系统，使用不规则的排列和分布创造动态平衡，为用户提供独特体验。',
            color: 'rgb(171, 71, 188)'
        },
        {
            id: 'typography-focused',
            name: '字体为王',
            description: '以排版为核心的设计将文字视为主要设计元素，通过精心选择和排列字体来创建视觉层次。',
            color: 'rgb(38, 198, 218)'
        }
    ];
};

// 根据ID获取特定设计风格
export const getStyleById = (styleId) => {
    return designStyles.find(style => style.id === styleId);
};

// 获取当前风格的前一个风格（用于导航）
export const getPreviousStyle = (currentId) => {
    const currentIndex = designStyles.findIndex(style => style.id === currentId);
    if (currentIndex > 0) {
        return designStyles[currentIndex - 1];
    }
    return null;
};

// 获取当前风格的下一个风格（用于导航）
export const getNextStyle = (currentId) => {
    const currentIndex = designStyles.findIndex(style => style.id === currentId);
    if (currentIndex < designStyles.length - 1) {
        return designStyles[currentIndex + 1];
    }
    return null;
};

// 获取最佳实践数据
export const getBestPractices = () => {
    // 筛选类型为"最佳实践"的风格
    return designStyles.filter(style => style.id === 'harmonic-fusion');
};
