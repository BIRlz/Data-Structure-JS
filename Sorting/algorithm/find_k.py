def qS_1(arr):
    less = []
    more = []
    prilist = []
    if len(arr) <= 1:
        return arr
    else:
        prist= arr[0]
        for k,i in enumerate(arr):
            if i > prist:
                more.append(i)
            elif i < prist:
                less.append(i)
            else:
                prilist.append(i)
                print(k)
                print(prilist)
        less = qS_1(less)
        more = qS_1(more)
        return less + prilist + more

def qS_2(arr):
    if len(arr) <= 1:
        return arr
    else:
        prist = arr[0]
        less = [x for x in arr[1:] if x < prist]
        more = [x for x in arr[1:] if x > prist]
        prislist = [x for x in arr[:] if x == prist]
        return qS_2(less) + prislist + qS_2(more)
def find_k(arr,k):
    tmp1 = qS_1(arr)
    tmp2 = qS_2(arr)
    print(tmp1)
    print(tmp2)
    print(tmp1[k])
    print(tmp2[k])

arr = [1,2,54,3,5,1,0,4,4,12,7]
find_k(arr,3)
