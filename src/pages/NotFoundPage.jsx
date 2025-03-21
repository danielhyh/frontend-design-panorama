// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import Button from '../components/common/Button';

const NotFoundPage = () => {
    return (
        <Container className="py-20 text-center">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-6">页面未找到</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                您请求的页面不存在。可能是链接已经失效，或者页面已被移动。
            </p>
            <Button to="/" type="primary" size="lg">
                返回首页
            </Button>
        </Container>
    );
};

export default NotFoundPage;
