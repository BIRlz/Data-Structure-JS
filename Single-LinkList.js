//采用JX大佬讲的，构造函数标字段，原型里面添方法
function Node(data){
    this.data = data;
    this.next = null;
}
function Creat(){
    this.head = new Node('head');//头结点
}
//寻找目标节点，并且返回所在位置
Creat.prototype.Find = function(item){
    var curNode = this.head;
    while(curNode.next != null && curNode.data != item){
        curNode = curNode.next;
    }
    return curNode;
}
//插入。后插
Creat.prototype.Insert = function(item,index){
    var curNode = this.Find(index);
    var tempNode = new Node(item);
    tempNode.next = curNode.next;
    curNode.next = tempNode;
}
//输出节点的元素
Creat.prototype.Display = function(){
    var curNode = this.head;
    while(curNode.next != null){
        console.log(curNode.next.data);
        curNode = curNode.next;
    }
}
//寻找前驱节点
Creat.prototype.FindPrevious = function(item){
    var curNode = this.head;
    while( curNode.next != null && curNode.next.element != item ){
        curNode = curNode.next;
    }
    return curNode;
}
//删除节点
Creat.prototype.Remove = function(item){
    var preNode = this.FindPrevious(item);
    if(preNode.next != null){
        preNode.next = preNode.next.next;
    }
}

//测试
var temp = new Creat();
temp.Insert("LiZhuo","head");
temp.Insert("WuTong","LiZhuo");
temp.Insert("DuanWenJie","WuTong");
temp.Insert("AiLiYa","DuanWenJie");
temp.Display();
console.log(    );
temp.Remove("LiZhuo");
temp.Display();


