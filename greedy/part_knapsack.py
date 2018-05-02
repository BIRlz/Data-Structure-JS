class goods:
    def __init__(self,cls,weight,value):
        self.cls = cls
        self.value = value
        self.weight = weight

def knapsack(M,data):
    data.sort(key = lambda x : x.value/x.weight,reverse = True)
    #print([j.cls for j in data])
    #print([j.weight for j in data])
    result = []
    for i in data:
        if M < i.weight:
            break
        result.append(i)
        M -= i.weight

    if len(result) < len(data) and M != 0:
        result.append(goods(i.cls, M, i.value * M / i.weight))

    return result

some_goods = [goods('A', 35, 10), 
            goods('B', 30, 40), 
            goods('C', 60, 30), 
            goods('D', 50, 50), 
            goods('E', 40, 35),
            goods('F', 10, 40),
            goods('G', 25, 30)]

res = knapsack(150, some_goods)
whole_value = sum(j.value for j in res)
print(whole_value)
