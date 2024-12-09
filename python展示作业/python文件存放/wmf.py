import math
import turtle
from turtle import *

canvas = Screen()
canvas.bgcolor("black")

def heart_x(t):
    return 16*math.sin(t) ** 3

def heart_y(t):
    return 13*math.cos(t) - 5*math.cos(2*t)-2*math.cos(3*t)-math.cos(4*t)

speed(0)
for i in range(1000):
    goto(heart_x(i)*20,heart_y(i)*20)
    color("#f73487")
    goto(0,0)

turtle.done()