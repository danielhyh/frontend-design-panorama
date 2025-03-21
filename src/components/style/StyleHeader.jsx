// src/components/style/StyleHeader.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';

const StyleHeader = ({ style }) => {
    return (
        <div
            className="py-20 px-6 text-white text-center relative overflow-hidden"
            style={{ backgroundColor: style.color }}
        >
            {/* 背景装饰 */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-white rounded-full opacity-20 filter blur-3xl"></div>
                <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-white rounded-full opacity-20 filter blur-3xl"></div>
            </div>

            <Container className="relative z-10">
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
                <motion.div
                    className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {style.period}
                </motion.div>
            </Container>
        </div>
    );
};

export default StyleHeader;
