// src/components/style/NavigationButtons.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const NavigationButtons = ({ prevStyle, nextStyle }) => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:underline">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                返回首页
            </Link>

            <div className="flex space-x-4">
                {prevStyle && (
                    <Button
                        to={`/styles/${prevStyle.id}`}
                        type="outline"
                        size="sm"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                        {prevStyle.name}
                    </Button>
                )}

                {nextStyle && (
                    <Button
                        to={`/styles/${nextStyle.id}`}
                        type="outline"
                        size="sm"
                    >
                        {nextStyle.name}
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </Button>
                )}
            </div>
        </div>
    );
};

export default NavigationButtons;
