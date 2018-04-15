def get_num(arr):  
    dict = {}
    for i in arr:
        i = str(i)
        if i not in dict.keys():
            dict[i] = 0
        dict[i] += 1
    result = sorted(dict.items(),key = lambda item:item[1])
    return result,result[-1][0],result[-1][1]


#arr = [1,1,1,2,2,2,3,3,3,4,4,4]
arr = ['a','b','b','b','f','f',4,5]
print(get_num(arr))
