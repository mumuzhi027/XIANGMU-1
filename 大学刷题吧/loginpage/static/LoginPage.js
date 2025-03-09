const loginPage = document.getElementById('loginPage');
const registerPage = document.getElementById('registerPage');
const resetPasswordPage = document.getElementById('resetPasswordPage');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const resetPasswordForm = document.getElementById('resetPasswordForm');
const loginFailModal = document.getElementById('loginFailModal');
const resetSuccessModal = document.getElementById('resetSuccessModal');
const registerSuccessModal = document.getElementById('registerSuccessModal');
const failMessage = document.getElementById('failMessage');
const retryButton = document.getElementById('retryButton');
const resetSuccessConfirmButton = document.getElementById('resetSuccessConfirmButton');
const registerSuccessConfirmButton = document.getElementById('registerSuccessConfirmButton');
const registerButton = document.getElementById('registerButton');
const forgotPasswordButton = document.getElementById('forgotPasswordButton');
const getCodeButton = document.getElementById('getCodeButton');
const registerGetCodeButton = document.getElementById('registerGetCodeButton');
const confirmResetButton = document.getElementById('confirmResetButton');
const registerConfirmButton = document.getElementById('registerConfirmButton');
const registerCancelButton = document.getElementById('registerCancelButton');
const resetCancelButton = document.getElementById('resetCancelButton');

// 点击注册按钮，跳转到注册页面
registerButton.addEventListener('click', () => {
  loginPage.style.display = 'none';
  registerPage.style.display = 'block';
});

// 点击取消注册按钮，回到登录页面
registerCancelButton.addEventListener('click', () => {
  registerPage.style.display = 'none';
  loginPage.style.display = 'block';
});

// 注册获取验证码按钮点击事件
registerGetCodeButton.addEventListener('click', async () => {
  const phone = document.getElementById('registerPhone').value;

  if (!phone) {
    alert('请输入手机号！');
    return;
  }

  try {
    const response = await fetch('http://127.0.0.1:5000/send_verification_code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ phone_number: phone })
    });

    const data = await response.json();
    if (data.success) {
      alert('验证码已发送到您的手机！');
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error('网络错误:', error);
    alert('网络错误，请稍后重试！');
  }
});

// 注册表单提交事件
registerForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const phone = document.getElementById('registerPhone').value;
  const verificationCode = document.getElementById('registerVerificationCode').value;
  const newPassword = document.getElementById('registerNewPassword').value;
  const confirmNewPassword = document.getElementById('registerConfirmNewPassword').value;

  // 简单验证：密码和确认密码是否一致
  if (newPassword !== confirmNewPassword) {
    alert('两次输入的密码不一致，请重新输入！');
    return;
  }

  try {
    const response = await fetch('http://127.0.0.1:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phone_number: phone,
        verification_code: verificationCode,
        password: newPassword
      })
    });

    const data = await response.json();
    if (data.success) {
      registerSuccessModal.style.display = 'block';
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error('网络错误:', error);
    alert('网络错误，请稍后重试！');
  }
});

// 注册成功确认按钮点击事件，回到登录页面
registerSuccessConfirmButton.addEventListener('click', () => {
  registerSuccessModal.style.display = 'none';
  registerPage.style.display = 'none';
  loginPage.style.display = 'block';
});

// 点击忘记密码按钮，跳转到密码重置页面
forgotPasswordButton.addEventListener('click', () => {
  loginPage.style.display = 'none';
  resetPasswordPage.style.display = 'block';
});
resetCancelButton.addEventListener('click', () => {
  loginPage.style.display = 'block';
  resetPasswordPage.style.display = 'none';
});
// 获取验证码按钮点击事件
getCodeButton.addEventListener('click', async () => {
  const phone = document.getElementById('phone').value;

  if (!phone) {
    alert('请输入手机号！');
    return;
  }

  try {
    const response = await fetch('http://127.0.0.1:5000/send_verification_code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ phone_number: phone })
    });

    const data = await response.json();
    if (data.success) {
      alert('验证码已发送到您的手机！');
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error('网络错误:', error);
    alert('网络错误，请稍后重试！');
  }
});

// 密码重置表单提交事件
resetPasswordForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const phone = document.getElementById('phone').value;
  const verificationCode = document.getElementById('verificationCode').value;
  const newPassword = document.getElementById('newPassword').value;
  const confirmNewPassword = document.getElementById('confirmNewPassword').value;

  // 简单验证：密码和确认密码是否一致
  if (newPassword !== confirmNewPassword) {
    alert('两次输入的密码不一致，请重新输入！');
    return;
  }

  try {
    const response = await fetch('http://127.0.0.1:5000/reset_password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phone_number: phone,
        verification_code: verificationCode,
        new_password: newPassword
      })
    });

    const data = await response.json();
    if (data.success) {
      resetSuccessModal.style.display = 'block';
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error('网络错误:', error);
    alert('网络错误，请稍后重试！');
  }
});

// 重置成功确认按钮点击事件，回到登录页面
resetSuccessConfirmButton.addEventListener('click', () => {
  resetSuccessModal.style.display = 'none';
  resetPasswordPage.style.display = 'none';
  loginPage.style.display = 'block';
});

// 登录表单提交事件
loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ phone_number: username, password: password })
    });

    const data = await response.json();
    if (data.success) {
      // 登录成功，跳转到主界面
      window.location.href = '../mainpage/HomePage.html';
    } else {
      // 登录失败，显示弹出框
      failMessage.textContent = data.message;
      loginFailModal.style.display = 'block';
    }
  } catch (error) {
    console.error('网络错误:', error);
    alert('网络错误，请稍后重试！');
  }
});

// 点击重新输入按钮，隐藏登录失败弹出框
retryButton.addEventListener('click', () => {
  loginFailModal.style.display = 'none';
});

// 点击确认登录进入主页面
function Gotomainpage() {
  window.location.href = '../../mainpage/HomePage.html';
}

// 弹出服务协议
function showHelpPopup() {
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('help-popup').style.display = 'block';
}

function hideHelpPopup() {
  document.getElementById('loginPage').style.display = 'block';
  document.getElementById('help-popup').style.display = 'none';
}

function showPrivacyPopup() {
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('privacy-popup').style.display = 'block';
}

function hidePrivacyPopup() {
  document.getElementById('loginPage').style.display = 'block';
  document.getElementById('privacy-popup').style.display = 'none';
}