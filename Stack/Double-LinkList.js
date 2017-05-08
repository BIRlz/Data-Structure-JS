//以下构建了一个双向链表
function Node(ele){
    this.element = ele;
    this.next    = null;
    this.pre     = null;
}

//初始化了一个带头节点的双向链表
function LinkList(){
    this.head = new Node('head');
}

//构造函数标字段，原型里面添方法
//下面的是一个从前面查找的方法
LinkList.prototype.FindFromFront = function(item){
    var curNode = this.head;
    while(curNode.next != null && curNode.element != item){
        curNode = curNode.next;
   }
   return curNode;
}
//下面是一个插入的方法，使用了头插，是因为，因为有了前驱节点，
//所以获得当前节点的头结点很方便
LinkList.prototype.Insert = function(index,ele){
    var curNode = this.FindFromFront(index);
    var tempNode = new Node(ele);
    tempNode.next = curNode.next;
    tempNode.pre = curNode;
    curNode.next = tempNode;
}
//下面是一个寻找链表尾节点的方法，且可以变形为获得链表长度的方法
LinkList.prototype.FindLast = function(){
    var curNode = this.head;
    //var length;
    while(curNode.next != null){
        curNode = curNode.next;
        //length++;
    }
    return curNode;//获得尾节点
    //return length;//获得长度
}

//删除指定元素的所在节点
LinkList.prototype.Remove = function(index){
    var curNode = this.FindFromFront(index);
    if(curNode.next != null){
        curNode.pre.next = curNode.next;
        curNode.next.pre = curNode.pre;
        curNode.next = null;
        curNode.pre = null;
    }
}
//输出链表节点的元素
LinkList.prototype.Display = function(){
    var curNode = this.head;
    while(curNode.next != null){
        console.log(curNode.next.element);
        curNode = curNode.next;
    }
}
//反向输出节点的元素
LinkList.prototype.DisplayReverse = function(){
    var curNode = this.FindLast();
    while(curNode.pre != null){
        console.log(curNode.element);
        curNode = curNode.pre;
    }
}
var temp = new LinkList();
temp.Insert("LiZhuo","head");
temp.Insert("WuTong","LiZhuo");
temp.Insert("DuanWenJie","WuTong");
temp.Insert("AiLiYa","DuanWenJie");
temp.Display();
console.log(    );
temp.Remove("LiZhuo");
temp.DisplayReverse();
