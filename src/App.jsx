// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import StyleDetail from './pages/StyleDetail';
import PracticeDetail from './pages/PracticeDetail';
import AdvancedTools from './pages/AdvancedTools';
import StyleComparison from './components/advanced/StyleComparison';
import CssGenerator from './components/advanced/CssGenerator';
import StyleTrends from './components/advanced/StyleTrends';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
    // 简单的路由状态管理
    const [currentPage, setCurrentPage] = useState(window.location.pathname);
    const [params, setParams] = useState({});

    useEffect(() => {
        // 更新当前页面状态的函数
        const updateCurrentPage = () => {
            const path = window.location.pathname;
            setCurrentPage(path);

            // 解析参数，例如从 /styles/material-design 提取 material-design
            const pathParts = path.split('/').filter(part => part);
            if (pathParts.length >= 2) {
                setParams({ id: pathParts[1] });
            } else {
                setParams({});
            }
        };

        // 初始化
        updateCurrentPage();

        // 为前进/后退按钮添加监听
        window.addEventListener('popstate', updateCurrentPage);

        // 清理监听器
        return () => window.removeEventListener('popstate', updateCurrentPage);
    }, []);

    // 导航函数
    const navigate = (path) => {
        window.history.pushState({}, '', path);
        setCurrentPage(path);

        // 解析参数
        const pathParts = path.split('/').filter(part => part);
        if (pathParts.length >= 2) {
            setParams({ id: pathParts[1] });
        } else {
            setParams({});
        }

        // 滚动到顶部
        window.scrollTo(0, 0);
    };

    // 根据当前页面路径渲染不同内容
    const renderPage = () => {
        if (currentPage === '/' || currentPage === '') {
            return <Home onNavigate={navigate} />;
        } else if (currentPage.startsWith('/styles/')) {
            return <StyleDetail styleId={params.id} onNavigate={navigate} />;
        } else if (currentPage.startsWith('/practices/')) {
            return <PracticeDetail practiceId={params.id} onNavigate={navigate} />;
        } else if (currentPage === '/tools') {
            return <AdvancedTools onNavigate={navigate} />;
        } else if (currentPage.startsWith('/tools/comparison')) {
            return (
                <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <StyleComparison />
                    </div>
                </div>
            );
        } else if (currentPage.startsWith('/tools/generator')) {
            return (
                <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <CssGenerator />
                    </div>
                </div>
            );
        } else if (currentPage.startsWith('/tools/trends')) {
            return (
                <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <StyleTrends />
                    </div>
                </div>
            );
        } else {
            // 404页面
            return <NotFoundPage onNavigate={navigate} />;
        }
    };

    // 修改Navbar组件以支持导航
    const NavbarWithNavigation = () => <Navbar onNavigate={navigate} currentPath={currentPage} />;

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            <NavbarWithNavigation />
            <main className="flex-grow pt-16 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {renderPage()}
            </main>
            <Footer onNavigate={navigate} />
        </div>
    );
};

export default App;
