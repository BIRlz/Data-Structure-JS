#! bin/bash
function show(){
    echo "选择功能"
    echo "1.上班签到"
    echo "2.下班签到"
    echo "3.缺勤信息查询"
    echo "4.退出"
}

function classify(){
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
							#用户存在，并进行签到
							then 
								echo "登录成功："		  
        						hour=`date +%k`;  
        						#echo "$hour";  
        						if test $hour -ge 8  
        						then   
            						echo "签到成功！迟到！";  
            						echo "$name    ---迟到 ---时间: `date` " >>/home/check.dat  
        						else   
            						echo "签到成功";  
        						fi  
    fi 						else
								 echo "密码错误！"
							fi
						done
				else
					 echo "用户名错误！"
					 
						
				
}
