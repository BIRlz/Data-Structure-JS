class desks:
    def __init__(self,start,end):
        self.start = start
        self.end = end

def move_desk(n,length,desks):
    min = 0
    num = 0
    pos = [0]*n
    #print(pos)
    desks.sort(key = lambda x: x.start,reverse = False)
    #print(desks[0].end)
    
    while num < length:
        tmp = 0
        for i in range(length):
            if pos[i] == 0 and desks[i].start >= tmp:
                tmp = desks[i].end
                pos[i] = 1
                num += 1
        min += 1
    return min

data = [desks(1,3),desks(3,9),desks(4,6),desks(6,10),desks(7,8)]
print(move_desk(10,5,data))
