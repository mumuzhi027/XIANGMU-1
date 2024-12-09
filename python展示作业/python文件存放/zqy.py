import turtle as t
def aixin():
    for i in range(50):
        t.delay(0)#延迟0秒
        t.right(4)#右转四度
        t.forward(1)#前进一步
def jiao1():
    for i in range(16):
        t.delay(1)#延迟一秒
        t.left(4)#左转四度
        t.forward(1)#前进一步
def jiao2():
    for i in range(16):
        t.delay(1)#延迟一秒
        t.left(4)#左转四度
        t.forward(1)#前进一步
def shouzhi():
    for i in range(8):
        t.delay(1)  # 延迟一秒
        t.right(10)  # 右转10度
        t.forward(1)  # 前进一步
def zuiba():
    for i in range(16):
        t.left(10)#左转10度
        t.forward(2)#前进一步
#头和嘴
t.hideturtle()
t.pensize(3) #修改画笔的宽度
t.up() #抬起画笔
t.goto(100,100)  #将海龟移动到坐标（100，100）
t.down() #放下画笔
t.right(320) #右转320
t.circle(50,300)  #绘制半径为50，弧度为300的圆弧
t.left(270)
t.forward(50)
t.left(100)
t.fd(10)
#身体和脚
t.up()
t.goto(54,85)
t.down()
t.right(85)
t.fd(80)
t.right(70)
jiao1()
t.left(100)
t.fd(35)
t.left(90)
t.fd(10)
t.right(90)
t.fd(10)
t.right(90)
t.fd(10)
t.left(90)
t.fd(40)
t.left(90)
jiao2()
t.right(60)
t.fd(100)
#右手
t.up()
t.goto(110,80)
t.down()
t.right(65)
t.fd(50)
t.left(95)
t.fd(5)
t.circle(-4,180)
t.fd(6)
t.left(90)
t.fd(18)
t.circle(-4,180)
t.fd(15)
t.left(100)
t.fd(8)
t.circle(-2,60)
shouzhi()
t.fd(15)
t.left(45)
t.fd(55)
#眼睛和嘴巴
t.up()
t.goto(50,145)
t.down()
t.begin_fill()
t.circle(3)
t.up()
t.goto(90,145)
t.down()
t.circle(3)
t.end_fill()
t.up()
t.goto(60,130)
t.down()
t.right(300)
zuiba()
#爱心
t.up()
t.goto(180,125)
t.down()
t.color("red")
t.begin_fill()  #开始填充颜色
t.left(70)
t.fd(26.65)
aixin()
t.left(120)
aixin()
t.fd(26.65)
t.end_fill()  #结束填充颜色
t.up()
t.done()