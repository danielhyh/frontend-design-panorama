// src/components/common/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                    <div className="px-5 py-2">
                        <Link to="/about" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
                            关于项目
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link to="/resources" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
                            设计资源
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link to="/contribute" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
                            贡献指南
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link to="/contact" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
                            联系我们
                        </Link>
                    </div>
                </nav>
                <div className="mt-8 flex justify-center space-x-6">
                    <a href="https://github.com/your-username/frontend-design-panorama" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                        <span className="sr-only">GitHub</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
                <p className="mt-8 text-center text-base text-gray-500 dark:text-gray-400">
                    &copy; {new Date().getFullYear()} 前端设计风格全景图. 保留所有权利.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
