// src/data/dataService.js
import { designStyles } from './designStyles';

// 获取所有设计风格
export const getAllStyles = () => {
    return designStyles;
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
