import turtle as t
from random import randint
# import math
t.bgcolor('black')
x = 1
t.speed(0)
t.colormode(255)
# 定义循环画的图像（三角、正方、五边）
def triangle():
    t.forward(50 + x)
    t.right(120.911)
def square():
    t.forward(40 + x)
    t.right(90.911)
def pentagon():
    t.forward(30 + x)
    t.right(60.911)
# while进入循环，设置四层渐变色，颜色均为随机
while x < 125:
    r = randint(0,64)
    g = randint(0,64)
    b = randint(0,64)
    t.pencolor(r,b,g)
    square()
    x = x + 1
while x < 250:
    r = randint(64,128)
    g = randint(64,128)
    b = randint(64,128)
    t.pencolor(r,b,g)
    square()
    x = x + 1
while x < 325:
    r = randint(128,192)
    g = randint(128,192)
    b = randint(128,192)
    t.pencolor(r,b,g)
    square()
    x = x + 1
while x < 500:
    r = randint(192,255)
    g = randint(192,255)
    b = randint(192,255)
    t.pencolor(r,b,g)
    square()
    x = x + 1
t.done()