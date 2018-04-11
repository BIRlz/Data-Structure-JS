def quickSort_1(arr):
    less = []
    pivotList = []
    more = []
    if len(arr) <= 1 :
        return arr
    else:
        pivot = arr[0]
        for i in arr:
            if i < pivot:
                less.append(i)
            elif i > pivot:
                more.append(i)
            else:
                pivotList.append(i)
        less = quickSort_1(less)
        more = quickSort_1(more)

        return less + pivotList + more

def quickSort_2(arr):
    if not arr:
        return []
    else:
        pivot = arr[0]
        less = [x for x in arr[1:] if x < pivot]
        more = [x for x in arr[1:] if x > pivot]
        return quickSort_2(less) + [pivot] + quickSort_2(more)
arr = [12,21,489,45,6123,4,894,561,23,489,4,56,3,1,2,8,8,0,9,3,2,1,45,789,4,561,54,89,7]
print(quickSort_1(arr))
print(quickSort_2(arr))