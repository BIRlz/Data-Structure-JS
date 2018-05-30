def lcs(s_1, s_2):
    m = len(s_1)
    n = len(s_2)
    init_list = [[0]*(n+1) for i in range(m+1)]
    lcs = []
    for i in range(1,m+1):
        for j in range(1,n+1):
            if s_1[i-1] == s_2[j-1]:
                init_list[i][j] = init_list[i-1][j-1]+1
                lcs.append(i-1)
            else:
                init_list[i][j] = max(init_list[i][j-1],init_list[i-1][j])
    tmp = []
    for k in lcs:
        if k not in tmp:
            tmp.append(k)
    res = ''
    for n in tmp:
        res += s_1[n]
    
    return init_list[i][j], res

if __name__ == "main":
    s_1 = 'afhfsq'
    s_2 = 'ffq'
    print(lcs(s_1,s_2))
