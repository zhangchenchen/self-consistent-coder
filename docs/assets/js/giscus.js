function loadComments() {
    const giscusTheme = document.querySelector('[data-md-color-scheme]').getAttribute('data-md-color-scheme');
    const giscusAttributes = {
        "src": "https://giscus.app/client.js",
        "data-repo": "zhangchenchen/self-consistent-coder",
        "data-repo-id": "R_kgDONn3HnA", // 请将这里替换为你从 giscus.app 获取的 repo-id
        "data-category": "Announcements",
        "data-category-id": "DIC_kwDONn3HnM4CmITT", // 请将这里替换为你从 giscus.app 获取的 category-id
        "data-mapping": "pathname",
        "data-strict": "0",
        "data-loading": "lazy",
        "data-reactions-enabled": "1",
        "data-emit-metadata": "0",
        "data-input-position": "top",
        "data-theme": giscusTheme === 'slate' ? 'dark' : 'light',
        "data-lang": "zh-CN",
        "crossorigin": "anonymous",
        "async": ""
    };

    const giscusScript = document.createElement("script");
    Object.entries(giscusAttributes).forEach(([key, value]) => giscusScript.setAttribute(key, value));
    
    const container = document.createElement("div");
    container.innerHTML = `
        <div class="giscus-wrapper">
            <h2>💬 评论</h2>
            <p>欢迎留下你的想法和建议！使用 GitHub 账号登录即可评论。</p>
        </div>
    `;
    container.appendChild(giscusScript);
    
    // 将评论区插入到文章底部
    const article = document.querySelector("article");
    if (article) {
        article.appendChild(container);
    }
}

// 等待页面加载完成后初始化评论
document.addEventListener("DOMContentLoaded", loadComments);

// 监听主题切换，重新加载评论以更新主题
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.attributeName === "data-md-color-scheme") {
            const comments = document.querySelector(".giscus");
            if (comments) {
                comments.remove();
                loadComments();
            }
        }
    });
});

observer.observe(document.querySelector("body"), {
    attributeFilter: ["data-md-color-scheme"]
}); 