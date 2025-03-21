// src/styles/dynamicStyles.js
const createStyleElement = (id, css) => {
    let styleEl = document.getElementById(id);
    if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = id;
        document.head.appendChild(styleEl);
    }
    styleEl.textContent = css;
    return styleEl;
};

export const applyStyle = (styleId) => {
    // 移除之前的风格
    const prevStyle = document.getElementById('dynamic-style');
    if (prevStyle) {
        prevStyle.remove();
    }

    // 根据不同风格应用不同CSS
    let css = '';

    switch(styleId) {
        case 'skeuomorphism':
            css = `
        body {
          background-color: #f8f8f8;
        }
        .style-card {
          background: linear-gradient(to bottom, #f7f7f7, #d7d7d7);
          border-radius: 5px;
          border: 1px solid #999;
          box-shadow: 0 1px 2px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.6);
        }
        .style-button {
          background: linear-gradient(to bottom, #f7f7f7, #d7d7d7);
          border-radius: 5px;
          border: 1px solid #999;
          box-shadow: 0 1px 2px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.6);
          color: #333;
          text-shadow: 0 1px 0 rgba(255,255,255,0.6);
          padding: 8px 16px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .style-button:hover {
          background: linear-gradient(to bottom, #f9f9f9, #d9d9d9);
        }
        .style-button:active {
          background: linear-gradient(to bottom, #d7d7d7, #f7f7f7);
          box-shadow: inset 0 1px 3px rgba(0,0,0,0.2), 0 1px 1px rgba(255,255,255,0.4);
        }
      `;
            break;
        case 'flat-design':
            css = `
        body {
          background-color: #f9f9f9;
        }
        .style-card {
          background-color: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 0;
        }
        .style-button {
          background-color: #2196F3;
          border: none;
          color: white;
          border-radius: 0;
          font-weight: 500;
          text-transform: uppercase;
          padding: 10px 16px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .style-button:hover {
          background-color: #1976D2;
        }
        .style-button:active {
          background-color: #0D47A1;
        }
      `;
            break;
        case 'material-design':
            css = `
        body {
          background-color: #f5f5f5;
        }
        .style-card {
          background-color: white;
          border-radius: 2px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .style-card:hover {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1), 0 16px 32px rgba(0, 0, 0, 0.1);
        }
        .style-button {
          background-color: #3F51B5;
          color: white;
          border: none;
          border-radius: 2px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          padding: 10px 16px;
          font-weight: 500;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .style-button:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
        .style-button:active {
          box-shadow: 0 8px 10px rgba(0, 0, 0, 0.3);
        }
      `;
            break;
        case 'neumorphism':
            css = `
        body {
          background-color: #e0e5ec;
        }
        .style-card {
          background: #e0e5ec;
          border-radius: 15px;
          box-shadow: 8px 8px 16px rgba(166, 175, 195, 0.5), -8px -8px 16px rgba(255, 255, 255, 0.8);
          border: none;
          padding: 20px;
        }
        .style-button {
          width: auto;
          padding: 10px 20px;
          border-radius: 10px;
          background: #e0e5ec;
          border: none;
          color: #666;
          font-weight: 600;
          box-shadow: 6px 6px 12px rgba(166, 175, 195, 0.5), -6px -6px 12px rgba(255, 255, 255, 0.8);
          transition: box-shadow 0.3s ease;
          cursor: pointer;
        }
        .style-button:hover {
          box-shadow: 4px 4px 8px rgba(166, 175, 195, 0.5), -4px -4px 8px rgba(255, 255, 255, 0.8);
        }
        .style-button:active {
          box-shadow: inset 4px 4px 8px rgba(166, 175, 195, 0.5), inset -4px -4px 8px rgba(255, 255, 255, 0.8);
        }
      `;
            break;
        case 'glassmorphism':
            css = `
        body {
          background: linear-gradient(135deg, #4158D0, #C850C0, #FFCC70);
          color: white;
        }
        .style-card {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        .style-button {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 10px 20px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
        }
        .style-button:hover {
          background: rgba(255, 255, 255, 0.3);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        .style-button:active {
          transform: translateY(2px);
        }
        h1, h2, h3, p, .text-gray-700, .text-gray-600, .text-gray-900 {
          color: white !important;
        }
        .dark\\:text-white, .dark\\:text-gray-300, .dark\\:text-gray-100 {
          color: white !important;
        }
      `;
            break;
        case 'dark-mode':
            css = `
        body {
          background-color: #121212 !important;
          color: #e1e1e1 !important;
        }
        .style-card {
          background-color: #1e1e1e;
          color: #e1e1e1;
          border: 1px solid #333333;
          border-radius: 4px;
        }
        .style-button {
          background-color: #bb86fc;
          color: #000000;
          border: none;
          border-radius: 4px;
          padding: 10px 20px;
          font-weight: 500;
          cursor: pointer;
        }
        .style-button:hover {
          background-color: #c995ff;
        }
        .style-button:active {
          background-color: #a370e8;
        }
        .bg-white {
          background-color: #1e1e1e !important;
        }
        .bg-gray-50 {
          background-color: #121212 !important;
        }
        .text-gray-900, .text-gray-800, .text-gray-700, .text-gray-600 {
          color: #e1e1e1 !important;
        }
        .dark\\:bg-gray-900 {
          background-color: #121212 !important;
        }
        .dark\\:bg-gray-800 {
          background-color: #1e1e1e !important;
        }
        .dark\\:text-white, .dark\\:text-gray-300, .dark\\:text-gray-100 {
          color: #e1e1e1 !important;
        }
      `;
            break;
        default:
            // 默认风格（协调之美）
            css = `
        body {
          background-color: #f8fafc;
        }
        .style-card {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 15px rgba(0, 0, 0, 0.03);
          transition: all 0.3s ease;
        }
        .style-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05), 0 20px 40px rgba(0, 0, 0, 0.03);
        }
        .style-button {
          background: linear-gradient(135deg, #5b63fe, #3042fc);
          color: white;
          border-radius: 6px;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          padding: 10px 20px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        .style-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(91, 99, 254, 0.3);
        }
        .style-button:active {
          transform: translateY(0);
        }
      `;
    }

    createStyleElement('dynamic-style', css);
};
