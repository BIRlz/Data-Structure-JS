#include <stdlib.h>
#include <stdio.h>

int main(int argc, char *argv[])
{
    	system("cat /proc/sys/kernel/threads-max");
	int a;
	printf("please enter the max threads nums you want to motify:");
	scanf("%d", &a);
	char tmp[100] = {0};
	sprintf(tmp, "sysctl kernel.threads-max=%d",a);
	sysctl(tmp);
    	printf("%d\n",a);
	printf("success!");
    return 0;
}
