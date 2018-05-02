def delete(number,length):
    a = []
    while number:
        tmp = number%10
        a.append(tmp)
        number //= 10
    a.reverse()
    b = length
    while length:
        i = 0
        while i < len(a) and a[i] < a[i+1]:
            i += 1
        for j in range(i,len(a)-1):
            a[j] = a[j+1]
        length -= 1
    result = ""
    for k in a[:(len(a)-b)]:
        result += str(k)
    return int(result)
    
print(delete(178543,4))
