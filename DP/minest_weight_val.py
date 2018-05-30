import numpy as np
n= 6 #顶点数
m=np.zeros((n,n)) #存放最优值
s=np.zeros((n,n)) #存放最优决策
#定义一个顶点到其他顶点的权
weights=[[ 0, 2, 2, 3, 1, 4], [ 2, 0, 1, 5, 2, 3], [ 2, 1, 0, 2, 1, 4], [ 3, 5, 2, 0, 6, 2], [ 1, 2, 1, 6, 0, 1], [ 4, 3, 4, 2, 1, 0]]
#定义求三角形权之和的函数
def get_weight(i,j,k):
    if k<n:
        return weights[i][j]+weights[j][k]+weights[k][i]
#计算最优值并记录最优决策
def Minest_weight_val(n,m,s):
    for i in range( 1,n):
        m[i][i]= 0  
        s[i][i]= 0  
    for r in range( 2,n):
        for i in range( 1,n-r+ 1):
            j=i+r- 1  
            m[i][j]=m[i+ 1][j]+get_weight(i- 1,i,j)
            s[i][j]=i
        for k in range(i+ 1,j):
            t=m[i][k]+m[k+ 1][j]+get_weight(i- 1,k,j)
            if t<m[i][j]:
                m[i][j]=t
                s[i][j]=k
Minest_weight_val(n,m,s)
def Traceback(i,j,s):
    if i==j:
        return
    Traceback(i, int(s[i][j]), s)
    Traceback( int(s[i][j] + 1), j, s)
    print( 'v'+ str(i- 1)+ ',v'+ str(j)+ ',v'+ str(s[i][j]))
print( '此多边形的最优三角剖分值为：'+ str(m[ 1][n- 1]))
print( '最优三角剖分结构为：')
Traceback( 1, 5,s)
