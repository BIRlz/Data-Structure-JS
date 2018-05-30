def max_increase_list(init):
    n = len(init)
    l = [1] * n
    for i in range(n):
        t = i
        for j in range(i+1,n):
            #print(t,j)
            if init[j] <= init[t]:
                #print(init[j],init[t])
                t = j
                l[i] += 1
            else:
                break    
    return max(l),[i+1 for i in range(n) if l[i] == max(l)]


init = [1,4,5,4,3,2,1,5,4,3,2,1]
print(max_increase_list(init))
