// src/components/common/Button.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
                    children,
                    to,
                    href,
                    type = 'primary',
                    size = 'md',
                    className = '',
                    onClick,
                    ...props
                }) => {
    // 按钮样式
    const baseClasses = "font-medium transition-all duration-300 inline-flex items-center justify-center";

    // 大小样式
    const sizeClasses = {
        sm: "px-4 py-2 text-sm rounded-md",
        md: "px-6 py-3 text-base rounded-lg",
        lg: "px-8 py-4 text-lg rounded-xl"
    };

    // 类型样式
    const typeClasses = {
        primary: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 shadow-md hover:shadow-lg",
        secondary: "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm",
        outline: "bg-transparent border-2 border-current text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-gray-800",
        text: "bg-transparent text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-gray-800 p-2"
    };

    const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${typeClasses[type]} ${className}`;

    // 如果是内部链接
    if (to) {
        return (
            <Link to={to} className={buttonClasses} {...props}>
                {children}
            </Link>
        );
    }

    // 如果是外部链接
    if (href) {
        return (
            <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
            </a>
        );
    }

    // 默认按钮
    return (
        <button className={buttonClasses} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
