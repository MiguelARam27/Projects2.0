import math


def lateRide(timer):
    minutes = timer/60
    seconds = timer%60

    minute1 = math.floor(minutes%10)

    minute2 = math.floor(minutes/10)
    

    second1 = math.floor(seconds%10)
    second2 = math.floor(seconds/10)
    return minute1 + minute2 + second1 + second2

print(lateRide(808))