// src/components/home/Timeline.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TimelineItem = ({ style, index, total }) => {
    // 左右交替布局
    const isEven = index % 2 === 0;

    return (
        <motion.div
            className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'} mb-16 md:mb-8`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            {/* 内容区 - 总是占50%宽度 */}
            <div className="w-full md:w-5/12">
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold mb-2" style={{ color: style.color }}>{style.name}</h3>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{style.period}</div>
                    <p className="text-gray-700 dark:text-gray-300">{style.description}</p>
                    <Link
                        to={`/styles/${style.id}`}
                        className="mt-3 inline-block text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        了解更多 →
                    </Link>
                </div>
            </div>

            {/* 中间点和线 - 只在MD以上显示 */}
            <div className="hidden md:flex md:w-2/12 justify-center relative">
                {/* 垂直线 */}
                {index !== 0 && (
                    <div className="absolute h-full w-1 bg-gray-200 dark:bg-gray-700 top-0" style={{
                        top: '-100%'
                    }}></div>
                )}
                {index !== total - 1 && (
                    <div className="absolute h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
                )}

                {/* 中心点 */}
                <div
                    className="w-8 h-8 rounded-full shadow-lg z-10 flex items-center justify-center"
                    style={{ backgroundColor: style.color }}
                >
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
            </div>

            {/* 移动端时间指示 - 仅在小屏幕显示 */}
            <div className="md:hidden absolute left-0" style={{ top: '50%' }}>
                <div
                    className="w-6 h-6 rounded-full shadow-md flex items-center justify-center"
                    style={{ backgroundColor: style.color }}
                >
                    <span className="text-white font-bold text-xs">{index + 1}</span>
                </div>
            </div>

            {/* 另一侧留空（在md及以上） */}
            <div className="hidden md:block md:w-5/12"></div>
        </motion.div>
    );
};

const Timeline = ({ styles }) => {
    if (!styles || styles.length === 0) {
        return <div>没有可显示的设计风格数据</div>;
    }

    return (
        <div className="relative py-8">
            {/* 时间线主轴(仅在md以上显示) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>

            {/* 左右交错的时间线项目 */}
            <div className="space-y-8">
                {styles.map((style, index) => (
                    <TimelineItem
                        key={style.id}
                        style={style}
                        index={index}
                        total={styles.length}
                    />
                ))}
            </div>
        </div>
    );
};

export default Timeline;
