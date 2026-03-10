// 加载动画处理
(function() {
    // 页面加载完成后隐藏加载动画
    function hideLoading() {
        const loadingElement = document.querySelector('.loading');
        if (loadingElement) {
            loadingElement.classList.add('hidden');
            
            // 动画结束后移除元素
            setTimeout(() => {
                loadingElement.remove();
            }, 500);
        }
        
        // 为页面添加淡入效果
        document.body.classList.add('page-fade-in');
    }
    
    // 显示加载动画
    function showLoading() {
        // 检查是否已经存在加载动画
        if (!document.querySelector('.loading')) {
            const loadingElement = document.createElement('div');
            loadingElement.className = 'loading';
            loadingElement.innerHTML = `
                <div class="loading-spinner"></div>
                <div class="loading-text">加载中...</div>
            `;
            document.body.appendChild(loadingElement);
        }
    }
    
    // 为按钮添加加载状态
    function addButtonLoading(button) {
        if (button) {
            button.classList.add('button-loading');
            button.setAttribute('disabled', 'disabled');
        }
    }
    
    // 移除按钮加载状态
    function removeButtonLoading(button) {
        if (button) {
            button.classList.remove('button-loading');
            button.removeAttribute('disabled');
        }
    }
    
    // 页面加载完成后执行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', hideLoading);
    } else {
        // 如果DOM已经加载完成，直接执行
        hideLoading();
    }
    
    // 监听页面离开事件，显示加载动画
    window.addEventListener('beforeunload', showLoading);
    
    // 暴露全局方法
    window.Loading = {
        show: showLoading,
        hide: hideLoading,
        addButtonLoading: addButtonLoading,
        removeButtonLoading: removeButtonLoading
    };
})();
