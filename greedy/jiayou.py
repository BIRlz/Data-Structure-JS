def jiayou(n,dis):
    num = 0 
    temp = 0
    pos = []
    road = 0
    for i in dis:
        if i > n:
            return "No solution!"
    for j,k in enumerate(dis):
        road += k
        if road > n:
            num += 1
            road = k
            pos.append(j-1)
    return pos

n = 10
dis = [3,5,1,8,1,7,6]
print(jiayou(n,dis))