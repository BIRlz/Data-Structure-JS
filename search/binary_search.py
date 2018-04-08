#Binary Search
import sys
sys.setrecursionlimit(20000)
#递归
def binary_search_1(arr,k):
    left = 0
    right = len(arr) - 1
    mid = right // 2
    if mid == 0:
        return 'No Found!'
    if arr[mid] == k:
        return "Found!"
    if arr[mid] > k:
        return binary_search_1(arr[:mid],k)
    if arr[mid] < k:
        return binary_search_1(arr[mid+1:],k)
    else:
        return "No found!"
#递归
def binary_search_2(arr, k, start, end):
	    if start > end:
	        return "No Found"
	    mid = start + (end - start) // 2
	    if arr[mid] > k:
	    	return binary_search_2(arr, k, start, mid - 1)
	    if arr[mid] < k:
	    	return binary_search_2(arr, k, mid + 1, end)
	    return "Position = " + str(mid)
#尾递归
def binary_search_3(arr,k):
    left = 0
    right = len(arr) -1
    while left <= right:
        mid = int((left+right)/2)
        if arr[mid] == k:
            return 'Found!'
        elif arr[mid] > k:
            right = mid - 1
        elif arr[mid] < k:
            left = mid + 1
    return 'No Found!'

arr = [-1,4,6,8,12,34,55,78]
k = 24
print(binary_search_1(arr,k))
print(binary_search_2(arr,k,0,len(arr)-1))
print(binary_search_3(arr,k))


