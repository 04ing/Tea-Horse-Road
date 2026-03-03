// 导航栏加载函数
function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            // 创建导航栏容器
            const navbarContainer = document.createElement('div');
            navbarContainer.innerHTML = data;
            
            // 将导航栏添加到页面顶部
            const body = document.body;
            if (body) {
                body.insertBefore(navbarContainer, body.firstChild);
            }
            
            // 提取导航栏中的JavaScript代码
            const scripts = navbarContainer.querySelectorAll('script');
            scripts.forEach(script => {
                const scriptContent = script.textContent;
                if (scriptContent) {
                    try {
                        // 直接执行脚本内容，不使用setTimeout延迟
                        eval(scriptContent);
                    } catch (error) {
                        console.error('执行导航栏脚本失败:', error);
                    }
                }
            });
        })
        .catch(error => {
            console.error('加载导航栏失败:', error);
        });
}

// 当DOM加载完成时加载导航栏
document.addEventListener('DOMContentLoaded', loadNavbar);