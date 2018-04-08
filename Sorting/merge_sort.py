def mergeSort(arr):
    if len(arr) <= 1:
        return arr
    num = int(len(arr) / 2)
    left = mergeSort(arr[:num])
    right = mergeSort(arr[num:])
    return merge(left,right)

def merge(left,right):
    l,r = 0,0
    result = []
    while l<len(left) and r < len(right):
        if left[l] < right[r]:
            result.append(left[l])
            l += 1
        else:
            result.append(right[r])
            r += 1
    result += left[l:]
    result += right[r:]
    return result

arr = [123,5,34,54,12,3556,1,344553654,674,56,53,6,3,12,313,5346,345,6,5,234,1,34,21,6,53,62,42]
dict = {}
'''
for item in arr:
    if item not in dict:
        dict[item] = 0
    dict[item] += 1
print([(k,dict[k]) for k in sorted(dict.keys())]  )
print(mergeSort(arr))
'''
