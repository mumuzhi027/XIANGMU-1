// 点击初始返回，返回主界面
function Gotomainpage(){
    window.location.href = '../mainpage/HomePage.html';
}

function showadvicelesson() {
    document.getElementById('course-intro').style.display = 'none';
    document.getElementById('course-play-advice').style.display = 'block';
}

function hideadvicelesson() {
    document.getElementById('course-intro').style.display = 'block';
    document.getElementById('course-play-advice').style.display = 'none';
}

function showsubjectlesson() {
    document.getElementById('course-intro').style.display = 'none';
    document.getElementById('course-list-page').style.display = 'block';
}

function hidesubjectlesson() {
    document.getElementById('course-intro').style.display = 'block';
    document.getElementById('course-list-page').style.display = 'none';
}

function showlesson() {
    document.getElementById('course-list-page').style.display = 'none';
    document.getElementById('course-play').style.display = 'block';
}

function hidelesson() {
    document.getElementById('course-list-page').style.display = 'block';
    document.getElementById('course-play').style.display = 'none';
}