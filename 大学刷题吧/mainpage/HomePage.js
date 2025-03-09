// 跳转题目练习功能
function Gotopracticepage(){
    window.location.href = '../practicepage/practicepage.html';
}

// 跳转每日打卡功能
function Gotocheckinpage(){
    window.location.href='../check-inpage/check-inpage.html';
}

// 跳转错题集功能
function Gotomistakepage(){
    window.location.href='../mistakepage/mistakepage.html';
}

// 跳转课程讲解功能
function Gotolessonspage(){
    window.location.href='../lessonspage/lessonspage.html';
}

// 跳转个人中心功能
function Gotouserpage(){
    window.location.href = '../userpage/userpage.html';
}

// 推荐课程
function showadvicelesson() {
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('course-play-advice').style.display = 'block';
}

function hideadvicelesson() {
    document.getElementById('homepage').style.display = 'block';
    document.getElementById('course-play-advice').style.display = 'none';
}