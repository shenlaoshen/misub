/**
 * 伪装页面模板
 * 提供多种内置伪装页面模板
 * @author MiSub Team
 */

/**
 * 搜索引擎模板
 */
export const SEARCH_TEMPLATE = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>搜索</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .container {
            text-align: center;
            max-width: 600px;
            width: 100%;
        }
        .logo {
            font-size: 72px;
            font-weight: 700;
            color: white;
            margin-bottom: 40px;
            text-shadow: 0 4px 20px rgba(0,0,0,0.2);
            letter-spacing: -2px;
        }
        .search-box {
            position: relative;
            margin-bottom: 30px;
        }
        .search-input {
            width: 100%;
            padding: 18px 24px;
            font-size: 16px;
            border: none;
            border-radius: 50px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            outline: none;
            transition: all 0.3s ease;
        }
        .search-input:focus {
            box-shadow: 0 15px 50px rgba(0,0,0,0.3);
            transform: translateY(-2px);
        }
        .search-btn {
            position: absolute;
            right: 8px;
            top: 50%;
            transform: translateY(-50%);
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 10px 24px;
            border-radius: 50px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        .search-btn:hover {
            transform: translateY(-50%) scale(1.05);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        .links {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
        }
        .links a {
            color: white;
            text-decoration: none;
            font-size: 14px;
            opacity: 0.9;
            transition: opacity 0.3s ease;
        }
        .links a:hover {
            opacity: 1;
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">Search</div>
        <div class="search-box">
            <input type="text" class="search-input" placeholder="搜索任何内容..." id="searchInput">
            <button class="search-btn" onclick="handleSearch()">搜索</button>
        </div>
        <div class="links">
            <a href="#">关于</a>
            <a href="#">隐私</a>
            <a href="#">条款</a>
            <a href="#">帮助</a>
        </div>
    </div>
    <script>
        function handleSearch() {
            const query = document.getElementById('searchInput').value;
            if (query.trim()) {
                window.location.href = 'https://www.bing.com/search?q=' + encodeURIComponent(query);
            }
        }
        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    </script>
</body>
</html>`;

/**
 * 博客模板
 */
export const BLOG_TEMPLATE = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的博客</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background: #f5f5f5;
            color: #333;
            line-height: 1.6;
        }
        header {
            background: white;
            padding: 30px 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        .header-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 20px;
        }
        h1 {
            font-size: 32px;
            margin-bottom: 10px;
            color: #1a1a1a;
        }
        .tagline {
            color: #666;
            font-size: 16px;
        }
        .container {
            max-width: 800px;
            margin: 40px auto;
            padding: 0 20px;
        }
        .post {
            background: white;
            padding: 40px;
            margin-bottom: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .post:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }
        .post-title {
            font-size: 24px;
            margin-bottom: 10px;
            color: #1a1a1a;
        }
        .post-meta {
            color: #999;
            font-size: 14px;
            margin-bottom: 20px;
        }
        .post-excerpt {
            color: #555;
            line-height: 1.8;
        }
        .read-more {
            display: inline-block;
            margin-top: 15px;
            color: #667eea;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s ease;
        }
        .read-more:hover {
            color: #764ba2;
        }
    </style>
</head>
<body>
    <header>
        <div class="header-content">
            <h1>我的博客</h1>
            <p class="tagline">分享技术与生活</p>
        </div>
    </header>
    <div class="container">
        <article class="post">
            <h2 class="post-title">欢迎来到我的博客</h2>
            <div class="post-meta">2024年12月25日 · 技术分享</div>
            <p class="post-excerpt">
                这是一个简洁优雅的博客页面。在这里,我会分享关于技术、生活和思考的内容。
                希望这些文字能给你带来一些启发和帮助。
            </p>
            <a href="#" class="read-more">阅读更多 →</a>
        </article>
        <article class="post">
            <h2 class="post-title">关于网络安全的思考</h2>
            <div class="post-meta">2024年12月20日 · 安全</div>
            <p class="post-excerpt">
                在数字化时代,网络安全变得越来越重要。本文将探讨一些基本的安全实践,
                帮助你更好地保护个人信息和数据安全。
            </p>
            <a href="#" class="read-more">阅读更多 →</a>
        </article>
        <article class="post">
            <h2 class="post-title">高效工作的几个小技巧</h2>
            <div class="post-meta">2024年12月15日 · 效率</div>
            <p class="post-excerpt">
                提高工作效率是每个人都关心的话题。通过合理的时间管理和工具使用,
                我们可以在更短的时间内完成更多的工作。
            </p>
            <a href="#" class="read-more">阅读更多 →</a>
        </article>
    </div>
</body>
</html>`;

/**
 * 作品集模板
 */
export const PORTFOLIO_TEMPLATE = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>个人作品集</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background: #0a0a0a;
            color: #fff;
        }
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            position: relative;
            overflow: hidden;
        }
        .hero::before {
            content: '';
            position: absolute;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
            background-size: 50px 50px;
            animation: move 20s linear infinite;
        }
        @keyframes move {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
        }
        .hero-content {
            text-align: center;
            z-index: 1;
            padding: 20px;
        }
        h1 {
            font-size: 64px;
            margin-bottom: 20px;
            font-weight: 700;
            letter-spacing: -2px;
        }
        .subtitle {
            font-size: 24px;
            opacity: 0.9;
            margin-bottom: 40px;
        }
        .cta-button {
            display: inline-block;
            padding: 15px 40px;
            background: white;
            color: #1e3c72;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.4);
        }
        .projects {
            max-width: 1200px;
            margin: 80px auto;
            padding: 0 20px;
        }
        .section-title {
            font-size: 36px;
            margin-bottom: 50px;
            text-align: center;
        }
        .project-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }
        .project-card {
            background: #1a1a1a;
            border-radius: 12px;
            overflow: hidden;
            transition: transform 0.3s ease;
        }
        .project-card:hover {
            transform: translateY(-10px);
        }
        .project-image {
            width: 100%;
            height: 200px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 48px;
        }
        .project-content {
            padding: 25px;
        }
        .project-title {
            font-size: 20px;
            margin-bottom: 10px;
        }
        .project-desc {
            color: #999;
            font-size: 14px;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <section class="hero">
        <div class="hero-content">
            <h1>创意设计师</h1>
            <p class="subtitle">用设计改变世界</p>
            <a href="#projects" class="cta-button">查看作品</a>
        </div>
    </section>
    <section class="projects" id="projects">
        <h2 class="section-title">精选作品</h2>
        <div class="project-grid">
            <div class="project-card">
                <div class="project-image">🎨</div>
                <div class="project-content">
                    <h3 class="project-title">品牌设计</h3>
                    <p class="project-desc">为多家企业提供专业的品牌视觉设计服务,打造独特的品牌形象。</p>
                </div>
            </div>
            <div class="project-card">
                <div class="project-image">📱</div>
                <div class="project-content">
                    <h3 class="project-title">移动应用</h3>
                    <p class="project-desc">设计简洁优雅的移动应用界面,提升用户体验和产品价值。</p>
                </div>
            </div>
            <div class="project-card">
                <div class="project-image">🌐</div>
                <div class="project-content">
                    <h3 class="project-title">网站开发</h3>
                    <p class="project-desc">构建响应式网站,结合现代设计理念和前沿技术。</p>
                </div>
            </div>
        </div>
    </section>
</body>
</html>`;

/**
 * 获取指定模板
 * @param {string} templateName - 模板名称: 'search' | 'blog' | 'portfolio'
 * @returns {string} HTML 模板内容
 */
export function getTemplate(templateName) {
    const templates = {
        search: SEARCH_TEMPLATE,
        blog: BLOG_TEMPLATE,
        portfolio: PORTFOLIO_TEMPLATE
    };
    return templates[templateName] || SEARCH_TEMPLATE;
}

/**
 * 生成伪装页面响应
 * @param {Object} disguiseConfig - 伪装配置
 * @returns {Response} HTTP 响应
 */
export function generateDisguiseResponse(disguiseConfig) {
    const { pageType, redirectUrl, customHtml, builtinTemplate } = disguiseConfig;

    switch (pageType) {
        case 'redirect':
            // 重定向到指定URL
            return new Response(null, {
                status: 302,
                headers: { Location: redirectUrl || 'https://www.bing.com' }
            });

        case 'custom':
            // 返回自定义HTML
            return new Response(customHtml || '<h1>Welcome</h1>', {
                headers: { 'Content-Type': 'text/html; charset=utf-8' }
            });

        case 'builtin':
            // 返回内置模板
            const template = getTemplate(builtinTemplate || 'search');
            return new Response(template, {
                headers: { 'Content-Type': 'text/html; charset=utf-8' }
            });

        default:
            // 默认重定向
            return new Response(null, {
                status: 302,
                headers: { Location: 'https://www.bing.com' }
            });
    }
}
