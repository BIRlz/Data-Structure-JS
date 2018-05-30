def max_sum(a):
    n = len(a)
    res = 0
    tmp = 0
    for i in range(n):
        if tmp > 0:
            tmp += a[i]
        else:
            tmp = a[i]
        if tmp > res:
            res = tmp
    return res

a = [-1,4,1,5,-10]
print(max_sum(a))
