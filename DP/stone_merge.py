def toneMerge(tone):  
    n = len(tone)  
    if n<=1: return 0  
    if n==2: return sum(tone)  # 长度为2时，就是这两堆石头的和  
  
    dp = [[float('inf')]*n for _ in range(n)]  # 初始化dp  
    for i in range(n): dp[i][i] = 0  
    sm = [tone[0]]  # 记录 列表从0 到 n 的累加和  
    for i in range(1, n): sm.append(sm[i-1]+tone[i])  # 累加求和  
  
    for gap in range(1, n):  # i 到 j 的间隔  
        for i in range(n-gap):  
            j = i + gap  # 确定本次  i--j  
            tmp = sm[j] - [0, sm[i-1]][i > 0]  # 获取第 i 到第 j 堆石子的总数量  
            for k in range(i, j):  # 选择i 到 j 的最优解  
                dp[i][j] = min(dp[i][j],  dp[i][k] + dp[k+1][j] + tmp)  
  
    return dp[0][n-1]  
  
  
if __name__ == '__main__':  
    # tone = [7, 6, 5, 7, 100]  # 175  
    # tone = [3, 4, 5, 6, 4, 2]  # 61  
    # tone = [1, 2, 3, 4, 5]  # 33  
    tone = [186, 64, 35, 32, 103]  # 852  
    print(toneMerge(tone))  
