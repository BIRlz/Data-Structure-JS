function Node(element) {
    this.element = element;
    this.next = null;
}
function LinkedList(){
    this.head = new Node('head'); // 头节点
}

// 遍历链表，查找给定数据
LinkedList.prototype.find = function(item) {
    var currNode = this.head;
    while(currNode.element != item){
        currNode = currNode.next;
    }
    return currNode;
}

// 在链表中插入节点，需要修改前一个链表的指向，和当前列表的指向
LinkedList.prototype.insert = function(newElement, item){
    var newNode = new Node(newElement);
    var currNode = this.find(item);
    newNode.next = currNode.next;
    currNode.next = newNode;
}

// 显示链表中的节点
LinkedList.prototype.display = function(){
    var currNode = this.head;
    while( currNode.next != null ){
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

// 返回节点的前一个节点
LinkedList.prototype.findPrevious = function(item){
    var currNode = this.head;
    while( currNode.next != null && currNode.next.element != item ){
        currNode = currNode.next;
    }
    return currNode;
}

// 从链表中删除一个节点
LinkedList.prototype.remove = function(item){
    var prevNode = this.findPrevious(item);
    if( prevNode.next != null ){
        // 让前一个节点指向待删除节点的后一个节点
        prevNode.next = prevNode.next.next;
    }
}

var temp = new LinkedList();
temp.insert("LiZhuo","head");
temp.insert("WuTong","LiZhuo");
temp.insert("DuanWenJie","WuTong");
temp.insert("AiLiYa","DuanWenJie");
temp.display();
console.log(    );
temp.remove("LiZhuo");
temp.display();
