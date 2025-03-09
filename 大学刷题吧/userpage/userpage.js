// 点击初始返回，返回主界面
function Gotomainpage(){
    window.location.href = '../mainpage/HomePage.html';
}

function showProfilePopup() {
    document.getElementById('bottom-nav').style.display = 'none';
    document.getElementById('profile-popup').style.display = 'flex';
}

function hideProfilePopup() {
    document.getElementById('bottom-nav').style.display = 'flex';
    document.getElementById('profile-popup').style.display = 'none';
}

function saveProfile() {
    // 这里可以添加保存个人资料到服务器等逻辑
    console.log('保存个人资料');
    hideProfilePopup();
}

function showPasswordPopup() {
    document.getElementById('bottom-nav').style.display = 'none';
    document.getElementById('password-popup').style.display = 'flex';
}

function hidePasswordPopup() {
    document.getElementById('bottom-nav').style.display = 'flex';
    document.getElementById('password-popup').style.display = 'none';
}

function changePassword() {
    // 这里可以添加修改密码到服务器等逻辑
    console.log('修改密码');
    hidePasswordPopup();
}

function showHelpPopup() {
    document.getElementById('bottom-nav').style.display = 'none';
    document.getElementById('help-popup').style.display = 'flex';
}

function hideHelpPopup() {
    document.getElementById('bottom-nav').style.display = 'flex';
    document.getElementById('help-popup').style.display = 'none';
}

function showBadgePopup() {
    document.getElementById('bottom-nav').style.display = 'none';
    document.getElementById('badge-popup').style.display = 'flex';
}

function hideBadgePopup() {
    document.getElementById('bottom-nav').style.display = 'flex';
    document.getElementById('badge-popup').style.display = 'none';
}

function showDeregisterPopup() {
    document.getElementById('bottom-nav').style.display = 'none';
    document.getElementById('popup').style.display = 'block';
}

function hideDeregisterPopup() {
    document.getElementById('bottom-nav').style.display = 'flex';
    document.getElementById('popup').style.display = 'none';
}

function hidePopupyes() {
    document.getElementById('bottom-nav').style.display = 'flex';
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popup-yes').style.display = 'none';
}

function confirmDelete() {
    document.getElementById('bottom-nav').style.display = 'none';
    document.getElementById('popup-yes').style.display = 'block';
    // 这里可以添加真正的注销账户逻辑，比如发送 AJAX 请求到服务器
    console.log('用户确认注销账户');
    hidePopup();
}
