// src/components/common/Card.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Card = ({
                  children,
                  to,
                  href,
                  className = '',
                  shadow = 'md',
                  hover = true,
                  animate = true,
                  ...props
              }) => {
    // 基础类
    const baseClasses = "bg-white dark:bg-gray-800 rounded-lg overflow-hidden";

    // 阴影类
    const shadowClasses = {
        none: "",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
        xl: "shadow-xl"
    };

    // 悬停类
    const hoverClasses = hover
        ? "hover:shadow-lg transition-shadow duration-300"
        : "";

    const cardClasses = `${baseClasses} ${shadowClasses[shadow]} ${hoverClasses} ${className}`;

    // 动画配置
    const motionProps = animate
        ? {
            whileHover: { y: -5 },
            transition: { duration: 0.3 }
        }
        : {};

    // 根据情况返回不同内容
    const createCard = (content) => (
        <motion.div className={cardClasses} {...motionProps} {...props}>
            {content}
        </motion.div>
    );

    // 如果是内部链接
    if (to) {
        return createCard(
            <Link to={to} className="block h-full">
                {children}
            </Link>
        );
    }

    // 如果是外部链接
    if (href) {
        return createCard(
            <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
                {children}
            </a>
        );
    }

    // 默认卡片
    return createCard(children);
};

export default Card;
