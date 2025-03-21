// src/context/StyleContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { getAllStyles } from '../data/dataService';
import { applyStyle } from '../styles/dynamicStyles';

const StyleContext = createContext();

export const useStyleContext = () => useContext(StyleContext);

export const StyleProvider = ({ children }) => {
    const [activeStyle, setActiveStyle] = useState(null);
    const [allStyles, setAllStyles] = useState([]);

    useEffect(() => {
        // 默认加载所有风格
        const styles = getAllStyles();
        setAllStyles(styles);

        // 默认使用第一个风格
        if (!activeStyle && styles.length > 0) {
            setActiveStyle(styles[0]);
        }
    }, []);

    const changeStyle = (styleId) => {
        const style = allStyles.find(s => s.id === styleId);
        if (style) {
            setActiveStyle(style);
            applyStyle(styleId); // 应用动态样式
        }
    };

    return (
        <StyleContext.Provider value={{ activeStyle, allStyles, changeStyle }}>
            {children}
        </StyleContext.Provider>
    );
};
