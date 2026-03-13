// 检查是否已经加载过导航栏脚本
if (!window.navbarScriptLoaded) {
    // 标记导航栏脚本已加载
    window.navbarScriptLoaded = true;
    
    // 检查是否已经初始化过导航栏功能
    if (!window.navbarInitialized) {
        window.navbarInitialized = true;
        
        // 导航栏加载函数
        function loadNavbar() {
            // 检查导航栏是否已经存在于DOM中
            if (document.querySelector('.navbar')) {
                console.log('导航栏已经存在于DOM中，跳过加载');
                return;
            }
            
            // 显示加载动画
            if (window.Loading) {
                window.Loading.show();
            }
            
            fetch('navbar.html')
                .then(response => response.text())
                .then(data => {
                    try {
                        // 分离HTML和脚本内容
                        const htmlPart = data.split('<!-- 导航栏JavaScript -->')[0].trim();
                        
                        // 创建导航栏容器并添加HTML内容
                        const navbarContainer = document.createElement('div');
                        navbarContainer.innerHTML = htmlPart;
                        
                        // 将导航栏添加到页面顶部
                        const body = document.body;
                        if (body) {
                            body.insertBefore(navbarContainer, body.firstChild);
                        } else {
                            console.error('Body element not found');
                            return;
                        }
                        
                        // 初始化导航栏功能
                        initNavbar();
                        initShareFunctionality();
                    } catch (error) {
                        console.error('处理导航栏内容失败:', error);
                    } finally {
                        // 隐藏加载动画
                        if (window.Loading) {
                            window.Loading.hide();
                        }
                    }
                })
                .catch(error => {
                    console.error('加载导航栏失败:', error);
                    // 隐藏加载动画
                    if (window.Loading) {
                        window.Loading.hide();
                    }
                });
        }
        
        // 导航栏切换功能
        function initNavbar() {
            const navbarToggle = document.getElementById('navbar-toggle');
            const navbarLinks = document.querySelector('.navbar-links');
            const navbar = document.querySelector('.navbar');
            
            if (navbarToggle && navbarLinks) {
                navbarToggle.addEventListener('click', function() {
                    navbarLinks.classList.toggle('active');
                    navbarToggle.classList.toggle('active');
                });
            }
            
            // 页面滚动时导航栏样式变化
            window.addEventListener('scroll', function() {
                if (navbar) {
                    if (window.scrollY > 50) {
                        navbar.classList.add('scrolled');
                    } else {
                        navbar.classList.remove('scrolled');
                    }
                }
            });
            
            // 初始化当前页面高亮
            initActiveLink();
            
            // 登录/注册功能
            
            // 显示登录模态框
            function showLoginModal() {
                // 检查登录模态框是否已经存在
                if (document.getElementById('login-container')) {
                    return;
                }
                
                // 创建登录容器
                const loginContainer = document.createElement('div');
                loginContainer.id = 'login-container';
                loginContainer.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                `;
                
                // 创建登录内容
                const loginContent = document.createElement('div');
                loginContent.style.cssText = `
                    background-color: white;
                    padding: 40px;
                    border-radius: 10px;
                    text-align: center;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
                    max-width: 400px;
                    width: 100%;
                    color: #8B4513;
                `;
                
                // 添加标题
                const loginTitle = document.createElement('h3');
                loginTitle.textContent = '用户登录';
                loginTitle.style.marginBottom = '30px';
                loginTitle.style.color = '#8B4513';
                loginContent.appendChild(loginTitle);
                
                // 添加登录表单
                const loginForm = document.createElement('form');
                loginForm.id = 'login-form';
                loginForm.style.cssText = `
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    color: #8B4513;
                `;
                
                // 添加邮箱输入
                const emailInput = document.createElement('div');
                emailInput.innerHTML = `
                    <label for="login-email" style="color: #8B4513;">邮箱：</label>
                    <input type="email" id="login-email" name="email" required style="
                        width: 100%;
                        padding: 12px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        font-size: 16px;
                        color: #8B4513;
                        transition: all 0.3s ease;
                    ">
                    <div id="login-email-error" style="color: red; font-size: 12px; margin-top: 5px; display: none;"></div>
                `;
                loginForm.appendChild(emailInput);
                
                // 添加密码输入
                const passwordInput = document.createElement('div');
                passwordInput.innerHTML = `
                    <label for="login-password" style="color: #8B4513;">密码：</label>
                    <input type="password" id="login-password" name="password" required style="
                        width: 100%;
                        padding: 12px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        font-size: 16px;
                        color: #8B4513;
                        transition: all 0.3s ease;
                    ">
                    <div id="login-password-error" style="color: red; font-size: 12px; margin-top: 5px; display: none;"></div>
                `;
                loginForm.appendChild(passwordInput);
                
                // 添加错误信息显示
                const errorMessage = document.createElement('div');
                errorMessage.id = 'login-error';
                errorMessage.style.cssText = `
                    color: red;
                    margin-top: 10px;
                    font-size: 14px;
                `;
                loginForm.appendChild(errorMessage);
                
                // 添加实时验证
                const loginEmail = document.getElementById('login-email');
                const loginEmailError = document.getElementById('login-email-error');
                const loginPassword = document.getElementById('login-password');
                const loginPasswordError = document.getElementById('login-password-error');
                
                if (loginEmail) {
                    loginEmail.addEventListener('input', function() {
                        const email = this.value;
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        
                        if (email) {
                            if (!emailRegex.test(email)) {
                                loginEmailError.textContent = '请输入有效的邮箱地址';
                                loginEmailError.style.display = 'block';
                                this.style.borderColor = 'red';
                            } else {
                                loginEmailError.style.display = 'none';
                                this.style.borderColor = '#F5D020';
                            }
                        } else {
                            loginEmailError.style.display = 'none';
                            this.style.borderColor = '#ddd';
                        }
                    });
                }
                
                if (loginPassword) {
                    loginPassword.addEventListener('input', function() {
                        const password = this.value;
                        
                        if (password) {
                            if (password.length < 6) {
                                loginPasswordError.textContent = '密码长度至少为6位';
                                loginPasswordError.style.display = 'block';
                                this.style.borderColor = 'red';
                            } else {
                                loginPasswordError.style.display = 'none';
                                this.style.borderColor = '#F5D020';
                            }
                        } else {
                            loginPasswordError.style.display = 'none';
                            this.style.borderColor = '#ddd';
                        }
                    });
                }
                
                // 添加提交按钮
                const submitButton = document.createElement('button');
                submitButton.type = 'submit';
                submitButton.textContent = '登录';
                submitButton.style.cssText = `
                    padding: 12px;
                    background-color: #8B4513;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 16px;
                    margin-top: 10px;
                `;
                loginForm.appendChild(submitButton);
                
                // 添加注册链接
                const registerLink = document.createElement('div');
                registerLink.innerHTML = `
                    <p style="color: #8B4513;">还没有账号？<a href="javascript:void(0)" id="switch-to-register" style="color: #8B4513; text-decoration: underline;">立即注册</a></p>
                `;
                registerLink.style.marginTop = '20px';
                loginForm.appendChild(registerLink);
                
                // 添加关闭按钮
                const closeButton = document.createElement('button');
                closeButton.type = 'button';
                closeButton.textContent = '关闭';
                closeButton.style.cssText = `
                    padding: 10px 20px;
                    background-color: #666;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 14px;
                    margin-top: 10px;
                `;
                closeButton.onclick = function() {
                    document.body.removeChild(loginContainer);
                };
                loginForm.appendChild(closeButton);
                
                loginContent.appendChild(loginForm);
                loginContainer.appendChild(loginContent);
                document.body.appendChild(loginContainer);
                
                // 切换到注册模态框
                document.getElementById('switch-to-register').addEventListener('click', function() {
                    document.body.removeChild(loginContainer);
                    showRegisterModal();
                });
                
                // 处理登录表单提交
                document.getElementById('login-form').addEventListener('submit', function(e) {
                    e.preventDefault();
                    handleLogin();
                });
            }
            
            // 显示注册模态框
            function showRegisterModal() {
                // 检查注册模态框是否已经存在
                if (document.getElementById('register-container')) {
                    return;
                }
                
                // 创建注册容器
                const registerContainer = document.createElement('div');
                registerContainer.id = 'register-container';
                registerContainer.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                `;
                
                // 创建注册内容
                const registerContent = document.createElement('div');
                registerContent.style.cssText = `
                    background-color: white;
                    padding: 40px;
                    border-radius: 10px;
                    text-align: center;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
                    max-width: 400px;
                    width: 100%;
                    color: #8B4513;
                `;
                
                // 添加标题
                const registerTitle = document.createElement('h3');
                registerTitle.textContent = '用户注册';
                registerTitle.style.marginBottom = '30px';
                registerTitle.style.color = '#8B4513';
                registerContent.appendChild(registerTitle);
                
                // 添加注册表单
                const registerForm = document.createElement('form');
                registerForm.id = 'register-form';
                registerForm.style.cssText = `
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    color: #8B4513;
                `;
                
                // 添加用户名输入
                const usernameInput = document.createElement('div');
                usernameInput.innerHTML = `
                    <label for="register-username" style="color: #8B4513;">用户名：</label>
                    <input type="text" id="register-username" name="username" required style="
                        width: 100%;
                        padding: 12px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        font-size: 16px;
                        color: #8B4513;
                        transition: all 0.3s ease;
                    ">
                    <div id="register-username-error" style="color: red; font-size: 12px; margin-top: 5px; display: none;"></div>
                `;
                registerForm.appendChild(usernameInput);
                
                // 添加邮箱输入
                const emailInput = document.createElement('div');
                emailInput.innerHTML = `
                    <label for="register-email" style="color: #8B4513;">邮箱：</label>
                    <input type="email" id="register-email" name="email" required style="
                        width: 100%;
                        padding: 12px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        font-size: 16px;
                        color: #8B4513;
                        transition: all 0.3s ease;
                    ">
                    <div id="register-email-error" style="color: red; font-size: 12px; margin-top: 5px; display: none;"></div>
                `;
                registerForm.appendChild(emailInput);
                
                // 添加密码输入
                const passwordInput = document.createElement('div');
                passwordInput.innerHTML = `
                    <label for="register-password" style="color: #8B4513;">密码：</label>
                    <input type="password" id="register-password" name="password" required style="
                        width: 100%;
                        padding: 12px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        font-size: 16px;
                        color: #8B4513;
                        transition: all 0.3s ease;
                    ">
                    <div id="register-password-error" style="color: red; font-size: 12px; margin-top: 5px; display: none;"></div>
                `;
                registerForm.appendChild(passwordInput);
                
                // 添加密码确认输入
                const confirmPasswordInput = document.createElement('div');
                confirmPasswordInput.innerHTML = `
                    <label for="register-confirm-password" style="color: #8B4513;">确认密码：</label>
                    <input type="password" id="register-confirm-password" name="confirmPassword" required style="
                        width: 100%;
                        padding: 12px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        font-size: 16px;
                        color: #8B4513;
                        transition: all 0.3s ease;
                    ">
                    <div id="register-confirm-password-error" style="color: red; font-size: 12px; margin-top: 5px; display: none;"></div>
                `;
                registerForm.appendChild(confirmPasswordInput);
                
                // 添加错误信息显示
                const errorMessage = document.createElement('div');
                errorMessage.id = 'register-error';
                errorMessage.style.cssText = `
                    color: red;
                    margin-top: 10px;
                    font-size: 14px;
                `;
                registerForm.appendChild(errorMessage);
                
                // 添加实时验证
                const registerUsername = document.getElementById('register-username');
                const registerUsernameError = document.getElementById('register-username-error');
                const registerEmail = document.getElementById('register-email');
                const registerEmailError = document.getElementById('register-email-error');
                const registerPassword = document.getElementById('register-password');
                const registerPasswordError = document.getElementById('register-password-error');
                const registerConfirmPassword = document.getElementById('register-confirm-password');
                const registerConfirmPasswordError = document.getElementById('register-confirm-password-error');
                
                if (registerUsername) {
                    registerUsername.addEventListener('input', function() {
                        const username = this.value;
                        
                        if (username) {
                            if (username.length < 3) {
                                registerUsernameError.textContent = '用户名长度至少为3位';
                                registerUsernameError.style.display = 'block';
                                this.style.borderColor = 'red';
                            } else {
                                registerUsernameError.style.display = 'none';
                                this.style.borderColor = '#F5D020';
                            }
                        } else {
                            registerUsernameError.style.display = 'none';
                            this.style.borderColor = '#ddd';
                        }
                    });
                }
                
                if (registerEmail) {
                    registerEmail.addEventListener('input', function() {
                        const email = this.value;
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        
                        if (email) {
                            if (!emailRegex.test(email)) {
                                registerEmailError.textContent = '请输入有效的邮箱地址';
                                registerEmailError.style.display = 'block';
                                this.style.borderColor = 'red';
                            } else {
                                registerEmailError.style.display = 'none';
                                this.style.borderColor = '#F5D020';
                            }
                        } else {
                            registerEmailError.style.display = 'none';
                            this.style.borderColor = '#ddd';
                        }
                    });
                }
                
                if (registerPassword) {
                    registerPassword.addEventListener('input', function() {
                        const password = this.value;
                        
                        if (password) {
                            if (password.length < 6) {
                                registerPasswordError.textContent = '密码长度至少为6位';
                                registerPasswordError.style.display = 'block';
                                this.style.borderColor = 'red';
                            } else {
                                registerPasswordError.style.display = 'none';
                                this.style.borderColor = '#F5D020';
                            }
                        } else {
                            registerPasswordError.style.display = 'none';
                            this.style.borderColor = '#ddd';
                        }
                    });
                }
                
                if (registerConfirmPassword) {
                    registerConfirmPassword.addEventListener('input', function() {
                        const confirmPassword = this.value;
                        const password = registerPassword ? registerPassword.value : '';
                        
                        if (confirmPassword) {
                            if (confirmPassword !== password) {
                                registerConfirmPasswordError.textContent = '两次输入的密码不一致';
                                registerConfirmPasswordError.style.display = 'block';
                                this.style.borderColor = 'red';
                            } else {
                                registerConfirmPasswordError.style.display = 'none';
                                this.style.borderColor = '#F5D020';
                            }
                        } else {
                            registerConfirmPasswordError.style.display = 'none';
                            this.style.borderColor = '#ddd';
                        }
                    });
                }
                
                // 当密码输入变化时，也检查确认密码
                if (registerPassword && registerConfirmPassword) {
                    registerPassword.addEventListener('input', function() {
                        const password = this.value;
                        const confirmPassword = registerConfirmPassword.value;
                        
                        if (confirmPassword) {
                            if (confirmPassword !== password) {
                                registerConfirmPasswordError.textContent = '两次输入的密码不一致';
                                registerConfirmPasswordError.style.display = 'block';
                                registerConfirmPassword.style.borderColor = 'red';
                            } else {
                                registerConfirmPasswordError.style.display = 'none';
                                registerConfirmPassword.style.borderColor = '#F5D020';
                            }
                        }
                    });
                }
                
                // 添加提交按钮
                const submitButton = document.createElement('button');
                submitButton.type = 'submit';
                submitButton.textContent = '注册';
                submitButton.style.cssText = `
                    padding: 12px;
                    background-color: #8B4513;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 16px;
                    margin-top: 10px;
                `;
                registerForm.appendChild(submitButton);
                
                // 添加登录链接
                const loginLink = document.createElement('div');
                loginLink.innerHTML = `
                    <p style="color: #8B4513;">已有账号？<a href="javascript:void(0)" id="switch-to-login" style="color: #8B4513; text-decoration: underline;">立即登录</a></p>
                `;
                loginLink.style.marginTop = '20px';
                registerForm.appendChild(loginLink);
                
                // 添加关闭按钮
                const closeButton = document.createElement('button');
                closeButton.type = 'button';
                closeButton.textContent = '关闭';
                closeButton.style.cssText = `
                    padding: 10px 20px;
                    background-color: #666;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 14px;
                    margin-top: 10px;
                `;
                closeButton.onclick = function() {
                    document.body.removeChild(registerContainer);
                };
                registerForm.appendChild(closeButton);
                
                registerContent.appendChild(registerForm);
                registerContainer.appendChild(registerContent);
                document.body.appendChild(registerContainer);
                
                // 切换到登录模态框
                document.getElementById('switch-to-login').addEventListener('click', function() {
                    document.body.removeChild(registerContainer);
                    showLoginModal();
                });
                
                // 处理注册表单提交
                document.getElementById('register-form').addEventListener('submit', function(e) {
                    e.preventDefault();
                    handleRegister();
                });
            }
            
            // 处理登录表单提交
            function handleLogin() {
                const email = document.getElementById('login-email').value;
                const password = document.getElementById('login-password').value;
                const errorElement = document.getElementById('login-error');
                const submitButton = document.querySelector('#login-form button[type="submit"]');
                
                try {
                    // 验证表单数据
                    if (!email || !password) {
                        errorElement.textContent = '请填写所有必填字段';
                        return;
                    }
                    
                    // 验证邮箱格式
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(email)) {
                        errorElement.textContent = '请输入有效的邮箱地址';
                        return;
                    }
                    
                    // 添加按钮加载状态
                    if (window.Loading) {
                        window.Loading.addButtonLoading(submitButton);
                    }
                    
                    // 模拟登录 - 使用localStorage
                    setTimeout(() => {
                        // 从localStorage获取用户数据
                        const users = JSON.parse(localStorage.getItem('users') || '[]');
                        const user = users.find(u => u.email === email && u.password === password);
                        
                        if (user) {
                            // 登录成功，保存token和用户信息
                            const token = 'mock-token-' + Date.now();
                            localStorage.setItem('token', token);
                            localStorage.setItem('user', JSON.stringify(user));
                            
                            // 更新UI
                            updateUserUI(user);
                            
                            // 关闭登录模态框
                            const loginContainer = document.getElementById('login-container');
                            if (loginContainer) {
                                document.body.removeChild(loginContainer);
                            }
                            
                            // 显示成功消息
                            alert('登录成功！');
                        } else {
                            // 显示错误消息
                            errorElement.textContent = '邮箱或密码错误';
                        }
                        
                        // 移除按钮加载状态
                        if (window.Loading) {
                            window.Loading.removeButtonLoading(submitButton);
                        }
                    }, 1000);
                } catch (error) {
                    console.error('登录错误:', error);
                    errorElement.textContent = '登录失败，请稍后重试';
                    // 移除按钮加载状态
                    if (window.Loading) {
                        window.Loading.removeButtonLoading(submitButton);
                    }
                }
            }
            
            // 处理注册表单提交
            function handleRegister() {
                const username = document.getElementById('register-username').value;
                const email = document.getElementById('register-email').value;
                const password = document.getElementById('register-password').value;
                const confirmPassword = document.getElementById('register-confirm-password').value;
                const errorElement = document.getElementById('register-error');
                const submitButton = document.querySelector('#register-form button[type="submit"]');
                
                try {
                    // 验证表单数据
                    if (!username || !email || !password || !confirmPassword) {
                        errorElement.textContent = '请填写所有必填字段';
                        return;
                    }
                    
                    // 验证邮箱格式
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(email)) {
                        errorElement.textContent = '请输入有效的邮箱地址';
                        return;
                    }
                    
                    // 验证密码长度
                    if (password.length < 6) {
                        errorElement.textContent = '密码长度至少为6位';
                        return;
                    }
                    
                    // 验证密码一致性
                    if (password !== confirmPassword) {
                        errorElement.textContent = '两次输入的密码不一致';
                        return;
                    }
                    
                    // 添加按钮加载状态
                    if (window.Loading) {
                        window.Loading.addButtonLoading(submitButton);
                    }
                    
                    // 模拟注册 - 使用localStorage
                    setTimeout(() => {
                        // 从localStorage获取用户数据
                        const users = JSON.parse(localStorage.getItem('users') || '[]');
                        
                        // 检查邮箱是否已存在
                        if (users.some(u => u.email === email)) {
                            errorElement.textContent = '该邮箱已被注册';
                            // 移除按钮加载状态
                            if (window.Loading) {
                                window.Loading.removeButtonLoading(submitButton);
                            }
                            return;
                        }
                        
                        // 创建新用户
                        const newUser = {
                            id: Date.now(),
                            username: username,
                            email: email,
                            password: password // 实际项目中应该加密存储
                        };
                        
                        // 保存用户数据
                        users.push(newUser);
                        localStorage.setItem('users', JSON.stringify(users));
                        
                        // 保存token和用户信息
                        const token = 'mock-token-' + Date.now();
                        localStorage.setItem('token', token);
                        localStorage.setItem('user', JSON.stringify(newUser));
                        
                        // 更新UI
                        updateUserUI(newUser);
                        
                        // 关闭注册模态框
                        const registerContainer = document.getElementById('register-container');
                        if (registerContainer) {
                            document.body.removeChild(registerContainer);
                        }
                        
                        // 显示成功消息
                        alert('注册成功！');
                        
                        // 移除按钮加载状态
                        if (window.Loading) {
                            window.Loading.removeButtonLoading(submitButton);
                        }
                    }, 1000);
                } catch (error) {
                    console.error('注册错误:', error);
                    errorElement.textContent = '注册失败，请稍后重试';
                    // 移除按钮加载状态
                    if (window.Loading) {
                        window.Loading.removeButtonLoading(submitButton);
                    }
                }
            }
            
            // 处理登出
            function handleLogout() {
                // 清除localStorage中的token和用户信息
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                
                // 更新UI
                updateUserUI(null);
                
                // 显示成功消息
                alert('登出成功！');
            }
            
            // 更新用户UI
            window.updateUserUI = function(user) {
                const loginButtons = document.getElementById('login-buttons');
                const userMenu = document.getElementById('user-menu');
                const usernameDisplay = document.getElementById('username-display');
                
                if (user) {
                    // 显示用户菜单
                    loginButtons.style.display = 'none';
                    userMenu.style.display = 'block';
                    usernameDisplay.textContent = user.username;
                } else {
                    // 显示登录注册按钮
                    loginButtons.style.display = 'block';
                    userMenu.style.display = 'none';
                }
            }
            
            // 检查用户登录状态
            window.checkLoginStatus = function() {
                const userStr = localStorage.getItem('user');
                if (userStr) {
                    try {
                        const user = JSON.parse(userStr);
                        updateUserUI(user);
                    } catch (error) {
                        console.error('解析用户信息失败:', error);
                        localStorage.removeItem('user');
                        localStorage.removeItem('token');
                        updateUserUI(null);
                    }
                } else {
                    // 即使没有用户信息，也需要更新UI，确保显示登录/注册按钮
                    updateUserUI(null);
                }
            }
            
            // 初始化下拉菜单功能
            function initDropdowns() {
                // 绑定所有下拉按钮的点击事件
                const dropdownButtons = document.querySelectorAll('.dropdown-toggle');
                dropdownButtons.forEach(button => {
                    button.addEventListener('click', function() {
                        const dropdownMenu = this.nextElementSibling;
                        if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
                            // 切换下拉菜单的显示状态
                            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
                        }
                    });
                });
                
                // 点击页面其他地方关闭下拉菜单
                document.addEventListener('click', function(event) {
                    if (!event.target.closest('.dropdown')) {
                        const dropdownMenus = document.querySelectorAll('.dropdown-menu');
                        dropdownMenus.forEach(menu => {
                            menu.style.display = 'none';
                        });
                    }
                });
            }
            
            // 初始化用户相关功能
            function initUserAuth() {
                // 检查登录状态
                checkLoginStatus();
                
                // 初始化下拉菜单
                initDropdowns();
                
                // 绑定登录按钮点击事件
                const loginButton = document.getElementById('login-button');
                if (loginButton) {
                    loginButton.addEventListener('click', function() {
                        // 关闭下拉菜单
                        const dropdownMenu = this.closest('.dropdown-menu');
                        if (dropdownMenu) {
                            dropdownMenu.style.display = 'none';
                        }
                        showLoginModal();
                    });
                }
                
                // 绑定注册按钮点击事件
                const registerButton = document.getElementById('register-button');
                if (registerButton) {
                    registerButton.addEventListener('click', function() {
                        // 关闭下拉菜单
                        const dropdownMenu = this.closest('.dropdown-menu');
                        if (dropdownMenu) {
                            dropdownMenu.style.display = 'none';
                        }
                        showRegisterModal();
                    });
                }
                
                // 绑定登出按钮点击事件
                const logoutButton = document.getElementById('logout-button');
                if (logoutButton) {
                    logoutButton.addEventListener('click', function() {
                        // 关闭下拉菜单
                        const dropdownMenu = this.closest('.dropdown-menu');
                        if (dropdownMenu) {
                            dropdownMenu.style.display = 'none';
                        }
                        handleLogout();
                    });
                }
            }
            
            // 初始化用户认证功能
            initUserAuth();
            
            // 导航栏加载完成后检查登录状态
            setTimeout(function() {
                if (window.checkLoginStatus) {
                    window.checkLoginStatus();
                }
            }, 100);
        }
        
        // 初始化当前页面高亮链接
        function initActiveLink() {
            const currentPath = window.location.pathname;
            const navbarLinks = document.querySelectorAll('.navbar-link');
            
            navbarLinks.forEach(link => {
                const linkPath = link.getAttribute('href');
                if (currentPath.endsWith(linkPath)) {
                    link.classList.add('active');
                }
                
                // 添加平滑页面过渡效果
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetUrl = this.getAttribute('href');
                    
                    // 显示加载动画
                    if (window.Loading) {
                        window.Loading.show();
                    }
                    
                    // 延迟跳转，让加载动画有时间显示
                    setTimeout(() => {
                        window.location.href = targetUrl;
                    }, 300);
                });
            });
        }
        
        // 初始化分享功能
        function initShareFunctionality() {
            var shareButton = document.getElementById('share-button');
            if (shareButton) shareButton.addEventListener('click', showShareModal);
            
            // 为关闭分享模态框按钮添加事件监听器
            var closeShareModalBtn = document.querySelector('.close-share-modal');
            if (closeShareModalBtn) closeShareModalBtn.addEventListener('click', hideShareModal);
            
            // 点击模态框外部关闭
            var shareModal = document.getElementById('share-modal');
            if (shareModal) {
                shareModal.addEventListener('click', function(event) {
                    if (event.target === this) {
                        hideShareModal();
                    }
                });
            }
        }
        
        // 分享功能
        function showShareModal() {
            var shareModal = document.getElementById('share-modal');
            var shareUrlInput = document.getElementById('share-url');
            
            // 设置分享链接为当前页面URL
            var currentUrl = window.location.href;
            shareUrlInput.value = currentUrl;
            
            // 显示分享模态框
            shareModal.style.display = 'flex';
        }
        
        function hideShareModal() {
            var shareModal = document.getElementById('share-modal');
            shareModal.style.display = 'none';
        }
        
        function shareToWechat() {
            // 微信分享 - 实际项目中需要集成微信JS-SDK
            alert('请使用微信扫描二维码分享');
            // 这里可以生成分享二维码或跳转到微信分享界面
        }
        
        function shareToQQ() {
            // QQ分享
            var shareUrl = window.location.href;
            var shareTitle = document.title;
            var shareDesc = '探索茶马古道的历史文化和地理信息';
            var qqShareUrl = `https://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}&desc=${encodeURIComponent(shareDesc)}`;
            window.open(qqShareUrl, '_blank', 'width=600,height=400');
        }
        
        function shareToDouyin() {
            // 抖音分享 - 实际项目中需要集成抖音SDK
            alert('请复制链接到抖音分享');
            // 这里可以生成分享链接或跳转到抖音分享界面
        }
        
        function shareToXiaohongshu() {
            // 小红书分享 - 实际项目中需要集成小红书SDK
            alert('请复制链接到小红书分享');
            // 这里可以生成分享链接或跳转到小红书分享界面
        }
        
        function copyShareUrl() {
            var shareUrlInput = document.getElementById('share-url');
            shareUrlInput.select();
            document.execCommand('copy');
            alert('链接已复制到剪贴板');
        }
        
        // 当DOM加载完成时加载导航栏
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', loadNavbar);
        } else {
            // 如果DOM已经加载完成，直接执行
            loadNavbar();
        }
    }
}
