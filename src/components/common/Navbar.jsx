// src/components/common/Navbar.jsx
import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ onNavigate, currentPath }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    // 关闭移动端菜单（如果路由变化）
    useEffect(() => {
        setIsOpen(false);
    }, [currentPath]);
    
    // 链接点击处理函数
    const handleLinkClick = (path, e) => {
        e.preventDefault();
        onNavigate(path);
    };

    return (
        <nav className="fixed w-full z-50 bg-white dark:bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-md transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* 左侧Logo和导航链接 */}
                    <div className="flex">
                        <a href="/" onClick={(e) => handleLinkClick('/', e)} className="flex-shrink-0 flex items-center">
                          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400">
                            设计全景图
                          </span>
                        </a>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <a
                                href="/"
                                onClick={(e) => handleLinkClick('/', e)}
                                className={`${currentPath === '/' ? 'border-indigo-500 text-gray-900 dark:text-white' : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                            >
                                首页
                            </a>
                            <a
                                href="/styles"
                                onClick={(e) => handleLinkClick('/styles', e)}
                                className={`${currentPath.includes('/styles') ? 'border-indigo-500 text-gray-900 dark:text-white' : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                            >
                                设计风格
                            </a>
                            <a
                                href="/practices"
                                onClick={(e) => handleLinkClick('/practices', e)}
                                className={`${currentPath.includes('/practices') ? 'border-indigo-500 text-gray-900 dark:text-white' : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                            >
                                最佳实践
                            </a>
                            <a
                                href="/tools"
                                onClick={(e) => handleLinkClick('/tools', e)}
                                className={`${currentPath.includes('/tools') ? 'border-indigo-500 text-gray-900 dark:text-white' : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                            >
                                高级工具
                            </a>
                        </div>
                    </div>

                    {/* 右侧主题切换 */}
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        <ThemeToggle />
                    </div>

                    {/* 移动端菜单按钮 */}
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                            aria-expanded="false"
                        >
                            <span className="sr-only">打开主菜单</span>
                            {isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* 移动端菜单 */}
            {isOpen && (
                <div className="sm:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        <a
                            href="/"
                            onClick={(e) => handleLinkClick('/', e)}
                            className={`${currentPath === '/' ? 'bg-indigo-50 dark:bg-indigo-900 border-indigo-500 text-indigo-700 dark:text-indigo-300' : 'border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-800 dark:hover:text-gray-100'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
                        >
                            首页
                        </a>
                        <a
                            href="/styles"
                            onClick={(e) => handleLinkClick('/styles', e)}
                            className={`${currentPath.includes('/styles') ? 'bg-indigo-50 dark:bg-indigo-900 border-indigo-500 text-indigo-700 dark:text-indigo-300' : 'border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-800 dark:hover:text-gray-100'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
                        >
                            设计风格
                        </a>
                        <a
                            href="/practices"
                            onClick={(e) => handleLinkClick('/practices', e)}
                            className={`${currentPath.includes('/practices') ? 'bg-indigo-50 dark:bg-indigo-900 border-indigo-500 text-indigo-700 dark:text-indigo-300' : 'border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-800 dark:hover:text-gray-100'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
                        >
                            最佳实践
                        </a>
                        <a
                            href="/tools"
                            onClick={(e) => handleLinkClick('/tools', e)}
                            className={`${currentPath.includes('/tools') ? 'bg-indigo-50 dark:bg-indigo-900 border-indigo-500 text-indigo-700 dark:text-indigo-300' : 'border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-800 dark:hover:text-gray-100'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
                        >
                            高级工具
                        </a>
                        <div className="pl-3 pr-4 py-2 border-l-4 border-transparent">
                            <ThemeToggle isMobile={true} />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
