// src/data/designStyles.js
export const designStyles = [
    {
        id: 'skeuomorphism',
        name: '拟物化设计',
        subtitle: '现实的数字映射',
        period: '2007-2013',
        color: '#ff7043',
        description: '拟物化设计模仿现实世界的物体外观和行为，通过逼真的纹理、阴影和光泽效果，使数字界面仿佛触手可及。这种设计风格在早期触屏设备中广泛应用，特别是在iOS 6及之前的系统中表现得最为明显。',
        coreFeatures: [
            {
                title: '真实材质和纹理模拟',
                description: '界面元素模拟了皮革、金属等真实材质的外观',
                icon: '🧱'
            },
            {
                title: '精细的光影效果',
                description: '通过高光和阴影创造立体感和深度',
                icon: '💡'
            },
            {
                title: '立体按钮和界面元素',
                description: '按钮和控件具有明显的凸起或凹陷效果',
                icon: '🔘'
            },
            {
                title: '丰富的细节和装饰',
                description: '大量的视觉细节模拟现实物体的特性',
                icon: '✨'
            }
        ],
        implementationTips: [
            '运用渐变创造光泽和深度',
            '添加细微纹理模拟真实材质',
            '使用多层阴影营造立体感',
            '细腻的边缘处理和过渡效果'
        ],
        applicationScenarios: [
            '早期触屏设备界面',
            'iOS 6及之前的系统',
            '游戏用户界面',
            '需要直观引导的新型交互模式'
        ],
        elements: [
            {
                name: '拟物化按钮',
                description: '具有明显凸起效果和光泽的按钮',
                cssCode: `.skeuomorphic-button {
  width: 100px;
  height: 40px;
  background: linear-gradient(to bottom, #f7f7f7, #d7d7d7);
  border-radius: 5px;
  border: 1px solid #999;
  box-shadow: 
    0 1px 2px rgba(0,0,0,0.2),
    inset 0 1px 1px rgba(255,255,255,0.6);
  color: #333;
  font-weight: bold;
  text-shadow: 0 1px 0 rgba(255,255,255,0.6);
  position: relative;
}

.skeuomorphic-button:active {
  background: linear-gradient(to bottom, #d7d7d7, #f7f7f7);
  box-shadow: 
    inset 0 1px 3px rgba(0,0,0,0.2),
    0 1px 1px rgba(255,255,255,0.4);
}`
            },
            {
                name: '皮革纹理',
                description: '模拟皮革质感的纹理背景',
                cssCode: `.leather-texture {
  background-color: #8B4513;
  background-image: 
    repeating-linear-gradient(
      45deg, 
      rgba(0,0,0,0.1) 0px, 
      rgba(0,0,0,0.1) 2px, 
      transparent 2px, 
      transparent 4px
    ),
    linear-gradient(
      to bottom,
      rgba(255,255,255,0.1) 0%,
      rgba(255,255,255,0) 50%,
      rgba(0,0,0,0.1) 100%
    );
  border: 1px solid rgba(0,0,0,0.2);
  box-shadow: 
    inset 0 2px 5px rgba(255,255,255,0.2),
    inset 0 -2px 5px rgba(0,0,0,0.2);
}`
            },
            {
                name: '金属效果',
                description: '模拟金属质感的光泽和纹理',
                cssCode: `.metal-effect {
  background: linear-gradient(to bottom, #f2f2f2, #ccc, #999, #ccc);
  border-radius: 5px;
  border: 1px solid #777;
  box-shadow: 
    0 1px 2px rgba(0,0,0,0.3),
    inset 0 1px 1px rgba(255,255,255,0.8);
  position: relative;
  overflow: hidden;
}

.metal-effect::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to bottom, 
    rgba(255,255,255,0.7) 0%, 
    rgba(255,255,255,0) 100%);
  pointer-events: none;
}`
            },
            {
                name: '纸张效果',
                description: '模拟纸张质感，带有微妙的纹理和阴影',
                cssCode: `.paper-effect {
  background-color: #f5f2e9;
  background-image: 
    repeating-linear-gradient(
      0deg, 
      transparent, 
      transparent 23px, 
      #e9e6dc 24px
    );
  border: 1px solid #e0d8c0;
  box-shadow: 
    0 1px 4px rgba(0,0,0,0.2),
    inset 0 0 50px rgba(0,0,0,0.05);
  padding: 20px;
  position: relative;
}

.paper-effect::before, .paper-effect::after {
  content: "";
  position: absolute;
  width: 40%;
  height: 10px;
  bottom: 12px;
  box-shadow: 0 15px 10px rgba(0,0,0,0.2);
  z-index: -1;
}

.paper-effect::before {
  left: 10px;
  transform: rotate(-5deg);
}

.paper-effect::after {
  right: 10px;
  transform: rotate(5deg);
}`
            }
        ]
    },
    {
        id: 'flat-design',
        name: '扁平化设计',
        subtitle: '回归二维平面',
        period: '2013-2016',
        color: '#42a5f5',
        description: '扁平化设计摒弃了拟物化的装饰性效果，回归二维平面，强调简洁和功能。它以微软的Metro UI和iOS 7为代表，标志着设计哲学的重大转变。通过移除阴影、渐变和纹理，创造出简约而现代的视觉语言。',
        coreFeatures: [
            {
                title: '移除渐变、阴影和纹理',
                description: '干净的纯色设计，没有多余的视觉装饰',
                icon: '🎨'
            },
            {
                title: '简洁的图标和图形',
                description: '使用简单的几何形状，减少细节',
                icon: '⚪'
            },
            {
                title: '鲜艳的色彩',
                description: '大胆、饱和的色彩成为主要设计元素',
                icon: '🌈'
            },
            {
                title: '强调排版和空间层次',
                description: '通过字体大小和空间创造层次感',
                icon: '📏'
            },
            {
                title: '极简主义美学',
                description: '简化界面，保留最必要的元素',
                icon: '✓'
            }
        ],
        implementationTips: [
            '使用纯色而非渐变',
            '明确的图形边缘，避免阴影',
            '运用负空间增强视觉层次',
            '大胆的色彩对比提升可读性'
        ],
        applicationScenarios: [
            'iOS 7及以后的系统界面',
            'Windows 8/10的Metro UI设计',
            '响应式网站设计',
            '追求现代简约感的品牌'
        ],
        elements: [
            {
                name: '扁平化按钮',
                description: '无阴影、无渐变的纯色按钮',
                cssCode: `.flat-button {
  width: 100px;
  height: 40px;
  background-color: #2196F3;
  border: none;
  color: white;
  font-weight: 500;
  text-transform: uppercase;
  transition: background-color 0.3s;
}

.flat-button:hover {
  background-color: #1976D2;
}

.flat-button:active {
  background-color: #0D47A1;
}`
            },
            {
                name: '扁平化图标',
                description: '简洁的单色图标，无渐变和阴影',
                cssCode: `.flat-icon {
  width: 24px;
  height: 24px;
  background-color: #2196F3;
  /* 使用mask-image设置SVG图标 */
  -webkit-mask-image: url('path-to-icon.svg');
  mask-image: url('path-to-icon.svg');
  -webkit-mask-size: cover;
  mask-size: cover;
}

/* 图标颜色通过修改background-color来实现 */
.flat-icon.warning {
  background-color: #FFC107;
}

.flat-icon.error {
  background-color: #F44336;
}`
            },
            {
                name: '扁平化卡片',
                description: '无阴影的纯色矩形容器',
                cssCode: `.flat-card {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;
}

.flat-card__title {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #212121;
}

.flat-card__content {
  color: #616161;
}`
            },
            {
                name: '扁平化表单',
                description: '简洁的输入控件，无立体感装饰',
                cssCode: `.flat-input {
  width: 100%;
  height: 40px;
  padding: 0 8px;
  border: 2px solid #e0e0e0;
  background-color: #ffffff;
  color: #212121;
  transition: border-color 0.3s;
}

.flat-input:focus {
  border-color: #2196F3;
  outline: none;
}

.flat-input::placeholder {
  color: #9e9e9e;
}`
            }
        ]
    },
    {
        id: 'material-design',
        name: '材料设计',
        subtitle: '数字纸张的哲学',
        period: '2014-2019',
        color: '#66bb6a',
        description: '谷歌在2014年推出的Material Design将扁平设计与微妙的深度暗示相结合，创造了基于纸张隐喻的设计语言。它提供了一套统一的跨平台设计指南，通过模拟现实世界中纸张的物理特性，赋予数字界面真实的触感和深度。',
        coreFeatures: [
            {
                title: '基于纸张的隐喻和物理规则',
                description: '界面元素模拟纸张的行为，有厚度、阴影和层次感',
                icon: '📄'
            },
            {
                title: '有意义的动画和过渡效果',
                description: '动效遵循物理规则，帮助用户理解界面变化',
                icon: '🔄'
            },
            {
                title: '分层的界面元素',
                description: '通过高度和阴影区分不同层级的界面元素',
                icon: '📚'
            },
            {
                title: '精确的网格系统',
                description: '基于8dp基线网格，确保跨设备的一致性和精准对齐',
                icon: '📏'
            },
            {
                title: '大胆的色彩与排版',
                description: '使用明确的主色和强调色，配合清晰的字体层级',
                icon: '🎨'
            }
        ],
        implementationTips: [
            '使用分层阴影表达海拔高度',
            '应用动画表现元素间的关系',
            '遵循8dp基线网格系统',
            '采用精心设计的色彩系统'
        ],
        applicationScenarios: [
            'Material Design被广泛用于谷歌旗下的产品',
            '众多遵循谷歌设计理念的应用和网站',
            '需要系统性和一致性的产品生态系统',
            '追求现代感和易用性的跨平台应用'
        ],
        elements: [
            {
                name: '材料卡片',
                description: '具有阴影和层次感的容器，用于承载相关内容',
                cssCode: `.material-card {
  background-color: white;
  border-radius: 4px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1),
              0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.material-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1),
              0 16px 32px rgba(0, 0, 0, 0.1);
}`
            },
            {
                name: '浮动操作按钮 (FAB)',
                description: '圆形按钮，通常漂浮在界面上方，表示主要操作',
                cssCode: `.material-fab {
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background-color: #ff4081;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2),
              0 6px 10px rgba(0, 0, 0, 0.14),
              0 1px 18px rgba(0, 0, 0, 0.12);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.material-fab:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2),
              0 8px 15px rgba(0, 0, 0, 0.14),
              0 3px 24px rgba(0, 0, 0, 0.12);
}`
            },
            {
                name: '波纹效果',
                description: '当点击元素时产生的涟漪动画效果',
                cssCode: `.material-button {
  position: relative;
  overflow: hidden;
  background-color: #2196F3;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  text-transform: uppercase;
  font-weight: 500;
}

.material-button:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition: transform .5s, opacity 1s;
}

.material-button:active:after {
  transform: scale(0, 0);
  opacity: .3;
  transition: 0s;
}`
            },
            {
                name: '应用栏',
                description: '位于屏幕顶部的导航条，包含应用标题和操作图标',
                cssCode: `.material-app-bar {
  display: flex;
  align-items: center;
  height: 56px;
  background-color: #3F51B5;
  color: white;
  padding: 0 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.material-app-bar__title {
  font-size: 20px;
  font-weight: 500;
  margin-left: 32px;
}

.material-app-bar__actions {
  margin-left: auto;
  display: flex;
  gap: 16px;
}`
            }
        ]
    },
    {
        id: 'neumorphism',
        name: '新拟物主义',
        subtitle: '柔和的立体感',
        period: '2019-2021',
        color: '#ab47bc',
        description: '新拟物主义是近年来兴起的设计趋势，它结合了扁平化和拟物化的元素，通过精细的阴影和高光创造出"挤压"或"凸起"于背景的视觉效果。这种风格注重柔和的色调和微妙的立体感，为界面增添了深度，同时保持了现代简约的特性。',
        coreFeatures: [
            {
                title: '柔和的凸起或凹陷效果',
                description: '元素似乎从背景中挤压或凸起，创造微妙的立体感',
                icon: '🔘'
            },
            {
                title: '相似的背景与前景色调',
                description: '使用相同色系的不同色调，形成统一感',
                icon: '🎨'
            },
            {
                title: '微妙的阴影对比',
                description: '利用对比阴影和高光创造深度感',
                icon: '☁️'
            },
            {
                title: '低对比度的界面',
                description: '整体色调柔和，视觉冲击较小',
                icon: '🌫️'
            },
            {
                title: '最小化的色彩使用',
                description: '主要通过形状和阴影而非色彩表达层次',
                icon: '⚪'
            }
        ],
        implementationTips: [
            '使用相同色调的明暗变化',
            '运用双向阴影创造凹凸效果',
            '保持低对比度和柔和的视觉效果',
            '精细调整阴影角度和模糊程度'
        ],
        applicationScenarios: [
            '智能家居控制界面',
            '音乐播放器应用',
            '设置界面和控制面板',
            '注重视觉舒适性的应用'
        ],
        elements: [
            {
                name: '新拟物按钮',
                description: '柔和的凸起效果，带有精细阴影的按钮',
                cssCode: `.neu-button {
  width: 120px;
  height: 50px;
  border-radius: 25px;
  background: #e0e5ec;
  border: none;
  color: #666;
  font-weight: 600;
  /* 凸起效果 */
  box-shadow: 
    6px 6px 12px rgba(166, 175, 195, 0.5),
    -6px -6px 12px rgba(255, 255, 255, 0.8);
  transition: box-shadow 0.3s ease;
}

.neu-button:hover {
  box-shadow: 
    4px 4px 8px rgba(166, 175, 195, 0.5),
    -4px -4px 8px rgba(255, 255, 255, 0.8);
}

.neu-button:active {
  /* 按下状态变成凹陷效果 */
  box-shadow: 
    inset 4px 4px 8px rgba(166, 175, 195, 0.5),
    inset -4px -4px 8px rgba(255, 255, 255, 0.8);
}`
            },
            {
                name: '新拟物输入框',
                description: '凹陷效果的输入字段',
                cssCode: `.neu-input {
  width: 100%;
  padding: 12px 16px;
  border-radius: 10px;
  border: none;
  background: #e0e5ec;
  color: #333;
  font-size: 14px;
  /* 凹陷效果 */
  box-shadow: 
    inset 2px 2px 5px rgba(166, 175, 195, 0.5),
    inset -2px -2px 5px rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
}

.neu-input:focus {
  outline: none;
  box-shadow: 
    inset 4px 4px 8px rgba(166, 175, 195, 0.5),
    inset -4px -4px 8px rgba(255, 255, 255, 0.8);
}`
            },
            {
                name: '新拟物开关',
                description: '带有凹凸效果的滑动开关',
                cssCode: `.neu-toggle {
  position: relative;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  background: #e0e5ec;
  box-shadow: 
    inset 2px 2px 5px rgba(166, 175, 195, 0.5),
    inset -2px -2px 5px rgba(255, 255, 255, 0.8);
  cursor: pointer;
}

.neu-toggle::after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #e0e5ec;
  box-shadow: 
    2px 2px 5px rgba(166, 175, 195, 0.5),
    -2px -2px 5px rgba(255, 255, 255, 0.8);
  transition: transform 0.3s ease;
}

.neu-toggle.active::after {
  transform: translateX(30px);
  background: #6a8fff;
}`
            },
            {
                name: '新拟物卡片',
                description: '柔和凸起效果的容器',
                cssCode: `.neu-card {
  background: #e0e5ec;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 
    8px 8px 16px rgba(166, 175, 195, 0.5),
    -8px -8px 16px rgba(255, 255, 255, 0.8);
}

.neu-card__title {
  color: #333;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
}

.neu-card__content {
  color: #666;
}`
            }
        ]
    },
    {
        id: 'glassmorphism',
        name: '玻璃态设计',
        subtitle: '透明模糊的艺术',
        period: '2020-至今',
        color: '#26c6da',
        description: '玻璃态设计通过半透明模糊效果创造出类似磨砂玻璃的视觉感受，让界面元素仿佛悬浮在背景之上，创造出层次感和深度。这种设计风格在macOS Big Sur和Windows 11等操作系统UI中广泛应用，为用户带来现代、轻盈的视觉体验。',
        coreFeatures: [
            {
                title: '半透明背景',
                description: '允许底层内容部分可见，增强层次感',
                icon: '🔍'
            },
            {
                title: '模糊效果(backdrop-filter)',
                description: '背景模糊处理，增强可读性和美感',
                icon: '💨'
            },
            {
                title: '细微的边框',
                description: '薄的亮色边框增强可见性',
                icon: '📏'
            },
            {
                title: '多层次重叠',
                description: '通过透明度变化创造深度和层次',
                icon: '📚'
            },
            {
                title: '光感和深度',
                description: '利用光线和透明效果创造空间感',
                icon: '✨'
            }
        ],
        implementationTips: [
            '使用CSS backdrop-filter实现背景模糊',
            '添加微妙的边框增强可见性',
            '层次化组织界面元素',
            '使用丰富的背景增强视觉效果'
        ],
        applicationScenarios: [
            'macOS Big Sur和Windows 11系统UI',
            '需要视觉层次感的现代界面',
            '希望营造轻盈现代感的网站和应用',
            '图片或视频作为背景的界面'
        ],
        elements: [
            {
                name: '玻璃态卡片',
                description: '半透明模糊效果的内容容器',
                cssCode: `.glass-card {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* 推荐在渐变或图片背景上使用 */
body {
  background: linear-gradient(135deg, #4158D0, #C850C0, #FFCC70);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}`
            },
            {
                name: '玻璃态导航栏',
                description: '固定在顶部的半透明导航条',
                cssCode: `.glass-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 1000;
}

.glass-navbar__logo {
  font-size: 20px;
  font-weight: 600;
  color: white;
}

.glass-navbar__menu {
  margin-left: auto;
  display: flex;
  gap: 20px;
}

.glass-navbar__item {
  color: white;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.glass-navbar__item:hover {
  opacity: 1;
}`
            },
            {
                name: '玻璃态按钮',
                description: '半透明的交互按钮',
                cssCode: `.glass-button {
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-weight: 500;
  transition: all 0.3s;
}

.glass-button:hover {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.glass-button:active {
  transform: translateY(2px);
}`
            },
            {
                name: '玻璃态模态框',
                description: '模糊背景的弹出对话框',
                cssCode: `.glass-modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.glass-modal {
  width: 90%;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 30px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.glass-modal__title {
  font-size: 24px;
  color: white;
  margin-bottom: 15px;
  font-weight: 600;
}

.glass-modal__content {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 25px;
}

.glass-modal__actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}`
            }
        ]
    },
    {
        id: 'dark-mode',
        name: '暗黑模式',
        subtitle: '夜间视觉的艺术',
        period: '2021-至今',
        color: '#5c6bc0',
        description: '暗黑模式是一种使用深色背景和浅色文字的配色方案，不仅能够减轻眼睛疲劳，还能节省电量，同时创造出富有质感的视觉体验。随着操作系统和应用程序广泛支持暗黑模式切换，这种设计方式已成为现代UI设计的标准功能。',
        coreFeatures: [
            {
                title: '深色背景与浅色文字',
                description: '颠倒传统的明暗关系，减少屏幕发光',
                icon: '🌙'
            },
            {
                title: '降低整体亮度和对比度',
                description: '为夜间使用优化，减轻眼睛疲劳',
                icon: '👁️'
            },
            {
                title: '强调关键元素',
                description: '使用亮色突出重要内容和交互元素',
                icon: '🔆'
            },
            {
                title: '微妙的深度和层次感',
                description: '通过深浅不同的暗色创造层次',
                icon: '📚'
            },
            {
                title: '符合人体工程学的色彩选择',
                description: '精心选择色彩减少蓝光，提高可读性',
                icon: '🎨'
            }
        ],
        implementationTips: [
            '避免纯黑色，使用深灰色作为背景(#121212)',
            '降低纯白文字亮度，使用浅灰色(#E1E1E1)',
            '为关键元素使用鲜艳的强调色',
            '合理使用阴影和高光创造层次感'
        ],
        applicationScenarios: [
            '需要长时间使用的应用',
            '夜间使用的场景',
            '希望节省设备电量的应用',
            '营造沉浸式体验的内容消费类应用'
        ],
        elements: [
            {
                name: '暗黑模式背景',
                description: '深色背景系统，避免使用纯黑',
                cssCode: `:root {
  --dark-bg-primary: #121212;
  --dark-bg-secondary: #1e1e1e;
  --dark-bg-tertiary: #252525;
  --dark-text-primary: #e1e1e1;
  --dark-text-secondary: #b0b0b0;
  --dark-border: #333333;
  --dark-primary: #bb86fc;
  --dark-secondary: #03dac5;
  --dark-error: #cf6679;
}

.dark-mode {
  background-color: var(--dark-bg-primary);
  color: var(--dark-text-primary);
}

.dark-mode .card {
  background-color: var(--dark-bg-secondary);
  border: 1px solid var(--dark-border);
}`
            },
            {
                name: '暗黑模式按钮',
                description: '深色背景上的按钮样式',
                cssCode: `.dark-button-primary {
  background-color: var(--dark-primary);
  color: #000000;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-weight: 500;
}

.dark-button-secondary {
  background-color: transparent;
  color: var(--dark-primary);
  padding: 9px 19px;
  border: 1px solid var(--dark-primary);
  border-radius: 4px;
  font-weight: 500;
}

.dark-button-disabled {
  background-color: rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.38);
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
}`
            },
            {
                name: '暗黑模式文本样式',
                description: '深色背景上的文本层级',
                cssCode: `.dark-text-heading {
  color: var(--dark-text-primary);
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 16px;
}

.dark-text-body {
  color: var(--dark-text-primary);
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 16px;
}

.dark-text-caption {
  color: var(--dark-text-secondary);
  font-size: 14px;
  line-height: 1.4;
}

.dark-link {
  color: var(--dark-primary);
  text-decoration: none;
}

.dark-link:hover {
  text-decoration: underline;
}`
            },
            {
                name: '暗黑模式表单控件',
                description: '深色背景上的输入框样式',
                cssCode: `.dark-input {
  background-color: var(--dark-bg-tertiary);
  color: var(--dark-text-primary);
  border: 1px solid var(--dark-border);
  border-radius: 4px;
  padding: 12px 16px;
  width: 100%;
}

.dark-input:focus {
  border-color: var(--dark-primary);
  outline: none;
}

.dark-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.dark-checkbox {
  accent-color: var(--dark-primary);
}

.dark-select {
  background-color: var(--dark-bg-tertiary);
  color: var(--dark-text-primary);
  border: 1px solid var(--dark-border);
  border-radius: 4px;
  padding: 12px 16px;
  width: 100%;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 12px center;
}`
            }
        ]
    },
    {
        id: 'harmonic-fusion',
        name: '协调之美',
        subtitle: '最佳融合风格',
        period: '2022-至今',
        color: '#5b63fe',
        description: '协调之美是一种融合了多种设计风格优点的综合设计方法，它平衡了美学、功能性、可访问性和性能，适合现代数字产品的需求。这种设计方法注重内容优先、适应性设计、可访问性为基础、情感连接和功能与美学平衡，为用户创造流畅、直观的使用体验。',
        coreFeatures: [
            {
                title: '内容优先',
                description: '设计应首先服务于内容，界面元素不应干扰信息传达',
                icon: '📄'
            },
            {
                title: '适应性设计',
                description: '根据用户、设备和情境自动调整，提供流畅体验',
                icon: '📱'
            },
            {
                title: '可访问性为基础',
                description: '确保不同能力用户都能使用，提供足够的对比度和可读性',
                icon: '♿'
            },
            {
                title: '情感连接',
                description: '通过微妙的动效创造人性化体验，传递品牌个性',
                icon: '❤️'
            },
            {
                title: '功能与美学平衡',
                description: '美学服务于功能，简约但不简陋，丰富但不复杂',
                icon: '⚖️'
            }
        ],
        implementationTips: [
            '创建变量化设计系统，支持多种主题',
            '利用微妙的阴影和高度表达内容层次',
            '保持整体设计语言的一致性',
            '确保足够的对比度和清晰的文本',
            '优化性能，避免过度装饰影响加载速度'
        ],
        applicationScenarios: [
            '现代Web应用和移动应用',
            '需要适应多种设备和使用场景的产品',
            '追求高可用性和包容性的服务',
            '需要在美观和功能间取得平衡的产品'
        ],
        elements: [
            {
                name: '适应性卡片',
                description: '根据内容和上下文调整的内容容器',
                cssCode: `.fusion-card {
  background-color: var(--surface);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  padding: var(--space-6);
  transition: transform var(--transition-normal),
              box-shadow var(--transition-normal);
}

.fusion-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

/* CSS变量定义示例 */
:root {
  --surface: #ffffff;
  --radius-md: 8px;
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.05),
               0 10px 15px rgba(0, 0, 0, 0.03);
  --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.05),
               0 20px 40px rgba(0, 0, 0, 0.03);
  --space-6: 24px;
  --transition-normal: 250ms;
}

@media (prefers-color-scheme: dark) {
  :root {
    --surface: #1e293b;
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.3),
                 0 10px 15px rgba(0, 0, 0, 0.2);
    --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.3),
                 0 20px 40px rgba(0, 0, 0, 0.2);
  }
}`
            },
            {
                name: '主按钮',
                description: '突出主要操作的按钮样式',
                cssCode: `.fusion-button-primary {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: white;
  font-family: var(--font-sans);
  font-weight: var(--font-weight-medium);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-full);
  border: none;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-fast),
              box-shadow var(--transition-fast);
}

.fusion-button-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(91, 99, 254, 0.3);
}

.fusion-button-primary:active {
  transform: translateY(0);
}

/* 更多CSS变量 */
:root {
  --color-primary: #5b63fe;
  --color-primary-dark: #4354eb;
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-weight-medium: 500;
  --space-3: 12px;
  --space-6: 24px;
  --radius-full: 9999px;
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.05);
  --transition-fast: 150ms;
}`
            },
            {
                name: '内容优先的排版系统',
                description: '清晰的文本层级，注重可读性',
                cssCode: `:root {
  /* 类型比例尺 - 1.25倍比例 */
  --text-xs: 0.8rem;
  --text-sm: 1rem;
  --text-md: 1.25rem;
  --text-lg: 1.563rem;
  --text-xl: 1.953rem;
  --text-2xl: 2.441rem;
  --text-3xl: 3.052rem;
  
  /* 行高 */
  --leading-tight: 1.2;
  --leading-normal: 1.5;
  --leading-loose: 1.8;
  
  /* 文本颜色 */
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --text-tertiary: #94a3b8;
}

@media (prefers-color-scheme: dark) {
  :root {
    --text-primary: #f1f5f9;
    --text-secondary: #cbd5e1;
    --text-tertiary: #94a3b8;
  }
}

.fusion-heading-1 {
  font-size: var(--text-3xl);
  font-weight: 700;
  line-height: var(--leading-tight);
  color: var(--text-primary);
  margin-bottom: 0.5em;
}

.fusion-text {
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
  color: var(--text-secondary);
  max-width: 65ch; /* 提高可读性的最佳行宽 */
}`
            },
            {
                name: '微交互反馈',
                description: '为用户操作提供即时视觉反馈',
                cssCode: `.fusion-input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background-color: var(--surface);
  color: var(--text-primary);
  transition: all var(--transition-normal);
}

.fusion-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(91, 99, 254, 0.15);
}

/* 波纹效果 */
.fusion-ripple {
  position: relative;
  overflow: hidden;
}

.fusion-ripple::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: rgba(255, 255, 255, 0.5);
  opacity: 0;
  border-radius: 100%;
  transform: scale(1, 1) translate(-50%, -50%);
  transform-origin: 50% 50%;
}

.fusion-ripple:focus:not(:active)::after {
  animation: ripple 0.6s ease-out;
}

@keyframes ripple {
  0% {
    transform: scale(0, 0);
    opacity: 0.5;
  }
  100% {
    transform: scale(20, 20);
    opacity: 0;
  }
}`
            }
        ]
    }
];

export default designStyles;
