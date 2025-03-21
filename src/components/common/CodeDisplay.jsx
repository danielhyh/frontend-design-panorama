// src/components/common/CodeDisplay.jsx
import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';

const CodeDisplay = ({ code, language = 'css', title = '' }) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        // 代码高亮
        Prism.highlightAll();
    }, [code]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="overflow-hidden rounded-md shadow-md dark:shadow-gray-800">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800 dark:bg-gray-900">
                {title && <span className="text-sm text-gray-200">{title}</span>}
                <span className="text-sm text-gray-400">{language}</span>
                <button
                    onClick={copyToClipboard}
                    className="px-2 py-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                >
                    {copied ? '已复制！' : '复制'}
                </button>
            </div>
            <div className="relative">
        <pre className="p-4 text-gray-300 text-sm overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 bg-gray-800 dark:bg-gray-900">
          <code className={`language-${language}`}>
            {code}
          </code>
        </pre>
            </div>
        </div>
    );
};

export default CodeDisplay;
