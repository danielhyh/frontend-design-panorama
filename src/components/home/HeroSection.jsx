// src/components/home/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const HeroSection = () => {
    return (
        <motion.header
            className="py-24 px-6 text-center relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* 背景装饰 */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full opacity-10 filter blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 rounded-full opacity-10 filter blur-3xl"></div>
                <div className="absolute top-40 right-1/4 w-48 h-48 bg-pink-500 rounded-full opacity-10 filter blur-3xl"></div>
            </div>

            {/* 内容 */}
            <div className="relative z-10">
                <motion.h1
                    className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    前端设计风格全景图
                </motion.h1>
                <motion.p
                    className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    探索从拟物化到极简主义，从扁平化到新拟物主义的前端设计风格演化，
                    发现定义数字体验的视觉语言
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <Button to="/styles" size="lg" type="primary" className="mr-4">
                        探索设计风格
                    </Button>
                    <Button to="/practices" size="lg" type="outline">
                        查看最佳实践
                    </Button>
                </motion.div>
            </div>
        </motion.header>
    );
};

export default HeroSection;
