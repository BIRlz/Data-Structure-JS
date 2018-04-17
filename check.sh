#! bin/bash
function show(){
    echo "选择功能"
    echo "1.上班签到"
    echo "2.下班签到"
    echo "3.缺勤信息查询"
    echo "4.退出"
}

function checkin(){
    echo "请输入用户名:"
	read usrname
	echo "请输入密码:"
	read passd
	if test -e userinfo.dat
	then
	#获得所有的用户名
		cut -f 1 userinfo.dat | while read line1
			do 
				if test line1 = $usrname
				#用户名存在后，判断密码是否正确
				then cut -f 2 userinfo.dat | while read line2
					do 
						if test line2 = $passd
						#用户存在，并进行判断时间和签退
						then 
							echo "登录成功："		  
        						hour=`date +%k` 
        						if test $hour -ge 8  
        						then   
            							echo "签到成功！迟到！";  
            							echo "$usrname    ---迟到 ---时间: `date` " >>check.dat  
        						else   
            							echo "签到成功";  
        						fi  
     						else
							echo "密码错误！"
						fi
					done
				else
					 echo "用户名错误！"
				fi
			done
	else
		echo "此文件不存在！"
	fi
}
function checkout(){
    echo "请输入用户名:"
	read usrname
	echo "请输入密码:"
	read passd
	if test -e userinfo.dat
	then
	#获得所有的用户名
		cut -f 1 userinfo.dat | while read line1
			do 
				if test line1 = $usrname
				#用户名存在后，判断密码是否正确
				then cut -f 2 userinfo.dat | while read line2
					do 
						if test line2 = $passd
						#用户存在，并进行判断时间和签退
						then 
							echo "登录成功："		  
        						hour=`date +%k` 
        						if test $hour -lt 18  
        						then   
            							echo "签退成功！早退！";  
            							echo "$usrname    ---早退 ---时间: `date` " >>check.dat  
        						else   
            							echo "签退成功";  
        						fi  
     						else
							echo "密码错误！"
						fi
					done
				else
					 echo "用户名错误！"
				fi
			done
	else
		echo "此文件不存在！"
	fi
}
function inquire(){
	echo "请输入你要查看的员工用户名："
	read usrname
	echo "欢迎查看 $usrname 的记录"
	# 直接使用grep做正则匹配，输出check.dat文件中以$usrname 开头的那些行的信息
	grep $usrname check.dat
}
function logout(){
	echo "感谢使用！再见！"
	isExit = "1"
}
function main(){  
    while test "1"="1"  
    do   
        show; 
        read choice
        case $choice in  
            1)check_in  
            2)check_out; 
            3)inquire $usrname
            4)exit  
            *)echo "Incorrect input!"  
        esac  
        read delay 
        if test "$isExit" = "1"  
        then  
            clear  
            break  
        fi  
    done  
}  
main  
